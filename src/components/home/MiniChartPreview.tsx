'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useXRPPrice } from '@/hooks/useXRPPrice';

export default function MiniChartPreview() {
  const { data } = useXRPPrice();
  const positive = (data?.change24h ?? 0) >= 0;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Clear previous widget
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      symbol: 'BITSTAMP:XRPUSD',
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
    <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden group">
      {/* TradingView Mini Chart */}
      <div className="relative h-[200px] w-full overflow-hidden" ref={containerRef} />

      {/* Content below chart */}
      <div className="relative z-10 px-5 pb-5 pt-3">
        <h3 className="text-[15px] font-bold text-text-primary mb-1">
          Advanced <span className="text-[#0085FF]">Charts</span>
        </h3>
        <div className="mb-3">
          <p className="text-[13px] text-text-secondary">
            24h Change: <span className={`font-bold ${positive ? 'text-success' : 'text-danger'}`}>
              {positive ? '+' : ''}{data?.change24h?.toFixed(2) ?? '—'}%
            </span>
          </p>
        </div>
        <Link href="/live-chart" className="flex items-center gap-2 text-[13px] font-medium text-[#0085FF] hover:gap-3 transition-all">
          View Charts
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Blue glow effect */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0085FF]/10 rounded-full blur-3xl -z-0" />
    </div>
  );
}
