"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Unlock, ArrowRight, TrendingUp, Eye, ChevronDown, ExternalLink, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import StatCard from "@/components/shared/StatCard";

const sections = [
  { id: "what-is-escrow", label: "What is Escrow?" },
  { id: "ripple-55b", label: "The 55B Lockup" },
  { id: "monthly-releases", label: "Monthly Releases" },
  { id: "price-impact", label: "Price Impact" },
  { id: "tracker", label: "Tracker & Data" },
  { id: "misconceptions", label: "Misconceptions" },
  { id: "faq", label: "FAQ" },
];

const escrowTypes = [
  { type: "Time-based", how: "Funds release after a specific timestamp (finishAfter)", example: "Scheduled payments, vesting" },
  { type: "Condition-based", how: "Funds release when a cryptographic condition is fulfilled", example: "Atomic swaps, Interledger" },
  { type: "Combination", how: "Both time AND condition must be met", example: "Complex contractual agreements" },
];

const historicalData = [
  { period: "2018–2019", pattern: "~300M used, ~700M re-escrowed", notes: "Early escrow period" },
  { period: "2020–2021", pattern: "~200-300M used, ~700-800M re-escrowed", notes: "SEC lawsuit period" },
  { period: "2022–2023", pattern: "~200-300M used, ~700-800M re-escrowed", notes: "Conservative approach" },
  { period: "2024", pattern: "3.22B XRP sold through year", notes: "XRP near $0.50 most of year" },
  { period: "Jan 2025", pattern: "300M used, 700M re-escrowed", notes: "Re-locked to March 2028" },
  { period: "Feb 2025", pattern: "300M used, 700M re-escrowed", notes: "Standard pattern" },
];

const trackerTools = [
  { tool: "XRPScan Balances", shows: "Current escrow totals, circulating supply, burned XRP", url: "https://xrpscan.com/balances" },
  { tool: "XRPScan Metrics", shows: "Network statistics, account data", url: "https://xrpscan.com/metrics" },
  { tool: "Whale Alert", shows: "Real-time large transaction notifications", url: "https://whale-alert.io" },
  { tool: "Ripple Quarterly Reports", shows: "Official sales data, escrow updates", url: "https://ripple.com/insights" },
];

const misconceptions = [
  { myth: "Ripple dumps 1 billion XRP on the market every month", reality: "Ripple unlocks 1 billion XRP monthly — an automatic, scheduled event. They typically re-escrow 700-800 million immediately. Only 200-300 million enters potential circulation." },
  { myth: "Ripple controls XRP and can manipulate the price", reality: "The escrow is enforced at the protocol level. Ripple cannot access escrowed funds early — the code won't allow it." },
  { myth: "The escrow will flood the market when it ends", reality: "Because Ripple re-escrows 60-80% each month, the system extends continuously. At current rates, full depletion is many years away." },
  { myth: "XRP has infinite inflation", reality: "XRP has a fixed supply of 100 billion. No new XRP can be created. The escrow controls the pace of pre-existing XRP entering circulation. Plus, XRP is deflationary — fees burn XRP permanently." },
  { myth: "Escrow unlocks crash the price", reality: "Monthly unlocks are fully predictable and priced in. Data shows no consistent correlation between unlock dates and price drops." },
];

const faqItems = [
  { q: "What is XRP escrow?", a: "A native feature of the XRP Ledger that locks XRP in trustless, on-chain contracts. Ripple placed 55 billion XRP into escrow in December 2017." },
  { q: "How much XRP unlocks each month?", a: "Up to 1 billion XRP unlocks on the 1st of every month. Ripple typically re-escrows 700-800 million and retains 200-300 million." },
  { q: "Can Ripple access the escrow early?", a: "No. The escrow is enforced at the protocol level by the XRP Ledger consensus. Not even Ripple can access funds before the release timestamp." },
  { q: "How much XRP is still in escrow?", a: "Approximately 33.9 billion XRP as of February 2026, down from the original 55 billion." },
  { q: "Does escrow affect XRP price?", a: "The net monthly addition of 200-300M XRP (~0.3-0.5% of circulating supply) is relatively small and largely priced in by the market." },
];

