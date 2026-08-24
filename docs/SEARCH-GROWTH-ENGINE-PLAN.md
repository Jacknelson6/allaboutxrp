# AAXRP Search Growth Engine implementation plan

## Decision

Use AAXRP as the first adapter for a reusable, local-first search growth engine. The engine turns Search Console query-page evidence into a ranked human-review queue, freezes approved baselines, starts measurement only after an intervention is implemented, and reports descriptive outcomes at fixed windows.

RankPrompt remains the system of record for AEO and GEO prompts, citations, visibility, and share of voice. This engine does not duplicate those features.

The first review surface is a generated HTML report, not a deployed webpage. A protected webpage becomes worthwhile only after two complete AAXRP cycles prove a recurring need for shared annotations, permissions, persistent filtering, or collaborative approvals.

## What the referenced article gets right

The article describes a weekly loop that combines content inventory, Search Console, third-party demand data, product analytics, human approval, narrow edits, and day 28 and day 56 measurement. Its strongest product choices are:

- The recommendation agent has no write tool.
- Cheap checks cover the inventory while expensive checks are rationed.
- Real click loss outranks modeled opportunity.
- New posts face strategy, structure, provenance, and cannibalization gates.
- Crawl, citation, and click are treated as separate AI-search layers.
- The workflow reaches the operator where they already work.

The AAXRP version improves on the first design by rejecting a hardcoded global CTR curve, separating brand from non-brand demand, requiring live indexability verification before approval, using a real implementation date for the experiment clock, and refusing to call incomplete evidence zero.

## Self-grill conclusions

### What is the actual goal?

Qualified human organic traffic, primarily non-branded clicks to canonical AAXRP pages. Indexed page count, impressions, average position, and RankPrompt scores are supporting signals.

### Should this system publish content?

No. It produces bounded intervention cards. It cannot modify or publish AAXRP source code. A human or a separate coding task implements an approved intervention.

### Should v1 generate programmatic pages?

No. Existing AAXRP evidence points to consolidation, sourcing, and intent depth before more volume. A future page family requires demonstrated demand, differentiated value, no canonical match, a hub and internal-link plan, and explicit freshness ownership. The first pilot is capped at five pages.

### Should AEO and GEO tracking be built here?

No. RankPrompt already covers that job. The report links to RankPrompt. A future read-only summary adapter is acceptable only if it improves editorial prioritization without recreating RankPrompt.

### Telegram or Google Chat?

Both are optional send-only adapters. Google Chat incoming webhooks are not interactive. Telegram interactive approvals require a callback backend and persistent service. V1 keeps approval in the CLI and ledger.

### When can success be determined?

- Day 0: implement the approved change, verify it live, and activate it.
- Day 28: directional result only.
- Day 56: first confirmable result.
- Day 90: portfolio scale, revise, or stop decision.
- Day 120: only for a cohort previously labeled insufficient data.

No success claim should be made before day 56. Low-volume cohorts remain `needs_more_data` rather than being forced into success or failure.

## Product architecture

### Deep interfaces

1. `SiteContentCatalog`
   - Returns stable page identity, route match, source path, indexability, alias state, and live verification state.
   - The first adapter understands AAXRP and Next App Router.
   - A second site adds an adapter selected by configuration. It does not rewrite the scoring policy.

2. `SearchEvidenceAdapter`
   - Accepts GSC query-page CSV or raw Search Analytics API JSON.
   - Validates host, dates, columns, whole-number counts, CTR consistency, duplicates, and URL normalization.
   - A future authenticated API adapter remains behind the same normalized row contract.

3. `runGrowthCycle`
   - Owns branded separation, empirical site CTR baselines, observed loss, rank opportunity, cannibalization, confidence, risk, comparison pools, and readouts.
   - Returns a stable report model. It does not know output paths, notification secrets, or source-code mutation.

4. `ExperimentLedger`
   - Uses schema-versioned local JSON with atomic replacement and a concurrent approval lock.
   - Keeps approval, activation, measurement, and closure separate.
   - Rejects duplicate active query-page enrollment.

5. Output adapters
   - Escaped, self-contained HTML plus JSON.
   - Telegram and Google Chat send-only payloads.
   - RankPrompt link only.

## Evidence and scoring policy

The engine keeps score components visible:

- Observed click loss, when the same query-page pair exists in both periods.
- Estimated CTR opportunity, only when AAXRP supplies enough rows for an empirical position bucket.
- Page-two opportunity, limited to average positions above 10 through 20.
- Confidence from impression volume, comparable evidence, local route identity, and live verification.
- Risk deductions for cannibalization or uncertain identity.

