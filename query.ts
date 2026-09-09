/**
 * MUDBASESDK - fluent relationship/populate query builder (relational-ergonomics item 16)
 *
 * Hand-written, not generated from OpenAPI (same status as realtime.ts - see
 * .openapi-generator-ignore and REALTIME.md for the precedent). This file is a small,
 * opt-in fluent layer over the generated DataApi that composes the several separate
 * `?populate=`/`?sort=`/`?filter=`/relationship-field-filter REST query-param mechanisms
 * the backend's declared-relationship engine accepts (backend PRs #103, #105, #108) into
 * one chainable API, so callers stop hand-assembling those query strings themselves:
 *
 *   1. Chainable/repeatable `.populate("author")` calls that collapse to the DataApi
 *      `populate` array parameter, instead of building that array by hand.
 *   2. A `.populate("comments.author")` dot-path passthrough for nested relationships.
 *   3. `.where(field, operator, value)` for filtering on the base collection's own
 *      fields, composing into the same `?filter=` JSON parameter DataApi already
 *      accepts. Operators are restricted to the exact whitelist the backend's
 *      `utils/querySanitizer.js` allows server-side (`==`/`!=`/`>`/`>=`/`<`/`<=`/`in`/
 *      `nin`) - this is a client-side convenience only, the server independently
 *      re-validates every filter it receives regardless of what a client sends.
 *   4. `.whereRelated(path, value)` for a relationship-field filter (e.g.
 *      `.whereRelated("author.role", "admin")`), composing into the dotted top-level
 *      query params `routes/data.js`'s `resolveRelationshipFilters` (backend PR #105)
 *      resolves - `?author.role=admin`. Equality only, matching the real backend
 *      contract: a dotted query param can only ever carry one raw string value, coerced
 *      server-side by `coerceFilterValue` (bool/number/string), never a Mongo operator
 *      object - there is no server-side mechanism for `>`/`in`/etc. on a relationship
 *      field today, so this method does not pretend to offer one.
 *   5. `.sortByRelated(path, direction)` for sort-by-relationship-field (e.g.
 *      `.sortByRelated("author.name", "desc")`), composing into the same `?sort=`
 *      parameter as `.sort()` (backend PR #108's `resolveRelationshipSortKeys`
 *      resolves a dotted `?sort=` field the same way as a relationship-field filter).
 *   6. A typed result shape: when `TRelations` declares which fields on `TBase` are
 *      foreign keys and what they resolve to, each `.populate(key)` call widens the
 *      builder's result type for that field from the raw id to the related type.
 *
 * There is no per-collection codegen elsewhere in this SDK, so the typing here is
 * intentionally minimal: callers declare their own `TBase` and `TRelations` interfaces
 * and pass them as generics to `typedCollection<TBase, TRelations>()`. This does not
 * attempt a full codegen rebuild, only the widening needed for `.populate()`.
 *
 * This is a pure client-side convenience layer: every method here only ever composes
 * the exact REST query params `routes/data.js` and `services/relationshipService.js`
 * already parse, validate, and enforce permissions on server-side (population
 * permission-safety, filter sanitization, relationship-chain resolution). Nothing here
 * invents a new backend capability, weakens, or duplicates that server-side enforcement -
 * a malformed or unauthorized query composed here still gets rejected or scoped exactly
 * as if the caller had built the query string by hand.
 */

import type { DataApi, DataListResponse, DataResponse } from './api';
import type { RawAxiosRequestConfig } from 'axios';

/**
 * Widens `TBase` by replacing the keys in `TKeys` (foreign keys on the base document, per
 * `TRelations`) with their resolved, populated type. `TRelations` maps a base document's
 * relationship field name to the type it resolves to when populated, e.g.:
 *
 *   interface Post { _id: string; title: string; author: string; comments: string[] }
 *   interface PostRelations { author: User; comments: Comment[] }
 *   type PostWithAuthor = Populate<Post, PostRelations, 'author'>; // author: User
 */
export type Populate<TBase, TRelations, TKeys extends keyof TRelations> =
    Omit<TBase, TKeys & keyof TBase> & Pick<TRelations, TKeys>;

