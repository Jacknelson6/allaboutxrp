import { escapeHtml, safeJsonForHtml } from "./utils.mjs";

function percent(value) {
  if (value === null || value === undefined) return "not available";
  return `${(Number(value) * 100).toFixed(1)}%`;
}

function metric(label, value, detail = "") {
  return `<div class="metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong>${detail ? `<small>${escapeHtml(detail)}</small>` : ""}</div>`;
}

function opportunityCard(item, reportJsonPath, ledgerPath) {
  const flags = [
    item.signals.observedClickLoss > 0 ? `${item.signals.observedClickLoss} observed clicks lost` : null,
    item.signals.estimatedCtrClickGap > 0 ? `${item.signals.estimatedCtrClickGap} estimated CTR clicks` : null,
    item.signals.pageTwo ? "page-two range" : null,
    item.signals.cannibalizationRisk ? "cannibalization review" : null,
    item.verificationState !== "live_verified" ? "live verification required" : null
  ].filter(Boolean);
  const command = `npm run growth:approve -- --report ${shellQuote(reportJsonPath)} --opportunity ${shellQuote(item.id)} --ledger ${shellQuote(ledgerPath)}`;
  const approvalMessage = item.approvalState === "candidate"
    ? command
    : item.approvalState === "verification_required"
      ? "Rerun this evidence with --verify-live before approval."
      : item.approvalState === "insufficient_baseline"
        ? `At least ${item.minimumAssessmentImpressions} baseline impressions are required. Found ${item.current.impressions}.`
        : `At least ${item.minimumControls} verified comparison rows are required. Found ${item.comparisonCandidates}.`;
  return `<article class="card opportunity">
    <div class="card-top"><span class="priority">Priority ${item.priority}</span><span class="state ${escapeHtml(item.evidenceState)}">${escapeHtml(item.evidenceState)}</span></div>
    <h3>${escapeHtml(item.query)}</h3>
    <a href="${escapeHtml(item.page)}">${escapeHtml(new URL(item.page).pathname)}</a>
    <p>${escapeHtml(item.recommendation)}</p>
    <div class="metrics">
      ${metric("Clicks", item.current.clicks, item.previous ? `was ${item.previous.clicks}` : "no comparison row")}
      ${metric("Impressions", item.current.impressions, item.previous ? `was ${item.previous.impressions}` : "")}
      ${metric("CTR", percent(item.current.ctr), item.previous ? `was ${percent(item.previous.ctr)}` : "")}
      ${metric("Position", item.current.position, item.previous ? `was ${item.previous.position}` : "")}
    </div>
    <div class="flags">${flags.map((flag) => `<span>${escapeHtml(flag)}</span>`).join("")}</div>
    <details><summary>${item.approvalState === "candidate" ? "Human approval command" : "Approval unavailable"}</summary><code>${escapeHtml(approvalMessage)}</code></details>
  </article>`;
}

function readoutCard(item) {
  return `<article class="card"><div class="card-top"><span class="state ${escapeHtml(item.state)}">${escapeHtml(item.state)}</span><span>${escapeHtml(item.window ?? item.nextDate ?? "")}</span></div><h3>${escapeHtml(item.interventionId)}</h3>${item.clickLift === undefined ? "" : `<p>Raw click lift: <strong>${escapeHtml(percent(item.clickLift))}</strong><br>Comparison-normalized lift: <strong>${escapeHtml(percent(item.normalizedClickLift))}</strong><br><small>${escapeHtml(item.matchedControls)} matched rows, ${escapeHtml(item.benchmarkState)}</small></p>`}</article>`;
}

function shellQuote(value) {
  return `'${String(value).replaceAll("'", `'"'"'`)}'`;
}

