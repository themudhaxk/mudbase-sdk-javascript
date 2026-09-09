/**
 * MUDBASESDK - relationship/populate query ergonomics
 *
 * Hand-written, not generated from OpenAPI (same status as realtime.ts - see
 * .openapi-generator-ignore and REALTIME.md for the precedent). This file adds a small,
 * opt-in fluent layer on top of the generated DataApi so callers working with the
 * declared-relationship engine (backend PR feat/relational-ergonomics-phase-1) get:
 *
 *   1. Chainable/repeatable `.populate("author")` calls that collapse to the DataApi
 *      `populate` array parameter, instead of building that array by hand.
 *   2. A `.populate("comments.author")` dot-path passthrough for nested relationships.
 *   3. A typed result shape: when `TRelations` declares which fields on `TBase` are
 *      foreign keys and what they resolve to, each `.populate(key)` call widens the
 *      builder's result type for that field from the raw id to the related type.
 *
 * There is no per-collection codegen elsewhere in this SDK, so the typing here is
 * intentionally minimal: callers declare their own `TBase` and `TRelations` interfaces
 * and pass them as generics to `typedCollection<TBase, TRelations>()`. This does not
 * attempt a full codegen rebuild, only the widening needed for `.populate()`.
 *
 * Not covered (matches the real backend contract, see routes/data.js): deep/relationship
 * field filtering such as `?author.name=` is not implemented server-side, so `.filter()`
 * here only ever applies to the base collection's own fields.
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
 * Fluent, chainable query builder over DataApi's listData/getData, scoped to one collection.
 * Construct one via `typedCollection()` rather than directly.
 */
export class DataQuery<TBase, TRelations = Record<string, never>, TPopulated extends keyof TRelations = never> {
    private readonly populateKeys: Array<string> = [];
    private sortField?: string;
    private pageNum?: number;
    private limitNum?: number;
    private filterObj?: Record<string, unknown>;

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

    /** Sort expression, passed straight through to DataApi's `sort` parameter (e.g. "-createdAt"). */
    sort(field: string): this {
        this.sortField = field;
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
     * parameter). Filtering on a populated/relationship field (e.g. `{"author.name": "..."}`)
     * is not supported server-side yet - see routes/data.js - so it is not exposed here either.
     */
    filter(query: Record<string, unknown>): this {
        this.filterObj = query;
        return this;
    }

    private populateParam(): string | Array<string> | undefined {
        if (this.populateKeys.length === 0) {
            return undefined;
        }
        return this.populateKeys.length === 1 ? this.populateKeys[0] : [...this.populateKeys];
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
            sort: this.sortField,
            filter: this.filterObj ? JSON.stringify(this.filterObj) : undefined,
            populate: this.populateParam(),
        }, options);
        return {
            data: (response.data.data ?? []) as unknown as Array<Populate<TBase, TRelations, TPopulated>>,
            pagination: response.data.pagination,
        };
    }

    /**
     * Fetch a single document by id, with the same populate/typing rules as `.list()`.
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
 */
export function typedCollection<TBase, TRelations = Record<string, never>>(
    dataApi: DataApi,
    projectId: string,
    collectionId: string,
): DataQuery<TBase, TRelations> {
    return new DataQuery<TBase, TRelations>(dataApi, projectId, collectionId);
}
