'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState, useCallback } from 'react';
import Script from 'next/script';
import { useXRPLStream } from '@/lib/globe/useXRPLStream';
import StatsBar from '@/components/globe/StatsBar';
import FearGreedIndex from '@/components/charts/FearGreedIndex';
import { useXRPPrice } from '@/hooks/useXRPPrice';
import {
  TrendingUp,
  TrendingDown,
  ExternalLink,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  Shield,
  ShieldCheck,
  ShieldAlert,
  CandlestickChart,
  LineChart,
  Globe as GlobeIcon,
  Info,
} from 'lucide-react';

import LiveTrades from '@/components/globe/LiveTrades';
import RichList from '@/components/richlist/RichList';
import RecentTransactions from '@/components/live-chart/RecentTransactions';
import EscrowSchedule from '@/components/live-chart/EscrowSchedule';
import etfData from '@/data/xrp-etf-data.json';

type MarketTab = 'markets' | 'transactions' | 'etf';

const marketTabs: { id: MarketTab; label: string }[] = [
  { id: 'transactions', label: 'Transactions' },
  { id: 'markets', label: 'Markets' },
  { id: 'etf', label: 'ETF Flows' },
];

const Globe = dynamic(() => import('@/components/globe/Globe'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
    </div>
  ),
});

// ── Types ──────────────────────────────────────────────────────────────────
interface PriceData {
  usd: number;
  usd_24h_change: number;
  usd_market_cap: number;
  usd_24h_vol: number;
}

interface CoinDetail {
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    market_cap: { usd: number };
    total_volume: { usd: number };
    circulating_supply: number;
    total_supply: number;
    max_supply: number | null;
    high_24h: { usd: number };
    low_24h: { usd: number };
    ath: { usd: number };
    ath_date: { usd: string };
    ath_change_percentage: { usd: number };
    atl: { usd: number };
    atl_date: { usd: string };
    atl_change_percentage: { usd: number };
    market_cap_rank: number;
  };
}

interface Ticker {
  base: string;
  target: string;
  market: { name: string; identifier: string };
  last: number;
  volume: number;
  converted_volume: { usd: number };
  trust_score: string;
  trade_url: string;
}

type ChartStyle = '1' | '3'; // 1=candles, 3=line

declare global {
  interface Window {
    TradingView?: {
      widget: new (config: Record<string, unknown>) => unknown;
    };
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────
function fmt(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${n.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
}

function fmtNum(n: number): string {
  if (n >= 1e12) return `${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function fmtPrice(n: number): string {
  if (n >= 1) return `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 6 })}`;
}

function PctBadge({ value }: { value: number }) {
  const positive = value >= 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-sm font-semibold ${positive ? 'text-green-400' : 'text-red-400'}`}>
      {positive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      {Math.abs(value).toFixed(2)}%
    </span>
  );
}

// ── Timeframes ─────────────────────────────────────────────────────────────
const timeframes = [
  { label: '1D', interval: '5', range: '1D' },
  { label: '5D', interval: '30', range: '5D' },
  { label: '1M', interval: 'D', range: '1M' },
  { label: '3M', interval: 'D', range: '3M' },
  { label: '1YR', interval: 'D', range: '12M' },
  { label: '5YR', interval: 'W', range: '60M' },
];

