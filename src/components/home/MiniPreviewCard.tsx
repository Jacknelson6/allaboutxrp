'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef } from 'react';
import { useXRPPrice } from '@/hooks/useXRPPrice';
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
  const { data } = useXRPPrice();
  const { arcs, removeArc } = useXRPLStream();
  const positive = (data?.change24h ?? 0) >= 0;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

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
    containerRef.current.appendChild(wrapper);
  }, []);

  return (
    <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden hover:bg-[#1D1F23] transition-colors group">
      {/* Gradient background glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Globe section */}
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
      <div className="relative z-10 px-5 pb-4 pt-2">
        <h3 className="text-[14px] font-bold text-text-primary mb-1">
          Real-Time XRPL <span className="text-[#0085FF]">Globe</span>
        </h3>
        <Link href="/live" className="flex items-center gap-2 text-[13px] font-medium text-[#0085FF] hover:gap-3 transition-all">
          Explore Live
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-[#2F3336]" />

      {/* Chart section */}
      <div className="relative h-[180px] w-full overflow-hidden mt-1" ref={containerRef} />
      <div className="relative z-10 px-5 pb-5 pt-2">
        <h3 className="text-[14px] font-bold text-text-primary mb-1">
          Advanced <span className="text-[#0085FF]">Charts</span>
        </h3>
        <div className="mb-2">
          <p className="text-[13px] text-text-secondary">
            24h Change: <span className={`font-bold ${positive ? 'text-success' : 'text-danger'}`}>
              {positive ? '+' : ''}{data?.change24h?.toFixed(2) ?? '—'}%
            </span>
          </p>
        </div>
        <Link href="/live-chart" className="flex items-center gap-2 text-[13px] font-medium text-[#0085FF] hover:gap-3 transition-all">
          View Charts
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Blue glow effect */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0085FF]/10 rounded-full blur-3xl -z-0" />
    </div>
  );
}
