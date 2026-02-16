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
  title: "XRP Portfolio Allocation: How Much XRP Should You Hold? | AllAboutXRP",
  description: "XRP portfolio allocation guide — position sizing, risk management, rebalancing strategies, and how much of your portfolio should be in XRP.",
  keywords: ["XRP portfolio allocation","how much XRP to hold","XRP position sizing","XRP in portfolio","crypto allocation"],
  openGraph: {
    title: "XRP Portfolio Allocation: How Much XRP Should You Hold?",
    description: "Position sizing, risk management, and how much of your portfolio should be in XRP.",
    url: "https://allaboutxrp.com/learn/xrp-portfolio-allocation",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Portfolio Allocation: How Much Should You Hold?", description: "Portfolio allocation guide for XRP investors." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-portfolio-allocation" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Portfolio Allocation: How Much XRP Should You Hold?", description: "XRP portfolio allocation guide covering position sizing, risk management, and rebalancing.", url: "https://allaboutxrp.com/learn/xrp-portfolio-allocation", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Portfolio Allocation" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-portfolio-allocation" }),
  buildFAQSchema([
    { question: "How much of my portfolio should be in XRP?", answer: "Depends on risk tolerance. Conservative: 1-5%. Moderate: 5-10%. Aggressive: 10-20%. Never more than you can afford to lose entirely." },
    { question: "Should XRP be my only crypto?", answer: "Holding only XRP concentrates risk. Many investors hold BTC as a base, then XRP and 1-2 others. Diversification within crypto reduces single-asset risk." },
    { question: "How often should I rebalance?", answer: "Quarterly or when allocation drifts 5%+ from target. After a big XRP rally, trim back to target. After a big drop, add to reach target." },
    { question: "What's the Kelly Criterion for XRP?", answer: "The Kelly Criterion suggests optimal bet sizing based on edge and odds. For volatile assets like XRP, half-Kelly (conservative) is recommended — typically suggesting 5-15% allocation." },
    { question: "Should I count my XRP ETF separately from direct XRP?", answer: "No. Both represent XRP exposure. Add them together for your total XRP allocation percentage." },
  ]),
];

