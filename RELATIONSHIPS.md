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

> Status: the backend for this feature (relational-ergonomics-phase-1) has not merged to
> main yet, so treat this as a preview surface - the wire contract can still move before
> it lands, and `api.ts`'s `populate` parameters plus the whole `RelationshipsApi` class are
> hand-patched ahead of the OpenAPI spec (see `.openapi-generator-ignore`). Deep/relationship
> field filtering, e.g. `?author.name=`, is explicitly not implemented server-side yet - the
> SDK does not expose it either, to avoid implying it works.

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

`.filter()` on `DataQuery` only ever applies to the base collection's own fields, matching
the server: filtering on a populated/relationship field (e.g. `{"author.name": "..."}`) is
not implemented server-side yet.
