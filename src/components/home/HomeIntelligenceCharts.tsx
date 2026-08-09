"use client";

import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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

  const changeData = useMemo(() => [
    { period: "24 hours", change: market?.price?.usd_24h_change ?? 0 },
    { period: "7 days", change: market?.coin?.market_data?.price_change_percentage_7d ?? 0 },
    { period: "30 days", change: market?.coin?.market_data?.price_change_percentage_30d ?? 0 },
  ], [market]);

  const circulating = market?.coin?.market_data?.circulating_supply ?? 0;
  const maximum = market?.coin?.market_data?.max_supply ?? 100_000_000_000;
  const supplyData = [
    { label: "Circulating", value: circulating },
    { label: "Not circulating", value: Math.max(0, maximum - circulating) },
  ];

  return (
    <section className="intelligence-section border-y border-surface-border" aria-labelledby="intelligence-heading">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-6 border-b border-surface-border pb-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="ascii-section-label">XRP INTELLIGENCE / LIVE DATA</p>
            <h2 id="intelligence-heading" className="mt-3 text-4xl text-text-primary sm:text-5xl">Market context at a glance.</h2>
          </div>
          <p className="text-sm leading-7 text-text-secondary">Price windows share one scale. Supply is measured against XRP&apos;s 100 billion maximum. Values update from the site&apos;s live market feed.</p>
        </div>

        <div className="grid lg:grid-cols-2">
          <figure className="chart-panel border-b border-surface-border py-8 lg:border-b-0 lg:border-r lg:pr-8">
            <figcaption>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">Price momentum</span>
              <strong className="mt-2 block text-2xl text-text-primary">Change by time window</strong>
            </figcaption>
            <div className="mt-6 h-64" aria-hidden="true">
              {market ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={changeData} layout="vertical" margin={{ left: 0, right: 20 }}>
                    <CartesianGrid stroke="var(--color-surface-border)" horizontal={false} />
                    <XAxis type="number" tickFormatter={(value) => `${value}%`} stroke="var(--color-text-secondary)" />
                    <YAxis type="category" dataKey="period" width={76} stroke="var(--color-text-secondary)" />
                    <Tooltip formatter={(value) => [`${percent.format(Number(value))}%`, "Change"]} cursor={{ fill: "var(--color-hover)" }} />
                    <Bar dataKey="change" fill="var(--color-xrp-accent)" isAnimationActive />
                  </BarChart>
                </ResponsiveContainer>
              ) : <div className="grid h-full place-items-center border border-surface-border text-sm text-text-secondary">Loading live market chart</div>}
            </div>
            <table className="metric-table mt-6 w-full text-sm">
              <caption className="sr-only">XRP percentage price change by time window</caption>
              <tbody>{changeData.map((row) => <tr key={row.period}><th scope="row">{row.period}</th><td>{market ? `${percent.format(row.change)}%` : "Loading"}</td></tr>)}</tbody>
            </table>
          </figure>

          <figure className="chart-panel py-8 lg:pl-8">
            <figcaption>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">Supply structure</span>
              <strong className="mt-2 block text-2xl text-text-primary">Circulating versus maximum supply</strong>
            </figcaption>
            <div className="mt-6 h-64" aria-hidden="true">
              {market ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={supplyData} layout="vertical" margin={{ left: 0, right: 20 }}>
                    <CartesianGrid stroke="var(--color-surface-border)" horizontal={false} />
                    <XAxis type="number" tickFormatter={(value) => compact.format(value)} stroke="var(--color-text-secondary)" />
                    <YAxis type="category" dataKey="label" width={108} stroke="var(--color-text-secondary)" />
                    <Tooltip formatter={(value) => [compact.format(Number(value)), "XRP"]} cursor={{ fill: "var(--color-hover)" }} />
                    <Bar dataKey="value" fill="var(--color-xrp-accent)" isAnimationActive />
                  </BarChart>
                </ResponsiveContainer>
              ) : <div className="grid h-full place-items-center border border-surface-border text-sm text-text-secondary">Loading live supply chart</div>}
            </div>
            <table className="metric-table mt-6 w-full text-sm">
              <caption className="sr-only">XRP supply breakdown</caption>
              <tbody>
                <tr><th scope="row">Circulating supply</th><td>{market ? compact.format(circulating) : "Loading"}</td></tr>
                <tr><th scope="row">Maximum supply</th><td>{compact.format(maximum)}</td></tr>
                <tr><th scope="row">Market capitalization</th><td>{market ? `$${compact.format(market.price?.usd_market_cap ?? 0)}` : "Loading"}</td></tr>
              </tbody>
            </table>
          </figure>
        </div>
      </div>
    </section>
  );
}
