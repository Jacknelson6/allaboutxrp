#!/usr/bin/env node
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { buildAaxrpCatalog, verifyCatalogLive } from "./catalog.mjs";
import { loadSearchEvidence } from "./evidence.mjs";
import { authorizeSearchConsole, DEFAULT_GSC_TOKEN_PATH, listSearchConsoleSites, pullSearchConsoleEvidence } from "./gsc.mjs";
import { runGrowthCycle } from "./growth-cycle.mjs";
import { activateIntervention, approveOpportunity, closeIntervention, loadLedger } from "./ledger.mjs";
import { sendNotification } from "./notifiers.mjs";
import { renderHtmlReport } from "./report-html.mjs";
import { inclusiveDays, invariant, parseArgs, parseIsoDate, readJson, writeJsonAtomic, writeTextAtomic } from "./utils.mjs";

const catalogAdapters = { "aaxrp-next-app": buildAaxrpCatalog };

function required(options, key) {
  invariant(options[key], `Missing required option: --${key}`);
  return path.resolve(options[key]);
}

function help() {
  console.log(`AAXRP Search Growth Engine

Run a report:
  npm run growth:run -- --current <csv|json> --previous <csv|json> \\
    --current-start YYYY-MM-DD --current-end YYYY-MM-DD \\
    --previous-start YYYY-MM-DD --previous-end YYYY-MM-DD --out <directory>

Authorize Google Search Console with a Desktop OAuth client:
  npm run growth:gsc-auth -- --client <client-secret.json>

List the authorized Search Console properties:
  npm run growth:gsc-sites

Pull finalized daily query-page evidence:
  npm run growth:gsc-pull -- --start YYYY-MM-DD --end YYYY-MM-DD --out <evidence.json>

Approve one bounded intervention:
  npm run growth:approve -- --report <report.json> --opportunity <id> --ledger <ledger.json>

Activate only after the approved change is live:
  npm run growth:activate -- --ledger <ledger.json> --intervention <id> --implemented-at YYYY-MM-DD

Close an experiment:
  npm run growth:close -- --ledger <ledger.json> --intervention <id> --state winning|neutral|losing|stopped

Send or dry-run a summary:
  npm run growth:notify -- --report <report.json> --provider telegram|google-chat --dry-run
`);
}

function periodsFrom(options) {
  const periods = {
    current: { start: String(options["current-start"]), end: String(options["current-end"]) },
    previous: { start: String(options["previous-start"]), end: String(options["previous-end"]) }
  };
  const currentDays = inclusiveDays(parseIsoDate(periods.current.start, "current-start"), parseIsoDate(periods.current.end, "current-end"));
  const previousDays = inclusiveDays(parseIsoDate(periods.previous.start, "previous-start"), parseIsoDate(periods.previous.end, "previous-end"));
  invariant(currentDays === previousDays, `Comparison windows must have equal duration. Current: ${currentDays} days. Previous: ${previousDays} days.`);
  invariant(periods.previous.end < periods.current.start, "Previous period must end before the current period starts");
  const settledThrough = new Date();
  settledThrough.setUTCHours(0, 0, 0, 0);
  settledThrough.setUTCDate(settledThrough.getUTCDate() - 3);
  const isSettled = parseIsoDate(periods.current.end, "current-end") <= settledThrough;
  invariant(isSettled || options["allow-unsettled"], "Current period must end at least three days ago. Use --allow-unsettled only for an explicitly incomplete diagnostic run.");
  periods.settlementState = isSettled ? "settled" : "unsettled_override";
  return periods;
}

function validateConfig(config) {
  invariant(config.schemaVersion === 1, "Search growth config has an unsupported schema");
  invariant(config.site?.id && config.site?.name && config.site?.origin, "Config site requires id, name, and origin");
  invariant(catalogAdapters[config.site.catalogAdapter], `Unsupported catalog adapter: ${config.site.catalogAdapter}`);
  invariant(new URL(config.site.origin).protocol === "https:", "Config site origin must use HTTPS");
  invariant(Array.isArray(config.brandTerms) && config.brandTerms.length > 0, "Config requires at least one brand term");
  const requiredThresholds = ["minimumImpressions", "minimumCtrRows", "minimumAssessmentImpressions", "minimumControls", "winningClickLift", "losingClickLift"];
  for (const key of requiredThresholds) invariant(Number.isFinite(config.thresholds?.[key]), `Config threshold must be numeric: ${key}`);
  invariant(config.thresholds.minimumImpressions > 0 && config.thresholds.minimumCtrRows > 0, "Minimum evidence thresholds must be positive");
  invariant(config.thresholds.winningClickLift > 0 && config.thresholds.losingClickLift < 0, "Winning and losing lift thresholds must straddle zero");
}

