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

const slug = "xrp-and-correspondent-banking";
const title = "XRP & Correspondent Banking: Replacing Nostro/Vostro";
const description = "How XRP eliminates the need for pre-funded nostro/vostro accounts in correspondent banking. The core economic thesis explained.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const datePublished = "2026-02-15";

export const metadata: Metadata = {
  title, description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished, dateModified: datePublished }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP & Correspondent Banking" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What is correspondent banking?", answer: "Correspondent banking is the system where banks maintain pre-funded accounts (nostro/vostro) at other banks to facilitate cross-border payments. It requires trillions in trapped capital and takes 3-5 days per transaction." },
    { question: "What are nostro and vostro accounts?", answer: "A nostro account is money your bank holds at a foreign bank. A vostro account is money a foreign bank holds at your bank. Together, they enable cross-border transfers but lock up enormous capital." },
    { question: "How does XRP replace nostro/vostro accounts?", answer: "XRP provides on-demand liquidity — instead of pre-funding accounts in every currency, banks use XRP as a bridge currency to convert between currencies in 3-5 seconds, eliminating the need for pre-funded accounts." },
    { question: "How much money is locked in nostro/vostro accounts?", answer: "An estimated $27 trillion is locked in nostro/vostro accounts globally. This is capital that banks cannot lend or invest, representing a massive opportunity cost." },
    { question: "Is XRP actually being used for correspondent banking?", answer: "Yes. Ripple's On-Demand Liquidity (ODL) product uses XRP as a bridge currency in live payment corridors across 55+ countries, replacing the need for pre-funded nostro/vostro accounts." },
  ]),
];

const faqItems = [
  { q: "What is correspondent banking?", a: "Correspondent banking is how banks move money internationally. Banks maintain pre-funded accounts at partner banks in different countries. To send money to Japan, your bank needs Japanese yen sitting in a Japanese bank account — ready to go." },
  { q: "What are nostro/vostro accounts?", a: "Nostro ('our account at your bank') and vostro ('your account at our bank') are the pre-funded accounts banks maintain for cross-border payments. A large bank might maintain hundreds of these across dozens of countries and currencies." },
  { q: "How does XRP eliminate pre-funding?", a: "With XRP's On-Demand Liquidity, the sending bank converts local currency to XRP, sends it in 3-5 seconds, and the receiving bank converts XRP to local currency instantly. No pre-funded accounts needed — XRP provides the liquidity on demand." },
  { q: "How much capital does this free up?", a: "An estimated $27 trillion is locked in nostro/vostro accounts globally. Even partially replacing this system could free up trillions in capital that banks can redeploy for lending and investment." },
  { q: "Why haven't banks switched already?", a: "Many are switching — 100+ institutions use Ripple's network. But banking infrastructure moves slowly. Regulatory clarity (now achieved post-SEC settlement), integration complexity, and institutional inertia are the main factors." },
  { q: "Does this create demand for XRP?", a: "Yes. Every ODL transaction requires XRP to be purchased, transferred, and sold. Higher corridor volumes mean higher sustained XRP demand. This is the core economic thesis for XRP's long-term value." },
];

export default function XRPAndCorrespondentBankingPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP &"
          titleAccent="Correspondent Banking"
          subtitle="The $27 trillion problem: how XRP replaces the world's most capital-intensive payment system with instant, on-demand liquidity."
          breadcrumbLabel="Correspondent Banking"
        >
          <div className="mt-5">
            <AuthorByline date={datePublished} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Correspondent banking locks up <strong className="text-text-primary">$27 trillion</strong> in pre-funded nostro/vostro accounts. XRP eliminates this requirement entirely. Through <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">On-Demand Liquidity</Link>, banks use XRP as a bridge currency — converting, sending, and settling in 3-5 seconds instead of 3-5 days. This is the <strong className="text-text-primary">core economic thesis</strong> for XRP.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Trapped Capital", value: "$27 trillion in nostro/vostro accounts" },
          { label: "Traditional Speed", value: "3-5 days per transfer" },
          { label: "XRP Speed", value: "3-5 seconds" },
          { label: "Traditional Cost", value: "$25-65 per transaction" },
          { label: "XRP Cost", value: "Fractions of a cent" },
          { label: "Active Corridors", value: "55+ countries via ODL" },
        ]} />

        <SectionNav items={[
          { id: "how-it-works", label: "How It Works" },
          { id: "xrp-solution", label: "XRP Solution" },
          { id: "economics", label: "Economics" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Trapped" value="$27T" delay={0} />
          <StatPill label="Old Speed" value="3-5 days" delay={0.06} />
          <StatPill label="XRP Speed" value="3-5s" delay={0.12} />
          <StatPill label="Corridors" value="55+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How Correspondent Banking Works Today</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When you send money internationally, your bank doesn&apos;t send cash across borders. Instead, it relies on a chain of intermediary banks that maintain pre-funded accounts in different currencies.
            </p>
            <div className="mt-5">
              <HighlightBox title="The Nostro/Vostro Problem" variant="info">
                <p>Imagine you&apos;re a US bank that needs to send payments to 50 countries. You need pre-funded accounts in 50 different currencies at 50 different banks. Each account needs enough funds to cover daily transaction volume. Multiply this across every bank in the world, and you get <strong>$27 trillion in idle capital</strong> — money that could be lent, invested, or used productively.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "Multiple intermediaries", desc: "A single payment may pass through 3-5 banks, each adding fees and delays" },
                { title: "Pre-funded accounts", desc: "Banks must maintain balances in every currency they serve — capital that sits idle" },
                { title: "Settlement delays", desc: "Each intermediary adds processing time; total settlement takes 3-5 business days" },
                { title: "Opacity", desc: "Senders can't track payments through the chain; failures are common" },
                { title: "Declining correspondents", desc: "The number of correspondent banking relationships is shrinking, leaving emerging markets underserved" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="xrp-solution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How XRP Replaces This System</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP provides <strong className="text-text-primary">on-demand liquidity</strong> — the bridge currency that eliminates pre-funding:
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Step 1: Convert to XRP", desc: "The sending bank converts local currency (e.g., USD) to XRP on a local exchange in seconds." },
                { title: "Step 2: Transfer XRP", desc: "XRP is sent across the XRP Ledger to the destination in 3-5 seconds — anywhere in the world." },
                { title: "Step 3: Convert to Local Currency", desc: "The receiving bank converts XRP to local currency (e.g., JPY) on a local exchange. Payment complete." },
              ]} />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The entire process takes seconds. No pre-funded accounts. No intermediary banks. No 3-5 day delays. Learn more about the technology on our <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL page</Link>.
            </p>
          </RevealSection>

          <RevealSection id="economics" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Economic Impact</h2>
            <div className="mt-5">
              <HighlightBox title="Why This Is XRP's Core Thesis" variant="accent" large>
                <p>Every ODL transaction requires XRP to be <strong>purchased, transferred, and sold</strong>. As more corridors go live and volume increases, demand for XRP increases structurally. This isn&apos;t speculation — it&apos;s a direct function of <Link href="/learn/xrp-use-cases" className="text-xrp-accent underline decoration-xrp-accent/30">real-world utility</Link>.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "Capital Liberation", desc: "Freeing even 10% of the $27T in trapped capital would save banks hundreds of billions annually" },
                { title: "Structural XRP Demand", desc: "Every cross-border payment through ODL creates buy and sell pressure for XRP" },
                { title: "Network Effects", desc: "More corridors = more liquidity = tighter spreads = more adoption" },
                { title: "Emerging Market Access", desc: "XRP enables corridors that correspondent banking can't serve profitably" },
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
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "How ODL works" },
              { href: "/learn/xrp-and-banks", label: "XRP & Banks", desc: "The institutional thesis" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Global settlement" },
              { href: "/learn/xrp-vs-swift", label: "XRP vs SWIFT", desc: "Head-to-head comparison" },
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Detailed use cases" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete partner list" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The $27 Trillion Opportunity"
          description="XRP is replacing the world's most capital-intensive payment system."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/on-demand-liquidity"
          secondaryLabel="Learn About ODL"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice.</em>
        </p>
      </div>
    </>
  );
}
