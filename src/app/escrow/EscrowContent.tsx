"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, ArrowRight, TrendingUp, Eye, ChevronDown, ExternalLink, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import StatCard from "@/components/shared/StatCard";
import Disclaimer from "@/components/shared/Disclaimer";

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
  { tool: "Whale Alert", shows: "Real-time large transaction notifications", url: "https://twitter.com/whale_alert" },
  { tool: "Ripple Quarterly Reports", shows: "Official sales data, escrow updates", url: "https://ripple.com/insights" },
];

const misconceptions = [
  {
    myth: "Ripple dumps 1 billion XRP on the market every month",
    reality: "Ripple unlocks 1 billion XRP monthly — an automatic, scheduled event. They typically re-escrow 700-800 million immediately. Only 200-300 million enters potential circulation.",
    icon: <XCircle className="h-5 w-5 text-danger" />,
  },
  {
    myth: "Ripple controls XRP and can manipulate the price",
    reality: "The escrow is enforced at the protocol level. Ripple cannot access escrowed funds early — the code won't allow it.",
    icon: <XCircle className="h-5 w-5 text-danger" />,
  },
  {
    myth: "The escrow will flood the market when it ends",
    reality: "Because Ripple re-escrows 60-80% each month, the system extends continuously. At current rates, full depletion is many years away.",
    icon: <XCircle className="h-5 w-5 text-danger" />,
  },
  {
    myth: "XRP has infinite inflation",
    reality: "XRP has a fixed supply of 100 billion. No new XRP can be created. The escrow controls the pace of pre-existing XRP entering circulation. Plus, XRP is deflationary — fees burn XRP permanently.",
    icon: <XCircle className="h-5 w-5 text-danger" />,
  },
  {
    myth: "Escrow unlocks crash the price",
    reality: "Monthly unlocks are fully predictable and priced in. Data shows no consistent correlation between unlock dates and price drops.",
    icon: <XCircle className="h-5 w-5 text-danger" />,
  },
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
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 py-12">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-xrp-accent/10 p-2.5">
              <Lock className="h-6 w-6 text-xrp-accent" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                XRP <span className="gradient-text">Escrow</span>
              </h1>
              <p className="mt-1 text-text-secondary">
                The complete guide to Ripple&apos;s escrow system and XRP supply management
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section nav */}
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Page sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-lg border border-surface-border bg-surface-card/50 px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-xrp-accent/30 hover:text-xrp-accent"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="mt-6"><Disclaimer /></div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Supply" value="100B" icon={<TrendingUp className="h-4 w-4" />} />
          <StatCard label="In Escrow" value="~33.9B" icon={<Lock className="h-4 w-4" />} delay={0.05} />
          <StatCard label="Circulating" value="~60B" icon={<Unlock className="h-4 w-4" />} delay={0.1} />
          <StatCard label="Monthly Unlock" value="1B" icon={<ArrowRight className="h-4 w-4" />} delay={0.15} />
        </div>

        {/* What is Escrow */}
        <Section id="what-is-escrow" title="What is XRP Escrow?" delay={0}>
          <p className="text-text-secondary leading-relaxed">
            Escrow is a <strong className="text-text-primary">native feature of the XRP Ledger</strong> that allows XRP to be locked in a trustless, on-chain smart contract — no third party required. The funds are held by the ledger itself and can only be released when specific conditions are met.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Think of it like a time-locked vault built directly into the blockchain. Once XRP is placed in escrow, nobody — not even the creator — can touch those funds until the release conditions are satisfied.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { name: "EscrowCreate", desc: "Locks XRP into an escrow object on the ledger with amount, destination, and release conditions." },
              { name: "EscrowFinish", desc: "Releases escrowed funds to the destination. Anyone can submit once conditions are met." },
              { name: "EscrowCancel", desc: "Returns funds to creator if cancellation deadline has passed without finishing." },
            ].map((tx, i) => (
              <motion.div
                key={tx.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-surface-border bg-surface-card/50 p-5"
              >
                <code className="font-mono text-sm text-xrp-accent">{tx.name}</code>
                <p className="mt-2 text-sm text-text-secondary">{tx.desc}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="mt-10 font-display text-lg font-semibold text-text-primary">Types of Escrow</h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-surface-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-surface-card">
                <tr>
                  <th className="px-4 py-3 font-medium text-text-secondary">Type</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">How It Works</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {escrowTypes.map((row) => (
                  <tr key={row.type} className="bg-surface-primary transition-colors hover:bg-surface-card">
                    <td className="px-4 py-3 font-mono text-xrp-accent text-xs">{row.type}</td>
                    <td className="px-4 py-3 text-text-secondary">{row.how}</td>
                    <td className="px-4 py-3 text-text-secondary">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* The 55B Lockup */}
        <Section id="ripple-55b" title="Ripple's 55 Billion XRP Escrow" delay={0}>
          <div className="rounded-xl border border-xrp-accent/20 bg-xrp-accent/[0.03] p-6">
            <div className="flex items-center gap-2 text-xrp-accent">
              <Lock className="h-5 w-5" />
              <span className="font-display font-semibold">December 16, 2017</span>
            </div>
            <p className="mt-3 text-2xl font-bold text-text-primary font-mono">55,000,000,000 XRP</p>
            <p className="mt-1 text-sm text-text-secondary">Locked into cryptographically enforced escrow contracts on the XRP Ledger</p>
          </div>

          <h3 className="mt-8 font-display text-lg font-semibold text-text-primary">Why They Did It</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Predictability", desc: "Everyone can see exactly when XRP becomes available" },
              { label: "Transparency", desc: "All escrow transactions are publicly verifiable on the XRPL" },
              { label: "Trust", desc: "Ripple mathematically cannot access funds early" },
              { label: "Supply Ceiling", desc: "Hard cap of 1 billion XRP per month can enter circulation" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 rounded-xl border border-surface-border bg-surface-card/50 p-4"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-success mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary text-sm">{item.label}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="mt-8 font-display text-lg font-semibold text-text-primary">The Structure</h3>
          <p className="mt-3 text-text-secondary leading-relaxed text-sm">
            Originally announced as 55 contracts of 1 billion XRP each, expiring monthly from January 2018 through June 2022. The on-chain implementation used <strong className="text-text-primary">25 contracts</strong> of 1B each (Jan 2018 – Jan 2020), then <strong className="text-text-primary">60 contracts</strong> of 500M each with two expiring per month (Feb 2020 – Jul 2022). Same total, same monthly maximum.
          </p>
        </Section>

        {/* Monthly Releases */}
        <Section id="monthly-releases" title="Monthly Escrow Releases" delay={0}>
          <div className="rounded-xl border border-surface-border bg-surface-card/50 p-6">
            <div className="flex items-center gap-2">
              <Unlock className="h-5 w-5 text-xrp-accent" />
              <h3 className="font-display font-semibold text-text-primary">How It Works</h3>
            </div>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              On the <strong className="text-text-primary">1st of every month</strong>, escrow contracts unlock up to <span className="font-mono text-xrp-accent">1,000,000,000 XRP</span>. This is automatic and protocol-enforced. The critical part: <strong className="text-text-primary">unlocked ≠ sold</strong>.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 rounded-lg bg-surface-primary px-3 py-2">
                <span className="text-xs text-text-secondary">Keep:</span>
                <span className="font-mono text-sm text-warning">200-300M</span>
              </div>
              <ArrowRight className="hidden h-4 w-4 text-text-secondary sm:block" />
              <div className="flex items-center gap-2 rounded-lg bg-surface-primary px-3 py-2">
                <span className="text-xs text-text-secondary">Re-escrow:</span>
                <span className="font-mono text-sm text-success">700-800M</span>
              </div>
            </div>
          </div>

          <h3 className="mt-8 font-display text-lg font-semibold text-text-primary">Historical Pattern</h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-surface-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-surface-card">
                <tr>
                  <th className="px-4 py-3 font-medium text-text-secondary">Period</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Monthly Pattern</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {historicalData.map((row) => (
                  <tr key={row.period} className="bg-surface-primary transition-colors hover:bg-surface-card">
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
        <Section id="price-impact" title="How Escrow Impacts XRP Price" delay={0}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Max monthly release", value: "1B XRP", sub: "Protocol-enforced ceiling" },
              { label: "Net monthly increase", value: "200-300M", sub: "~0.3-0.5% of circulating supply" },
              { label: "Schedule", value: "Fixed", sub: "1st of every month, publicly verifiable" },
              { label: "Deflationary offset", value: "14.26M burned", sub: "Transaction fees burn XRP permanently" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-surface-border bg-surface-card/50 p-5"
              >
                <p className="text-xs uppercase tracking-wider text-text-secondary">{item.label}</p>
                <p className="mt-1 font-mono text-xl font-bold text-text-primary">{item.value}</p>
                <p className="mt-1 text-xs text-text-secondary">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-warning/20 bg-warning/[0.03] p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <span className="text-sm font-semibold text-warning">The &quot;Ripple Dumping&quot; FUD</span>
            </div>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Ripple&apos;s actual XRP sales are a fraction of what critics claim. Most institutional sales happen over-the-counter (OTC), meaning they don&apos;t hit public order books. The net new supply of 200-300M monthly represents ~0.3-0.5% of circulating supply — comparable to Bitcoin&apos;s annual mining inflation of ~0.8%.
            </p>
          </div>
        </Section>

        {/* Tracker */}
        <Section id="tracker" title="Escrow Tracker & Data" delay={0}>
          <h3 className="font-display text-lg font-semibold text-text-primary">Key Numbers (February 2026)</h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-surface-border">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-surface-border">
                {[
                  ["Total XRP Supply", "100,000,000,000 (fixed forever)"],
                  ["Circulating Supply", "~60,000,000,000"],
                  ["In Escrow", "~33,900,000,000"],
                  ["Burned (fees)", "~14,260,000"],
                  ["Monthly Unlock", "1,000,000,000"],
                  ["Typical Re-escrow", "700,000,000 – 800,000,000"],
                  ["Net Monthly to Circulation", "~200,000,000 – 300,000,000"],
                ].map(([label, value]) => (
                  <tr key={label} className="bg-surface-primary transition-colors hover:bg-surface-card">
                    <td className="px-4 py-3 text-text-secondary">{label}</td>
                    <td className="px-4 py-3 font-mono text-text-primary text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 font-display text-lg font-semibold text-text-primary">Where to Track</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {trackerTools.map((t, i) => (
              <motion.a
                key={t.tool}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-glow flex items-start gap-3 rounded-xl border border-surface-border bg-surface-card/50 p-4"
              >
                <Eye className="h-4 w-4 shrink-0 text-xrp-accent mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-text-primary text-sm">{t.tool}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{t.shows}</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-text-secondary" />
              </motion.a>
            ))}
          </div>
        </Section>

        {/* Misconceptions */}
        <Section id="misconceptions" title="Common Misconceptions" delay={0}>
          <div className="space-y-3">
            {misconceptions.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-xl border border-surface-border bg-surface-card/50 p-5"
              >
                <div className="flex items-start gap-3">
                  {m.icon}
                  <div>
                    <p className="font-semibold text-danger text-sm">&ldquo;{m.myth}&rdquo;</p>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      <span className="text-success font-medium">Reality: </span>{m.reality}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" title="Frequently Asked Questions" delay={0}>
          <div className="space-y-2">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen ? "border-xrp-accent/30 bg-xrp-accent/[0.03]" : "border-surface-border bg-surface-card/50 hover:bg-surface-card"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-medium text-sm pr-4 ${isOpen ? "text-xrp-accent" : "text-text-primary"}`}>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180 text-xrp-accent" : "text-text-secondary"}`} />
                  </button>
                  {isOpen && (
                    <div className="border-t border-surface-border/50 px-5 py-4">
                      <p className="text-sm text-text-secondary leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Section>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-xrp-accent/20 bg-gradient-to-br from-xrp-accent/[0.04] to-transparent p-8"
        >
          <h2 className="font-display text-xl font-bold text-text-primary">The Bottom Line</h2>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            XRP&apos;s escrow system is one of the most transparent supply management mechanisms in crypto. After 8+ years of operation, it has delivered exactly what it promised — predictability, transparency, and trust.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "🔒 Protocol-enforced",
              "📅 60-80% re-escrowed",
              "📊 ~0.3-0.5% monthly inflation",
              "🔍 On-chain verifiable",
              "💰 33.9B remaining",
              "🔥 Deflationary fees",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-surface-card/50 px-3 py-2 text-xs text-text-secondary">{item}</div>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-secondary/60 italic">Last updated: February 2026</p>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ id, title, delay, children }: { id: string; title: string; delay: number; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 scroll-mt-20"
      aria-label={title}
    >
      <div className="accent-line mb-8" />
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}
