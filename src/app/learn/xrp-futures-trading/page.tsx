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
  title: "XRP Futures Trading Explained: Leverage & Contracts | AllAboutXRP",
  description: "How to trade XRP futures — perpetuals, funding rates, leverage management, and top platforms for XRP derivatives.",
  keywords: ["XRP futures","XRP futures trading","XRP perpetual","leveraged XRP trading"],
  openGraph: { title: "XRP Futures Trading Explained: Leverage & Contracts", description: "How to trade XRP futures — perpetuals, funding rates, leverage management, and top platforms for XRP derivatives.", url: "https://allaboutxrp.com/learn/xrp-futures-trading", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Futures Trading Explained: Leverage & Contracts", description: "How to trade XRP futures — perpetuals, funding rates, leverage management, and top platforms for XRP derivatives." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-futures-trading" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Futures Trading Explained: Leverage & Contracts", description: "How to trade XRP futures — perpetuals, funding rates, leverage management, and top platforms for XRP derivatives.", url: "https://allaboutxrp.com/learn/xrp-futures-trading", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Futures Trading" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-futures-trading" }),
  buildFAQSchema([
    { question: "What are perps?", answer: "No-expiry derivatives with funding rate to track spot." },
    { question: "How much leverage?", answer: "2-5x for most. Higher = closer liquidation." },
    { question: "Can I short?", answer: "Yes. Profit when price declines." },
    { question: "Funding rate?", answer: "Periodic payment between longs/shorts." },
    { question: "US access?", answer: "Limited. Most platforms unavailable to US." },
  ]),
];

const faqItems = [
  { q: "What are perps?", a: "No-expiry derivatives with funding rate to track spot." },
  { q: "How much leverage?", a: "2-5x for most. Higher = closer liquidation." },
  { q: "Can I short?", a: "Yes. Profit when price declines." },
  { q: "Funding rate?", a: "Periodic payment between longs/shorts." },
  { q: "US access?", a: "Limited. Most platforms unavailable to US." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Futures Trading Explained" titleAccent="Leverage & Contracts" subtitle="How to trade XRP futures — perpetuals, funding rates, leverage management, and top platforms for XRP derivatives." breadcrumbLabel="Futures Trading">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Trade XRP long or short with leverage. Perpetuals (no expiry) most popular. 2-5x max for most. Liquidation risk is real. Paper trade first.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Type", value: "Perpetual" },
          { label: "Max Leverage", value: "100x" },
          { label: "Funding", value: "Every 8h" },
          { label: "Settlement", value: "USDT/Coin" },
          { label: "Top", value: "Binance" },
          { label: "Risk", value: "Liquidation" },
        ]} />

        <SectionNav items={[
          { id: "basics", label: "Basics" },
          { id: "perps", label: "Perpetuals" },
          { id: "leverage", label: "Leverage" },
          { id: "platforms", label: "Platforms" },
          { id: "risks", label: "Risks" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Volume" value="$2B+/day" delay={0.00} />
          <StatPill label="Leverage" value="100x" delay={0.06} />
          <StatPill label="OI" value="$500M+" delay={0.12} />
          <StatPill label="Types" value="Perps+Quarterly" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="basics">
            <h2 className="text-2xl font-bold text-text-primary">What Are XRP Futures?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Speculate without owning. Go <strong className="text-text-primary">long</strong> or <strong className="text-text-primary">short</strong> with leverage.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[{title:"Long",desc:"Profit when up."},{title:"Short",desc:"Profit when down."},{title:"Leverage",desc:"10x = $1K controls $10K."},{title:"Margin",desc:"Your collateral."}]} /></div>
          </RevealSection>
          <RevealSection id="perps" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Perpetuals</h2>
            <div className="mt-6"><IconList items={[{title:"No Expiry",desc:"Hold indefinitely."},{title:"Funding Rate",desc:"Paid every 8h."},{title:"Mark Price",desc:"Fair value liquidation."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="leverage" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Leverage Guide</h2>
            <div className="mt-6"><DataTable headers={["Lev","Controls","Liq Dist"]} rows={[["2x","$2K","~50%"],["5x","$5K","~20%"],["10x","$10K","~10%"],["100x","$100K","~1%"]]} highlightCol={2} /></div>
            <div className="mt-6"><HighlightBox title="⚠️" variant="warning"><p>100x: 1% move = liquidation. Use 2-5x max.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="platforms" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Platforms</h2>
            <div className="mt-6"><DataTable headers={["Platform","Lev","Fees"]} rows={[["Binance","125x","0.02/0.04%"],["Bybit","100x","0.02/0.055%"],["OKX","100x","0.02/0.05%"],["dYdX","20x","0-0.05%"]]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="risks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risks</h2>
            <div className="mt-6"><IconList items={[{title:"Liquidation",desc:"Lose entire margin."},{title:"Funding",desc:"Costs erode profits."},{title:"Overleverage",desc:"#1 loss cause."},{title:"Emotions",desc:"Leverage amplifies fear/greed."},{title:"Exchange Risk",desc:"Outages during volatility."}]} variant="warn" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-day-trading-guide", label: "Day Trading", desc: "Strategies" },
              { href: "/learn/xrp-order-types-explained", label: "Orders", desc: "Types" },
              { href: "/learn/xrp-technical-analysis-guide", label: "TA", desc: "Charts" },
              { href: "/learn/best-xrp-exchanges", label: "Exchanges", desc: "Compare" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Timing" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell/Hold", desc: "Framework" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Learn First" description="Master fundamentals before leverage." primaryHref="/learn/xrp-technical-analysis-guide" primaryLabel="TA Guide →" secondaryHref="/learn/xrp-day-trading-guide" secondaryLabel="Day Trading" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
