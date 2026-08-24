import assert from "node:assert/strict";
import { mkdtemp, readFile, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { buildAaxrpCatalog, verifyCatalogLive } from "../search-growth/catalog.mjs";
import { loadSearchEvidence } from "../search-growth/evidence.mjs";
import { assessLedger, runGrowthCycle } from "../search-growth/growth-cycle.mjs";
import { buildAuthorizationUrl, listSearchConsoleSites, querySearchAnalytics, SEARCH_CONSOLE_READONLY_SCOPE, selectSearchConsoleProperty } from "../search-growth/gsc.mjs";
import { activateIntervention, approveOpportunity, closeIntervention, loadLedger } from "../search-growth/ledger.mjs";
import { buildNotification, sendNotification } from "../search-growth/notifiers.mjs";
import { renderHtmlReport } from "../search-growth/report-html.mjs";
import { parseIsoDate } from "../search-growth/utils.mjs";

const origin = "https://allaboutxrp.com";
const fixtureRoot = path.resolve("scripts/search-growth/fixtures");
const config = {
  schemaVersion: 1,
  site: { id: "aaxrp", name: "All About XRP", origin, rankPromptUrl: "https://app.rankprompt.com" },
  brandTerms: ["all about xrp", "aaxrp"],
  thresholds: { minimumImpressions: 50, minimumCtrRows: 3, minimumAssessmentImpressions: 50, minimumControls: 2, winningClickLift: 0.1, losingClickLift: -0.1 }
};
const periods = { previous: { start: "2026-06-01", end: "2026-06-28" }, current: { start: "2026-06-29", end: "2026-07-26" } };

async function fixtureRows() {
  return {
    currentRows: await loadSearchEvidence(path.join(fixtureRoot, "aaxrp-current.csv"), origin),
    previousRows: await loadSearchEvidence(path.join(fixtureRoot, "aaxrp-previous.csv"), origin)
  };
}

function catalogFor(rows) {
  return [...new Set(rows.map((row) => row.page))].map((page) => ({ page, sourcePath: "src/app/example/page.tsx", indexability: "eligible", verificationState: "live_verified" }));
}

test("CSV evidence normalizes CTR and canonical host aliases", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const file = path.join(directory, "evidence.csv");
  await writeFile(file, "Query,Page,Clicks,Impressions,CTR,Position\nXRP facts,https://www.allaboutxrp.com/learn/what-is-xrp/?utm_source=test,5,100,5%,7\n", "utf8");
  const [row] = await loadSearchEvidence(file, origin);
  assert.equal(row.query, "xrp facts");
  assert.equal(row.page, "https://allaboutxrp.com/learn/what-is-xrp");
  assert.equal(row.ctr, 0.05);
});

test("evidence fails closed for off-site URLs and malformed counts", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const offsite = path.join(directory, "offsite.csv");
  await writeFile(offsite, "Query,Page,Clicks,Impressions,CTR,Position\nxrp,https://example.com/xrp,2,10,20%,4\n", "utf8");
  await assert.rejects(loadSearchEvidence(offsite, origin), /outside the configured site/);
  const malformed = path.join(directory, "malformed.csv");
  await writeFile(malformed, "Query,Page,Clicks,Impressions,CTR,Position\nxrp,https://allaboutxrp.com/xrp,20,10,200%,4\n", "utf8");
  await assert.rejects(loadSearchEvidence(malformed, origin), /clicks cannot exceed impressions/);
  const credentials = path.join(directory, "credentials.csv");
  await writeFile(credentials, "Query,Page,Clicks,Impressions,CTR,Position\nxrp,https://user:secret@allaboutxrp.com/xrp,2,10,20%,4\n", "utf8");
  await assert.rejects(loadSearchEvidence(credentials, origin), /cannot contain credentials/);
});

