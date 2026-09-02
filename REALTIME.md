# Mudbase Realtime (JS/TS)

Firebase-style live data listeners for the Mudbase database. Subscribe to document and
query changes with a single `.onSnapshot()` call and get an unsubscribe function back - no
manual socket wiring, no raw `emit`/`on`.

```bash
npm install mudbase-sdk
```

`socket.io-client` ships as a dependency, so there is nothing else to install.

## Quick start

```ts
import { MudbaseRealtime } from "mudbase-sdk";

const rt = new MudbaseRealtime({
  projectId: process.env.MUDBASE_PROJECT_ID!,
  token: process.env.MUDBASE_TOKEN!, // a Mudbase JWT
});

// Live collection changes (create / update / delete)
const unsub = rt.collection("posts").onSnapshot((change) => {
  console.log(change.action, change.data); // "create" | "update" | "delete"
});

// later
unsub();
```

Every `.onSnapshot()` returns an `Unsubscribe` function. Call it to stop listening; call
`rt.close()` to tear down the socket and drop all subscriptions at once.

## Reusing the REST SDK's credentials

If you already build a REST `Configuration`, pass it straight through - the realtime client
reuses its `accessToken` and `basePath`:

```ts
import { Configuration, MudbaseRealtime } from "mudbase-sdk";

const config = new Configuration({
  basePath: "https://cloud.mudbase.dev",
  accessToken: process.env.MUDBASE_TOKEN,
});

const rt = new MudbaseRealtime({ projectId, configuration: config });
```

For tokens that rotate, pass a function instead of a string:

```ts
const rt = new MudbaseRealtime({
  projectId,
  token: async () => await getFreshJwt(),
});
```

## Listening to a single document

```ts
const unsub = rt.doc("posts", postId).onSnapshot((change) => {
  if (change.action === "delete") { /* removed */ }
  else { /* change.data is the current document */ }
});
```

## Live queries

`.where(query)` takes a Mongo-style filter. Unlike collection/document listeners (which
deliver deltas), a query listener receives the **full current set** of matching documents on
every change, because the server re-runs the query for you:

```ts
const unsub = rt
  .collection("posts")
  .where({ published: true })
  .onSnapshot((snapshot) => {
    console.log(snapshot.documents); // all currently-matching documents
  });
```

## Handling errors

Pass a second callback to be notified of subscription/permission/connection errors:

```ts
rt.collection("posts").onSnapshot(
  (change) => { /* ... */ },
  (err) => { console.error("realtime error:", err.message); },
);
```

The server enforces per-subscriber, row-level read permissions: you only receive changes to
documents you are allowed to read, and a subscription you lack permission for surfaces an
error to this handler.

## What you receive

`collection(...).onSnapshot` and `doc(...).onSnapshot` deliver a `MudbaseChange`:

```ts
interface MudbaseChange<T = any> {
  action: "create" | "update" | "delete"
        | "collection_created" | "collection_updated" | "collection_deleted";
  projectId: string;
  collectionId: string;
  data: T;        // the document; for "delete" this is { id }
  timestamp: string;
}
```

`collection(...).where(...).onSnapshot` delivers a `MudbaseQuerySnapshot`:

```ts
interface MudbaseQuerySnapshot<T = any> {
  queryId: string;
  projectId: string;
  collectionId: string;
  documents: T[]; // the full current matching set
  timestamp: string;
}
```

## Reconnection

The client reconnects automatically and re-establishes every active subscription after the
socket comes back, so your `.onSnapshot()` callbacks keep firing across transient network
drops without any extra code.

## Notes

- A single `MudbaseRealtime` owns one shared socket connection for all its subscriptions.
- The connection opens lazily on the first `.onSnapshot()` call.
- `document.onSnapshot` is implemented by subscribing to the document's collection and
  filtering to that id, because the live server delivers document changes on the collection
  channel - this is transparent to you; you still just get changes for the one document.
