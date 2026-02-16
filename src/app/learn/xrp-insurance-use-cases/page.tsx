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
  title: "XRP in Insurance: Blockchain Claims & Settlements | AllAboutXRP",
  description: "How XRP and the XRPL are being explored for insurance — instant claims settlement, parametric insurance, and cross-border reinsurance.",
  keywords: ["XRP insurance","blockchain insurance XRP","XRPL insurance use case"],
  openGraph: { title: "XRP in Insurance: Blockchain Claims & Settlements", description: "How XRP and the XRPL are being explored for insurance — instant claims settlement, parametric insurance, and cross-border reinsurance.", url: "https://allaboutxrp.com/learn/xrp-insurance-use-cases", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP in Insurance: Blockchain Claims & Settlements", description: "How XRP and the XRPL are being explored for insurance — instant claims settlement, parametric insurance, and cross-border reinsurance." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-insurance-use-cases" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP in Insurance: Blockchain Claims & Settlements", description: "How XRP and the XRPL are being explored for insurance — instant claims settlement, parametric insurance, and cross-border reinsurance.", url: "https://allaboutxrp.com/learn/xrp-insurance-use-cases", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Insurance" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-insurance-use-cases" }),
  buildFAQSchema([
    { question: "How can XRP be used in insurance?", answer: "Instant claims settlement, parametric insurance with automatic payouts, and cross-border reinsurance at reduced cost." },
    { question: "What is parametric insurance?", answer: "Insurance that auto-pays based on a trigger (e.g., earthquake magnitude) rather than claim assessment. Perfect for blockchain automation." },
    { question: "Is this being used today?", answer: "Still exploratory. Pilot programs and proofs of concept exist, but widespread adoption is years away." },
    { question: "How does it reduce costs?", answer: "Eliminates manual claims processing, reduces fraud, and speeds settlement from weeks to seconds." },
    { question: "Why XRPL specifically?", answer: "Low fees, fast settlement, and the ability to issue tokens for insurance contracts on-chain." },
  ]),
];

const faqItems = [
  { q: "How can XRP be used in insurance?", a: "Instant claims settlement, parametric insurance with automatic payouts, and cross-border reinsurance at reduced cost." },
  { q: "What is parametric insurance?", a: "Insurance that auto-pays based on a trigger (e.g., earthquake magnitude) rather than claim assessment. Perfect for blockchain automation." },
  { q: "Is this being used today?", a: "Still exploratory. Pilot programs and proofs of concept exist, but widespread adoption is years away." },
  { q: "How does it reduce costs?", a: "Eliminates manual claims processing, reduces fraud, and speeds settlement from weeks to seconds." },
  { q: "Why XRPL specifically?", a: "Low fees, fast settlement, and the ability to issue tokens for insurance contracts on-chain." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP in Insurance" titleAccent="Blockchain Claims & Settlements" subtitle="How XRP and XRPL are being explored for insurance — instant claims, parametric insurance, and cross-border reinsurance." breadcrumbLabel="XRP Insurance">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRP and the XRPL can transform insurance through instant claims settlement, smart parametric insurance (automatic payouts), and efficient cross-border reinsurance. Still early stage but significant potential.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Claims Speed", value: "Seconds vs weeks" },
          { label: "Cost Reduction", value: "30-50%" },
          { label: "Type", value: "Parametric" },
          { label: "Cross-Border", value: "Instant" },
          { label: "Stage", value: "Exploratory" },
          { label: "Key Benefit", value: "Automation" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "claims", label: "Claims" },
          { id: "parametric", label: "Parametric" },
          { id: "reinsurance", label: "Reinsurance" },
          { id: "future", label: "Future" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Settlement" value="Seconds" delay={0.00} />
          <StatPill label="Cost Save" value="30-50%" delay={0.06} />
          <StatPill label="Automation" value="Smart logic" delay={0.12} />
          <StatPill label="Stage" value="Early" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRP in Insurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The insurance industry is plagued by slow claims, high admin costs, and cross-border complexity. <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP and the XRPL</Link> offer solutions.</p>
          </RevealSection>

          <RevealSection id="claims" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Instant Claims Settlement</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Traditional claims take weeks. On XRPL, verified claims can be settled in seconds via XRP payments. Reduces cost 30-50%.</p>
            <div className="mt-6"><DataTable headers={["Metric","Traditional","XRPL"]} rows={[["Settlement Time","2-4 weeks","3-5 seconds"],["Processing Cost","$50-500","<$0.01"],["Fraud Risk","Manual checks","On-chain verification"],["Cross-Border","Complex, slow","Instant, global"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="parametric" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Parametric Insurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Auto-pays when a trigger is met (earthquake &gt;6.0, flight delayed &gt;2 hours). No claims process — instant payout via XRP.</p>
          </RevealSection>

          <RevealSection id="reinsurance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Cross-Border Reinsurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Reinsurance involves massive cross-border payments. XRP can settle these in seconds instead of days, reducing counterparty risk.</p>
          </RevealSection>

          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future Outlook</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Still early. But as regulatory clarity improves and <Link href="/learn/xrp-developer-resources" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL tools</Link> mature, insurance is a natural fit for blockchain efficiency.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-micropayments", label: "Micropayments", desc: "Small payments" },
              { href: "/learn/what-is-xrp-ledger", label: "XRP Ledger", desc: "XRPL basics" },
              { href: "/learn/xrp-developer-resources", label: "Dev Resources", desc: "Build on XRPL" },
              { href: "/learn/ripple-founding-story", label: "Ripple Story", desc: "Origin history" },
              { href: "/learn/xrp-community-explained", label: "Community", desc: "XRP Army" },
              { href: "/learn/xrpl-nft-marketplaces", label: "NFTs", desc: "XRPL digital assets" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore XRP Use Cases" description="Insurance is one of many industries XRP can transform." primaryHref="/learn/what-is-xrp-ledger" primaryLabel="Learn XRPL →" secondaryHref="/learn/xrp-micropayments" secondaryLabel="Micropayments" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