/**
 * A single populate key: either a declared relationship field on `TRelations` (typed) or a
 * dot-path string for a nested relationship (e.g. 'comments.author'), which is not
 * individually type-checked but is passed through to the server unchanged.
 */
export type PopulateKey<TRelations> = (keyof TRelations & string) | (string & {});

/**
 * `.where(field, operator, value)` operators, restricted to the exact subset of
 * `utils/querySanitizer.js`'s server-side operator whitelist that has an unambiguous
 * single-value comparison meaning (`$eq`/`$ne`/`$gt`/`$gte`/`$lt`/`$lte`/`$in`/`$nin`).
 * Deliberately does not expose `$regex` (blocked server-side as a DoS vector) or the
 * logical/element/array/geo operators (`$and`, `$exists`, `$elemMatch`, ...) - callers who
 * need those can still pass a raw filter object to `.filter()` directly.
 */
export type WhereOperator = "==" | "!=" | ">" | ">=" | "<" | "<=" | "in" | "nin";

const WHERE_OPERATOR_TO_MONGO: Record<WhereOperator, string | null> = {
    "==": null,
    "!=": "$ne",
    ">": "$gt",
    ">=": "$gte",
    "<": "$lt",
    "<=": "$lte",
    "in": "$in",
    "nin": "$nin",
};

/**
 * Fluent, chainable query builder over DataApi's listData/getData, scoped to one collection.
 * Construct one via `typedCollection()` rather than directly.
 */
export class DataQuery<TBase, TRelations = Record<string, never>, TPopulated extends keyof TRelations = never> {
    private readonly populateKeys: Array<string> = [];
    private readonly sortTokens: Array<string> = [];
    private pageNum?: number;
    private limitNum?: number;
    private readonly filterObj: Record<string, unknown> = {};
    private readonly relatedFilters: Record<string, string | number | boolean> = {};

    constructor(
        private readonly dataApi: DataApi,
        private readonly projectId: string,
        private readonly collectionId: string,
    ) {}

    /**
     * Add one relationship field to resolve. Repeatable: `.populate("author").populate("comments")`
     * collapses to `populate: ["author", "comments"]` on the request, which the generated
     * DataApi joins into `?populate=author,comments`. A dot-path key (e.g. "comments.author")
     * resolves a nested relationship and is passed through unsplit.
     */
    populate<K extends PopulateKey<TRelations>>(key: K | Array<K>): DataQuery<TBase, TRelations, TPopulated | (K & keyof TRelations)> {
        const keys = Array.isArray(key) ? key : [key];
        for (const k of keys) {
            if (!this.populateKeys.includes(k)) {
                this.populateKeys.push(k);
            }
        }
        return this as unknown as DataQuery<TBase, TRelations, TPopulated | (K & keyof TRelations)>;
    }

    /**
     * Sort expression on the base collection's own fields, passed straight through to
     * DataApi's `sort` parameter (e.g. "-createdAt"). Repeatable and de-duplicated - each
     * call appends a field, and multiple sort fields collapse into the same comma-joined
     * `?sort=` string the backend's `parseSortStage` already accepts (e.g.
     * `.sort("-createdAt").sort("title")` -> `?sort=-createdAt,title`). For sorting by a
     * field on a *related* collection, use `.sortByRelated()` instead.
     */
    sort(field: string): this {
        if (!this.sortTokens.includes(field)) {
            this.sortTokens.push(field);
        }
        return this;
    }

    /**
     * Sort by a field on a related collection (backend PR #108,
     * `resolveRelationshipSortKeys`), e.g. `.sortByRelated("author.name", "desc")` composes
     * into `?sort=-author.name`. `path` must be a dotted relationship path (a field on the
     * base collection itself belongs in `.sort()`); only single-value relationship hops
     * (many-to-one/one-to-one) resolve server-side - a path through a one-to-many/many-to-many
     * relationship is left unresolved by the backend rather than guessed at, matching
     * `resolveRelationshipSortKeys`'s own documented scope limit.
     */
    sortByRelated(path: string, direction: "asc" | "desc" = "asc"): this {
        if (!path || !path.includes(".")) {
            throw new TypeError(
                `sortByRelated(path, direction) needs a dotted relationship path, e.g. "author.name" - for a field on "${this.collectionId}" itself, use .sort() instead.`,
            );
        }
        const token = direction === "desc" ? `-${path}` : path;
        if (!this.sortTokens.includes(token)) {
            this.sortTokens.push(token);
        }
        return this;
    }

