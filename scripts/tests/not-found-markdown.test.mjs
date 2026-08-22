import assert from "node:assert/strict";
import test from "node:test";

import {
  MACHINE_INDEX_LINKS,
  SECTION_LINKS,
  TRUST_LINKS,
  buildNotFoundMarkdown,
} from "../../src/lib/agent/site-index.ts";

const markdown = buildNotFoundMarkdown("/does-not-exist");

test("the 404 body opens with a heading and names the missing path", () => {
  assert.match(markdown, /^# 404 — Page not found\n/);
  assert.match(markdown, /`\/does-not-exist`/);
});

test("a path without a leading slash is still rendered as a path", () => {
  assert.match(buildNotFoundMarkdown("stray"), /`\/stray`/);
});

test("every recovery link is listed as an absolute Markdown link", () => {
  for (const link of [...MACHINE_INDEX_LINKS, ...SECTION_LINKS, ...TRUST_LINKS]) {
    assert.match(
      markdown,
      new RegExp(`\\[${link.label}\\]\\(https://allaboutxrp\\.com${link.href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)`),
      `missing link for ${link.href}`,
    );
  }
});

test("the sitemap, llms.txt, and the contact page are all reachable from a 404", () => {
  assert.match(markdown, /https:\/\/allaboutxrp\.com\/sitemap\.xml/);
  assert.match(markdown, /https:\/\/allaboutxrp\.com\/llms\.txt/);
  assert.match(markdown, /https:\/\/allaboutxrp\.com\/contact/);
});

test("the body explains how to request Markdown for any page", () => {
  assert.match(markdown, /Accept: text\/markdown/);
  assert.match(markdown, /append `\.md`/);
});

test("the document stays short enough to be cheap for an agent to read", () => {
  assert.ok(markdown.length > 400, "too thin to be useful");
  assert.ok(markdown.length < 4000, "too long for an error response");
});

test("recovery links are site-relative and carry a description", () => {
  for (const link of [...MACHINE_INDEX_LINKS, ...SECTION_LINKS, ...TRUST_LINKS]) {
    assert.ok(link.href.startsWith("/"), `${link.href} must be site-relative`);
    assert.ok(link.label.length > 0 && link.note.length > 0, `${link.href} needs a label and note`);
  }
});
