import { NextRequest, NextResponse } from 'next/server';
import { getRichList } from '@/lib/xrpl/client';
import type { ApiResponse, RichListEntry } from '@/lib/xrpl/types';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<RichListEntry[]>>> {
  const limit = Math.min(Math.max(Number(request.nextUrl.searchParams.get('limit') ?? '100'), 1), 500);

  try {
    const data = await getRichList(limit);
    return NextResponse.json(
      { data: data.slice(0, limit), cached: false, timestamp: new Date().toISOString() },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' } }
    );
  } catch {
    return NextResponse.json(
      { data: [], cached: false, timestamp: new Date().toISOString(), error: 'Failed to fetch rich list' },
      { status: 500 }
    );
  }
}
