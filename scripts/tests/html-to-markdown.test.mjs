import assert from "node:assert/strict";
import test from "node:test";

import {
  buildMarkdownDocument,
  decodeEntities,
  extractCanonical,
  extractMainContent,
  extractMetaContent,
  extractTitle,
  htmlToMarkdown,
} from "../../src/lib/agent/html-to-markdown.ts";

const BASE = "https://allaboutxrp.com/learn/what-is-xrp";

test("headings keep their level", () => {
  const markdown = htmlToMarkdown("<h1>What is XRP?</h1><h2>Supply</h2><h3>Escrow</h3>");
  assert.equal(markdown, "# What is XRP?\n\n## Supply\n\n### Escrow");
});

test("paragraphs are separated by a blank line and whitespace is collapsed", () => {
  const markdown = htmlToMarkdown("<p>One\n   two</p>\n<p>Three</p>");
  assert.equal(markdown, "One two\n\nThree");
});

test("links resolve against the page URL and keep their text", () => {
  const markdown = htmlToMarkdown('<p>See <a href="/learn/xrp-wallets">wallets</a>.</p>', {
    baseUrl: BASE,
  });
  assert.equal(markdown, "See [wallets](https://allaboutxrp.com/learn/xrp-wallets).");
});

test("absolute, mailto, and in-page links are left alone", () => {
  assert.equal(
    htmlToMarkdown('<p><a href="https://xrpl.org">XRPL</a></p>', { baseUrl: BASE }),
    "[XRPL](https://xrpl.org)",
  );
  assert.equal(
    htmlToMarkdown('<p><a href="mailto:team@allaboutxrp.com">Email</a></p>', { baseUrl: BASE }),
    "[Email](mailto:team@allaboutxrp.com)",
  );
  assert.equal(htmlToMarkdown('<p><a href="#top">Top</a></p>', { baseUrl: BASE }), "Top");
});

test("emphasis, strong, strikethrough, and inline code are marked up", () => {
  assert.equal(
    htmlToMarkdown("<p><strong>Bold</strong> and <em>italic</em> and <s>gone</s> and <code>rippled</code></p>"),
    "**Bold** and _italic_ and ~~gone~~ and `rippled`",
  );
});

test("unordered and ordered lists render with markers and nesting", () => {
  const markdown = htmlToMarkdown(
    "<ul><li>Alpha</li><li>Beta<ul><li>Nested</li></ul></li></ul>",
  );
  assert.equal(markdown, "- Alpha\n- Beta\n\n  - Nested");

  assert.equal(
    htmlToMarkdown("<ol start='3'><li>Third</li><li>Fourth</li></ol>"),
    "3. Third\n4. Fourth",
  );
});

test("tables render as GitHub-flavoured Markdown", () => {
  const markdown = htmlToMarkdown(
    "<table><thead><tr><th>Field</th><th>Value</th></tr></thead>" +
      "<tbody><tr><td>Base reserve</td><td>1 XRP</td></tr></tbody></table>",
  );
  assert.equal(
    markdown,
    "| Field | Value |\n| --- | --- |\n| Base reserve | 1 XRP |",
  );
});

test("details/summary keeps the question and its answer", () => {
  const markdown = htmlToMarkdown(
    "<details><summary><h3>Is XRP mined?</h3></summary><p>No.</p></details>",
  );
  assert.equal(markdown, "**Is XRP mined?**\n\nNo.");
});

test("blockquotes are prefixed and preserved", () => {
  assert.equal(htmlToMarkdown("<blockquote><p>Quoted line</p></blockquote>"), "> Quoted line");
});

test("images keep alt text, and decorative images are dropped", () => {
  assert.equal(
    htmlToMarkdown('<p><img src="/guides/card.webp" alt="Guide card"></p>', { baseUrl: BASE }),
    "![Guide card](https://allaboutxrp.com/guides/card.webp)",
  );
  assert.equal(htmlToMarkdown('<p><img src="/guides/card.webp" alt=""></p>'), "");
});

test("scripts, styles, navigation, and aria-hidden decoration are stripped", () => {
  const markdown = htmlToMarkdown(
    '<div><script>var a = "<p>not content</p>";</script>' +
      "<style>.a{color:red}</style>" +
      '<nav><a href="/news">News</a></nav>' +
      '<p>Read the report <span aria-hidden="true">→</span></p></div>',
  );
  assert.equal(markdown, "Read the report");
});

test("HTML entities are decoded, including numeric references", () => {
  assert.equal(decodeEntities("Ripple&#x27;s &amp; XRP&rsquo;s &mdash; 100&nbsp;billion"), "Ripple's & XRP’s — 100 billion");
  assert.equal(htmlToMarkdown("<p>3&ndash;5 seconds &lt;1&cent;</p>"), "3–5 seconds <1¢");
});

