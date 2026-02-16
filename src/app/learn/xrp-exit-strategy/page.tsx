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
  title: "XRP Exit Strategy: Know When to Take Profits | AllAboutXRP",
  description: "XRP exit strategy guide. Profit-taking methods, scaling out, tax optimization, and sell planning.",
  keywords: ["XRP exit strategy","when to sell XRP","XRP profit taking","XRP sell strategy"],
  openGraph: {
    title: "XRP Exit Strategy: Know When to Take Profits",
    description: "XRP exit strategy guide. Profit-taking methods, scaling out, tax optimization, and sell planning.",
    url: "https://allaboutxrp.com/learn/xrp-exit-strategy",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Exit Strategy: Know When to Take Profits", description: "XRP exit strategy guide. Profit-taking methods, scaling out, tax optimization, and sell planning." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-exit-strategy" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Exit Strategy: Know When to Take Profits", description: "XRP exit strategy guide. Profit-taking methods, scaling out, tax optimization, and sell planning.", url: "https://allaboutxrp.com/learn/xrp-exit-strategy", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Exit Strategy" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-exit-strategy" }),
  buildFAQSchema([
    { question: "When should I sell XRP?", answer: "At your predetermined targets. Set based on goals, risk tolerance, and analysis." },
    { question: "Sell all at once?", answer: "No. Scale out in tranches (20% each) at different targets. 100% = needs perfect timing." },
    { question: "What's a moonbag?", answer: "10-20% you never sell, keeping exposure to extreme upside." },
    { question: "Tax handling?", answer: "Each sale is taxable. Hold >1 year for lower rates. Track all trades. Consult professional." },
    { question: "What if price keeps rising?", answer: "Normal. You executed your plan and locked in real profits. Unrealized gains aren't real." },
  ]),
];

const faqItems = [
  { q: "When should I sell XRP?", a: "At your predetermined targets. Set based on goals, risk tolerance, and analysis." },
  { q: "Sell all at once?", a: "No. Scale out in tranches (20% each) at different targets. 100% = needs perfect timing." },
  { q: "What's a moonbag?", a: "10-20% you never sell, keeping exposure to extreme upside." },
  { q: "Tax handling?", a: "Each sale is taxable. Hold >1 year for lower rates. Track all trades. Consult professional." },
  { q: "What if price keeps rising?", a: "Normal. You executed your plan and locked in real profits. Unrealized gains aren't real." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Exit Strategy" titleAccent="Know When to Take Profits" subtitle="Plan your exits. Profit-taking strategies, tax optimization, and how to lock in XRP gains." breadcrumbLabel="XRP Exit Strategy">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>An exit strategy is <strong className="text-text-primary">as important as entry</strong>. Most lose money by holding too long or panic selling. Plan profit-taking <strong className="text-text-primary">before you need to</strong>. Best approach: <strong className="text-text-primary">scaling out</strong> at predetermined targets. Consider <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">tax implications</Link>. Never sell 100% at once.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Strategy", value: "Scale out in tranches" },
          { label: "Tool", value: "Price targets + trailing stops" },
          { label: "Tax", value: "Consider holding period" },
          { label: "Mistake", value: "Selling all at once" },
          { label: "Psychology", value: "Remove emotion" },
          { label: "Plan", value: "Set before you need it" },
        ]} />

        <SectionNav items={[
          { id: "why", label: "Why Plan" },
          { id: "methods", label: "Methods" },
          { id: "scaling", label: "Scaling Out" },
          { id: "tax", label: "Tax" },
          { id: "psychology", label: "Psychology" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Method" value="Scale Out" delay={0.00} />
          <StatPill label="Plan" value="Pre-set" delay={0.06} />
          <StatPill label="Tax" value="Long-term" delay={0.12} />
          <StatPill label="Key" value="Discipline" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="why">
            <h2 className="text-2xl font-bold text-text-primary">Why You Need a Plan</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Without a plan, emotions control you. Greed during peaks, fear during dips. <Link href="/learn/xrp-price-history" className="text-xrp-accent underline decoration-xrp-accent/30">XRP history</Link> is full of people who held through 90% drawdowns.</p>
            <div className="mt-6"><HighlightBox title="2018 Lesson" variant="warning"><p>XRP hit $3.84 in Jan 2018. No exit plan → watched it fall to $0.25 (93% drop). Those who scaled out preserved wealth. Those who held lost most of it.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="methods" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Exit Methods</h2>
            <div className="mt-6"><DataTable headers={["Method","How","Best For"]} rows={[
              ["Fixed Targets","Sell at $2, $5, $10","Simple, disciplined"],
              ["% Gain","Sell at 100%, 200%","Portfolio-focused"],
              ["Trailing Stop","Auto-sell on X% drop from peak","Momentum riding"],
              ["Time-Based","Sell on specific dates","Tax optimization"],
              ["Technical","Sell at chart resistance","Active traders"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="scaling" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Scaling Out</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Selling 100% = gambling on picking the exact top. <strong className="text-text-primary">Scaling out</strong> sells portions at different levels.</p>
            <div className="mt-6"><IconList items={[
              {title:"20% at 2x",desc:"Recover initial investment. Rest is 'house money' at zero risk."},
              {title:"20% at 3x",desc:"Lock in more profits as price rises."},
              {title:"20% at 5x",desc:"Significant profits. Still 40% riding the trend."},
              {title:"20% at technical targets",desc:"Use chart resistance for higher targets."},
              {title:"Keep 20% moonbag",desc:"Never sell your last 20%. Long-term hold for extreme upside."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="tax" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tax Considerations</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Selling triggers <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">capital gains tax</Link>. <strong className="text-text-primary">Long-term (&gt;1 year)</strong> taxed lower than short-term in the US.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Long-Term Gains",desc:"Over 1 year: 0-20% US tax. Much better than short-term rates."},
              {title:"Tax-Loss Harvesting",desc:"Sell losers to offset XRP gains."},
              {title:"Specific Identification",desc:"Choose which lots to sell for tax optimization."},
              {title:"Track Everything",desc:"Cost basis, dates, amounts. Need at tax time."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="psychology" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Psychology of Selling</h2>
            <div className="mt-6"><IconList items={[
              {title:"Set plan now",desc:"Define targets while thinking clearly — not during a rally or crash."},
              {title:"Write it down",desc:"Unwritten plan doesn't exist. Document targets and stick to them."},
              {title:"Accept imperfection",desc:"You won't sell at the exact top. A good profit beats riding back down."},
              {title:"Don't look back",desc:"After selling, if price rises, you executed your plan. That's a win."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/xrp-tax-guide", label: "Tax Guide", desc: "Tax implications" },
            { href: "/learn/xrp-accumulation-zones", label: "Accumulation", desc: "Entry strategy" },
            { href: "/learn/xrp-dollar-cost-averaging", label: "DCA", desc: "Building positions" },
            { href: "/learn/xrp-swing-trading-guide", label: "Swing Trading", desc: "Active trading" },
            { href: "/learn/xrp-price-prediction", label: "Prediction", desc: "Outlook" },
            { href: "/learn/xrp-common-mistakes", label: "Mistakes", desc: "Avoid errors" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Plan Your Exit" description="Best time to plan is before you need it. Set targets now." primaryHref="/learn/xrp-tax-guide" primaryLabel="Tax Guide →" secondaryHref="/learn/xrp-accumulation-zones" secondaryLabel="Accumulation" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
