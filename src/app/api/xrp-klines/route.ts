import { NextResponse } from "next/server";

export const revalidate = 300;

export async function GET() {
  // Try Binance first, fall back to CoinGecko
  try {
    const res = await fetch(
      "https://api.binance.us/api/v3/klines?symbol=XRPUSD&interval=15m&limit=96",
      { next: { revalidate: 300 } }
    );
    if (res.ok) {
      const data = await res.json();
      const prices = data.map((k: unknown[]) => parseFloat(k[4] as string));
      if (prices.length > 0) {
        return NextResponse.json(prices, {
          headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
        });
      }
    }
  } catch { /* fall through */ }

  // Fallback: CoinGecko market_chart
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=usd&days=1",
      { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error("CoinGecko error");
    const data = await res.json();
    const prices = (data.prices as [number, number][]).map(([, p]) => p);
    // Downsample to ~96 points
    const step = Math.max(1, Math.floor(prices.length / 96));
    const sampled = prices.filter((_, i) => i % step === 0);
    return NextResponse.json(sampled, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    });
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
