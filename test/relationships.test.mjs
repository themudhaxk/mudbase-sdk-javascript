/**
 * RelationshipsApi request-shape tests. Uses Node's built-in test runner (node:test) plus a
 * fake axios instance injected straight into the generated BaseAPI constructor, so no live
 * server is needed - each test only asserts the method/url/params/body that would have been
 * sent. Run with `npm test` (which builds first so this can import ./dist/api.js).
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { RelationshipsApi } from "../dist/api.js";
import { Configuration } from "../dist/configuration.js";

/** A minimal fake axios instance: records the last request config, resolves with fakeData. */
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

function makeClient(fakeData) {
  const { fake, calls } = makeFakeAxios(fakeData);
  const config = new Configuration({ accessToken: "test-jwt", basePath: "https://cloud.example.dev" });
  const api = new RelationshipsApi(config, undefined, fake);
  return { api, calls };
}

test("listRelationships sends GET with no query params by default", async () => {
  const { api, calls } = makeClient({ success: true, data: [] });
  await api.listRelationships({ projectId: "proj_1" });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].method, "GET");
  assert.equal(calls[0].url, "https://cloud.example.dev/api/projects/proj_1/relationships");
});

test("listRelationships forwards sourceCollection/targetCollection/page/limit as query params", async () => {
  const { api, calls } = makeClient({ success: true, data: [] });
  await api.listRelationships({
    projectId: "proj_1",
    sourceCollection: "posts",
    targetCollection: "users",
    page: 2,
    limit: 10,
  });
  const url = new URL(calls[0].url);
  assert.equal(url.pathname, "/api/projects/proj_1/relationships");
  assert.equal(url.searchParams.get("sourceCollection"), "posts");
  assert.equal(url.searchParams.get("targetCollection"), "users");
  assert.equal(url.searchParams.get("page"), "2");
  assert.equal(url.searchParams.get("limit"), "10");
});

test("createRelationship sends POST with the declaration as a JSON body", async () => {
  const { api, calls } = makeClient({ success: true, data: {} });
  await api.createRelationship({
    projectId: "proj_1",
    createRelationshipRequest: {
      sourceCollection: "posts",
      targetCollection: "users",
      field: "author",
      type: "many-to-one",
      onDelete: "restrict",
    },
  });
  assert.equal(calls[0].method, "POST");
  assert.equal(calls[0].url, "https://cloud.example.dev/api/projects/proj_1/relationships");
  const body = JSON.parse(calls[0].data);
  assert.deepEqual(body, {
    sourceCollection: "posts",
    targetCollection: "users",
    field: "author",
    type: "many-to-one",
    onDelete: "restrict",
  });
  assert.equal(calls[0].headers["Content-Type"], "application/json");
});

test("getRelationship sends GET to the singular resource path", async () => {
  const { api, calls } = makeClient({ success: true, data: {} });
  await api.getRelationship({ projectId: "proj_1", relationshipId: "rel_1" });
  assert.equal(calls[0].method, "GET");
  assert.equal(calls[0].url, "https://cloud.example.dev/api/projects/proj_1/relationships/rel_1");
});

test("updateRelationship sends PATCH with only the changed fields", async () => {
  const { api, calls } = makeClient({ success: true, data: {} });
  await api.updateRelationship({
    projectId: "proj_1",
    relationshipId: "rel_1",
    updateRelationshipRequest: { onDelete: "cascade" },
  });
  assert.equal(calls[0].method, "PATCH");
  assert.equal(calls[0].url, "https://cloud.example.dev/api/projects/proj_1/relationships/rel_1");
  assert.deepEqual(JSON.parse(calls[0].data), { onDelete: "cascade" });
});

test("deleteRelationship sends DELETE to the singular resource path", async () => {
  const { api, calls } = makeClient({ success: true, message: "deleted" });
  await api.deleteRelationship({ projectId: "proj_1", relationshipId: "rel_1" });
  assert.equal(calls[0].method, "DELETE");
  assert.equal(calls[0].url, "https://cloud.example.dev/api/projects/proj_1/relationships/rel_1");
});

test("getRelationshipOrphans sends GET to the orphans path and surfaces the response shape", async () => {
  const { api, calls } = makeClient({
    success: true,
    data: [{ relationshipId: "rel_1", sourceCollection: "posts", targetCollection: "users", field: "author", type: "many-to-one", orphanCount: 2, orphanSamples: ["a", "b"], truncated: false }],
    totalOrphans: 2,
  });
  const result = await api.getRelationshipOrphans({ projectId: "proj_1" });
  assert.equal(calls[0].method, "GET");
  assert.equal(calls[0].url, "https://cloud.example.dev/api/projects/proj_1/relationships/orphans");
  assert.equal(result.data.totalOrphans, 2);
  assert.equal(result.data.data[0].orphanCount, 2);
});

test("every request carries the bearer token from the configuration", async () => {
  const { api, calls } = makeClient({ success: true, data: [] });
  await api.listRelationships({ projectId: "proj_1" });
  assert.equal(calls[0].headers["Authorization"], "Bearer test-jwt");
});
