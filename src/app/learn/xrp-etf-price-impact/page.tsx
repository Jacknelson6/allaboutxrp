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
  title: "XRP ETF Price Impact: What Happens When It's Approved | AllAboutXRP",
  description: "What happens to XRP's price when an ETF is approved? Analysis based on Bitcoin and Ethereum ETF precedents.",
  keywords: ["XRP ETF price impact","XRP price after ETF","XRP ETF effect on price","ETF XRP rally"],
  openGraph: { title: "XRP ETF Price Impact: What Happens When It's Approved", description: "What happens to XRP's price when an ETF is approved? Analysis based on Bitcoin and Ethereum ETF precedents.", url: "https://allaboutxrp.com/learn/xrp-etf-price-impact", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP ETF Price Impact: What Happens When It's Approved", description: "What happens to XRP's price when an ETF is approved? Analysis based on Bitcoin and Ethereum ETF precedents." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-etf-price-impact" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP ETF Price Impact: What Happens When It's Approved", description: "What happens to XRP's price when an ETF is approved? Analysis based on Bitcoin and Ethereum ETF precedents.", url: "https://allaboutxrp.com/learn/xrp-etf-price-impact", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "ETF Price Impact" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-etf-price-impact" }),
  buildFAQSchema([
    { question: "How much up?", answer: "30-100%+ over 3-6 months." },
    { question: "Dip?", answer: "Likely ~15%, recover in weeks." },
    { question: "Buy before/after?", answer: "Before. Anticipation gains bigger." },
    { question: "How inflows work?", answer: "ETF buys actual XRP → buy pressure." },
    { question: "Bigger than BTC?", answer: "In %, possibly. Smaller cap." },
  ]),
];

const faqItems = [
  { q: "How much up?", a: "30-100%+ over 3-6 months." },
  { q: "Dip?", a: "Likely ~15%, recover in weeks." },
  { q: "Buy before/after?", a: "Before. Anticipation gains bigger." },
  { q: "How inflows work?", a: "ETF buys actual XRP → buy pressure." },
  { q: "Bigger than BTC?", a: "In %, possibly. Smaller cap." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP ETF Price Impact" titleAccent="What Happens When It's Approved" subtitle="What happens to XRP's price when an ETF is approved? Analysis based on Bitcoin and Ethereum ETF precedents." breadcrumbLabel="ETF Price Impact">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>BTC: +60%, $12B+ inflows post-ETF. XRP smaller cap = bigger % impact. Projected <strong className="text-text-primary">30-100%+</strong>. Expect brief sell-the-news dip, then sustained buying.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "BTC", value: "+60% (6mo)" },
          { label: "Inflows", value: "$12B+" },
          { label: "XRP Cap", value: "Smaller" },
          { label: "Est.", value: "30-100%+" },
          { label: "Factor", value: "Inflows" },
          { label: "Risk", value: "Sell-the-news" },
        ]} />

        <SectionNav items={[
          { id: "btc", label: "BTC Precedent" },
          { id: "proj", label: "Projections" },
          { id: "inflows", label: "Inflows" },
          { id: "risk", label: "Risk" },
          { id: "position", label: "Positioning" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="BTC" value="+60%" delay={0.00} />
          <StatPill label="XRP" value="30-100%+" delay={0.06} />
          <StatPill label="Key" value="Inflows" delay={0.12} />
          <StatPill label="Time" value="3-6mo" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="btc">
            <h2 className="text-2xl font-bold text-text-primary">BTC Precedent</h2>
            <div className="mt-6"><DataTable headers={["Metric","BTC ETF"]} rows={[["Day 1","$4.6B inflows"],["6 Month","$12B+ net"],["Pre Price","$44K"],["6mo Later","$70K+"],["Dip","~15% (2 wks)"]]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="proj" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Projections</h2>
            <div className="mt-6"><DataTable headers={["Scenario","Inflows","Impact"]} rows={[["Conservative","$1-2B","30-50%"],["Moderate","$3-5B","50-80%"],["Bullish","$5-10B+","80-150%+"]]} highlightCol={2} /></div>
          </RevealSection>
          <RevealSection id="inflows" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Inflow Sources</h2>
            <div className="mt-6"><IconList items={[{title:"Wealth Mgmt",desc:"$30T+ AUM. 0.1% = $30B."},{title:"Pensions",desc:"Already in BTC ETFs."},{title:"Retail IRAs",desc:"Brokerage access."}]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/xrp-in-retirement-accounts" className="text-xrp-accent underline decoration-xrp-accent/30">IRA guide</Link></p>
          </RevealSection>
          <RevealSection id="risk" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sell-the-News</h2>
            <div className="mt-6"><HighlightBox title="Pattern" variant="warning"><p>BTC dipped ~15% post-ETF. Recovered in 2 weeks. Short-term vol, long-term bullish.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="position" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Positioning</h2>
            <div className="mt-6"><IconList items={[{title:"Buy Before",desc:"Anticipation > news."},{title:"Have a Plan",desc:"Pre-decide actions."},{title:"Don't FOMO",desc:"Wait for dip."},{title:"Long-Term",desc:"Full impact: 6-12mo."}]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/xrp-sell-or-hold" className="text-xrp-accent underline decoration-xrp-accent/30">Sell or hold?</Link></p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-etf-approval-odds", label: "Odds", desc: "Analysis" },
              { href: "/learn/xrp-etf-filings", label: "Filings", desc: "Tracker" },
              { href: "/learn/xrp-in-retirement-accounts", label: "IRAs", desc: "Tax-free" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell/Hold", desc: "Framework" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Timing" },
              { href: "/learn/xrp-all-time-high", label: "ATH", desc: "Records" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Prepare" description="Position before approval." primaryHref="/learn/xrp-etf-approval-odds" primaryLabel="Odds →" secondaryHref="/learn/xrp-sell-or-hold" secondaryLabel="Sell or Hold?" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
