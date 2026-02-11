import { NextResponse } from 'next/server';

// In-memory cache
let cache: { data: Record<string, unknown>; ts: number } | null = null;
const CACHE_TTL = 60_000; // 60 seconds

async function fetchJSON(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function GET() {
  const now = Date.now();
  if (cache && now - cache.ts < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  const [priceData, coinData, tickerData] = await Promise.all([
    fetchJSON('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true'),
    fetchJSON('https://api.coingecko.com/api/v3/coins/ripple?localization=false&tickers=false&community_data=false&developer_data=false'),
    fetchJSON('https://api.coingecko.com/api/v3/coins/ripple/tickers?order=volume_desc'),
  ]);

  const result = {
    price: priceData?.ripple ?? null,
    coin: coinData ?? null,
    tickers: tickerData?.tickers?.slice(0, 20) ?? [],
  };

  cache = { data: result, ts: now };
  return NextResponse.json(result);
}
