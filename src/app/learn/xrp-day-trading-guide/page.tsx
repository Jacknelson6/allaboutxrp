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
  title: "XRP Day Trading Guide: Intraday Strategies (2026) | AllAboutXRP",
  description: "Complete XRP day trading guide — intraday setups, volatility patterns, exchange selection, and risk management for active traders.",
  keywords: ["XRP day trading","day trade XRP","XRP intraday","XRP scalping"],
  openGraph: { title: "XRP Day Trading Guide: Intraday Strategies (2026)", description: "Complete XRP day trading guide — intraday setups, volatility patterns, exchange selection, and risk management for active traders.", url: "https://allaboutxrp.com/learn/xrp-day-trading-guide", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Day Trading Guide: Intraday Strategies (2026)", description: "Complete XRP day trading guide — intraday setups, volatility patterns, exchange selection, and risk management for active traders." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-day-trading-guide" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Day Trading Guide: Intraday Strategies (2026)", description: "Complete XRP day trading guide — intraday setups, volatility patterns, exchange selection, and risk management for active traders.", url: "https://allaboutxrp.com/learn/xrp-day-trading-guide", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Day Trading" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-day-trading-guide" }),
  buildFAQSchema([
    { question: "Good for day trading?", answer: "Yes. $1B+ volume, tight spreads, 24/7." },
    { question: "How much needed?", answer: "$500-1K min, $5K+ better." },
    { question: "Best timeframe?", answer: "5m/15m entries, 1h/4h trend." },
    { question: "Success rate?", answer: "~10%. Requires discipline." },
    { question: "Leverage?", answer: "Beginners: avoid. Max 3-5x for experienced." },
  ]),
];

const faqItems = [
  { q: "Good for day trading?", a: "Yes. $1B+ volume, tight spreads, 24/7." },
  { q: "How much needed?", a: "$500-1K min, $5K+ better." },
  { q: "Best timeframe?", a: "5m/15m entries, 1h/4h trend." },
  { q: "Success rate?", a: "~10%. Requires discipline." },
  { q: "Leverage?", a: "Beginners: avoid. Max 3-5x for experienced." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Day Trading Guide" titleAccent="Intraday Strategies (2026)" subtitle="Complete XRP day trading guide — intraday setups, volatility patterns, exchange selection, and risk management for active traders." breadcrumbLabel="Day Trading">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRP: $1B+ daily volume, tight spreads, 24/7 markets. ~90% of day traders lose money. Risk 1-2% per trade max. Use limit orders, stop losses, low-fee exchanges.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Pair", value: "XRP/USDT" },
          { label: "Risk/Trade", value: "1-2%" },
          { label: "Timeframes", value: "5m,15m,1h" },
          { label: "Hours", value: "24/7" },
          { label: "Success", value: "~10%" },
          { label: "Tools", value: "Charts + L2" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "setups", label: "Setups" },
          { id: "risk", label: "Risk Mgmt" },
          { id: "exchanges", label: "Exchanges" },
          { id: "mistakes", label: "Mistakes" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Volume" value="$1B+/day" delay={0.00} />
          <StatPill label="Spread" value="<0.1%" delay={0.06} />
          <StatPill label="Volatility" value="3-8%" delay={0.12} />
          <StatPill label="Pairs" value="100+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Why Day Trade XRP?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">$1B+ daily volume, tight spreads, 3-8% daily moves. But <strong className="text-text-primary">~90% lose money</strong>.</p>
            <div className="mt-6"><HighlightBox title="⚠️ Warning" variant="warning"><p>Most day traders lose money. Paper trade first.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="setups" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Setups</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[{title:"Support/Resistance",desc:"Bounce trades with tight stops."},{title:"Breakouts",desc:"Volume-confirmed consolidation breaks."},{title:"Scalping",desc:"0.5-1% on 1-5m charts."},{title:"News",desc:"XRP reacts to Ripple/SEC/ETF news."}]} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">See <Link href="/learn/xrp-technical-analysis-guide" className="text-xrp-accent underline decoration-xrp-accent/30">TA guide</Link> and <Link href="/learn/xrp-order-types-explained" className="text-xrp-accent underline decoration-xrp-accent/30">order types</Link>.</p>
          </RevealSection>
          <RevealSection id="risk" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk Management</h2>
            <div className="mt-6"><IconList items={[{title:"1-2% Rule",desc:"Max risk per trade."},{title:"Stop Losses",desc:"Always. No exceptions."},{title:"2:1 R/R",desc:"Minimum reward-to-risk."},{title:"Daily Limit",desc:"Stop after -3-5%."},{title:"Position Size",desc:"Calculate from stop distance."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="exchanges" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Exchanges</h2>
            <div className="mt-6"><DataTable headers={["Exchange","Maker","Taker","Vol"]} rows={[["Binance","0.02%","0.04%","Highest"],["Bybit","0.02%","0.055%","High"],["Kraken","0.16%","0.26%","Med"]]} highlightCol={0} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/best-xrp-exchanges" className="text-xrp-accent underline decoration-xrp-accent/30">Full comparison</Link></p>
          </RevealSection>
          <RevealSection id="mistakes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Mistakes</h2>
            <div className="mt-6"><IconList items={[{title:"Overtrading",desc:"2-3 good setups/day is enough."},{title:"No Stops",desc:"Hoping losers reverse."},{title:"Revenge Trading",desc:"Take a break."},{title:"Ignoring Fees",desc:"Edge must exceed fees."},{title:"FOMO",desc:"Wait for pullbacks."}]} variant="warn" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-technical-analysis-guide", label: "TA Guide", desc: "Charts" },
              { href: "/learn/xrp-order-types-explained", label: "Orders", desc: "Types" },
              { href: "/learn/xrp-futures-trading", label: "Futures", desc: "Leverage" },
              { href: "/learn/best-xrp-exchanges", label: "Exchanges", desc: "Compare" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Timing" },
              { href: "/learn/xrp-on-chain-analysis", label: "On-Chain", desc: "Data" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Trading" description="Choose a low-fee exchange." primaryHref="/learn/best-xrp-exchanges" primaryLabel="Exchanges →" secondaryHref="/learn/xrp-technical-analysis-guide" secondaryLabel="Learn TA" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
