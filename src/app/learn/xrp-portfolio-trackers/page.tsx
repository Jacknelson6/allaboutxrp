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
  title: "Best XRP Portfolio Trackers: Monitor Your Holdings (2026) | AllAboutXRP",
  description: "Best apps and tools to track your XRP portfolio. Real-time prices, P&L tracking, tax integration, and multi-wallet support.",
  keywords: ["XRP portfolio tracker","track XRP holdings","XRP portfolio app","crypto tracker XRP"],
  openGraph: { title: "Best XRP Portfolio Trackers: Monitor Your Holdings (2026)", description: "Best apps and tools to track your XRP portfolio. Real-time prices, P&L tracking, tax integration, and multi-wallet support.", url: "https://allaboutxrp.com/learn/xrp-portfolio-trackers", type: "article" },
  twitter: { card: "summary_large_image", title: "Best XRP Portfolio Trackers: Monitor Your Holdings (2026)", description: "Best apps and tools to track your XRP portfolio. Real-time prices, P&L tracking, tax integration, and multi-wallet support." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-portfolio-trackers" },
};

const schemas = [
  buildArticleSchema({ headline: "Best XRP Portfolio Trackers: Monitor Your Holdings (2026)", description: "Best apps and tools to track your XRP portfolio. Real-time prices, P&L tracking, tax integration, and multi-wallet support.", url: "https://allaboutxrp.com/learn/xrp-portfolio-trackers", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Portfolio Trackers" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-portfolio-trackers" }),
  buildFAQSchema([
    { question: "Best free XRP portfolio tracker?", answer: "CoinGecko portfolio is free with price tracking. For more features, Delta and CoinMarketCap are also free." },
    { question: "Which tracks taxes?", answer: "CoinTracker and Koinly generate tax reports (Form 8949) and support multiple cost basis methods." },
    { question: "Can I connect my XRPL wallet?", answer: "Some trackers support direct XRPL wallet connection. Others require manual entry or exchange API import." },
    { question: "Do I need a paid tracker?", answer: "Free trackers work for simple holdings. If you trade actively or need tax reports, paid tools (CoinTracker, Koinly) are worth it." },
    { question: "Can I track airdrops?", answer: "CoinTracker and Koinly auto-detect airdrops and classify them as income for tax purposes." },
  ]),
];

const faqItems = [
  { q: "Best free XRP portfolio tracker?", a: "CoinGecko portfolio is free with price tracking. For more features, Delta and CoinMarketCap are also free." },
  { q: "Which tracks taxes?", a: "CoinTracker and Koinly generate tax reports (Form 8949) and support multiple cost basis methods." },
  { q: "Can I connect my XRPL wallet?", a: "Some trackers support direct XRPL wallet connection. Others require manual entry or exchange API import." },
  { q: "Do I need a paid tracker?", a: "Free trackers work for simple holdings. If you trade actively or need tax reports, paid tools (CoinTracker, Koinly) are worth it." },
  { q: "Can I track airdrops?", a: "CoinTracker and Koinly auto-detect airdrops and classify them as income for tax purposes." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="Best XRP Portfolio Trackers" titleAccent="Monitor Your Holdings (2026)" subtitle="Best apps and tools to track your XRP portfolio — real-time prices, P&L, tax integration." breadcrumbLabel="Portfolio Trackers">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Best XRP portfolio trackers: CoinTracker (tax integration), Koinly (tax reports), CoinGecko (free tracking), Delta (mobile app). Choose based on whether you need simple tracking or tax reporting.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Best Free", value: "CoinGecko" },
          { label: "Best Tax", value: "CoinTracker" },
          { label: "Best Mobile", value: "Delta" },
          { label: "Tax Reports", value: "CoinTracker, Koinly" },
          { label: "Multi-Wallet", value: "All" },
          { label: "XRPL Support", value: "Varies" },
        ]} />

        <SectionNav items={[
          { id: "comparison", label: "Comparison" },
          { id: "cointracker", label: "CoinTracker" },
          { id: "koinly", label: "Koinly" },
          { id: "free", label: "Free Options" },
          { id: "choosing", label: "How to Choose" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Trackers" value="5+" delay={0.00} />
          <StatPill label="Best Free" value="CoinGecko" delay={0.06} />
          <StatPill label="Best Tax" value="CoinTracker" delay={0.12} />
          <StatPill label="Best App" value="Delta" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">Tracker Comparison</h2>
            <div className="mt-6"><DataTable headers={["Tracker","Price","Tax Reports","Mobile","XRP Support"]} rows={[["CoinTracker","Free-$199/yr","Yes","Yes","Excellent"],["Koinly","Free-$279/yr","Yes","Yes","Good"],["CoinGecko","Free","No","Yes","Good"],["Delta","Free-$60/yr","No","Yes (best)","Good"],["CoinMarketCap","Free","No","Yes","Basic"]]} highlightCol={0} /></div>
            <div className="mt-6"><HighlightBox title="💰 Recommended" variant="accent"><p>Tax-focused: <a href="https://allaboutxrp.com/go/cointracker" className="text-xrp-accent underline">CoinTracker</a> | <a href="https://allaboutxrp.com/go/koinly" className="text-xrp-accent underline">Koinly</a>. Free tracking: CoinGecko.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="cointracker" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">CoinTracker</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Best for US taxpayers. Auto-imports from 500+ exchanges, generates Form 8949, supports all <Link href="/learn/xrp-cost-basis-methods" className="text-xrp-accent underline decoration-xrp-accent/30">cost basis methods</Link>, and identifies <Link href="/learn/xrp-tax-loss-harvesting" className="text-xrp-accent underline decoration-xrp-accent/30">tax-loss harvesting</Link> opportunities.</p>
          </RevealSection>

          <RevealSection id="koinly" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Koinly</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Strong international support. Generates tax reports for 20+ countries. Handles DeFi, airdrops, and staking income automatically.</p>
          </RevealSection>

          <RevealSection id="free" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Free Options</h2>
            <div className="mt-6"><IconList items={[
              {title:"CoinGecko",desc:"Free portfolio tracking with real-time prices. No tax features."},
              {title:"Delta",desc:"Best mobile app. Beautiful UI, multi-exchange support. Free tier generous."},
              {title:"CoinMarketCap",desc:"Basic portfolio tracking. Good for quick price checks."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="choosing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Choose</h2>
            <div className="mt-6"><IconList items={[
              {title:"Need Tax Reports?",desc:"CoinTracker or Koinly. Worth the cost at tax time."},
              {title:"Just Price Tracking?",desc:"CoinGecko or Delta. Free and effective."},
              {title:"Active Trader?",desc:"CoinTracker for P&L tracking and tax optimization."},
              {title:"International?",desc:"Koinly supports 20+ country tax formats."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-block-explorers", label: "Block Explorers", desc: "On-chain tracking" },
              { href: "/learn/xrp-on-chain-analysis", label: "On-Chain Analysis", desc: "Blockchain data" },
              { href: "/learn/xrp-cost-basis-methods", label: "Cost Basis", desc: "Tax methods" },
              { href: "/learn/xrp-tax-loss-harvesting", label: "Tax Harvesting", desc: "Save on taxes" },
              { href: "/learn/xrp-airdrop-taxes", label: "Airdrop Taxes", desc: "Income reporting" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP", desc: "Security" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Track Your XRP" description="Start monitoring your portfolio today." primaryHref="https://allaboutxrp.com/go/cointracker" primaryLabel="Try CoinTracker →" secondaryHref="/learn/xrp-cost-basis-methods" secondaryLabel="Cost Basis" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