const faqItems = [
  { q: "How much of my portfolio should be in XRP?", a: "Depends on risk tolerance. Conservative: 1-5%. Moderate: 5-10%. Aggressive: 10-20%. Never more than you can afford to lose entirely." },
  { q: "Should XRP be my only crypto?", a: "Holding only XRP concentrates risk. Many investors hold BTC as a base, then XRP and 1-2 others. Diversification within crypto reduces single-asset risk." },
  { q: "How often should I rebalance?", a: "Quarterly or when allocation drifts 5%+ from target. After a big XRP rally, trim back to target. After a big drop, add to reach target." },
  { q: "What's the Kelly Criterion for XRP?", a: "The Kelly Criterion suggests optimal bet sizing based on edge and odds. For volatile assets like XRP, half-Kelly (conservative) is recommended — typically suggesting 5-15% allocation." },
  { q: "Should I count my XRP ETF separately from direct XRP?", a: "No. Both represent XRP exposure. Add them together for your total XRP allocation percentage." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Portfolio Allocation" titleAccent="How Much XRP Should You Hold?" subtitle="Position sizing frameworks, risk management, and rebalancing strategies for XRP in your investment portfolio." breadcrumbLabel="Portfolio Allocation">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Most financial advisors suggest <strong className="text-text-primary">1-10% crypto allocation</strong> depending on risk tolerance. Within crypto, XRP alongside <Link href="/learn/xrp-vs-bitcoin" className="text-xrp-accent underline decoration-xrp-accent/30">Bitcoin</Link> provides diversified exposure. Key: <strong className="text-text-primary">never invest more than you can lose</strong>. Use <Link href="/learn/xrp-dollar-cost-averaging" className="text-xrp-accent underline decoration-xrp-accent/30">DCA</Link> to build positions and rebalance quarterly.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Conservative", value: "1 – 5% of portfolio" },
          { label: "Moderate", value: "5 – 10% of portfolio" },
          { label: "Aggressive", value: "10 – 20% of portfolio" },
          { label: "Rebalance", value: "Quarterly" },
          { label: "Method", value: "DCA into position" },
          { label: "Rule", value: "Never all-in" },
        ]} />

        <SectionNav items={[
          { id: "frameworks", label: "Frameworks" },
          { id: "profiles", label: "Risk Profiles" },
          { id: "within-crypto", label: "Within Crypto" },
          { id: "rebalancing", label: "Rebalancing" },
          { id: "sizing", label: "Position Sizing" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Conservative" value="1-5%" delay={0.00} />
          <StatPill label="Moderate" value="5-10%" delay={0.06} />
          <StatPill label="Aggressive" value="10-20%" delay={0.12} />
          <StatPill label="Method" value="DCA" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="frameworks">
            <h2 className="text-2xl font-bold text-text-primary">Allocation Frameworks</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">There's no single right answer. Your allocation depends on age, income, risk tolerance, existing portfolio, and conviction level. Here are proven frameworks.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              { title: "Core-Satellite", desc: "Core: 80-90% in stocks/bonds. Satellite: 10-20% in higher-risk assets like XRP. The satellite adds upside without threatening your base." },
              { title: "Risk Parity", desc: "Allocate based on risk contribution, not dollar amount. Since XRP is 5-6x more volatile than stocks, a small % equals significant risk exposure." },
              { title: "Conviction Weighting", desc: "Higher allocation to assets you understand best. Deep XRP knowledge = higher justified allocation (within reason)." },
              { title: "Sleep Test", desc: "If your XRP allocation dropped 80%, could you sleep? If not, reduce. The best allocation is one you can hold through volatility." },
            ]} /></div>
          </RevealSection>

          <RevealSection id="profiles" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Allocation by Risk Profile</h2>
            <div className="mt-6"><DataTable headers={["Profile","Stocks","Bonds","XRP/Crypto","Cash"]} rows={[
              ["Ultra Conservative","60%","30%","1-2%","8-9%"],
              ["Conservative","70%","15%","3-5%","10%"],
              ["Moderate","70%","10%","5-10%","10%"],
              ["Aggressive","60%","5%","15-20%","10-15%"],
              ["Crypto Native","30%","5%","50-60%","5-10%"],
            ]} highlightCol={3} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Compare how XRP fits alongside traditional assets in our <Link href="/learn/xrp-vs-stocks" className="text-xrp-accent underline decoration-xrp-accent/30">XRP vs stocks</Link> guide.</p>
          </RevealSection>

          <RevealSection id="within-crypto" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Allocation Within Crypto</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">If you allocate 10% to crypto, how should that 10% be split?</p>
            <div className="mt-6"><DataTable headers={["Strategy","Bitcoin","XRP","Other Alts"]} rows={[
              ["BTC-Heavy","60-70%","20-30%","5-10%"],
              ["Balanced","40-50%","30-40%","10-20%"],
              ["XRP-Focused","20-30%","50-60%","10-20%"],
              ["Diversified","30-40%","20-30%","30-40%"],
            ]} highlightCol={2} /></div>
            <div className="mt-6"><HighlightBox title="Why Include Bitcoin" variant="info"><p>Bitcoin is the market anchor. When BTC crashes, everything crashes. Holding BTC alongside XRP provides a base. XRP outperforms during <Link href="/learn/xrp-altseason-guide" className="text-xrp-accent underline decoration-xrp-accent/30">altseason</Link> but BTC is more resilient during downturns.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="rebalancing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Rebalancing Strategy</h2>
            <div className="mt-6"><IconList items={[
              { title: "Calendar Rebalance", desc: "Review quarterly. If XRP grew from 10% to 20%, trim back to 10%. If it dropped to 5%, add to reach 10%." },
              { title: "Threshold Rebalance", desc: "Rebalance when any asset drifts 5%+ from target. More responsive than calendar." },
              { title: "Tax-Aware Rebalance", desc: "Use new contributions to rebalance rather than selling (avoids taxable events)." },
              { title: "Post-Rally Trim", desc: "After a major XRP rally, taking profits back to target is disciplined, not weak." },
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="sizing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Position Sizing Rules</h2>
            <div className="mt-6"><IconList items={[
              { title: "Never risk more than 1-2% on a single trade", desc: "If swing trading XRP, limit each trade's potential loss to 1-2% of total portfolio." },
              { title: "Build positions over time with DCA", desc: "Don't lump sum into XRP. Use dollar cost averaging over weeks/months." },
              { title: "Emergency fund first", desc: "3-6 months expenses in cash before any crypto investment." },
              { title: "Debt matters", desc: "Pay off high-interest debt before investing in volatile assets." },
              { title: "Age consideration", desc: "Younger = more time to recover from losses = can justify higher allocation." },
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-dollar-cost-averaging", label: "DCA Guide", desc: "Build positions" },
              { href: "/learn/xrp-vs-stocks", label: "XRP vs Stocks", desc: "Asset comparison" },
              { href: "/learn/xrp-exit-strategy", label: "Exit Strategy", desc: "Take profits" },
              { href: "/learn/xrp-common-mistakes", label: "Common Mistakes", desc: "Avoid errors" },
              { href: "/learn/xrp-accumulation-zones", label: "Accumulation", desc: "Entry levels" },
              { href: "/learn/xrp-for-beginners", label: "Beginner Guide", desc: "Start here" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Size Your Position" description="The right allocation lets you hold through volatility and win long-term." primaryHref="/learn/xrp-dollar-cost-averaging" primaryLabel="DCA Guide →" secondaryHref="/learn/xrp-exit-strategy" secondaryLabel="Exit Strategy" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
