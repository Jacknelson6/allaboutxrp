import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "xrp-clarity-act";
const title = "The CLARITY Act & XRP: What It Means for Crypto";
const description = "The CLARITY Act explained — how this crypto regulation bill affects XRP's legal status, exchange listings, and institutional adoption.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const dp = "2026-02-15";

export const metadata: Metadata = {
  title, description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished: dp, dateModified: dp }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "CLARITY Act" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What is the CLARITY Act?", answer: "The CLARITY Act (Crypto Legal Alignment and Regulatory Innovation Through Yielding) is proposed US legislation that aims to provide clear regulatory definitions for digital assets, distinguishing between securities and commodities." },
    { question: "How does the CLARITY Act affect XRP?", answer: "The CLARITY Act would formalize the distinction between digital assets as securities vs commodities. Since the Ripple case established XRP is not a security on secondary markets, the CLARITY Act would codify similar protections into law." },
    { question: "Is the CLARITY Act passed?", answer: "As of early 2026, the CLARITY Act is progressing through Congress. Check our page for the latest status updates on this important crypto legislation." },
    { question: "Who introduced the CLARITY Act?", answer: "The CLARITY Act was introduced by members of Congress seeking to provide regulatory clarity for the cryptocurrency industry, following years of regulation-by-enforcement by the SEC." },
    { question: "How does the CLARITY Act differ from other crypto bills?", answer: "The CLARITY Act specifically focuses on clarifying when a digital asset is a security vs a commodity, which is the central question that affected XRP during the SEC lawsuit." },
  ]),
];

const faqItems = [
  { q: "What is the CLARITY Act?", a: "The CLARITY Act is proposed US legislation that provides clear definitions for when a digital asset is a security vs a commodity. It aims to replace the SEC's regulation-by-enforcement approach with clear, predictable rules." },
  { q: "How does it affect XRP?", a: "The CLARITY Act would codify into law what the Ripple case established judicially — that digital assets sold on secondary markets are not necessarily securities. This gives XRP stronger legal protection and encourages institutional adoption." },
  { q: "Is it law yet?", a: "As of early 2026, the CLARITY Act is progressing through the legislative process. Crypto-friendly majorities in Congress give it a strong chance of passage." },
  { q: "Why does regulatory clarity matter for XRP?", a: "Without clear rules, exchanges feared listing XRP, institutions avoided it, and innovation moved offshore. Clear legislation removes this uncertainty and unlocks adoption." },
  { q: "Does this replace the SEC vs Ripple ruling?", a: "It complements it. The Ripple ruling was a judicial precedent. The CLARITY Act would make similar protections statutory law — harder to challenge and applicable industry-wide, not just to XRP." },
  { q: "How does this impact XRP's price?", a: "Regulatory clarity historically leads to increased exchange listings, institutional adoption, ETF approvals, and broader market participation — all positive catalysts for price." },
];

export default function XRPClarityActPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="The CLARITY Act"
          titleAccent="& XRP"
          subtitle="How proposed US legislation could provide the regulatory clarity that transforms XRP adoption — turning judicial precedent into statutory law."
          breadcrumbLabel="CLARITY Act"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>The <strong className="text-text-primary">CLARITY Act</strong> is proposed legislation that would formally define when digital assets are securities vs commodities. For XRP, this codifies the <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple court ruling</Link> into statutory law — providing permanent regulatory clarity that encourages <Link href="/learn/xrp-and-banks" className="text-xrp-accent underline decoration-xrp-accent/30">institutional adoption</Link>, exchange listings, and ETF approvals.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Full Name", value: "Crypto Legal Alignment & Regulatory Innovation Through Yielding" },
          { label: "Purpose", value: "Define securities vs commodities for crypto" },
          { label: "Status", value: "Progressing through Congress (2026)" },
          { label: "XRP Impact", value: "Codifies non-security status into law" },
          { label: "Industry Impact", value: "Replaces regulation-by-enforcement" },
          { label: "Key Benefit", value: "Unlocks institutional adoption" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What It Is" },
          { id: "xrp-impact", label: "XRP Impact" },
          { id: "implications", label: "Implications" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is the CLARITY Act?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The CLARITY Act aims to solve crypto&apos;s biggest problem in the United States: <strong className="text-text-primary">nobody knows which regulator is in charge</strong>. Is XRP a security (SEC jurisdiction) or a commodity (CFTC jurisdiction)? The CLARITY Act provides clear definitions.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Clear Definitions", desc: "Establishes when a digital asset is a security, commodity, or neither — ending years of ambiguity" },
                { title: "CFTC Authority", desc: "Gives the CFTC primary oversight for digital commodities, reducing SEC overreach" },
                { title: "Innovation Protection", desc: "Creates safe harbors for developers and projects building in good faith" },
                { title: "Exchange Clarity", desc: "Provides clear rules for exchanges listing and trading digital assets" },
                { title: "End of Enforcement-First", desc: "Replaces the SEC's approach of suing first and defining rules later" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="xrp-impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on XRP</h2>
            <div className="mt-5">
              <HighlightBox title="From Precedent to Law" variant="accent" large>
                <p>The <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">SEC vs Ripple ruling</Link> established that XRP is not a security on secondary markets. But that&apos;s a judicial precedent — it could theoretically be challenged. The CLARITY Act would make this protection <strong>statutory law</strong>, providing permanent certainty.</p>
              </HighlightBox>
            </div>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Permanent Legal Status", desc: "XRP's non-security classification becomes statutory law, not just judicial precedent." },
                { title: "Exchange Listings", desc: "Exchanges gain confidence to list XRP without fear of SEC enforcement actions." },
                { title: "ETF Acceleration", desc: "Clear commodity classification smooths the path for XRP ETF approvals." },
                { title: "Institutional Entry", desc: "Banks and asset managers gain the regulatory certainty they require before adopting XRP." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="implications" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Broader Market Implications</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "US Competitiveness", desc: "Clear rules keep crypto innovation in the US instead of pushing it offshore" },
                { title: "Investor Protection", desc: "Defined rules protect retail investors better than ambiguous enforcement" },
                { title: "Market Growth", desc: "Regulatory clarity historically precedes explosive market growth in new asset classes" },
                { title: "Global Standard", desc: "US legislation often sets the template for international crypto regulation" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/sec-vs-ripple-explained", label: "SEC vs Ripple", desc: "The landmark case" },
              { href: "/learn/is-xrp-a-security", label: "Is XRP a Security?", desc: "Legal classification" },
              { href: "/learn/crypto-regulation-xrp-impact", label: "Regulation & XRP", desc: "How rules affect XRP" },
              { href: "/learn/xrp-etf", label: "XRP ETF", desc: "ETF outlook" },
              { href: "/learn/xrp-us-regulation", label: "US Regulation", desc: "Federal & state rules" },
              { href: "/learn/xrp-regulatory-clarity-impact", label: "Clarity Impact", desc: "Adoption acceleration" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Regulation Is Coming — And It's Bullish"
          description="Clear crypto legislation is the catalyst XRP has been waiting for."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/sec-vs-ripple-explained"
          secondaryLabel="Read the SEC Case"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial or legal advice.</em>
        </p>
      </div>
    </>
  );
}
