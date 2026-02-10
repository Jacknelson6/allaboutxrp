'use client';

import { Stats } from '@/lib/globe/useXRPLStream';
import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value, decimals = 1, prefix = '', suffix = '' }: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
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

  const formatNumber = (n: number) => {
    if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(decimals)}B`;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(decimals)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(decimals)}K`;
    return n.toFixed(decimals);
  };

  return <span>{prefix}{formatNumber(display)}{suffix}</span>;
}

interface Props {
  stats: Stats;
}

export default function StatsBar({ stats }: Props) {
  return (
    <div className="flex items-center gap-6 px-6 py-2.5 bg-[#161B22]/90  border-b border-[#30363d]">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${stats.connected ? 'bg-[#3FB950] animate-pulse' : 'bg-red-500'}`} />
        <span className="text-[11px] text-[#8b949e] font-mono uppercase tracking-wider">
          {stats.connected ? 'Live' : 'Connecting'}
        </span>
      </div>

      <div className="h-4 w-px bg-[#30363d]" />

      <div className="flex items-center gap-1.5">
        <span className="text-[11px] text-[#8b949e] font-mono uppercase tracking-wider">TPS</span>
        <span className="text-sm text-[#F0F6FC] font-mono font-bold">
          <AnimatedNumber value={stats.tps} />
        </span>
      </div>

      <div className="h-4 w-px bg-[#30363d] hidden sm:block" />

      <div className="hidden sm:flex items-center gap-1.5">
        <span className="text-[11px] text-[#8b949e] font-mono uppercase tracking-wider">5m Vol</span>
        <span className="text-sm text-[#00A3FF] font-mono font-bold">
          <AnimatedNumber value={stats.totalXrpMoved} suffix=" XRP" />
        </span>
      </div>

      <div className="h-4 w-px bg-[#30363d] hidden md:block" />

      <div className="hidden md:flex items-center gap-1.5">
        <span className="text-[11px] text-[#8b949e] font-mono uppercase tracking-wider">Largest</span>
        <span className="text-sm text-[#D29922] font-mono font-bold">
          <AnimatedNumber value={stats.largestTx} suffix=" XRP" />
        </span>
      </div>
    </div>
  );
}
