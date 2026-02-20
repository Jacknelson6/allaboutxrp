"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, DollarSign, Globe, Users, ArrowRight, TrendingUp, Shield, Layers, Landmark, Wallet } from "lucide-react";
import StatCard from "@/components/shared/StatCard";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "full-stack", label: "Full Stack" },
  { id: "leadership", label: "Leadership" },
  { id: "xrp-connection", label: "XRP Connection" },
  { id: "numbers", label: "By the Numbers" },
];

interface Acquisition {
  year: string;
  name: string;
  url?: string;
  price: string;
  hq: string;
  what: string;
  why: string;
  xrpImpact: string;
  status?: string;
  icon: React.ReactNode;
  color: string;
}

const acquisitions: Acquisition[] = [
  {
    year: "2019",
    name: "Algrim",
    url: "https://www.algrim.co",
    price: "Undisclosed",
    hq: "Reykjavik, Iceland",
    what: "High-frequency trading & crypto exchange engineering (acqui-hire)",
    why: "Engineering talent deployed to enhance On-Demand Liquidity (ODL) — the system that uses XRP as a bridge currency.",
    xrpImpact: "Direct. Team went to work on the core product driving XRP transaction volume.",
    icon: <Users className="h-5 w-5" />,
    color: "text-blue-400 border-blue-400/20 bg-blue-500/[0.03]",
  },
  {
    year: "2021",
    name: "Tranglo (40% Stake)",
    url: "https://www.tranglo.com",
    price: "Undisclosed",
    hq: "Malaysia",
    what: "Cross-border payments across Southeast Asia. 250K transactions / $48M in first 100 days.",
    why: "On-the-ground partner to deploy ODL across one of the world's largest remittance corridors.",
    xrpImpact: "Massive. Every ODL transaction uses XRP as bridge asset. Volume surged from $53M to $970M.",
    icon: <Globe className="h-5 w-5" />,
    color: "text-green-400 border-green-400/20 bg-green-500/[0.03]",
  },
  {
    year: "2023",
    name: "Metaco",
    url: "https://www.metaco.com",
    price: "$250 Million",
    hq: "Lausanne, Switzerland",
    what: "Institutional crypto custody & tokenization. Trusted by Citibank, BBVA, BNP Paribas, Société Générale.",
    why: "First major acquisition. Trojan horse into traditional finance — banks using custody can be introduced to Ripple's full suite.",
    xrpImpact: "Banks can't hold XRP without custody infrastructure. Metaco provides exactly that.",
    icon: <Shield className="h-5 w-5" />,
    color: "text-purple-400 border-purple-400/20 bg-purple-500/[0.03]",
  },
  {
    year: "2024",
    name: "Standard Custody & Trust",
    url: "https://www.standardcustody.com",
    price: "Undisclosed",
    hq: "New York, USA",
    what: "NY Limited Purpose Trust Charter — one of only 9 in existence. Co-founded with Arthur Britto & David Schwartz's tech.",
    why: "Regulatory licenses are the crown jewel. CEO Jack McDonald joined Ripple as SVP of Stablecoins → RLUSD launch.",
    xrpImpact: "Every license removes friction for institutional XRP adoption.",
    icon: <Landmark className="h-5 w-5" />,
    color: "text-yellow-400 border-yellow-400/20 bg-yellow-500/[0.03]",
  },
  {
    year: "2025",
    name: "Hidden Road",
    url: "https://www.hiddenroad.com",
    price: "$1.25 Billion",
    hq: "New York, USA → Ripple Prime",
    what: "Global multi-asset prime brokerage. $3T+ annual clearing, 300+ institutional clients, $100M revenue in 2024.",
    why: "First crypto company to own a global prime brokerage. RLUSD as collateral, post-trade settlement on XRP Ledger.",
    xrpImpact: "Potentially the most significant for XRP. Institutional transaction volume flowing through XRPL infrastructure.",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "text-xrp-accent border-xrp-accent/20 bg-xrp-accent/[0.03]",
  },
  {
    year: "2025",
    name: "Rail",
    url: "https://www.rail.xyz",
    price: "$200 Million",
    hq: "Toronto, Canada",
    what: "B2B stablecoin payments — ~10% of $36B global stablecoin market. Supports USDC, USDT, RLUSD, and XRP.",
    why: "Lets businesses use stablecoin rails without holding crypto. 12+ bank partnerships, real-time conversions.",
    xrpImpact: "More payment corridors = more potential XRP bridging volume.",
    icon: <ArrowRight className="h-5 w-5" />,
    color: "text-cyan-400 border-cyan-400/20 bg-cyan-500/[0.03]",
  },
  {
    year: "2025",
    name: "GTreasury",
    url: "https://www.gtreasury.com",
    price: "$1 Billion",
    hq: "USA → Ripple Treasury",
    what: "Enterprise treasury management for Fortune 500. 40+ years experience. Cash forecasting, FX, compliance.",
    why: "Corporate treasury is a $120T market. Places blockchain settlement directly into corporate treasurer workflows.",
    xrpImpact: "Business payments routed through XRPL use XRP as bridge — steady, recurring, non-speculative demand.",
    icon: <Building2 className="h-5 w-5" />,
    color: "text-orange-400 border-orange-400/20 bg-orange-500/[0.03]",
  },
  {
    year: "2025",
    name: "Palisade",
    url: "https://www.palisade.co",
    price: "Undisclosed",
    hq: "London, UK",
    what: "MPC-based Wallet-as-a-Service. Zero-trust security, multi-chain, fast provisioning. Clients: Absa, BBVA, Société Générale.",
    why: "Fills the last gap in Ripple's custody stack — wallet infrastructure for fintechs and corporates.",
    xrpImpact: "Better wallet infrastructure = easier for institutions to hold and transact XRP at scale.",
    icon: <Wallet className="h-5 w-5" />,
    color: "text-pink-400 border-pink-400/20 bg-pink-500/[0.03]",
  },
];

