"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { HomeMarketData } from "./market-format";

/**
 * One live market fetch for the whole homepage.
 *
 * The ticker strip at the top of the page and the market-data band further
 * down both need the same numbers. This provider performs the single
 * `/api/market-data` request the previous market-record section already made
 * (same endpoint, same in-memory server cache, same fallbacks) and shares the
 * result, so densifying the page did not double the network cost.
 *
 * Server components can be passed through as `children` — the provider only
 * wraps them, it does not force them onto the client.
 */
const HomeMarketContext = createContext<HomeMarketData | null>(null);

export function useHomeMarket(): HomeMarketData | null {
  return useContext(HomeMarketContext);
}

export default function HomeMarketProvider({ children }: { children: ReactNode }) {
  const [market, setMarket] = useState<HomeMarketData | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/market-data", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: HomeMarketData | null) => setMarket(data))
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  return <HomeMarketContext.Provider value={market}>{children}</HomeMarketContext.Provider>;
}