test("markdown control characters in prose are escaped", () => {
  assert.equal(htmlToMarkdown("<p>Use [brackets] and *stars* literally</p>"), "Use \\[brackets\\] and \\*stars\\* literally");
});

test("preformatted blocks become fenced code", () => {
  assert.equal(
    htmlToMarkdown("<pre><code>account_lines\n  peer: rABC</code></pre>"),
    "```\naccount_lines\n  peer: rABC\n```",
  );
});

test("unknown block elements still render their children", () => {
  assert.equal(htmlToMarkdown("<custom-band><p>Kept</p></custom-band>"), "Kept");
});

const PAGE = `<!DOCTYPE html><html lang="en"><head>
<title>What is XRP? | AllAboutXRP</title>
<meta name="description" content="XRP explained, with sources."/>
<link rel="canonical" href="https://allaboutxrp.com/learn/what-is-xrp"/>
</head><body>
<header><nav><a href="/news">News</a></nav></header>
<main id="main-content"><h1>What is XRP?</h1><p>XRP is the native asset of the XRP Ledger.</p>
<div><main>decoy</main></div></main>
<footer><p>Footer text</p></footer>
</body></html>`;

test("extractMainContent takes the labelled main region, not the header or footer", () => {
  const main = extractMainContent(PAGE);
  assert.match(main, /What is XRP\?/);
  assert.doesNotMatch(main, /Footer text/);
  // The nested <main> must not end the region early.
  assert.match(main, /decoy/);
});

test("extractMainContent falls back to body when no main element exists", () => {
  const html = "<html><body><h1>Bare</h1></body></html>";
  assert.equal(extractMainContent(html).trim(), "<h1>Bare</h1>");
});

test("title, description, and canonical are read from the document head", () => {
  assert.equal(extractTitle(PAGE), "What is XRP? | AllAboutXRP");
  assert.equal(extractMetaContent(PAGE, "description"), "XRP explained, with sources.");
  assert.equal(extractCanonical(PAGE), "https://allaboutxrp.com/learn/what-is-xrp");
  assert.equal(extractMetaContent(PAGE, "og:type"), null);
});

test("a full page converts to a heading and prose without chrome", () => {
  const markdown = htmlToMarkdown(extractMainContent(PAGE), { baseUrl: BASE });
  assert.equal(markdown, "# What is XRP?\n\nXRP is the native asset of the XRP Ledger.\n\ndecoy");
});

test("the assembled document leads with one H1, then the description", () => {
  const document = buildMarkdownDocument({
    title: "What is XRP? | AllAboutXRP",
    description: "XRP explained, with sources.",
    body: "# What is XRP?\n\nXRP is the native asset.",
    canonical: BASE,
    indexUrl: "https://allaboutxrp.com/llms-full.txt",
  });
  assert.equal(
    document,
    "# What is XRP?\n\n> XRP explained, with sources.\n\nXRP is the native asset.\n\n---\n\n" +
      `Source: ${BASE} · AllAboutXRP · Full index: https://allaboutxrp.com/llms-full.txt\n`,
  );
});

test("an H1 further down the page is hoisted instead of duplicated", () => {
  const document = buildMarkdownDocument({
    title: "Contact AllAboutXRP",
    description: "How to reach us.",
    body: "Contact\n\n# Reach the people behind the pages\n\nTwo inboxes.",
    canonical: BASE,
    indexUrl: "https://allaboutxrp.com/llms-full.txt",
  });
  assert.match(document, /^# Reach the people behind the pages\n\n> How to reach us\.\n\nContact\n\nTwo inboxes\./);
  assert.equal(document.match(/^# /gm).length, 1);
});

test("a body without its own H1 borrows the document title", () => {
  const document = buildMarkdownDocument({
    title: "Tools | AllAboutXRP",
    description: null,
    body: "## Calculators\n\nSomething.",
    canonical: BASE,
    indexUrl: "https://allaboutxrp.com/llms-full.txt",
  });
  assert.match(document, /^# Tools \| AllAboutXRP\n\n## Calculators\n/);
});

test("the document always ends with a single provenance footer", () => {
  const document = buildMarkdownDocument({
    title: null,
    description: null,
    body: "Body only.",
    canonical: BASE,
    indexUrl: "https://allaboutxrp.com/llms-full.txt",
  });
  assert.equal(document.match(/^---$/gm).length, 1);
  assert.ok(document.endsWith("\n"));
  assert.match(document, /^Body only\./);
});
