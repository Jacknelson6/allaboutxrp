"use client";

import { ArrowRight, Activity, TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef } from "react";
import { useXRPLStream } from "@/lib/globe/useXRPLStream";
import { useXRPPrice } from "@/hooks/useXRPPrice";

const Globe = dynamic(() => import("@/components/globe/Globe"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="h-6 w-6 animate-spin  border-2 border-white/10 border-t-xrp-accent" />
    </div>
  ),
});

export default function MiniPreviewCard() {
  const { arcs, removeArc } = useXRPLStream();
  const { data: priceData } = useXRPPrice();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    widgetRef.current.innerHTML = "";

    // Load the TradingView mini-chart Web Component script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js";

    // Create the Web Component element
    const widget = document.createElement("tv-mini-chart");
    widget.setAttribute("symbol", "BITSTAMP:XRPUSD");
    widget.setAttribute("date-range", "1D");
    widget.setAttribute("theme", "dark");
    widget.setAttribute("transparent", "");
    widget.setAttribute("auto-size", "");
    widget.setAttribute("no-time-scale", "");
    widget.style.height = "100%";
    widget.style.width = "100%";
    widget.style.display = "block";

    widgetRef.current.appendChild(script);
    widgetRef.current.appendChild(widget);
  }, []);

  const change = priceData?.change24h;
  const positive = (change ?? 0) >= 0;
  const TrendIcon = positive ? TrendingUp : TrendingDown;

  return (
    <section className="overflow-hidden  border border-surface-border bg-surface-card" aria-labelledby="live-xrp-data-title">
      <div className="flex items-start justify-between gap-4 border-b border-surface-border p-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="status-dot" aria-hidden="true" />
            <p className="editorial-kicker">Live market</p>
          </div>
          <h2 id="live-xrp-data-title" className="mt-2 text-xl font-semibold text-text-primary">XRP / USD</h2>
        </div>
        <div className="text-right">
          <p className="font-mono text-lg font-semibold text-text-primary">
            {priceData ? `$${priceData.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}` : "$--.--"}
          </p>
          {change != null && (
            <p className={`mt-1 flex items-center justify-end gap-1 text-xs font-semibold ${positive ? "text-success" : "text-danger"}`}>
              <TrendIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {positive ? "+" : ""}{change.toFixed(2)}% today
            </p>
          )}
        </div>
      </div>

      <Link href="/live-chart" className="group block border-b border-surface-border" aria-label="Open the live XRP price chart">
        <div className="relative h-[200px] w-full overflow-hidden pointer-events-none" ref={widgetRef}>
          <div className="flex items-center justify-center h-full">
            <div className="h-5 w-5 animate-spin  border-2 border-white/10 border-t-xrp-accent" />
          </div>
        </div>
        <span className="flex min-h-11 items-center justify-between px-5 text-xs font-semibold text-text-secondary transition-colors group-hover:text-xrp-accent-bright">
          View the full market chart
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>

      <Link href="/live-chart" className="group relative block" aria-label="Explore live XRP Ledger activity">
        <div className="relative h-[156px] w-full pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="h-6 w-6 animate-spin  border-2 border-white/10 border-t-xrp-accent" />
              </div>
            }>
              <Globe arcs={arcs} onArcComplete={removeArc} />
            </Suspense>
          </div>
        </div>
        <span className="flex min-h-11 items-center justify-between border-t border-surface-border px-5 text-xs font-semibold text-text-secondary transition-colors group-hover:text-xrp-accent-bright">
          <span className="flex items-center gap-2"><Activity className="h-4 w-4" aria-hidden="true" />Explore XRPL activity</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>
    </section>
  );
}
