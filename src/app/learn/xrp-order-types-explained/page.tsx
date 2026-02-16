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
  title: "XRP Order Types Explained: Market, Limit, Stop & More | AllAboutXRP",
  description: "Every order type for trading XRP — market, limit, stop-loss, OCO, and XRPL-native offers. When and how to use each one.",
  keywords: ["XRP order types","XRP limit order","XRP stop loss","XRP market order"],
  openGraph: { title: "XRP Order Types Explained: Market, Limit, Stop & More", description: "Every order type for trading XRP — market, limit, stop-loss, OCO, and XRPL-native offers. When and how to use each one.", url: "https://allaboutxrp.com/learn/xrp-order-types-explained", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Order Types Explained: Market, Limit, Stop & More", description: "Every order type for trading XRP — market, limit, stop-loss, OCO, and XRPL-native offers. When and how to use each one." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-order-types-explained" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Order Types Explained: Market, Limit, Stop & More", description: "Every order type for trading XRP — market, limit, stop-loss, OCO, and XRPL-native offers. When and how to use each one.", url: "https://allaboutxrp.com/learn/xrp-order-types-explained", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Order Types" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-order-types-explained" }),
  buildFAQSchema([
    { question: "Market or limit?", answer: "Limit for price + fees. Market for speed." },
    { question: "What is stop-loss?", answer: "Auto-sell at your set level." },
    { question: "OCO?", answer: "Combines take-profit and stop-loss." },
    { question: "XRPL offers?", answer: "On-chain limit orders. No exchange needed." },
    { question: "Slippage?", answer: "Diff between expected and actual price. Limit orders eliminate it." },
  ]),
];

const faqItems = [
  { q: "Market or limit?", a: "Limit for price + fees. Market for speed." },
  { q: "What is stop-loss?", a: "Auto-sell at your set level." },
  { q: "OCO?", a: "Combines take-profit and stop-loss." },
  { q: "XRPL offers?", a: "On-chain limit orders. No exchange needed." },
  { q: "Slippage?", a: "Diff between expected and actual price. Limit orders eliminate it." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Order Types Explained" titleAccent="Market, Limit, Stop & More" subtitle="Every order type for trading XRP — market, limit, stop-loss, OCO, and XRPL-native offers. When and how to use each one." breadcrumbLabel="Order Types">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Market = instant. Limit = your price. Stop-loss = protection. OCO = combo. XRPL offers = native on-chain limit orders. Limit orders save fees; stop losses save portfolios.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Common", value: "Market & Limit" },
          { label: "Protection", value: "Stop-Loss" },
          { label: "Advanced", value: "OCO, Trailing" },
          { label: "XRPL", value: "Offers" },
          { label: "Speed", value: "Market" },
          { label: "Value", value: "Limit" },
        ]} />

        <SectionNav items={[
          { id: "market", label: "Market" },
          { id: "limit", label: "Limit" },
          { id: "stop", label: "Stop-Loss" },
          { id: "advanced", label: "Advanced" },
          { id: "xrpl", label: "XRPL Offers" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Types" value="6+" delay={0.00} />
          <StatPill label="Fastest" value="Market" delay={0.06} />
          <StatPill label="Cheapest" value="Limit" delay={0.12} />
          <StatPill label="Safest" value="Stop-Loss" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="market">
            <h2 className="text-2xl font-bold text-text-primary">Market Orders</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Instant at best price. No price guarantee. Higher taker fees.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[{title:"✅ Pros",desc:"Instant. Guaranteed fill."},{title:"❌ Cons",desc:"Slippage. Higher fees."}]} /></div>
          </RevealSection>
          <RevealSection id="limit" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Limit Orders</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Set your price. Only executes at your price or better. Lower maker fees.</p>
            <div className="mt-6"><HighlightBox title="Fee Savings" variant="accent"><p>Binance: maker 0.02% vs taker 0.04%. Adds up for <Link href="/learn/xrp-day-trading-guide" className="text-xrp-accent underline decoration-xrp-accent/30">active traders</Link>.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="stop" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Stop-Loss Orders</h2>
            <div className="mt-6"><DataTable headers={["Type","Trigger","Exec","Best For"]} rows={[["Stop Market","At price","Market","Guaranteed exit"],["Stop Limit","At price","Limit","Price control"],["Trailing","% from high","Market","Lock profits"]]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="advanced" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Advanced</h2>
            <div className="mt-6"><IconList items={[{title:"OCO",desc:"Take-profit + stop-loss combo."},{title:"Trailing Stop",desc:"Follows price up by %."},{title:"Iceberg",desc:"Hides large orders."},{title:"Post-Only",desc:"Ensures maker fee."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="xrpl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Offers</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Native limit orders on <Link href="/learn/how-to-use-xrpl-dex" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DEX</Link>. Cost: ~0.00001 XRP. Auto-bridging for best execution.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-day-trading-guide", label: "Day Trading", desc: "Strategies" },
              { href: "/learn/xrp-futures-trading", label: "Futures", desc: "Leverage" },
              { href: "/learn/how-to-use-xrpl-dex", label: "XRPL DEX", desc: "On-chain" },
              { href: "/learn/best-xrp-exchanges", label: "Exchanges", desc: "Compare" },
              { href: "/learn/xrp-technical-analysis-guide", label: "TA", desc: "Charts" },
              { href: "/learn/best-xrp-trading-pairs", label: "Pairs", desc: "Selection" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Master Orders" description="Right order for every situation." primaryHref="/learn/xrp-day-trading-guide" primaryLabel="Day Trading →" secondaryHref="/learn/best-xrp-exchanges" secondaryLabel="Exchanges" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