export default function EscrowContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-5 text-[13px] text-text-secondary">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="hover:text-text-primary transition-colors duration-200">Home</Link></li>
          <li className="text-white/15">/</li>
          <li className="text-text-primary">Escrow</li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="flex items-center gap-3">
        <div className="text-xrp-accent">
          <Lock className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-[32px] font-bold tracking-[-0.04em] text-text-primary">
            XRP <span className="gradient-text">Escrow</span>
          </h1>
          <p className="mt-1 text-text-secondary">
            The complete guide to <Link href="/learn/what-is-ripple" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">Ripple&apos;s</Link> escrow system and <Link href="/learn/what-is-xrp" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">XRP</Link> supply management
          </p>
        </div>
      </div>

      {/* Section nav */}
      <nav className="mt-6 flex flex-wrap gap-2" aria-label="Page sections">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="rounded-full border border-white/[0.06] px-3 py-1 text-xs text-text-secondary hover:text-xrp-accent hover:border-xrp-accent/30 transition-colors">
            {s.label}
          </a>
        ))}
      </nav>


      {/* Stats */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Supply" value="100B" icon={<TrendingUp className="h-4 w-4" />} />
        <StatCard label="In Escrow" value="~33.9B" icon={<Lock className="h-4 w-4" />} />
        <StatCard label="Circulating" value="~60B" icon={<Unlock className="h-4 w-4" />} />
        <StatCard label="Monthly Unlock" value="1B" icon={<ArrowRight className="h-4 w-4" />} />
      </div>

      {/* What is Escrow */}
      <Section id="what-is-escrow" title="What is XRP Escrow?" index={1} total={7}>
        <p className="text-text-secondary leading-relaxed">
          Escrow is a <strong className="text-text-primary">native feature of the XRP Ledger</strong> that allows XRP to be locked in a trustless, on-chain smart contract — no third party required.
        </p>
        <p className="mt-3 text-text-secondary leading-relaxed">
          Think of it like a time-locked vault built directly into the blockchain. Once XRP is placed in escrow, nobody — not even the creator — can touch those funds until the release conditions are satisfied.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            { name: "EscrowCreate", desc: "Locks XRP into an escrow object on the ledger." },
            { name: "EscrowFinish", desc: "Releases escrowed funds to the destination." },
            { name: "EscrowCancel", desc: "Returns funds if cancellation deadline has passed." },
          ].map((tx) => (
            <div key={tx.name} className="rounded-lg border border-white/[0.06] p-4">
              <code className="font-mono text-sm text-xrp-accent">{tx.name}</code>
              <p className="mt-1 text-sm text-text-secondary">{tx.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-lg font-semibold text-text-primary">Types of Escrow</h3>
        <div className="mt-3 overflow-x-auto rounded-lg border border-white/[0.06]">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/[0.06]">
              <tr>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-text-secondary">Type</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-text-secondary">How It Works</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-text-secondary">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {escrowTypes.map((row) => (
                <tr key={row.type} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-xrp-accent">{row.type}</td>
                  <td className="px-4 py-3 text-text-secondary">{row.how}</td>
                  <td className="px-4 py-3 text-text-secondary">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* The 55B Lockup */}
      <Section id="ripple-55b" title="Ripple's 55 Billion XRP Escrow" index={2} total={7}>
        <div className="rounded-lg border border-xrp-accent/20 p-5">
          <div className="flex items-center gap-2 text-xrp-accent">
            <Lock className="h-5 w-5" />
            <span className="font-semibold">December 16, 2017</span>
          </div>
          <p className="mt-2 font-mono text-2xl font-bold text-text-primary">55,000,000,000 XRP</p>
          <p className="mt-1 text-sm text-text-secondary">Locked into cryptographically enforced escrow contracts on the <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link></p>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-text-primary">Why They Did It</h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {[
            { label: "Predictability", desc: "Everyone can see exactly when XRP becomes available" },
            { label: "Transparency", desc: "All escrow transactions are publicly verifiable" },
            { label: "Trust", desc: "Ripple mathematically cannot access funds early" },
            { label: "Supply Ceiling", desc: "Hard cap of 1 billion XRP per month" },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 rounded-lg border border-white/[0.06] p-3">
              <CheckCircle className="h-4 w-4 shrink-0 text-success mt-0.5" />
              <div>
                <p className="font-semibold text-text-primary text-sm">{item.label}</p>
                <p className="text-xs text-text-secondary mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Monthly Releases */}
      <Section id="monthly-releases" title="Monthly Escrow Releases" index={3} total={7}>
        <div className="rounded-lg border border-white/[0.06] p-5">
          <div className="flex items-center gap-2">
            <Unlock className="h-5 w-5 text-xrp-accent" />
            <h3 className="font-semibold text-text-primary">How It Works</h3>
          </div>
          <p className="mt-2 text-sm text-text-secondary">
            On the <strong className="text-text-primary">1st of every month</strong>, escrow contracts unlock up to <span className="font-mono text-xrp-accent">1,000,000,000 XRP</span>. <strong className="text-text-primary">Unlocked ≠ sold</strong>.
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] px-3 py-2">
              <span className="text-xs text-text-secondary">Keep:</span>
              <span className="font-mono text-sm text-warning">200-300M</span>
            </div>
            <ArrowRight className="hidden h-4 w-4 text-text-secondary sm:block" />
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] px-3 py-2">
              <span className="text-xs text-text-secondary">Re-escrow:</span>
              <span className="font-mono text-sm text-success">700-800M</span>
            </div>
          </div>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-text-primary">Historical Pattern</h3>
        <div className="mt-3 overflow-x-auto rounded-lg border border-white/[0.06]">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/[0.06]">
              <tr>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-text-secondary">Period</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-text-secondary">Monthly Pattern</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-text-secondary">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {historicalData.map((row) => (
                <tr key={row.period} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-xrp-accent whitespace-nowrap">{row.period}</td>
                  <td className="px-4 py-3 text-text-secondary">{row.pattern}</td>
                  <td className="px-4 py-3 text-text-secondary text-xs">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Price Impact */}
      <Section id="price-impact" title="How Escrow Impacts XRP Price" index={4} total={7}>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: "Max monthly release", value: "1B XRP", sub: "Protocol-enforced ceiling" },
            { label: "Net monthly increase", value: "200-300M", sub: "~0.3-0.5% of circulating supply" },
            { label: "Schedule", value: "Fixed", sub: "1st of every month" },
            { label: "Deflationary offset", value: "14.26M burned", sub: "Fees burn XRP permanently" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-white/[0.06] p-4">
              <p className="text-xs uppercase tracking-wider text-text-secondary">{item.label}</p>
              <p className="mt-1 font-mono text-xl font-bold text-text-primary">{item.value}</p>
              <p className="mt-1 text-xs text-text-secondary">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-warning/20 p-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <span className="text-sm font-semibold text-warning">The &quot;Ripple Dumping&quot; FUD</span>
          </div>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s</Link> actual XRP sales are a fraction of what critics claim. Most institutional sales happen OTC. The net new supply represents ~0.3-0.5% of circulating supply — comparable to Bitcoin&apos;s mining inflation. Additionally, <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link> transactions on the XRPL burn XRP fees, creating deflationary pressure that partially offsets escrow releases.
          </p>
        </div>
      </Section>

      {/* Tracker */}
      <Section id="tracker" title="Escrow Tracker & Data" index={5} total={7}>
        <h3 className="text-lg font-semibold text-text-primary">Key Numbers (February 2026)</h3>
        <div className="mt-3 overflow-x-auto rounded-lg border border-white/[0.06]">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-white/[0.04]">
              {[
                ["Total XRP Supply", "100,000,000,000"],
                ["Circulating Supply", "~60,000,000,000"],
                ["In Escrow", "~33,900,000,000"],
                ["Burned (fees)", "~14,260,000"],
                ["Monthly Unlock", "1,000,000,000"],
                ["Typical Re-escrow", "700-800M"],
                ["Net Monthly", "~200-300M"],
              ].map(([label, value]) => (
                <tr key={label} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-3 text-text-secondary">{label}</td>
                  <td className="px-4 py-3 font-mono text-text-primary text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-text-primary">Where to Track</h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {trackerTools.map((t) => (
            <a key={t.tool} href={t.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg border border-white/[0.06] p-3 hover:border-xrp-accent/30 transition-colors">
              <Eye className="h-4 w-4 shrink-0 text-xrp-accent mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-text-primary text-sm">{t.tool}</p>
                <p className="text-xs text-text-secondary mt-0.5">{t.shows}</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-text-secondary" />
            </a>
          ))}
        </div>
      </Section>

      {/* Misconceptions */}
      <Section id="misconceptions" title="Common Misconceptions" index={6} total={7}>
        <div className="space-y-3">
          {misconceptions.map((m, i) => (
            <div key={i} className="rounded-lg border border-white/[0.06] p-4">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-danger shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-danger text-sm">&ldquo;{m.myth}&rdquo;</p>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    <span className="text-success font-medium">Reality: </span>{m.reality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="Frequently Asked Questions" index={7} total={7}>
        <div className="space-y-2">
          {faqItems.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className={`rounded-lg border transition-colors ${isOpen ? "border-xrp-accent/30" : "border-white/[0.06]"}`}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-medium text-sm ${isOpen ? "text-xrp-accent" : "text-text-primary"}`}>{item.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180 text-xrp-accent" : "text-text-secondary"}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] px-4 py-3">
                    <p className="text-sm text-text-secondary leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Continue Reading */}
      <Section id="continue" title="Continue Reading" index={undefined} total={undefined}>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/learn/what-is-xrp" className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 transition-all duration-300 hover:border-xrp-accent/20 hover:translate-y-[-2px]">
            <h3 className="font-semibold text-text-primary">What is XRP?</h3>
            <p className="mt-1 text-xs text-text-secondary">Complete guide to XRP and the XRP Ledger</p>
          </Link>
          <Link href="/learn/rlusd" className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 transition-all duration-300 hover:border-xrp-accent/20 hover:translate-y-[-2px]">
            <h3 className="font-semibold text-text-primary">RLUSD & XRP</h3>
            <p className="mt-1 text-xs text-text-secondary">How Ripple&apos;s stablecoin helps XRP</p>
          </Link>
          <Link href="/learn/history" className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 transition-all duration-300 hover:border-xrp-accent/20 hover:translate-y-[-2px]">
            <h3 className="font-semibold text-text-primary">History & Timeline</h3>
            <p className="mt-1 text-xs text-text-secondary">Every milestone from 2011 to present</p>
          </Link>
          <Link href="/learn/get-started" className="rounded-xl border border-xrp-accent/20 bg-xrp-accent/[0.03] p-5 transition-all duration-300 hover:border-xrp-accent/30 hover:translate-y-[-2px]">
            <h3 className="font-semibold text-text-primary">How to Buy XRP</h3>
            <p className="mt-1 text-xs text-text-secondary">Step-by-step beginner guide</p>
          </Link>
        </div>
      </Section>

      {/* Get Started CTA */}
      <div className="mt-12 rounded-2xl border border-xrp-accent/20 bg-gradient-to-br from-xrp-accent/[0.04] to-transparent p-8 text-center">
        <h2 className="text-xl font-bold text-text-primary">Understanding XRP Supply?</h2>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">
          Now that you understand how escrow works, you know XRP&apos;s supply is transparent and predictable. Ready to start accumulating?
        </p>
        <div className="mt-5">
          <Link href="/learn/get-started" className="btn-primary">
            Learn How to Buy XRP →
          </Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 rounded-2xl border border-xrp-accent/20 p-8">
        <h2 className="text-xl font-bold text-text-primary">The Bottom Line</h2>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">
          XRP&apos;s escrow system is one of the most transparent supply management mechanisms in crypto. After 8+ years of operation, it has delivered exactly what it promised.
        </p>
        <p className="mt-3 text-xs text-text-secondary/60">Last updated: February 2026</p>
      </div>
    </div>
  );
}

function Section({ id, title, children, index, total }: { id: string; title: string; children: React.ReactNode; index?: number; total?: number }) {
  return (
    <section id={id} className="py-12 scroll-mt-20" aria-label={title}>
      <div className="section-divider mb-8" />
      {index !== undefined && total !== undefined && (
        <div className="flex items-center gap-3 mb-4">
          <span className="section-number">
            <span className="current">{String(index).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </span>
          <span className="text-[11px] font-medium uppercase tracking-widest text-white/20">·</span>
          <span className="text-[11px] font-medium uppercase tracking-widest text-white/20">{title}</span>
        </div>
      )}
      <h2 className="text-[24px] font-bold tracking-[-0.03em] text-text-primary">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
