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
  title: "How to Hold XRP in a Retirement Account (IRA/401k) | AllAboutXRP",
  description: "Can you hold XRP in a retirement account? How to add XRP to self-directed IRAs, Roth IRAs, and crypto-friendly 401k plans.",
  keywords: ["XRP IRA","XRP retirement account","XRP 401k","crypto IRA XRP","XRP Roth IRA"],
  openGraph: { title: "How to Hold XRP in a Retirement Account (IRA/401k)", description: "Can you hold XRP in a retirement account? How to add XRP to self-directed IRAs, Roth IRAs, and crypto-friendly 401k plans.", url: "https://allaboutxrp.com/learn/xrp-in-retirement-accounts", type: "article" },
  twitter: { card: "summary_large_image", title: "How to Hold XRP in a Retirement Account (IRA/401k)", description: "Can you hold XRP in a retirement account? How to add XRP to self-directed IRAs, Roth IRAs, and crypto-friendly 401k plans." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-in-retirement-accounts" },
};

const schemas = [
  buildArticleSchema({ headline: "How to Hold XRP in a Retirement Account (IRA/401k)", description: "Can you hold XRP in a retirement account? How to add XRP to self-directed IRAs, Roth IRAs, and crypto-friendly 401k plans.", url: "https://allaboutxrp.com/learn/xrp-in-retirement-accounts", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Retirement" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-in-retirement-accounts" }),
  buildFAQSchema([
    { question: "XRP in IRA?", answer: "Yes. iTrustCapital, BitcoinIRA support XRP." },
    { question: "Roth or Traditional?", answer: "Roth if you expect big gains (tax-free)." },
    { question: "401k?", answer: "Not most. Solo 401k for self-employed. ETF changes this." },
    { question: "Fees?", answer: "~1% per trade + possible monthly." },
    { question: "ETF replace?", answer: "Partially. ETF = any standard IRA." },
  ]),
];

const faqItems = [
  { q: "XRP in IRA?", a: "Yes. iTrustCapital, BitcoinIRA support XRP." },
  { q: "Roth or Traditional?", a: "Roth if you expect big gains (tax-free)." },
  { q: "401k?", a: "Not most. Solo 401k for self-employed. ETF changes this." },
  { q: "Fees?", a: "~1% per trade + possible monthly." },
  { q: "ETF replace?", a: "Partially. ETF = any standard IRA." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How to Hold XRP in a Retirement Account" titleAccent="IRA/401k Guide" subtitle="Can you hold XRP in a retirement account? How to add XRP to self-directed IRAs, Roth IRAs, and crypto-friendly 401k plans." breadcrumbLabel="Retirement">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Yes. iTrustCapital, BitcoinIRA offer XRP in IRAs. <strong className="text-text-primary">Roth IRA = tax-free growth</strong>. XRP ETF will make this easier via any brokerage.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Types", value: "IRA, Roth, 401k" },
          { label: "Tax", value: "Deferred or Free" },
          { label: "Top", value: "iTrustCapital" },
          { label: "Min", value: "$1,000+" },
          { label: "Custodian", value: "Required" },
          { label: "ETF", value: "Coming Soon" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "types", label: "Types" },
          { id: "platforms", label: "Platforms" },
          { id: "roth", label: "Roth" },
          { id: "etf", label: "ETF" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Tax Save" value="Up to 37%" delay={0.00} />
          <StatPill label="Roth" value="Tax-Free" delay={0.06} />
          <StatPill label="Platforms" value="3+" delay={0.12} />
          <StatPill label="Limit" value="$7K/yr" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRP in Retirement</h2>
            <div className="mt-6"><HighlightBox title="Why" variant="accent"><p>$2→$20 in regular account = tax on $18. In Roth IRA? <strong>Zero tax.</strong></p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="types" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Account Types</h2>
            <div className="mt-6"><DataTable headers={["Account","Benefit","Limit","For"]} rows={[["Traditional","Deductible","$7K","Tax break now"],["Roth","Tax-free growth","$7K","Big gains expected"],["SEP","Self-employed","$69K","Business"],["Solo 401k","Highest","$69K","Self-employed"]]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="platforms" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Platforms</h2>
            <div className="mt-6"><DataTable headers={["Platform","Fee","Min"]} rows={[["iTrustCapital","1%","$1,000"],["BitcoinIRA","Varies","$3,000"],["Alto","1%+$10/mo","$10"]]} highlightCol={0} /></div>
            <div className="mt-6"><HighlightBox title="💰 Start" variant="accent"><p><a href="https://allaboutxrp.com/go/itrustcapital" className="text-xrp-accent underline">iTrustCapital</a> | <a href="https://allaboutxrp.com/go/bitcoinira" className="text-xrp-accent underline">BitcoinIRA</a> | <a href="https://allaboutxrp.com/go/altoira" className="text-xrp-accent underline">Alto</a></p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="roth" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Roth Strategy</h2>
            <div className="mt-6"><IconList items={[{title:"Tax-Free Growth",desc:"No cap gains tax."},{title:"Tax-Free Withdrawal",desc:"After 59½."},{title:"No RMDs",desc:"No forced distributions."},{title:"Contribution Access",desc:"Withdraw contributions anytime."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="etf" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">ETF Alternative</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">After <Link href="/learn/xrp-etf-approval-odds" className="text-xrp-accent underline decoration-xrp-accent/30">ETF approval</Link>, hold XRP in any Fidelity/Schwab/Vanguard IRA. Track at <Link href="/learn/xrp-etf-filings" className="text-xrp-accent underline decoration-xrp-accent/30">ETF tracker</Link>.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-etf-approval-odds", label: "ETF Odds", desc: "Analysis" },
              { href: "/learn/xrp-etf-filings", label: "Filings", desc: "Tracker" },
              { href: "/learn/xrp-etf-price-impact", label: "Impact", desc: "Price" },
              { href: "/learn/xrp-cost-basis-methods", label: "Cost Basis", desc: "Tax" },
              { href: "/learn/xrp-tax-loss-harvesting", label: "Harvest", desc: "Save" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell/Hold", desc: "Framework" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Open a Crypto IRA" description="Tax-free XRP growth." primaryHref="https://allaboutxrp.com/go/itrustcapital" primaryLabel="iTrustCapital →" secondaryHref="/learn/xrp-etf-approval-odds" secondaryLabel="ETF Odds" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