async function run(options) {
  const configPath = path.resolve(options.config || "search-growth.config.json");
  const config = await readJson(configPath);
  validateConfig(config);
  const periods = periodsFrom(options);
  const [currentRows, previousRows] = await Promise.all([
    loadSearchEvidence(required(options, "current"), config.site.origin),
    loadSearchEvidence(required(options, "previous"), config.site.origin)
  ]);
  const configuredRoot = path.resolve(path.dirname(configPath), config.site.repoRoot || ".");
  const buildCatalog = catalogAdapters[config.site.catalogAdapter];
  let catalog = await buildCatalog({ repoRoot: configuredRoot, origin: config.site.origin, evidencePages: [...currentRows, ...previousRows].map((row) => row.page) });
  if (options["verify-live"]) catalog = await verifyCatalogLive(catalog, { origin: config.site.origin });
  const out = required(options, "out");
  const ledgerPath = path.resolve(options.ledger || path.join(out, "experiment-ledger.json"));
  const ledger = await loadLedger(ledgerPath);
  const report = runGrowthCycle({ config, currentRows, previousRows, catalog, periods, ledger, verificationMode: options["verify-live"] ? "live" : "local" });
  await mkdir(out, { recursive: true });
  const jsonPath = path.join(out, `search-growth-${report.runId}.json`);
  const htmlPath = path.join(out, `search-growth-${report.runId}.html`);
  await writeJsonAtomic(jsonPath, report);
  await writeTextAtomic(htmlPath, renderHtmlReport(report, { reportJsonPath: jsonPath, ledgerPath }));
  console.log(JSON.stringify({ runId: report.runId, opportunities: report.opportunities.length, jsonPath, htmlPath, ledgerPath }, null, 2));
}

async function approve(options) {
  const reportPath = required(options, "report");
  const ledgerPath = required(options, "ledger");
  invariant(options.opportunity, "Missing required option: --opportunity");
  const intervention = await approveOpportunity({ ledgerPath, report: await readJson(reportPath), opportunityId: String(options.opportunity), note: options.note ? String(options.note) : "" });
  console.log(JSON.stringify({ approved: true, intervention }, null, 2));
}

async function activate(options) {
  const ledgerPath = required(options, "ledger");
  invariant(options.intervention, "Missing required option: --intervention");
  invariant(options["implemented-at"], "Missing required option: --implemented-at");
  const intervention = await activateIntervention({ ledgerPath, interventionId: String(options.intervention), implementationDate: String(options["implemented-at"]), note: options.note ? String(options.note) : "" });
  console.log(JSON.stringify({ activated: true, intervention }, null, 2));
}

async function close(options) {
  const ledgerPath = required(options, "ledger");
  invariant(options.intervention, "Missing required option: --intervention");
  invariant(options.state, "Missing required option: --state");
  const intervention = await closeIntervention({ ledgerPath, interventionId: String(options.intervention), decisionState: String(options.state), note: options.note ? String(options.note) : "" });
  console.log(JSON.stringify({ closed: true, intervention }, null, 2));
}

async function notify(options) {
  const report = await readJson(required(options, "report"));
  const provider = String(options.provider || "none");
  const result = await sendNotification({ provider, report, dryRun: Boolean(options["dry-run"]) });
  console.log(JSON.stringify(result, null, 2));
}

async function gscAuth(options) {
  const clientPath = required(options, "client");
  const tokenPath = path.resolve(options.token || DEFAULT_GSC_TOKEN_PATH);
  const result = await authorizeSearchConsole({
    clientPath,
    tokenPath,
    onAuthorizationUrl(url) {
      console.log(`AUTHORIZATION_URL=${url}`);
    }
  });
  console.log(JSON.stringify({ authorized: true, tokenPath: result.tokenPath, scope: result.scope }, null, 2));
}

async function gscSites(options) {
  const tokenPath = path.resolve(options.token || DEFAULT_GSC_TOKEN_PATH);
  const sites = await listSearchConsoleSites({ tokenPath });
  console.log(JSON.stringify({ sites: sites.map(({ siteUrl, permissionLevel }) => ({ siteUrl, permissionLevel })) }, null, 2));
}

async function gscPull(options) {
  const configPath = path.resolve(options.config || "search-growth.config.json");
  const config = await readJson(configPath);
  validateConfig(config);
  invariant(options.start && options.end, "Missing required options: --start and --end");
  const tokenPath = path.resolve(options.token || DEFAULT_GSC_TOKEN_PATH);
  const evidence = await pullSearchConsoleEvidence({
    tokenPath,
    origin: config.site.origin,
    preferredProperty: options.property || config.site.gscProperty,
    startDate: String(options.start),
    endDate: String(options.end)
  });
  const out = required(options, "out");
  await writeJsonAtomic(out, evidence);
  console.log(JSON.stringify({ property: evidence.property, rows: evidence.rows.length, requestCount: evidence.requestCount, out }, null, 2));
}

const { command, options } = parseArgs(process.argv.slice(2));
try {
  if (command === "run") await run(options);
  else if (command === "gsc-auth") await gscAuth(options);
  else if (command === "gsc-sites") await gscSites(options);
  else if (command === "gsc-pull") await gscPull(options);
  else if (command === "approve") await approve(options);
  else if (command === "activate") await activate(options);
  else if (command === "close") await close(options);
  else if (command === "notify") await notify(options);
  else help();
} catch (error) {
  console.error(`Search growth engine failed: ${error.message}`);
  process.exitCode = 1;
}