export function renderHtmlReport(report, { reportJsonPath, ledgerPath }) {
  const opportunities = report.opportunities.map((item) => opportunityCard(item, reportJsonPath, ledgerPath)).join("");
  const readouts = report.readouts.map(readoutCard).join("");
  const unsettled = report.periods.settlementState === "unsettled_override" ? " This is an unsettled diagnostic run. Approval is disabled." : "";
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${escapeHtml(report.site.name)} Search Growth Report</title>
<style>
:root{color-scheme:dark;--bg:#0c0a09;--panel:#1c1917;--line:#44403c;--ink:#fafaf9;--muted:#a8a29e;--accent:#fbbf24;--good:#34d399;--warn:#fb923c;--bad:#fb7185}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55}main{max-width:1180px;margin:auto;padding:40px 24px 80px}header{border-bottom:1px solid var(--line);padding-bottom:28px}.eyebrow{text-transform:uppercase;letter-spacing:.18em;color:var(--accent);font-size:.78rem;font-weight:800}h1{font-size:clamp(2.4rem,7vw,5rem);line-height:1;margin:.25em 0}.lede{max-width:760px;color:#d6d3d1;font-size:1.15rem}.summary{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:28px 0}.summary .metric,.card{background:var(--panel);border:1px solid var(--line);border-radius:16px}.metric{padding:16px}.metric span,.metric small{display:block;color:var(--muted);font-size:.8rem}.metric strong{display:block;font-size:1.45rem;margin:.2rem 0}.notice{border:1px solid #a16207;background:#42200666;border-radius:14px;padding:16px 18px;margin:24px 0}.section-head{display:flex;gap:18px;align-items:end;justify-content:space-between;margin:40px 0 16px}.section-head h2{margin:0;font-size:1.8rem}.section-head p{margin:0;color:var(--muted)}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.card{padding:20px;min-width:0}.card-top{display:flex;justify-content:space-between;gap:12px;align-items:center;color:var(--muted);font-size:.82rem}.priority{color:var(--accent);font-weight:800}.state{border:1px solid var(--line);border-radius:999px;padding:3px 8px;font-weight:700}.state.observed,.state.winning{color:var(--good)}.state.estimated,.state.needs_more_data{color:var(--warn)}.state.losing{color:var(--bad)}h3{font-size:1.35rem;margin:.8rem 0 .15rem;overflow-wrap:anywhere}a{color:#fde68a;overflow-wrap:anywhere}.opportunity p{color:#d6d3d1}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:16px 0}.metrics .metric{padding:10px;background:#0c0a09;border-radius:10px}.metrics .metric strong{font-size:1rem}.flags{display:flex;gap:7px;flex-wrap:wrap}.flags span{border-radius:999px;background:#292524;padding:4px 8px;color:#d6d3d1;font-size:.78rem}details{margin-top:16px}summary{cursor:pointer;color:#fcd34d}code{display:block;white-space:pre-wrap;overflow-wrap:anywhere;background:#0c0a09;padding:12px;border-radius:10px;margin-top:8px;color:#d6d3d1}.empty{padding:28px;border:1px dashed var(--line);border-radius:16px;color:var(--muted)}footer{margin-top:48px;padding-top:24px;border-top:1px solid var(--line);color:var(--muted);font-size:.9rem}@media(max-width:780px){main{padding:28px 16px 60px}.summary,.grid{grid-template-columns:1fr}.metrics{grid-template-columns:repeat(2,1fr)}.section-head{display:block}.section-head p{margin-top:6px}}
</style></head><body><main>
<header><p class="eyebrow">Search growth cycle</p><h1>${escapeHtml(report.site.name)}</h1><p class="lede">A human-review queue for growing qualified non-branded search traffic. RankPrompt remains the AEO and GEO system of record.</p></header>
<section class="summary">${metric("Opportunities", report.opportunities.length)}${metric("Current evidence rows", report.coverage.currentRows)}${metric("Catalog matched", report.coverage.eligibleCatalogItems)}${metric("Live verified", report.opportunities.filter((item) => item.verificationState === "live_verified").length)}</section>
<div class="notice"><strong>Evidence boundary:</strong> Search Console returns top rows and can omit data. Estimated opportunity is not observed traffic. This engine cannot edit or publish site content.${escapeHtml(unsettled)}</div>
<div class="section-head"><div><p class="eyebrow">Human review queue</p><h2>Ranked interventions</h2></div><p>${escapeHtml(report.periods.current.start)} to ${escapeHtml(report.periods.current.end)}</p></div>
<section class="grid">${opportunities || '<div class="empty">No candidates passed the configured evidence and safety gates.</div>'}</section>
<div class="section-head"><div><p class="eyebrow">Experiment portfolio</p><h2>Measurement readouts</h2></div><p>Directional at day 28, confirm at day 56, decide at day 90.</p></div>
<section class="grid">${readouts || '<div class="empty">No approved interventions are present in the ledger.</div>'}</section>
<footer>Run ${escapeHtml(report.runId)}. Generated ${escapeHtml(report.generatedAt)}. AEO and GEO tracking: <a href="${escapeHtml(report.site.rankPromptUrl)}">RankPrompt</a>.</footer>
<script type="application/json" id="search-growth-report">${safeJsonForHtml(report)}</script>
</main></body></html>`;
}
