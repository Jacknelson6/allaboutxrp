import { NextResponse } from "next/server";

interface CoinGeckoResponse {
  ripple: {
    usd: number;
    usd_24h_change: number;
  };
}

export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd&include_24hr_change=true",
      { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("CoinGecko API error");
    const data = (await res.json()) as CoinGeckoResponse;
    return NextResponse.json({
      price: data.ripple.usd,
      change24h: data.ripple.usd_24h_change,
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
    });
  } catch {
    return NextResponse.json({ price: 0, change24h: 0 }, { status: 500 });
  }
}
