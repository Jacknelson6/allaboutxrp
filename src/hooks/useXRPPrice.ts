"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export interface XRPPriceData {
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  quoteVolume24h: number;
}

interface BinanceTicker {
  e: string;
  s: string;
  c: string;
  P: string;
  h: string;
  l: string;
  v: string;
  q: string;
}

const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/xrpusdt@ticker";
const RECONNECT_BASE_MS = 1000;
const MAX_RECONNECT_MS = 30000;

export function useXRPPrice() {
  const [data, setData] = useState<XRPPriceData | null>(null);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const [connected, setConnected] = useState(false);
  const prevPrice = useRef<number | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttempt = useRef(0);
  const reconnectTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const unmounted = useRef(false);

  const applyPrice = useCallback((newData: XRPPriceData) => {
    if (prevPrice.current !== null && newData.price !== prevPrice.current) {
      setFlash(newData.price > prevPrice.current ? "up" : "down");
      setTimeout(() => setFlash(null), 600);
    }
    prevPrice.current = newData.price;
    setData(newData);
  }, []);

  // Fallback: fetch from /api/price (CoinGecko)
  const fetchFallback = useCallback(async () => {
    try {
      const res = await fetch("/api/price");
      if (!res.ok) return;
      const json = await res.json();
      applyPrice({
        price: json.price,
        change24h: json.change24h,
        high24h: 0,
        low24h: 0,
        volume24h: 0,
        quoteVolume24h: 0,
      });
    } catch {
      // silent
    }
  }, [applyPrice]);

  useEffect(() => {
    unmounted.current = false;

    function connect() {
      if (unmounted.current) return;

      const ws = new WebSocket(BINANCE_WS_URL);
      wsRef.current = ws;

      ws.onopen = () => {
        if (unmounted.current) { ws.close(); return; }
        setConnected(true);
        reconnectAttempt.current = 0;
      };

      ws.onmessage = (event) => {
        try {
          const ticker = JSON.parse(event.data) as BinanceTicker;
          applyPrice({
            price: parseFloat(ticker.c),
            change24h: parseFloat(ticker.P),
            high24h: parseFloat(ticker.h),
            low24h: parseFloat(ticker.l),
            volume24h: parseFloat(ticker.v),
            quoteVolume24h: parseFloat(ticker.q),
          });
        } catch {
          // ignore malformed
        }
      };

      ws.onclose = () => {
        if (unmounted.current) return;
        setConnected(false);
        scheduleReconnect();
      };

      ws.onerror = () => {
        ws.close();
      };
    }

    function scheduleReconnect() {
      const delay = Math.min(
        RECONNECT_BASE_MS * Math.pow(2, reconnectAttempt.current),
        MAX_RECONNECT_MS
      );
      reconnectAttempt.current++;
      reconnectTimer.current = setTimeout(connect, delay);
    }

    // Start with fallback fetch, then connect WS
    fetchFallback();
    connect();

    return () => {
      unmounted.current = true;
      clearTimeout(reconnectTimer.current);
      wsRef.current?.close();
    };
  }, [applyPrice, fetchFallback]);

  return { data, flash, connected };
}
