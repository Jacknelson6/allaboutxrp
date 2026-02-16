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
  title: "XRP Whale Tracking: Follow the Big Money | AllAboutXRP",
  description: "How to track XRP whales. Tools, on-chain analysis, whale patterns, and what movements mean for price.",
  keywords: ["XRP whale tracking","XRP whale alert","XRP large holders","XRP on-chain"],
  openGraph: {
    title: "XRP Whale Tracking: Follow the Big Money",
    description: "How to track XRP whales. Tools, on-chain analysis, whale patterns, and what movements mean for price.",
    url: "https://allaboutxrp.com/learn/xrp-whale-tracking",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Whale Tracking: Follow the Big Money", description: "How to track XRP whales. Tools, on-chain analysis, whale patterns, and what movements mean for price." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-whale-tracking" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Whale Tracking: Follow the Big Money", description: "How to track XRP whales. Tools, on-chain analysis, whale patterns, and what movements mean for price.", url: "https://allaboutxrp.com/learn/xrp-whale-tracking", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Whale Tracking" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-whale-tracking" }),
  buildFAQSchema([
    { question: "How to track whales?", answer: "@whale_alert on X for alerts. XRPScan.com and Bithomp for analytics." },
    { question: "Do whales predict price?", answer: "Useful leading indicator. Exchange inflows precede selling, outflows = accumulation. Not guaranteed." },
    { question: "Is Ripple the biggest whale?", answer: "Yes. But most holdings are in escrow with predictable release schedules." },
    { question: "What does exchange inflow mean?", answer: "Large transfers to exchanges = sender likely intends to sell. Potential selling pressure." },
    { question: "Can whales manipulate XRP?", answer: "Can influence short-term. True for all crypto. Why risk management matters." },
  ]),
];

const faqItems = [
  { q: "How to track whales?", a: "@whale_alert on X for alerts. XRPScan.com and Bithomp for analytics." },
  { q: "Do whales predict price?", a: "Useful leading indicator. Exchange inflows precede selling, outflows = accumulation. Not guaranteed." },
  { q: "Is Ripple the biggest whale?", a: "Yes. But most holdings are in escrow with predictable release schedules." },
  { q: "What does exchange inflow mean?", a: "Large transfers to exchanges = sender likely intends to sell. Potential selling pressure." },
  { q: "Can whales manipulate XRP?", a: "Can influence short-term. True for all crypto. Why risk management matters." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Whale Tracking" titleAccent="Follow the Big Money" subtitle="Monitor large XRP holders. Whale activity often precedes major price moves." breadcrumbLabel="XRP Whale Tracking">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP whales</strong> — wallets with millions of XRP — can move markets. Track behavior for <strong className="text-text-primary">leading indicators</strong>. Whale Alert and <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL explorers</Link> monitor transfers. Key: exchange inflows (selling) vs outflows (accumulation).</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Whale", value: ">1M XRP" },
          { label: "Tool", value: "Whale Alert, XRPScan" },
          { label: "Escrow", value: "Ripple (monthly)" },
          { label: "Signal", value: "Leading indicator" },
          { label: "Exchange Flows", value: "Key metric" },
          { label: "Data", value: "Public on XRPL" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Are Whales" },
          { id: "tools", label: "Tools" },
          { id: "patterns", label: "Patterns" },
          { id: "flows", label: "Exchange Flows" },
          { id: "escrow", label: "Ripple Escrow" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Whale" value=">1M XRP" delay={0.00} />
          <StatPill label="Tool" value="Whale Alert" delay={0.06} />
          <StatPill label="Signal" value="Leading" delay={0.12} />
          <StatPill label="Data" value="Public" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Are XRP Whales?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Whales hold <strong className="text-text-primary">large amounts of XRP</strong>. Includes early investors, exchanges, Ripple, and institutions. Their activity impacts <Link href="/learn/xrp-price-history" className="text-xrp-accent underline decoration-xrp-accent/30">price</Link> significantly.</p>
            <div className="mt-6"><DataTable headers={["Tier","Holdings","Count","Impact"]} rows={[
              ["Mega",">100M XRP","~200","Severe"],
              ["Large","10M-100M","~1,500","High"],
              ["Medium","1M-10M","~15,000","Moderate"],
              ["Small","100K-1M","~100,000","Low-Mod"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="tools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tracking Tools</h2>
            <div className="mt-6"><IconList items={[
              {title:"Whale Alert",desc:"Real-time large transaction alerts. Follow @whale_alert on X."},
              {title:"XRPScan.com",desc:"Rich list, account details, transaction tracking."},
              {title:"Bithomp",desc:"Whale tracking with known account labels."},
              {title:"Santiment",desc:"On-chain analytics with whale metrics and exchange flows."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="patterns" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Whale Patterns</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Accumulation",desc:"Buying during dips. Exchange outflows to private wallets. Bullish."},
              {title:"Distribution",desc:"Moving to exchanges before selling. Exchange inflows. Bearish."},
              {title:"Wash Trading",desc:"Moving between own wallets for false activity. Verify linked accounts."},
              {title:"OTC Deals",desc:"Large wallet-to-wallet transfers bypassing exchanges. Institutional deals."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="flows" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Exchange Flow Analysis</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><strong className="text-text-primary">Inflows</strong> = potential selling. <strong className="text-text-primary">Outflows</strong> = accumulation (bullish). One of the most reliable <Link href="/learn/xrp-technical-analysis-guide" className="text-xrp-accent underline decoration-xrp-accent/30">on-chain signals</Link>.</p>
            <div className="mt-6"><HighlightBox title="Exchange Reserve" variant="accent"><p>Decreasing exchange XRP = holders moving to self-custody = bullish supply signal. Increasing = selling intent.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="escrow" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ripple&apos;s Escrow</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Ripple holds billions in <Link href="/learn/xrp-escrow-explained" className="text-xrp-accent underline decoration-xrp-accent/30">escrow</Link>, releasing up to 1B/month. Most re-escrowed. Track actual sales vs re-escrow for demand signals.</p>
            <div className="mt-6"><IconList items={[
              {title:"1B monthly release",desc:"Programmatic and predictable on the 1st of each month."},
              {title:"Mostly re-escrowed",desc:"Only small % actually sold. Rest goes back for future months."},
              {title:"OTC sales",desc:"Primarily to institutional buyers, not open market. Less price impact."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/best-xrp-trading-pairs", label: "Best Trading Pairs", desc: "Optimize your trades" },
              { href: "/learn/how-to-read-xrp-charts", label: "How to Read XRP Charts", desc: "Chart reading basics" },
              { href: "/learn/xrp-swing-trading-guide", label: "Swing Trading Guide", desc: "Medium-term strategy" },
              { href: "/learn/xrp-technical-analysis-guide", label: "Technical Analysis", desc: "Advanced TA for XRP" },
              { href: "/learn/xrp-accumulation-zones", label: "Accumulation Zones", desc: "Strategic buy levels" },
              { href: "/learn/xrp-price-history", label: "XRP Price History", desc: "Complete price timeline" },
              { href: "/learn/xrp-price-prediction", label: "XRP Price Prediction", desc: "Analyst forecasts" },
              { href: "/learn/xrp-price-potential", label: "XRP Price Potential", desc: "Realistic price analysis" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Track Smart Money" description="Monitor whale movements for better trading decisions." primaryHref="/learn/xrp-technical-analysis-guide" primaryLabel="TA Guide →" secondaryHref="/learn/xrp-accumulation-zones" secondaryLabel="Accumulation" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
