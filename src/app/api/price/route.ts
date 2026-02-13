import { NextResponse } from "next/server";

// Proxy to the main xrp-price endpoint for backwards compatibility
export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  try {
    const res = await fetch(`${origin}/api/xrp-price`);
    const data = await res.json();
    return NextResponse.json({
      price: data.price,
      change24h: data.change24h,
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
    });
  } catch {
    return NextResponse.json({ price: 0, change24h: 0 }, { status: 500 });
  }
}
