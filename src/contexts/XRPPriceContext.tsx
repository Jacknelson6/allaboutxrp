"use client";

import { createContext, useContext, useEffect, useRef, useState, useCallback, ReactNode } from "react";

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
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const [wsConnected, setWsConnected] = useState(false);
  const prevPrice = useRef<number | null>(null);
  const apiData = useRef<Omit<XRPPriceData, "price"> | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const flashTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Fetch supplementary data from API (percentages, ranges)
  const fetchAPI = useCallback(async () => {
    try {
      const res = await fetch("/api/xrp-price");
      if (!res.ok) return;
      const json = await res.json();
      const supplementary = {
        change24h: json.change24h ?? 0,
        change7d: json.change7d ?? 0,
        change30d: json.change30d ?? 0,
        high24h: json.high24h ?? 0,
        low24h: json.low24h ?? 0,
        volume24h: json.volume24h ?? 0,
      };
      apiData.current = supplementary;

      // Update data with API price if no WS price yet
      setData((prev) => ({
        price: prev?.price ?? json.price ?? 0,
        ...supplementary,
      }));
    } catch {
      // silent
    }
  }, []);

  // Handle a new price tick
  const handlePriceTick = useCallback((newPrice: number) => {
    if (prevPrice.current !== null && newPrice !== prevPrice.current) {
      setFlash(newPrice > prevPrice.current ? "up" : "down");
      if (flashTimer.current) clearTimeout(flashTimer.current);
      flashTimer.current = setTimeout(() => setFlash(null), 600);
    }
    prevPrice.current = newPrice;

    setData((prev) => ({
      price: newPrice,
      change24h: prev?.change24h ?? apiData.current?.change24h ?? 0,
      change7d: prev?.change7d ?? apiData.current?.change7d ?? 0,
      change30d: prev?.change30d ?? apiData.current?.change30d ?? 0,
      high24h: prev?.high24h ?? apiData.current?.high24h ?? 0,
      low24h: prev?.low24h ?? apiData.current?.low24h ?? 0,
      volume24h: prev?.volume24h ?? apiData.current?.volume24h ?? 0,
    }));
  }, []);

  // WebSocket connection to Bitstamp
  const connectWS = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    const ws = new WebSocket("wss://ws.bitstamp.net");
    wsRef.current = ws;

    ws.onopen = () => {
      setWsConnected(true);
      ws.send(JSON.stringify({
        event: "bts:subscribe",
        data: { channel: "live_trades_xrpusd" },
      }));
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.event === "trade" && msg.channel === "live_trades_xrpusd") {
          const price = msg.data?.price;
          if (typeof price === "number" && price > 0) {
            handlePriceTick(price);
          }
        }
      } catch {
        // silent
      }
    };

    ws.onclose = () => {
      setWsConnected(false);
      wsRef.current = null;
      // Reconnect after 3s
      reconnectTimer.current = setTimeout(connectWS, 3000);
    };

    ws.onerror = () => {
      ws.close();
    };
  }, [handlePriceTick]);

  useEffect(() => {
    // Fetch API data immediately, then poll
    fetchAPI();
    const apiInterval = setInterval(fetchAPI, API_POLL_INTERVAL);

    // Connect WebSocket
    connectWS();

    return () => {
      clearInterval(apiInterval);
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
      if (flashTimer.current) clearTimeout(flashTimer.current);
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [fetchAPI, connectWS]);

  return (
    <XRPPriceContext.Provider value={{ data, flash, connected: data !== null || wsConnected }}>
      {children}
    </XRPPriceContext.Provider>
  );
}

export function useXRPPrice() {
  return useContext(XRPPriceContext);
}
