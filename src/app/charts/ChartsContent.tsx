'use client';

import { useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    fetch('/api/xrp/price')
      .then(r => r.json())
      .then(d => setPrice(d.data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.widget({
          container_id: 'tradingview-chart',
          symbol: 'BINANCE:XRPUSDT',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#0D1117',
          enable_publishing: false,
          allow_symbol_change: true,
          hide_side_toolbar: false,
          withdateranges: true,
          save_image: false,
          autosize: true,
          backgroundColor: '#0D1117',
          gridColor: '#161B22',
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      try { document.head.removeChild(script); } catch {}
    };
  }, []);

  const formatNum = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
    if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
    return `$${n.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#F0F6FC] font-display">
            XRP <span className="text-[#00A3FF]">Charts</span>
          </h1>
          <p className="text-sm text-[#8b949e] mt-1 font-mono">Live price data powered by TradingView</p>
        </div>

        {/* TradingView Chart */}
        <div className="rounded-xl border border-[#30363d] overflow-hidden bg-[#161B22]">
          <div
            id="tradingview-chart"
            ref={containerRef}
            style={{ height: '70vh', minHeight: 500 }}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <StatCard
            label="Price"
            value={price ? `$${price.usd.toFixed(4)}` : '—'}
          />
          <StatCard
            label="24h Change"
            value={price ? `${price.usdChange24h >= 0 ? '+' : ''}${price.usdChange24h.toFixed(2)}%` : '—'}
            color={price ? (price.usdChange24h >= 0 ? '#3FB950' : '#F85149') : undefined}
          />
          <StatCard
            label="24h Volume"
            value={price ? formatNum(price.usdVolume24h) : '—'}
          />
          <StatCard
            label="Market Cap"
            value={price ? formatNum(price.usdMarketCap) : '—'}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-xl border border-[#30363d] bg-[#161B22] p-4">
      <p className="text-[11px] text-[#8b949e] font-mono uppercase tracking-wider mb-1">{label}</p>
      <p className="text-lg font-bold font-mono" style={{ color: color || '#F0F6FC' }}>{value}</p>
    </div>
  );
}
