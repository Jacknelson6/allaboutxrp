import assert from "node:assert/strict";
import test from "node:test";

import {
  appendVaryAccept,
  isNegotiablePath,
  parseAccept,
  preferredType,
} from "../../src/lib/agent/accept.ts";

test("a browser Accept header resolves to HTML", () => {
  assert.equal(
    preferredType("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,*/*;q=0.8"),
    "text/html",
  );
});

test("a missing, empty, or wildcard Accept header resolves to HTML", () => {
  assert.equal(preferredType(null), "text/html");
  assert.equal(preferredType(""), "text/html");
  assert.equal(preferredType("*/*"), "text/html");
});

test("an explicit Markdown request resolves to Markdown", () => {
  assert.equal(preferredType("text/markdown"), "text/markdown");
  assert.equal(preferredType("text/markdown, text/html;q=0.9, */*;q=0.8"), "text/markdown");
});

test("q-values rank the representations, not header order", () => {
  assert.equal(preferredType("text/markdown;q=0.4, text/html;q=0.9"), "text/html");
  assert.equal(preferredType("text/html;q=0.4, text/markdown;q=0.9"), "text/markdown");
});

test("client order breaks a q-value tie", () => {
  assert.equal(preferredType("text/markdown;q=0.8, text/html;q=0.8"), "text/markdown");
  assert.equal(preferredType("text/html;q=0.8, text/markdown;q=0.8"), "text/html");
});

test("a specific rejection beats a wildcard, per RFC 9110 12.5.1", () => {
  assert.equal(preferredType("text/html;q=0, */*"), "text/markdown");
  assert.equal(preferredType("text/markdown;q=0, */*"), "text/html");
});

test("a text/* range matches both representations and prefers HTML", () => {
  assert.equal(preferredType("text/*"), "text/html");
  assert.equal(preferredType("text/*;q=0.5, text/markdown;q=0.9"), "text/markdown");
});

test("accepting neither representation returns null so the caller can send 406", () => {
  assert.equal(preferredType("application/pdf"), null);
  assert.equal(preferredType("image/png, application/json"), null);
  assert.equal(preferredType("*/*;q=0"), null);
});

test("malformed q parameters fall back to q=1 without throwing", () => {
  assert.equal(preferredType("text/markdown;q=banana"), "text/markdown");
  assert.deepEqual(parseAccept("text/markdown;q=2")[0].q, 1);
  assert.deepEqual(parseAccept("text/markdown;q=-3")[0].q, 0);
});

test("parseAccept records specificity for each range", () => {
  const entries = parseAccept("text/markdown, text/*, */*");
  assert.deepEqual(entries.map((entry) => entry.specificity), [2, 1, 0]);
});

test("appendVaryAccept adds Accept without dropping existing tokens", () => {
  const headers = new Headers({ Vary: "RSC, Accept-Encoding" });
  appendVaryAccept(headers);
  assert.equal(headers.get("Vary"), "RSC, Accept-Encoding, Accept");
});

test("appendVaryAccept is idempotent and respects Vary: *", () => {
  const headers = new Headers({ Vary: "accept, accept-encoding" });
  appendVaryAccept(headers);
  assert.equal(headers.get("Vary"), "accept, accept-encoding");

  const wildcard = new Headers({ Vary: "*" });
  appendVaryAccept(wildcard);
  assert.equal(wildcard.get("Vary"), "*");

  const empty = new Headers();
  appendVaryAccept(empty);
  assert.equal(empty.get("Vary"), "Accept");
});

test("page paths and .md siblings are negotiable", () => {
  for (const pathname of ["/", "/learn/what-is-xrp", "/news", "/learn/what-is-xrp.md", "/index.md"]) {
    assert.equal(isNegotiablePath(pathname), true, pathname);
  }
});

test("files, framework internals, and generated images are never negotiated", () => {
  for (const pathname of [
    "/sitemap.xml",
    "/news-sitemap.xml",
    "/llms.txt",
    "/robots.txt",
    "/images/hero.webp",
    "/favicon.ico",
    "/_next/static/chunk.js",
    "/api/market-data",
    "/opengraph-image",
    "/icon",
    "/apple-icon",
  ]) {
    assert.equal(isNegotiablePath(pathname), false, pathname);
  }
});
