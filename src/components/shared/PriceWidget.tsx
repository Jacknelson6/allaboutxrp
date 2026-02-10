"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PriceState {
  price: number;
  change24h: number;
}

interface PriceWidgetProps {
  compact?: boolean;
}

export default function PriceWidget({ compact = false }: PriceWidgetProps) {
  const [data, setData] = useState<PriceState | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch("/api/price");
        if (res.ok) {
          const json = await res.json() as PriceState;
          setData(json);
        }
      } catch {
        // Silently fail — widget is non-critical
      }
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className="flex items-center gap-1.5 rounded-lg bg-surface-card px-3 py-1.5 text-sm">
        <span className="font-mono text-text-secondary">XRP --</span>
      </div>
    );
  }

  const positive = data.change24h >= 0;
  const Icon = positive ? TrendingUp : TrendingDown;

  if (compact) {
    return (
      <div className="flex items-center gap-1 text-sm">
        <span className="font-mono font-medium text-text-primary">${data.price.toFixed(2)}</span>
        <Icon className={`h-3 w-3 ${positive ? "text-success" : "text-danger"}`} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-card px-3 py-1.5 text-sm">
      <span className="font-medium text-text-primary">XRP</span>
      <span className="font-mono font-bold text-text-primary">${data.price.toFixed(2)}</span>
      <span className={`flex items-center gap-0.5 font-mono text-xs ${positive ? "text-success" : "text-danger"}`}>
        <Icon className="h-3 w-3" />
        {positive ? "+" : ""}{data.change24h.toFixed(1)}%
      </span>
    </div>
  );
}
