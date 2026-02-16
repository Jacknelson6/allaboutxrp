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

const slug = "xrp-howey-test";
const title = "XRP and the Howey Test: Why XRP Passed";
const description = "How XRP was evaluated under the Howey Test. The legal reasoning, the Judge Torres ruling, and what it means going forward.";
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
    { name: "XRP & Howey Test" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What is the Howey Test?", answer: "The Howey Test is a legal framework from the 1946 Supreme Court case SEC v. W.J. Howey Co. It determines whether a transaction qualifies as an investment contract (security). The test has four prongs: investment of money, in a common enterprise, with expectation of profits, derived from the efforts of others." },
    { question: "Did XRP pass the Howey Test?", answer: "In 2023, Judge Torres ruled that XRP sales on public exchanges did NOT meet the Howey Test because buyers on exchanges didn't know if they were buying from Ripple and couldn't reasonably expect profits from Ripple's efforts specifically." },
    { question: "Is XRP a security?", answer: "No. The court ruled that XRP itself is not a security. However, Ripple's direct institutional sales of XRP were found to be unregistered securities offerings because those buyers DID have expectations tied to Ripple's efforts." },
    { question: "What does the Howey Test mean for crypto?", answer: "The Howey Test ruling created a legal distinction between a token itself and how it's sold. This precedent applies to all cryptocurrencies, not just XRP." },
    { question: "Can the Howey Test ruling be overturned?", answer: "While judicial precedents can be challenged, the settlement between SEC and Ripple largely finalized the matter. Legislative efforts like the CLARITY Act aim to codify similar protections into law." },
  ]),
];

const faqItems = [
  { q: "What is the Howey Test?", a: "A four-part test from the 1946 Supreme Court case SEC v. W.J. Howey Co. A transaction is a security if there's: (1) investment of money, (2) in a common enterprise, (3) with expectation of profits, (4) from the efforts of others. All four prongs must be met." },
  { q: "Did XRP pass the Howey Test?", a: "Yes, for secondary market sales. Judge Torres ruled that people buying XRP on exchanges didn't know if they were buying from Ripple and didn't have a contractual expectation of profits from Ripple's efforts. The third and fourth prongs failed." },
  { q: "Why did Ripple's institutional sales fail?", a: "Ripple sold XRP directly to institutional investors with contracts and expectations. Those buyers knew they were buying from Ripple and expected Ripple's efforts to increase XRP's value — meeting all four Howey prongs." },
  { q: "Is XRP itself a security?", a: "No. The court made a crucial distinction: XRP the token is not a security. How XRP is sold can make a specific transaction a securities offering. This 'manner of sale' doctrine was groundbreaking." },
  { q: "What does this mean for other cryptos?", a: "The ruling established that a digital asset can be sold as a security in one context and not in another. This 'manner of sale' analysis applies to all cryptocurrencies and is being cited in cases involving other tokens." },
  { q: "How does this affect XRP investors?", a: "Positively. XRP on exchanges is definitively not a security, meaning exchanges can list it freely, ETFs can be structured around it, and institutional investors can buy it without securities law complications." },
];

