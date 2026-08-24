import { stableId, round } from "./utils.mjs";

const ENGINE_VERSION = "1.1.0";

function isBranded(query, terms) {
  return terms.some((term) => query.includes(term.toLocaleLowerCase("en-US")));
}

function positionBucket(position) {
  if (position <= 3) return "1-3";
  if (position <= 7) return "4-7";
  if (position <= 10) return "8-10";
  if (position <= 20) return "11-20";
  return "21+";
}

function empiricalCtr(rows, minimumImpressions, minimumRows) {
  const buckets = new Map();
  for (const row of rows.filter((item) => !item.branded && item.impressions >= minimumImpressions)) {
    const bucket = positionBucket(row.position);
    const value = buckets.get(bucket) ?? { clicks: 0, impressions: 0, rows: 0 };
    value.clicks += row.clicks;
    value.impressions += row.impressions;
    value.rows += 1;
    buckets.set(bucket, value);
  }
  return Object.fromEntries([...buckets].map(([bucket, value]) => [bucket, {
    ctr: value.rows >= minimumRows && value.impressions ? round(value.clicks / value.impressions, 6) : null,
    rows: value.rows,
    impressions: value.impressions,
    evidenceState: value.rows >= minimumRows ? "estimated" : "insufficient_data"
  }]));
}

function comparisonKey(row) {
  return `${row.query}\u001f${row.page}`;
}

function periodDays(period) {
  return Math.round((new Date(`${period.end}T00:00:00.000Z`) - new Date(`${period.start}T00:00:00.000Z`)) / 86_400_000) + 1;
}

function cannibalizedQueries(rows, minimumImpressions) {
  const pages = new Map();
  for (const row of rows.filter((item) => item.impressions >= minimumImpressions)) {
    if (!pages.has(row.query)) pages.set(row.query, new Set());
    pages.get(row.query).add(row.page);
  }
  return new Set([...pages].filter(([, values]) => values.size > 1).map(([query]) => query));
}

