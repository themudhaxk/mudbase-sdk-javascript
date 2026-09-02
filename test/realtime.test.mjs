/**
 * Realtime helper tests. Uses Node's built-in test runner (node:test) and a fake Socket.IO
 * client injected via the `ioClient` option, so no live server or extra test framework is
 * needed. Run with `npm test` (which builds first so this can import ./dist/esm/realtime.js).
 */
import { test } from "node:test";
import assert from "node:assert/strict";
// Import the CommonJS build: the generated ESM bundle uses extensionless relative imports
// that Node's native ESM loader can't resolve without a bundler, so the CJS output is the
// one that loads standalone here.
import { MudbaseRealtime } from "../dist/realtime.js";

/** A minimal in-memory stand-in for a Socket.IO client socket. */
function makeFakeSocket() {
  const handlers = new Map();
  const emitted = [];
  const socket = {
    connected: false,
    on(event, fn) {
      const list = handlers.get(event) ?? [];
      list.push(fn);
      handlers.set(event, list);
      return socket;
    },
    emit(event, payload) {
      emitted.push({ event, payload });
      return socket;
    },
    removeAllListeners() {
      handlers.clear();
    },
    disconnect() {
      socket.connected = false;
      return socket;
    },
    // --- test helpers ---
    _fireConnect() {
      socket.connected = true;
      for (const fn of handlers.get("connect") ?? []) fn();
    },
    _server(event, payload) {
      for (const fn of handlers.get(event) ?? []) fn(payload);
    },
    _emitted: emitted,
    _lastConnectUrl: null,
    _lastConnectOpts: null,
  };
  return socket;
}

function makeClient(overrides = {}) {
  const fake = makeFakeSocket();
  const ioClient = (url, opts) => {
    fake._lastConnectUrl = url;
    fake._lastConnectOpts = opts;
    return fake;
  };
  const rt = new MudbaseRealtime({
    projectId: "proj_1",
    token: "test-jwt",
    basePath: "https://cloud.example.dev",
    ioClient,
    ...overrides,
  });
  return { rt, fake };
}

// Let the async ensureSocket() microtask chain settle.
const flush = () => new Promise((r) => setTimeout(r, 0));

test("collection().onSnapshot connects with auth and joins the collection room", async () => {
  const { rt, fake } = makeClient();
  const seen = [];
  const unsub = rt.collection("posts").onSnapshot((c) => seen.push(c));
  await flush();

  assert.equal(fake._lastConnectUrl, "https://cloud.example.dev");
  assert.deepEqual(fake._lastConnectOpts.auth, { token: "test-jwt" });

  fake._fireConnect();
  const sub = fake._emitted.find((e) => e.event === "subscribe:collection");
  assert.ok(sub, "should send subscribe:collection");
  assert.deepEqual(sub.payload, { projectId: "proj_1", collectionId: "posts" });

  fake._server("db:create", {
    action: "create",
    projectId: "proj_1",
    collectionId: "posts",
    data: { _id: "a", title: "hi" },
    timestamp: "t1",
  });
  // A change for another collection must be ignored.
  fake._server("db:update", {
    action: "update",
    projectId: "proj_1",
    collectionId: "comments",
    data: { _id: "z" },
    timestamp: "t2",
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0].action, "create");
  assert.equal(seen[0].data.title, "hi");

  unsub();
  const unsubEv = fake._emitted.find((e) => e.event === "unsubscribe:collection");
  assert.ok(unsubEv, "unsub should send unsubscribe:collection");
  rt.close();
});

