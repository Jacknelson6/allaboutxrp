"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export interface XRPPriceData {
  price: number;
  change24h: number;
  change7d: number;
  change30d: number;
  high24h: number;
  low24h: number;
  volume24h: number;
}

const POLL_INTERVAL = 5 * 60 * 1000; // 5 minutes

export function useXRPPrice() {
  const [data, setData] = useState<XRPPriceData | null>(null);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const prevPrice = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const fetchPrice = useCallback(async () => {
    try {
      const res = await fetch("/api/xrp-price");
      if (!res.ok) return;
      const json = await res.json();
      const newData: XRPPriceData = {
        price: json.price ?? 0,
        change24h: json.change24h ?? 0,
        change7d: json.change7d ?? 0,
        change30d: json.change30d ?? 0,
        high24h: json.high24h ?? 0,
        low24h: json.low24h ?? 0,
        volume24h: json.volume24h ?? 0,
      };

      if (prevPrice.current !== null && newData.price !== prevPrice.current) {
        setFlash(newData.price > prevPrice.current ? "up" : "down");
        setTimeout(() => setFlash(null), 600);
      }
      prevPrice.current = newData.price;
      setData(newData);
    } catch {
      // silent
    }
  }, []);

  useEffect(() => {
    fetchPrice();
    timerRef.current = setInterval(fetchPrice, POLL_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [fetchPrice]);

  return { data, flash, connected: data !== null };
}