test("AAXRP catalog prefers exact route modules over dynamic fallbacks", async () => {
  const [exact, aliasSource, aliasDestination] = await buildAaxrpCatalog({ repoRoot: process.cwd(), origin, evidencePages: [`${origin}/learn/what-is-xrp`, `${origin}/answers/best-altcoins-2026`, `${origin}/learn/altcoins-2026`] });
  assert.equal(exact.indexability, "eligible");
  assert.equal(exact.sourcePath, "src/app/learn/what-is-xrp/page.tsx");
  assert.equal(aliasSource.indexability, "alias");
  assert.equal(aliasDestination.indexability, "eligible");
});

test("live catalog verification requires canonical URL, indexability, and sitemap membership", async () => {
  const page = `${origin}/learn/what-is-xrp`;
  const fetchImpl = async (input) => {
    const url = String(input);
    if (url.endsWith("/sitemap.xml")) return { ok: true, status: 200, text: async () => `<urlset><url><loc>${page}</loc></url></urlset>` };
    return { ok: true, status: 200, url: page, text: async () => `<html><head><link href="${page}" rel="canonical"><meta name="robots" content="index,follow"></head></html>` };
  };
  const [verified] = await verifyCatalogLive([{ page, indexability: "eligible", verificationState: "local_only" }], { origin, fetchImpl });
  assert.equal(verified.verificationState, "live_verified");
  const redirectFetch = async (input) => String(input).endsWith("/sitemap.xml")
    ? { ok: true, status: 200, text: async () => `<urlset><url><loc>${page}</loc></url></urlset>` }
    : { ok: true, status: 200, url: `${origin}/learn/xrp`, text: async () => "" };
  const [redirected] = await verifyCatalogLive([{ page, indexability: "eligible", verificationState: "local_only" }], { origin, fetchImpl: redirectFetch });
  assert.equal(redirected.verificationReason, "redirect_or_alias");
});

