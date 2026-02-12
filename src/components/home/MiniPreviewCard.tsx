'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef } from 'react';
import { useXRPLStream } from '@/lib/globe/useXRPLStream';

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
  const chartRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  // TradingView Single Ticker widget (price + change)
  useEffect(() => {
    if (!tickerRef.current) return;
    tickerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      symbol: 'BINANCE:XRPUSDT',
      width: '100%',
      isTransparent: true,
      colorTheme: 'dark',
      locale: 'en',
    });

    const wrapper = document.createElement('div');
    wrapper.className = 'tradingview-widget-container';
    wrapper.style.width = '100%';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'tradingview-widget-container__widget';

    wrapper.appendChild(innerDiv);
    wrapper.appendChild(script);
    tickerRef.current.appendChild(wrapper);
  }, []);

  // TradingView Mini Chart widget
  useEffect(() => {
    if (!chartRef.current) return;
    chartRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      symbol: 'BINANCE:XRPUSDT',
      width: '100%',
      height: '100%',
      locale: 'en',
      dateRange: '1D',
      colorTheme: 'dark',
      isTransparent: true,
      autosize: true,
      largeChartUrl: '',
      noTimeScale: false,
      chartOnly: true,
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
    chartRef.current.appendChild(wrapper);
  }, []);

  return (
    <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden hover:bg-[#1D1F23] transition-colors group">
      {/* Gradient background glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* ── Price Ticker (TradingView) ── */}
      <div className="relative z-10 px-3 pt-3 pb-1" ref={tickerRef}>
        <div className="flex items-center justify-center h-[80px]">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
        </div>
      </div>
      <div className="relative z-10 px-5 pb-2">
        <Link href="/live-chart" className="flex items-center gap-1.5 text-[11px] text-[#0085FF]/70 hover:text-[#0085FF] hover:gap-2.5 transition-all">
          View Live Price <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-[#2F3336]" />

      {/* ── Globe ── */}
      <Link href="/live">
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
      </Link>
      <div className="relative z-10 px-5 pb-3 pt-1">
        <Link href="/live" className="flex items-center gap-1.5 text-[11px] text-[#0085FF]/70 hover:text-[#0085FF] hover:gap-2.5 transition-all">
          Explore Live <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-[#2F3336]" />

      {/* ── Chart ── */}
      <div className="relative h-[180px] w-full overflow-hidden mt-1" ref={chartRef} />
      <div className="relative z-10 px-5 pb-4 pt-1">
        <Link href="/live-chart" className="flex items-center gap-1.5 text-[11px] text-[#0085FF]/70 hover:text-[#0085FF] hover:gap-2.5 transition-all">
          View Charts <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Blue glow effect */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0085FF]/10 rounded-full blur-3xl -z-0" />
    </div>
  );
}
