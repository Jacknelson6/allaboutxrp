import { NextRequest, NextResponse } from 'next/server';
import { getPriceHistory } from '@/lib/xrpl/client';
import type { ApiResponse, PricePoint } from '@/lib/xrpl/types';

export const dynamic = 'force-dynamic';

const ALLOWED_DAYS = [7, 30, 90];

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<PricePoint[]>>> {
  const days = Number(request.nextUrl.searchParams.get('days') ?? '7');
  const validDays = ALLOWED_DAYS.includes(days) ? days : 7;

  try {
    const data = await getPriceHistory(validDays);
    return NextResponse.json(
      { data, cached: false, timestamp: new Date().toISOString() },
      { headers: { 'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1800' } }
    );
  } catch {
    return NextResponse.json(
      { data: [], cached: false, timestamp: new Date().toISOString(), error: 'Failed to fetch price history' },
      { status: 500 }
    );
  }
}
