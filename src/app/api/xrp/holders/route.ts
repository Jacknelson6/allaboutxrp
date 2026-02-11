import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://allaboutxrp.com';

    const [richRes, distRes, statsRes, priceRes] = await Promise.all([
      fetch(`${baseUrl}/api/xrp/richlist?limit=50`),
      fetch(`${baseUrl}/api/xrp/distribution`),
      fetch(`${baseUrl}/api/xrp/stats`),
      fetch(`${baseUrl}/api/xrp/price`),
    ]);

    const [richData, distData, statsData, priceData] = await Promise.all([
      richRes.json(),
      distRes.json(),
      statsRes.json(),
      priceRes.json(),
    ]);

    const xrpPrice = priceData.data?.usd ?? 0;
    const totalAccounts = statsData.data?.network?.totalAccounts ?? 0;
    const marketCap = priceData.data?.usdMarketCap ?? 0;

    const topHolders = (richData.data ?? []).map((entry: { rank: number; address: string; label: string | null; balance: number; percentage: number }) => ({
      rank: entry.rank,
      address: entry.address,
      label: entry.label,
      balance: entry.balance,
      valueUsd: entry.balance * xrpPrice,
      percentage: entry.percentage,
    }));

    // Calculate top 10 concentration
    const top10Pct = topHolders.slice(0, 10).reduce((sum: number, h: { percentage: number }) => sum + h.percentage, 0);

    const distribution = {
      top10: Math.round(top10Pct * 100) / 100,
      others: Math.round((100 - top10Pct) * 100) / 100,
    };

    return NextResponse.json(
      { topHolders, distribution, totalAccounts, marketCap, xrpPrice, brackets: distData.data ?? [] },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
    );
  } catch (e) {
    return NextResponse.json(
      { topHolders: [], distribution: { top10: 0, others: 100 }, totalAccounts: 0, marketCap: 0, xrpPrice: 0, brackets: [] },
      { status: 500 }
    );
  }
}
