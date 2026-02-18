'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef } from 'react';
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

export default function MiniPreviewCard() {
  const { arcs, removeArc } = useXRPLStream();
  const { data: priceData } = useXRPPrice();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    widgetRef.current.innerHTML = '';

    // Load the TradingView mini-chart Web Component script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js';

    // Create the Web Component element
    const widget = document.createElement('tv-mini-chart');
    widget.setAttribute('symbol', 'BITSTAMP:XRPUSD');
    widget.setAttribute('date-range', '1D');
    widget.setAttribute('theme', 'dark');
    widget.setAttribute('transparent', '');
    widget.setAttribute('auto-size', '');
    widget.setAttribute('no-time-scale', '');
    widget.style.height = '100%';
    widget.style.width = '100%';
    widget.style.display = 'block';

    widgetRef.current.appendChild(script);
    widgetRef.current.appendChild(widget);
  }, []);

  return (
    <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden">
      {/* ── Top half: TradingView (independent hover) ── */}
      <Link href="/live-chart" className="relative block group/chart">
        {/* Hover overlay that sits above the iframe */}
        <div className="absolute inset-0 z-20 bg-white/[0.03] opacity-0 group-hover/chart:opacity-100 transition-opacity rounded-t-2xl pointer-events-none" />
        <div className="absolute -inset-px bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover/chart:opacity-100 transition-opacity rounded-t-2xl pointer-events-none z-20" />
        <div className="relative h-[240px] w-full overflow-hidden rounded-t-2xl pointer-events-none" ref={widgetRef}>
          <div className="flex items-center justify-center h-full">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
          </div>
        </div>
        {/* 24h change now shown by the TradingView widget itself */}
        <div className="pb-1" />
      </Link>

      {/* Divider */}
      <div className="mx-5 border-t border-[#2F3336]" />

      {/* ── Bottom half: Globe (independent hover) ── */}
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
        <div className="pb-1" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0085FF]/10 rounded-full blur-3xl -z-0" />
      </Link>
    </div>
  );
}
