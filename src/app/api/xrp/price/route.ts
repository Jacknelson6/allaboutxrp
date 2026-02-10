import { NextResponse } from 'next/server';
import { getPrice } from '@/lib/xrpl/client';
import type { ApiResponse, PriceData } from '@/lib/xrpl/types';

export const dynamic = 'force-dynamic';

export async function GET(): Promise<NextResponse<ApiResponse<PriceData>>> {
  try {
    const data = await getPrice();
    return NextResponse.json(
      { data, cached: false, timestamp: new Date().toISOString() },
      { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' } }
    );
  } catch {
    return NextResponse.json(
      {
        data: { usd: 0, usdChange24h: 0, usdChange7d: 0, usdMarketCap: 0, usdVolume24h: 0, btc: 0, lastUpdated: '' },
        cached: false,
        timestamp: new Date().toISOString(),
        error: 'Failed to fetch price data',
      },
      { status: 500 }
    );
  }
}