export default function XRPHoweyTestPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP & the"
          titleAccent="Howey Test"
          subtitle="The 1946 Supreme Court test that determines what's a security — and why XRP passed it. The legal reasoning explained in plain English."
          breadcrumbLabel="Howey Test"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>The <strong className="text-text-primary">Howey Test</strong> is the legal framework that determines if something is a security. In the <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">SEC vs Ripple case</Link>, Judge Torres ruled that XRP sold on public exchanges <strong className="text-text-primary">does not meet the Howey Test</strong> — meaning XRP is not a security when traded on exchanges. This was the most important legal ruling in crypto history.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Origin", value: "SEC v. W.J. Howey Co. (1946)" },
          { label: "Prongs", value: "4 (all must be met)" },
          { label: "XRP Ruling", value: "Not a security on secondary markets" },
          { label: "Judge", value: "Analisa Torres, SDNY" },
          { label: "Key Doctrine", value: "'Manner of sale' — context matters" },
          { label: "Impact", value: "Precedent for all crypto tokens" },
        ]} />

        <SectionNav items={[
          { id: "howey", label: "The Test" },
          { id: "xrp-analysis", label: "XRP Analysis" },
          { id: "impact", label: "Impact" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="howey">
            <h2 className="text-2xl font-bold text-text-primary">The Four Prongs of the Howey Test</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For something to be classified as a security (investment contract), ALL four prongs must be satisfied:
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "1. Investment of Money", desc: "Someone pays money or gives something of value. ✅ Met for XRP — buyers pay money to acquire it." },
                { title: "2. Common Enterprise", desc: "The investment is part of a pooled fund or shared venture. ✅ Met for XRP — buyers participate in the XRP ecosystem." },
                { title: "3. Expectation of Profits", desc: "The investor expects to make money from the investment. ❌ Failed for exchange buyers — no contractual profit expectation." },
                { title: "4. From Others' Efforts", desc: "Profits are expected to come from the promoter's work. ❌ Failed for exchange buyers — no knowledge of buying from Ripple." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="xrp-analysis" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How XRP Was Analyzed</h2>
            <div className="mt-5">
              <HighlightBox title="The 'Manner of Sale' Breakthrough" variant="accent" large>
                <p>Judge Torres made a groundbreaking distinction: <strong>XRP itself is not a security</strong>. But the <em>way</em> it&apos;s sold can make a specific transaction a securities offering. Institutional sales (where buyers knew they were buying from Ripple with profit expectations) were securities. Exchange sales (where buyers didn&apos;t know the seller) were not.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "Exchange buyers don't know the seller", desc: "On Coinbase or Kraken, you don't know if you're buying from Ripple, a hedge fund, or another retail buyer" },
                { title: "No contractual relationship", desc: "Exchange buyers have no contract with Ripple and no expectation of Ripple's efforts driving their returns" },
                { title: "Token ≠ security", desc: "The court distinguished between the asset itself and the transaction in which it's sold — a first for crypto" },
                { title: "Institutional sales were different", desc: "Ripple's direct sales to institutions with contracts and expectations DID constitute unregistered securities" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why This Ruling Changed Everything</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Exchange Relisting", desc: "Major exchanges that delisted XRP during the lawsuit relisted it immediately after the ruling" },
                { title: "Institutional Confidence", desc: "Banks and asset managers gained the legal clarity they needed to integrate XRP" },
                { title: "ETF Pathway", desc: "Non-security classification cleared a major hurdle for XRP ETF approvals" },
                { title: "Industry Precedent", desc: "Other crypto projects cite the XRP ruling in their own legal defenses against the SEC" },
                { title: "Global Ripple Effect", desc: "International regulators referenced the ruling when developing their own crypto frameworks" },
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
              { href: "/learn/sec-vs-ripple-explained", label: "SEC vs Ripple", desc: "The full case" },
              { href: "/learn/is-xrp-a-security", label: "Is XRP a Security?", desc: "Definitive answer" },
              { href: "/learn/xrp-sec-settlement", label: "SEC Settlement", desc: "Final outcome" },
              { href: "/learn/xrp-clarity-act", label: "CLARITY Act", desc: "From precedent to law" },
              { href: "/learn/xrp-regulatory-clarity-impact", label: "Clarity Impact", desc: "Adoption acceleration" },
              { href: "/learn/xrp-etf", label: "XRP ETF", desc: "ETF implications" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Legal Clarity Is Here"
          description="XRP passed the Howey Test. The path to mainstream adoption is clear."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/sec-vs-ripple-explained"
          secondaryLabel="Read the Full Case"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial or legal advice.</em>
        </p>
      </div>
    </>
  );
}
