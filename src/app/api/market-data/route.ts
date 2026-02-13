import { NextResponse } from 'next/server';

// In-memory cache
let cache: { data: Record<string, unknown>; ts: number } | null = null;
const CACHE_TTL = 5 * 60_000; // 5 minutes

async function fetchTradingViewScan() {
  const res = await fetch("https://scanner.tradingview.com/crypto/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      symbols: { tickers: ["BITSTAMP:XRPUSD"] },
      columns: [
        "close", "change", "high", "low", "volume",
        "Perf.W", "Perf.1M", "market_cap_basic",
        "24h_vol_change", "total_value_traded",
      ],
    }),
  });
  if (!res.ok) return null;
  return await res.json();
}

export async function GET() {
  const now = Date.now();
  if (cache && now - cache.ts < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  const scanData = await fetchTradingViewScan();
  const row = scanData?.data?.[0]?.d ?? [];

  const result = {
    price: {
      usd: row[0] ?? 0,
      usd_24h_change: row[1] ?? 0,
      usd_market_cap: row[7] ?? 0,
      usd_24h_vol: row[4] ?? 0,
    },
    coin: {
      market_data: {
        current_price: { usd: row[0] ?? 0 },
        price_change_percentage_24h: row[1] ?? 0,
        price_change_percentage_7d: row[5] ?? 0,
        price_change_percentage_30d: row[6] ?? 0,
        high_24h: { usd: row[2] ?? 0 },
        low_24h: { usd: row[3] ?? 0 },
        total_volume: { usd: row[4] ?? 0 },
        market_cap: { usd: row[7] ?? 0 },
      },
    },
    tickers: [],
  };

  cache = { data: result, ts: now };
  return NextResponse.json(result, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
  });
}
