import assert from "node:assert/strict";
import test from "node:test";
import { WHITEPAPERS, WHITEPAPER_URL } from "../../src/data/whitepapers.ts";
import {
  DEFAULT_LIBRARY_FILTERS,
  buildWhitepaperCollectionSchema,
  filterWhitepapers,
  formatPaperDate,
  paperCitation,
} from "../../src/lib/whitepapers.ts";

test("the library combines collection, type, year, and case-insensitive search", () => {
  const results = filterWhitepapers(WHITEPAPERS, {
    ...DEFAULT_LIBRARY_FILTERS, collection: "XRPL", type: "research-paper", year: "2018", query: "CHASE consensus",
  });
  assert.deepEqual(results.map((paper) => paper.id), ["xrpl-consensus-analysis"]);
  assert.equal(filterWhitepapers(WHITEPAPERS, { ...DEFAULT_LIBRARY_FILTERS, query: "no-such-paper" }).length, 0);
  assert.equal(filterWhitepapers(WHITEPAPERS, { ...DEFAULT_LIBRARY_FILTERS, query: "micic" })[0].id, "ripple-consensus-security");
});

test("date sorting keeps undated documentation last without changing the curated order", () => {
  const order = WHITEPAPERS.map((paper) => paper.id);
  for (const sort of ["newest", "oldest"]) {
    const sorted = filterWhitepapers(WHITEPAPERS, { ...DEFAULT_LIBRARY_FILTERS, sort });
    const undatedIndex = sorted.findIndex((paper) => !paper.date);
    assert.ok(sorted.slice(undatedIndex).every((paper) => !paper.date));
    assert.deepEqual(WHITEPAPERS.map((paper) => paper.id), order);
  }
  const undated = filterWhitepapers(WHITEPAPERS, { ...DEFAULT_LIBRARY_FILTERS, year: "undated" });
  assert.ok(undated.length > 0);
  assert.ok(undated.every((paper) => !paper.date));
  assert.equal(formatPaperDate("2014"), "2014");
  assert.equal(formatPaperDate("2023-02"), "Feb 2023");
  assert.equal(formatPaperDate("2026-06-04"), "Jun 4, 2026");
});

test("a moved document cannot be presented as a working PDF or copied into a misleading citation", () => {
  const moved = WHITEPAPERS.filter((paper) => paper.sourceStatus === "moved");
  assert.ok(moved.length > 0);
  for (const paper of moved) {
    assert.equal(paper.documentUrl, null);
    assert.match(paperCitation(paper), /Original source moved/);
    assert.ok(paperCitation(paper).includes(`${WHITEPAPER_URL}#paper-${paper.id}`));
    assert.doesNotMatch(paperCitation(paper), /coreum_technical_paper\.pdf/);
  }
});

test("structured records match the visible catalog and preserve date semantics", () => {
  const schema = buildWhitepaperCollectionSchema();
  assert.equal(schema.mainEntity.numberOfItems, WHITEPAPERS.length);
  assert.equal(new Set(WHITEPAPERS.map((paper) => paper.id)).size, WHITEPAPERS.length);
  for (const [index, entry] of schema.mainEntity.itemListElement.entries()) {
    const paper = WHITEPAPERS[index];
    assert.equal(entry.position, index + 1);
    assert.equal(entry.item.description, paper.summary);
    assert.equal(entry.url, `${WHITEPAPER_URL}#paper-${paper.id}`);
    if (["Created", "Listed"].includes(paper.dateBasis)) assert.equal(entry.item.datePublished, undefined);
    if (!paper.documentUrl) assert.equal(entry.item.encoding, undefined);
    if (entry.item.encoding) assert.equal(entry.item.encoding.contentUrl, paper.documentUrl);
  }
  const flare = WHITEPAPERS.find((paper) => paper.id === "flare-data-connector");
  assert.match(paperCitation(flare), /listed Jan 14, 2025/);
});