export function runGrowthCycle({ config, currentRows, previousRows, catalog, periods, ledger, verificationMode = "local" }) {
  const thresholds = config.thresholds;
  const catalogByPage = new Map(catalog.map((item) => [item.page, item]));
  const previousByKey = new Map(previousRows.map((row) => [comparisonKey(row), row]));
  const decorated = currentRows.map((row) => ({ ...row, branded: isBranded(row.query, config.brandTerms) }));
  const ctrBaseline = empiricalCtr([...decorated, ...previousRows.map((row) => ({ ...row, branded: isBranded(row.query, config.brandTerms) }))], thresholds.minimumImpressions, thresholds.minimumCtrRows);
  const cannibalized = cannibalizedQueries(decorated.filter((row) => !row.branded), thresholds.minimumImpressions);
  const opportunities = [];

  for (const current of decorated) {
    const content = catalogByPage.get(current.page);
    if (current.branded || current.impressions < thresholds.minimumImpressions || content?.indexability !== "eligible") continue;
    if (verificationMode === "live" && content.verificationState !== "live_verified") continue;
    const previous = previousByKey.get(comparisonKey(current));
    const bucket = ctrBaseline[positionBucket(current.position)];
    const observedLoss = previous ? Math.max(0, previous.clicks - current.clicks) : 0;
    const expectedCtr = bucket?.ctr ?? null;
    const estimatedCtrClicks = expectedCtr === null ? 0 : Math.max(0, (expectedCtr - current.ctr) * current.impressions);
    const pageTwo = current.position > 10 && current.position <= 20;
    const isCannibalized = cannibalized.has(current.query);
    if (!observedLoss && estimatedCtrClicks < 1 && !pageTwo && !isCannibalized) continue;
    const evidenceState = observedLoss > 0 ? "observed" : expectedCtr !== null || pageTwo ? "estimated" : "insufficient_data";
    const confidence = Math.min(20, Math.round(Math.log10(current.impressions + 1) * 7)) + (previous ? 5 : 0) + (content?.indexability === "eligible" ? 5 : 0);
    const impact = Math.min(50, observedLoss * 2) + Math.min(25, estimatedCtrClicks) + (pageTwo ? 15 : 0);
    const riskDeduction = isCannibalized ? 20 : content?.indexability === "unknown" ? 10 : 0;
    const priority = Math.max(0, Math.min(100, Math.round(impact + confidence - riskDeduction)));
    const interventionType = isCannibalized ? "consolidation_review" : observedLoss > 0 ? "recovery_review" : pageTwo ? "focused_content_refresh" : "snippet_review";
    const id = stableId([config.site.id, current.query, current.page, periods.current.start, periods.current.end]);
    opportunities.push({
      id,
      query: current.query,
      page: current.page,
      sourcePath: content?.sourcePath ?? null,
      indexability: content?.indexability ?? "unknown",
      verificationState: content?.verificationState ?? "local_only",
      verificationReason: content?.verificationReason ?? null,
      evidenceState,
      interventionType,
      priority,
      scoreComponents: {
        impact: round(impact),
        confidence,
        riskDeduction
      },
      signals: {
        observedClickLoss: round(observedLoss),
        estimatedCtrClickGap: round(estimatedCtrClicks),
        pageTwo,
        cannibalizationRisk: isCannibalized
      },
      current: { clicks: current.clicks, impressions: current.impressions, ctr: current.ctr, position: current.position },
      previous: previous ? { clicks: previous.clicks, impressions: previous.impressions, ctr: previous.ctr, position: previous.position } : null,
      recommendation: isCannibalized
        ? "Review competing pages and choose one canonical intent owner before editing."
        : observedLoss > 0
          ? "Diagnose the lost query-page match, freshness, snippet, sources, and competing result set before making one bounded recovery edit."
          : pageTwo
            ? "Strengthen the exact intent answer, primary sourcing, and relevant internal links without expanding into a competing page."
            : "Review the title, opening answer, and snippet-supporting passage for this query while preserving intent.",
      approvalState: "candidate"
    });
  }

  opportunities.sort((a, b) => b.priority - a.priority || b.signals.observedClickLoss - a.signals.observedClickLoss || a.page.localeCompare(b.page));
  const controlPool = decorated
    .filter((row) => !row.branded && row.impressions >= thresholds.minimumImpressions && catalogByPage.get(row.page)?.indexability === "eligible" && catalogByPage.get(row.page)?.verificationState === "live_verified")
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 50)
    .map(({ query, page, clicks, impressions, ctr, position }) => ({ query, page, clicks, impressions, ctr, position }));
  for (const opportunity of opportunities) {
    opportunity.minimumControls = thresholds.minimumControls;
    opportunity.minimumAssessmentImpressions = thresholds.minimumAssessmentImpressions;
    opportunity.comparisonCandidates = controlPool.filter((item) => item.page !== opportunity.page).length;
    opportunity.approvalState = opportunity.verificationState !== "live_verified"
      ? "verification_required"
      : opportunity.current.impressions < thresholds.minimumAssessmentImpressions
        ? "insufficient_baseline"
      : opportunity.comparisonCandidates < thresholds.minimumControls
        ? "insufficient_comparisons"
        : "candidate";
  }
  const readouts = assessLedger({ ledger, currentRows: decorated, currentPeriod: periods.current, thresholds });
  return {
    schemaVersion: 1,
    site: config.site,
    runId: stableId([
      config.site.id,
      ENGINE_VERSION,
      periods.previous.start,
      periods.previous.end,
      periods.current.start,
      periods.current.end,
      verificationMode,
      JSON.stringify(config.brandTerms),
      JSON.stringify(config.thresholds),
      JSON.stringify(ledger ?? { schemaVersion: 1, interventions: [] }),
      ...catalog.map((item) => `${item.page}:${item.indexability}:${item.sourcePath ?? ""}`).sort(),
      ...decorated.map((row) => `current:${comparisonKey(row)}:${row.clicks}:${row.impressions}:${row.position}`).sort(),
      ...previousRows.map((row) => `previous:${comparisonKey(row)}:${row.clicks}:${row.impressions}:${row.position}`).sort()
    ]),
    generatedAt: new Date().toISOString(),
    engineVersion: ENGINE_VERSION,
    periods,
    coverage: {
      currentRows: currentRows.length,
      previousRows: previousRows.length,
      catalogItems: catalog.length,
      eligibleCatalogItems: catalog.filter((item) => item.indexability === "eligible").length,
      unknownCatalogItems: catalog.filter((item) => item.indexability === "unknown").length,
      searchConsoleCompleteness: "top_rows_only"
    },
    methodology: {
      primaryGoal: "qualified_non_branded_human_organic_clicks",
      ctrBaseline: "site_specific_empirical",
      aeoGeoSystemOfRecord: "RankPrompt",
      contentWritesEnabled: false,
      verificationMode,
      evidenceStates: ["observed", "estimated", "insufficient_data", "not_available"]
    },
    policy: {
      minimumImpressions: thresholds.minimumImpressions,
      minimumCtrRows: thresholds.minimumCtrRows,
      minimumAssessmentImpressions: thresholds.minimumAssessmentImpressions,
      minimumControls: thresholds.minimumControls,
      winningClickLift: thresholds.winningClickLift,
      losingClickLift: thresholds.losingClickLift
    },
    ctrBaseline,
    controlPool,
    opportunities,
    readouts
  };
}

