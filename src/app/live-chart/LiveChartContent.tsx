'use client';

import dynamic from 'next/dynamic';
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
} from 'lucide-react';

import LiveTrades from '@/components/globe/LiveTrades';
import RichList from '@/components/richlist/RichList';
import RecentTransactions from '@/components/live-chart/RecentTransactions';
import EscrowSchedule from '@/components/live-chart/EscrowSchedule';

type MarketTab = 'markets' | 'holders' | 'transactions' | 'escrow';

const marketTabs: { id: MarketTab; label: string }[] = [
  { id: 'markets', label: 'Markets' },
  { id: 'holders', label: 'Holders' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'escrow', label: 'Escrow' },
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

type ChartView = 'candles' | 'line' | 'globe';

const chartViews: { id: ChartView; label: string; icon: typeof CandlestickChart; tvStyle?: string }[] = [
  { id: 'candles', label: 'Candlesticks', icon: CandlestickChart, tvStyle: '1' },
  { id: 'line', label: 'Line', icon: LineChart, tvStyle: '3' },
  { id: 'globe', label: 'Globe', icon: GlobeIcon },
];

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
  { label: '15m', interval: '15', range: '1D' },
  { label: '1h', interval: '60', range: '3D' },
  { label: '4h', interval: '240', range: '2W' },
  { label: '1D', interval: 'D', range: '6M' },
  { label: '1W', interval: 'W', range: '24M' },
  { label: '1M', interval: 'M', range: '60M' },
];

