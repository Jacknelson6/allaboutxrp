"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowUpDown, ExternalLink, RefreshCw } from "lucide-react";

interface MarketData {
  price?: { usd?: number; usd_24h_change?: number; usd_market_cap?: number; usd_24h_vol?: number };
  coin?: { market_data?: {
    price_change_percentage_7d?: number;
    price_change_percentage_30d?: number;
    circulating_supply?: number;
    total_supply?: number;
    max_supply?: number;
    high_24h?: { usd?: number };
    low_24h?: { usd?: number };
  } };
  tickers?: Array<{ market?: { name?: string }; base?: string; target?: string; last?: number; converted_volume?: { usd?: number }; trade_url?: string }>;
}

const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 });
const signed = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2, signDisplay: "always" });

function priceLabel(value?: number) {
  if (value === undefined) return "Unavailable";
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
}

export default function LiveChartContent() {
  const [data, setData] = useState<MarketData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [amount, setAmount] = useState("1");
  const [direction, setDirection] = useState<"xrp-usd" | "usd-xrp">("xrp-usd");

  const refresh = useCallback(async () => {
    setStatus("loading");
    try {
      const response = await fetch("/api/market-data", { cache: "no-store" });
      if (!response.ok) throw new Error("market feed unavailable");
      setData(await response.json());
      setUpdatedAt(new Date());
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    refresh();
    const interval = window.setInterval(refresh, 120_000);
    return () => window.clearInterval(interval);
  }, [refresh]);

  const market = data?.coin?.market_data;
  const price = data?.price?.usd ?? 0;
  const result = direction === "xrp-usd" ? (Number(amount) || 0) * price : price ? (Number(amount) || 0) / price : 0;
  const metrics = [
    ["XRP price", priceLabel(data?.price?.usd)],
    ["24-hour change", data?.price?.usd_24h_change === undefined ? "Unavailable" : `${signed.format(data.price.usd_24h_change)}%`],
    ["7-day change", market?.price_change_percentage_7d === undefined ? "Unavailable" : `${signed.format(market.price_change_percentage_7d)}%`],
    ["30-day change", market?.price_change_percentage_30d === undefined ? "Unavailable" : `${signed.format(market.price_change_percentage_30d)}%`],
    ["Market capitalization", data?.price?.usd_market_cap === undefined ? "Unavailable" : `$${compact.format(data.price.usd_market_cap)}`],
    ["24-hour volume", data?.price?.usd_24h_vol === undefined ? "Unavailable" : `$${compact.format(data.price.usd_24h_vol)}`],
    ["Circulating supply", market?.circulating_supply === undefined ? "Unavailable" : `${compact.format(market.circulating_supply)} XRP`],
    ["Maximum supply", market?.max_supply === undefined ? "100B XRP" : `${compact.format(market.max_supply)} XRP`],
  ];

  return (
    <div className="site-container py-10 sm:py-14">
      <div className="live-status border-y border-surface-border py-4">
        <span className="flex items-center gap-2"><i data-status={status} />{status === "ready" ? "Market feed connected" : status === "error" ? "Market feed unavailable" : "Refreshing market feed"}</span>
        <span>{updatedAt ? `Updated ${updatedAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", timeZoneName: "short" })}` : "Waiting for first update"}</span>
        <button type="button" onClick={refresh} disabled={status === "loading"}><RefreshCw className="h-4 w-4" aria-hidden="true" />Refresh</button>
      </div>

      <div className="grid gap-12 py-10 lg:grid-cols-[1.35fr_0.65fr]">
        <section aria-labelledby="market-snapshot-heading">
          <p className="editorial-kicker">MARKET SNAPSHOT</p>
          <h2 id="market-snapshot-heading" className="mt-3 text-3xl text-text-primary sm:text-4xl">Current XRP reference data</h2>
          <table className="market-record mt-7 w-full"><caption className="sr-only">Current XRP market data</caption><tbody>{metrics.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{status === "loading" && !data ? "Loading" : value}</td></tr>)}</tbody></table>
          <p className="mt-4 text-xs leading-5 text-text-secondary">Aggregated third-party market data can differ by venue and update time. Verify an executable price with your venue before making a decision.</p>
        </section>

        <aside className="border-l-0 border-surface-border lg:border-l lg:pl-8" aria-labelledby="converter-heading">
          <p className="editorial-kicker">CONVERTER</p>
          <h2 id="converter-heading" className="mt-3 text-2xl text-text-primary">XRP and U.S. dollars</h2>
          <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.08em] text-text-secondary" htmlFor="live-converter">Amount in {direction === "xrp-usd" ? "XRP" : "USD"}</label>
          <div className="mt-2 flex"><input id="live-converter" type="number" value={amount} onChange={(event) => setAmount(event.target.value)} className="min-h-12 min-w-0 flex-1 border border-surface-border bg-surface-primary px-3 text-text-primary outline-none focus:border-xrp-accent" /><button type="button" onClick={() => setDirection((value) => value === "xrp-usd" ? "usd-xrp" : "xrp-usd")} className="flex min-h-12 w-12 items-center justify-center border-y border-r border-surface-border" aria-label="Reverse conversion"><ArrowUpDown className="h-4 w-4" aria-hidden="true" /></button></div>
          <p className="mt-5 border-y border-surface-border py-5 text-2xl font-semibold text-text-primary">{direction === "xrp-usd" ? `$${result.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : `${result.toLocaleString("en-US", { maximumFractionDigits: 4 })} XRP`}</p>
          <p className="mt-3 text-xs leading-5 text-text-secondary">Reference calculation only. It excludes spreads, fees, slippage, and taxes.</p>
        </aside>
      </div>

      <section className="border-t border-surface-border pt-10" aria-labelledby="markets-heading">
        <div className="flex items-end justify-between gap-6 border-b border-surface-border pb-5"><div><p className="editorial-kicker">MARKETS</p><h2 id="markets-heading" className="mt-2 text-3xl text-text-primary">Venue observations</h2></div><span className="text-xs text-text-secondary">First 10 reported pairs</span></div>
        <div className="overflow-x-auto"><table className="data-ledger w-full"><thead><tr><th>Venue</th><th>Pair</th><th>Last price</th><th>Reported volume</th><th><span className="sr-only">Link</span></th></tr></thead><tbody>{(data?.tickers ?? []).slice(0, 10).map((ticker, index) => <tr key={`${ticker.market?.name}-${ticker.base}-${ticker.target}-${index}`}><th scope="row">{ticker.market?.name ?? "Unknown"}</th><td>{ticker.base}/{ticker.target}</td><td>{ticker.last?.toLocaleString("en-US", { maximumFractionDigits: 6 }) ?? "Unavailable"}</td><td>{ticker.converted_volume?.usd === undefined ? "Unavailable" : `$${compact.format(ticker.converted_volume.usd)}`}</td><td>{ticker.trade_url ? <a href={ticker.trade_url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${ticker.market?.name ?? "market"}`}><ExternalLink className="h-4 w-4" /></a> : null}</td></tr>)}</tbody></table></div>
        {status === "error" ? <p className="border-b border-surface-border py-8 text-sm text-text-secondary">The upstream feed did not respond. Use refresh to try again.</p> : null}
      </section>
    </div>
  );
}