    /** Page number, 1-indexed, passed straight through to DataApi's `page` parameter. */
    page(n: number): this {
        this.pageNum = n;
        return this;
    }

    /** Page size, passed straight through to DataApi's `limit` parameter. */
    limit(n: number): this {
        this.limitNum = n;
        return this;
    }

    /**
     * Filter on the base collection's own fields (JSON-serialized, matching DataApi's `filter`
     * parameter). Shallow-merges into whatever `.filter()`/`.where()` already built up, so
     * `.filter({ published: true }).filter({ authorType: "staff" })` and
     * `.filter({ published: true }).where("views", ">", 100)` both compose rather than
     * overwrite. Filtering on a populated/relationship field (e.g. `{"author.name": "..."}`)
     * is not supported through this method - see `.whereRelated()` for that, which uses the
     * real backend mechanism (a dotted top-level query param, not a nested filter key).
     */
    filter(query: Record<string, unknown>): this {
        Object.assign(this.filterObj, query);
        return this;
    }

    /**
     * Filter on one of the base collection's own fields with a comparison operator, composing
     * into the same `?filter=` JSON parameter as `.filter()`. `operator` is restricted to
     * `utils/querySanitizer.js`'s server-side allow-list (see `WhereOperator`) - this is a
     * client-side convenience, not a bypass: the server independently re-validates and rejects
     * any operator outside its own whitelist regardless of what a client sends. Repeatable per
     * field: `.where("price", ">", 10).where("price", "<", 100)` merges into
     * `{ price: { $gt: 10, $lt: 100 } }`. Mixing `==` with another operator on the same field
     * is not supported (equality and a range/set comparison on the same field at once has no
     * single well-defined merge) - the later call's value simply replaces the field entirely.
     */
    where(field: string, operator: WhereOperator, value: unknown): this {
        if (!(operator in WHERE_OPERATOR_TO_MONGO)) {
            throw new TypeError(
                `where(): unsupported operator "${operator}". Supported: ${Object.keys(WHERE_OPERATOR_TO_MONGO).join(", ")} - matching utils/querySanitizer.js's server-side operator allow-list.`,
            );
        }
        const mongoOp = WHERE_OPERATOR_TO_MONGO[operator];
        if (mongoOp === null) {
            this.filterObj[field] = value;
            return this;
        }
        const existing = this.filterObj[field];
        const existingIsOperatorObject = existing !== null && typeof existing === "object" && !Array.isArray(existing);
        this.filterObj[field] = { ...(existingIsOperatorObject ? existing as Record<string, unknown> : {}), [mongoOp]: value };
        return this;
    }

    /**
     * Filter on a field of a *related* collection (backend PR #105,
     * `resolveRelationshipFilters`), e.g. `.whereRelated("author.role", "admin")` composes into
     * the top-level query param `?author.role=admin` - not the `?filter=` JSON object `.where()`
     * and `.filter()` build. The backend implicitly joins whatever relationship the path
     * traverses to evaluate this filter, whether or not the same key was also passed to
     * `.populate()`, so calling `.populate()` first is not required. Equality only, matching
     * the real backend contract (a dotted query param is always one raw string, coerced
     * server-side by `coerceFilterValue` into bool/number/string - there is no `>`/`in`/etc.
     * mechanism for a relationship-field filter today). `path` must be a dotted relationship
     * path resolving through at least one declared relationship (validated server-side; an
     * unrecognized path is silently ignored there, matching `?populate`'s own behavior for an
     * unrecognized key).
     */
    whereRelated(path: string, value: string | number | boolean): this {
        if (!path || !path.includes(".")) {
            throw new TypeError(
                `whereRelated(path, value) needs a dotted relationship path, e.g. "author.role" - for a field on "${this.collectionId}" itself, use .where()/.filter() instead.`,
            );
        }
        this.relatedFilters[path] = value;
        return this;
    }

