/**
 * DataQuery (query.ts) request-shape tests: assert the `?populate=` query string the fluent
 * builder produces, alone and combined with sort/page/limit/filter, plus the plain array-form
 * `populate` on DataApi.listData/getData directly. No live server - a fake axios instance is
 * injected straight into DataApi so each test only checks the request that would have been
 * sent. Run with `npm test` (which builds first so this can import ./dist/api.js and
 * ./dist/query.js).
 *
 * The `.where()`/`.whereRelated()`/`.sortByRelated()` tests below (relational-ergonomics item
 * 16) assert against `calls[0].params`/`calls[0].url`'s `filter`/`sort` search params rather
 * than a merged final URL for the `.whereRelated()` case specifically, because the fake axios
 * above intercepts *before* axios's own `buildURL` step runs - it never actually merges
 * `config.params` onto the URL the way real axios does. `real-axios-merge.test.mjs` covers
 * that merge end to end against a real `axios` instance and a local HTTP server instead.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { DataApi } from "../dist/api.js";
import { Configuration } from "../dist/configuration.js";
import { typedCollection } from "../dist/query.js";

function makeFakeAxios(fakeData = {}) {
  const calls = [];
  const fake = {
    defaults: {},
    request(config) {
      calls.push(config);
      return Promise.resolve({ data: fakeData, status: 200, statusText: "OK", headers: {}, config });
    },
  };
  return { fake, calls };
}

function makeDataApi(fakeData) {
  const { fake, calls } = makeFakeAxios(fakeData);
  const config = new Configuration({ accessToken: "test-jwt", basePath: "https://cloud.example.dev" });
  const api = new DataApi(config, undefined, fake);
  return { api, calls };
}

test("DataApi.listData with a single populate string produces ?populate=author", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await api.listData({ projectId: "proj_1", collectionId: "posts", populate: "author" });
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("populate"), "author");
});

test("DataApi.listData with an array of populate keys comma-joins them", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await api.listData({ projectId: "proj_1", collectionId: "posts", populate: ["author", "comments"] });
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("populate"), "author,comments");
});

test("DataApi.listData with a dot-path populate key passes it through unsplit", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await api.listData({ projectId: "proj_1", collectionId: "posts", populate: "comments.author" });
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("populate"), "comments.author");
});

test("DataApi.getData forwards populate the same way as listData", async () => {
  const { api, calls } = makeDataApi({ data: {} });
  await api.getData({ projectId: "proj_1", collectionId: "posts", documentId: "doc_1", populate: ["author"] });
  const url = new URL(calls[0].url);
  assert.equal(url.pathname, "/api/data/projects/proj_1/collections/posts/data/doc_1");
  assert.equal(url.searchParams.get("populate"), "author");
});

test("DataQuery.populate() chained calls collapse into a single comma-joined populate param", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").populate("author").populate("comments").list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("populate"), "author,comments");
});

test("DataQuery.populate() with an array argument is equivalent to chained calls", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").populate(["author", "comments"]).list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("populate"), "author,comments");
});

test("DataQuery.populate() de-duplicates a key populated twice", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").populate("author").populate("author").list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("populate"), "author");
});

test("DataQuery.populate() with a nested dot-path key passes it through unsplit", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").populate("comments.author").list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("populate"), "comments.author");
});

test("DataQuery composes populate with sort/page/limit/filter on .list()", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts")
    .populate("author")
    .sort("-createdAt")
    .page(2)
    .limit(10)
    .filter({ published: true })
    .list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("populate"), "author");
  assert.equal(url.searchParams.get("sort"), "-createdAt");
  assert.equal(url.searchParams.get("page"), "2");
  assert.equal(url.searchParams.get("limit"), "10");
  assert.deepEqual(JSON.parse(url.searchParams.get("filter")), { published: true });
});

test("DataQuery with no .populate() call omits the populate param entirely", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").sort("-createdAt").list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.has("populate"), false);
});

test("DataQuery.get() fetches a single document with populate applied", async () => {
  const { api, calls } = makeDataApi({ data: { _id: "doc_1", title: "hi" } });
  const doc = await typedCollection(api, "proj_1", "posts").populate("author").get("doc_1");
  const url = new URL(calls[0].url);
  assert.equal(url.pathname, "/api/data/projects/proj_1/collections/posts/data/doc_1");
  assert.equal(url.searchParams.get("populate"), "author");
  assert.equal(doc.title, "hi");
});

test("DataQuery.list() returns the data and pagination envelope", async () => {
  const fakePagination = { page: 1, limit: 20, total: 1, pages: 1 };
  const { api } = makeDataApi({ data: [{ _id: "a", title: "hi" }], pagination: fakePagination });
  const result = await typedCollection(api, "proj_1", "posts").populate("author").list();
  assert.equal(result.data.length, 1);
  assert.equal(result.data[0].title, "hi");
  assert.deepEqual(result.pagination, fakePagination);
});

// --- relational-ergonomics item 16: .where() / .whereRelated() / .sortByRelated() ---

test("DataQuery.sort() calls accumulate into a comma-joined sort param", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").sort("-createdAt").sort("title").list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("sort"), "-createdAt,title");
});

test("DataQuery.sort() de-duplicates a field sorted twice", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").sort("-createdAt").sort("-createdAt").list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("sort"), "-createdAt");
});

test("DataQuery.sortByRelated() defaults to ascending and composes with .sort()", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").sort("-createdAt").sortByRelated("author.name").list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("sort"), "-createdAt,author.name");
});

test("DataQuery.sortByRelated('desc') prefixes the path with -", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").sortByRelated("author.name", "desc").list();
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.get("sort"), "-author.name");
});

test("DataQuery.sortByRelated() rejects a non-dotted path", () => {
  assert.throws(
    () => typedCollection({}, "proj_1", "posts").sortByRelated("name"),
    /dotted relationship path/,
  );
});

test("DataQuery.where('==') sets a plain equality filter value", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").where("status", "==", "published").list();
  const url = new URL(calls[0].url);
  assert.deepEqual(JSON.parse(url.searchParams.get("filter")), { status: "published" });
});

test("DataQuery.where() with a comparison operator produces a Mongo operator object", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").where("views", ">", 100).list();
  const url = new URL(calls[0].url);
  assert.deepEqual(JSON.parse(url.searchParams.get("filter")), { views: { $gt: 100 } });
});

test("DataQuery.where() calls on the same field with different operators merge", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").where("price", ">", 10).where("price", "<", 100).list();
  const url = new URL(calls[0].url);
  assert.deepEqual(JSON.parse(url.searchParams.get("filter")), { price: { $gt: 10, $lt: 100 } });
});

test("DataQuery.where('in') maps to $in and .where('nin') maps to $nin", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts")
    .where("status", "in", ["draft", "review"])
    .where("authorType", "nin", ["banned"])
    .list();
  const url = new URL(calls[0].url);
  assert.deepEqual(JSON.parse(url.searchParams.get("filter")), {
    status: { $in: ["draft", "review"] },
    authorType: { $nin: ["banned"] },
  });
});

test("DataQuery.where() rejects an operator outside the server's allow-list", () => {
  assert.throws(
    () => typedCollection({}, "proj_1", "posts").where("body", "regex", "x"),
    /unsupported operator/,
  );
});

test("DataQuery.filter() and .where() shallow-merge rather than overwrite each other", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts")
    .filter({ published: true })
    .where("views", ">", 100)
    .list();
  const url = new URL(calls[0].url);
  assert.deepEqual(JSON.parse(url.searchParams.get("filter")), { published: true, views: { $gt: 100 } });
});

test("DataQuery.whereRelated() sends a dotted top-level query param via the axios request's params, not the filter object", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts").whereRelated("author.role", "admin").list();
  assert.deepEqual(calls[0].params, { "author.role": "admin" });
  const url = new URL(calls[0].url);
  assert.equal(url.searchParams.has("filter"), false);
});

test("DataQuery.whereRelated() merges multiple related-field conditions", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts")
    .whereRelated("author.role", "admin")
    .whereRelated("author.verified", true)
    .list();
  assert.deepEqual(calls[0].params, { "author.role": "admin", "author.verified": true });
});

test("DataQuery.whereRelated() preserves caller-supplied axios options alongside its own params", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts")
    .whereRelated("author.role", "admin")
    .list({ params: { extra: "1" }, headers: { "X-Test": "yes" } });
  assert.deepEqual(calls[0].params, { extra: "1", "author.role": "admin" });
  assert.equal(calls[0].headers["X-Test"], "yes");
});

test("DataQuery.whereRelated() rejects a non-dotted path", () => {
  assert.throws(
    () => typedCollection({}, "proj_1", "posts").whereRelated("role", "admin"),
    /dotted relationship path/,
  );
});

test("DataQuery.get() does not attach .whereRelated() conditions as axios params", async () => {
  const { api, calls } = makeDataApi({ data: { _id: "doc_1" } });
  await typedCollection(api, "proj_1", "posts").whereRelated("author.role", "admin").get("doc_1");
  assert.equal(calls[0].params, undefined);
});

test("DataQuery composes .where()/.populate()/.whereRelated()/.sortByRelated()/.limit() in one chain", async () => {
  const { api, calls } = makeDataApi({ data: [], pagination: {} });
  await typedCollection(api, "proj_1", "posts")
    .where("status", "==", "published")
    .populate("author")
    .whereRelated("author.role", "admin")
    .sortByRelated("author.name", "desc")
    .limit(20)
    .list();
  const url = new URL(calls[0].url);
  assert.deepEqual(JSON.parse(url.searchParams.get("filter")), { status: "published" });
  assert.equal(url.searchParams.get("populate"), "author");
  assert.equal(url.searchParams.get("sort"), "-author.name");
  assert.equal(url.searchParams.get("limit"), "20");
  assert.deepEqual(calls[0].params, { "author.role": "admin" });
});
