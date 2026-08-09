"use client";

import { useMemo, useState } from "react";

const inputClass =
  "mt-2 w-full rounded-lg border border-surface-border bg-surface px-3 py-2.5 font-mono text-sm text-text-primary outline-none transition focus:border-xrp-accent/60 focus:ring-2 focus:ring-xrp-accent/15";

const cardClass = "rounded-xl border border-surface-border bg-surface-elevated p-4";

function number(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(parsed, 0) : 0;
}

function usd(value: number, compact = false) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 2 : 2,
  }).format(value);
}

export function XRPMarketCapCalculator() {
  const [price, setPrice] = useState("5");
  const [circulating, setCirculating] = useState("60");

  const result = useMemo(() => {
    const targetPrice = number(price);
    const circulatingSupply = number(circulating) * 1_000_000_000;
    return {
      circulatingMarketCap: targetPrice * circulatingSupply,
      fullyDilutedValue: targetPrice * 100_000_000_000,
      circulatingShare: Math.min((circulatingSupply / 100_000_000_000) * 100, 100),
    };
  }, [price, circulating]);

  return (
    <GuideTool title="XRP valuation reality check" description="Convert any XRP price target into the market value it would imply. This does not predict the price. It tests the scale of a claim.">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-text-secondary">
          Target XRP price
          <input aria-label="Target XRP price in dollars" className={inputClass} min="0" step="0.01" type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <label className="text-sm font-medium text-text-secondary">
          Circulating supply estimate, billions
          <input aria-label="Circulating XRP supply in billions" className={inputClass} min="0" max="100" step="0.1" type="number" value={circulating} onChange={(event) => setCirculating(event.target.value)} />
        </label>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3" aria-live="polite">
        <Result label="Implied market cap" value={usd(result.circulatingMarketCap, true)} />
        <Result label="Fully diluted value" value={usd(result.fullyDilutedValue, true)} />
        <Result label="Supply assumption" value={`${result.circulatingShare.toFixed(1)}%`} />
      </div>
      <p className="mt-4 text-xs leading-5 text-text-secondary">Market capitalization is price multiplied by the supply counted as circulating. Fully diluted value uses the original 100 billion XRP supply. Neither figure measures cash flowing into the asset.</p>
    </GuideTool>
  );
}

export function XRPPurchaseCostCalculator() {
  const [cash, setCash] = useState("1000");
  const [marketPrice, setMarketPrice] = useState("2");
  const [spread, setSpread] = useState("0.5");
  const [tradingFee, setTradingFee] = useState("0.4");
  const [depositFee, setDepositFee] = useState("0");
  const [withdrawalXrp, setWithdrawalXrp] = useState("0");

  const result = useMemo(() => {
    const budget = number(cash);
    const referencePrice = number(marketPrice);
    const deposit = Math.min(number(depositFee), budget);
    const usableCash = budget - deposit;
    const fee = usableCash * (number(tradingFee) / 100);
    const purchaseCash = Math.max(usableCash - fee, 0);
    const effectivePrice = referencePrice * (1 + number(spread) / 100);
    const bought = effectivePrice > 0 ? purchaseCash / effectivePrice : 0;
    const received = Math.max(bought - number(withdrawalXrp), 0);
    const baselineXrp = referencePrice > 0 ? budget / referencePrice : 0;
    return {
      fee,
      effectivePrice,
      received,
      frictionXrp: Math.max(baselineXrp - received, 0),
      effectiveCost: received > 0 ? budget / received : 0,
    };
  }, [cash, depositFee, marketPrice, spread, tradingFee, withdrawalXrp]);

  return (
    <GuideTool title="True XRP purchase cost calculator" description="Model the spread, trading fee, funding charge, and withdrawal cost together. Use the numbers shown on an exchange's final order preview.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MoneyInput label="Cash budget" value={cash} onChange={setCash} />
        <MoneyInput label="Reference XRP price" value={marketPrice} onChange={setMarketPrice} />
        <PercentInput label="Quoted spread" value={spread} onChange={setSpread} />
        <PercentInput label="Trading fee" value={tradingFee} onChange={setTradingFee} />
        <MoneyInput label="Funding fee" value={depositFee} onChange={setDepositFee} />
        <label className="text-sm font-medium text-text-secondary">
          Withdrawal fee, XRP
          <input className={inputClass} min="0" step="0.000001" type="number" value={withdrawalXrp} onChange={(event) => setWithdrawalXrp(event.target.value)} />
        </label>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
        <Result label="XRP arriving" value={result.received.toLocaleString("en-US", { maximumFractionDigits: 4 })} />
        <Result label="Effective cost per XRP" value={usd(result.effectiveCost)} />
        <Result label="Trading fee" value={usd(result.fee)} />
        <Result label="XRP lost to friction" value={result.frictionXrp.toLocaleString("en-US", { maximumFractionDigits: 4 })} />
      </div>
      <p className="mt-4 text-xs leading-5 text-text-secondary">This estimate excludes taxes and price movement while an order is filling. A limit order can control price, but it may not execute.</p>
    </GuideTool>
  );
}

