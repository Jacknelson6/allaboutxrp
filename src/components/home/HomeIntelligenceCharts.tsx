"use client";

import { useEffect, useState } from "react";

interface MarketData {
  price?: { usd?: number; usd_24h_change?: number; usd_market_cap?: number; usd_24h_vol?: number };
  coin?: { market_data?: { price_change_percentage_7d?: number; price_change_percentage_30d?: number; circulating_supply?: number; max_supply?: number } };
}

const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 });
const percent = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2, signDisplay: "always" });

export default function HomeIntelligenceCharts() {
  const [market, setMarket] = useState<MarketData | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/market-data", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => setMarket(data))
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const circulating = market?.coin?.market_data?.circulating_supply ?? 0;
  const maximum = market?.coin?.market_data?.max_supply ?? 100_000_000_000;
  const price = market?.price?.usd;
  const rows = [
    ["Price", price === undefined ? "Loading" : `$${price.toLocaleString("en-US", { maximumFractionDigits: 4 })}`],
    ["24-hour change", market ? `${percent.format(market.price?.usd_24h_change ?? 0)}%` : "Loading"],
    ["7-day change", market ? `${percent.format(market.coin?.market_data?.price_change_percentage_7d ?? 0)}%` : "Loading"],
    ["30-day change", market ? `${percent.format(market.coin?.market_data?.price_change_percentage_30d ?? 0)}%` : "Loading"],
    ["Market capitalization", market ? `$${compact.format(market.price?.usd_market_cap ?? 0)}` : "Loading"],
    ["24-hour volume", market ? `$${compact.format(market.price?.usd_24h_vol ?? 0)}` : "Loading"],
    ["Circulating supply", market ? compact.format(circulating) : "Loading"],
    ["Maximum supply", compact.format(maximum)],
  ];

  return (
    <section className="intelligence-section border-y border-surface-border" aria-labelledby="intelligence-heading">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-6 border-b border-surface-border pb-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="ascii-section-label">XRP INTELLIGENCE / LIVE DATA</p>
            <h2 id="intelligence-heading" className="mt-3 text-4xl text-text-primary sm:text-5xl">The XRP market record.</h2>
          </div>
          <p className="text-sm leading-7 text-text-secondary">A compact, machine-readable snapshot from the live market feed. Values are context, not a price forecast.</p>
        </div>
        <table className="market-record mt-8 w-full">
          <caption className="sr-only">Current XRP market and supply data</caption>
          <tbody>{rows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody>
        </table>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-text-secondary">
          <span>Source: live market-data endpoint</span>
          <a href="/live-chart" className="text-link text-xs">Open detailed live data</a>
        </div>
      </div>
    </section>
  );
}
