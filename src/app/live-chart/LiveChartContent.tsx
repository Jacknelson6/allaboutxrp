'use client';

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { useXRPLStream } from '@/lib/globe/useXRPLStream';
import StatsBar from '@/components/globe/StatsBar';
import { TrendingUp, TrendingDown, Activity, DollarSign, Users, BarChart3 } from 'lucide-react';
import { formatCompact, formatNumber } from '@/lib/utils/format';

const Globe = dynamic(() => import('@/components/globe/Globe'), {
  ssr: false,
  loading: () => <GlobeLoader />,
});

function GlobeLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
    </div>
  );
}

// ── Types ──────────────────────────────────────────────────────────────────
interface PriceData {
  usd: number;
  usdChange24h: number;
  usdVolume24h: number;
  usdMarketCap: number;
}

interface Sentiment {
  fearGreed: { value: number; label: string };
  buyVolume: number;
  sellVolume: number;
  totalVolume: number;
  buyPercent: number;
}

declare global {
  interface Window {
    TradingView?: {
      widget: new (config: Record<string, unknown>) => unknown;
    };
  }
}

// ── Section nav anchors ────────────────────────────────────────────────────
const sections = [
  { id: 'globe', label: 'Globe' },
  { id: 'chart', label: 'Chart' },
  { id: 'volume', label: 'Volume' },
  { id: 'stats', label: 'Stats' },
  { id: 'analysis', label: 'Analysis' },
];

