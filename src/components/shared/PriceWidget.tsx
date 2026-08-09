"use client";

import Link from "next/link";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useXRPPrice } from "@/hooks/useXRPPrice";

/** Show 4-6 meaningful decimals, no trailing zeros */
function fmtPrice(n: number): string {
  if (n >= 1) return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  return n.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 6 });
}

interface PriceWidgetProps {
  compact?: boolean;
}

export default function PriceWidget({ compact = false }: PriceWidgetProps) {
  const { data, flash } = useXRPPrice();

  if (!data) {
    return (
      <div className="flex min-h-11 items-center gap-2 px-1 text-sm" role="status" aria-label="Loading live XRP price">
        <span className="status-dot" aria-hidden="true" />
        <span className="font-mono text-xs font-semibold text-text-secondary">XRP · live</span>
      </div>
    );
  }

  const positive = data.change24h >= 0;
  const Icon = positive ? TrendingUp : TrendingDown;
  const flashColor = flash === "up" ? "text-success" : flash === "down" ? "text-danger" : "text-text-primary";

  if (compact) {
    return (
      <Link
        href="/live-chart"
        className="flex min-h-11 items-center gap-1.5 text-sm"
        aria-label={`XRP price $${fmtPrice(data.price)}, view live chart`}
      >
        <span className={`font-mono font-semibold transition-colors duration-300 ${flashColor}`}>
          ${fmtPrice(data.price)}
        </span>
        <Icon className={`h-3 w-3 ${positive ? "text-success" : "text-danger"}`} />
      </Link>
    );
  }

  return (
    <Link
      href="/live-chart"
      className="flex items-center gap-3  border border-black/[0.08] bg-black/[0.025] px-4 py-2 text-sm transition-all duration-200 hover:border-black/[0.14] hover:bg-black/[0.045]"
      aria-label={`XRP price $${fmtPrice(data.price)}, view live chart`}
    >
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5  bg-success" />
        <span className="font-medium text-text-secondary text-[13px]">XRP</span>
      </div>
      <span className={`font-mono text-base font-semibold transition-colors duration-300 ${flash ? "stat-refresh" : ""} ${flashColor}`}>
        ${fmtPrice(data.price)}
      </span>
    </Link>
  );
}
