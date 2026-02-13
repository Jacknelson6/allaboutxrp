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
        "total_value_traded",
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

  // TradingView columns: [0]=close, [1]=change, [2]=high, [3]=low, [4]=volume, [5]=Perf.W, [6]=Perf.1M, [7]=market_cap_basic (often null), [8]=total_value_traded
  // Use CoinGecko for market cap and 24h volume since TradingView returns null/incomplete for these
  const tvMarketCap = row[7];
  const cgMarketCap = cgMd?.market_cap?.usd;
  const marketCap = tvMarketCap ?? cgMarketCap ?? 0;

  const tvVolume = row[4];
  const cgVolume = cgMd?.total_volume?.usd;
  const volume24h = (tvVolume && tvVolume > 0) ? tvVolume : (cgVolume ?? 0);

  const result = {
    price: {
      usd: row[0] ?? 0,
      usd_24h_change: row[1] ?? 0,
      usd_market_cap: marketCap,
      usd_24h_vol: volume24h,
    },
    coin: {
      sentiment_votes_up_percentage: cgData?.sentiment_votes_up_percentage ?? null,
      sentiment_votes_down_percentage: cgData?.sentiment_votes_down_percentage ?? null,
      market_data: {
        current_price: { usd: row[0] ?? 0 },
        price_change_percentage_24h: row[1] ?? 0,
        price_change_percentage_7d: row[5] ?? 0,
        price_change_percentage_30d: row[6] ?? 0,
        high_24h: { usd: row[2] ?? 0 },
        low_24h: { usd: row[3] ?? 0 },
        total_volume: { usd: volume24h },
        market_cap: { usd: marketCap },
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
