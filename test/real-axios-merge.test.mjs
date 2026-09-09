/**
 * Real-axios, real-HTTP-server integration test for `.whereRelated()` (relational-ergonomics
 * item 16). `query.test.mjs` intercepts requests with a fake axios instance before axios's own
 * `buildURL` step runs, so it can never actually demonstrate that `options.params` (how
 * `.whereRelated()` attaches its dotted relationship-field filters, see `mergeOptions()` in
 * `query.ts`) gets merged onto the URL the generated `DataApi` already built from `populate`/
 * `sort`/`filter`/`page`/`limit`. This file proves that merge end to end against a real `axios`
 * instance talking to a real local HTTP server, matching axios's documented `buildURL` behavior
 * of appending `config.params` onto a URL that already carries a query string.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import axios from "axios";
import { DataApi } from "../dist/api.js";
import { Configuration } from "../dist/configuration.js";
import { typedCollection } from "../dist/query.js";

async function withServer(handler, run) {
  const server = http.createServer(handler);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  try {
    await run(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

test("real axios merges .whereRelated()'s params onto the URL DataApi already built", async () => {
  let receivedUrl;
  await withServer(
    (req, res) => {
      receivedUrl = req.url;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ data: [], pagination: { page: 1, limit: 20, total: 0, pages: 0 } }));
    },
    async (basePath) => {
      const config = new Configuration({ accessToken: "test-jwt", basePath });
      const api = new DataApi(config, undefined, axios);
      await typedCollection(api, "proj_1", "posts")
        .where("status", "==", "published")
        .populate("author")
        .whereRelated("author.role", "admin")
        .sortByRelated("author.name", "desc")
        .limit(20)
        .list();

      const url = new URL(receivedUrl, basePath);
      assert.equal(url.pathname, "/api/data/projects/proj_1/collections/posts/data");
      assert.deepEqual(JSON.parse(url.searchParams.get("filter")), { status: "published" });
      assert.equal(url.searchParams.get("populate"), "author");
      assert.equal(url.searchParams.get("sort"), "-author.name");
      assert.equal(url.searchParams.get("limit"), "20");
      // The part a fake-axios test cannot show: axios's real buildURL appended this
      // dotted relationship-field-filter param (from options.params, not the generated
      // client's own query-param builder) onto the already-query-stringed URL.
      assert.equal(url.searchParams.get("author.role"), "admin");
    },
  );
});

test("real axios sends a plain request with no extra params when .whereRelated() is never called", async () => {
  let receivedUrl;
  await withServer(
    (req, res) => {
      receivedUrl = req.url;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ data: [], pagination: { page: 1, limit: 20, total: 0, pages: 0 } }));
    },
    async (basePath) => {
      const config = new Configuration({ accessToken: "test-jwt", basePath });
      const api = new DataApi(config, undefined, axios);
      await typedCollection(api, "proj_1", "posts").populate("author").list();

      const url = new URL(receivedUrl, basePath);
      assert.equal(url.searchParams.get("populate"), "author");
      assert.equal(url.searchParams.has("author.role"), false);
    },
  );
});