// ── Main Component ─────────────────────────────────────────────────────────
export default function LiveChartContent() {
  const { arcs, stats, removeArc } = useXRPLStream();
  const [price, setPrice] = useState<PriceData | null>(null);
  const [sentiment, setSentiment] = useState<Sentiment | null>(null);
  const [tvReady, setTvReady] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/xrp/price').then(r => r.json()).then(d => setPrice(d.data)).catch(() => {});
    fetch('/api/xrp/sentiment').then(r => r.json()).then(d => setSentiment(d)).catch(() => {});
  }, []);

  useEffect(() => {
    if (tvReady && window.TradingView && chartRef.current) {
      new window.TradingView.widget({
        container_id: 'lc-tv-chart',
        symbol: 'BINANCE:XRPUSDT',
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

  const fmt = (n: number) => {
    if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
    if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
    if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
    return `$${n.toLocaleString()}`;
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Script
        src="https://s3.tradingview.com/tv.js"
        strategy="lazyOnload"
        onReady={() => setTvReady(true)}
      />

      {/* Sticky section nav */}
      <div className="sticky top-[57px] z-30 border-b border-white/[0.06] bg-black/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex items-center gap-1 px-4 py-2 overflow-x-auto scrollbar-hide">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ─── 1. Globe Section ──────────────────────────────────────────── */}
      <section id="globe" className="relative h-[85vh] min-h-[500px] border-b border-white/[0.06] scroll-mt-24">
        <StatsBar stats={stats} />
        <div className="h-[calc(100%-48px)] relative">
          <Suspense fallback={<GlobeLoader />}>
            <Globe arcs={arcs} onArcComplete={removeArc} />
          </Suspense>
          <div className="absolute top-4 left-4 z-10">
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-[#F0F0F0]">Live </span>
              <span className="text-[#0085FF]">XRP</span>
              <span className="text-[#F0F0F0]"> Chart</span>
            </h1>
            <p className="text-[10px] text-[#888] font-mono tracking-widest uppercase mt-0.5">
              Real-Time XRPL Visualizer
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. TradingView Chart ──────────────────────────────────────── */}
      <section id="chart" className="scroll-mt-24 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            XRP <span className="text-[#0085FF]">Price Chart</span>
          </h2>
          <p className="text-sm text-white/40 mb-6">Live price data powered by TradingView</p>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-[#0A0A0B] relative">
            {!tvReady && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
              </div>
            )}
            <div id="lc-tv-chart" ref={chartRef} style={{ height: '60vh', minHeight: 400 }} />
          </div>
        </div>
      </section>

      {/* ─── 3. Buy/Sell Volume & Sentiment ────────────────────────────── */}
      <section id="volume" className="scroll-mt-24 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-2">
            <Activity className="h-6 w-6 text-[#0085FF]" />
            Market <span className="text-[#0085FF]">Pulse</span>
          </h2>
          <p className="text-sm text-white/40 mb-6">24-hour trading sentiment and volume breakdown</p>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Fear & Greed */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
              <h3 className="text-sm font-medium text-white/40 mb-4">Fear & Greed Index</h3>
              {sentiment ? (
                <FearGreedGauge value={sentiment.fearGreed.value} label={sentiment.fearGreed.label} />
              ) : <Loader />}
            </div>

            {/* Buy vs Sell */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
              <h3 className="text-sm font-medium text-white/40 mb-4">Buy vs Sell Volume (24h)</h3>
              {sentiment ? (
                <div className="flex flex-col justify-center h-32">
                  <div className="flex rounded-full overflow-hidden h-8">
                    <div
                      className="flex items-center justify-center text-xs font-semibold text-white transition-all duration-500"
                      style={{ width: `${sentiment.buyPercent}%`, background: 'linear-gradient(90deg, #16c784, #00ba7c)' }}
                    >
                      {sentiment.buyPercent.toFixed(1)}%
                    </div>
                    <div
                      className="flex items-center justify-center text-xs font-semibold text-white transition-all duration-500"
                      style={{ width: `${100 - sentiment.buyPercent}%`, background: 'linear-gradient(90deg, #ea3943, #c0392b)' }}
                    >
                      {(100 - sentiment.buyPercent).toFixed(1)}%
                    </div>
                  </div>
                  <div className="flex justify-between mt-3 text-xs">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5 text-green-400" />
                      <span className="text-white/40">Buy</span>
                      <span className="font-mono text-white">{formatCompact(sentiment.buyVolume)} XRP</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                      <span className="text-white/40">Sell</span>
                      <span className="font-mono text-white">{formatCompact(sentiment.sellVolume)} XRP</span>
                    </div>
                  </div>
                  <div className="mt-2 text-center text-[11px] text-white/30">
                    Total: {formatCompact(sentiment.totalVolume)} XRP
                  </div>
                </div>
              ) : <Loader />}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Market Stats ───────────────────────────────────────────── */}
      <section id="stats" className="scroll-mt-24 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-[#0085FF]" />
            Market <span className="text-[#0085FF]">Stats</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard label="XRP Price" value={price ? `$${price.usd.toFixed(4)}` : '—'} />
            <StatCard
              label="24h Change"
              value={price ? `${price.usdChange24h >= 0 ? '+' : ''}${price.usdChange24h.toFixed(2)}%` : '—'}
              color={price ? (price.usdChange24h >= 0 ? '#16c784' : '#ea3943') : undefined}
            />
            <StatCard label="24h Volume" value={price ? fmt(price.usdVolume24h) : '—'} />
            <StatCard label="Market Cap" value={price ? fmt(price.usdMarketCap) : '—'} />
          </div>
        </div>
      </section>

      {/* ─── 5. Our Analysis (Premium Teaser) ──────────────────────────── */}
      <section id="analysis" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 overflow-hidden">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Our <span className="text-[#0085FF]">Analysis</span>
            </h2>
            <div className="relative">
              <div className="text-white/70 text-base leading-relaxed space-y-4 max-w-3xl">
                <p>
                  XRP continues to consolidate above key support levels following the recent rally driven by renewed
                  institutional interest and favorable regulatory developments. The SEC case resolution has removed
                  a major overhang, and on-chain metrics show a steady increase in active wallets and transaction
                  throughput on the XRPL. With Ripple&apos;s expanding partnerships across Asia-Pacific corridors
                  and the launch of RLUSD gaining traction, the fundamental picture remains strong.
                </p>
                <p>
                  From a technical perspective, XRP is forming a bullish ascending triangle on the weekly chart with
                  a clear resistance zone near $3.20. Volume profiles suggest accumulation by large wallets, while
                  retail participation has grown 40% month-over-month. The 50-day moving average has crossed above
                  the 200-day for the first time since Q3 2024 — a classic golden cross that historically precedes
                  significant moves to the upside.
                </p>
                <p>
                  Our proprietary sentiment model — which aggregates social volume, derivatives funding rates,
                  whale wallet flows, and cross-exchange order book depth — is currently signaling a score of 78/100
                  (Strong Bullish). Key catalysts to watch this month include the potential Ripple IPO timeline
                  announcements, further RLUSD integrations, and the upcoming XRPL amendment vote that could
                  introduce native AMM improvements...
                </p>
              </div>
              {/* Fade overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
            </div>
            <div className="relative mt-4 flex flex-col items-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0085FF] px-8 py-3.5 text-sm font-bold text-black hover:bg-[#0085FF]/90 transition-colors shadow-lg shadow-[#0085FF]/20"
              >
                Unlock Full Analysis
              </a>
              <p className="mt-3 text-xs text-white/30">Get weekly deep analysis delivered to your inbox</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────

function Loader() {
  return (
    <div className="flex items-center justify-center h-32 text-white/40 text-sm">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF] mr-2" />
      Loading…
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-4 hover:border-white/[0.1] transition-all">
      <p className="text-[11px] text-white/30 font-medium uppercase tracking-widest mb-1">{label}</p>
      <p className="text-lg font-bold font-mono tracking-tight" style={{ color: color || '#F0F0F0' }}>{value}</p>
    </div>
  );
}

function FearGreedGauge({ value, label }: { value: number; label: string }) {
  const angle = (value / 100) * 180;
  const rad = (angle * Math.PI) / 180;
  const needleX = 100 - 70 * Math.cos(rad);
  const needleY = 100 - 70 * Math.sin(rad);

  const getColor = (v: number) => {
    if (v <= 25) return '#ea3943';
    if (v <= 45) return '#ea8c00';
    if (v <= 55) return '#f5d100';
    if (v <= 75) return '#93d900';
    return '#16c784';
  };

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 110 200 100" className="w-48 h-24">
        <defs>
          <linearGradient id="lcGaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ea3943" />
            <stop offset="25%" stopColor="#ea8c00" />
            <stop offset="50%" stopColor="#f5d100" />
            <stop offset="75%" stopColor="#93d900" />
            <stop offset="100%" stopColor="#16c784" />
          </linearGradient>
        </defs>
        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#lcGaugeGrad)" strokeWidth="12" strokeLinecap="round" />
        <line x1="100" y1="100" x2={needleX} y2={needleY} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="100" cy="100" r="4" fill="white" />
      </svg>
      <span className="text-3xl font-bold mt-1" style={{ color: getColor(value) }}>{value}</span>
      <span className="text-sm text-white/50 mt-0.5">{label}</span>
    </div>
  );
}