    private populateParam(): string | Array<string> | undefined {
        if (this.populateKeys.length === 0) {
            return undefined;
        }
        return this.populateKeys.length === 1 ? this.populateKeys[0] : [...this.populateKeys];
    }

    private sortParam(): string | undefined {
        return this.sortTokens.length > 0 ? this.sortTokens.join(",") : undefined;
    }

    private filterParam(): string | undefined {
        return Object.keys(this.filterObj).length > 0 ? JSON.stringify(this.filterObj) : undefined;
    }

    /**
     * `.whereRelated()` conditions, merged onto the outgoing axios request's `params` config so
     * they land on the URL as extra top-level query params alongside the ones DataApi's own
     * generated param creator already builds (`?populate=...&sort=...&author.role=admin`).
     * axios's own request pipeline appends `config.params` onto a URL that already carries a
     * query string (verified: `buildURL` in axios core), so this composes cleanly with every
     * other parameter this builder sets without touching the generated client's own URL
     * construction. Returns `undefined` (rather than `{}`) when no `.whereRelated()` call was
     * made, so `.list()`/`.get()` don't attach an empty `params` object to every request.
     */
    private relatedFilterParams(): Record<string, string | number | boolean> | undefined {
        return Object.keys(this.relatedFilters).length > 0 ? { ...this.relatedFilters } : undefined;
    }

    private mergeOptions(options?: RawAxiosRequestConfig): RawAxiosRequestConfig | undefined {
        const relatedParams = this.relatedFilterParams();
        if (!relatedParams) {
            return options;
        }
        return { ...options, params: { ...options?.params, ...relatedParams } };
    }

    /**
     * Run the query as a list. Resolves to the same `{ data, pagination }` envelope as
     * `DataApi.listData`, with `data` typed as `Populate<TBase, TRelations, TPopulated>[]`.
     */
    async list(options?: RawAxiosRequestConfig): Promise<{ data: Array<Populate<TBase, TRelations, TPopulated>>; pagination: DataListResponse['pagination'] }> {
        const response = await this.dataApi.listData({
            projectId: this.projectId,
            collectionId: this.collectionId,
            page: this.pageNum,
            limit: this.limitNum,
            sort: this.sortParam(),
            filter: this.filterParam(),
            populate: this.populateParam(),
        }, this.mergeOptions(options));
        return {
            data: (response.data.data ?? []) as unknown as Array<Populate<TBase, TRelations, TPopulated>>,
            pagination: response.data.pagination,
        };
    }

    /**
     * Fetch a single document by id, with the same populate/typing rules as `.list()`.
     * `.whereRelated()` conditions do not apply to a single-document fetch by id (there is
     * nothing left to filter - the id already names one document) and are not sent here.
     */
    async get(documentId: string, options?: RawAxiosRequestConfig): Promise<Populate<TBase, TRelations, TPopulated>> {
        const response = await this.dataApi.getData({
            projectId: this.projectId,
            collectionId: this.collectionId,
            documentId,
            populate: this.populateParam(),
        }, options);
        return (response.data.data as DataResponse['data']) as unknown as Populate<TBase, TRelations, TPopulated>;
    }
}

/**
 * Start a typed, fluent query against one collection, e.g.:
 *
 *   const posts = typedCollection<Post, PostRelations>(dataApi, projectId, "posts");
 *   const { data } = await posts.populate("author").populate("comments.author").sort("-createdAt").list();
 *   // data[number].author is typed as User, not the raw id string
 *
 * Composing every mechanism at once (relationship-ergonomics item 16):
 *
 *   const { data } = await typedCollection<Post, PostRelations>(dataApi, projectId, "posts")
 *     .where("status", "==", "published")
 *     .populate("author")
 *     .whereRelated("author.role", "admin")
 *     .sortByRelated("author.name", "desc")
 *     .limit(20)
 *     .list();
 *   // -> GET .../data?filter=%7B%22status%22%3A%22published%22%7D&populate=author
 *   //    &sort=-author.name&limit=20&author.role=admin
 */
export function typedCollection<TBase, TRelations = Record<string, never>>(
    dataApi: DataApi,
    projectId: string,
    collectionId: string,
): DataQuery<TBase, TRelations> {
    return new DataQuery<TBase, TRelations>(dataApi, projectId, collectionId);
}