test("doc().onSnapshot only delivers changes for the target document id", async () => {
  const { rt, fake } = makeClient();
  const seen = [];
  rt.doc("posts", "a").onSnapshot((c) => seen.push(c));
  await flush();
  fake._fireConnect();

  fake._server("db:update", {
    action: "update", projectId: "proj_1", collectionId: "posts",
    data: { _id: "a", title: "changed" }, timestamp: "t1",
  });
  fake._server("db:update", {
    action: "update", projectId: "proj_1", collectionId: "posts",
    data: { _id: "b", title: "other" }, timestamp: "t2",
  });
  // delete carries { id } rather than the full document.
  fake._server("db:delete", {
    action: "delete", projectId: "proj_1", collectionId: "posts",
    data: { id: "a" }, timestamp: "t3",
  });

  assert.equal(seen.length, 2);
  assert.deepEqual(seen.map((c) => c.action), ["update", "delete"]);
  rt.close();
});

test("where().onSnapshot subscribes to a query and receives filtered snapshots", async () => {
  const { rt, fake } = makeClient();
  const snaps = [];
  rt.collection("posts").where({ published: true }).onSnapshot((s) => snaps.push(s));
  await flush();
  fake._fireConnect();

  const sub = fake._emitted.find((e) => e.event === "subscribe:query");
  assert.ok(sub, "should send subscribe:query");
  assert.equal(sub.payload.projectId, "proj_1");
  assert.equal(sub.payload.collectionId, "posts");
  assert.deepEqual(sub.payload.query, { published: true });
  const queryId = sub.payload.queryId;
  assert.ok(queryId, "query should carry a generated queryId");

  // A snapshot for a different queryId must be ignored.
  fake._server("query:change", { queryId: "other", collectionId: "posts", projectId: "proj_1", documents: [{ _id: "x" }], timestamp: "t0" });
  fake._server("query:change", { queryId, collectionId: "posts", projectId: "proj_1", documents: [{ _id: "a" }, { _id: "b" }], timestamp: "t1" });

  assert.equal(snaps.length, 1);
  assert.equal(snaps[0].documents.length, 2);
  rt.close();
});

test("re-subscribes all active subscriptions after a reconnect", async () => {
  const { rt, fake } = makeClient();
  rt.collection("posts").onSnapshot(() => {});
  rt.collection("posts").where({ a: 1 }).onSnapshot(() => {});
  await flush();

  fake._fireConnect();
  const firstCollSubs = fake._emitted.filter((e) => e.event === "subscribe:collection").length;
  const firstQuerySubs = fake._emitted.filter((e) => e.event === "subscribe:query").length;
  assert.equal(firstCollSubs, 1);
  assert.equal(firstQuerySubs, 1);

  // Simulate a reconnect: the "connect" handler should fire again and re-send subscriptions.
  fake._fireConnect();
  assert.equal(fake._emitted.filter((e) => e.event === "subscribe:collection").length, 2);
  assert.equal(fake._emitted.filter((e) => e.event === "subscribe:query").length, 2);
  rt.close();
});

test("server error payloads reach the onError handler", async () => {
  const { rt, fake } = makeClient();
  const errors = [];
  rt.collection("posts").onSnapshot(() => {}, (e) => errors.push(e));
  await flush();
  fake._fireConnect();

  fake._server("error", { message: "Insufficient permissions to subscribe to this collection" });
  assert.equal(errors.length, 1);
  assert.match(errors[0].message, /Insufficient permissions/);
  rt.close();
});

test("subscribe() is an alias for onSnapshot()", async () => {
  const { rt, fake } = makeClient();
  const seen = [];
  const unsub = rt.collection("posts").subscribe((c) => seen.push(c));
  await flush();
  fake._fireConnect();
  fake._server("db:create", {
    action: "create", projectId: "proj_1", collectionId: "posts",
    data: { _id: "a" }, timestamp: "t1",
  });
  assert.equal(seen.length, 1);
  assert.equal(typeof unsub, "function");
  rt.close();
});

test("missing token surfaces an error to the listener", async () => {
  const { rt, fake } = makeClient({ token: undefined });
  const errors = [];
  rt.collection("posts").onSnapshot(() => {}, (e) => errors.push(e));
  await flush();
  assert.equal(errors.length, 1);
  assert.match(errors[0].message, /no auth token/i);
  // No socket should have been created.
  assert.equal(fake._lastConnectUrl, null);
  rt.close();
});
