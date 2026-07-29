import { NextResponse } from "next/server";

// Cache whale data for 5 minutes
let cache: { data: WhaleData; ts: number } | null = null;
const CACHE_MS = 5 * 60 * 1000;
const WHALE_THRESHOLD = 1_000_000; // 1M XRP

interface WhaleTx {
  hash: string;
  amount: number;
  from: string;
  to: string;
  timestamp: string;
  fromLabel?: string;
  toLabel?: string;
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
}

async function fetchWhaleData(): Promise<WhaleData> {
  // Use Bithomp API for recent large XRP transactions
  // Fallback: use XRPL websocket for recent transactions
  const transactions: WhaleTx[] = [];
  let providerResponded = false;
  let source: string | null = null;

  try {
    // Try XRPScan API for recent payments
    const res = await fetch("https://api.xrpscan.com/api/v1/payments?limit=100", {
      headers: { "Accept": "application/json" },
      signal: AbortSignal.timeout(10000),
    });

    if (res.ok) {
      providerResponded = true;
      source = "XRPScan";
      const payments = await res.json();
      const now = Date.now();
      const oneDayAgo = now - 24 * 60 * 60 * 1000;

      for (const p of payments) {
        const time = new Date(p.time || p.date || p.executed_time).getTime();
        if (!Number.isFinite(time)) continue;
        if (time < oneDayAgo) continue;

        const amount = parseFloat(p.amount) || (parseFloat(p.delivered_amount) / 1_000_000) || 0;
        if (amount >= WHALE_THRESHOLD) {
          transactions.push({
            hash: p.hash || p.tx_hash,
            amount,
            from: p.source || p.account || p.sender,
            to: p.destination || p.recipient,
            timestamp: new Date(time).toISOString(),
            fromLabel: p.source_tag_name || p.source_name || undefined,
            toLabel: p.destination_tag_name || p.destination_name || undefined,
          });
        }
      }
    }
  } catch (e) {
    console.error("XRPScan API failed:", e);
  }

  // Fallback: try Bithomp whale transactions
  if (transactions.length === 0) {
    try {
      const res = await fetch("https://bithomp.com/api/v2/transactions?type=Payment&amount_min=1000000&limit=50", {
        headers: { "Accept": "application/json" },
        signal: AbortSignal.timeout(10000),
      });
      if (res.ok) {
        providerResponded = true;
        source = "Bithomp";
        const data = await res.json();
        const txs = data.transactions || data.payments || data || [];
        for (const t of (Array.isArray(txs) ? txs : [])) {
          const amount = (parseFloat(t.amount) || 0) / (t.amount > 1_000_000_000 ? 1_000_000 : 1);
          if (amount >= WHALE_THRESHOLD) {
            transactions.push({
              hash: t.hash,
              amount,
              from: t.account || t.source,
              to: t.destination,
              timestamp: t.date || t.time || new Date().toISOString(),
            });
          }
        }
      }
    } catch (e) {
      console.error("Bithomp API failed:", e);
    }
  }

  // Sort by time descending
  transactions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  // Calculate hourly volume for chart
  const hourlyMap = new Map<number, number>();
  for (let h = 0; h < 24; h++) hourlyMap.set(h, 0);
  
  const now = Date.now();
  for (const tx of transactions) {
    const hoursAgo = Math.floor((now - new Date(tx.timestamp).getTime()) / 3600000);
    if (hoursAgo >= 0 && hoursAgo < 24) {
      hourlyMap.set(hoursAgo, (hourlyMap.get(hoursAgo) || 0) + tx.amount);
    }
  }

  const hourlyVolume = Array.from(hourlyMap.entries())
    .map(([hour, volume]) => ({ hour: 23 - hour, volume }))
    .sort((a, b) => a.hour - b.hour);

  const totalMoved = transactions.reduce((s, t) => s + t.amount, 0);
  const largest = transactions.reduce((m, t) => Math.max(m, t.amount), 0);

  return {
    available: providerResponded,
    source,
    updatedAt: new Date().toISOString(),
    ...(!providerResponded ? { error: "Live transaction providers are temporarily unavailable." } : {}),
    transactions: transactions.slice(0, 20),
    totalMoved,
    count: transactions.length,
    largest,
    hourlyVolume,
  };
}

export async function GET() {
  if (cache && Date.now() - cache.ts < CACHE_MS) {
    return NextResponse.json(cache.data);
  }

  const data = await fetchWhaleData();
  cache = { data, ts: Date.now() };
  return NextResponse.json(data);
}
