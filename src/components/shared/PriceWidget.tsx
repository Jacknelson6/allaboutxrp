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
      <div className="flex items-center gap-2 rounded-full border border-surface-border px-3 py-1.5 text-sm">
        <span className="font-mono text-text-secondary shimmer">XRP $--.--</span>
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
          className="flex items-center gap-1.5 text-sm cursor-pointer"
          aria-label="Open XRP trade analysis"
        >
          <span className={`font-mono font-bold transition-colors ${flashColor}`}>
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
        className="flex items-center gap-3 rounded-full border border-surface-border px-4 py-2 text-sm hover:bg-white/[0.03] transition-colors cursor-pointer"
        aria-label="Open XRP trade analysis"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-success" />
          <span className="font-semibold text-text-secondary">XRP</span>
        </div>
        <span className={`font-mono text-base font-bold transition-colors ${flash ? "stat-refresh" : ""} ${flashColor}`}>
          ${data.price.toFixed(4)}
        </span>
        <span className={`flex items-center gap-1 text-xs font-semibold ${positive ? "text-success" : "text-danger"}`}>
          <Icon className="h-3 w-3" />
          {positive ? "+" : ""}{data.change24h.toFixed(2)}%
        </span>
      </button>
      <TradeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} priceInfo={data} />
    </>
  );
}
