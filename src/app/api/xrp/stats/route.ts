import { NextResponse } from 'next/server';
import { getNetworkStats, getSupplyInfo } from '@/lib/xrpl/client';
import type { ApiResponse, NetworkStats, SupplyInfo } from '@/lib/xrpl/types';

export const dynamic = 'force-dynamic';

interface StatsResponse {
  network: NetworkStats;
  supply: SupplyInfo;
}

export async function GET(): Promise<NextResponse<ApiResponse<StatsResponse>>> {
  try {
    const [network, supply] = await Promise.all([getNetworkStats(), getSupplyInfo()]);
    return NextResponse.json(
      { data: { network, supply }, cached: false, timestamp: new Date().toISOString() },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
    );
  } catch {
    return NextResponse.json(
      {
        data: {
          network: { ledgerIndex: 0, txCount24h: 0, avgTxFee: 0, activeAccounts: 0, totalAccounts: 0, lastClose: '' },
          supply: { totalSupply: 0, circulatingSupply: 0, escrowedSupply: 0, burnedSupply: 0, percentCirculating: 0, percentEscrowed: 0 },
        },
        cached: false,
        timestamp: new Date().toISOString(),
        error: 'Failed to fetch stats',
      },
      { status: 500 }
    );
  }
}
