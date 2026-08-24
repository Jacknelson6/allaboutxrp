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
const description = "How XRP can function as a bridge asset in Ripple payment flows, what correspondent banking friction it may address, and why prefunding and demand claims need qualification.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const datePublished = "2026-02-15";

export const metadata: Metadata = {
  title, description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const faqItems = [
  { q: "What is correspondent banking?", a: "Correspondent banking is how banks move money internationally. Banks maintain pre-funded accounts at partner banks in different countries. To send money to Japan, your bank needs Japanese yen sitting in a Japanese bank account — ready to go." },
  { q: "What are nostro/vostro accounts?", a: "Nostro ('our account at your bank') and vostro ('your account at our bank') are the pre-funded accounts banks maintain for cross-border payments. A large bank might maintain hundreds of these across dozens of countries and currencies." },
  { q: "How can XRP change a payment flow?", a: "In a documented ODL flow, XRP can bridge source and destination currencies. Ripple also states that the source exchange is prefunded, so the product does not eliminate every prefunding requirement." },
  { q: "Does XRP eliminate all prefunding?", a: "No. Ripple's own ODL documentation says the source exchange is prefunded. The product can change where and how liquidity is sourced, but a universal freed-capital total is not supported." },
  { q: "Why haven't banks switched already?", a: "Many are switching — 100+ institutions use Ripple's network. But banking infrastructure moves slowly. Regulatory clarity (now achieved post-SEC settlement), integration complexity, and institutional inertia are the main factors." },
  { q: "Does this create demand for XRP?", a: "Yes. Every ODL transaction requires XRP to be purchased, transferred, and sold. Higher corridor volumes mean higher sustained XRP demand. This is the core economic thesis for XRP's long-term value." },
];

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished, dateModified: datePublished }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP & Correspondent Banking" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema(faqItems.map((item) => ({ question: item.q, answer: item.a }))),
];

export default function XRPAndCorrespondentBankingPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP &"
          titleAccent="Correspondent Banking"
          subtitle="How XRP can act as a bridge asset in a payment flow, which correspondent-banking frictions remain, and what Ripple's own documentation says about prefunding."
          breadcrumbLabel="Correspondent Banking"
        >
          <div className="mt-5">
            <AuthorByline date={datePublished} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Correspondent payment chains can be slow, costly, and difficult to trace. In documented <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">On-Demand Liquidity</Link> flows, XRP can serve as a bridge between source and destination currencies. Ripple&apos;s own documentation also says the source exchange is prefunded and the payment user need not hold or transact XRP directly, so the product should not be described as eliminating every prefunding requirement or guaranteeing investor demand.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Prefunding", value: "Flow and provider specific" },
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
                <p>Cross-border payments may involve correspondent accounts, intermediary institutions, currency conversion, compliance review, and different operating hours. The number of accounts and amount of prefunding depend on the institution, corridor, providers, and liquidity model. This page does not assign a universal capital total.</p>
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
              The ledger transfer can validate in several seconds, while the end-to-end payment also depends on exchanges, liquidity, compliance, banking rails, and the destination payout. Learn more about the documented flow on our <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL page</Link>.
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
              { href: "/learn/how-banks-use-xrp", label: "XRP & Banks", desc: "The institutional thesis" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Global settlement" },
              { href: "/learn/xrp-vs-swift", label: "XRP vs SWIFT", desc: "Head-to-head comparison" },
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Detailed use cases" },
              { href: "/learn/how-banks-use-xrp", label: "Banks Using XRP", desc: "Complete partner list" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Verify the exact payment flow"
          description="XRP is replacing the world's most capital-intensive payment system."
          primaryHref="/how-to-start"
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
