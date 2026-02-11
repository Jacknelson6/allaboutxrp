'use client';

import { useEffect, useState } from 'react';
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

export default function FearGreedIndex() {
  const [data, setData] = useState<FearGreedData | null>(null);

  useEffect(() => {
    const fetchFng = async () => {
      try {
        const res = await fetch('https://api.alternative.me/fng/?limit=1');
        const json = await res.json();
        if (json.data?.[0]) {
          const val = parseInt(json.data[0].value, 10);
          setData({
            value: val,
            classification: json.data[0].value_classification,
          });
        }
      } catch (e) {
        console.error('Failed to fetch Fear & Greed Index:', e);
      }
    };

    fetchFng();
    const interval = setInterval(fetchFng, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const value = data?.value ?? 50;
  const color = getColor(value);
  const label = data ? getLabel(value) : '—';

  // Semicircle gauge: angle from -90 (left) to +90 (right)
  const angle = -90 + (value / 100) * 180;
  const needleRadians = (angle * Math.PI) / 180;
  // SVG center at (60, 55), radius 45
  const cx = 60;
  const cy = 55;
  const r = 45;
  const needleX = cx + Math.cos(needleRadians) * (r - 6);
  const needleY = cy + Math.sin(needleRadians) * (r - 6);

  // Gradient stops for the arc
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
        Fear &amp; Greed Index
      </p>

      <div className="flex flex-col items-center">
        {/* Gauge SVG */}
        <svg viewBox="0 0 120 70" className="w-full max-w-[200px]">
          {/* Arc segments */}
          {segments.map((seg) => {
            const startAngle = -180 + (seg.start / 100) * 180;
            const endAngle = -180 + (seg.end / 100) * 180;
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;
            const x1 = cx + Math.cos(startRad) * r;
            const y1 = cy + Math.sin(startRad) * r;
            const x2 = cx + Math.cos(endRad) * r;
            const y2 = cy + Math.sin(endRad) * r;
            const largeArc = endAngle - startAngle > 180 ? 1 : 0;
            return (
              <path
                key={seg.start}
                d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
                fill="none"
                stroke={seg.color}
                strokeWidth="6"
                strokeLinecap="round"
                opacity={0.3}
              />
            );
          })}

          {/* Active arc up to current value */}
          {data && (
            <motion.path
              d={(() => {
                const startRad = Math.PI; // -180 deg
                const endAngle = -180 + (value / 100) * 180;
                const endRad = (endAngle * Math.PI) / 180;
                const x1 = cx + Math.cos(startRad) * r;
                const y1 = cy + Math.sin(startRad) * r;
                const x2 = cx + Math.cos(endRad) * r;
                const y2 = cy + Math.sin(endRad) * r;
                const largeArc = value > 50 ? 1 : 0;
                return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
              })()}
              fill="none"
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          )}

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

        {/* Value */}
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
          <p
            className="text-sm font-semibold mt-1"
            style={{ color }}
          >
            {label}
          </p>
        </motion.div>
      </div>

      <p className="text-[10px] text-white/20 text-center mt-4">
        Source: Alternative.me
      </p>
    </div>
  );
}