export function WalletDecisionTool() {
  const [frequency, setFrequency] = useState("monthly");
  const [amount, setAmount] = useState("meaningful");
  const [recovery, setRecovery] = useState("ready");
  const [features, setFeatures] = useState("basic");

  const recommendation = useMemo(() => {
    if (recovery === "not-ready") {
      return {
        title: "Start with reputable custody while you learn",
        detail: "Self-custody transfers operational risk to you. Learn recovery, practice address verification, and create a tested backup before withdrawing a meaningful balance.",
      };
    }
    if (amount === "large" || frequency === "rare") {
      return {
        title: "Hardware-backed self-custody",
        detail: "Use a hardware signing device purchased from its official channel. Keep a small mobile wallet for activity and the long-term balance behind the hardware key.",
      };
    }
    if (features === "xrpl" || frequency === "weekly") {
      return {
        title: "XRPL-focused mobile self-custody",
        detail: "An XRPL-focused wallet is the practical fit for regular signing and native ledger features. Protect the device, write down recovery data offline, and test recovery before adding more funds.",
      };
    }
    return {
      title: "Simple self-custody with a tested backup",
      detail: "A reputable mobile wallet can fit a moderate balance and occasional transfers. The important choice is a recovery process you have verified, not the longest feature list.",
    };
  }, [amount, features, frequency, recovery]);

  return (
    <GuideTool title="Choose an XRP custody model" description="Answer four questions to get a custody starting point. This is a decision aid, not a product endorsement.">
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="How often will you sign transactions?" value={frequency} onChange={setFrequency} options={[["weekly", "Weekly or more"], ["monthly", "Monthly or less"], ["rare", "Rarely, long-term holding"]]} />
        <Select label="How material would a total loss be?" value={amount} onChange={setAmount} options={[["small", "Annoying, but manageable"], ["meaningful", "Financially meaningful"], ["large", "Severely damaging"]]} />
        <Select label="Can you secure and test a recovery backup?" value={recovery} onChange={setRecovery} options={[["ready", "Yes"], ["not-ready", "Not yet"]]} />
        <Select label="Do you need native XRPL features?" value={features} onChange={setFeatures} options={[["basic", "Only send and receive"], ["xrpl", "DEX, tokens, signing, or xApps"]]} />
      </div>
      <div className="mt-5 rounded-xl border border-xrp-accent/30 bg-xrp-accent/[0.06] p-5" aria-live="polite">
        <p className="font-semibold text-text-primary">{recommendation.title}</p>
        <p className="mt-2 text-sm leading-6 text-text-secondary">{recommendation.detail}</p>
      </div>
    </GuideTool>
  );
}

const criteria = [
  ["utility", "Token utility"],
  ["usage", "Verifiable usage"],
  ["security", "Security record"],
  ["decentralization", "Control distribution"],
  ["economics", "Token economics"],
  ["liquidity", "Liquidity and custody"],
  ["disclosure", "Disclosure quality"],
] as const;

export function AltcoinResearchScorecard() {
  const [scores, setScores] = useState<Record<string, number>>(() => Object.fromEntries(criteria.map(([key]) => [key, 3])));
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const verdict = total >= 29 ? "Strong enough for deeper research" : total >= 21 ? "Mixed evidence, investigate the weak categories" : "Too many unanswered questions";

  return (
    <GuideTool title="Altcoin evidence scorecard" description="Score the evidence you can verify, not the story you hope will be true. A high score earns more research, not an automatic purchase.">
      <div className="space-y-3">
        {criteria.map(([key, label]) => (
          <label key={key} className="grid items-center gap-2 rounded-lg border border-surface-border bg-surface p-3 sm:grid-cols-[1fr_90px]">
            <span className="text-sm font-medium text-text-secondary">{label}</span>
            <select className="rounded-md border border-surface-border bg-surface-elevated px-2 py-2 text-sm text-text-primary" value={scores[key]} onChange={(event) => setScores((current) => ({ ...current, [key]: Number(event.target.value) }))}>
              {[0, 1, 2, 3, 4, 5].map((score) => <option key={score} value={score}>{score} / 5</option>)}
            </select>
          </label>
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-[140px_1fr]" aria-live="polite">
        <Result label="Evidence score" value={`${total} / 35`} />
        <div className={cardClass}>
          <p className="text-xs uppercase tracking-wider text-text-secondary">Interpretation</p>
          <p className="mt-1 font-semibold text-text-primary">{verdict}</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-text-secondary">A zero means no reliable evidence found. A five means strong primary evidence with clear methods and repeatable verification. Re-score quarterly because token supply, governance, liquidity, and usage change.</p>
    </GuideTool>
  );
}

function GuideTool({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="rounded-sm border border-xrp-accent/25 bg-surface-card p-5 sm:p-6">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-xrp-accent">Interactive tool</p>
      <h3 className="mt-2 text-xl font-bold text-text-primary">{title}</h3>
      <p className="mt-2 mb-5 text-sm leading-6 text-text-secondary">{description}</p>
      {children}
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return <div className={cardClass}><p className="text-xs uppercase tracking-wider text-text-secondary">{label}</p><p className="mt-1 font-mono text-lg font-bold text-xrp-accent">{value}</p></div>;
}

function MoneyInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="text-sm font-medium text-text-secondary">{label}, USD<input className={inputClass} min="0" step="0.01" type="number" value={value} onChange={(event) => onChange(event.target.value)} /></label>;
}

function PercentInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="text-sm font-medium text-text-secondary">{label}, percent<input className={inputClass} min="0" step="0.01" type="number" value={value} onChange={(event) => onChange(event.target.value)} /></label>;
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[][] }) {
  return <label className="text-sm font-medium text-text-secondary">{label}<select className={inputClass} value={value} onChange={(event) => onChange(event.target.value)}>{options.map(([optionValue, text]) => <option key={optionValue} value={optionValue}>{text}</option>)}</select></label>;
}
