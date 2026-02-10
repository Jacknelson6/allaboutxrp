"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import TradeModal from "./TradeModal";

interface PriceState {
  price: number;
  change24h: number;
}

interface PriceWidgetProps {
  compact?: boolean;
}

export default function PriceWidget({ compact = false }: PriceWidgetProps) {
  const [data, setData] = useState<PriceState | null>(null);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const prevPrice = useRef<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch("/api/price");
        if (res.ok) {
          const json = await res.json() as PriceState;
          if (prevPrice.current !== null && json.price !== prevPrice.current) {
            setFlash(json.price > prevPrice.current ? "up" : "down");
            setTimeout(() => setFlash(null), 600);
          }
          prevPrice.current = json.price;
          setData(json);
        }
      } catch {
        // Widget is non-critical
      }
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-surface-border/50 bg-surface-card/60 px-4 py-2 text-sm backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-surface-border animate-pulse" />
        <span className="font-mono text-text-secondary/50 shimmer">XRP $--.--</span>
      </div>
    );
  }

  const positive = data.change24h >= 0;
  const Icon = positive ? TrendingUp : TrendingDown;
  const flashColor = flash === "up" ? "text-success" : flash === "down" ? "text-danger" : "text-text-primary";

  if (compact) {
    return (
      <>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-1.5 text-sm group cursor-pointer"
          aria-label="Open XRP trade analysis"
        >
          <span className={`font-mono font-bold transition-colors duration-300 group-hover:text-xrp-accent ${flashColor}`}>
            ${data.price.toFixed(2)}
          </span>
          <Icon className={`h-3 w-3 ${positive ? "text-success" : "text-danger"}`} />
        </button>
        <TradeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} priceInfo={data} />
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="group relative flex items-center gap-3.5 rounded-xl border border-surface-border/40 bg-surface-card/50 px-5 py-2.5 text-sm backdrop-blur-xl transition-all duration-300 hover:border-xrp-accent/30 hover:shadow-lg hover:shadow-xrp-accent/8 cursor-pointer"
        aria-label="Open XRP trade analysis"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="font-semibold text-text-primary/80">XRP</span>
        </div>
        <span className={`font-mono text-lg font-bold transition-colors duration-300 ${flash ? "stat-refresh" : ""} ${flashColor}`}>
          ${data.price.toFixed(4)}
        </span>
        <div className={`flex items-center gap-1 rounded-lg px-2 py-0.5 text-[11px] font-bold ${
          positive ? "bg-success/8 text-success" : "bg-danger/8 text-danger"
        }`}>
          <Icon className="h-3 w-3" />
          {positive ? "+" : ""}{data.change24h.toFixed(2)}%
        </div>

        <div className="ml-1 text-text-secondary/30 group-hover:text-xrp-accent/50 transition-colors">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </button>
      <TradeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} priceInfo={data} />
    </>
  );
}
