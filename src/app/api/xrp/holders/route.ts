import { NextResponse } from 'next/server';
import { getRichList, getPrice, getNetworkStats, getDistribution } from '@/lib/xrpl/client';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [richList, priceData, stats, distribution] = await Promise.all([
      getRichList(50),
      getPrice(),
      getNetworkStats(),
      getDistribution(),
    ]);

    const xrpPrice = priceData.usd ?? 0;
    const totalAccounts = stats.totalAccounts ?? 0;
    const marketCap = priceData.usdMarketCap ?? 0;

    const topHolders = richList.map((entry) => ({
      rank: entry.rank,
      address: entry.address,
      label: entry.label,
      balance: entry.balance,
      valueUsd: entry.balance * xrpPrice,
      percentage: entry.percentage,
    }));

    // Calculate top 10 concentration
    const top10Pct = topHolders.slice(0, 10).reduce((sum, h) => sum + h.percentage, 0);

    const distributionSummary = {
      top10: Math.round(top10Pct * 100) / 100,
      others: Math.round((100 - top10Pct) * 100) / 100,
    };

    return NextResponse.json(
      { topHolders, distribution: distributionSummary, totalAccounts, marketCap, xrpPrice, brackets: distribution },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
    );
  } catch (e) {
    console.error('Holders API error:', e);
    return NextResponse.json(
      { topHolders: [], distribution: { top10: 0, others: 100 }, totalAccounts: 0, marketCap: 0, xrpPrice: 0, brackets: [] },
      { status: 500 }
    );
  }
}
