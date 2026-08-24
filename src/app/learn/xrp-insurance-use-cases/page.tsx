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
    { question: "How could XRP be used in insurance?", answer: "XRPL can transfer value after an insurer or authorized system approves a payment. It does not itself validate a loss, supply an oracle, or satisfy insurance regulation." },
    { question: "What is parametric insurance?", answer: "A contract whose payout depends on a defined external measurement. A reliable data source, legal contract, and insurer controls are still required." },
    { question: "Is this being used today?", answer: "This page documents technical design patterns, not a verified broad insurer deployment." },
    { question: "Does XRPL prove cost savings?", answer: "No. Ledger settlement cost is only one component of underwriting, claims, compliance, data, fraud, and payout expense." },
    { question: "Why XRPL specifically?", answer: "Low fees, fast settlement, and the ability to issue tokens for insurance contracts on-chain." },
  ]),
];

const faqItems = [
  { q: "How could XRP be used in insurance?", a: "XRPL can transfer value after an insurer or authorized system approves a payment. It does not validate the underlying claim." },
  { q: "What is parametric insurance?", a: "A contract whose payout depends on a defined external measurement, which still requires reliable data and legal controls." },
  { q: "Is this being used today?", a: "This page presents technical design patterns, not a verified broad insurer deployment." },
  { q: "Does XRPL prove cost savings?", a: "No. Ledger cost is only one part of underwriting, claims, compliance, data, fraud, and payout expense." },
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

        <TLDRBox><p>XRPL can serve as a payment rail in a proposed insurance architecture, but it does not validate a loss, provide an oracle, approve a claim, or prove insurer adoption. The examples below are design patterns, not documented production deployments.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Ledger close", value: "Several seconds" },
          { label: "Cost Reduction", value: "Not established" },
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
          <StatPill label="Cost Save" value="Unverified" delay={0.06} />
          <StatPill label="Automation" value="Smart logic" delay={0.12} />
          <StatPill label="Stage" value="Early" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRP in Insurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The insurance industry is plagued by slow claims, high admin costs, and cross-border complexity. <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP and the XRPL</Link> offer solutions.</p>
          </RevealSection>

          <RevealSection id="claims" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Instant Claims Settlement</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">After a claim is approved, XRPL can record and transfer value in a validated ledger. End-to-end timing still includes data collection, coverage review, fraud controls, legal authorization, currency conversion, and payout access.</p>
            <div className="mt-6"><DataTable headers={["Function","What XRPL can do","What remains external"]} rows={[["Value transfer","Record a validated payment","Approve the claim"],["Data","Store submitted ledger fields","Verify an external event"],["Compliance","Provide an auditable transaction hash","Apply insurance and sanctions rules"],["Cost","Expose the ledger transaction cost","Establish total processing savings"]]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="parametric" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Parametric Insurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">A proposed parametric design can submit a payment after an authorized data source establishes a contract trigger. The oracle, contract interpretation, insurer authorization, and dispute process remain outside XRPL.</p>
          </RevealSection>

          <RevealSection id="reinsurance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Cross-Border Reinsurance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP could bridge currencies in a reinsurance payment flow, but that does not remove counterparty, liquidity, credit, legal, or settlement-chain risk. A named deployment and measured process would be required to claim a real-world improvement.</p>
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
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "XRPL basics" },
              { href: "/learn/xrp-developer-resources", label: "Dev Resources", desc: "Build on XRPL" },
              { href: "/learn/ripple-founding-story", label: "Ripple Story", desc: "Origin history" },
              { href: "/learn/xrp-community-explained", label: "Community", desc: "XRP Army" },
              { href: "/learn/xrpl-nft-marketplaces", label: "NFTs", desc: "XRPL digital assets" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore XRP Use Cases" description="Insurance is one of many industries XRP can transform." primaryHref="/learn/xrp-ledger-explained" primaryLabel="Learn XRPL →" secondaryHref="/learn/xrp-micropayments" secondaryLabel="Micropayments" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
