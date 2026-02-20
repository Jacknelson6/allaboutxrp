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
  title: "Should I Sell or Hold XRP? Decision Framework | AllAboutXRP",
  description: "A rational framework for deciding whether to sell or hold XRP. Catalysts, price targets, tax implications, and personal risk tolerance.",
  keywords: ["should I sell XRP","sell or hold XRP","when to sell XRP","keep XRP or sell"],
  openGraph: { title: "Should I Sell or Hold XRP? Decision Framework", description: "A rational framework for deciding whether to sell or hold XRP. Catalysts, price targets, tax implications, and personal risk tolerance.", url: "https://allaboutxrp.com/learn/xrp-sell-or-hold", type: "article" },
  twitter: { card: "summary_large_image", title: "Should I Sell or Hold XRP? Decision Framework", description: "A rational framework for deciding whether to sell or hold XRP. Catalysts, price targets, tax implications, and personal risk tolerance." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-sell-or-hold" },
};

const schemas = [
  buildArticleSchema({ headline: "Should I Sell or Hold XRP? Decision Framework", description: "A rational framework for deciding whether to sell or hold XRP. Catalysts, price targets, tax implications, and personal risk tolerance.", url: "https://allaboutxrp.com/learn/xrp-sell-or-hold", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Sell or Hold" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-sell-or-hold" }),
  buildFAQSchema([
    { question: "Should I sell now?", answer: "Depends on your situation. Use the framework." },
    { question: "Best time to sell?", answer: "During euphoria. Pre-set targets." },
    { question: "All at once?", answer: "No. Scale out." },
    { question: "What if it goes higher?", answer: "Selling at profit is never wrong." },
    { question: "Taxes?", answer: "Yes. Selling = taxable event." },
  ]),
];

const faqItems = [
  { q: "Should I sell now?", a: "Depends on your situation. Use the framework." },
  { q: "Best time to sell?", a: "During euphoria. Pre-set targets." },
  { q: "All at once?", a: "No. Scale out." },
  { q: "What if it goes higher?", a: "Selling at profit is never wrong." },
  { q: "Taxes?", a: "Yes. Selling = taxable event." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="Should I Sell or Hold XRP?" titleAccent="Decision Framework" subtitle="A rational framework for deciding whether to sell or hold XRP. Catalysts, price targets, tax implications, and personal risk tolerance." breadcrumbLabel="Sell or Hold">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>No universal answer. Key rule: <strong className="text-text-primary">never sell 100% at once, never hold 100% through euphoria</strong>. Use cost basis, goals, timeline, and catalysts to decide. Scale out with targets.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Key", value: "Your Goals" },
          { label: "Horizon", value: "Matters Most" },
          { label: "Tax", value: "Consider First" },
          { label: "Bull", value: "ETF, Adoption" },
          { label: "Bear", value: "Competition" },
          { label: "Strategy", value: "Scale Out" },
        ]} />

        <SectionNav items={[
          { id: "framework", label: "Framework" },
          { id: "hold", label: "Hold" },
          { id: "sell", label: "Sell" },
          { id: "strategy", label: "Exit" },
          { id: "tax", label: "Tax" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Q" value="Sell or Hold?" delay={0.00} />
          <StatPill label="A" value="It Depends" delay={0.06} />
          <StatPill label="Strategy" value="Scale Out" delay={0.12} />
          <StatPill label="Rule" value="Have a Plan" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="framework">
            <h2 className="text-2xl font-bold text-text-primary">Decision Framework</h2>
            <div className="mt-6"><IconList items={[{title:"Cost basis?",desc:"Profit or loss? Tax + emotion."},{title:"Time horizon?",desc:"6 months ≠ 5 years."},{title:"Financial need?",desc:"Need it or can lose it?"},{title:"What catalyst?",desc:"Be specific."},{title:"Sell target?",desc:"No target = no exit."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="hold" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Reasons to Hold</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[{title:"ETF Pending",desc:"Institutional inflows potential."},{title:"Regulatory Clarity",desc:"Post-SEC advantage."},{title:"RLUSD",desc:"Growing utility."},{title:"Cycle Position",desc:"Biggest gains come later."}]} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/xrp-etf-approval-odds" className="text-xrp-accent underline decoration-xrp-accent/30">ETF odds</Link> | <Link href="/learn/xrp-market-cycles" className="text-xrp-accent underline decoration-xrp-accent/30">Cycles</Link></p>
          </RevealSection>
          <RevealSection id="sell" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Reasons to Sell</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[{title:"Life Needs",desc:"You need the money."},{title:"Overexposure",desc:">20-30% net worth."},{title:"Thesis Changed",desc:"Your reasons no longer apply."},{title:"Euphoria",desc:"Everyone buying."}]} /></div>
          </RevealSection>
          <RevealSection id="strategy" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Exit Strategies</h2>
            <div className="mt-6"><DataTable headers={["Strategy","How","Best For"]} rows={[["Scale Out","10-25% at targets","Most"],["Recover Cost","Sell initial investment","Safety"],["DCA Out","Fixed weekly/monthly","No emotion"],["Targets","3-5 levels","Disciplined"]]} highlightCol={0} /></div>
            <div className="mt-6"><HighlightBox title="Golden Rule" variant="accent"><p><strong>Never 100% at once. Never 100% through euphoria.</strong></p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="tax" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tax</h2>
            <div className="mt-6"><IconList items={[{title:"Long-term",desc:"1+ year = lower rate."},{title:"Cost Basis",desc:"Method changes tax bill."},{title:"Harvesting",desc:"Offset with losses."}]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/xrp-cost-basis-methods" className="text-xrp-accent underline decoration-xrp-accent/30">Cost basis</Link> | <Link href="/learn/xrp-tax-loss-harvesting" className="text-xrp-accent underline decoration-xrp-accent/30">Tax harvesting</Link></p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Timing" },
              { href: "/learn/xrp-etf-approval-odds", label: "ETF", desc: "Odds" },
              { href: "/learn/xrp-cost-basis-methods", label: "Cost Basis", desc: "Tax" },
              { href: "/learn/xrp-tax-loss-harvesting", label: "Harvest", desc: "Save" },
              { href: "/learn/xrp-crash-history", label: "Crashes", desc: "Past" },
              { href: "/learn/xrp-all-time-high", label: "ATH", desc: "Records" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Make a Plan" description="Decide before you need to." primaryHref="/learn/xrp-market-cycles" primaryLabel="Cycles →" secondaryHref="/learn/xrp-cost-basis-methods" secondaryLabel="Tax" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
