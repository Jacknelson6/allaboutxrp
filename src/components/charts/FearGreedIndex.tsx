'use client';

import { useEffect, useState, useCallback } from 'react';

function getColor(value: number): string {
  if (value <= 25) return '#ea3943';
  if (value <= 45) return '#f5a623';
  if (value <= 55) return '#f5d100';
  if (value <= 75) return '#6ccf59';
  return '#16c784';
}

function getLabel(value: number): string {
  if (value <= 25) return 'Extreme Fear';
  if (value <= 45) return 'Fear';
  if (value <= 55) return 'Neutral';
  if (value <= 75) return 'Greed';
  return 'Extreme Greed';
}

export default function FearGreedIndex() {
  const [value, setValue] = useState<number | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const [xrpRes, fngRes] = await Promise.all([
        fetch('https://api.coingecko.com/api/v3/coins/ripple?localization=false&tickers=false&community_data=false&developer_data=false'),
        fetch('https://api.alternative.me/fng/?limit=1'),
      ]);

      const xrp = await xrpRes.json();
      const fng = await fngRes.json();

      const md = xrp.market_data;
      if (!md) return;

      const priceChange24h = md.price_change_percentage_24h ?? 0;
      const priceMomentum = Math.max(0, Math.min(100, ((priceChange24h + 15) / 30) * 100));

      const priceChange7d = md.price_change_percentage_7d ?? 0;
      const weeklyMomentum = Math.max(0, Math.min(100, ((priceChange7d + 30) / 60) * 100));

      const currentPrice = md.current_price?.usd ?? 0;
      const ath = md.ath?.usd ?? currentPrice;
      const athScore = Math.max(0, Math.min(100, ath > 0 ? (currentPrice / ath) * 100 : 50));

      const cryptoSentiment = fng.data?.[0] ? parseInt(fng.data[0].value, 10) : 50;

      const xrpScore = Math.round(
        priceMomentum * 0.4 +
        weeklyMomentum * 0.2 +
        athScore * 0.2 +
        cryptoSentiment * 0.2
      );

      setValue(Math.max(0, Math.min(100, xrpScore)));
    } catch (e) {
      console.error('Failed to fetch XRP Fear & Greed data:', e);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const score = value ?? 50;
  const color = getColor(score);
  const label = value !== null ? getLabel(score) : '—';

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
      <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
        XRP Fear &amp; Greed
      </p>

      <div className="flex items-center gap-4">
        {/* Score */}
        <div className="text-center">
          <span
            className="text-4xl font-bold font-mono"
            style={{ color }}
          >
            {value !== null ? score : '—'}
          </span>
          <p className="text-xs font-semibold mt-0.5" style={{ color }}>
            {label}
          </p>
        </div>

        {/* Bar gauge */}
        <div className="flex-1">
          <div className="relative h-3 rounded-full overflow-hidden bg-white/[0.06]">
            {/* Gradient background */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(to right, #ea3943, #f5a623, #f5d100, #6ccf59, #16c784)',
                opacity: 0.2,
              }}
            />
            {/* Fill */}
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${score}%`,
                background: `linear-gradient(to right, #ea3943, ${color})`,
              }}
            />
          </div>
          {/* Scale labels */}
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-white/20">0</span>
            <span className="text-[9px] text-white/20">50</span>
            <span className="text-[9px] text-white/20">100</span>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-white/20 text-center mt-3">
        XRP-specific • Updated every 5 min
      </p>
    </div>
  );
}