// ── Main Component ─────────────────────────────────────────────────────────
export default function LiveChartContent() {
  const [price, setPrice] = useState<PriceData | null>(null);
  const [coin, setCoin] = useState<CoinDetail | null>(null);
  const [tickers, setTickers] = useState<Ticker[]>([]);
  const [tvReady, setTvReady] = useState(false);
  const [activeTimeframe, setActiveTimeframe] = useState(3); // 1D default
  const [chartView, setChartView] = useState<ChartView>('candles');
  const [converterXrp, setConverterXrp] = useState('1');
  const { arcs, stats, removeArc } = useXRPLStream();
  const [converterDir, setConverterDir] = useState<'xrp-usd' | 'usd-xrp'>('xrp-usd');
  const [activeMarketTab, setActiveMarketTab] = useState<MarketTab>('markets');
  const { data: binancePrice } = useXRPPrice();
  const chartRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<unknown>(null);

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      const [priceRes, coinRes, tickerRes] = await Promise.all([
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true'),
        fetch('https://api.coingecko.com/api/v3/coins/ripple?localization=false&tickers=false&community_data=false&developer_data=false'),
        fetch('https://api.coingecko.com/api/v3/coins/ripple/tickers?order=volume_desc'),
      ]);
      const priceData = await priceRes.json();
      if (priceData.ripple) setPrice(priceData.ripple);
      const coinData = await coinRes.json();
      if (coinData.market_data) setCoin(coinData);
      const tickerData = await tickerRes.json();
      if (tickerData.tickers) setTickers(tickerData.tickers.slice(0, 20));
    } catch (e) {
      console.error('Failed to fetch data:', e);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [fetchData]);

  // TradingView widget
  const tvStyleForView = chartViews.find(v => v.id === chartView)?.tvStyle;
  useEffect(() => {
    if (chartView === 'globe') return;
    if (tvReady && window.TradingView && chartRef.current) {
      const tf = timeframes[activeTimeframe];
      const container = document.getElementById('lc-tv-chart');
      if (container) container.innerHTML = '';
      widgetRef.current = new window.TradingView.widget({
        container_id: 'lc-tv-chart',
        symbol: 'BINANCE:XRPUSDT',
        theme: 'dark',
        style: tvStyleForView || '1',
        locale: 'en',
        interval: tf.interval,
        range: tf.range,
        toolbar_bg: '#000000',
        enable_publishing: false,
        allow_symbol_change: false,
        hide_side_toolbar: true,
        hide_top_toolbar: false,
        hide_legend: false,
        withdateranges: false,
        save_image: false,
        autosize: true,
        backgroundColor: '#000000',
        gridColor: '#111113',
        hide_volume: false,
        studies: [],
        disabled_features: [
          'header_symbol_search',
          'header_compare',
          'header_undo_redo',
          'header_screenshot',
          'header_saveload',
          'header_settings',
          'header_fullscreen_button',
          'header_indicators',
          'header_chart_type',
          'left_toolbar',
          'context_menus',
          'control_bar',
          'timeframes_toolbar',
          'volume_force_overlay',
          'go_to_date',
          'symbol_info',
          'edit_buttons_in_legend',
          'property_pages',
          'show_chart_property_page',
          'source_selection_markers',
          'main_series_scale_menu',
          'display_market_status',
          'border_around_the_chart',
        ],
        enabled_features: [
          'hide_left_toolbar_by_default',
        ],
        overrides: {
          'paneProperties.background': '#000000',
          'paneProperties.backgroundType': 'solid',
          'paneProperties.vertGridProperties.color': '#111113',
          'paneProperties.horzGridProperties.color': '#111113',
          'scalesProperties.lineColor': '#222',
          'scalesProperties.textColor': '#666',
        },
      });
    }
  }, [tvReady, activeTimeframe, chartView, tvStyleForView]);

  const md = coin?.market_data;
  const currentPrice = binancePrice?.price ?? price?.usd ?? md?.current_price?.usd ?? 0;
  const change24h = binancePrice?.change24h ?? price?.usd_24h_change ?? md?.price_change_percentage_24h ?? 0;
  const high24hBinance = binancePrice?.high24h;
  const low24hBinance = binancePrice?.low24h;

  // Converter calculation
  const converterResult = converterDir === 'xrp-usd'
    ? (parseFloat(converterXrp) || 0) * currentPrice
    : currentPrice > 0 ? (parseFloat(converterXrp) || 0) / currentPrice : 0;

  // 24h price bar position
  const low24h = (low24hBinance && low24hBinance > 0) ? low24hBinance : (md?.low_24h?.usd ?? 0);
  const high24h = (high24hBinance && high24hBinance > 0) ? high24hBinance : (md?.high_24h?.usd ?? 0);
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
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 rounded-full bg-[#0085FF]/20 flex items-center justify-center">
            <span className="text-[#0085FF] font-bold text-sm">X</span>
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              XRP <span className="text-white/40 text-sm font-normal">XRP</span>
              {md && (
                <span className="text-xs bg-white/[0.06] text-white/50 px-2 py-0.5 rounded-full">
                  Rank #{md.market_cap_rank}
                </span>
              )}
            </h1>
          </div>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_260px] gap-6">

          {/* ─── LEFT SIDEBAR ──────────────────────────────────────────── */}
          <div className="space-y-4 order-2 lg:order-1">
            {/* Price */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">XRP Price</p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold font-mono tracking-tight">
                  {currentPrice ? fmtPrice(currentPrice) : '—'}
                </span>
                {change24h !== 0 && <PctBadge value={change24h} />}
              </div>
            </div>

            {/* Market stats */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 space-y-3">
              <StatRow label="Market Cap" value={md ? fmt(md.market_cap.usd) : '—'} />
              <StatRow label="24h Volume" value={md ? fmt(md.total_volume.usd) : '—'} />
              <StatRow label="Circulating Supply" value={md ? `${fmtNum(md.circulating_supply)} XRP` : '—'} />
              {md?.total_supply && (
                <StatRow label="Total Supply" value={`${fmtNum(md.total_supply)} XRP`} />
              )}
              {md?.max_supply && (
                <StatRow label="Max Supply" value={`${fmtNum(md.max_supply)} XRP`} />
              )}
            </div>

            {/* 24h Price Range */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">24h Range</p>
              <div className="flex justify-between text-xs text-white/50 mb-1.5">
                <span>{low24h ? fmtPrice(low24h) : '—'}</span>
                <span>{high24h ? fmtPrice(high24h) : '—'}</span>
              </div>
              <div className="relative h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${priceBarPos}%`,
                    background: 'linear-gradient(90deg, #ea3943, #f5d100, #16c784)',
                  }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#0085FF] shadow-lg"
                  style={{ left: `${Math.min(Math.max(priceBarPos, 2), 98)}%`, transform: 'translate(-50%, -50%)' }}
                />
              </div>
            </div>

            {/* ATH / ATL */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 space-y-3">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/40">All-Time High</span>
                  <span className="text-xs text-red-400">{md ? `${md.ath_change_percentage.usd.toFixed(1)}%` : ''}</span>
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
                  <span className="text-xs text-green-400">{md ? `+${md.atl_change_percentage.usd.toFixed(0)}%` : ''}</span>
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

            {/* Explorer & Tags */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 space-y-3">
              <a
                href="https://livenet.xrpl.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#0085FF] hover:underline"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                XRPL Explorer
              </a>
              <div className="flex flex-wrap gap-1.5">
                {['Utility Token', 'Payments'].map(tag => (
                  <span key={tag} className="text-[10px] font-medium uppercase tracking-wider bg-white/[0.04] text-white/50 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── CENTER: CHART + MARKETS ───────────────────────────────── */}
          <div className="space-y-4 order-1 lg:order-2">
            {/* View switcher + Timeframe selectors */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              {/* View switcher pills */}
              <div className="flex items-center rounded-lg bg-white/[0.03] border border-white/[0.06] p-0.5">
                {chartViews.map(v => {
                  const Icon = v.icon;
                  const active = chartView === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setChartView(v.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                        active
                          ? 'bg-[#0085FF] text-black shadow-sm'
                          : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{v.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Timeframe selectors (hidden for globe) */}
              {chartView !== 'globe' && (
                <div className="flex items-center gap-1">
                  {timeframes.map((tf, i) => (
                    <button
                      key={tf.label}
                      onClick={() => setActiveTimeframe(i)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        activeTimeframe === i
                          ? 'bg-[#0085FF] text-black'
                          : 'bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      {tf.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Chart / Globe */}
            {chartView === 'globe' ? (
              <div className="flex flex-col md:flex-row gap-3" style={{ height: '55vh', minHeight: 400 }}>
                {/* Globe */}
                <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-black relative flex-[6] min-h-[300px] flex flex-col">
                  <StatsBar stats={stats} />
                  <div className="flex-1 relative">
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
                {/* Live Trades */}
                <div className="flex-[4] min-h-[250px]">
                  <LiveTrades />
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-[#0A0A0B] relative" style={{ height: '55vh', minHeight: 400 }}>
                {!tvReady && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
                  </div>
                )}
                <div id="lc-tv-chart" ref={chartRef} className="h-full" />
              </div>
            )}

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
                        tickers.map((t, i) => (
                          <tr key={`${t.market.identifier}-${t.target}-${i}`} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                            <td className="py-3 pr-4 text-white/30 text-xs">{i + 1}</td>
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
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeMarketTab === 'holders' && <RichList />}
            {activeMarketTab === 'transactions' && <RecentTransactions />}
            {activeMarketTab === 'escrow' && <EscrowSchedule />}
          </div>

          {/* ─── RIGHT SIDEBAR ─────────────────────────────────────────── */}
          <div className="space-y-4 order-3">
            {/* Fear & Greed Index */}
            <FearGreedIndex />

            {/* Quick Stats Card */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Price Performance</p>
              <div className="space-y-2">
                {[
                  { label: '24h', value: change24h || price?.usd_24h_change },
                  { label: '7d', value: md ? (md as unknown as Record<string, Record<string, number>>)?.price_change_percentage_7d_in_currency?.usd : undefined },
                  { label: '30d', value: md ? (md as unknown as Record<string, Record<string, number>>)?.price_change_percentage_30d_in_currency?.usd : undefined },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-xs text-white/40">{item.label}</span>
                    {item.value != null ? <PctBadge value={item.value} /> : <span className="text-xs text-white/20">—</span>}
                  </div>
                ))}
              </div>
            </div>

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

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-white/40">{label}</span>
      <span className="text-sm font-semibold font-mono text-white/80">{value}</span>
    </div>
  );
}

function TrustBadge({ score }: { score: string }) {
  if (score === 'green') return <ShieldCheck className="h-4 w-4 text-green-400 mx-auto" />;
  if (score === 'yellow') return <Shield className="h-4 w-4 text-yellow-400 mx-auto" />;
  return <ShieldAlert className="h-4 w-4 text-red-400 mx-auto" />;
}
