'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface PriceData {
  usd: number;
  usdChange24h: number;
  usdVolume24h: number;
  usdMarketCap: number;
}

declare global {
  interface Window {
    TradingView?: {
      widget: new (config: Record<string, unknown>) => unknown;
    };
  }
}

export default function ChartsContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [price, setPrice] = useState<PriceData | null>(null);
  const [tvReady, setTvReady] = useState(false);

  useEffect(() => {
    fetch('/api/xrp/price')
      .then(r => r.json())
      .then(d => setPrice(d.data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (tvReady && window.TradingView && containerRef.current) {
      new window.TradingView.widget({
        container_id: 'tradingview-chart',
        symbol: 'BITSTAMP:XRPUSD',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#000000',
        enable_publishing: false,
        allow_symbol_change: true,
        hide_side_toolbar: false,
        withdateranges: true,
        save_image: false,
        autosize: true,
        backgroundColor: '#000000',
        gridColor: '#111113',
      });
    }
  }, [tvReady]);

  const formatNum = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
    if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
    return `$${n.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen">
      <Script
        src="https://s3.tradingview.com/tv.js"
        strategy="lazyOnload"
        onReady={() => setTvReady(true)}
      />
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="mb-8">
          <h1 className="text-[32px] font-bold tracking-[-0.04em] text-text-primary">
            XRP <span className="text-xrp-accent">Charts</span>
          </h1>
          <p className="text-[14px] text-text-secondary mt-1.5">Live price data powered by TradingView</p>
        </div>

        {/* TradingView Chart */}
        <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-[#0A0A0B] relative">
          {!tvReady && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-xrp-accent" />
                <span className="text-sm text-text-secondary">Loading chart…</span>
              </div>
            </div>
          )}
          <div
            id="tradingview-chart"
            ref={containerRef}
            style={{ height: '60vh', minHeight: 300 }}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <ChartStatCard
            label="Price"
            value={price ? `$${price.usd.toFixed(4)}` : '—'}
          />
          <ChartStatCard
            label="24h Change"
            value={price ? `${price.usdChange24h >= 0 ? '+' : ''}${price.usdChange24h.toFixed(2)}%` : '—'}
            color={price ? (price.usdChange24h >= 0 ? '#00BA7C' : '#F4212E') : undefined}
          />
          <ChartStatCard
            label="24h Volume"
            value={price ? formatNum(price.usdVolume24h) : '—'}
          />
          <ChartStatCard
            label="Market Cap"
            value={price ? formatNum(price.usdMarketCap) : '—'}
          />
        </div>
      </div>
    </div>
  );
}

function ChartStatCard({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-4 transition-all duration-250 hover:border-white/[0.1]">
      <p className="text-[11px] text-white/50 font-medium uppercase tracking-widest mb-1">{label}</p>
      <p className="text-lg font-bold font-mono tracking-tight" style={{ color: color || '#F0F0F0' }}>{value}</p>
    </div>
  );
}
