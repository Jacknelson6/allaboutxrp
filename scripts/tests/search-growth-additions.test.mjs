import assert from "node:assert/strict";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { loadCompetitorEvidence, buildKeywordGaps } from "../search-growth/competitors.mjs";
import { extractPageContent, buildEditingBrief } from "../search-growth/briefs.mjs";
import { buildAaxrpCatalog } from "../search-growth/catalog.mjs";
import { approveOpportunity } from "../search-growth/ledger.mjs";
import { renderHtmlReport } from "../search-growth/report-html.mjs";
import { runGrowthCycle } from "../search-growth/growth-cycle.mjs";

const origin = "https://allaboutxrp.com";
const config = {
  site: { id: "aaxrp", name: "All About XRP", origin },
  brandTerms: ["all about xrp", "aaxrp"],
  thresholds: { minimumImpressions: 10, minimumCtrRows: 999, minimumAssessmentImpressions: 50, minimumControls: 2 }
};
const periods = { previous: { start: "2026-06-01", end: "2026-06-28" }, current: { start: "2026-06-29", end: "2026-07-26" } };
const page = `${origin}/learn/xrp-wallets`;
const catalog = [{ page, sourcePath: "src/app/learn/xrp-wallets/page.tsx", indexability: "eligible", verificationState: "live_verified" }];

function cycleAt(position, impressions = 100) {
  const row = { query: "xrp wallets", page, position, impressions, clicks: impressions / 10, ctr: 0.1 };
  return runGrowthCycle({ config, currentRows: [row], previousRows: [row], catalog, periods, ledger: { schemaVersion: 1, interventions: [] } });
}

test("stable first-page opportunities include both boundaries without claiming observed traffic loss", () => {
  for (const position of [4, 5, 10]) {
    const [opportunity] = cycleAt(position).opportunities;
    assert.equal(opportunity.signals.firstPage, true);
    assert.equal(opportunity.signals.pageTwo, false);
    assert.equal(opportunity.signals.observedClickLoss, 0);
    assert.equal(opportunity.evidenceState, "estimated");
    assert.equal(opportunity.interventionType, "first_page_intent_review");
  }
  assert.equal(cycleAt(3.9).opportunities.length, 0);
  assert.equal(cycleAt(21).opportunities.length, 0);
  assert.equal(cycleAt(5, 49).opportunities.length, 0);
  assert.equal(cycleAt(5, 50).opportunities.length, 1);
  assert.equal(cycleAt(10.1).opportunities[0].signals.pageTwo, true);
});

async function competitorFile(contents, extension = "csv") {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-competitor-"));
  const file = path.join(directory, `export.${extension}`);
  await writeFile(file, typeof contents === "string" ? contents : JSON.stringify(contents));
  return file;
}

test("competitor exports normalize vendor CSV columns, optional metrics, and duplicate ranks", async () => {
  const file = await competitorFile('Keyword,Current URL,Current Position,Search Volume,KD\nXRP Wallets,https://example.com/wallets#intro,7,"1,200",35\nxrp wallets,https://example.com/wallets,3,"1,200",35\nxrp custody,https://example.com/custody,5,,\n');
  const rows = await loadCompetitorEvidence(file, origin);
  assert.equal(rows.length, 2);
  assert.equal(rows[1].query, "xrp wallets");
  assert.equal(rows[1].position, 3);
  assert.equal(rows[1].volume, 1200);
  assert.equal(rows[1].page, "https://example.com/wallets");
  assert.equal(rows[0].volume, null);
  assert.equal(rows[0].difficulty, null);
});

test("competitor evidence rejects unsafe URLs and invalid estimates", async () => {
  for (const row of [
    { page: "javascript:alert(1)" },
    { page: "https://user:secret@example.com/xrp" },
    { page: "https://www.allaboutxrp.com/learn/xrp" },
    { position: 0 },
    { volume: -1 },
    { difficulty: 101 }
  ]) {
    const file = await competitorFile([{ query: "xrp wallets", page: "https://example.com/wallets", position: 3, ...row }], "json");
    await assert.rejects(loadCompetitorEvidence(file, origin));
  }
});

test("keyword gaps exclude observed demand in either window and preserve discovery-only provenance", () => {
  const competitorRows = ["xrp wallets", "xrp custody", "xrp ledger", "all about xrp wallets", "unrelated settlement"].map((query) => ({ query, page: "https://example.com/article", position: 3, volume: 100, difficulty: 10 }));
  const gaps = buildKeywordGaps({ competitorRows, currentRows: [{ query: "xrp custody", impressions: 1 }], previousRows: [{ query: "xrp ledger", impressions: 1 }], catalog, brandTerms: config.brandTerms });
  assert.deepEqual(gaps.map((gap) => gap.query), ["unrelated settlement", "xrp wallets"]);
  const mapped = gaps.find((gap) => gap.query === "xrp wallets");
  assert.equal(mapped.existingPageCandidates[0].page, page);
  assert.equal(mapped.mappingState, "existing_page_review");
  assert.equal(mapped.evidenceState, "third_party_estimate");
  assert.equal(mapped.approvalState, "discovery_only");
  assert.match(mapped.observation, /does not establish/);
  assert.equal(gaps[0].mappingState, "catalog_review_required");
});

