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
  title: "XRP for Beginners: Complete Starter Guide 2026 | AllAboutXRP",
  description: "XRP for beginners — everything you need to know about XRP, how it works, how to buy it, store it safely, and why it matters in simple terms.",
  keywords: ["XRP for beginners","XRP beginner guide","XRP explained simply","how to start with XRP","XRP starter guide"],
  openGraph: {
    title: "XRP for Beginners: Complete Starter Guide 2026",
    description: "Everything beginners need to know about XRP — how it works, how to buy, store, and why it matters.",
    url: "https://allaboutxrp.com/learn/xrp-for-beginners",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP for Beginners: Complete Starter Guide 2026", description: "Everything beginners need to know about XRP." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-for-beginners" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP for Beginners: Complete Starter Guide 2026", description: "Everything beginners need to know about XRP — how it works, how to buy, store, and why it matters.", url: "https://allaboutxrp.com/learn/xrp-for-beginners", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP for Beginners" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-for-beginners" }),
  buildFAQSchema([
    { question: "What is XRP in simple terms?", answer: "XRP is a digital currency designed for fast, cheap international payments. It settles in 3-5 seconds and costs fractions of a penny to send." },
    { question: "Is XRP a good investment for beginners?", answer: "XRP is one of the most established crypto assets. It's relatively affordable per coin, but always invest only what you can afford to lose and do your own research." },
    { question: "How much money do I need to start with XRP?", answer: "You can buy fractional XRP — start with as little as $10-$50 to learn. The 10 XRP wallet reserve is the minimum to activate an XRPL wallet." },
    { question: "Is XRP safe?", answer: "The XRP Ledger has operated since 2012 without a security breach. Your biggest risk is losing access to your wallet or buying at a bad price." },
    { question: "What's the difference between XRP and Bitcoin?", answer: "Bitcoin is digital gold (slow, expensive, store of value). XRP is digital payments (fast, cheap, designed for moving money). Different purposes." },
    { question: "Where can I buy XRP?", answer: "Major exchanges like Coinbase, Binance, Kraken, and Uphold all support XRP. See our detailed buying guide for step-by-step instructions." },
  ]),
];