const fullStack = [
  { layer: "Payments", product: "Ripple Payments", acquisitions: "Rail, Algrim, Tranglo", what: "Cross-border payments, stablecoin rails, ODL/XRP bridging" },
  { layer: "Custody", product: "Ripple Custody", acquisitions: "Metaco, Standard Custody, Palisade", what: "Institutional-grade digital asset storage" },
  { layer: "Trading", product: "Ripple Prime", acquisitions: "Hidden Road", what: "Prime brokerage, OTC, derivatives, settlement" },
  { layer: "Treasury", product: "Ripple Treasury", acquisitions: "GTreasury", what: "Enterprise cash management, FX, liquidity" },
  { layer: "Stablecoin", product: "RLUSD", acquisitions: "Standard Custody + Rail", what: "USD-backed stablecoin on XRPL and Ethereum" },
];

const leaders = [
  { name: "Brad Garlinghouse", role: "CEO", bg: "Former Yahoo, Hightail. Public face of Ripple." },
  { name: "Monica Long", role: "President", bg: "Joined 2013. Oversees product, marketing, business dev." },
  { name: "David Schwartz", role: "CTO Emeritus", bg: "Co-creator of the XRP Ledger." },
  { name: "Stuart Alderoty", role: "CLO", bg: "Former HSBC, CIT Group, AmEx. Led SEC defense." },
  { name: "Jon Bilich", role: "CFO", bg: "From Morgan Stanley. Capital markets background." },
  { name: "Jack McDonald", role: "SVP Stablecoins", bg: "Former CEO Standard Custody. Leads RLUSD." },
];

