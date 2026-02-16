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

const slug = "xrp-global-liquidity-network";
const title = "XRP as a Global Liquidity Network: The Big Picture";
const description = "XRP's vision as the global liquidity layer. How ODL, RLUSD, and institutional adoption are building a 24/7 liquidity network.";
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
    { name: "Global Liquidity Network" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What is a global liquidity network?", answer: "A global liquidity network is infrastructure that enables instant access to liquidity in any currency, anywhere in the world, 24/7. XRP aims to be this network — the 'internet of value' where money moves as easily as data." },
    { question: "How does XRP provide global liquidity?", answer: "XRP provides on-demand liquidity through Ripple's ODL product. Instead of banks pre-funding accounts worldwide, XRP serves as a universal bridge currency that can be converted to any local currency in seconds." },
    { question: "What is the Internet of Value?", answer: "The Internet of Value is Ripple's vision where money moves as instantly, cheaply, and reliably as information moves on the internet. XRP is the settlement layer that makes this possible." },
    { question: "How does RLUSD fit in?", answer: "RLUSD (Ripple's stablecoin) complements XRP in the liquidity network. RLUSD provides dollar-pegged stability while XRP provides the bridge liquidity between currencies. Together, they serve different institutional needs." },
    { question: "Is this actually happening?", answer: "Yes. Ripple's ODL is live in 55+ countries, processing billions in payments. RLUSD is approved and operational. Institutional partnerships continue to expand. The network is being built in real-time." },
  ]),
];

const faqItems = [
  { q: "What is a global liquidity network?", a: "Infrastructure that enables instant access to liquidity in any currency, anywhere, 24/7. Think of it as the financial layer of the internet — money moving as fast and cheaply as data. XRP is building to be this layer." },
  { q: "How does XRP provide global liquidity?", a: "Through On-Demand Liquidity (ODL), XRP bridges any two currencies in 3-5 seconds. No pre-funded accounts needed. A payment from USD to PHP just uses XRP as the bridge — bought, transferred, and sold in one seamless flow." },
  { q: "What is the Internet of Value?", a: "Ripple's vision where money moves as instantly and cheaply as email. The XRP Ledger is the settlement rail, XRP is the bridge currency, and RLUSD provides dollar stability — all working together 24/7." },
  { q: "How does RLUSD complement XRP?", a: "RLUSD provides dollar-pegged stability for treasury management and settlement. XRP provides the volatile-but-liquid bridge between currencies. Together they serve different needs in the same liquidity ecosystem." },
  { q: "What's the endgame for XRP liquidity?", a: "A world where any currency can be converted to any other currency in seconds, at near-zero cost, through XRP as the universal bridge. Every corridor online increases network value for all participants." },
];

export default function XRPGlobalLiquidityPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP: The Global"
          titleAccent="Liquidity Network"
          subtitle="XRP's ultimate vision: a 24/7 global liquidity layer where money moves as easily as data. Here's how ODL, RLUSD, and institutional adoption are making it real."
          breadcrumbLabel="Global Liquidity Network"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>XRP is being built as the <strong className="text-text-primary">global liquidity layer</strong> — a 24/7 network where any currency can be converted to any other currency in seconds. <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> provides the bridge, <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link> provides stability, and growing <Link href="/learn/xrp-and-banks" className="text-xrp-accent underline decoration-xrp-accent/30">institutional adoption</Link> provides the volume. This is the &quot;Internet of Value.&quot;</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Vision", value: "Internet of Value — money moves like data" },
          { label: "Bridge Currency", value: "XRP bridges any currency pair" },
          { label: "Stablecoin Layer", value: "RLUSD for dollar-pegged settlement" },
          { label: "Coverage", value: "55+ countries via ODL" },
          { label: "Availability", value: "24/7/365 — no business hours" },
          { label: "Settlement", value: "3-5 seconds, any corridor" },
        ]} />

        <SectionNav items={[
          { id: "vision", label: "The Vision" },
          { id: "components", label: "Components" },
          { id: "network-effect", label: "Network Effect" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Countries" value="55+" delay={0} />
          <StatPill label="Speed" value="3-5s" delay={0.06} />
          <StatPill label="Availability" value="24/7" delay={0.12} />
          <StatPill label="Cost" value="<$0.01" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="vision">
            <h2 className="text-2xl font-bold text-text-primary">The Internet of Value</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The internet made information free and instant. Ripple&apos;s vision is to do the same for money. Today, sending $1,000 overseas costs $30-65 and takes 3-5 days. In the Internet of Value, it costs fractions of a cent and takes 3-5 seconds.
            </p>
            <div className="mt-5">
              <HighlightBox title="The Big Picture" variant="accent" large>
                <p>XRP isn&apos;t just a cryptocurrency — it&apos;s the <strong>settlement layer for a new global financial network</strong>. Just as TCP/IP became the invisible infrastructure of the internet, XRP aims to become the invisible settlement rail that powers global money movement.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="components" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Components of the Network</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "XRP Bridge Currency", desc: "The universal intermediary that converts between any two currencies in seconds, providing on-demand liquidity." },
                { title: "RLUSD Stablecoin", desc: "Dollar-pegged stability for treasury management, collateral, and USD-denominated settlement." },
                { title: "On-Demand Liquidity", desc: "Ripple's product that uses XRP to eliminate pre-funded accounts and enable instant cross-border payments." },
                { title: "RippleNet", desc: "The institutional payment network connecting 100+ financial institutions across 55+ countries." },
                { title: "XRPL Infrastructure", desc: "The underlying ledger providing 3-5 second settlement, sub-cent fees, and 24/7 operation." },
                { title: "Ripple Prime", desc: "Institutional prime brokerage providing clearing, custody, and settlement services for large players." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="network-effect" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Network Effect</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "More corridors = more liquidity", desc: "Each new currency corridor deepens XRP's liquidity pool, making it more efficient for everyone" },
                { title: "More volume = tighter spreads", desc: "Higher transaction volume reduces slippage and makes XRP more competitive vs traditional rails" },
                { title: "More institutions = more trust", desc: "Each institutional partner validates the network, attracting more participants" },
                { title: "More tokens = more utility", desc: "RLUSD, tokenized assets, and stablecoins on XRPL create additional liquidity and use cases" },
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
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/xrp-and-banks", label: "XRP & Banks", desc: "Institutional adoption" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "The bigger picture" },
              { href: "/learn/ripple-prime", label: "Ripple Prime", desc: "Institutional brokerage" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Future of Global Payments"
          description="XRP is building the liquidity layer for the Internet of Value."
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
