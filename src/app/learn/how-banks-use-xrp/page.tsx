import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How Banks Use XRP for Cross-Border Payments",
  description:
    "Learn how banks use XRP and RippleNet for cross-border payments. ODL, bank partners, SWIFT comparison, and real-world corridors.",
  keywords: ["banks using XRP", "RippleNet banks", "XRP bank partnerships", "XRP cross-border payments"],
  openGraph: {
    title: "How Banks Use XRP for Payments | AllAboutXRP",
    description:
      "Discover how banks and financial institutions use XRP through RippleNet and On-Demand Liquidity for cross-border payments.",
    url: "https://allaboutxrp.com/learn/how-banks-use-xrp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Banks Use XRP | AllAboutXRP",
    description:
      "RippleNet, ODL, bank partners, and how XRP is transforming cross-border payments.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/how-banks-use-xrp",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "How Banks Use XRP for Cross-Border Payments",
    description: "A comprehensive guide to how banks and financial institutions use XRP through RippleNet and On-Demand Liquidity for faster, cheaper cross-border payments.",
    url: "https://allaboutxrp.com/learn/how-banks-use-xrp",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "How Banks Use XRP" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-banks-use-xrp" }),
  buildFAQSchema([
    { question: "Which banks use XRP?", answer: "Major institutions using Ripple's technology include SBI Holdings (Japan), Santander (Spain/Global), Standard Chartered, Tranglo (Asia-Pacific), and over 300 other financial institutions across 55+ countries." },
    { question: "How does On-Demand Liquidity (ODL) work?", answer: "ODL uses XRP as a bridge currency. The sender's local currency is converted to XRP, transferred across the XRP Ledger in seconds, and converted to the recipient's local currency. This eliminates the need for pre-funded nostro/vostro accounts." },
    { question: "Is XRP faster than SWIFT?", answer: "Yes. XRP settles cross-border payments in 3-5 seconds, while SWIFT transfers typically take 1-5 business days and involve multiple intermediary banks." },
    { question: "How much do banks save using XRP?", answer: "Ripple estimates that ODL reduces cross-border payment costs by 40-60% compared to traditional correspondent banking. Savings come from eliminating pre-funded accounts, reducing intermediaries, and faster settlement." },
    { question: "Will more banks adopt XRP?", answer: "With regulatory clarity from the SEC case and potential ETF products, institutional adoption is expected to accelerate. Ripple's acquisition of Hidden Road added $3 trillion in annual clearing volume to its ecosystem." },
  ]),
];

const faqItems = [
  { q: "Which banks use XRP?", a: "Major institutions include SBI Holdings (Japan's largest financial group), Santander (global banking giant), Standard Chartered, Tranglo (Asia-Pacific payments), and over 300 other financial institutions across 55+ countries connected through RippleNet." },
  { q: "How does On-Demand Liquidity (ODL) work?", a: "ODL uses XRP as a bridge currency. The sender's local currency is converted to XRP, transferred across the XRP Ledger in 3-5 seconds, and converted to the recipient's local currency at the destination. This eliminates the need for pre-funded accounts in every currency corridor." },
  { q: "Is XRP faster than SWIFT?", a: "Dramatically faster. XRP settles cross-border payments in 3-5 seconds with guaranteed finality. SWIFT transfers typically take 1-5 business days, pass through multiple intermediary banks, and can fail or get stuck in transit." },
  { q: "How much do banks save by using XRP?", a: "Ripple estimates ODL reduces cross-border payment costs by 40-60% compared to traditional correspondent banking. Savings come from eliminating pre-funded nostro/vostro accounts, reducing intermediary fees, and faster settlement cycles." },
  { q: "Will more banks adopt XRP in the future?", a: "Regulatory clarity from the SEC case, potential spot ETF products, and Ripple's growing infrastructure (including the Hidden Road acquisition) are expected to accelerate institutional adoption significantly in 2026 and beyond." },
];