const opening = "XRP wallets hold the keys used to authorize transactions on the XRP Ledger. Choose a wallet based on custody and security needs.";
const html = `<html><head><title>XRP Wallets &amp; Keys</title><meta content="Wallets &amp; custody" name="description"></head><body><nav><h1>Navigation</h1></nav><main><article><h1>XRP <span>Wallets</span></h1><p>Updated today</p><p>${opening}</p><a href="/learn/security#keys">Security &amp; keys</a><a href="/learn/security">Duplicate</a><a href="https://example.com">External</a><a href="#top">Top</a></article></main><script><h1>Injected</h1></script></body></html>`;

test("editing extraction uses article content, decodes text, and excludes external/navigation links", () => {
  const content = extractPageContent(html, page);
  assert.equal(content.title, "XRP Wallets & Keys");
  assert.equal(content.h1, "XRP Wallets");
  assert.equal(content.description, "Wallets & custody");
  assert.equal(content.openingAnswer, opening);
  assert.deepEqual(content.internalLinks, [{ page: `${origin}/learn/security`, anchor: "Security & keys" }]);
  assert.equal(extractPageContent("<title>Only title</title><p>No page body</p>", page).openingAnswer, null);
});

test("editing briefs preserve sourced opening and gate unavailable content or competing intents", () => {
  const opportunity = { query: "xrp wallets", page, signals: { cannibalizationRisk: false } };
  assert.equal(buildEditingBrief(opportunity, catalog).state, "not_available");
  const liveCatalog = [{ ...catalog[0], content: extractPageContent(html, page) }];
  const brief = buildEditingBrief(opportunity, liveCatalog);
  assert.equal(brief.state, "draft_for_review");
  assert.equal(brief.proposed.title, "XRP wallets | AllAboutXRP");
  assert.equal(brief.proposed.openingAnswer, opening);
  assert.ok(brief.proposed.description.length <= 160);
  const consolidation = buildEditingBrief({ ...opportunity, signals: { cannibalizationRisk: true } }, liveCatalog);
  assert.equal(consolidation.state, "intent_review_required");
  assert.equal(consolidation.proposed, null);
  assert.equal(buildEditingBrief(opportunity, [{ ...liveCatalog[0], verificationState: "verification_failed" }]).state, "not_available");
});

test("full static catalog maps topics absent from the supplied GSC pages", async () => {
  const fullCatalog = await buildAaxrpCatalog({ repoRoot: process.cwd(), origin, evidencePages: [`${origin}/learn/what-is-xrp`], includeAllRoutes: true });
  const gaps = buildKeywordGaps({ competitorRows: [{ query: "xrp bitcoin", page: "https://example.com/bitcoin", position: 5, volume: null, difficulty: null }], currentRows: [], previousRows: [], catalog: fullCatalog, brandTerms: config.brandTerms });
  assert.ok(gaps[0].existingPageCandidates.some((item) => item.page.includes("bitcoin")));
  assert.ok(fullCatalog.length > 100);
});

test("discovery candidates cannot enter the experiment approval ledger", async () => {
  const report = cycleAt(5);
  const [gap] = buildKeywordGaps({ competitorRows: [{ query: "xrp custody", page: "https://example.com/custody", position: 5, volume: null, difficulty: null }], currentRows: [], previousRows: [], catalog, brandTerms: config.brandTerms });
  report.keywordGaps = [gap];
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-gap-ledger-"));
  await assert.rejects(approveOpportunity({ ledgerPath: path.join(directory, "ledger.json"), report, opportunityId: gap.id }), /Opportunity not found in report/);
});

test("HTML report escapes hostile competitor queries and retrieved editing copy", () => {
  const hostile = '</script><script>alert("unsafe")</script>';
  const report = cycleAt(5);
  const liveCatalog = [{ ...catalog[0], content: { ...extractPageContent(html, page), title: hostile, openingAnswer: hostile } }];
  report.opportunities[0].editingBrief = buildEditingBrief(report.opportunities[0], liveCatalog);
  report.keywordGaps = buildKeywordGaps({ competitorRows: [{ query: hostile, page: "https://example.com/topic", position: 5, volume: null, difficulty: null }], currentRows: [], previousRows: [], catalog, brandTerms: config.brandTerms });
  const rendered = renderHtmlReport(report, { reportJsonPath: "/tmp/report.json", ledgerPath: "/tmp/ledger.json" });
  assert.ok(!rendered.includes(hostile));
  assert.match(rendered, /&lt;\/script&gt;&lt;script&gt;/);
  assert.match(rendered, /\\u003c\/script\\u003e/);
});

test("wallet security mapping normalizes domain plurals and prioritizes relevant live copy", () => {
  const liveCatalog = [
    { ...catalog[0], content: extractPageContent(html, page) },
    { page: `${origin}/answers/is-xrp-a-security`, indexability: "eligible", content: { title: "Is XRP a security?", openingAnswer: "Read about the legal classification of XRP." } }
  ];
  const [gap] = buildKeywordGaps({ competitorRows: [{ query: "xrp wallet security", page: "https://example.com/wallet-security", position: 3, volume: 500, difficulty: 25 }], currentRows: [], previousRows: [], catalog: liveCatalog, brandTerms: config.brandTerms });
  assert.equal(gap.existingPageCandidates[0].page, page);
  assert.equal(gap.existingPageCandidates[0].score, 1);
  assert.equal(gap.existingPageCandidates[1].page, `${origin}/answers/is-xrp-a-security`);
  assert.equal(gap.existingPageCandidates[1].score, 0.5);
});