const faqItems = [
  { q: "What is XRP in simple terms?", a: "XRP is a digital currency designed for fast, cheap international payments. It settles in 3-5 seconds and costs fractions of a penny to send." },
  { q: "Is XRP a good investment for beginners?", a: "XRP is one of the most established crypto assets. It's relatively affordable per coin, but always invest only what you can afford to lose and do your own research." },
  { q: "How much money do I need to start with XRP?", a: "You can buy fractional XRP — start with as little as $10-$50 to learn. The 10 XRP wallet reserve is the minimum to activate an XRPL wallet." },
  { q: "Is XRP safe?", a: "The XRP Ledger has operated since 2012 without a security breach. Your biggest risk is losing access to your wallet or buying at a bad price." },
  { q: "What's the difference between XRP and Bitcoin?", a: "Bitcoin is digital gold (slow, expensive, store of value). XRP is digital payments (fast, cheap, designed for moving money). Different purposes." },
  { q: "Where can I buy XRP?", a: "Major exchanges like Coinbase, Binance, Kraken, and Uphold all support XRP. See our detailed buying guide for step-by-step instructions." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP for Beginners" titleAccent="Complete Starter Guide" subtitle="New to XRP? Start here. Plain-language guide to what XRP is, how to buy it, store it, and why millions of people hold it." breadcrumbLabel="XRP for Beginners">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>XRP is a <strong className="text-text-primary">fast, cheap digital payment currency</strong> created in 2012. It settles in 3-5 seconds and costs less than $0.01 to send. Backed by <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> (a payments company), XRP is used by banks and institutions for <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border payments</Link>. You can <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">buy XRP</Link> on major exchanges starting with just a few dollars.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Created", value: "2012" },
          { label: "Speed", value: "3-5 seconds" },
          { label: "Cost", value: "< $0.01 per transaction" },
          { label: "Total Supply", value: "100 billion XRP" },
          { label: "Use Case", value: "Payments & transfers" },
          { label: "Network", value: "XRP Ledger (XRPL)" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Is XRP" },
          { id: "how", label: "How It Works" },
          { id: "buy", label: "How to Buy" },
          { id: "store", label: "How to Store" },
          { id: "why", label: "Why It Matters" },
          { id: "mistakes", label: "Avoid Mistakes" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Speed" value="3-5 sec" delay={0.00} />
          <StatPill label="Fee" value="< $0.01" delay={0.06} />
          <StatPill label="Since" value="2012" delay={0.12} />
          <StatPill label="Rank" value="Top 5" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is XRP?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Think of XRP as <strong className="text-text-primary">digital money built for speed</strong>. While Bitcoin is like digital gold (slow but valuable), XRP is like digital cash — designed to move fast and cheap. Learn more in our <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">detailed XRP explainer</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              { title: "Fast", desc: "Transactions settle in 3-5 seconds. Compare to Bitcoin's 10+ minutes or bank wires taking 3-5 days." },
              { title: "Cheap", desc: "Sending XRP costs less than a penny. International bank wires cost $25-50+." },
              { title: "Established", desc: "Running since 2012 with zero security breaches. One of the oldest and most battle-tested crypto networks." },
              { title: "Real Use Cases", desc: "Banks and institutions actually use XRP for payments. Not just speculation." },
            ]} /></div>
          </RevealSection>

          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Does XRP Work?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP runs on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> — a network of computers that verify transactions. Unlike Bitcoin mining, XRPL uses a <Link href="/learn/xrpl-consensus-mechanism" className="text-xrp-accent underline decoration-xrp-accent/30">consensus mechanism</Link> that's faster and more energy efficient.</p>
            <div className="mt-6"><HighlightBox title="Simple Analogy" variant="info"><p>Imagine sending money from the US to Japan. Today: your bank → correspondent bank → their bank → recipient. 3-5 days, $40+ fees. With XRP: you → XRP → recipient. 4 seconds, $0.001 fee. That's the value proposition.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="buy" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Buy XRP</h2>
            <div className="mt-6"><IconList items={[
              { title: "1. Choose an Exchange", desc: "Coinbase, Binance, Kraken, or Uphold. Pick one that's available in your country." },
              { title: "2. Create an Account", desc: "Sign up, verify your identity (required by law). Takes 5-30 minutes." },
              { title: "3. Deposit Funds", desc: "Add money via bank transfer, debit card, or other supported methods." },
              { title: "4. Buy XRP", desc: "Search for XRP, enter your amount, and buy. Start small to learn." },
              { title: "5. Consider Storage", desc: "For small amounts, the exchange is fine. For larger holdings, use a personal wallet." },
            ]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Read our complete <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">step-by-step buying guide</Link> for detailed instructions.</p>
          </RevealSection>

          <RevealSection id="store" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Store XRP</h2>
            <div className="mt-6"><DataTable headers={["Storage Type","Security","Ease","Best For"]} rows={[
              ["Exchange","Medium","Very Easy","Small amounts, beginners"],
              ["Software Wallet","Good","Easy","Regular use, moderate amounts"],
              ["Hardware Wallet","Excellent","Moderate","Long-term, large holdings"],
              ["Paper Wallet","Excellent","Complex","Cold storage experts"],
            ]} highlightCol={1} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Learn more: <Link href="/learn/how-to-store-xrp-safely" className="text-xrp-accent underline decoration-xrp-accent/30">How to Store XRP Safely</Link> and <Link href="/learn/crypto-wallets-for-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">Best Wallets for XRP</Link>.</p>
          </RevealSection>

          <RevealSection id="why" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why XRP Matters</h2>
            <div className="mt-6"><IconList items={[
              { title: "Solving a Real Problem", desc: "Cross-border payments are slow and expensive. XRP makes them instant and nearly free." },
              { title: "Institutional Adoption", desc: "Real banks and payment providers use Ripple's technology and XRP for actual business." },
              { title: "Regulatory Clarity", desc: "One of the few crypto assets with clear legal status after the SEC case." },
              { title: "Growing Ecosystem", desc: "DeFi, NFTs, stablecoins, and sidechains expanding XRP Ledger's capabilities." },
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="mistakes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Beginner Mistakes</h2>
            <div className="mt-6"><IconList items={[
              { title: "Investing more than you can lose", desc: "Crypto is volatile. Only invest money you won't need." },
              { title: "No research", desc: "Don't buy because someone on social media said so. Understand what you're buying." },
              { title: "Panic selling", desc: "XRP can drop 30%+ in a week. That's normal. Don't sell in panic." },
              { title: "Ignoring security", desc: "Use strong passwords, 2FA, and secure storage. See our full list of mistakes to avoid." },
            ]} variant="warn" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Read the full <Link href="/learn/xrp-common-mistakes" className="text-xrp-accent underline decoration-xrp-accent/30">common mistakes guide</Link>.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What Is XRP", desc: "Deep dive" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy", desc: "Step by step" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store Safely", desc: "Security guide" },
              { href: "/learn/xrp-common-mistakes", label: "Avoid Mistakes", desc: "Save yourself pain" },
              { href: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin", desc: "Key differences" },
              { href: "/learn/xrp-glossary", label: "XRP Glossary", desc: "Key terms" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Your XRP Journey" description="You've got the basics. Ready to go deeper?" primaryHref="/learn/how-to-buy-xrp" primaryLabel="Buy XRP →" secondaryHref="/learn/what-is-xrp" secondaryLabel="What Is XRP" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