Average position is treated as a blended diagnostic, not ground truth. Search Console provides top rows and can omit data. The report says so explicitly.

The experiment comparison pool is descriptive, not causal. Controls are chosen by baseline impression and position similarity, removed if they become active interventions, and must meet a configured minimum. Missing or weak comparisons return `needs_more_data`.

## Safety gates

An intervention cannot be approved unless:

- The report period has settled for at least three days.
- The page matches a local canonical route.
- It is not noindex or a canonical alias.
- Live HTTP ends at the same URL without a redirect.
- The live canonical matches.
- Live robots metadata allows indexing.
- The page appears in the live sitemap.
- The report opportunity is based on a configured minimum sample.
- No active intervention already owns the same query-page pair.

Reports contain private analytics data and are ignored under `.search-growth/`. HTML reports also include `noindex,nofollow`, which is a crawl guard and not access control.

## Operational workflow

1. Export two settled, equal 28-day GSC query-page periods.
2. Run the engine with `--verify-live`.
3. Review observed and estimated signals separately in the HTML report.
4. Approve one bounded intervention into the ledger.
5. Implement the change outside this engine.
6. Verify the public result, then activate with the real implementation date.
7. Run settled day 28, 56, and 90 reports against the same ledger.
8. Close the experiment as winning, neutral, losing, or stopped.
9. Review AEO and GEO impact separately in RankPrompt.

## Success criteria

### Software readiness

- Real AAXRP GSC evidence works without code changes.
- Invalid evidence fails closed with an actionable error.
- Run identity changes when evidence, configuration, catalog state, verification mode, or ledger state changes.
- Reports escape hostile values and do not serialize notification secrets.
- Duplicate and concurrent approvals cannot overwrite the ledger.
- Desktop and 390px Ego Lite layouts have no horizontal overflow.
- Existing SEO tests, the SEO audit, and the production build pass.

### Search outcome

Primary metric: non-branded clicks for the intervention query-page cohort, shown raw and against the descriptive comparison pool.

Secondary metrics: impressions, CTR, position trend, page-one query coverage, and later GA4 engagement or key events after a real adapter exists.

Guardrails: no new cannibalization, no canonical or indexability regression, no unsupported factual claim, and no recommendation based only on an AI visibility score.

At day 90:

- Scale when the cohort has credible positive non-branded click movement, at least half of eligible interventions are positive, and guardrails hold.
- Revise when results are mixed but failure causes are actionable.
- Stop when lift is absent, estimates dominate, or maintenance cost exceeds traffic value.
- Extend to day 120 only when evidence remains genuinely insufficient.

## Features deliberately excluded from v1

- Autonomous editing, publishing, and rollback.
- A standalone SaaS dashboard, new authentication, or database.
- Google OAuth and credential persistence.
- GA4 ingestion that does not yet influence decisions.
- Interactive Telegram callbacks or a Google Chat app.
- RankPrompt ingestion, prompt tracking, or citation crawling.
- Broad legacy generator refactors.
- Programmatic page generation before measured demand.
- Machine-learning traffic forecasts.

## Expansion path

1. Complete two AAXRP cycles.
2. Add a live GSC adapter behind the normalized evidence interface.
3. Add a second site catalog adapter to test substitutability.
4. Add a properly period-aligned GA4 adapter when conversions can affect guardrails.
5. Add a protected page inside the existing site only if collaboration needs justify it.
6. Pilot one gated five-page content family.
7. Extract a standalone package only after two sites prove the shared domain.

## Research basis

- Google says standard SEO fundamentals still apply to AI search experiences and recommends unique, useful content rather than special AI-search tricks: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google warns that scaled low-value content can violate spam policies regardless of whether AI or humans produced it: https://developers.google.com/search/docs/essentials/spam-policies
- Search Analytics supports query and page dimensions, pagination, and up to 25,000 rows per request, while returning top rows rather than guaranteed exhaustive data: https://developers.google.com/webmaster-tools/v1/searchanalytics/query
- Search Console data commonly has a delay, so fresh incomplete periods should not drive approvals: https://support.google.com/webmasters/answer/96568
- Google explains why average position is a complex blended metric: https://support.google.com/webmasters/answer/7042828
- Google Chat incoming webhooks are one-way notifications: https://developers.google.com/workspace/chat/quickstart/webhooks
- Telegram supports richer bot callbacks, which require a receiving backend: https://core.telegram.org/bots/api
- RankPrompt already provides prompts, reports, citations, page audits, content opportunities, GSC and GA connection status, URL inspection, and webhooks: https://rankprompt.com/docs/v1/reference/
