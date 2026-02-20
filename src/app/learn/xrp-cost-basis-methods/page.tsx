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
  title: "XRP Cost Basis Explained: FIFO, LIFO, HIFO | AllAboutXRP",
  description: "How to calculate your XRP cost basis. FIFO, LIFO, HIFO methods compared with examples. Choose the method that saves you the most.",
  keywords: ["XRP cost basis","XRP FIFO LIFO","XRP tax cost basis","crypto cost basis methods"],
  openGraph: { title: "XRP Cost Basis Explained: FIFO, LIFO, HIFO", description: "How to calculate your XRP cost basis. FIFO, LIFO, HIFO methods compared with examples. Choose the method that saves you the most.", url: "https://allaboutxrp.com/learn/xrp-cost-basis-methods", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Cost Basis Explained: FIFO, LIFO, HIFO", description: "How to calculate your XRP cost basis. FIFO, LIFO, HIFO methods compared with examples. Choose the method that saves you the most." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-cost-basis-methods" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Cost Basis Explained: FIFO, LIFO, HIFO", description: "How to calculate your XRP cost basis. FIFO, LIFO, HIFO methods compared with examples. Choose the method that saves you the most.", url: "https://allaboutxrp.com/learn/xrp-cost-basis-methods", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Cost Basis Methods" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-cost-basis-methods" }),
  buildFAQSchema([
    { question: "What is cost basis?", answer: "The original price you paid for your XRP, including fees. Used to calculate capital gains or losses when you sell." },
    { question: "Which method saves the most tax?", answer: "Usually HIFO (Highest In, First Out) because it sells the highest-cost XRP first, minimizing your taxable gain." },
    { question: "Can I switch methods?", answer: "Consult a tax professional. Generally you should be consistent, but some flexibility exists with specific identification." },
    { question: "What if I bought XRP at many prices?", answer: "That's exactly why method matters. Each purchase is a 'lot' with its own cost basis. The method determines which lot is sold first." },
    { question: "What tools help track cost basis?", answer: "CoinTracker, Koinly, CoinLedger, and TaxBit all calculate cost basis across multiple exchanges automatically." },
  ]),
];

const faqItems = [
  { q: "What is cost basis?", a: "The original price you paid for your XRP, including fees. Used to calculate capital gains or losses when you sell." },
  { q: "Which method saves the most tax?", a: "Usually HIFO (Highest In, First Out) because it sells the highest-cost XRP first, minimizing your taxable gain." },
  { q: "Can I switch methods?", a: "Consult a tax professional. Generally you should be consistent, but some flexibility exists with specific identification." },
  { q: "What if I bought XRP at many prices?", a: "That's exactly why method matters. Each purchase is a 'lot' with its own cost basis. The method determines which lot is sold first." },
  { q: "What tools help track cost basis?", a: "CoinTracker, Koinly, CoinLedger, and TaxBit all calculate cost basis across multiple exchanges automatically." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Cost Basis Explained" titleAccent="FIFO, LIFO, HIFO" subtitle="How to calculate your XRP cost basis and choose the method that saves you the most on taxes." breadcrumbLabel="Cost Basis Methods">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Cost basis = what you paid for XRP. Method you choose affects your tax bill. FIFO (first bought sold first), LIFO (last bought sold first), HIFO (highest cost sold first). HIFO usually minimizes taxes. Be consistent and keep records.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Methods", value: "FIFO, LIFO, HIFO" },
          { label: "Best for Tax", value: "Usually HIFO" },
          { label: "Default", value: "FIFO" },
          { label: "Requirement", value: "Consistent use" },
          { label: "Records", value: "Essential" },
          { label: "Tools", value: "CoinTracker, Koinly" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Is It?" },
          { id: "methods", label: "Methods" },
          { id: "examples", label: "Examples" },
          { id: "choosing", label: "Choosing" },
          { id: "tools", label: "Tools" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Methods" value="3 main" delay={0.00} />
          <StatPill label="Best" value="HIFO" delay={0.06} />
          <StatPill label="Default" value="FIFO" delay={0.12} />
          <StatPill label="Key" value="Consistency" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is Cost Basis?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Cost basis = what you paid for your XRP (including fees). When you sell, your <strong className="text-text-primary">taxable gain = sale price - cost basis</strong>. Higher cost basis = lower taxable gain = less tax.</p>
          </RevealSection>

          <RevealSection id="methods" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Three Methods</h2>
            <div className="mt-6"><DataTable headers={["Method","What It Does","Tax Impact"]} rows={[["FIFO","Sells oldest XRP first","Often highest tax (if price rose)"],["LIFO","Sells newest XRP first","Lower tax if recent buys are higher"],["HIFO","Sells highest-cost XRP first","Usually lowest tax"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="examples" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Example</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">You bought 100 XRP at $0.50, then 100 XRP at $2.00. You sell 100 XRP at $3.00.</p>
            <div className="mt-6"><DataTable headers={["Method","Cost Basis","Sale Price","Taxable Gain"]} rows={[["FIFO","$0.50 × 100 = $50","$300","$250"],["LIFO","$2.00 × 100 = $200","$300","$100"],["HIFO","$2.00 × 100 = $200","$300","$100"]]} highlightCol={3} /></div>
            <div className="mt-6"><HighlightBox title="$150 Difference!" variant="accent"><p>HIFO saves $150 in taxable gains vs FIFO in this example. At 24% tax rate, that&apos;s $36 saved on just 100 XRP.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="choosing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Which to Choose?</h2>
            <div className="mt-6"><IconList items={[
              {title:"HIFO for Selling",desc:"Minimizes tax when selling at a profit. Most tax-efficient."},
              {title:"FIFO for Simplicity",desc:"Easiest to track. IRS default. May result in higher taxes."},
              {title:"Specific Identification",desc:"Choose exactly which lot to sell. Maximum control but complex."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="tools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tools</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Use <Link href="/learn/xrp-portfolio-trackers" className="text-xrp-accent underline decoration-xrp-accent/30">portfolio tracking tools</Link> that support cost basis calculation across all your exchanges. <Link href="/learn/xrp-tax-loss-harvesting" className="text-xrp-accent underline decoration-xrp-accent/30">Tax-loss harvesting</Link> works best with HIFO.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-tax-loss-harvesting", label: "Tax Harvesting", desc: "Offset gains" },
              { href: "/learn/xrp-airdrop-taxes", label: "Airdrop Taxes", desc: "Income reporting" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell or Hold?", desc: "Decision framework" },
              { href: "/learn/xrp-portfolio-trackers", label: "Trackers", desc: "Track cost basis" },
              { href: "/learn/xrp-in-retirement-accounts", label: "IRAs", desc: "Tax-free growth" },
              { href: "/learn/best-xrp-exchanges", label: "Exchanges", desc: "Trade records" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Track Your Cost Basis" description="Use the right tools and method to minimize taxes." primaryHref="/learn/xrp-portfolio-trackers" primaryLabel="Portfolio Trackers →" secondaryHref="/learn/xrp-tax-loss-harvesting" secondaryLabel="Tax Harvesting" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
