"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { ArrowUpDown, ArrowUpRight, ExternalLink, RefreshCw } from "lucide-react";
import { useXRPLStream } from "@/lib/globe/useXRPLStream";

const Globe = dynamic(() => import("@/components/globe/Globe"), {
  ssr: false,
  loading: () => <div className="live-globe-loading">Preparing the ledger globe</div>,
});

interface MarketData {
  price?: { usd?: number; usd_24h_change?: number; usd_market_cap?: number; usd_24h_vol?: number };
  coin?: { market_data?: {
    price_change_percentage_7d?: number;
    price_change_percentage_30d?: number;
    circulating_supply?: number;
    max_supply?: number;
  } };
  tickers?: Array<{ market?: { name?: string }; base?: string; target?: string; last?: number; converted_volume?: { usd?: number }; trade_url?: string }>;
}

interface HolderData {
  topHolders?: Array<{ rank: number; address: string; label?: string | null; balance: number; percentage: number }>;
  distribution?: { top10?: number; others?: number };
  totalAccounts?: number;
  brackets?: Array<{ range: string; accounts: number; percentage: number }>;
}

const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 });
const signed = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2, signDisplay: "always" });

const instruments = [
  ["Price levels", "Support, resistance, and current market context", "/tools/price-alerts"],
  ["Holder distribution", "Wallet concentration and the XRP rich list", "/holders"],
  ["Whale tracker", "Large validated XRP Ledger payments", "/tools/whale-tracker"],
  ["Escrow reference", "Schedule mechanics with source limitations", "/tools/escrow-tracker"],
  ["Profit calculator", "Model entry, exit, return, and loss", "/tools/xrp-profit-calculator"],
  ["Fee calculator", "Estimate XRP Ledger transaction costs", "/tools/xrp-fee-calculator"],
] as const;

function priceLabel(value?: number) {
  if (value === undefined) return "Unavailable";
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
}

function shortAddress(address: string) {
  return address.length > 16 ? `${address.slice(0, 8)}…${address.slice(-6)}` : address;
}

