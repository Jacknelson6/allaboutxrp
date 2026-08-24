# Search Growth Engine

The Search Growth Engine converts first-party search evidence into a human-review intervention queue for AAXRP. It is local-first, cannot modify content, and keeps RankPrompt authoritative for AEO and GEO tracking.

## What is ready

- GSC query-page CSV ingestion.
- Raw Search Analytics API JSON ingestion when dimensions are ordered as `query`, then `page`.
- AAXRP route and indexability matching.
- Optional live HTTP, canonical, robots, redirect, and sitemap verification.
- Branded-query separation.
- AAXRP-specific empirical CTR baselines when samples are sufficient.
- Observed click-loss, CTR-gap, page-two, and cannibalization signals.
- HTML and JSON reports.
- Append-only human approval ledger.
- Day 28, 56, 90, and 120 experiment readouts on later runs.
- Telegram and Google Chat send-only summaries with dry-run support.

## Evidence contract

Use two equal-duration, non-overlapping periods. Twenty-eight days is recommended because it neutralizes day-of-week effects. Search Console data is normally delayed and its API returns top rows, not a guaranteed exhaustive set. Export only after the period has settled.

The current period must end at least three days ago. `--allow-unsettled` bypasses that gate only for an explicitly incomplete diagnostic run. Do not compare or approve interventions from an unsettled run.

CSV columns:

```text
Query,Page,Clicks,Impressions,CTR,Position
```

CTR may be a decimal such as `0.051` or a percentage such as `5.1%`. Page URLs must belong to the configured site. Duplicate query-page rows are aggregated.

Raw Search Analytics JSON:

```json
{
  "rows": [
    {
      "keys": ["what is xrp", "https://allaboutxrp.com/learn/what-is-xrp"],
      "clicks": 120,
      "impressions": 1800,
      "ctr": 0.0667,
      "position": 5.4
    }
  ]
}
```

When requesting the official Search Analytics API, set `dimensions` to `["query", "page"]`. Paginate with `startRow` and `rowLimit` when the response reaches the requested row limit. Keep the API's top-row limitation in mind.

## Run the bundled AAXRP demonstration

The fixture data is synthetic and exists to verify software behavior. It is not current AAXRP performance evidence.

```bash
npm run growth:run -- \
  --current scripts/search-growth/fixtures/aaxrp-current.csv \
  --previous scripts/search-growth/fixtures/aaxrp-previous.csv \
  --current-start 2026-06-29 \
  --current-end 2026-07-26 \
  --previous-start 2026-06-01 \
  --previous-end 2026-06-28 \
  --out .search-growth/demo
```

Open the emitted HTML path in Ego Lite.

## Run real AAXRP evidence

```bash
npm run growth:run -- \
  --current /absolute/path/aaxrp-current.csv \
  --previous /absolute/path/aaxrp-previous.csv \
  --current-start YYYY-MM-DD \
  --current-end YYYY-MM-DD \
  --previous-start YYYY-MM-DD \
  --previous-end YYYY-MM-DD \
  --out .search-growth/aaxrp \
  --verify-live
```

Live verification is mandatory before approval. It verifies the final HTTP URL, canonical, rendered robots metadata, and sitemap membership. A failed or unknown page cannot become an intervention.

## Approve an intervention

The HTML report exposes the exact command for each opportunity. Approval writes to a local ledger but does not change the site.

```bash
npm run growth:approve -- \
  --report /absolute/path/search-growth-RUN_ID.json \
  --opportunity OPPORTUNITY_ID \
  --ledger /absolute/path/experiment-ledger.json \
  --note "One bounded source and passage refresh"
```

A duplicate active query-page intervention fails closed. Later report runs read the ledger when `--ledger` points to it.

Approval freezes the baseline but does not start the measurement clock. After the bounded site change is actually live, activate it with the implementation date:

```bash
npm run growth:activate -- \
  --ledger /absolute/path/experiment-ledger.json \
  --intervention INTERVENTION_ID \
  --implemented-at YYYY-MM-DD
```

Activation sets day 28, 56, 90, and 120 from the real implementation date. A post-period that overlaps implementation is rejected. Close a completed or stopped experiment so a later query-page intervention can be enrolled:

```bash
npm run growth:close -- \
  --ledger /absolute/path/experiment-ledger.json \
  --intervention INTERVENTION_ID \
  --state winning \
  --note "Confirmed at day 90"
```

## Notifications

Telegram:

```bash
TELEGRAM_BOT_TOKEN=... TELEGRAM_CHAT_ID=... npm run growth:notify -- \
  --report /absolute/path/report.json --provider telegram
```

Google Chat:

```bash
GOOGLE_CHAT_WEBHOOK_URL=... npm run growth:notify -- \
  --report /absolute/path/report.json --provider google-chat
```

Append `--dry-run` to inspect the payload without sending. Secrets are read from the environment and are not stored in reports or ledgers. Notifications are send-only. Interactive approvals require extra backend infrastructure and are intentionally excluded.

Reports contain private query and page performance evidence. Keep them local or in access-controlled storage. The HTML includes `noindex,nofollow`, but that is not an access-control mechanism.

## Success clock

- Day 0: implement the approved bounded change, verify it live, then activate the intervention.
- Day 28: directional read only.
- Day 56: first confirmation window.
- Day 90: scale, revise, or stop decision.
- Day 120: only for a cohort previously marked `needs_more_data`.

The primary result is non-branded organic clicks, shown both raw and normalized against a descriptive pool of similar unchanged query-page rows. This comparison is not a randomized causal control. Guardrails include cannibalization, indexability, and sourcing. The engine reports `insufficient_data` rather than treating missing evidence as zero.

## Product boundary

This release does not include autonomous editing, publishing, a database, Google OAuth, GA4 ingestion, a deployed dashboard, programmatic page generation, RankPrompt ingestion, AI citation crawling, or interactive chat approvals. Those features require measured workflow evidence before they are worth their cost and risk.