test("growth cycle excludes branded demand and distinguishes observed from estimated evidence", async () => {
  const { currentRows, previousRows } = await fixtureRows();
  const report = runGrowthCycle({ config, currentRows, previousRows, catalog: catalogFor(currentRows), periods, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  assert.ok(report.opportunities.length >= 4);
  assert.ok(report.opportunities.every((item) => item.query !== "all about xrp"));
  const recovery = report.opportunities.find((item) => item.query === "what is xrp");
  assert.equal(recovery.evidenceState, "observed");
  assert.equal(recovery.signals.observedClickLoss, 15);
  assert.equal(report.methodology.aeoGeoSystemOfRecord, "RankPrompt");
  assert.equal(report.methodology.contentWritesEnabled, false);
  assert.equal(report.engineVersion, "1.1.0");
  assert.ok(report.controlPool.length >= 3);
  assert.deepEqual(Object.keys(recovery.scoreComponents), ["impact", "confidence", "riskDeduction"]);
});

test("growth cycle excludes unknown pages and does not call positions 8 through 10 page two", () => {
  const row = { query: "xrp example", page: `${origin}/learn/example`, clicks: 10, impressions: 100, ctr: 0.1, position: 9 };
  const strictConfig = { ...config, thresholds: { ...config.thresholds, minimumCtrRows: 999 } };
  const unknown = runGrowthCycle({ config: strictConfig, currentRows: [row], previousRows: [row], catalog: [{ page: row.page, indexability: "unknown", verificationState: "local_only" }], periods, ledger: { schemaVersion: 1, interventions: [] } });
  assert.equal(unknown.opportunities.length, 0);
  const eligible = runGrowthCycle({ config: strictConfig, currentRows: [row], previousRows: [row], catalog: catalogFor([row]), periods, ledger: { schemaVersion: 1, interventions: [] } });
  assert.equal(eligible.opportunities.length, 0);
});

test("live verification mode excludes pages that fail remote verification", () => {
  const row = { query: "xrp example", page: `${origin}/learn/example`, clicks: 5, impressions: 100, ctr: 0.05, position: 12 };
  const report = runGrowthCycle({ config, currentRows: [row], previousRows: [row], catalog: [{ page: row.page, indexability: "eligible", verificationState: "verification_failed", verificationReason: "http_404" }], periods, ledger: { schemaVersion: 1, interventions: [] }, verificationMode: "live" });
  assert.equal(report.opportunities.length, 0);
});

test("approval ledger is append-only and rejects duplicate active enrollment", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const ledgerPath = path.join(directory, "ledger.json");
  const { currentRows, previousRows } = await fixtureRows();
  const report = runGrowthCycle({ config, currentRows, previousRows, catalog: catalogFor(currentRows), periods, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  const opportunity = report.opportunities[0];
  const approved = await approveOpportunity({ ledgerPath, report, opportunityId: opportunity.id, note: "bounded test" });
  assert.equal(approved.decisionState, "approved");
  assert.ok(approved.controlBaseline.length >= 2);
  assert.equal(approved.measurementDates, null);
  assert.equal((await loadLedger(ledgerPath)).interventions.length, 1);
  await assert.rejects(approveOpportunity({ ledgerPath, report, opportunityId: opportunity.id }), /active intervention already exists/);
});

test("activation starts the clock after implementation and closure frees the lifecycle", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const ledgerPath = path.join(directory, "ledger.json");
  const { currentRows, previousRows } = await fixtureRows();
  const report = runGrowthCycle({ config, currentRows, previousRows, catalog: catalogFor(currentRows), periods, ledger: { schemaVersion: 1, interventions: [] } });
  const approved = await approveOpportunity({ ledgerPath, report, opportunityId: report.opportunities[0].id });
  const activated = await activateIntervention({ ledgerPath, interventionId: approved.id, implementationDate: "2026-07-27" });
  assert.equal(activated.decisionState, "active");
  assert.equal(activated.measurementDates.day28, "2026-08-24");
  const closed = await closeIntervention({ ledgerPath, interventionId: approved.id, decisionState: "stopped", note: "test complete" });
  assert.equal(closed.decisionState, "stopped");
  assert.equal((await loadLedger(ledgerPath)).interventions[0].decisionState, "stopped");
});

test("approval rejects a concurrently locked ledger without overwriting it", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const ledgerPath = path.join(directory, "ledger.json");
  await writeFile(`${ledgerPath}.lock`, "held", "utf8");
  const { currentRows, previousRows } = await fixtureRows();
  const report = runGrowthCycle({ config, currentRows, previousRows, catalog: catalogFor(currentRows), periods, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  await assert.rejects(approveOpportunity({ ledgerPath, report, opportunityId: report.opportunities[0].id }), /locked by another approval/);
  assert.equal((await loadLedger(ledgerPath)).interventions.length, 0);
});

test("approval rejects an unsettled diagnostic report", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const { currentRows, previousRows } = await fixtureRows();
  const report = runGrowthCycle({ config, currentRows, previousRows, catalog: catalogFor(currentRows), periods: { ...periods, settlementState: "unsettled_override" }, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  await assert.rejects(approveOpportunity({ ledgerPath: path.join(directory, "ledger.json"), report, opportunityId: report.opportunities[0].id }), /cannot be approved from an unsettled/);
});

test("approval rejects an experiment that cannot support its comparison policy", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const row = { query: "xrp example", page: `${origin}/learn/example`, clicks: 5, impressions: 100, ctr: 0.05, position: 12 };
  const report = runGrowthCycle({ config, currentRows: [row], previousRows: [{ ...row, clicks: 6, ctr: 0.06 }], catalog: catalogFor([row]), periods, ledger: { schemaVersion: 1, interventions: [] }, verificationMode: "live" });
  await assert.rejects(approveOpportunity({ ledgerPath: path.join(directory, "ledger.json"), report, opportunityId: report.opportunities[0].id }), /requires at least 2 verified comparison rows/);
});

test("approval rejects a surfaced candidate with an insufficient experiment baseline", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const lowVolumeConfig = { ...config, thresholds: { ...config.thresholds, minimumImpressions: 10, minimumAssessmentImpressions: 50 } };
  const row = { query: "xrp example", page: `${origin}/learn/example`, clicks: 1, impressions: 20, ctr: 0.05, position: 12 };
  const report = runGrowthCycle({ config: lowVolumeConfig, currentRows: [row], previousRows: [], catalog: catalogFor([row]), periods, ledger: { schemaVersion: 1, interventions: [] }, verificationMode: "live" });
  assert.equal(report.opportunities[0].approvalState, "insufficient_baseline");
  assert.match(renderHtmlReport(report, { reportJsonPath: "/tmp/report.json", ledgerPath: "/tmp/ledger.json" }), /At least 50 baseline impressions are required\. Found 20\./);
  await assert.rejects(approveOpportunity({ ledgerPath: path.join(directory, "ledger.json"), report, opportunityId: report.opportunities[0].id }), /baseline requires at least 50 impressions/);
});

test("HTML report escapes untrusted evidence and safely embeds JSON", async () => {
  const { currentRows, previousRows } = await fixtureRows();
  currentRows[0].query = "</script><script>alert(1)</script>";
  previousRows[0].query = currentRows[0].query;
  const report = runGrowthCycle({ config, currentRows, previousRows, catalog: catalogFor(currentRows), periods, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  const html = renderHtmlReport(report, { reportJsonPath: "/tmp/report.json", ledgerPath: "/tmp/ledger.json" });
  assert.ok(!html.includes("</script><script>alert(1)</script>"));
  assert.match(html, /\\u003c\/script\\u003e/);
  const spaced = renderHtmlReport(report, { reportJsonPath: "/tmp/report path.json", ledgerPath: "/tmp/ledger path.json" });
  assert.match(spaced, /&#039;\/tmp\/report path\.json&#039;/);
});

test("notification adapters support secret-free dry runs", async () => {
  const { currentRows, previousRows } = await fixtureRows();
  const report = runGrowthCycle({ config, currentRows, previousRows, catalog: catalogFor(currentRows), periods, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  const telegram = buildNotification({ provider: "telegram", report });
  assert.equal(telegram.configured, false);
  assert.equal(telegram.payload.chat_id, "[TELEGRAM_CHAT_ID]");
  const dryRun = await sendNotification({ provider: "google-chat", report, dryRun: true });
  assert.equal(dryRun.sent, false);
  assert.ok(JSON.stringify(dryRun).includes("RankPrompt"));
  assert.ok(!JSON.stringify(dryRun).includes("GOOGLE_CHAT_WEBHOOK_URL"));
});

test("raw Search Analytics JSON accepts query and page dimensions", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-growth-"));
  const file = path.join(directory, "gsc.json");
  await writeFile(file, JSON.stringify({ rows: [{ keys: ["what is xrp", "https://allaboutxrp.com/learn/what-is-xrp"], clicks: 8, impressions: 100, ctr: 0.08, position: 5.2 }] }), "utf8");
  const [row] = await loadSearchEvidence(file, origin);
  assert.equal(row.clicks, 8);
  assert.equal(row.position, 5.2);
});

test("Google OAuth authorization requests only read-only Search Console access", () => {
  const url = new URL(buildAuthorizationUrl({ clientId: "client-id", redirectUri: "http://127.0.0.1:1234/oauth2/callback", state: "state", codeChallenge: "challenge" }));
  assert.equal(url.searchParams.get("scope"), SEARCH_CONSOLE_READONLY_SCOPE);
  assert.equal(url.searchParams.get("access_type"), "offline");
  assert.equal(url.searchParams.get("code_challenge_method"), "S256");
  assert.ok(!url.href.includes("cloud-platform"));
});

test("Search Console property selection prefers the exact domain property", () => {
  const selected = selectSearchConsoleProperty([
    { siteUrl: "https://allaboutxrp.com/", permissionLevel: "siteFullUser" },
    { siteUrl: "sc-domain:allaboutxrp.com", permissionLevel: "siteOwner" }
  ], { origin });
  assert.equal(selected.siteUrl, "sc-domain:allaboutxrp.com");
});

test("Search Console property fallback selects the broadest secure URL prefix", () => {
  const selected = selectSearchConsoleProperty([
    { siteUrl: "https://allaboutxrp.com/learn/", permissionLevel: "siteOwner" },
    { siteUrl: "http://allaboutxrp.com/", permissionLevel: "siteOwner" },
    { siteUrl: "https://allaboutxrp.com/", permissionLevel: "siteOwner" }
  ], { origin });
  assert.equal(selected.siteUrl, "https://allaboutxrp.com/");
});

test("Search Console evidence queries each finalized day and paginates", async () => {
  const requests = [];
  const fetchImpl = async (_url, options) => {
    const body = JSON.parse(options.body);
    requests.push(body);
    const rows = body.startRow === 0
      ? [
          { keys: ["what is xrp", `${origin}/learn/what-is-xrp`], clicks: 2, impressions: 20, ctr: 0.1, position: 5 },
          { keys: ["xrp ledger", `${origin}/learn/xrp-ledger`], clicks: 1, impressions: 20, ctr: 0.05, position: 8 }
        ]
      : [{ keys: ["xrp wallet", `${origin}/learn/xrp-wallets`], clicks: 1, impressions: 10, ctr: 0.1, position: 7 }];
    return { ok: true, status: 200, text: async () => JSON.stringify({ rows }) };
  };
  const evidence = await querySearchAnalytics({
    siteUrl: "sc-domain:allaboutxrp.com",
    startDate: "2026-08-01",
    endDate: "2026-08-02",
    token: "redacted",
    fetchImpl,
    rowLimit: 2
  });
  assert.equal(evidence.rows.length, 6);
  assert.equal(evidence.requestCount, 4);
  assert.deepEqual(requests.map(({ startDate, startRow }) => [startDate, startRow]), [["2026-08-01", 0], ["2026-08-01", 2], ["2026-08-02", 0], ["2026-08-02", 2]]);
  assert.ok(requests.every((request) => request.dataState === "final" && request.dimensions.join(",") === "query,page"));
});

test("Search Console access refreshes expired credentials without loosening file permissions", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "aaxrp-gsc-"));
  const tokenPath = path.join(directory, "token.json");
  await writeFile(tokenPath, JSON.stringify({ schemaVersion: 1, clientId: "client", clientSecret: "secret", refreshToken: "refresh", accessToken: "expired", expiresAt: 0, scope: SEARCH_CONSOLE_READONLY_SCOPE }), { mode: 0o600 });
  const requests = [];
  const fetchImpl = async (url, options) => {
    requests.push({ url: String(url), authorization: options.headers?.authorization });
    if (String(url).includes("oauth2.googleapis.com")) return { ok: true, status: 200, text: async () => JSON.stringify({ access_token: "fresh", expires_in: 3600, token_type: "Bearer" }) };
    return { ok: true, status: 200, text: async () => JSON.stringify({ siteEntry: [{ siteUrl: "sc-domain:allaboutxrp.com", permissionLevel: "siteOwner" }] }) };
  };
  const sites = await listSearchConsoleSites({ tokenPath, fetchImpl });
  assert.equal(sites[0].siteUrl, "sc-domain:allaboutxrp.com");
  assert.equal(requests[1].authorization, "Bearer fresh");
  assert.equal(JSON.parse(await readFile(tokenPath, "utf8")).accessToken, "fresh");
  assert.equal((await stat(tokenPath)).mode & 0o777, 0o600);
});

test("date parsing rejects impossible calendar dates", () => {
  assert.throws(() => parseIsoDate("2026-02-31", "current-end"), /not a real calendar date/);
});

test("experiment readouts normalize page lift against unchanged controls", () => {
  const ledger = {
    schemaVersion: 1,
    interventions: [{
      id: "intervention-1",
      page: `${origin}/learn/what-is-xrp`,
      query: "what is xrp",
      decisionState: "active",
      baselinePeriod: { start: "2026-06-29", end: "2026-07-26" },
      implementationDate: "2026-07-27",
      baseline: { clicks: 10, impressions: 100, ctr: 0.1, position: 5 },
      controlBaseline: [
        { query: "xrp ledger", page: `${origin}/learn/xrp-ledger`, clicks: 10, impressions: 100 },
        { query: "xrp wallet", page: `${origin}/learn/xrp-wallets`, clicks: 10, impressions: 100 }
      ],
      measurementDates: { day28: "2026-08-23", day56: "2026-09-20", day90: "2026-10-24", day120: "2026-11-23" }
    }]
  };
  const currentRows = [
    { query: "what is xrp", page: `${origin}/learn/what-is-xrp`, clicks: 20, impressions: 200, ctr: 0.1, position: 5 },
    { query: "xrp ledger", page: `${origin}/learn/xrp-ledger`, clicks: 20, impressions: 200, ctr: 0.1, position: 5 },
    { query: "xrp wallet", page: `${origin}/learn/xrp-wallets`, clicks: 20, impressions: 200, ctr: 0.1, position: 5 }
  ];
  const [readout] = assessLedger({ ledger, currentRows, currentPeriod: { start: "2026-08-24", end: "2026-09-20" }, thresholds: config.thresholds });
  assert.equal(readout.clickLift, 1);
  assert.equal(readout.normalizedClickLift, 0);
  assert.equal(readout.state, "neutral");
  assert.equal(readout.benchmarkState, "descriptive_comparison");
});

test("experiment readouts fail closed without two unchanged controls", () => {
  const ledger = {
    schemaVersion: 1,
    interventions: [{
      id: "intervention-1",
      page: `${origin}/learn/what-is-xrp`,
      query: "what is xrp",
      decisionState: "active",
      baselinePeriod: { start: "2026-06-29", end: "2026-07-26" },
      implementationDate: "2026-07-27",
      baseline: { clicks: 10, impressions: 100, ctr: 0.1, position: 5 },
      controlBaseline: [{ query: "xrp ledger", page: `${origin}/learn/xrp-ledger`, clicks: 10, impressions: 100 }],
      measurementDates: { day28: "2026-08-23", day56: "2026-09-20", day90: "2026-10-24", day120: "2026-11-23" }
    }]
  };
  const currentRows = [
    { query: "what is xrp", page: `${origin}/learn/what-is-xrp`, clicks: 20, impressions: 200, ctr: 0.1, position: 5 },
    { query: "xrp ledger", page: `${origin}/learn/xrp-ledger`, clicks: 20, impressions: 200, ctr: 0.1, position: 5 }
  ];
  const [readout] = assessLedger({ ledger, currentRows, currentPeriod: { start: "2026-08-24", end: "2026-09-20" }, thresholds: config.thresholds });
  assert.equal(readout.state, "needs_more_data");
  assert.equal(readout.normalizedClickLift, null);
  assert.equal(readout.reason, "insufficient_unchanged_controls");
});

test("run identifiers change when evidence metrics change", async () => {
  const { currentRows, previousRows } = await fixtureRows();
  const catalog = catalogFor(currentRows);
  const first = runGrowthCycle({ config, currentRows, previousRows, catalog, periods, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  const changed = currentRows.map((row, index) => index === 0 ? { ...row, clicks: row.clicks + 1, ctr: (row.clicks + 1) / row.impressions } : row);
  const second = runGrowthCycle({ config, currentRows: changed, previousRows, catalog, periods, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  assert.notEqual(first.runId, second.runId);
  const policyChanged = runGrowthCycle({ config: { ...config, thresholds: { ...config.thresholds, minimumImpressions: 75 } }, currentRows, previousRows, catalog, periods, gaEvidence: { state: "not_available", rows: [] }, ledger: { schemaVersion: 1, interventions: [] } });
  assert.notEqual(first.runId, policyChanged.runId);
  const priorChangedRows = previousRows.map((row, index) => index === 0 ? { ...row, clicks: row.clicks + 1, ctr: (row.clicks + 1) / row.impressions } : row);
  const priorChanged = runGrowthCycle({ config, currentRows, previousRows: priorChangedRows, catalog, periods, ledger: { schemaVersion: 1, interventions: [] } });
  assert.notEqual(first.runId, priorChanged.runId);
  const liveMode = runGrowthCycle({ config, currentRows, previousRows, catalog, periods, ledger: { schemaVersion: 1, interventions: [] }, verificationMode: "live" });
  assert.notEqual(first.runId, liveMode.runId);
});
