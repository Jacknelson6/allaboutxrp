import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [fngRes, klinesRes] = await Promise.all([
      fetch('https://api.alternative.me/fng/?limit=1', { next: { revalidate: 300 } }),
      fetch('https://api.binance.us/api/v3/klines?symbol=XRPUSD&interval=1d&limit=1', { next: { revalidate: 300 } }),
    ]);

    const fngData = await fngRes.json();
    const klinesData = await klinesRes.json();

    const fearGreed = {
      value: Number(fngData.data?.[0]?.value ?? 50),
      label: fngData.data?.[0]?.value_classification ?? 'Neutral',
    };

    const totalVolume = Number(klinesData[0]?.[5] ?? 0);
    const buyVolume = Number(klinesData[0]?.[9] ?? 0);
    const sellVolume = totalVolume - buyVolume;
    const buyPercent = totalVolume > 0 ? (buyVolume / totalVolume) * 100 : 50;

    return NextResponse.json(
      { fearGreed, buyVolume, sellVolume, totalVolume, buyPercent },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
    );
  } catch {
    return NextResponse.json(
      { fearGreed: { value: 50, label: 'Neutral' }, buyVolume: 0, sellVolume: 0, totalVolume: 0, buyPercent: 50 },
      { status: 500 }
    );
  }
}
