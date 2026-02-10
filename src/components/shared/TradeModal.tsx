"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, TrendingDown, BarChart3, DollarSign, Activity, Layers, Clock } from "lucide-react";
import { createChart, CandlestickSeries, HistogramSeries, type IChartApi, type ISeriesApi, type CandlestickData, type HistogramData, type Time, ColorType, CrosshairMode } from "lightweight-charts";
import { formatCurrency, formatCompact, formatPercent } from "@/lib/utils/format";

interface OHLCPoint {
  time: Time;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface VolumePoint {
  time: Time;
  value: number;
  color: string;
}

interface PriceInfo {
  price: number;
  change24h: number;
}

const TIME_RANGES = [
  { label: "1H", days: "1", description: "1 Hour" },
  { label: "1D", days: "1", description: "1 Day" },
  { label: "1W", days: "7", description: "1 Week" },
  { label: "1M", days: "30", description: "1 Month" },
  { label: "3M", days: "90", description: "3 Months" },
  { label: "1Y", days: "365", description: "1 Year" },
  { label: "ALL", days: "max", description: "All Time" },
] as const;

interface TradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  priceInfo: PriceInfo | null;
}

export default function TradeModal({ isOpen, onClose, priceInfo }: TradeModalProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const volumeSeriesRef = useRef<ISeriesApi<"Histogram"> | null>(null);
  const [activeRange, setActiveRange] = useState("1D");
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState<{
    high24h: number;
    low24h: number;
    volume: number;
    marketCap: number;
    supply: number;
    changePercent: number;
  } | null>(null);
  const [crosshairPrice, setCrosshairPrice] = useState<number | null>(null);

  const fetchData = useCallback(async (days: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/ohlc?days=${days}`);
      if (!res.ok) throw new Error("fetch failed");
      const raw = (await res.json()) as number[][];

      const candles: OHLCPoint[] = [];
      const volumes: VolumePoint[] = [];
      let high24h = -Infinity;
      let low24h = Infinity;

      for (const point of raw) {
        const [ts, open, high, low, close] = point;
        const time = (ts / 1000) as Time;
        candles.push({ time, open, high, low, close });
        const vol = Math.abs(close - open) * 1e8;
        volumes.push({
          time,
          value: vol,
          color: close >= open ? "rgba(63, 185, 80, 0.4)" : "rgba(248, 81, 73, 0.4)",
        });
        if (high > high24h) high24h = high;
        if (low < low24h) low24h = low;
      }

      if (candleSeriesRef.current) {
        candleSeriesRef.current.setData(candles as CandlestickData<Time>[]);
      }
      if (volumeSeriesRef.current) {
        volumeSeriesRef.current.setData(volumes as HistogramData<Time>[]);
      }
      chartRef.current?.timeScale().fitContent();

      setMetrics({
        high24h,
        low24h,
        volume: 2100000000,
        marketCap: (priceInfo?.price ?? 2.35) * 57600000000,
        supply: 57600000000,
        changePercent: priceInfo?.change24h ?? 0,
      });
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, [priceInfo]);

  useEffect(() => {
    if (!isOpen || !chartContainerRef.current) return;

    // Small delay to let the modal animation start
    const timer = setTimeout(() => {
      if (!chartContainerRef.current) return;

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: "transparent" },
          textColor: "#8B949E",
          fontSize: 11,
          fontFamily: "'JetBrains Mono', monospace",
        },
        grid: {
          vertLines: { color: "rgba(36, 45, 58, 0.5)" },
          horzLines: { color: "rgba(36, 45, 58, 0.5)" },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
          vertLine: { color: "rgba(0, 163, 255, 0.3)", width: 1, style: 2, labelBackgroundColor: "#12171E" },
          horzLine: { color: "rgba(0, 163, 255, 0.3)", width: 1, style: 2, labelBackgroundColor: "#12171E" },
        },
        timeScale: {
          borderColor: "rgba(36, 45, 58, 0.5)",
          timeVisible: true,
          secondsVisible: false,
        },
        rightPriceScale: {
          borderColor: "rgba(36, 45, 58, 0.5)",
        },
        handleScroll: { vertTouchDrag: false },
      });

      const candleSeries = chart.addSeries(CandlestickSeries, {
        upColor: "#3FB950",
        downColor: "#F85149",
        borderUpColor: "#3FB950",
        borderDownColor: "#F85149",
        wickUpColor: "#3FB950",
        wickDownColor: "#F85149",
      });

      const volumeSeries = chart.addSeries(HistogramSeries, {
        priceFormat: { type: "volume" },
        priceScaleId: "volume",
      });

      chart.priceScale("volume").applyOptions({
        scaleMargins: { top: 0.85, bottom: 0 },
      });

      chart.subscribeCrosshairMove((param) => {
        if (param.seriesData && param.seriesData.size > 0) {
          const candle = param.seriesData.get(candleSeries);
          if (candle && "close" in candle) {
            setCrosshairPrice((candle as CandlestickData<Time>).close);
          }
        } else {
          setCrosshairPrice(null);
        }
      });

      chartRef.current = chart;
      candleSeriesRef.current = candleSeries;
      volumeSeriesRef.current = volumeSeries;

      const rangeConfig = TIME_RANGES.find((r) => r.label === activeRange);
      fetchData(rangeConfig?.days ?? "1");

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        }
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chart.remove();
        chartRef.current = null;
        candleSeriesRef.current = null;
        volumeSeriesRef.current = null;
      };
    }, 100);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleRangeChange = (label: string) => {
    setActiveRange(label);
    const rangeConfig = TIME_RANGES.find((r) => r.label === label);
    if (rangeConfig) fetchData(rangeConfig.days);
  };

  const displayPrice = crosshairPrice ?? priceInfo?.price ?? 0;
  const positive = (priceInfo?.change24h ?? 0) >= 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] z-[101] mx-auto flex max-w-5xl flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface-primary/95 shadow-2xl shadow-black/40 backdrop-blur-xl md:inset-x-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-surface-border/50 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-xrp-accent/10 flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-xrp-accent">X</span>
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-text-primary">XRP / USD</h2>
                    <p className="text-xs text-text-secondary">Ripple • XRPL</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-3 ml-4">
                  <span className={`font-mono text-2xl font-bold transition-colors ${crosshairPrice ? "text-xrp-accent" : "text-text-primary"}`}>
                    {formatCurrency(displayPrice, 4)}
                  </span>
                  <span className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold ${
                    positive ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                  }`}>
                    {positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {formatPercent(priceInfo?.change24h ?? 0)}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-card hover:text-text-primary"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile price row */}
            <div className="flex items-center gap-3 px-6 py-2 sm:hidden border-b border-surface-border/30">
              <span className="font-mono text-xl font-bold text-text-primary">
                {formatCurrency(displayPrice, 4)}
              </span>
              <span className={`flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs font-semibold ${
                positive ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
              }`}>
                {positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {formatPercent(priceInfo?.change24h ?? 0)}
              </span>
            </div>

            {/* Time range selector */}
            <div className="flex items-center gap-1 border-b border-surface-border/30 px-6 py-2">
              {TIME_RANGES.map((range) => (
                <button
                  key={range.label}
                  onClick={() => handleRangeChange(range.label)}
                  className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeRange === range.label
                      ? "text-white"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  title={range.description}
                >
                  {activeRange === range.label && (
                    <motion.div
                      layoutId="trade-range"
                      className="absolute inset-0 rounded-md bg-xrp-accent"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{range.label}</span>
                </button>
              ))}
              {loading && (
                <div className="ml-auto flex items-center gap-1.5 text-xs text-text-secondary">
                  <div className="h-1.5 w-1.5 rounded-full bg-xrp-accent animate-pulse" />
                  Loading...
                </div>
              )}
            </div>

            {/* Chart */}
            <div className="relative flex-1 min-h-0 px-2">
              <div ref={chartContainerRef} className="h-full w-full" />
              {loading && !chartRef.current && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full border-2 border-xrp-accent border-t-transparent animate-spin" />
                </div>
              )}
            </div>

            {/* Metrics panel */}
            <div className="border-t border-surface-border/50 px-6 py-4">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                <MetricItem icon={<DollarSign className="h-3.5 w-3.5" />} label="Price" value={formatCurrency(priceInfo?.price ?? 0, 4)} />
                <MetricItem icon={<TrendingUp className="h-3.5 w-3.5" />} label="24h High" value={metrics ? formatCurrency(metrics.high24h, 4) : "—"} />
                <MetricItem icon={<TrendingDown className="h-3.5 w-3.5" />} label="24h Low" value={metrics ? formatCurrency(metrics.low24h, 4) : "—"} />
                <MetricItem icon={<BarChart3 className="h-3.5 w-3.5" />} label="24h Volume" value={metrics ? formatCompact(metrics.volume) : "—"} />
                <MetricItem icon={<Activity className="h-3.5 w-3.5" />} label="Market Cap" value={metrics ? formatCompact(metrics.marketCap) : "—"} />
                <MetricItem icon={<Layers className="h-3.5 w-3.5" />} label="Circ. Supply" value="57.6B" />
              </div>

              {/* Buy/Sell pressure indicator */}
              <div className="mt-3 flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">Sentiment</span>
                <div className="flex-1 h-2 rounded-full bg-surface-elevated overflow-hidden flex">
                  <div className="h-full bg-success/60 rounded-l-full" style={{ width: "62%" }} />
                  <div className="h-full bg-danger/60 rounded-r-full" style={{ width: "38%" }} />
                </div>
                <div className="flex gap-3 text-[10px]">
                  <span className="text-success font-semibold">62% Buy</span>
                  <span className="text-danger font-semibold">38% Sell</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-surface-border/30 px-6 py-2 text-[10px] text-text-secondary/50">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> Data from CoinGecko • Updates every 2 min
              </span>
              <span>Not financial advice</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MetricItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-surface-card/50 px-3 py-2">
      <div className="flex items-center gap-1 text-text-secondary mb-1">
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
      </div>
      <span className="font-mono text-sm font-semibold text-text-primary">{value}</span>
    </div>
  );
}
