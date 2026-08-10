"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

export interface XRPPriceData {
  price: number;
  change24h: number;
  change7d: number;
  change30d: number;
  high24h: number;
  low24h: number;
  volume24h: number;
}

interface XRPPriceContextValue {
  data: XRPPriceData | null;
  flash: "up" | "down" | null;
  connected: boolean;
}

const XRPPriceContext = createContext<XRPPriceContextValue>({
  data: null,
  flash: null,
  connected: false,
});

const API_POLL_INTERVAL = 5 * 60 * 1000; // 5 min for supplementary data

export function XRPPriceProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<XRPPriceData | null>(null);

  // One resilient first-party request replaces a noisy sitewide exchange socket.
  const fetchAPI = useCallback(async () => {
    try {
      const res = await fetch("/api/xrp-price");
      if (!res.ok) return;
      const json = await res.json();
      setData({
        price: json.price ?? 0,
        change24h: json.change24h ?? 0,
        change7d: json.change7d ?? 0,
        change30d: json.change30d ?? 0,
        high24h: json.high24h ?? 0,
        low24h: json.low24h ?? 0,
        volume24h: json.volume24h ?? 0,
      });
    } catch {
      // silent
    }
  }, []);

  useEffect(() => {
    const initialTimer = window.setTimeout(fetchAPI, 0);
    const apiInterval = setInterval(fetchAPI, API_POLL_INTERVAL);
    return () => {
      window.clearTimeout(initialTimer);
      clearInterval(apiInterval);
    };
  }, [fetchAPI]);

  return (
    <XRPPriceContext.Provider value={{ data, flash: null, connected: data !== null }}>
      {children}
    </XRPPriceContext.Provider>
  );
}

export function useXRPPrice() {
  return useContext(XRPPriceContext);
}
