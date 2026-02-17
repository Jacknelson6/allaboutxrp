'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { useXRPLStream } from '@/lib/globe/useXRPLStream';
import { useXRPPrice } from '@/hooks/useXRPPrice';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Globe = dynamic(() => import('@/components/globe/Globe'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
    </div>
  ),
});

/* ── Custom SVG Sparkline ── */
function XRPSparkline() {
  const [prices, setPrices] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 300, h: 160 });

  // Fetch 24h kline data from Binance
  useEffect(() => {
    let cancelled = false;
    async function fetchKlines() {
      try {
        const res = await fetch(
          'https://api.binance.com/api/v3/klines?symbol=XRPUSDT&interval=15m&limit=96'
        );
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) {
          setPrices(data.map((k: unknown[]) => parseFloat(k[4] as string))); // close prices
        }
      } catch { /* silent */ }
    }
    fetchKlines();
    const iv = setInterval(fetchKlines, 5 * 60 * 1000);
    return () => { cancelled = true; clearInterval(iv); };
  }, []);

  // Measure container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0) setDims({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { linePath, areaPath } = useMemo(() => {
    if (prices.length < 2) return { linePath: '', areaPath: '' };
    const padX = 0, padTop = 8, padBot = 4;
    const w = dims.w, h = dims.h;
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const range = max - min || 1;
    const points = prices.map((p, i) => ({
      x: padX + (i / (prices.length - 1)) * (w - padX * 2),
      y: padTop + (1 - (p - min) / range) * (h - padTop - padBot),
    }));
    const line = points.map((pt, i) => `${i === 0 ? 'M' : 'L'}${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(' ');
    const area = `${line} L${points[points.length - 1].x.toFixed(1)},${h} L${points[0].x.toFixed(1)},${h} Z`;
    return { linePath: line, areaPath: area };
  }, [prices, dims]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {prices.length > 1 && (
        <svg width={dims.w} height={dims.h} className="block">
          <defs>
            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0085FF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0085FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#sparkFill)" />
          <path d={linePath} fill="none" stroke="#0085FF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )}
      {prices.length <= 1 && (
        <div className="flex items-center justify-center h-full">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
        </div>
      )}
    </div>
  );
}

export default function MiniPreviewCard() {
  const { arcs, removeArc } = useXRPLStream();
  const { data: priceData } = useXRPPrice();

  return (
    <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden">
      {/* ── Top half: Custom XRP Chart ── */}
      <div className="relative group/chart">
        <Link href="/live-chart" className="absolute inset-0 z-30" aria-label="View Charts" />
        <div className="absolute inset-0 z-20 bg-white/[0.03] opacity-0 group-hover/chart:opacity-100 transition-opacity rounded-t-2xl pointer-events-none" />
        <div className="absolute -inset-px bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover/chart:opacity-100 transition-opacity rounded-t-2xl pointer-events-none z-20" />

        {/* Price header */}
        {priceData && (
          <div className="relative z-10 px-5 pt-4 pb-1">
            <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-0.5">XRP / USD</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-white">${priceData.price.toFixed(4)}</span>
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                  priceData.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {priceData.change24h >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {priceData.change24h >= 0 ? '+' : ''}{priceData.change24h.toFixed(2)}%
              </span>
            </div>
          </div>
        )}

        {/* Chart */}
        <div className="relative h-[160px] w-full overflow-hidden">
          <XRPSparkline />
        </div>

        <div className="relative z-10 px-5 pb-3">
          <span className="flex items-center gap-1.5 text-[11px] text-[#0085FF]/70 group-hover/chart:text-[#0085FF] group-hover/chart:gap-2.5 transition-all">
            View Charts <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-[#2F3336]" />

      {/* ── Bottom half: Globe ── */}
      <Link href="/live" className="relative block group/globe">
        <div className="absolute inset-0 z-20 bg-white/[0.03] opacity-0 group-hover/globe:opacity-100 transition-opacity rounded-b-2xl pointer-events-none" />
        <div className="absolute -inset-px bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover/globe:opacity-100 transition-opacity rounded-b-2xl pointer-events-none z-20" />
        <div className="relative h-[180px] w-full pointer-events-none">
          <div className="absolute inset-0">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
              </div>
            }>
              <Globe arcs={arcs} onArcComplete={removeArc} />
            </Suspense>
          </div>
        </div>
        <div className="relative z-10 px-5 pb-4 pt-1">
          <span className="flex items-center gap-1.5 text-[11px] text-[#0085FF]/70 group-hover/globe:text-[#0085FF] group-hover/globe:gap-2.5 transition-all">
            Explore Live <ArrowRight className="h-3 w-3" />
          </span>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0085FF]/10 rounded-full blur-3xl -z-0" />
      </Link>
    </div>
  );
}
