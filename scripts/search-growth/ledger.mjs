import { mkdir, open, readFile, unlink } from "node:fs/promises";
import path from "node:path";
import { addDays, invariant, parseIsoDate, stableId, writeJsonAtomic } from "./utils.mjs";

export async function loadLedger(filePath) {
  try {
    const ledger = JSON.parse(await readFile(filePath, "utf8"));
    invariant(ledger.schemaVersion === 1 && Array.isArray(ledger.interventions), "Experiment ledger has an unsupported schema");
    return ledger;
  } catch (error) {
    if (error.code === "ENOENT") return { schemaVersion: 1, interventions: [] };
    throw error;
  }
}

async function mutateLedger(ledgerPath, mutation) {
  await mkdir(path.dirname(ledgerPath), { recursive: true });
  const lockPath = `${ledgerPath}.lock`;
  let lock;
  try {
    lock = await open(lockPath, "wx");
  } catch (error) {
    if (error.code === "EEXIST") throw new Error(`Experiment ledger is locked by another approval: ${lockPath}`);
    throw error;
  }
  try {
    const ledger = await loadLedger(ledgerPath);
    const result = await mutation(ledger);
    await writeJsonAtomic(ledgerPath, ledger);
    return result;
  } finally {
    await lock.close();
    await unlink(lockPath).catch(() => {});
  }
}

function selectControls(report, opportunity) {
  return (report.controlPool ?? [])
    .filter((item) => item.page !== opportunity.page)
    .map((item) => ({ item, distance: Math.abs(Math.log((item.impressions + 1) / (opportunity.current.impressions + 1))) + Math.abs(item.position - opportunity.current.position) / 10 }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10)
    .map(({ item }) => item);
}

export async function approveOpportunity({ ledgerPath, report, opportunityId, note = "" }) {
  const opportunity = report.opportunities.find((item) => item.id === opportunityId);
  invariant(opportunity, `Opportunity not found in report: ${opportunityId}`);
  invariant(opportunity.verificationState === "live_verified", "Interventions require a report generated with --verify-live");
  invariant(report.periods?.settlementState !== "unsettled_override", "Interventions cannot be approved from an unsettled diagnostic report");
  const controls = selectControls(report, opportunity);
  invariant(controls.length >= report.policy.minimumControls, `Intervention requires at least ${report.policy.minimumControls} verified comparison rows. Found: ${controls.length}`);
  return mutateLedger(ledgerPath, async (ledger) => {
    const duplicate = ledger.interventions.find((item) => item.page === opportunity.page && item.query === opportunity.query && ["approved", "active"].includes(item.decisionState));
    if (duplicate) throw new Error(`An active intervention already exists for this query and page: ${duplicate.id}`);
    const approvedAt = new Date().toISOString();
    const intervention = {
      id: stableId([report.runId, opportunity.id, approvedAt]),
      opportunityId: opportunity.id,
      reportRunId: report.runId,
      siteId: report.site.id,
      query: opportunity.query,
      page: opportunity.page,
      interventionType: opportunity.interventionType,
      decisionState: "approved",
      approvedAt,
      note,
      baselinePeriod: report.periods.current,
      baseline: opportunity.current,
      controlBaseline: controls,
      implementationDate: null,
      measurementDates: null
    };
    ledger.interventions.push(intervention);
    return intervention;
  });
}

export async function activateIntervention({ ledgerPath, interventionId, implementationDate, note = "" }) {
  parseIsoDate(implementationDate, "implemented-at");
  return mutateLedger(ledgerPath, async (ledger) => {
    const intervention = ledger.interventions.find((item) => item.id === interventionId);
    invariant(intervention, `Intervention not found: ${interventionId}`);
    invariant(intervention.decisionState === "approved", `Intervention must be approved before activation. Current state: ${intervention.decisionState}`);
    invariant(implementationDate > intervention.baselinePeriod.end, "Implementation date must be after the frozen baseline period");
    const today = new Date().toISOString().slice(0, 10);
    invariant(implementationDate <= today, "Implementation date cannot be in the future");
    intervention.decisionState = "active";
    intervention.implementationDate = implementationDate;
    intervention.activatedAt = new Date().toISOString();
    intervention.activationNote = note;
    intervention.measurementDates = {
      day28: addDays(implementationDate, 28),
      day56: addDays(implementationDate, 56),
      day90: addDays(implementationDate, 90),
      day120: addDays(implementationDate, 120)
    };
    return intervention;
  });
}

export async function closeIntervention({ ledgerPath, interventionId, decisionState, note = "" }) {
  invariant(["winning", "neutral", "losing", "stopped"].includes(decisionState), "Close state must be winning, neutral, losing, or stopped");
  return mutateLedger(ledgerPath, async (ledger) => {
    const intervention = ledger.interventions.find((item) => item.id === interventionId);
    invariant(intervention, `Intervention not found: ${interventionId}`);
    invariant(["approved", "active"].includes(intervention.decisionState), `Intervention is already closed: ${intervention.decisionState}`);
    intervention.decisionState = decisionState;
    intervention.closedAt = new Date().toISOString();
    intervention.closeNote = note;
    return intervention;
  });
}
