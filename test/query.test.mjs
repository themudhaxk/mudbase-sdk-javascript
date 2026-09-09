/**
 * DataQuery (query.ts) request-shape tests: assert the `?populate=` query string the fluent
 * builder produces, alone and combined with sort/page/limit/filter, plus the plain array-form
 * `populate` on DataApi.listData/getData directly. No live server - a fake axios instance is
 * injected straight into DataApi so each test only checks the request that would have been
 * sent. Run with `npm test` (which builds first so this can import ./dist/api.js and
 * ./dist/query.js).
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
