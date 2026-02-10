import { NextResponse } from 'next/server';
import { getDistribution } from '@/lib/xrpl/client';
import type { ApiResponse, DistributionBracket } from '@/lib/xrpl/types';

export const dynamic = 'force-dynamic';

export async function GET(): Promise<NextResponse<ApiResponse<DistributionBracket[]>>> {
  try {
    const data = await getDistribution();
    return NextResponse.json(
      { data, cached: false, timestamp: new Date().toISOString() },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' } }
    );
  } catch {
    return NextResponse.json(
      { data: [], cached: false, timestamp: new Date().toISOString(), error: 'Failed to fetch distribution' },
      { status: 500 }
    );
  }
}
