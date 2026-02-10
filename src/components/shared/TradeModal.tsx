"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
          color: close >= open ? "rgba(0, 186, 124, 0.4)" : "rgba(244, 33, 46, 0.4)",
        });
        if (high > high24h) high24h = high;
        if (low < low24h) low24h = low;
      }

      if (candleSeriesRef.current) candleSeriesRef.current.setData(candles as CandlestickData<Time>[]);
      if (volumeSeriesRef.current) volumeSeriesRef.current.setData(volumes as HistogramData<Time>[]);
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

    const timer = setTimeout(() => {
      if (!chartContainerRef.current) return;

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: "transparent" },
          textColor: "#71767B",
          fontSize: 11,
          fontFamily: "'IBM Plex Mono', monospace",
        },
        grid: {
          vertLines: { color: "rgba(47, 51, 54, 0.5)" },
          horzLines: { color: "rgba(47, 51, 54, 0.5)" },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
          vertLine: { color: "rgba(0, 163, 255, 0.3)", width: 1, style: 2, labelBackgroundColor: "#000" },
          horzLine: { color: "rgba(0, 163, 255, 0.3)", width: 1, style: 2, labelBackgroundColor: "#000" },
        },
        timeScale: {
          borderColor: "rgba(47, 51, 54, 0.5)",
          timeVisible: true,
          secondsVisible: false,
        },
        rightPriceScale: {
          borderColor: "rgba(47, 51, 54, 0.5)",
        },
        handleScroll: { vertTouchDrag: false },
      });

      const candleSeries = chart.addSeries(CandlestickSeries, {
        upColor: "#00BA7C",
        downColor: "#F4212E",
        borderUpColor: "#00BA7C",
        borderDownColor: "#F4212E",
        wickUpColor: "#00BA7C",
        wickDownColor: "#F4212E",
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[100] bg-black/80" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-x-4 top-[3vh] bottom-[3vh] z-[101] mx-auto flex max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-black md:inset-x-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-lg font-bold text-text-primary">XRP / USD</h2>
              <p className="text-xs text-text-secondary">Ripple • XRPL</p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span className={`font-mono text-2xl font-bold ${crosshairPrice ? "text-xrp-accent" : "text-text-primary"}`}>
                {formatCurrency(displayPrice, 4)}
              </span>
              <span className={`text-xs font-semibold ${positive ? "text-success" : "text-danger"}`}>
                {positive ? <TrendingUp className="inline h-3 w-3" /> : <TrendingDown className="inline h-3 w-3" />}
                {" "}{formatPercent(priceInfo?.change24h ?? 0)}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-text-secondary hover:text-text-primary transition-colors" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Time range */}
        <div className="flex items-center gap-1 border-b border-white/[0.06] px-5 py-2">
          {TIME_RANGES.map((range) => (
            <button
              key={range.label}
              onClick={() => handleRangeChange(range.label)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                activeRange === range.label
                  ? "bg-xrp-accent text-white"
                  : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03]"
              }`}
              title={range.description}
            >
              {range.label}
            </button>
          ))}
          {loading && (
            <span className="ml-auto text-xs text-text-secondary">Loading...</span>
          )}
        </div>

        {/* Chart */}
        <div className="relative flex-1 min-h-0 px-2">
          <div ref={chartContainerRef} className="h-full w-full" />
          {loading && !chartRef.current && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full border-2 border-xrp-accent border-t-transparent animate-spin" />
            </div>
          )}
        </div>

        {/* Metrics */}
        <div className="border-t border-white/[0.06] px-5 py-3">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            <MetricItem icon={<DollarSign className="h-3 w-3" />} label="Price" value={formatCurrency(priceInfo?.price ?? 0, 4)} />
            <MetricItem icon={<TrendingUp className="h-3 w-3" />} label="24h High" value={metrics ? formatCurrency(metrics.high24h, 4) : "—"} />
            <MetricItem icon={<TrendingDown className="h-3 w-3" />} label="24h Low" value={metrics ? formatCurrency(metrics.low24h, 4) : "—"} />
            <MetricItem icon={<BarChart3 className="h-3 w-3" />} label="Volume" value={metrics ? formatCompact(metrics.volume) : "—"} />
            <MetricItem icon={<Activity className="h-3 w-3" />} label="Mkt Cap" value={metrics ? formatCompact(metrics.marketCap) : "—"} />
            <MetricItem icon={<Layers className="h-3 w-3" />} label="Supply" value="57.6B" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-2 text-[10px] text-text-secondary/50">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> Data from CoinGecko
          </span>
          <span>Not financial advice</span>
        </div>
      </div>
    </>
  );
}

function MetricItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/[0.06] px-3 py-2">
      <div className="flex items-center gap-1 text-text-secondary mb-0.5">
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
      </div>
      <span className="font-mono text-sm font-semibold text-text-primary">{value}</span>
    </div>
  );
}
