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

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      symbol: 'BITSTAMP:XRPUSD',
      width: 280,
      height: 240,
      locale: 'en',
      dateRange: '1M',
      colorTheme: 'dark',
      isTransparent: true,
      autosize: false,
      largeChartUrl: '',
      noTimeScale: false,
      chartOnly: false,
      trendLineColor: '#0085FF',
      underLineColor: 'rgba(0, 133, 255, 0.12)',
      underLineBottomColor: 'rgba(0, 133, 255, 0)',
    });

    const wrapper = document.createElement('div');
    wrapper.className = 'tradingview-widget-container';
    wrapper.style.height = '100%';
    wrapper.style.width = '100%';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'tradingview-widget-container__widget';
    innerDiv.style.height = '100%';
    innerDiv.style.width = '100%';

    wrapper.appendChild(innerDiv);
    wrapper.appendChild(script);
    widgetRef.current.appendChild(wrapper);
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
        {priceData && (
          <div className="relative z-10 px-5 pb-1.5">
            <span
              className={`inline-flex items-center gap-1 text-xs font-medium ${
                priceData.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {priceData.change24h >= 0 ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              {priceData.change24h >= 0 ? '+' : ''}
              {priceData.change24h.toFixed(2)}% (24h)
            </span>
          </div>
        )}
        <div className="relative z-10 px-5 pb-3">
          <span className="flex items-center gap-1.5 text-[11px] text-[#0085FF]/70 group-hover/chart:text-[#0085FF] group-hover/chart:gap-2.5 transition-all">
            View Charts <ArrowRight className="h-3 w-3" />
          </span>
        </div>
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
