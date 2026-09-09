# Mudbase Relationships & Populate (JS/TS)

Declared relationships between collections, plus a `?populate=` fetch on the data endpoints
to resolve foreign keys into full documents. This document covers the two pieces the SDK
adds on top of the generated `DataApi` and `RelationshipsApi`:

1. `sdk.relationships` - CRUD for the relationship declarations themselves.
2. `populate` support on `DataApi.listData` / `DataApi.getData`, plus an optional typed,
   fluent `DataQuery` builder in `query.ts` for callers who want chainable `.populate()`
   calls and a populated result type instead of `any`.

```bash
npm install mudbase-sdk
```

> Status: the backend for this feature (relational-ergonomics phases 1-7, PRs #103/#104/
> #105/#108/#110/#113) has merged to `mudbase-server` `main`. `api.ts`'s `populate`
> parameters plus the whole `RelationshipsApi` class are still hand-patched ahead of the
> OpenAPI spec (see `.openapi-generator-ignore`) - once `openapi.yaml` is updated for the
> `/data` list/get endpoints' relationship query params and the generator re-run, these
> hand-patches should be replaced by generated output. Deep/relationship-field filtering
> (`?author.name=`, PR #105) and sort-by-relationship-field (`?sort=-author.name`, PR #108)
> are both live server-side and both have a typed builder method below
> (`.whereRelated()` / `.sortByRelated()`).

## Declaring a relationship

```ts
import { Configuration, RelationshipsApi } from "mudbase-sdk";

const config = new Configuration({ accessToken: process.env.MUDBASE_TOKEN });
const relationships = new RelationshipsApi(config);

const { data } = await relationships.createRelationship({
  projectId,
  createRelationshipRequest: {
    sourceCollection: "posts",
    targetCollection: "users",
    field: "author",
    type: "many-to-one",
    onDelete: "restrict",
  },
});
```

`type` is one of `one-to-one`, `one-to-many`, `many-to-one`, `many-to-many`. `onDelete` is
one of `restrict` (default), `cascade`, `set-null`, `no-action`. Requires the caller to be
a project owner or admin.

## Other relationship operations

```ts
await relationships.listRelationships({ projectId });
await relationships.listRelationships({ projectId, sourceCollection: "posts" });
await relationships.getRelationship({ projectId, relationshipId });
await relationships.updateRelationship({
  projectId,
  relationshipId,
  updateRelationshipRequest: { onDelete: "cascade" },
});
await relationships.deleteRelationship({ projectId, relationshipId });

// Owner/admin only - scans every declared relationship for foreign-key values that point
// at a document which no longer exists. Detection only; it does not repair anything.
const { data, totalOrphans } = await relationships.getRelationshipOrphans({ projectId });
```

## Populating on read: the generated way

`populate` accepts a single field, a dot-path for a nested relationship, or an array of
either, and composes with `sort`, `page`, `limit`, and `filter`:

```ts
import { DataApi } from "mudbase-sdk";

const dataApi = new DataApi(config);

// ?populate=author
await dataApi.listData({ projectId, collectionId: "posts", populate: "author" });

// ?populate=author,comments
await dataApi.listData({ projectId, collectionId: "posts", populate: ["author", "comments"] });

// ?populate=comments.author (nested - resolves comments, then each comment's author)
await dataApi.listData({ projectId, collectionId: "posts", populate: "comments.author" });

// composes with pagination/sort/filter
await dataApi.listData({
  projectId,
  collectionId: "posts",
  populate: "author",
  sort: "-createdAt",
  page: 1,
  limit: 20,
});
```

`data[number].author` on the response is typed as `any` here, same as the rest of the
generated document shape - there is no per-collection codegen elsewhere in this SDK. For a
typed result, use the fluent builder below.

## Populating on read: the typed, fluent way

`query.ts` adds an opt-in `DataQuery` builder for callers who declare their own base and
relation types. It does not attempt a full codegen rebuild - only enough typing to widen a
populated field from its raw foreign-key id to the resolved type.

```ts
import { DataApi, typedCollection } from "mudbase-sdk";

interface User {
  _id: string;
  name: string;
}

interface Comment {
  _id: string;
  body: string;
  author: string; // raw foreign key until populated
}

interface Post {
  _id: string;
  title: string;
  author: string;   // raw foreign key until populated
  comments: string[];
}

// Maps each of Post's relationship fields to what it resolves to once populated.
interface PostRelations {
  author: User;
  comments: Comment[];
}

const dataApi = new DataApi(config);
const posts = typedCollection<Post, PostRelations>(dataApi, projectId, "posts");

const { data } = await posts
  .populate("author")
  .populate("comments")
  .sort("-createdAt")
  .page(1)
  .limit(20)
  .list();

data[0].author.name; // typed as User, not `any`

const one = await typedCollection<Post, PostRelations>(dataApi, projectId, "posts")
  .populate("comments.author")
  .get(postId);
```

Repeated `.populate()` calls accumulate rather than overwrite, so
`.populate("author").populate("comments")` is equivalent to `.populate(["author", "comments"])`
and both collapse to a single `?populate=author,comments` request. A dot-path key (e.g.
`"comments.author"`) is passed through to the server unsplit and is not individually
type-checked against `PostRelations` (nested relations are not modeled in the type, only
resolved at the wire level) - the base-level keys (`"author"`, `"comments"`) are.

`.filter()`/`.where()` on `DataQuery` only ever apply to the base collection's own fields.
For a populated/relationship field, use `.whereRelated()` and `.sortByRelated()` below -
they use a different real backend mechanism (a top-level dotted query param), not a nested
key inside `?filter=`.

## Filtering, sorting, and paginating: the full fluent builder

`.where()` filters the base collection's own fields with an operator, composing into the
same `?filter=` JSON parameter as `.filter()`. `.whereRelated()` and `.sortByRelated()`
reach onto a *related* collection's fields, using the backend's relationship-field-filter
(PR #105) and sort-by-relationship-field (PR #108) query params:

```ts
const { data } = await typedCollection<Post, PostRelations>(dataApi, projectId, "posts")
  .where("status", "==", "published")
  .where("views", ">", 100)
  .populate("author")
  .whereRelated("author.role", "admin")   // ?author.role=admin - resolved via resolveRelationshipFilters
  .sortByRelated("author.name", "desc")   // ?sort=-author.name - resolved via resolveRelationshipSortKeys
  .limit(20)
  .list();

data[0].author.name; // typed as User, populated and filtered to admins only
```

`.where(field, operator, value)` accepts `"==" | "!=" | ">" | ">=" | "<" | "<=" | "in" |
"nin"` - the exact subset of `utils/querySanitizer.js`'s server-side operator whitelist
that has a single-value comparison meaning. This is a client-side convenience only: the
server independently re-validates and rejects any operator outside its own whitelist
regardless of what a client sends, so `.where()` cannot be used to bypass or weaken that
enforcement. Repeated `.where()` calls on the same field merge
(`.where("price", ">", 10).where("price", "<", 100)` -> `{ price: { $gt: 10, $lt: 100 } }`);
`.filter()` shallow-merges a raw filter object in on top of whatever `.where()`/`.filter()`
already built.

`.whereRelated(path, value)` is equality-only, matching the real backend contract: a
dotted query param (`?author.role=admin`) can only ever carry one raw string value, coerced
server-side into bool/number/string - there is no `>`/`in`/etc. mechanism for a
relationship-field filter today. `path` must contain a dot (a relationship traversal); the
backend implicitly joins whatever relationship it names to evaluate the filter, so calling
`.populate()` first is not required for `.whereRelated()` to work.

`.sortByRelated(path, direction)` composes into the same `?sort=` parameter as `.sort()`.
Only single-value relationship hops (many-to-one/one-to-one) resolve server-side - a path
through a one-to-many/many-to-many relationship has no single well-defined sort value and
is left unresolved, matching `resolveRelationshipSortKeys`'s documented scope limit.