export default function HowBanksUseXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How Banks Use"
          titleAccent="XRP"
          subtitle="Over 300 financial institutions across 55+ countries use Ripple's technology for cross-border payments. Here's exactly how XRP fits into the global banking system — from RippleNet to On-Demand Liquidity."
          breadcrumbLabel="How Banks Use XRP"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Banks use <strong className="text-text-primary">XRP</strong> through <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s</Link> <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">On-Demand Liquidity (ODL)</Link> product as a bridge currency for cross-border payments. Instead of pre-funding accounts in every destination currency, banks convert to XRP, transfer in 3-5 seconds, and convert to local currency — saving 40-60% vs traditional methods. Over <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">300 institutions</Link> across 55+ countries are connected through RippleNet.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Partner Institutions", value: "300+ across 55+ countries" },
          { label: "Settlement Time", value: "3-5 seconds" },
          { label: "Cost Savings", value: "40-60% vs traditional" },
          { label: "Key Product", value: "On-Demand Liquidity (ODL)" },
          { label: "Annual Volume (Hidden Road)", value: "$3 trillion+" },
          { label: "SWIFT Comparison", value: "1-5 business days" },
        ]} />

        <SectionNav items={[
          { id: "problem", label: "The Problem" },
          { id: "ripplenet", label: "RippleNet" },
          { id: "odl", label: "ODL Explained" },
          { id: "partners", label: "Bank Partners" },
          { id: "swift", label: "vs SWIFT" },
          { id: "corridors", label: "Real Corridors" },
          { id: "cost-savings", label: "Cost Savings" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Partners" value="300+" delay={0} />
          <StatPill label="Countries" value="55+" delay={0.06} />
          <StatPill label="Settlement" value="3-5 sec" delay={0.12} />
          <StatPill label="Cost Savings" value="40-60%" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* THE PROBLEM */}
          <RevealSection id="problem">
            <h2 className="text-2xl font-bold text-text-primary">The Problem: Why Cross-Border Payments Are Broken</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The global cross-border payments market moves over <strong className="text-text-primary">$150 trillion annually</strong>, yet the infrastructure behind it is decades old. When a bank in the US sends money to a bank in Japan, the payment doesn&apos;t go directly. It passes through multiple intermediary (correspondent) banks, each taking a fee and adding delay.
            </p>

            <div className="mt-5">
              <GlowCard
                title="The Correspondent Banking Problem"
                value="$27 Trillion"
                subtitle="Locked in pre-funded nostro/vostro accounts globally — capital that could be deployed elsewhere"
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              Banks must maintain <strong className="text-text-primary">pre-funded accounts (nostro/vostro accounts)</strong> in every currency they transact in. A US bank sending payments to 50 countries needs pre-funded accounts in 50 currencies. This locks up trillions of dollars in idle capital worldwide.
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "Slow", desc: "International wire transfers take 1-5 business days" },
                { title: "Expensive", desc: "Fees of $25-50+ per transaction, plus FX spreads" },
                { title: "Capital-intensive", desc: "$27 trillion locked in pre-funded accounts globally" },
                { title: "Opaque", desc: "Limited visibility into payment status during transit" },
                { title: "Error-prone", desc: "Failed payments, returns, and compliance issues add costs" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* RIPPLENET */}
          <RevealSection id="ripplenet" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">RippleNet: The Global Payment Network</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/ripplenet" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">RippleNet</Link> is <Link href="/learn/what-is-ripple" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">Ripple&apos;s</Link> global payment network connecting banks, payment providers, and financial institutions. It provides a standardized protocol for sending and receiving cross-border payments with real-time settlement, end-to-end tracking, and guaranteed delivery.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Real-Time Settlement", desc: "Payments settle in seconds, not days — with guaranteed finality" },
                { title: "End-to-End Tracking", desc: "Full visibility into payment status from initiation to delivery" },
                { title: "Pre-Validation", desc: "Payments are validated before sending — eliminating failed transactions" },
                { title: "Rich Data", desc: "Attach invoices, compliance data, and remittance information to payments" },
              ]} />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              RippleNet has three tiers: <strong className="text-text-primary">messaging</strong> (payment instructions), <strong className="text-text-primary">settlement</strong> (clearing and settling), and <strong className="text-text-primary">On-Demand Liquidity</strong> (using XRP as a bridge currency). Banks can start with messaging and graduate to ODL as they gain confidence.
            </p>
          </RevealSection>

          {/* ODL */}
          <RevealSection id="odl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">On-Demand Liquidity (ODL): How XRP Powers Bank Payments</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/on-demand-liquidity" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">On-Demand Liquidity</Link> is where XRP directly enters the banking equation. Here&apos;s how a typical ODL transaction works:
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "Step 1: Initiation", desc: "Bank A in the US initiates a $100,000 payment to Bank B in Japan through RippleNet" },
                { title: "Step 2: Convert to XRP", desc: "The $100,000 is converted to XRP on a local exchange in seconds" },
                { title: "Step 3: Transfer", desc: "XRP is transferred across the XRP Ledger to Japan in 3-5 seconds" },
                { title: "Step 4: Convert to JPY", desc: "XRP is converted to Japanese Yen on a local exchange in Japan" },
                { title: "Step 5: Delivery", desc: "Bank B receives the equivalent in JPY — total time: under 10 seconds" },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Key Innovation" variant="accent">
                <p>ODL eliminates the need for <strong className="text-text-primary">pre-funded accounts</strong>. Instead of Bank A maintaining a JPY account in Japan with millions of dollars idle, XRP serves as the real-time bridge. The bank only needs local currency and XRP handles the rest. This frees up massive amounts of capital.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* PARTNERS */}
          <RevealSection id="partners" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Major Bank and Institutional Partners</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/partnerships" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">Ripple&apos;s partner network</Link> includes some of the world&apos;s largest financial institutions:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Institution", "Country/Region", "Relationship"]}
                rows={[
                  ["SBI Holdings", "Japan", "Strategic partner; SBI Remit uses ODL"],
                  ["Santander", "Spain/Global", "One Pay FX powered by RippleNet"],
                  ["Standard Chartered", "UK/Global", "RippleNet partner for payments"],
                  ["Tranglo", "Asia-Pacific", "ODL partner (Ripple-owned stake)"],
                  ["SBI Remit", "Japan", "ODL for Philippines-Japan corridor"],
                  ["National Bank of Egypt", "Egypt", "RippleNet for remittances"],
                  ["Saudi British Bank", "Saudi Arabia", "RippleNet instant payments"],
                  ["Bank of America", "United States", "Ripple partner (patents + RippleNet)"],
                  ["Hidden Road", "Global", "Acquired by Ripple; $3T annual volume"],
                  ["Banco Rendimento", "Brazil", "ODL for Brazil corridors"],
                ]}
                highlightCol={0}
              />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              This is a partial list — Ripple has over 300 financial institution partnerships across 55+ countries, with new partners joining regularly. The acquisition of <strong className="text-text-primary">Hidden Road</strong> in 2025 added a prime brokerage with $3 trillion in annual clearing volume, significantly expanding Ripple&apos;s institutional reach.
            </p>
          </RevealSection>

          {/* SWIFT COMPARISON */}
          <RevealSection id="swift" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP vs SWIFT: A Direct Comparison</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              SWIFT (Society for Worldwide Interbank Financial Telecommunication) has been the backbone of international banking since 1973. Here&apos;s how it compares to XRP-powered payments:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP / RippleNet", "SWIFT"]}
                rows={[
                  ["Settlement Time", "3-5 seconds", "1-5 business days"],
                  ["Transaction Cost", "< $0.01 (network fee)", "$25-50+ per transfer"],
                  ["Intermediaries", "None (direct)", "1-4 correspondent banks"],
                  ["Pre-Funded Accounts", "Not required (ODL)", "Required in every currency"],
                  ["Tracking", "Real-time, end-to-end", "Limited (SWIFT gpi improving)"],
                  ["Payment Validation", "Pre-validated", "Failures discovered after sending"],
                  ["Operating Hours", "24/7/365", "Business hours (banking days)"],
                  ["Rich Data", "Native support", "Limited (MT103 format)"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Not Replacement — Evolution" variant="info">
                <p>Ripple doesn&apos;t position itself as a &quot;SWIFT killer.&quot; Many RippleNet partners still use SWIFT for some transactions. The goal is to offer a <strong className="text-text-primary">better option for specific corridors</strong> — especially high-volume, time-sensitive routes where speed and cost matter most. Over time, as banks experience the benefits, usage expands organically.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* REAL CORRIDORS */}
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Real-World Payment Corridors Using XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              ODL is live in numerous corridors, with particularly strong adoption in Asia-Pacific and Latin America:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Japan ↔ Philippines", desc: "SBI Remit uses ODL for one of the world's largest remittance corridors" },
                { title: "US ↔ Mexico", desc: "High-volume corridor leveraging XRP for near-instant settlement" },
                { title: "Australia ↔ Southeast Asia", desc: "Multiple corridors connecting Australia to SE Asian markets" },
                { title: "Brazil ↔ Global", desc: "Banco Rendimento using ODL for Brazil's international payments" },
                { title: "Middle East ↔ South Asia", desc: "Saudi Arabia, UAE corridors serving massive migrant remittance flows" },
                { title: "Europe ↔ Africa", desc: "Growing corridors connecting European banks to African markets" },
              ]} />
            </div>
          </RevealSection>

          {/* COST SAVINGS */}
          <RevealSection id="cost-savings" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Cost Savings for Banks Using XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The financial benefits for banks adopting ODL are substantial:
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "40-60% Lower Transaction Costs", desc: "Eliminating intermediary banks and their fees dramatically reduces per-payment costs" },
                { title: "Capital Liberation", desc: "No pre-funded nostro/vostro accounts means billions freed for lending, investment, or operations" },
                { title: "Reduced FX Spread", desc: "XRP's deep liquidity pools and real-time conversion minimize foreign exchange spreads" },
                { title: "Fewer Failed Payments", desc: "Pre-validation eliminates the cost of failed, returned, or stuck payments" },
                { title: "24/7 Operations", desc: "No more waiting for banking hours — payments settle any time, weekends and holidays included" },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <GlowCard
                title="Estimated Annual Savings"
                value="$10+ Billion"
                subtitle="Potential industry-wide savings if major corridors migrate to ODL-based settlement"
              />
            </div>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* SOURCES */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://ripple.com/solutions" className="text-xrp-accent underline decoration-xrp-accent/30" target="_blank" rel="noopener noreferrer">Ripple.com/solutions</a> — RippleNet and ODL documentation</li>
              <li>• <a href="https://ripple.com/customer-case-study" className="text-xrp-accent underline decoration-xrp-accent/30" target="_blank" rel="noopener noreferrer">Ripple Case Studies</a> — Partner success stories</li>
              <li>• <a href="https://www.swift.com" className="text-xrp-accent underline decoration-xrp-accent/30" target="_blank" rel="noopener noreferrer">SWIFT.com</a> — SWIFT network data</li>
              <li>• <a href="https://www.mckinsey.com/industries/financial-services/our-insights/global-payments" className="text-xrp-accent underline decoration-xrp-accent/30" target="_blank" rel="noopener noreferrer">McKinsey Global Payments Report</a> — Cross-border payment market data</li>
              <li>• <a href="https://xrpl.org" className="text-xrp-accent underline decoration-xrp-accent/30" target="_blank" rel="noopener noreferrer">XRPL.org</a> — XRP Ledger documentation</li>
            </ul>
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
              { href: "/learn/partnerships", label: "Ripple Partnerships", desc: "Banks & institutions" },
              { href: "/learn/xrp-institutional-custody", label: "Institutional Custody", desc: "Enterprise storage" },
              { href: "/learn/xrp-iso-20022", label: "XRP & ISO 20022", desc: "Global payments standard" },
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP bridge currency" },
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Complete product suite" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore XRP's Institutional Impact"
          description="XRP is transforming how banks move money globally. Dive deeper into Ripple's technology, partnerships, and the future of cross-border payments."
          primaryHref="/learn/partnerships"
          primaryLabel="View Partnerships →"
          secondaryHref="/learn/what-is-ripple"
          secondaryLabel="Learn About Ripple"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, SWIFT.com, McKinsey Global Payments Report, XRPL.org.</em>
        </p>
      </div>
    </>
  );
}
