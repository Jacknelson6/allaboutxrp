'use client';

import { Stats } from '@/lib/globe/useXRPLStream';
import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value, decimals = 1 }: {
  value: number;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(value);
  const targetRef = useRef(value);
  const currentRef = useRef(value);

  useEffect(() => {
    targetRef.current = value;
  }, [value]);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) < 0.01) {
        currentRef.current = targetRef.current;
      } else {
        currentRef.current += diff * 0.15;
      }
      setDisplay(currentRef.current);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return <span>{display.toFixed(decimals)}</span>;
}

interface Props {
  stats: Stats;
}

export default function StatsBar({ stats }: Props) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-[#0A0A0B]/90 border-b border-[rgba(255,255,255,0.08)]">
      <span className="text-xs font-bold text-white/90">Live Trades</span>
      <div className="h-4 w-px bg-[rgba(255,255,255,0.08)]" />
      <div className="flex items-center gap-1.5">
        <span className="text-[11px] text-[#888888] font-mono uppercase tracking-wider">TPS</span>
        <span className="text-sm text-[#F0F0F0] font-mono font-bold">
          <AnimatedNumber value={stats.tps} />
        </span>
      </div>
      <div className={`w-2 h-2 rounded-full ${stats.connected ? 'bg-[#3FB950] animate-pulse' : 'bg-red-500'}`} />
    </div>
  );
}
