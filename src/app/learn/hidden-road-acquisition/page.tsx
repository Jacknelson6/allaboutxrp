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
  title: "Ripple's Hidden Road Acquisition: What It Means for XRP",
  description: "Ripple acquired Hidden Road for $1.25B. What it means for XRP, institutional crypto access, and Ripple's prime brokerage ambitions.",
  keywords: ["Ripple Hidden Road", "Hidden Road acquisition", "Ripple prime brokerage", "Hidden Road XRP"],
  openGraph: {
    title: "Ripple's Hidden Road Acquisition | AllAboutXRP",
    description: "Ripple acquired Hidden Road for $1.25B — what it means for XRP and institutional crypto.",
    url: "https://allaboutxrp.com/learn/hidden-road-acquisition",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Hidden Road Acquisition | AllAboutXRP",
    description: "$1.25B acquisition — Ripple enters prime brokerage. What it means for XRP.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/hidden-road-acquisition" },
};

const schemas = [
  buildArticleSchema({
    headline: "Ripple's Hidden Road Acquisition: What It Means for XRP",
    description: "Complete analysis of Ripple's $1.25 billion acquisition of Hidden Road — strategic rationale, impact on XRP, and what it means for institutional crypto adoption.",
    url: "https://allaboutxrp.com/learn/hidden-road-acquisition",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Hidden Road Acquisition" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/hidden-road-acquisition" }),
  buildFAQSchema([
    { question: "What is Hidden Road?", answer: "Hidden Road is a global prime brokerage and credit network that serves institutional clients — hedge funds, asset managers, and financial institutions. It provides prime brokerage services, clearing, lending, and cross-margining across traditional and crypto markets. It processes billions in daily volume." },
    { question: "How much did Ripple pay for Hidden Road?", answer: "Ripple acquired Hidden Road for approximately $1.25 billion, making it the largest acquisition in Ripple's history and one of the largest in the crypto industry. The deal was announced in April 2025." },
    { question: "Why did Ripple buy Hidden Road?", answer: "Hidden Road gives Ripple direct access to institutional trading infrastructure — prime brokerage, clearing, and credit services. This complements Ripple's existing payments, custody, and stablecoin products, creating a full-stack institutional crypto platform." },
    { question: "How does the Hidden Road acquisition affect XRP?", answer: "Hidden Road's institutional clients gain seamless access to XRP through Ripple's ecosystem. RLUSD can be used as collateral in Hidden Road's prime brokerage services. The XRPL can serve as post-trade infrastructure, potentially settling trades on-chain. This creates new institutional demand channels for XRP." },
    { question: "What is prime brokerage?", answer: "Prime brokerage is a suite of services that banks and financial firms offer to institutional clients — including lending, leveraged trading, clearing, custody, and risk management. It's the infrastructure backbone of institutional trading. Hidden Road provides these services across both traditional and crypto markets." },
  ]),
];

const faqItems = [
  { q: "What is Hidden Road?", a: "A global prime brokerage and credit network serving hedge funds, asset managers, and institutions. Provides prime brokerage, clearing, lending, and cross-margining across traditional and crypto markets. Processes billions daily." },
  { q: "How much did Ripple pay?", a: "Approximately $1.25 billion — Ripple's largest acquisition and one of the biggest in crypto history. Announced April 2025." },
  { q: "Why did Ripple buy it?", a: "Adds institutional trading infrastructure — prime brokerage, clearing, credit. Completes Ripple's full-stack institutional platform alongside payments, custody, and RLUSD." },
  { q: "How does it affect XRP?", a: "Institutional clients get seamless XRP access. RLUSD can be used as prime brokerage collateral. XRPL can serve as post-trade settlement infrastructure. New institutional demand channels." },
  { q: "What is prime brokerage?", a: "Services banks offer institutional clients — lending, leveraged trading, clearing, custody, risk management. The infrastructure backbone of institutional trading." },
  { q: "Who are Hidden Road's clients?", a: "Over 300 institutional clients including hedge funds, asset managers, and financial institutions. Multi-asset coverage across equities, FX, fixed income, and crypto." },
];

export default function HiddenRoadAcquisitionPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Ripple's Hidden Road Acquisition:"
          titleAccent="What It Means for XRP"
          subtitle="Ripple's $1.25 billion acquisition of Hidden Road is its biggest deal ever — and it fundamentally changes Ripple's position in institutional finance."
          breadcrumbLabel="Hidden Road Acquisition"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Ripple acquired <strong className="text-text-primary">Hidden Road</strong> for <strong className="text-text-primary">$1.25 billion</strong> (April 2025) — gaining a prime brokerage serving 300+ institutional clients. This gives <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> institutional trading infrastructure, creates new demand channels for <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link>, and positions <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link> as prime brokerage collateral.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Deal Size", value: "$1.25 billion" },
          { label: "Announced", value: "April 2025" },
          { label: "Target", value: "Hidden Road (prime brokerage)" },
          { label: "Clients", value: "300+ institutional" },
          { label: "Daily Volume", value: "Billions processed" },
          { label: "Strategic Value", value: "Full-stack institutional platform" },
        ]} />

        <SectionNav items={[
          { id: "the-deal", label: "The Deal" },
          { id: "what-is-hidden-road", label: "Hidden Road" },
          { id: "strategic-rationale", label: "Why It Matters" },
          { id: "xrp-impact", label: "XRP Impact" },
          { id: "full-stack", label: "Ripple's Full Stack" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Deal" value="$1.25B" delay={0} />
          <StatPill label="Clients" value="300+" delay={0.06} />
          <StatPill label="Type" value="Prime Broker" delay={0.12} />
          <StatPill label="Year" value="2025" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="the-deal">
            <h2 className="text-2xl font-bold text-text-primary">The $1.25 Billion Deal</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In April 2025, Ripple announced the acquisition of <strong className="text-text-primary">Hidden Road</strong> for approximately $1.25 billion. It was the <strong className="text-text-primary">largest acquisition in Ripple&apos;s history</strong> and one of the biggest deals in the crypto industry — signaling Ripple&apos;s aggressive expansion into institutional financial infrastructure.
            </p>
            <div className="mt-6">
              <GlowCard
                title="Largest Crypto M&A"
                value="$1.25 Billion"
                subtitle="One of the biggest acquisitions in crypto industry history"
              />
            </div>
          </RevealSection>

          <RevealSection id="what-is-hidden-road" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Is Hidden Road?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Hidden Road</strong> is a global prime brokerage and credit network founded in 2018. It provides institutional-grade financial services across both traditional and digital asset markets.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Prime Brokerage", desc: "Lending, leverage, clearing, and settlement services for institutional traders — hedge funds, asset managers, family offices." },
                { title: "Credit Network", desc: "Cross-margining across asset classes, enabling capital efficiency for institutional clients." },
                { title: "Multi-Asset", desc: "Covers equities, FX, fixed income, and crypto — bridging traditional and digital finance." },
                { title: "Scale", desc: "300+ institutional clients, billions in daily processing volume, global operations." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="strategic-rationale" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why This Deal Matters</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Institutional Distribution", desc: "Hidden Road's 300+ institutional clients immediately gain access to Ripple's products — XRP, RLUSD, Ripple Payments, and Custody." },
                { title: "Prime Brokerage for Crypto", desc: "Prime brokerage is how institutions access capital markets. Ripple now owns this infrastructure layer for crypto." },
                { title: "RLUSD as Collateral", desc: "RLUSD can be used as margin collateral within Hidden Road's prime brokerage — driving stablecoin demand and utility." },
                { title: "Post-Trade on XRPL", desc: "The XRPL can serve as settlement infrastructure for Hidden Road's trades, bringing institutional transaction volume on-chain." },
                { title: "Competitive Moat", desc: "No other crypto company owns a full-stack institutional platform: payments + custody + stablecoin + prime brokerage." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="xrp-impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on XRP</h2>
            <div className="mt-6">
              <DataTable
                headers={["Impact Channel", "How It Works"]}
                rows={[
                  ["Institutional Access", "300+ hedge funds and asset managers get seamless XRP trading access"],
                  ["RLUSD Demand", "RLUSD as prime brokerage collateral drives stablecoin adoption"],
                  ["On-Chain Settlement", "XRPL as post-trade infrastructure increases on-chain activity"],
                  ["Ecosystem Growth", "Full-stack platform attracts more institutions to the Ripple/XRP ecosystem"],
                  ["Liquidity Depth", "More institutional participants = deeper XRP liquidity"],
                ]}
                highlightCol={0}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="The Big Picture" variant="accent">
                <p>Hidden Road transforms Ripple from a <em>payments company that sells XRP</em> into an <strong className="text-text-primary">institutional financial infrastructure company</strong> where XRP and RLUSD are embedded into the plumbing of institutional finance.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="full-stack" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ripple&apos;s Full-Stack Platform</h2>
            <div className="mt-6">
              <DataTable
                headers={["Product", "Function", "Acquisition"]}
                rows={[
                  ["Ripple Payments", "Cross-border payments", "Built in-house"],
                  ["Ripple Custody", "Institutional storage", "Metaco ($250M, 2023)"],
                  ["RLUSD", "Stablecoin", "Built in-house (NYDFS approved)"],
                  ["Liquidity Hub", "Crypto access", "Built in-house"],
                  ["Hidden Road", "Prime brokerage", "$1.25B (2025)"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/ripple-custody", label: "Ripple Custody", desc: "Institutional storage" },
              { href: "/learn/ripple-liquidity-hub", label: "Liquidity Hub", desc: "Enterprise crypto access" },
              { href: "/learn/ripple-stablecoin-strategy", label: "Stablecoin Strategy", desc: "RLUSD" },
              { href: "/learn/brad-garlinghouse", label: "Brad Garlinghouse", desc: "Ripple's CEO" },
              { href: "/learn/what-is-ripple", label: "What Is Ripple?", desc: "Company overview" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand Ripple's Strategy"
          description="Hidden Road is one piece of Ripple's vision. Learn about the full institutional platform."
          primaryHref="/learn/what-is-ripple"
          primaryLabel="What Is Ripple? →"
          secondaryHref="/learn/ripple-stablecoin-strategy"
          secondaryLabel="Stablecoin Strategy"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, Bloomberg, CoinDesk, The Block.</em>
        </p>
      </div>
    </>
  );
}
