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

// Convert a percentage (0-100) to a point on the semicircle arc
// 0% = left (180°), 100% = right (0°)
function pctToPoint(pct: number, cx: number, cy: number, r: number) {
  const angleDeg = 180 - (pct / 100) * 180;
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + Math.cos(rad) * r, y: cy - Math.sin(rad) * r };
}

// Build an SVG arc path from startPct to endPct
function arcPath(startPct: number, endPct: number, cx: number, cy: number, r: number) {
  const p1 = pctToPoint(startPct, cx, cy, r);
  const p2 = pctToPoint(endPct, cx, cy, r);
  const angleDiff = ((endPct - startPct) / 100) * 180;
  const largeArc = angleDiff > 90 ? 1 : 0;
  // Sweep flag 0 = counterclockwise (left to right on top semicircle)
  return `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 0 ${p2.x} ${p2.y}`;
}

export default function FearGreedIndex() {
  const [data, setData] = useState<FearGreedData | null>(null);

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

  const cx = 100;
  const cy = 90;
  const r = 70;

  // Needle endpoint
  const needle = pctToPoint(value, cx, cy, r - 10);

  // Background segments
  const segments = [
    { start: 0, end: 25, color: '#ea3943' },
    { start: 25, end: 45, color: '#f5a623' },
    { start: 45, end: 55, color: '#f5d100' },
    { start: 55, end: 75, color: '#6ccf59' },
    { start: 75, end: 100, color: '#16c784' },
  ];

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
      <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
        XRP Fear &amp; Greed
      </p>

      <div className="flex flex-col items-center">
        <svg viewBox="0 0 200 120" className="w-full max-w-[220px]">
          {/* Background arc segments */}
          {segments.map((seg) => (
            <path
              key={seg.start}
              d={arcPath(seg.start, seg.end, cx, cy, r)}
              fill="none"
              stroke={seg.color}
              strokeWidth="10"
              strokeLinecap="butt"
              opacity={0.25}
            />
          ))}

          {/* Active filled arc from 0 to value */}
          {data && (
            <motion.path
              d={arcPath(0, Math.max(value, 1), cx, cy, r)}
              fill="none"
              stroke={color}
              strokeWidth="10"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          )}

          {/* Needle */}
          {data && (
            <motion.line
              x1={cx}
              y1={cy}
              x2={needle.x}
              y2={needle.y}
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          )}

          {/* Center dot */}
          <circle cx={cx} cy={cy} r="4" fill="white" />

          {/* Labels */}
          <text x="20" y="98" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Inter" textAnchor="middle">0</text>
          <text x={cx} y="15" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Inter" textAnchor="middle">50</text>
          <text x="180" y="98" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="Inter" textAnchor="middle">100</text>
        </svg>

        <motion.div
          className="mt-1 text-center"
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

      <p className="text-[10px] text-white/20 text-center mt-3">
        XRP-specific • Updated every 5 min
      </p>
    </div>
  );
}
