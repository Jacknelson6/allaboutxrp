'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface FearGreedData {
  value: number;
  classification: string;
}

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

/**
 * XRP-specific Fear & Greed Index
 * Calculates based on: price change (40%), volatility proxy via high-low range (20%),
 * volume change (20%), and overall crypto sentiment (20%)
 */
export default function FearGreedIndex() {
  const [data, setData] = useState<FearGreedData | null>(null);

  const fetchData = useCallback(async () => {
    try {
      // Fetch XRP market data from CoinGecko
      const [xrpRes, fngRes] = await Promise.all([
        fetch('https://api.coingecko.com/api/v3/coins/ripple?localization=false&tickers=false&community_data=false&developer_data=false'),
        fetch('https://api.alternative.me/fng/?limit=1'),
      ]);

      const xrp = await xrpRes.json();
      const fng = await fngRes.json();

      const md = xrp.market_data;
      if (!md) return;

      // Components for XRP-specific score:
      // 1. Price momentum (40%): Map 24h change from [-15%, +15%] to [0, 100]
      const priceChange24h = md.price_change_percentage_24h ?? 0;
      const priceMomentum = Math.max(0, Math.min(100, ((priceChange24h + 15) / 30) * 100));

      // 2. Weekly momentum (20%): Map 7d change from [-30%, +30%] to [0, 100]
      const priceChange7d = md.price_change_percentage_7d ?? 0;
      const weeklyMomentum = Math.max(0, Math.min(100, ((priceChange7d + 30) / 60) * 100));

      // 3. Distance from ATH (20%): Closer to ATH = more greed
      const currentPrice = md.current_price?.usd ?? 0;
      const ath = md.ath?.usd ?? currentPrice;
      const athRatio = ath > 0 ? (currentPrice / ath) * 100 : 50;
      const athScore = Math.max(0, Math.min(100, athRatio));

      // 4. Overall crypto sentiment (20%): From alternative.me
      const cryptoSentiment = fng.data?.[0] ? parseInt(fng.data[0].value, 10) : 50;

      // Weighted average
      const xrpScore = Math.round(
        priceMomentum * 0.4 +
        weeklyMomentum * 0.2 +
        athScore * 0.2 +
        cryptoSentiment * 0.2
      );

      const finalScore = Math.max(0, Math.min(100, xrpScore));

      setData({
        value: finalScore,
        classification: getLabel(finalScore),
      });
    } catch (e) {
      console.error('Failed to fetch XRP Fear & Greed data:', e);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const value = data?.value ?? 50;
  const color = getColor(value);
  const label = data ? data.classification : '—';

  // Semicircle gauge math
  // Arc goes from 180° (left) to 0° (right) — top half of circle
  // Value 0 = 180° (leftmost), Value 100 = 0° (rightmost)
  const cx = 60;
  const cy = 55;
  const r = 45;

  // Needle angle: value 0 → 180° (left), value 100 → 0° (right)
  const needleAngleDeg = 180 - (value / 100) * 180;
  const needleRad = (needleAngleDeg * Math.PI) / 180;
  const needleX = cx + Math.cos(needleRad) * (r - 6);
  const needleY = cy - Math.sin(needleRad) * (r - 6);

  // Arc segments
  const segments = [
    { start: 0, end: 25, color: '#ea3943' },
    { start: 25, end: 45, color: '#f5a623' },
    { start: 45, end: 55, color: '#f5d100' },
    { start: 55, end: 75, color: '#6ccf59' },
    { start: 75, end: 100, color: '#16c784' },
  ];

  function valueToXY(pct: number) {
    const angleDeg = 180 - (pct / 100) * 180;
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + Math.cos(rad) * r, y: cy - Math.sin(rad) * r };
  }

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
      <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
        XRP Fear &amp; Greed
      </p>

      <div className="flex flex-col items-center">
        <svg viewBox="0 0 120 70" className="w-full max-w-[200px]">
          {/* Background arc segments */}
          {segments.map((seg) => {
            const p1 = valueToXY(seg.start);
            const p2 = valueToXY(seg.end);
            const sweep = ((seg.end - seg.start) / 100) * 180;
            const largeArc = sweep > 180 ? 1 : 0;
            return (
              <path
                key={seg.start}
                d={`M ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 0 ${p2.x} ${p2.y}`}
                fill="none"
                stroke={seg.color}
                strokeWidth="6"
                strokeLinecap="round"
                opacity={0.3}
              />
            );
          })}

          {/* Active arc up to current value */}
          {data && (() => {
            const p1 = valueToXY(0);
            const p2 = valueToXY(value);
            const sweep = (value / 100) * 180;
            const largeArc = sweep > 90 ? 1 : 0;
            return (
              <motion.path
                d={`M ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 0 ${p2.x} ${p2.y}`}
                fill="none"
                stroke={color}
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            );
          })()}

          {/* Needle */}
          {data && (
            <motion.line
              x1={cx}
              y1={cy}
              x2={needleX}
              y2={needleY}
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          )}
          <circle cx={cx} cy={cy} r="3" fill="white" />

          {/* Labels */}
          <text x="8" y="60" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="Inter">0</text>
          <text x="57" y="8" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="Inter">50</text>
          <text x="105" y="60" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="Inter">100</text>
        </svg>

        <motion.div
          className="mt-2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span
            className="text-4xl font-bold font-mono"
            style={{ color, fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {data ? value : '—'}
          </span>
          <p className="text-sm font-semibold mt-1" style={{ color }}>
            {label}
          </p>
        </motion.div>
      </div>

      <p className="text-[10px] text-white/20 text-center mt-4">
        XRP-specific • Updated every 5 min
      </p>
    </div>
  );
}
