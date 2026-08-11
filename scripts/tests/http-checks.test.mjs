import assert from "node:assert/strict";
import test from "node:test";

import { checkHostNormalization, fetchWithRetry } from "../lib/http-checks.mjs";

const response = (status, headers = {}) => new Response(null, { status, headers });

function routeResponses(routes) {
  return async (url) => {
    const next = routes.get(url)?.shift();
    assert.ok(next, `Unexpected request for ${url}`);
    return next;
  };
}

test("accepts a single permanent redirect to the canonical URL", async () => {
  const sourceUrl = "https://www.allaboutxrp.com/live-chart";
  const expectedUrl = "https://allaboutxrp.com/live-chart";
  const failures = await checkHostNormalization({
    sourceUrl,
    expectedUrl,
    fetchUrl: routeResponses(new Map([
      [sourceUrl, [response(301, { location: expectedUrl })]],
      [expectedUrl, [response(200)]],
    ])),
  });

  assert.deepEqual(failures, []);
});

test("accepts Netlify's HTTP www upgrade followed by canonical host normalization", async () => {
  const sourceUrl = "http://www.allaboutxrp.com/tools/escrow-tracker";
  const httpsWwwUrl = "https://www.allaboutxrp.com/tools/escrow-tracker";
  const expectedUrl = "https://allaboutxrp.com/tools/escrow-tracker";
  const failures = await checkHostNormalization({
    sourceUrl,
    expectedUrl,
    fetchUrl: routeResponses(new Map([
      [sourceUrl, [response(301, { location: httpsWwwUrl })]],
      [httpsWwwUrl, [response(301, { location: expectedUrl })]],
      [expectedUrl, [response(200)]],
    ])),
  });

  assert.deepEqual(failures, []);
});

test("rejects temporary redirects", async () => {
  const sourceUrl = "http://allaboutxrp.com/news";
  const failures = await checkHostNormalization({
    sourceUrl,
    expectedUrl: "https://allaboutxrp.com/news",
    fetchUrl: routeResponses(new Map([[sourceUrl, [response(302, { location: "/news" })]]])),
  });

  assert.match(failures[0], /expected a permanent redirect/);
});

test("rejects redirect loops", async () => {
  const sourceUrl = "http://www.allaboutxrp.com/";
  const httpsWwwUrl = "https://www.allaboutxrp.com/";
  const failures = await checkHostNormalization({
    sourceUrl,
    expectedUrl: "https://allaboutxrp.com/",
    fetchUrl: routeResponses(new Map([
      [sourceUrl, [response(301, { location: httpsWwwUrl })]],
      [httpsWwwUrl, [response(301, { location: sourceUrl })]],
    ])),
  });

  assert.match(failures[0], /redirect loop/);
});

test("rejects chains longer than two redirects", async () => {
  const sourceUrl = "http://www.allaboutxrp.com/sitemap.xml";
  const hopOne = "https://www.allaboutxrp.com/sitemap.xml";
  const hopTwo = "https://allaboutxrp.com/legacy-sitemap.xml";
  const failures = await checkHostNormalization({
    sourceUrl,
    expectedUrl: "https://allaboutxrp.com/sitemap.xml",
    fetchUrl: routeResponses(new Map([
      [sourceUrl, [response(301, { location: hopOne })]],
      [hopOne, [response(301, { location: hopTwo })]],
      [hopTwo, [response(301, { location: "/sitemap.xml" })]],
    ])),
  });

  assert.match(failures[0], /more than two redirects/);
});

test("rejects the wrong final URL and noindex canonical responses", async () => {
  const sourceUrl = "https://www.allaboutxrp.com/live-chart";
  const wrongUrl = "https://allaboutxrp.com/live";
  const failures = await checkHostNormalization({
    sourceUrl,
    expectedUrl: "https://allaboutxrp.com/live-chart",
    fetchUrl: routeResponses(new Map([
      [sourceUrl, [response(301, { location: wrongUrl })]],
      [wrongUrl, [response(200, { "x-robots-tag": "noindex, follow" })]],
    ])),
  });

  assert.equal(failures.length, 2);
  assert.match(failures[0], /resolved to/);
  assert.match(failures[1], /noindex/);
});

test("retries transient responses before returning success", async () => {
  const statuses = [502, 503, 200];
  const delays = [];
  const result = await fetchWithRetry("https://allaboutxrp.com/", {}, {
    fetchImpl: async () => response(statuses.shift()),
    sleep: async (milliseconds) => delays.push(milliseconds),
  });

  assert.equal(result.status, 200);
  assert.deepEqual(delays, [1000, 2000]);
});

test("retries thrown network errors before returning success", async () => {
  let attempts = 0;
  const result = await fetchWithRetry("https://allaboutxrp.com/", {}, {
    fetchImpl: async () => {
      attempts += 1;
      if (attempts < 3) throw new Error("temporary network failure");
      return response(200);
    },
    sleep: async () => {},
  });

  assert.equal(result.status, 200);
  assert.equal(attempts, 3);
});
