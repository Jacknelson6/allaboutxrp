"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import TradeModal from "./TradeModal";
import { useXRPPrice } from "@/hooks/useXRPPrice";

interface PriceWidgetProps {
  compact?: boolean;
}

export default function PriceWidget({ compact = false }: PriceWidgetProps) {
  const { data, flash } = useXRPPrice();
  const [modalOpen, setModalOpen] = useState(false);

  if (!data) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] px-3 py-1.5 text-sm">
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
          <span className={`font-mono font-semibold transition-colors duration-300 ${flashColor}`}>
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
        className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-sm hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200 cursor-pointer"
        aria-label="Open XRP trade analysis"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span className="font-medium text-text-secondary text-[13px]">XRP</span>
        </div>
        <span className={`font-mono text-base font-semibold transition-colors duration-300 ${flash ? "stat-refresh" : ""} ${flashColor}`}>
          ${data.price.toFixed(4)}
        </span>
        <span className={`flex items-center gap-1 text-xs font-medium ${positive ? "text-success" : "text-danger"}`}>
          <Icon className="h-3 w-3" />
          {positive ? "+" : ""}{data.change24h.toFixed(2)}%
        </span>
      </button>
      <TradeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} priceInfo={data} />
    </>
  );
}
