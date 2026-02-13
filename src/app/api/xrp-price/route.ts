import { NextResponse } from "next/server";

// In-memory cache with 5-minute TTL
let cache: { data: XRPPriceResponse; ts: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export interface XRPPriceResponse {
  price: number;
  change24h: number;
  change7d: number;
  change30d: number;
  high24h: number;
  low24h: number;
  volume24h: number;
}

async function fetchTradingViewData(): Promise<XRPPriceResponse> {
  const res = await fetch("https://scanner.tradingview.com/crypto/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      symbols: { tickers: ["BITSTAMP:XRPUSD"] },
      columns: [
        "close",
        "change",
        "high",
        "low",
        "volume",
        "Perf.W",
        "Perf.1M",
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`TradingView scanner returned ${res.status}`);
  }

  const json = await res.json();
  const row = json?.data?.[0]?.d;

  if (!row || row.length < 7) {
    throw new Error("Unexpected TradingView response shape");
  }

  const [price, change24h, high24h, low24h, volume24h, perfW, perf1M] = row;

  return {
    price: price ?? 0,
    change24h: change24h ?? 0,
    change7d: perfW ?? 0,    // Perf.W already in percent
    change30d: perf1M ?? 0, // Perf.1M already in percent
    high24h: high24h ?? 0,
    low24h: low24h ?? 0,
    volume24h: volume24h ?? 0,
  };
}

export async function GET() {
  const now = Date.now();
  if (cache && now - cache.ts < CACHE_TTL) {
    return NextResponse.json(cache.data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  }

  try {
    const data = await fetchTradingViewData();
    cache = { data, ts: now };
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (err) {
    console.error("TradingView fetch error:", err);
    // Return stale cache if available
    if (cache) {
      return NextResponse.json(cache.data, {
        headers: { "Cache-Control": "public, s-maxage=60" },
      });
    }
    return NextResponse.json(
      { price: 0, change24h: 0, change7d: 0, change30d: 0, high24h: 0, low24h: 0, volume24h: 0 },
      { status: 500 }
    );
  }
}