// ── Main Component ─────────────────────────────────────────────────────────
export default function LiveChartContent() {
  const [price, setPrice] = useState<PriceData | null>(null);
  const [coin, setCoin] = useState<CoinDetail | null>(null);
  const [tickers, setTickers] = useState<Ticker[]>([]);
  const [tvReady, setTvReady] = useState(false);
  const [candlesTimeframe, setCandlesTimeframe] = useState(0);
  const [lineTimeframe, setLineTimeframe] = useState(0);
  const [showGlobe, setShowGlobe] = useState(true);
  const [showCandles, setShowCandles] = useState(false);
  const [showLine, setShowLine] = useState(true);
  const [converterXrp, setConverterXrp] = useState('1');
  const { arcs, stats, removeArc } = useXRPLStream();
  const [converterDir, setConverterDir] = useState<'xrp-usd' | 'usd-xrp'>('xrp-usd');
  const [activeMarketTab, setActiveMarketTab] = useState<MarketTab>('transactions');
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [marketPage, setMarketPage] = useState(1);
  const ROWS_PER_PAGE = 10;
  const { data: tvPrice } = useXRPPrice();
  const candlesWidgetRef = useRef<unknown>(null);
  const lineWidgetRef = useRef<unknown>(null);

  // Fetch data (staggered to avoid CoinGecko rate limits)
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/market-data');
      if (!res.ok) return;
      const data = await res.json();
      if (data.price) setPrice(data.price);
      if (data.coin) setCoin(data.coin);
      if (data.tickers?.length) setTickers(data.tickers);
    } catch (e) {
      console.error('Failed to fetch data:', e);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 120000);
    return () => clearInterval(interval);
  }, [fetchData]);

  // Disabled features shared by ALL TradingView widgets
  const tvDisabledBase = [
    'header_symbol_search', 'header_compare', 'header_undo_redo',
    'header_screenshot', 'header_saveload', 'header_settings',
    'header_fullscreen_button', 'header_chart_type',
    'header_resolutions',
    'left_toolbar', 'context_menus', 'control_bar', 'timeframes_toolbar',
    'volume_force_overlay', 'go_to_date', 'symbol_info',
    'edit_buttons_in_legend', 'property_pages', 'show_chart_property_page',
    'source_selection_markers', 'main_series_scale_menu',
    'display_market_status', 'border_around_the_chart',
  ];

  // Globe-only: also disable indicators + legend
  const tvDisabledGlobe = [...tvDisabledBase, 'header_indicators', 'legend_widget'];

  // Standalone panels: keep indicators enabled, only disable legend
  const tvDisabledStandalone = [...tvDisabledBase, 'legend_widget'];

  const tvOverrides = {
    'paneProperties.background': '#000000',
    'paneProperties.backgroundType': 'solid',
    'paneProperties.vertGridProperties.color': '#111113',
    'paneProperties.horzGridProperties.color': '#111113',
    'scalesProperties.lineColor': '#222',
    'scalesProperties.textColor': '#666',
  };

  // Helper to create a TradingView widget
  // compact=true → globe-style (no toolbar, no indicators); false → standalone (toolbar + indicators)
  const createTvWidget = useCallback((containerId: string, style: ChartStyle, tfIndex: number, compact = false) => {
    if (!tvReady || !window.TradingView) return null;
    const container = document.getElementById(containerId);
    if (container) container.innerHTML = '';
    const tf = timeframes[tfIndex];
    try {
      return new window.TradingView.widget({
        container_id: containerId,
        symbol: 'BITSTAMP:XRPUSD',
        theme: 'dark',
        style,
        locale: 'en',
        interval: tf.interval,
        range: tf.range,
        toolbar_bg: '#000000',
        enable_publishing: false,
        allow_symbol_change: false,
        hide_side_toolbar: true,
        hide_top_toolbar: compact,
        hide_legend: true,
        withdateranges: false,
        save_image: false,
        autosize: true,
        backgroundColor: '#000000',
        gridColor: '#111113',
        hide_volume: true,
        studies: [],
        disabled_features: compact ? tvDisabledGlobe : tvDisabledStandalone,
        enabled_features: ['hide_left_toolbar_by_default'],
        overrides: tvOverrides,
      });
    } catch (e) {
      console.error('TradingView widget error:', e);
      return null;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tvReady]);

  // Candles chart widget
  useEffect(() => {
    if (!showCandles) return;
    if (candlesWidgetRef.current && typeof (candlesWidgetRef.current as { remove?: () => void }).remove === 'function') {
      (candlesWidgetRef.current as { remove: () => void }).remove();
    }
    candlesWidgetRef.current = createTvWidget('lc-tv-candles', '1', candlesTimeframe);
  }, [showCandles, candlesTimeframe, createTvWidget]);

  // Line chart widget
  useEffect(() => {
    if (!showLine) return;
    if (lineWidgetRef.current && typeof (lineWidgetRef.current as { remove?: () => void }).remove === 'function') {
      (lineWidgetRef.current as { remove: () => void }).remove();
    }
    lineWidgetRef.current = createTvWidget('lc-tv-line', '3', lineTimeframe);
  }, [showLine, lineTimeframe, createTvWidget]);

  const md = coin?.market_data;
  const currentPrice = tvPrice?.price ?? price?.usd ?? md?.current_price?.usd ?? 0;
  const change24h = tvPrice?.change24h ?? price?.usd_24h_change ?? md?.price_change_percentage_24h ?? 0;
  const high24hTV = tvPrice?.high24h;
  const low24hTV = tvPrice?.low24h;

  // Converter calculation
  const converterResult = converterDir === 'xrp-usd'
    ? (parseFloat(converterXrp) || 0) * currentPrice
    : currentPrice > 0 ? (parseFloat(converterXrp) || 0) / currentPrice : 0;

  // 24h price bar position
  const low24h = (low24hTV && low24hTV > 0) ? low24hTV : (md?.low_24h?.usd ?? 0);
  const high24h = (high24hTV && high24hTV > 0) ? high24hTV : (md?.high_24h?.usd ?? 0);
  const priceBarPos = high24h > low24h ? ((currentPrice - low24h) / (high24h - low24h)) * 100 : 50;

  // Total ticker volume for % calc
  const totalTickerVol = tickers.reduce((s, t) => s + (t.converted_volume?.usd ?? 0), 0);

  return (
    <div className="bg-black text-white min-h-screen">
      <Script
        src="https://s3.tradingview.com/tv.js"
        strategy="lazyOnload"
        onReady={() => setTvReady(true)}
      />

      <div className="mx-auto max-w-[1400px] px-4 py-6">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_260px] gap-6">

          {/* ─── LEFT SIDEBAR ──────────────────────────────────────────── */}
          <div className="space-y-4 order-2 lg:order-1">
            {/* Live Price - TradingView Ticker */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] overflow-hidden">
              <TradingViewTicker />
            </div>

            {/* 24h Price Range */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">24h Range</p>
              <div className="flex justify-between text-xs text-white/50 mb-1.5">
                <span>{low24h ? fmtPrice(low24h) : '—'}</span>
                <span>{high24h ? fmtPrice(high24h) : '—'}</span>
              </div>
              <div className="relative h-3 rounded-full overflow-hidden bg-white/[0.06]">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(to right, #ea3943, #f5d100, #16c784)',
                    opacity: 0.2,
                  }}
                />
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${priceBarPos}%`,
                    background: 'linear-gradient(90deg, #ea3943, #f5d100, #16c784)',
                  }}
                />
              </div>
            </div>

            {/* Market stats */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 space-y-3">
              <StatRow label="Market Cap" value={md?.market_cap?.usd != null ? fmt(md.market_cap.usd) : '—'} />
              <StatRow label="24h Volume" value={md?.total_volume?.usd != null ? fmt(md.total_volume.usd) : '—'} />
              <StatRow label="Circulating Supply" value={md?.circulating_supply != null ? `${fmtNum(md.circulating_supply)} XRP` : '—'} />
              {md?.total_supply != null && (
                <StatRow label="Total Supply" value={`${fmtNum(md.total_supply)} XRP`} />
              )}
              {md?.max_supply != null && (
                <StatRow label="Max Supply" value={`${fmtNum(md.max_supply)} XRP`} />
              )}
            </div>

            {/* ATH / ATL */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 space-y-3">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/40">All-Time High</span>
                  <span className="text-xs text-red-400">{md?.ath_change_percentage?.usd != null ? `${md.ath_change_percentage.usd.toFixed(1)}%` : ''}</span>
                </div>
                <div className="flex justify-between items-baseline mt-0.5">
                  <span className="text-sm font-semibold font-mono">$3.84</span>
                  <span className="text-[10px] text-white/30">Jan 04, 2018</span>
                </div>
              </div>
              <div className="border-t border-white/[0.04]" />
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/40">All-Time Low</span>
                  <span className="text-xs text-green-400">{md?.atl_change_percentage?.usd != null ? `+${md.atl_change_percentage.usd.toFixed(0)}%` : ''}</span>
                </div>
                <div className="flex justify-between items-baseline mt-0.5">
                  <span className="text-sm font-semibold font-mono">$0.002802</span>
                  <span className="text-[10px] text-white/30">Jul 06, 2014</span>
                </div>
              </div>
            </div>

            {/* Converter */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
                {converterDir === 'xrp-usd' ? 'XRP → USD' : 'USD → XRP'} Converter
              </p>
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="number"
                  value={converterXrp}
                  onChange={e => setConverterXrp(e.target.value)}
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-sm font-mono text-white outline-none focus:border-[#0085FF]/50"
                  placeholder="Amount"
                />
                <button
                  onClick={() => setConverterDir(d => d === 'xrp-usd' ? 'usd-xrp' : 'xrp-usd')}
                  className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
                >
                  <ArrowUpDown className="h-4 w-4 text-[#0085FF]" />
                </button>
              </div>
              <div className="text-lg font-bold font-mono text-[#0085FF]">
                {converterDir === 'xrp-usd'
                  ? `$${converterResult.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`
                  : `${converterResult.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })} XRP`
                }
              </div>
            </div>

            {/* Get Started CTA */}
            <Link
              href="/how-to-start"
              className="group block rounded-xl border border-[#0085FF]/30 bg-gradient-to-br from-[#0085FF]/10 to-[#0085FF]/[0.03] p-5 hover:border-[#0085FF]/50 hover:from-[#0085FF]/15 hover:to-[#0085FF]/[0.06] transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white mb-1">How to Get Started with XRP</p>
                  <p className="text-xs text-white/40">Learn the basics and start your journey</p>
                </div>
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0085FF]/20 text-[#0085FF] group-hover:bg-[#0085FF]/30 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </div>
            </Link>
          </div>

          {/* ─── CENTER: CHART + MARKETS ───────────────────────────────── */}
          <div className="space-y-4 order-1 lg:order-2">
            {/* View switcher + Timeframe selectors */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              {/* Toggle buttons - all checkboxes */}
              <div className="flex items-center gap-2">
                {([
                  { key: 'globe', label: 'Globe', icon: <GlobeIcon className="h-3.5 w-3.5" />, active: showGlobe, toggle: () => setShowGlobe(g => !g) },
                  { key: 'candles', label: 'Candles', icon: <CandlestickChart className="h-3.5 w-3.5" />, active: showCandles, toggle: () => setShowCandles(c => !c) },
                  { key: 'line', label: 'Line', icon: <LineChart className="h-3.5 w-3.5" />, active: showLine, toggle: () => setShowLine(l => !l) },
                ] as const).map(btn => (
                  <button
                    key={btn.key}
                    onClick={btn.toggle}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                      btn.active
                        ? 'border-[#0085FF]/50 bg-[#0085FF]/10 text-white'
                        : 'border-white/[0.06] bg-white/[0.03] text-white/40 hover:text-white/70'
                    }`}
                  >
                    <span className={`flex items-center justify-center h-3.5 w-3.5 rounded border transition-all ${
                      btn.active ? 'bg-[#0085FF] border-[#0085FF]' : 'border-white/30 bg-transparent'
                    }`}>
                      {btn.active && <span className="text-[9px] text-white font-bold">✓</span>}
                    </span>
                    {btn.icon}
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Timeframe selectors moved to individual panels */}
            </div>

            {/* Multi-panel chart area */}
            {(() => {
              const visibleCount = [showGlobe, showCandles, showLine].filter(Boolean).length;
              return (
                <div className="flex flex-col md:flex-row gap-3" style={{ height: 'min(700px, 60vh)' }}>
                  {/* Globe - always mounted, hidden via CSS */}
                  <div
                    className={`rounded-xl border border-white/[0.06] overflow-hidden bg-black relative flex flex-col ${showGlobe ? '' : 'hidden'}`}
                    style={{ flex: visibleCount > 0 ? `1 1 ${100 / visibleCount}%` : undefined }}
                  >
                    <StatsBar stats={stats} />
                    <div className="flex-1 relative cursor-grab active:cursor-grabbing">
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
                  </div>

                  {/* Candles chart */}
                  <div
                    className={`rounded-xl border border-white/[0.06] overflow-hidden bg-[#0A0A0B] relative flex flex-col ${showCandles ? '' : 'hidden'}`}
                    style={{ flex: visibleCount > 0 ? `1 1 ${100 / visibleCount}%` : undefined }}
                  >
                    <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/[0.06] bg-black/50">
                      <span className="text-[10px] text-white/30 mr-1">TF</span>
                      {timeframes.map((tf, i) => (
                        <button key={tf.label} onClick={() => setCandlesTimeframe(i)} className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${candlesTimeframe === i ? 'bg-[#0085FF] text-black' : 'text-white/40 hover:text-white'}`}>{tf.label}</button>
                      ))}
                    </div>
                    <div id="lc-tv-candles" className="flex-1" />
                  </div>

                  {/* Line chart */}
                  <div
                    className={`rounded-xl border border-white/[0.06] overflow-hidden bg-[#0A0A0B] relative flex flex-col ${showLine ? '' : 'hidden'}`}
                    style={{ flex: visibleCount > 0 ? `1 1 ${100 / visibleCount}%` : undefined }}
                  >
                    <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/[0.06] bg-black/50">
                      <span className="text-[10px] text-white/30 mr-1">TF</span>
                      {timeframes.map((tf, i) => (
                        <button key={tf.label} onClick={() => setLineTimeframe(i)} className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${lineTimeframe === i ? 'bg-[#0085FF] text-black' : 'text-white/40 hover:text-white'}`}>{tf.label}</button>
                      ))}
                    </div>
                    <div id="lc-tv-line" className="flex-1" />
                  </div>

                  {/* Empty state */}
                  {visibleCount === 0 && (
                    <div className="flex-1 rounded-xl border border-white/[0.06] bg-[#0A0A0B] flex items-center justify-center">
                      <p className="text-white/30 text-sm">Enable a panel above to view charts</p>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Market Data */}
                {/* Tab Selector */}
                <div className="flex items-center gap-1 rounded-lg bg-white/[0.03] border border-white/[0.06] p-1 w-fit">
                  {marketTabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveMarketTab(tab.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        activeMarketTab === tab.id
                          ? 'bg-[#0085FF] text-black shadow-sm'
                          : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeMarketTab === 'markets' && (
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
                <h2 className="text-lg font-bold mb-4">
                  XRP <span className="text-[#0085FF]">Markets</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-[11px] text-white/30 uppercase tracking-widest border-b border-white/[0.06]">
                        <th className="pb-3 pr-4">#</th>
                        <th className="pb-3 pr-4">Exchange</th>
                        <th className="pb-3 pr-4">Pair</th>
                        <th className="pb-3 pr-4 text-right">Price</th>
                        <th className="pb-3 pr-4 text-right">Volume (24h)</th>
                        <th className="pb-3 pr-4 text-right">Vol %</th>
                        <th className="pb-3 text-center">Trust</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tickers.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-white/30">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF] mx-auto mb-2" />
                            Loading markets…
                          </td>
                        </tr>
                      ) : (
                        tickers.slice((marketPage - 1) * ROWS_PER_PAGE, marketPage * ROWS_PER_PAGE).map((t, i) => {
                          const idx = (marketPage - 1) * ROWS_PER_PAGE + i;
                          return (
                          <tr key={`${t.market.identifier}-${t.target}-${idx}`} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pr-4 text-white/30 text-xs">{idx + 1}</td>
                            <td className="py-3 pr-4 font-medium">{t.market.name}</td>
                            <td className="py-3 pr-4">
                              <a
                                href={t.trade_url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0085FF] hover:underline font-mono text-xs"
                              >
                                {t.base}/{t.target}
                              </a>
                            </td>
                            <td className="py-3 pr-4 text-right font-mono">{fmtPrice(t.last)}</td>
                            <td className="py-3 pr-4 text-right font-mono">{fmt(t.converted_volume?.usd ?? 0)}</td>
                            <td className="py-3 pr-4 text-right text-white/50">
                              {totalTickerVol > 0 ? `${((t.converted_volume?.usd ?? 0) / totalTickerVol * 100).toFixed(1)}%` : '—'}
                            </td>
                            <td className="py-3 text-center">
                              <TrustBadge score={t.trust_score} />
                            </td>
                          </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                {tickers.length > ROWS_PER_PAGE && (
                  <Pagination
                    currentPage={marketPage}
                    totalPages={Math.ceil(tickers.length / ROWS_PER_PAGE)}
                    totalItems={tickers.length}
                    perPage={ROWS_PER_PAGE}
                    onPageChange={setMarketPage}
                  />
                )}
              </div>
            )}

{/* Rich List removed - available as standalone tool */}
                {activeMarketTab === 'transactions' && <RecentTransactions />}
                {activeMarketTab === 'etf' && <ETFFlowsTab />}
          </div>

          {/* ─── RIGHT SIDEBAR ─────────────────────────────────────────── */}
          <div className="space-y-4 order-3">
            {/* Fear & Greed Index */}
            <FearGreedIndex />

            {/* Community Sentiment */}
            {coin && (coin as unknown as Record<string, number>).sentiment_votes_up_percentage != null && (
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Community Sentiment</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-green-400">
                    🟢 {((coin as unknown as Record<string, number>).sentiment_votes_up_percentage ?? 0).toFixed(0)}% Bullish
                  </span>
                  <span className="text-xs font-medium text-red-400">
                    🔴 {((coin as unknown as Record<string, number>).sentiment_votes_down_percentage ?? 0).toFixed(0)}% Bearish
                  </span>
                </div>
                <div className="relative h-3 rounded-full overflow-hidden bg-white/[0.06]">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-green-500 transition-all duration-1000"
                    style={{ width: `${(coin as unknown as Record<string, number>).sentiment_votes_up_percentage ?? 50}%` }}
                  />
                  <div
                    className="absolute top-0 right-0 h-full rounded-full bg-red-500 transition-all duration-1000"
                    style={{ width: `${(coin as unknown as Record<string, number>).sentiment_votes_down_percentage ?? 50}%` }}
                  />
                </div>
                <p className="text-[10px] text-white/20 text-center mt-2">Source: CoinGecko community votes</p>
              </div>
            )}

            {/* Quick Stats Card */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Price Performance</p>
              <div className="space-y-2">
                {[
                  { label: '24h', value: change24h || price?.usd_24h_change },
                  { label: '7d', value: md?.price_change_percentage_7d ?? undefined },
                  { label: '30d', value: md?.price_change_percentage_30d ?? undefined },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-xs text-white/40">{item.label}</span>
                    {item.value != null ? <PctBadge value={item.value} /> : <span className="text-xs text-white/20">—</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Escrow Schedule */}
            <EscrowSchedule />

            {/* Info Box */}
            <div className="rounded-xl border border-[#0085FF]/20 bg-[#0085FF]/[0.04] p-5">
              <p className="text-sm font-semibold text-[#0085FF] mb-2">About XRP</p>
              <p className="text-xs text-white/50 leading-relaxed">
                XRP is the native digital asset on the XRP Ledger (XRPL) — an open-source, permissionless,
                and decentralized blockchain. Created in 2012, it enables fast, low-cost international payments
                and is used by financial institutions worldwide through RippleNet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function TechnicalAnalysisWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://widgets.tradingview-widget.com/w/en/tv-technical-analysis.js';

    const widget = document.createElement('tv-technical-analysis');
    widget.setAttribute('symbol', 'BITSTAMP:XRPUSD');
    widget.setAttribute('interval', '1D');
    widget.setAttribute('theme', 'dark');
    widget.setAttribute('transparent', '');
    widget.setAttribute('auto-size', '');
    widget.setAttribute('show-interval-tabs', '');
    widget.style.width = '100%';
    widget.style.display = 'block';

    ref.current.appendChild(script);
    ref.current.appendChild(widget);
  }, []);

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] overflow-hidden">
      <div ref={ref} style={{ minHeight: '300px' }} />
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-white/40">{label}</span>
      <span className="text-sm font-semibold font-mono text-white/80">{value}</span>
    </div>
  );
}

function Pagination({ currentPage, totalPages, totalItems, perPage, onPageChange }: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
  onPageChange: (page: number) => void;
}) {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalItems);

  // Build page numbers: 1 ... current-1 current current+1 ... last
  const pages: (number | '...')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <div className="flex items-center justify-between px-2 pt-4 pb-2 border-t border-white/[0.06]">
      <span className="text-xs text-white/30">
        Showing {start} - {end} of {totalItems}
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 text-xs rounded-md text-white/40 hover:text-white hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ‹
        </button>
        {pages.map((p, i) =>
          p === '...' ? (
            <span key={`dots-${i}`} className="px-1 text-xs text-white/30">…</span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                p === currentPage
                  ? 'bg-[#0085FF] text-black'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {p}
            </button>
          )
        )}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 text-xs rounded-md text-white/40 hover:text-white hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
}

function TradingViewTicker() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      symbol: 'BITSTAMP:XRPUSD',
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
    ref.current.appendChild(wrapper);
  }, []);
  return (
    <div ref={ref} className="px-3 py-3" style={{ minHeight: 80 }}>
      <div className="flex items-center justify-center h-[60px]">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
      </div>
    </div>
  );
}

// ── ETF Flows (xrp-insights style) ─────────────────────────────────────────
const ETF_ISSUER_ORDER = ['Canary', '21Shares', 'Bitwise', 'Grayscale', 'Franklin', 'REX-Osprey', 'BITW Index'] as const;
const ETF_COLORS: Record<string, string> = (etfData as { issuerColors: Record<string, string> }).issuerColors;

function fmtXRP(n: number, showSign = false): string {
  const abs = Math.abs(n);
  const sign = showSign ? (n >= 0 ? '+' : '-') : (n < 0 ? '-' : '');
  if (abs >= 1e9) return `${sign}${(abs / 1e9).toFixed(2)}B`;
  if (abs >= 1e6) return `${sign}${(abs / 1e6).toFixed(2)}M`;
  if (abs >= 1e3) return `${sign}${(abs / 1e3).toFixed(0)}K`;
  return `${sign}${abs.toFixed(0)}`;
}

interface WeekData {
  weekNumber: number;
  year: number;
  label: string;
  startDate: string;
  endDate: string;
  previousClose: { date: string; dateLabel: string; total: number; byIssuer: Record<string, number> };
  newTotal: { total: number; byIssuer: Record<string, number | null> };
  totalInflows: number;
  totalOutflows: number;
  netTotal: number;
  dailyFlows: { date: string; dayLabel: string; net: number; tbd: boolean; byIssuer: Record<string, number> }[];
}

function ETFFlowsTab() {
  const weeks: WeekData[] = (etfData as { weeks: WeekData[] }).weeks;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const week = weeks[selectedIdx];

  const maxDailyAbs = Math.max(...week.dailyFlows.map(d => {
    const positives = Object.values(d.byIssuer).filter(v => v > 0).reduce((s, v) => s + v, 0);
    const negatives = Math.abs(Object.values(d.byIssuer).filter(v => v < 0).reduce((s, v) => s + v, 0));
    return Math.max(positives, negatives);
  }), 1);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-white">XRP ETF Flows</h2>
          <p className="text-[12px] text-white/40">Daily XRP inflows and outflows by ETF</p>
        </div>
        <select
          value={selectedIdx}
          onChange={e => setSelectedIdx(Number(e.target.value))}
          className="bg-[#1a1a1b] border border-white/10 rounded-lg px-3 py-1.5 text-[12px] text-white/80 outline-none"
        >
          {weeks.map((w, i) => (
            <option key={w.label} value={i}>{w.label}</option>
          ))}
        </select>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'TOTAL INFLOWS', value: `+${fmtXRP(week.totalInflows)} XRP`, color: 'text-emerald-400' },
          { label: 'TOTAL OUTFLOWS', value: `${fmtXRP(week.totalOutflows, true)} XRP`, color: 'text-red-400' },
          { label: 'NET TOTAL', value: `${fmtXRP(week.netTotal, true)} XRP`, color: week.netTotal >= 0 ? 'text-emerald-400' : 'text-red-400' },
        ].map(s => (
          <div key={s.label} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider text-white/40 mb-1">{s.label}</p>
            <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Main 3-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-3">
        {/* Left - Week Close */}
        <div className="rounded-xl border border-white/[0.08] bg-[#0A0A0B] p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Week Close</span>
          </div>
          <p className="text-xl font-bold text-white">{fmtXRP(week.previousClose.total)} XRP</p>
          <p className="text-[11px] text-white/30 mb-3">Total XRP Locked</p>
          <p className="text-[10px] text-white/40 mb-2">{week.previousClose.dateLabel}</p>
          <div className="space-y-1.5">
            {ETF_ISSUER_ORDER.map(issuer => {
              const val = week.previousClose.byIssuer[issuer];
              if (val == null) return null;
              return (
                <div key={issuer} className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: ETF_COLORS[issuer] }} />
                    <span className="text-white/50">{issuer}</span>
                  </div>
                  <span className="text-white/70 font-medium">{fmtXRP(val)}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center - Bar Chart */}
        <div className="rounded-xl border border-white/[0.08] bg-[#0A0A0B] p-4">
          <p className="text-[11px] font-semibold text-white/60 text-center mb-4">
            Week {week.weekNumber} ({week.year}) Daily Flows ({week.startDate.slice(5)} - {week.endDate.slice(5)})
          </p>
          <div className="flex items-end justify-around gap-2" style={{ height: 200 }}>
            {week.dailyFlows.map(day => {
              const positives = Object.entries(day.byIssuer).filter(([, v]) => v > 0).sort(([a], [b]) => ETF_ISSUER_ORDER.indexOf(a as typeof ETF_ISSUER_ORDER[number]) - ETF_ISSUER_ORDER.indexOf(b as typeof ETF_ISSUER_ORDER[number]));
              const negatives = Object.entries(day.byIssuer).filter(([, v]) => v < 0).sort(([a], [b]) => ETF_ISSUER_ORDER.indexOf(a as typeof ETF_ISSUER_ORDER[number]) - ETF_ISSUER_ORDER.indexOf(b as typeof ETF_ISSUER_ORDER[number]));
              const posTotal = positives.reduce((s, [, v]) => s + v, 0);
              const negTotal = Math.abs(negatives.reduce((s, [, v]) => s + v, 0));
              const posHeight = maxDailyAbs > 0 ? (posTotal / maxDailyAbs) * 80 : 0;
              const negHeight = maxDailyAbs > 0 ? (negTotal / maxDailyAbs) * 80 : 0;

              return (
                <div key={day.date} className="flex-1 flex flex-col items-center" style={{ height: '100%' }}>
                  {/* Net label */}
                  <p className={`text-[10px] font-medium mb-1 ${day.tbd ? 'text-white/20' : day.net >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {day.tbd ? 'TBD' : fmtXRP(day.net, true)}
                  </p>
                  {/* Bar area */}
                  <div className="flex-1 flex flex-col justify-end w-full relative">
                    {/* Positive stack */}
                    <div className="flex flex-col-reverse mx-auto" style={{ width: '70%', height: posHeight }}>
                      {positives.map(([issuer, val]) => {
                        const h = posTotal > 0 ? (val / posTotal) * 100 : 0;
                        return (
                          <div
                            key={issuer}
                            className="w-full first:rounded-t-sm"
                            style={{ height: `${h}%`, backgroundColor: ETF_COLORS[issuer], minHeight: val > 0 ? 2 : 0 }}
                          />
                        );
                      })}
                    </div>
                    {/* Zero line */}
                    <div className="w-full border-t border-dashed border-white/20 my-0.5" />
                    {/* Negative stack */}
                    <div className="flex flex-col mx-auto" style={{ width: '70%', height: negHeight }}>
                      {negatives.map(([issuer, val]) => {
                        const h = negTotal > 0 ? (Math.abs(val) / negTotal) * 100 : 0;
                        return (
                          <div
                            key={issuer}
                            className="w-full last:rounded-b-sm"
                            style={{ height: `${h}%`, backgroundColor: ETF_COLORS[issuer], minHeight: Math.abs(val) > 0 ? 2 : 0 }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  {/* Day label */}
                  <p className={`text-[9px] mt-1.5 text-center ${day.tbd ? 'text-white/20' : 'text-white/40'}`}>
                    {day.dayLabel}{day.tbd ? ' (TBD)' : ''}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - New Total */}
        <div className="rounded-xl border border-white/[0.08] bg-[#0A0A0B] p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">New Total</span>
          </div>
          <p className="text-xl font-bold text-white">{fmtXRP(week.newTotal.total)} XRP</p>
          <p className="text-[11px] text-white/30 mb-3">Total XRP Locked</p>
          <p className="text-[10px] text-white/40 mb-2">Week {week.weekNumber} Flows:</p>
          <div className="space-y-1.5">
            {ETF_ISSUER_ORDER.map(issuer => {
              const val = week.newTotal.byIssuer[issuer];
              return (
                <div key={issuer} className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: ETF_COLORS[issuer] }} />
                    <span className="text-white/50">{issuer}</span>
                  </div>
                  <span className={`font-medium ${val == null ? 'text-white/30' : val >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {val == null ? 'n/r' : fmtXRP(val, true)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 justify-center">
        {ETF_ISSUER_ORDER.map(issuer => (
          <div key={issuer} className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ETF_COLORS[issuer] }} />
            <span className="text-[11px] text-white/50">{issuer}</span>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.01] p-3.5">
        <Info className="h-3.5 w-3.5 text-white/20 mt-0.5 flex-shrink-0" />
        <p className="text-[11px] text-white/30 leading-relaxed">
          Flow data is calculated from XRP holdings reported by each ETF issuer. Reporting times vary by issuer.
        </p>
      </div>
    </div>
  );
}

function TrustBadge({ score }: { score: string }) {
  if (score === 'green') return <ShieldCheck className="h-4 w-4 text-green-400 mx-auto" />;
  if (score === 'yellow') return <Shield className="h-4 w-4 text-yellow-400 mx-auto" />;
  return <ShieldAlert className="h-4 w-4 text-red-400 mx-auto" />;
}
