import { NextResponse } from "next/server";

export const revalidate = 300; // cache for 5 minutes

export async function GET() {
  try {
    const res = await fetch(
      "https://api.binance.com/api/v3/klines?symbol=XRPUSDT&interval=15m&limit=96",
      { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error(`Binance API error: ${res.status}`);
    const data = await res.json();
    // Return just close prices to minimize payload
    const prices = data.map((k: unknown[]) => parseFloat(k[4] as string));
    return NextResponse.json(prices, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    });
  } catch (e) {
    return NextResponse.json([], { status: 500 });
  }
}
