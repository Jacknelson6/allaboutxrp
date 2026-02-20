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
  robots: { index: false, follow: true },
  title: "XRP On-Chain Analysis: Read the Blockchain Like a Pro | AllAboutXRP",
  description: "How to analyze XRP on-chain data. Active addresses, transaction volume, whale activity, and what on-chain signals mean for price.",
  keywords: ["XRP on-chain analysis","XRP blockchain data","XRP on-chain metrics","XRP chain analysis"],
  openGraph: { title: "XRP On-Chain Analysis: Read the Blockchain Like a Pro", description: "How to analyze XRP on-chain data. Active addresses, transaction volume, whale activity, and what on-chain signals mean for price.", url: "https://allaboutxrp.com/learn/xrp-on-chain-analysis", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP On-Chain Analysis: Read the Blockchain Like a Pro", description: "How to analyze XRP on-chain data. Active addresses, transaction volume, whale activity, and what on-chain signals mean for price." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-on-chain-analysis" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP On-Chain Analysis: Read the Blockchain Like a Pro", description: "How to analyze XRP on-chain data. Active addresses, transaction volume, whale activity, and what on-chain signals mean for price.", url: "https://allaboutxrp.com/learn/xrp-on-chain-analysis", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "On-Chain Analysis" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-on-chain-analysis" }),
  buildFAQSchema([
    { question: "What is it?", answer: "Studying blockchain data to understand market dynamics." },
    { question: "Key metrics?", answer: "Active addresses, exchange flows, whale volume." },
    { question: "Track whales?", answer: "XRPScan, Bithomp, Whale Alert." },
    { question: "vs TA?", answer: "Complementary. On-chain = behavior. TA = patterns." },
    { question: "Free tools?", answer: "XRPScan, Bithomp, Santiment free tier." },
  ]),
];

const faqItems = [
  { q: "What is it?", a: "Studying blockchain data to understand market dynamics." },
  { q: "Key metrics?", a: "Active addresses, exchange flows, whale volume." },
  { q: "Track whales?", a: "XRPScan, Bithomp, Whale Alert." },
  { q: "vs TA?", a: "Complementary. On-chain = behavior. TA = patterns." },
  { q: "Free tools?", a: "XRPScan, Bithomp, Santiment free tier." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP On-Chain Analysis" titleAccent="Read the Blockchain Like a Pro" subtitle="How to analyze XRP on-chain data. Active addresses, transaction volume, whale activity, and what on-chain signals mean for price." breadcrumbLabel="On-Chain Analysis">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>On-chain = what holders actually do. Key signals: active addresses (usage), whale moves (big players), exchange flows (buy/sell pressure). Net outflow + rising price = bullish.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Key", value: "Active Addresses" },
          { label: "Whale", value: ">1M XRP Txns" },
          { label: "Flow", value: "In vs Out" },
          { label: "Tools", value: "XRPScan, Santiment" },
          { label: "Native", value: "Bithomp" },
          { label: "Speed", value: "Real-time" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "Overview" },
          { id: "metrics", label: "Metrics" },
          { id: "whale", label: "Whales" },
          { id: "exchange", label: "Exchange Flows" },
          { id: "tools", label: "Tools" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Addresses" value="5M+" delay={0.00} />
          <StatPill label="Txns" value="1M+/day" delay={0.06} />
          <StatPill label="Whales" value="100+" delay={0.12} />
          <StatPill label="Data" value="Real-time" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is On-Chain Analysis?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Studies blockchain data to see what holders <em>actually do</em>, beyond <Link href="/learn/xrp-technical-analysis-guide" className="text-xrp-accent underline decoration-xrp-accent/30">price charts</Link>.</p>
          </RevealSection>
          <RevealSection id="metrics" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Metrics</h2>
            <div className="mt-6"><DataTable headers={["Metric","Shows","Bullish","Bearish"]} rows={[["Active Addresses","Usage","Rising","Declining"],["Tx Volume","Money flow","Up","Down"],["Exchange Balance","Supply","Down","Up"],["Whale Holdings","Conviction","Accumulating","Distributing"]]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="whale" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Whale Tracking</h2>
            <div className="mt-6"><IconList items={[{title:"Accumulation",desc:"Off-exchange = bullish."},{title:"Distribution",desc:"To exchanges = sell pressure."},{title:"Clustering",desc:"Multiple whales = conviction."}]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Track on <Link href="/learn/xrp-block-explorers" className="text-xrp-accent underline decoration-xrp-accent/30">block explorers</Link>.</p>
          </RevealSection>
          <RevealSection id="exchange" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Exchange Flows</h2>
            <div className="mt-6"><HighlightBox title="Signal" variant="accent"><p><strong>Net outflow + rising price = bullish.</strong></p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="tools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tools</h2>
            <div className="mt-6"><DataTable headers={["Tool","Focus","Cost","XRP"]} rows={[["XRPScan","XRPL native","Free","Excellent"],["Bithomp","XRPL native","Free","Excellent"],["Santiment","Social+chain","Freemium","Good"],["CryptoQuant","Flows","Freemium","Good"]]} highlightCol={0} /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-block-explorers", label: "Explorers", desc: "Track data" },
              { href: "/learn/xrp-technical-analysis-guide", label: "TA", desc: "Charts" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Patterns" },
              { href: "/learn/xrp-day-trading-guide", label: "Trading", desc: "Active" },
              { href: "/learn/xrp-portfolio-trackers", label: "Trackers", desc: "Holdings" },
              { href: "/learn/what-is-xrp-ledger", label: "XRPL", desc: "Basics" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Analyze the Chain" description="Use data to make informed decisions." primaryHref="/learn/xrp-block-explorers" primaryLabel="Explorers →" secondaryHref="/learn/xrp-technical-analysis-guide" secondaryLabel="TA Guide" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
