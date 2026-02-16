import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "how-xrp-makes-money";
const title = "How Does XRP Make Money? Understanding XRP's Value";
const description = "Where does XRP's value come from? Understand the demand drivers — utility, scarcity, speculation, and institutional use.";
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
    { name: "How XRP Makes Money" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "How does XRP make money?", answer: "XRP itself doesn't 'make money' like a company does. XRP gains value through supply and demand. When more people and institutions want to buy XRP than sell it — because of its utility in payments, growing adoption, and limited supply — the price goes up." },
    { question: "Where does XRP's value come from?", answer: "XRP's value comes from four main sources: utility (used for real cross-border payments), scarcity (limited supply of 100 billion, with some burned each transaction), adoption (growing institutional use), and market speculation." },
    { question: "Does XRP pay dividends?", answer: "No. XRP is a digital currency, not a stock. It doesn't pay dividends. You can earn yield on XRP through DeFi protocols, AMM liquidity provision, or lending platforms, but XRP itself has no built-in yield mechanism." },
    { question: "How does Ripple make money?", answer: "Ripple (the company) makes money by selling its software and services to banks, selling XRP from its reserves, and earning revenue from its products like RippleNet, RLUSD, and Ripple Prime." },
    { question: "Is XRP's value tied to Ripple?", answer: "Partially. Ripple's partnerships and products drive adoption of XRP, which can increase demand. But XRP has value independent of Ripple — it's used in DeFi, NFTs, and peer-to-peer payments regardless of Ripple's activities." },
  ]),
];

const faqItems = [
  { q: "How does XRP 'make money'?", a: "XRP doesn't make money like a company. It gains value through supply and demand. As more banks use it for payments, more people want to hold it, and the supply is limited — these forces push the price up." },
  { q: "What drives XRP's price up?", a: "Four main things: (1) Real utility — banks using XRP for payments, (2) Growing adoption — more partnerships and corridors, (3) Limited supply — only 100B XRP will ever exist, with some burned forever, (4) Market sentiment and speculation." },
  { q: "Can you earn passive income with XRP?", a: "Yes, but not from XRP itself. You can earn yield by providing liquidity in XRPL AMM pools, lending XRP on platforms, or participating in DeFi. These are separate activities from simply holding XRP." },
  { q: "What makes XRP more valuable over time?", a: "If the thesis plays out: more banks adopt ODL → more XRP is needed for transactions → more demand with fixed supply → higher price. Plus ETF approvals, CBDC bridging, and tokenized assets all increase demand." },
  { q: "Does XRP have a maximum supply?", a: "Yes. There will only ever be 100 billion XRP. A tiny amount is destroyed (burned) with every transaction. This means the total supply slowly decreases over time, making each remaining XRP slightly more scarce." },
  { q: "How does Ripple make money from XRP?", a: "Ripple holds billions of XRP (mostly in escrow) and can sell them. Ripple also earns revenue from its enterprise software, RLUSD stablecoin, and Ripple Prime brokerage — XRP sales are just one revenue stream." },
];

export default function HowXRPMakesMoneyPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How Does XRP"
          titleAccent="Make Money?"
          subtitle="XRP doesn't 'make money' like a company — it gains value through utility, adoption, and scarcity. Here's how it works, explained simply."
          breadcrumbLabel="How XRP Makes Money"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>XRP gains value through <strong className="text-text-primary">supply and demand</strong>. When banks use XRP for <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border payments</Link>, they need to buy it — creating demand. There are only 100 billion XRP (and some are <Link href="/learn/xrp-burn-rate" className="text-xrp-accent underline decoration-xrp-accent/30">burned forever</Link> with each transaction). More demand + limited supply = higher price. It&apos;s that simple.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Total Supply", value: "100 billion XRP (forever)" },
          { label: "Deflationary", value: "XRP burned with every transaction" },
          { label: "Utility", value: "Bridge currency for cross-border payments" },
          { label: "Adoption", value: "100+ institutional partners" },
          { label: "Dividends", value: "None (it's a currency, not a stock)" },
          { label: "Yield Options", value: "AMM pools, lending, DeFi" },
        ]} />

        <SectionNav items={[
          { id: "value-drivers", label: "Value Drivers" },
          { id: "supply", label: "Supply" },
          { id: "earning", label: "Earning" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="value-drivers">
            <h2 className="text-2xl font-bold text-text-primary">What Drives XRP&apos;s Value</h2>
            <p className="mt-4 text-text-secondary leading-relaxed text-lg">
              Think of XRP like a foreign currency. The US dollar doesn&apos;t &quot;make money&quot; — but it has value because people need it for transactions. XRP works the same way, with four main drivers:
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "1. Real Utility 🏦", desc: "Banks use XRP to send money across borders. Every ODL transaction requires buying XRP, creating real demand from actual business use." },
                { title: "2. Growing Adoption 📈", desc: "More banks, more corridors, more volume. Each new partner increases demand. 100+ institutions across 55+ countries and growing." },
                { title: "3. Limited Supply 🔒", desc: "Only 100 billion XRP will ever exist. Some are burned with every transaction. Supply slowly shrinks while demand grows." },
                { title: "4. Market Sentiment 💭", desc: "Like all investments, XRP's price is also driven by what people believe about its future. Positive news drives buying; fear drives selling." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="supply" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Supply Side</h2>
            <div className="mt-5">
              <HighlightBox title="XRP Is Deflationary" variant="accent" large>
                <p className="text-lg">Every XRP transaction burns a tiny amount of XRP forever. It&apos;s not much per transaction, but over millions of transactions, it adds up. The total supply of XRP can only go <strong>down</strong> over time — making each remaining XRP slightly more scarce and potentially more valuable.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "100 billion max supply", desc: "Set at creation, can never increase. No one can 'print' more XRP" },
                { title: "Burn mechanism", desc: "A small amount of XRP is permanently destroyed with every transaction" },
                { title: "Escrow schedule", desc: "Ripple's XRP is released on a predictable monthly schedule, preventing market dumps" },
                { title: "Decreasing supply", desc: "Over time, the total XRP supply slowly decreases as more is burned" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="earning" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Can You Earn with XRP?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed text-lg">
              XRP itself doesn&apos;t pay dividends or interest (it&apos;s a currency, not a stock). But there are ways to earn yield:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "AMM Liquidity Pools", desc: "Provide liquidity on the XRPL AMM and earn trading fees from every swap in your pool" },
                { title: "Lending Platforms", desc: "Lend your XRP on supported platforms and earn interest from borrowers" },
                { title: "DeFi Protocols", desc: "Participate in DeFi yield opportunities on the XRPL EVM sidechain" },
                { title: "Price Appreciation", desc: "The simplest approach — buy XRP and hold it, hoping the price increases over time" },
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
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Supply & distribution" },
              { href: "/learn/xrp-burn-rate", label: "XRP Burn Rate", desc: "Deflationary mechanics" },
              { href: "/learn/xrp-supply-explained", label: "Supply Explained", desc: "Escrow & circulation" },
              { href: "/learn/on-demand-liquidity", label: "ODL", desc: "How banks use XRP" },
              { href: "/learn/xrp-amm", label: "XRPL AMM", desc: "Earn trading fees" },
              { href: "/learn/xrp-price-potential", label: "Price Potential", desc: "Where could XRP go?" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Supply and Demand — That's the Secret"
          description="XRP gains value from real utility, growing adoption, and limited supply. Ready to own some?"
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-tokenomics"
          secondaryLabel="Explore Tokenomics"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice.</em>
        </p>
      </div>
    </>
  );
}
