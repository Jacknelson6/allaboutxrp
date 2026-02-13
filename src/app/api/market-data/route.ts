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

async function fetchCoinGeckoSupplementary() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/ripple?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false",
      { headers: { Accept: "application/json" } }
    );
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

  const [scanData, cgData] = await Promise.all([
    fetchTradingViewScan(),
    fetchCoinGeckoSupplementary(),
  ]);

  const row = scanData?.data?.[0]?.d ?? [];
  const cgMd = cgData?.market_data;

  const result = {
    price: {
      usd: row[0] ?? 0,
      usd_24h_change: row[1] ?? 0,
      usd_market_cap: row[7] ?? 0,
      usd_24h_vol: row[4] ?? 0,
    },
    coin: {
      // Top-level sentiment fields from CoinGecko
      sentiment_votes_up_percentage: cgData?.sentiment_votes_up_percentage ?? null,
      sentiment_votes_down_percentage: cgData?.sentiment_votes_down_percentage ?? null,
      market_data: {
        // Price data from TradingView (primary)
        current_price: { usd: row[0] ?? 0 },
        price_change_percentage_24h: row[1] ?? 0,
        price_change_percentage_7d: row[5] ?? 0,
        price_change_percentage_30d: row[6] ?? 0,
        high_24h: { usd: row[2] ?? 0 },
        low_24h: { usd: row[3] ?? 0 },
        total_volume: { usd: row[4] ?? 0 },
        market_cap: { usd: row[7] ?? 0 },
        // Supply data from CoinGecko
        circulating_supply: cgMd?.circulating_supply ?? 57_132_693_938,
        total_supply: cgMd?.total_supply ?? 99_987_338_498,
        max_supply: cgMd?.max_supply ?? 100_000_000_000,
        market_cap_rank: cgMd?.market_cap_rank ?? null,
        // ATH/ATL from CoinGecko
        ath: cgMd?.ath ?? { usd: 3.84 },
        ath_date: cgMd?.ath_date ?? { usd: "2018-01-04T00:00:00.000Z" },
        ath_change_percentage: cgMd?.ath_change_percentage ?? { usd: 0 },
        atl: cgMd?.atl ?? { usd: 0.002802 },
        atl_date: cgMd?.atl_date ?? { usd: "2014-07-06T00:00:00.000Z" },
        atl_change_percentage: cgMd?.atl_change_percentage ?? { usd: 0 },
      },
    },
    tickers: (cgData?.tickers ?? []).slice(0, 50).map((t: Record<string, unknown>) => ({
      base: t.base,
      target: t.target,
      market: t.market,
      last: t.last,
      volume: t.volume,
      converted_volume: t.converted_volume,
      trust_score: t.trust_score,
      trade_url: t.trade_url,
    })),
  };

  cache = { data: result, ts: now };
  return NextResponse.json(result, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
  });
}
