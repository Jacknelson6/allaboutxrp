import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What is On-Demand Liquidity (ODL)? XRP as a Bridge Currency",
  description:
    "On-Demand Liquidity (ODL) uses XRP as a bridge currency for instant cross-border payments. Learn how ODL works, its corridors, volume stats, and advantages over traditional banking.",
  openGraph: {
    title: "On-Demand Liquidity (ODL) Explained | AllAboutXRP",
    description: "How Ripple's ODL uses XRP to eliminate pre-funded accounts and settle cross-border payments in seconds.",
    url: "https://allaboutxrp.com/learn/on-demand-liquidity",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Demand Liquidity (ODL) | AllAboutXRP",
    description: "XRP as a bridge currency — how ODL revolutionizes cross-border payments.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/on-demand-liquidity" },
};

const schemas = [
  buildArticleSchema({
    headline: "What is On-Demand Liquidity (ODL)? XRP as a Bridge Currency",
    description: "A comprehensive guide to Ripple's On-Demand Liquidity product and how it uses XRP for instant cross-border settlement.",
    url: "https://allaboutxrp.com/learn/on-demand-liquidity",
    datePublished: "2026-02-12",
    dateModified: "2026-02-12",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "On-Demand Liquidity" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/on-demand-liquidity" }),
  buildFAQSchema([
    { question: "What is On-Demand Liquidity (ODL)?", answer: "ODL is Ripple's payment solution that uses XRP as a bridge currency to enable instant cross-border payments without pre-funded accounts in destination countries." },
    { question: "How does ODL use XRP?", answer: "ODL converts the sender's fiat currency to XRP, transfers it across the XRP Ledger in 3-5 seconds, then converts it to the destination fiat currency — creating real buy and sell demand for XRP." },
    { question: "What are nostro/vostro accounts?", answer: "Nostro/vostro accounts are pre-funded bank accounts held in foreign countries to facilitate cross-border payments. An estimated $27 trillion is locked in these accounts globally. ODL eliminates the need for them." },
  ]),
];

const faqItems = [
  { q: "What is On-Demand Liquidity (ODL)?", a: "ODL is Ripple's payment solution that uses XRP as a bridge currency to enable instant cross-border payments without pre-funded accounts. Formerly known as xRapid, it was renamed in 2019." },
  { q: "How does ODL use XRP?", a: "ODL converts the sender's fiat to XRP, transfers it across the XRP Ledger in 3-5 seconds, then converts it to the destination fiat. This creates real buy and sell demand for XRP on every transaction." },
  { q: "What are nostro/vostro accounts and why does ODL replace them?", a: "Nostro/vostro accounts are pre-funded bank accounts in foreign countries used for cross-border payments. An estimated $27 trillion is locked globally. ODL eliminates this requirement by using XRP as an instant bridge." },
  { q: "How many ODL corridors exist?", a: "As of 2026, there are 20+ active ODL corridors spanning Asia-Pacific, Europe, the Middle East, Latin America, and Africa. Major corridors include Japan-Philippines, US-Mexico, and Europe-Southeast Asia." },
  { q: "Is ODL the same as xRapid?", a: "Yes. xRapid was renamed to On-Demand Liquidity (ODL) in 2019 when Ripple consolidated its products under the RippleNet brand." },
  { q: "Does every RippleNet payment use ODL?", a: "No. RippleNet offers both ODL (XRP-powered) and traditional messaging-based settlement. Institutions choose based on corridor availability and preference." },
];

export default function OnDemandLiquidityPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="On-Demand"
          titleAccent="Liquidity (ODL)"
          subtitle="ODL is Ripple's flagship payment product that uses XRP as a real-time bridge currency — eliminating pre-funded accounts and settling cross-border payments in 3-5 seconds."
          breadcrumbLabel="On-Demand Liquidity"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-12" />
            <LastUpdated date="February 12, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">On-Demand Liquidity (ODL)</strong> — formerly xRapid — is the product that gives XRP its core utility. It converts fiat → XRP → fiat in seconds, replacing the $27 trillion locked in nostro/vostro accounts worldwide. Every ODL transaction creates real demand for XRP. Active in 20+ corridors with growing volume through <Link href="/learn/ripplenet" className="text-xrp-accent underline decoration-xrp-accent/30">RippleNet</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Formerly Known As", value: "xRapid (renamed 2019)" },
          { label: "Bridge Currency", value: "XRP" },
          { label: "Settlement Time", value: "3-5 seconds" },
          { label: "Active Corridors", value: "20+" },
          { label: "Nostro/Vostro Savings", value: "Eliminates $27T+ locked capital" },
          { label: "Transaction Cost", value: "< $0.01 (XRP network fee)" },
          { label: "Network", value: "RippleNet (300+ institutions)" },
        ]} />

        <SectionNav items={[
          { id: "how-it-works", label: "How ODL Works" },
          { id: "nostro-vostro", label: "Nostro/Vostro Problem" },
          { id: "corridors", label: "Corridors" },
          { id: "xrp-demand", label: "XRP Demand" },
          { id: "advantages", label: "Advantages" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Settlement" value="3-5 sec" delay={0} />
          <StatPill label="Corridors" value="20+" delay={0.06} />
          <StatPill label="Trapped Capital" value="$27T+" delay={0.12} />
          <StatPill label="Cost" value="< $0.01" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* HOW ODL WORKS */}
          <RevealSection id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How On-Demand Liquidity Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              ODL uses XRP as a universal bridge between any two fiat currencies. The process is fully automated and settles in seconds:
            </p>
            <div className="mt-6">
              <IconList items={[
                { title: "Step 1: Initiation", desc: "A financial institution sends a payment through RippleNet, selecting ODL for the corridor." },
                { title: "Step 2: Fiat → XRP", desc: "The sending institution's local fiat currency is converted to XRP on an exchange in the origin country." },
                { title: "Step 3: XRP Transfer", desc: "XRP is sent across the XRP Ledger to the destination country in 3-5 seconds." },
                { title: "Step 4: XRP → Fiat", desc: "XRP is converted to the destination fiat currency on a local exchange." },
                { title: "Step 5: Delivery", desc: "The recipient institution receives the funds in their local currency. Total time: seconds, not days." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Example: US to Philippines" variant="info">
                <p>A bank in the US wants to send $100,000 to the Philippines. With ODL: USD is converted to XRP on a US exchange → XRP crosses the XRPL in ~4 seconds → XRP is converted to PHP on a Philippine exchange → Recipient bank receives PHP. <strong className="text-text-primary">Total time: under 10 seconds. Total fee: fractions of a cent in XRP.</strong></p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* NOSTRO/VOSTRO PROBLEM */}
          <RevealSection id="nostro-vostro" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Nostro/Vostro Problem ODL Solves</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Traditional cross-border payments require banks to maintain pre-funded accounts (called nostro/vostro accounts) in every country they want to send money to. An estimated <strong className="text-text-primary">$27 trillion</strong> is locked in these accounts globally — capital that could be deployed more productively.
            </p>
            <div className="mt-5">
              <DataTable
                headers={["Aspect", "Traditional (Nostro/Vostro)", "ODL with XRP"]}
                rows={[
                  ["Pre-funding Required", "Yes — in every destination country", "No — XRP bridges instantly"],
                  ["Capital Locked", "$27+ trillion globally", "$0 — funds flow on demand"],
                  ["Settlement Time", "1-5 business days", "3-5 seconds"],
                  ["Intermediaries", "2-5 correspondent banks", "0 — direct settlement"],
                  ["Transparency", "Limited — opaque fee chain", "Full — real-time tracking"],
                  ["Failed Payments", "~6% failure rate", "Atomic — all or nothing"],
                ]}
                highlightCol={2}
              />
            </div>
            <div className="mt-5">
              <HighlightBox title="$27 Trillion Opportunity" variant="accent" large>
                <p>The $27 trillion trapped in nostro/vostro accounts represents ODL&apos;s total addressable market. Even capturing a small percentage of this trapped capital would drive massive XRP transaction volume and demand.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* CORRIDORS */}
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Active ODL Corridors</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              ODL is live in 20+ payment corridors, with Ripple continuously expanding coverage. Key corridors include:
            </p>
            <div className="mt-5">
              <DataTable
                headers={["Corridor", "From → To", "Key Partner"]}
                rows={[
                  ["Japan → Philippines", "JPY → PHP", "SBI Remit"],
                  ["US → Mexico", "USD → MXN", "Multiple partners"],
                  ["Europe → Philippines", "EUR → PHP", "Azimo"],
                  ["Japan → Thailand", "JPY → THB", "SBI / SCB"],
                  ["Australia → Southeast Asia", "AUD → various", "Multiple partners"],
                  ["US → Brazil", "USD → BRL", "Banco Rendimento"],
                  ["Middle East → South Asia", "AED → various", "Multiple partners"],
                  ["UK → Europe", "GBP → EUR", "Multiple partners"],
                ]}
              />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              Ripple targets corridors where traditional banking is most expensive and slow — typically emerging market routes where nostro/vostro requirements are burdensome.
            </p>
          </RevealSection>

          {/* XRP DEMAND */}
          <RevealSection id="xrp-demand" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How ODL Drives XRP Demand</h2>
            <div className="mt-5">
              <HighlightBox title="The Fundamental Value Proposition" variant="accent" large>
                <p>Every ODL transaction requires <strong className="text-text-primary">buying XRP in the origin country and selling it in the destination country</strong>. This creates real, utility-driven demand that is independent of speculation. As ODL volume grows:</p>
                <ul className="mt-3 space-y-1 list-disc list-inside text-text-secondary">
                  <li>More XRP is needed for liquidity in each corridor</li>
                  <li>Higher transaction volumes require larger XRP positions</li>
                  <li>Each transaction burns a tiny amount of XRP as a fee (deflationary)</li>
                  <li>Market makers provide deeper liquidity, reducing slippage</li>
                </ul>
              </HighlightBox>
            </div>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Transaction Volume", desc: "Higher payment volumes through ODL corridors directly increase XRP trading volume and demand." },
                { title: "Corridor Expansion", desc: "Each new corridor adds incremental XRP demand — more countries means more XRP needed globally." },
                { title: "RLUSD Integration", desc: "RLUSD on the XRP Ledger complements ODL by providing stablecoin settlement options alongside XRP." },
                { title: "Fee Burn", desc: "Every XRP Ledger transaction burns a small amount of XRP, making the supply slightly deflationary over time." },
              ]} />
            </div>
          </RevealSection>

          {/* ADVANTAGES */}
          <RevealSection id="advantages" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">ODL Advantages</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "No Pre-Funding", desc: "Eliminates the need for nostro/vostro accounts — freeing up trapped capital" },
                { title: "3-5 Second Settlement", desc: "Compared to 1-5 business days with traditional correspondent banking" },
                { title: "Near-Zero Fees", desc: "XRP transaction fees are fractions of a cent vs $25-50+ for SWIFT transfers" },
                { title: "24/7 Operation", desc: "Unlike banks, the XRP Ledger operates around the clock with no holidays or cutoff times" },
                { title: "Full Transparency", desc: "All transactions are tracked in real-time on the XRP Ledger" },
                { title: "Atomic Settlement", desc: "Payments complete fully or not at all — no partial failures or stuck funds" },
                { title: "Currency Agnostic", desc: "XRP bridges any fiat pair — no need for direct currency trading pairs" },
              ]} variant="check" />
            </div>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Complete product suite" },
              { href: "/learn/ripple-prime", label: "Ripple Prime", desc: "Enterprise brokerage" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/rlusd-explained", label: "RLUSD Explained", desc: "Deep dive into RLUSD" },
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="XRP Powers Global Payments"
          description="On-Demand Liquidity is why XRP exists — real utility in the $150 trillion cross-border payments market."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/ripplenet"
          secondaryLabel="Explore RippleNet"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 12, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, RippleNet documentation, McKinsey Global Payments Report, partner announcements.</em>
        </p>
      </div>
    </>
  );
}