export default function LiveChartContent() {
  const [data, setData] = useState<MarketData | null>(null);
  const [holders, setHolders] = useState<HolderData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [amount, setAmount] = useState("1");
  const [direction, setDirection] = useState<"xrp-usd" | "usd-xrp">("xrp-usd");
  const { transactions, arcs, stats, removeArc } = useXRPLStream();

  const refresh = useCallback(async () => {
    setStatus("loading");
    try {
      const [marketResponse, holderResponse] = await Promise.all([
        fetch("/api/market-data", { cache: "no-store" }),
        fetch("/api/xrp/holders", { cache: "no-store" }),
      ]);
      if (!marketResponse.ok) throw new Error("market feed unavailable");
      setData(await marketResponse.json());
      if (holderResponse.ok) setHolders(await holderResponse.json());
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
  const payments = useMemo(() => transactions.filter((transaction) => transaction.type === "Payment" && transaction.amount > 0).slice(0, 8), [transactions]);
  const top10 = Math.max(0, Math.min(100, holders?.distribution?.top10 ?? 0));

  return (
    <div>
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
            <p className="mt-4 text-xs leading-5 text-text-secondary">Aggregated market data can differ by venue and update time. Verify an executable price with your venue before making a decision.</p>
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
      </div>

      <section className="live-ledger-band" aria-labelledby="ledger-globe-heading">
        <div className="site-container py-14 sm:py-20">
          <div className="live-ledger-heading">
            <div><p>XRPL NETWORK / LIVE</p><h2 id="ledger-globe-heading">Watch value move across the ledger.</h2></div>
            <dl><div><dt>Transactions per second</dt><dd>{stats.tps.toFixed(1)}</dd></div><div><dt>Largest recent payment</dt><dd>{stats.largestTx ? `${compact.format(stats.largestTx)} XRP` : "Waiting"}</dd></div><div><dt>Stream</dt><dd>{stats.connected ? "Active" : "Connecting"}</dd></div></dl>
          </div>
          <div className="live-globe-layout">
            <div className="live-globe-frame"><Suspense fallback={<div className="live-globe-loading">Preparing the ledger globe</div>}><Globe arcs={arcs} onArcComplete={removeArc} /></Suspense></div>
            <div className="live-transaction-record">
              <div className="live-transaction-title"><h3>Recent payments</h3><span>{stats.connected ? "Live stream" : "Connecting"}</span></div>
              {payments.length ? payments.map((transaction) => <a key={transaction.id} href={`https://xrpscan.com/tx/${transaction.hash}`} target="_blank" rel="noopener noreferrer"><strong>{compact.format(transaction.amount)} XRP</strong><span>{shortAddress(transaction.account)} → {shortAddress(transaction.destination)}</span><time>{new Date(transaction.timestamp).toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" })}</time></a>) : <p className="live-empty-state">Waiting for validated XRP payments.</p>}
            </div>
          </div>
          <p className="live-ledger-note">The globe visualizes observed validated transactions. Location arcs are illustrative network signals, not verified physical locations of wallet owners.</p>
        </div>
      </section>

      <div className="site-container py-14 sm:py-20">
        <section className="grid gap-12 border-b border-surface-border pb-16 lg:grid-cols-[0.72fr_1.28fr]" aria-labelledby="holder-heading">
          <div>
            <p className="editorial-kicker">HOLDER DISTRIBUTION</p>
            <h2 id="holder-heading" className="mt-3 text-4xl text-text-primary">Read concentration before drawing conclusions.</h2>
            <div className="holder-concentration mt-8"><div style={{ width: `${top10}%` }} /><span>Top 10 reported addresses: {top10 ? `${top10.toFixed(2)}%` : "unavailable"}</span></div>
            <p className="mt-4 text-sm leading-6 text-text-secondary">One entity may control multiple addresses, while exchange addresses can represent many customers. Address rank is not the same as beneficial ownership.</p>
            <Link href="/holders" className="text-link mt-4 text-sm">Open the full holder analysis <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="overflow-x-auto">
            <table className="data-ledger w-full"><caption className="sr-only">Largest reported XRP addresses</caption><thead><tr><th>Rank</th><th>Address or label</th><th>Balance</th><th>Share</th></tr></thead><tbody>{(holders?.topHolders ?? []).slice(0, 8).map((holder) => <tr key={holder.address}><td>{holder.rank}</td><th scope="row">{holder.label || shortAddress(holder.address)}</th><td>{compact.format(holder.balance)} XRP</td><td>{holder.percentage.toFixed(2)}%</td></tr>)}</tbody></table>
            {!holders?.topHolders?.length ? <p className="border-b border-surface-border py-8 text-sm text-text-secondary">Holder data is currently unavailable.</p> : null}
          </div>
        </section>

        <section className="py-16" aria-labelledby="instruments-heading">
          <div className="flex items-end justify-between gap-6 border-b border-surface-border pb-5"><div><p className="editorial-kicker">RESEARCH INSTRUMENTS</p><h2 id="instruments-heading" className="mt-2 text-3xl text-text-primary">Go deeper than the price.</h2></div><Link href="/tools" className="text-link text-sm">View every tool</Link></div>
          <div className="instrument-index">{instruments.map(([title, description, href], index) => <Link key={href} href={href}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{description}</p><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>)}</div>
        </section>

        <section className="venue-observations border-t border-surface-border pt-10" aria-labelledby="markets-heading">
          <div className="flex items-end justify-between gap-6 border-b border-surface-border pb-5"><div><p className="editorial-kicker">MARKETS</p><h2 id="markets-heading" className="mt-2 text-3xl text-text-primary">Venue observations</h2></div><span className="text-xs text-text-secondary">First 10 reported pairs</span></div>
          <div className="venue-table overflow-x-auto"><table className="data-ledger w-full"><thead><tr><th>Venue</th><th>Pair</th><th>Last price</th><th>Reported volume</th><th><span className="sr-only">Link</span></th></tr></thead><tbody>{(data?.tickers ?? []).slice(0, 10).map((ticker, index) => <tr key={`${ticker.market?.name}-${ticker.base}-${ticker.target}-${index}`}><th scope="row">{ticker.market?.name ?? "Unknown"}</th><td>{ticker.base}/{ticker.target}</td><td>{ticker.last?.toLocaleString("en-US", { maximumFractionDigits: 6 }) ?? "Unavailable"}</td><td>{ticker.converted_volume?.usd === undefined ? "Unavailable" : `$${compact.format(ticker.converted_volume.usd)}`}</td><td>{ticker.trade_url ? <a href={ticker.trade_url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${ticker.market?.name ?? "market"}`}><ExternalLink className="h-4 w-4" /></a> : null}</td></tr>)}</tbody></table></div>
          {status === "error" ? <p className="border-b border-surface-border py-8 text-sm text-text-secondary">The upstream feed did not respond. Use refresh to try again.</p> : null}
        </section>
      </div>
    </div>
  );
}