export function assessLedger({ ledger, currentRows, currentPeriod, thresholds }) {
  const currentByKey = new Map(currentRows.map((row) => [comparisonKey(row), row]));
  const activePages = new Set((ledger?.interventions ?? []).filter((item) => ["approved", "active"].includes(item.decisionState)).map((item) => item.page));
  return (ledger?.interventions ?? []).map((intervention) => {
    if (intervention.decisionState === "approved") return { interventionId: intervention.id, state: "not_active", evidenceState: "not_available" };
    if (["winning", "neutral", "losing", "stopped"].includes(intervention.decisionState)) return { interventionId: intervention.id, state: intervention.decisionState, closedAt: intervention.closedAt, evidenceState: "observed" };
    if (intervention.decisionState !== "active" || !intervention.measurementDates || !intervention.implementationDate) return { interventionId: intervention.id, state: "needs_more_data", evidenceState: "insufficient_data", reason: "invalid_lifecycle_state" };
    const due = Object.entries(intervention.measurementDates).filter(([, date]) => currentPeriod.end >= date).sort((a, b) => a[1].localeCompare(b[1])).at(-1);
    if (!due) return { interventionId: intervention.id, state: "not_due", nextDate: Object.values(intervention.measurementDates).sort()[0] };
    if (currentPeriod.start <= intervention.implementationDate) return { interventionId: intervention.id, window: due[0], state: "needs_more_data", evidenceState: "insufficient_data", reason: "post_period_overlaps_implementation" };
    if (periodDays(intervention.baselinePeriod) !== periodDays(currentPeriod)) return { interventionId: intervention.id, window: due[0], state: "needs_more_data", evidenceState: "insufficient_data", reason: "window_duration_mismatch" };
    const current = currentByKey.get(`${intervention.query}\u001f${intervention.page}`);
    if (!current || current.impressions < thresholds.minimumAssessmentImpressions) return { interventionId: intervention.id, window: due[0], state: "needs_more_data", evidenceState: "insufficient_data" };
    const baseline = intervention.baseline;
    const clickLift = baseline.clicks ? (current.clicks - baseline.clicks) / baseline.clicks : current.clicks > 0 ? 1 : 0;
    const controls = (intervention.controlBaseline ?? []).filter((item) => !activePages.has(item.page));
    const matchedControls = controls.map((item) => ({ baseline: item, current: currentByKey.get(`${item.query}\u001f${item.page}`) })).filter((item) => item.current);
    const baselineControlClicks = matchedControls.reduce((total, item) => total + item.baseline.clicks, 0);
    const currentControlClicks = matchedControls.reduce((total, item) => total + item.current.clicks, 0);
    const controlLift = baselineControlClicks ? (currentControlClicks - baselineControlClicks) / baselineControlClicks : null;
    const normalizedClickLift = controlLift === null || 1 + controlLift === 0 ? clickLift : (1 + clickLift) / (1 + controlLift) - 1;
    if (matchedControls.length < thresholds.minimumControls) return {
      interventionId: intervention.id,
      window: due[0],
      state: "needs_more_data",
      evidenceState: "insufficient_data",
      clickLift: round(clickLift, 4),
      normalizedClickLift: null,
      benchmarkState: "insufficient_data",
      matchedControls: matchedControls.length,
      reason: "insufficient_unchanged_controls"
    };
    const positive = normalizedClickLift >= thresholds.winningClickLift;
    const negative = normalizedClickLift <= thresholds.losingClickLift;
    const state = due[0] === "day28" ? positive ? "positive_directional" : negative ? "negative_directional" : "neutral_directional" : positive ? "winning" : negative ? "losing" : "neutral";
    return {
      interventionId: intervention.id,
      window: due[0],
      state,
      evidenceState: "observed",
      clickLift: round(clickLift, 4),
      normalizedClickLift: round(normalizedClickLift, 4),
      benchmarkState: "descriptive_comparison",
      matchedControls: matchedControls.length,
      current: { clicks: current.clicks, impressions: current.impressions, ctr: current.ctr, position: current.position }
    };
  });
}
