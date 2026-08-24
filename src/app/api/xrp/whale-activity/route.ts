import { NextResponse } from "next/server";

let cache: { data: WhaleData; ts: number } | null = null;
const CACHE_MS = 60 * 1000;
const WHALE_THRESHOLD = 1_000_000;
const LEDGERS_TO_SCAN = 12;
const XRPL_ENDPOINTS = ["https://s1.ripple.com:51234/", "https://s2.ripple.com:51234/"];

interface WhaleTx {
  hash: string;
  amount: number;
  from: string;
  to: string;
  timestamp: string;
  ledgerIndex: number;
}

interface WhaleData {
  available: boolean;
  source: string | null;
  updatedAt: string;
  error?: string;
  transactions: WhaleTx[];
  totalMoved: number;
  count: number;
  largest: number;
  hourlyVolume: { hour: number; volume: number }[];
  ledgersScanned: number;
}

interface RpcResponse {
  result?: Record<string, unknown>;
}

async function rpc(endpoint: string, method: string, params: Record<string, unknown>) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ method, params: [params] }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`XRPL RPC returned ${response.status}`);
  const payload = (await response.json()) as RpcResponse;
  if (!payload.result || payload.result.status === "error") throw new Error("XRPL RPC returned an error result");
  return payload.result;
}

function rippleTimeToIso(date: unknown): string | null {
  if (typeof date !== "number" || !Number.isFinite(date)) return null;
  return new Date((date + 946_684_800) * 1000).toISOString();
}

function deliveredXrp(meta: Record<string, unknown>): number | null {
  const raw = meta.delivered_amount ?? meta.DeliveredAmount;
  if (typeof raw !== "string" || !/^\d+$/.test(raw)) return null;
  const xrp = Number(raw) / 1_000_000;
  return Number.isFinite(xrp) ? xrp : null;
}

function emptyData(error: string): WhaleData {
  return {
    available: false,
    source: null,
    updatedAt: new Date().toISOString(),
    error,
    transactions: [],
    totalMoved: 0,
    count: 0,
    largest: 0,
    hourlyVolume: [],
    ledgersScanned: 0,
  };
}

async function fetchFromEndpoint(endpoint: string): Promise<WhaleData> {
  const validated = await rpc(endpoint, "ledger", {
    ledger_index: "validated",
    transactions: false,
    expand: false,
  });
  const latest = Number((validated.ledger as Record<string, unknown> | undefined)?.ledger_index ?? validated.ledger_index);
  if (!Number.isInteger(latest) || latest <= 0) throw new Error("Validated ledger index was unavailable");

  const indexes = Array.from({ length: LEDGERS_TO_SCAN }, (_, offset) => latest - offset);
  const ledgers = await Promise.all(
    indexes.map((ledgerIndex) =>
      rpc(endpoint, "ledger", {
        ledger_index: ledgerIndex,
        transactions: true,
        expand: true,
      }),
    ),
  );

  const transactions: WhaleTx[] = [];
  for (const result of ledgers) {
    const ledger = result.ledger as Record<string, unknown> | undefined;
    if (!ledger || ledger.closed !== true) continue;
    const ledgerIndex = Number(ledger.ledger_index);
    const entries = Array.isArray(ledger.transactions) ? ledger.transactions : [];

    for (const entryValue of entries) {
      if (!entryValue || typeof entryValue !== "object") continue;
      const entry = entryValue as Record<string, unknown>;
      const tx = (entry.tx && typeof entry.tx === "object" ? entry.tx : entry) as Record<string, unknown>;
      const meta = (entry.metaData ?? entry.meta) as Record<string, unknown> | undefined;
      if (tx.TransactionType !== "Payment" || !meta || meta.TransactionResult !== "tesSUCCESS") continue;

      const amount = deliveredXrp(meta);
      const timestamp = rippleTimeToIso(tx.date);
      if (amount === null || amount < WHALE_THRESHOLD || !timestamp) continue;
      if (typeof tx.Account !== "string" || typeof tx.Destination !== "string") continue;
      const hash = typeof tx.hash === "string" ? tx.hash : typeof entry.hash === "string" ? entry.hash : null;
      if (!hash || !Number.isInteger(ledgerIndex)) continue;

      transactions.push({
        hash,
        amount,
        from: tx.Account,
        to: tx.Destination,
        timestamp,
        ledgerIndex,
      });
    }
  }

  transactions.sort((a, b) => b.ledgerIndex - a.ledgerIndex);
  const totalMoved = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const largest = transactions.reduce((max, tx) => Math.max(max, tx.amount), 0);

  return {
    available: true,
    source: `Ripple-operated XRP Ledger JSON-RPC (${new URL(endpoint).hostname})`,
    updatedAt: new Date().toISOString(),
    transactions,
    totalMoved,
    count: transactions.length,
    largest,
    hourlyVolume: [],
    ledgersScanned: ledgers.length,
  };
}

async function fetchWhaleData(): Promise<WhaleData> {
  for (const endpoint of XRPL_ENDPOINTS) {
    try {
      return await fetchFromEndpoint(endpoint);
    } catch (error) {
      console.error(`Validated XRPL scan failed for ${endpoint}:`, error);
    }
  }
  return emptyData("Validated XRP Ledger endpoints are temporarily unavailable. No estimated or sample transactions are shown.");
}

export async function GET() {
  if (cache && Date.now() - cache.ts < CACHE_MS) return NextResponse.json(cache.data);
  const data = await fetchWhaleData();
  cache = { data, ts: Date.now() };
  return NextResponse.json(data);
}
