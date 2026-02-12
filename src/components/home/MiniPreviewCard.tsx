'use client';

import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
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

function fmtPrice(n: number): string {
  if (n >= 1) return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return n.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 6 });
}

export default function MiniPreviewCard() {
  const { data, flash } = useXRPPrice();
  const { arcs, removeArc } = useXRPLStream();
  const positive = (data?.change24h ?? 0) >= 0;
  const Icon = positive ? TrendingUp : TrendingDown;
  const flashColor = flash === 'up' ? 'text-success' : flash === 'down' ? 'text-danger' : 'text-text-primary';
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
    containerRef.current.appendChild(wrapper);
  }, []);

  return (
    <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden hover:bg-[#1D1F23] transition-colors group">
      {/* Gradient background glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* ── Price Ticker ── */}
      <div className="relative z-10 px-5 pt-4 pb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[13px] font-bold text-text-primary">XRP / USDT</span>
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
        </div>
        {data ? (
          <>
            <div className={`font-mono text-[26px] font-bold transition-colors duration-300 ${flashColor}`}>
              ${fmtPrice(data.price)}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className={`flex items-center gap-1 text-[13px] font-medium ${positive ? 'text-success' : 'text-danger'}`}>
                <Icon className="h-3.5 w-3.5" />
                {positive ? '+' : ''}{data.change24h.toFixed(2)}%
              </span>
              <span className="text-[13px] text-text-secondary">24h</span>
            </div>
            {(data.high24h > 0 || data.low24h > 0) && (
              <div className="mt-2 flex justify-between text-[12px] text-text-secondary">
                <span>H: ${fmtPrice(data.high24h)}</span>
                <span>L: ${fmtPrice(data.low24h)}</span>
              </div>
            )}
          </>
        ) : (
          <div className="font-mono text-[26px] font-bold text-text-secondary">$--.--</div>
        )}
        <Link href="/live-chart" className="mt-2 flex items-center gap-1.5 text-[11px] text-[#0085FF]/70 hover:text-[#0085FF] hover:gap-2.5 transition-all">
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
      <div className="relative h-[180px] w-full overflow-hidden mt-1" ref={containerRef} />
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
