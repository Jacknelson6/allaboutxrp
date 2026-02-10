import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const days = request.nextUrl.searchParams.get("days") || "1";
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/ripple/ohlc?vs_currency=usd&days=${days}`,
      { next: { revalidate: 120 } }
    );
    if (!res.ok) throw new Error("CoinGecko OHLC error");
    const data = await res.json() as number[][];
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=240' },
    });
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