const xrpConnections = [
  { title: "Custody → Institutional Holdings", desc: "Metaco + Standard Custody + Palisade = banks can hold XRP on balance sheets" },
  { title: "Prime Brokerage → XRPL Settlement", desc: "$3T+ annual clearing moving to XRP Ledger post-trade settlement" },
  { title: "RLUSD → Bridge Demand", desc: "When RLUSD pairs lack liquidity, XRP serves as bridge currency" },
  { title: "Treasury → Steady Volume", desc: "Fortune 500 cash flows routed through XRPL create recurring XRP demand" },
  { title: "Stablecoin Payments → More Corridors", desc: "More corridors = more liquidity = tighter spreads = more adoption" },
  { title: "Regulatory Licenses → Removed Barriers", desc: "NY BitLicense, Trust Charter, 40+ MTLs, Singapore MPI, Ireland VASP" },
];

export default function AcquisitionsContent() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute inset-0 " />
      <div className="pointer-events-none absolute inset-0 " />
      <div className="relative mx-auto max-w-5xl px-4 py-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-5 text-[13px] text-text-secondary">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-text-primary transition-colors duration-200">Home</Link></li>
            <li className="text-white/15">/</li>
            <li className="text-text-primary">Acquisitions</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-xrp-accent/10 p-2.5">
              <Building2 className="h-6 w-6 text-xrp-accent" />
            </div>
            <div>
              <h1 className="text-[32px] font-bold tracking-[-0.04em] text-text-primary md:text-[40px]">
                Ripple&apos;s <span className="gradient-text">Acquisitions</span>
              </h1>
              <p className="mt-1 text-text-secondary">
                $3.7B+ in strategic deals building the future of financial infrastructure
              </p>
            </div>
          </div>
        </motion.div>

        <nav className="mt-8 flex gap-2 overflow-x-auto scrollbar-hide pb-2" aria-label="Page sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-lg border border-white/[0.06] bg-black px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-xrp-accent/30 hover:text-xrp-accent">
              {s.label}
            </a>
          ))}
        </nav>


        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Spent" value="$3.7B+" icon={<DollarSign className="h-4 w-4" />} />
          <StatCard label="Valuation" value="~$50B" icon={<TrendingUp className="h-4 w-4" />} delay={0.05} />
          <StatCard label="Employees" value="~1,400" icon={<Users className="h-4 w-4" />} delay={0.1} />
          <StatCard label="Countries" value="40+" icon={<Globe className="h-4 w-4" />} delay={0.15} />
        </div>

        {/* Overview */}
        <Section id="overview" title="The Big Picture" index={1} total={6}>
          <p className="text-text-secondary leading-relaxed">
            <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> is no longer just a payments company. Through calculated acquisitions totaling over <strong className="text-text-primary">$3.7 billion</strong>, Ripple has transformed into a full-stack financial infrastructure provider — covering custody, prime brokerage, <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">stablecoin</Link> payments, treasury management, and wallet infrastructure. Every piece connects back to the <strong className="text-xrp-accent"><Link href="/learn/what-is-xrp" className="text-xrp-accent">XRP Ledger</Link></strong>.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            As of early 2026, Ripple is the <strong className="text-text-primary">9th most valuable private company globally</strong> at ~$50 billion, processing over $90 billion in global payments.
          </p>
        </Section>

        {/* Timeline */}
        <Section id="timeline" title="Acquisition Timeline" index={2} total={6}>
          <div className="space-y-4">
            {acquisitions.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-xl border p-5 ${a.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-black p-2">{a.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-text-secondary">{a.year}</span>
                      {a.url ? (
                        <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-text-primary hover:text-xrp-accent transition-colors">
                          {a.name} <span className="text-xs text-text-secondary">↗</span>
                        </a>
                      ) : (
                        <h3 className="text-lg font-bold text-text-primary">{a.name}</h3>
                      )}
                      {a.price !== "Undisclosed" && (
                        <span className="rounded-full border border-success/20 bg-success/10 px-2.5 py-0.5 font-mono text-xs text-success">
                          {a.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary mt-0.5">{a.hq}</p>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">{a.what}</p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg bg-black p-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Why Ripple Acquired</p>
                        <p className="mt-1 text-xs text-text-secondary leading-relaxed">{a.why}</p>
                      </div>
                      <div className="rounded-lg bg-black p-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-xrp-accent">XRP Impact</p>
                        <p className="mt-1 text-xs text-text-secondary leading-relaxed">{a.xrpImpact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Fortress abandoned */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-danger/20 bg-danger/[0.03] p-5 opacity-60"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-text-secondary">2023</span>
                <h3 className="font-bold text-text-primary">Fortress Trust</h3>
                <span className="rounded-full border border-danger/20 bg-danger/10 px-2.5 py-0.5 text-xs text-danger">Abandoned</span>
              </div>
              <p className="mt-2 text-xs text-text-secondary">
                Pulled out after a phishing attack via third-party vendor caused $12-15M in customer losses. Ripple compensated affected customers but walked away. Lesson: Ripple doesn&apos;t cut corners on security.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Full Stack */}
        <Section id="full-stack" title="The Full Stack" index={3} total={6}>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            Each acquisition maps to a specific layer of Ripple&apos;s financial infrastructure. <strong className="text-text-primary">No other crypto company has assembled this stack.</strong>
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] -mx-4 sm:mx-0">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.06] bg-[#0A0A0B]">
                <tr>
                  <th className="px-4 py-3 font-medium text-text-secondary">Layer</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Product</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Via</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {fullStack.map((row) => (
                  <tr key={row.layer} className="bg-black transition-colors hover:bg-[#0A0A0B]">
                    <td className="px-4 py-3 font-semibold text-xrp-accent text-xs whitespace-nowrap">{row.layer}</td>
                    <td className="px-4 py-3 text-text-primary text-xs">{row.product}</td>
                    <td className="px-4 py-3 text-text-secondary text-xs">{row.acquisitions}</td>
                    <td className="px-4 py-3 text-text-secondary text-xs">{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              { period: "2012–2019", desc: "Payments company (RippleNet, ODL)" },
              { period: "2019–2023", desc: "Payments + talent (Algrim, Tranglo)" },
              { period: "2023–2024", desc: "Payments + custody (Metaco, Standard)" },
              { period: "2025+", desc: "Full financial infrastructure" },
            ].map((e) => (
              <div key={e.period} className="flex items-center gap-3 rounded-lg bg-black px-4 py-3">
                <span className="font-mono text-xs text-xrp-accent whitespace-nowrap">{e.period}</span>
                <ArrowRight className="h-3 w-3 text-text-secondary shrink-0" />
                <span className="text-xs text-text-secondary">{e.desc}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Leadership */}
        <Section id="leadership" title="Leadership & Talent" index={4} total={6}>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            Ripple isn&apos;t hiring crypto bros — they&apos;re hiring <strong className="text-text-primary">Wall Street veterans, regulatory experts, and enterprise finance leaders</strong> from Morgan Stanley, HSBC, American Express, and Goldman Sachs. See the full <Link href="/learn/leadership" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple leadership team</Link> and their <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">global partnerships</Link>.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-white/[0.06] bg-black p-4"
              >
                <p className="font-bold text-text-primary text-sm">{l.name}</p>
                <p className="text-xs text-xrp-accent">{l.role}</p>
                <p className="mt-2 text-xs text-text-secondary">{l.bg}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* XRP Connection */}
        <Section id="xrp-connection" title="The XRP Connection" index={5} total={6}>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            Here&apos;s how every major move ties back to XRP:
          </p>
          <div className="space-y-3">
            {xrpConnections.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex gap-4 rounded-xl border border-xrp-accent/10 bg-xrp-accent/[0.02] p-4"
              >
                <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-xrp-accent/10 flex items-center justify-center">
                  <span className="font-mono text-xs text-xrp-accent font-bold">{i + 1}</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">{c.title}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* By the Numbers */}
        <Section id="numbers" title="Ripple by the Numbers" index={6} total={6}>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] -mx-4 sm:mx-0">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-white/[0.04]">
                {[
                  ["Valuation", "~$50 billion (early 2026)"],
                  ["Global Rank", "9th most valuable private company"],
                  ["Total Acquisition Spend", "$3.7+ billion"],
                  ["Employees", "~1,400"],
                  ["Countries", "40+ across 6 continents"],
                  ["Global Payments Processed", "$90+ billion"],
                  ["RLUSD Market Cap", "$1.26 billion"],
                  ["Hidden Road Annual Clearing", "$3+ trillion"],
                  ["Institutional Clients", "300+"],
                  ["Total Funding Raised", "$800-893 million"],
                ].map(([label, value]) => (
                  <tr key={label} className="bg-black transition-colors hover:bg-[#0A0A0B]">
                    <td className="px-4 py-3 text-text-secondary">{label}</td>
                    <td className="px-4 py-3 font-mono text-text-primary text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Continue Reading */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="py-14 scroll-mt-20"
          aria-label="Continue Reading"
        >
          <div className="section-divider mb-10" />
          <h2 className="text-[26px] font-bold tracking-[-0.03em] text-text-primary md:text-[30px]">Continue Reading</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Link href="/learn/leadership" className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 transition-all duration-300 hover:border-xrp-accent/20 hover:translate-y-[-2px]">
              <h3 className="font-semibold text-text-primary">Ripple Leadership</h3>
              <p className="mt-1 text-xs text-text-secondary">The team driving these acquisitions</p>
            </Link>
            <Link href="/learn/partnerships" className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 transition-all duration-300 hover:border-xrp-accent/20 hover:translate-y-[-2px]">
              <h3 className="font-semibold text-text-primary">Partnerships</h3>
              <p className="mt-1 text-xs text-text-secondary">Banks & institutions in the Ripple network</p>
            </Link>
            <Link href="/learn/rlusd" className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 transition-all duration-300 hover:border-xrp-accent/20 hover:translate-y-[-2px]">
              <h3 className="font-semibold text-text-primary">RLUSD & XRP</h3>
              <p className="mt-1 text-xs text-text-secondary">How the stablecoin fits the strategy</p>
            </Link>
            <Link href="/learn/get-started" className="rounded-xl border border-xrp-accent/20 bg-xrp-accent/[0.03] p-5 transition-all duration-300 hover:border-xrp-accent/30 hover:translate-y-[-2px] sm:col-span-3">
              <h3 className="font-semibold text-text-primary">Bullish on Ripple&apos;s Growth? Here&apos;s How to Get XRP →</h3>
              <p className="mt-1 text-xs text-text-secondary">Step-by-step beginner guide to buying XRP</p>
            </Link>
          </div>
        </motion.section>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-xrp-accent/20 bg-gradient-to-br from-xrp-accent/[0.04] to-transparent p-8"
        >
          <h2 className="text-xl font-bold text-text-primary">The Bottom Line</h2>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            Ripple is assembling the <strong className="text-text-primary">full infrastructure stack</strong> that institutions need to operate in a blockchain-enabled financial system. Every acquisition serves a purpose. Every product connects. And at the center sits the <strong className="text-xrp-accent">XRP Ledger</strong> — the settlement layer that ties everything together.
          </p>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            The pieces are in place. The institutions are onboarding. The infrastructure is live.
          </p>
          <p className="mt-4 text-xs text-text-secondary/60 italic">Last updated: February 2026</p>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ id, title, children, index, total }: { id: string; title: string; children: React.ReactNode; index?: number; total?: number }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-14 scroll-mt-20"
      aria-label={title}
    >
      <div className="section-divider mb-10" />
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
      <h2 className="text-[26px] font-bold tracking-[-0.03em] text-text-primary md:text-[30px]">{title}</h2>
      <div className="mt-7">{children}</div>
    </motion.section>
  );
}
