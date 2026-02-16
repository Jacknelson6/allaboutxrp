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
  title: "How to Buy XRP in the USA: Complete Guide (2026) | AllAboutXRP",
  description: "How to buy XRP in the United States. Best exchanges, state restrictions, tax implications, and step-by-step guide for American investors.",
  keywords: ["buy XRP USA", "how to buy XRP in US", "XRP United States", "buy XRP America"],
  openGraph: {
    title: "How to Buy XRP in the USA: Complete Guide (2026)",
    description: "Best exchanges, state restrictions, tax implications, and step-by-step guide for American investors.",
    url: "https://allaboutxrp.com/learn/buy-xrp-in-usa",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP in the USA (2026)",
    description: "Complete guide to buying XRP in the United States — exchanges, taxes, and regulations.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/buy-xrp-in-usa" },
};

const schemas = [
  buildArticleSchema({
    headline: "How to Buy XRP in the USA: Complete Guide (2026)",
    description: "How to buy XRP in the United States. Best exchanges, state restrictions, tax implications, and step-by-step guide.",
    url: "https://allaboutxrp.com/learn/buy-xrp-in-usa",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Buy XRP in USA" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/buy-xrp-in-usa" }),
  buildFAQSchema([
    { question: "Is XRP legal to buy in the USA?", answer: "Yes. XRP is fully legal to buy, sell, and hold in the United States. The SEC v Ripple ruling in 2023 confirmed that XRP sales on exchanges are not securities transactions. All major US exchanges now support XRP trading." },
    { question: "What is the best exchange to buy XRP in the US?", answer: "Coinbase is the most popular choice (all 50 states, easy to use). Kraken offers the best security record. Uphold never delisted XRP. For lowest fees, use Coinbase Advanced Trade (0.05%) or Kraken Pro (0.16%)." },
    { question: "Do I have to pay taxes on XRP in the US?", answer: "Yes. The IRS treats cryptocurrency as property. Selling XRP for profit triggers capital gains tax. Holding for more than 1 year qualifies for lower long-term capital gains rates (0-20%). You must report all crypto transactions on your tax return." },
    { question: "Are there state restrictions for buying XRP?", answer: "Most states allow XRP trading on major exchanges. New York requires exchanges to hold a BitLicense (Coinbase and Bitstamp have one; Kraken doesn't). Some exchanges have restrictions in Hawaii, Nevada, and a few other states." },
    { question: "Can I buy XRP with a US bank account?", answer: "Yes. Coinbase, Kraken, Uphold, and Bitstamp all support ACH bank transfers (usually free) and wire transfers. ACH deposits typically take 1-3 business days but many platforms allow instant trading while the deposit clears." },
  ]),
];

const faqItems = [
  { q: "Is XRP legal to buy in the USA?", a: "Yes. The SEC v Ripple ruling confirmed XRP sales on exchanges are not securities. All major US exchanges now support XRP." },
  { q: "What is the best exchange to buy XRP in the US?", a: "Coinbase (all 50 states, easy), Kraken (best security), Uphold (never delisted XRP). Lowest fees: Coinbase Advanced (0.05%) or Kraken Pro (0.16%)." },
  { q: "Do I have to pay taxes on XRP in the US?", a: "Yes. IRS treats crypto as property. Selling for profit triggers capital gains tax. Holding 1+ year qualifies for lower long-term rates (0-20%)." },
  { q: "Are there state restrictions?", a: "Most states allow XRP. New York requires BitLicense (Coinbase/Bitstamp have it; Kraken doesn't). Some restrictions in Hawaii, Nevada." },
  { q: "Can I buy XRP with a US bank account?", a: "Yes. Coinbase, Kraken, Uphold, Bitstamp all support free ACH deposits with 1-3 day settlement." },
];

export default function BuyXRPInUSAPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy XRP in the USA"
          titleAccent="Complete Guide (2026)"
          subtitle="XRP is fully legal to buy in all 50 US states following the landmark SEC v Ripple ruling. This guide covers the best exchanges for American investors, state-by-state availability, tax obligations, and step-by-step instructions."
          breadcrumbLabel="Buy XRP in USA"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP is legal to buy in all 50 US states.</strong> Best options: <a href="https://allaboutxrp.com/go/coinbase" className="text-xrp-accent underline decoration-xrp-accent/30 font-semibold">Coinbase</a> (easiest, all states), <a href="https://allaboutxrp.com/go/kraken" className="text-xrp-accent underline decoration-xrp-accent/30 font-semibold">Kraken</a> (best security), or <a href="https://allaboutxrp.com/go/uphold" className="text-xrp-accent underline decoration-xrp-accent/30 font-semibold">Uphold</a> (never delisted XRP). Use ACH bank transfers for free deposits. The <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">SEC lawsuit is resolved</Link> — XRP on exchanges is not a security. Remember: <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">crypto gains are taxable</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Legal Status", value: "✅ Fully legal (all 50 states)" },
          { label: "SEC Ruling", value: "XRP on exchanges ≠ security" },
          { label: "Best Exchange (Easy)", value: "Coinbase" },
          { label: "Best Exchange (Fees)", value: "Coinbase Advanced / Kraken Pro" },
          { label: "Cheapest Deposit", value: "ACH bank transfer (free)" },
          { label: "Tax Treatment", value: "Property (capital gains)" },
          { label: "XRP ETF Status", value: "Pending / Expected 2026" },
          { label: "Reporting Required", value: "Yes (IRS Form 8949)" },
        ]} />

        <SectionNav items={[
          { id: "legal-status", label: "Legal Status" },
          { id: "best-exchanges", label: "Best Exchanges" },
          { id: "step-by-step", label: "How to Buy" },
          { id: "taxes", label: "Tax Guide" },
          { id: "state-restrictions", label: "State Restrictions" },
          { id: "etf", label: "XRP ETF" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Legal" value="✅ Yes" delay={0} />
          <StatPill label="States" value="50/50" delay={0.06} />
          <StatPill label="Exchanges" value="5+ options" delay={0.12} />
          <StatPill label="Min Buy" value="$1-2" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="legal-status">
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Legal Status in the US</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v Ripple lawsuit</Link> was the defining event for XRP in the US. In July 2023, Judge Analisa Torres ruled that <strong className="text-text-primary">XRP sold on exchanges is not a security</strong>. This landmark ruling cleared the way for every major US exchange to relist XRP.
            </p>

            <div className="mt-6">
              <HighlightBox title="SEC v Ripple: Key Ruling" variant="accent">
                <p>Programmatic sales of XRP on exchanges were ruled <strong className="text-text-primary">not securities transactions</strong>. This means buying XRP on Coinbase, Kraken, or any exchange is legal and does not violate securities law. Ripple&apos;s institutional sales were treated differently, but this doesn&apos;t affect retail buyers.</p>
              </HighlightBox>
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Since the ruling, XRP has been relisted on Coinbase, Kraken, Binance.US, and most other US platforms. The <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">XRP ETF</Link> is also under consideration, which would provide even easier access through traditional brokerage accounts.
            </p>
          </RevealSection>

          <RevealSection id="best-exchanges" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Exchanges for US Buyers</h2>
            <div className="mt-6">
              <DataTable
                headers={["Exchange", "Fee (Pro)", "All 50 States", "Deposit", "Best For"]}
                rows={[
                  ["Coinbase", "0.05-0.60%", "✅", "Free ACH", "Beginners"],
                  ["Kraken", "0.16-0.26%", "48 states*", "Free ACH", "Security"],
                  ["Uphold", "~1% spread", "✅", "Free ACH", "XRP community"],
                  ["Bitstamp", "0.30%", "✅", "Free ACH", "Experienced"],
                  ["Robinhood", "~0.6% spread", "Most states", "Instant", "Stock traders"],
                  ["Binance.US", "0.1%", "Most states", "Free ACH", "Low fees"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-2 text-xs text-text-secondary/60">*Kraken not available in NY and WA.</p>

            <div className="mt-6">
              <HighlightBox title="🏆 Our Top Pick for US Users" variant="accent">
                <p><a href="https://allaboutxrp.com/go/coinbase" className="text-xrp-accent underline decoration-xrp-accent/30 font-bold" target="_blank" rel="noopener noreferrer">Coinbase →</a> Available in all 50 states, easiest for beginners, and Advanced Trade has fees as low as 0.05%. <Link href="/learn/buy-xrp-on-coinbase" className="text-xrp-accent underline decoration-xrp-accent/30">Read our full Coinbase guide</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="step-by-step" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Buy XRP in the US: Step by Step</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "1. Choose an exchange", desc: "Coinbase for ease, Kraken for security, Uphold for XRP loyalty. See comparison above." },
                { title: "2. Create and verify your account", desc: "Sign up with email, complete KYC (ID + selfie). Takes 5-15 minutes." },
                { title: "3. Deposit USD via ACH", desc: "Link your bank account and initiate a free ACH transfer. Most exchanges allow instant trading while deposit clears." },
                { title: "4. Buy XRP", desc: "Search for XRP, enter your amount, and confirm. Use limit orders on Advanced/Pro tiers for lowest fees." },
                { title: "5. Secure your XRP", desc: "Consider moving to a self-custody wallet for long-term holding. Hardware wallets like Ledger are the gold standard." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="taxes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">US Tax Obligations for XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The IRS treats cryptocurrency as <strong className="text-text-primary">property</strong>, not currency. This means buying, selling, and trading XRP has tax implications. For a deep dive, see our <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">complete XRP tax guide</Link>.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Event", "Taxable?", "Tax Type"]}
                rows={[
                  ["Buying XRP with USD", "❌ No", "Not taxable"],
                  ["Holding XRP", "❌ No", "Not taxable"],
                  ["Selling XRP for profit", "✅ Yes", "Capital gains"],
                  ["Trading XRP for another crypto", "✅ Yes", "Capital gains"],
                  ["Receiving XRP as income", "✅ Yes", "Ordinary income"],
                  ["XRP airdrop received", "✅ Yes", "Ordinary income"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="💡 Hold for 1+ Year = Lower Taxes" variant="info">
                <p>XRP held for more than 12 months qualifies for <strong className="text-text-primary">long-term capital gains rates</strong> (0%, 15%, or 20% depending on income). Short-term gains (held less than 1 year) are taxed as ordinary income, which can be as high as 37%.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="state-restrictions" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">State-by-State Availability</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While XRP is legal nationwide, individual exchange availability varies by state due to different licensing requirements:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "New York", desc: "Requires BitLicense. Coinbase ✅, Bitstamp ✅, Robinhood ✅. Kraken ❌, Binance.US ❌." },
                { title: "Hawaii", desc: "Strict bond requirements limit exchange availability. Coinbase ✅, Kraken ✅. Some others limited." },
                { title: "Washington", desc: "Kraken not available. Coinbase ✅, Uphold ✅." },
                { title: "All other states", desc: "Most exchanges fully available. Coinbase and Uphold cover all 50 states." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="etf" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP ETF: Coming to the US?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Multiple asset managers have filed for <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">XRP ETFs</Link>, which would let Americans buy XRP exposure through their existing brokerage accounts (Fidelity, Schwab, etc.) without needing a crypto exchange. Approval is widely expected in 2026 following the SEC&apos;s pivot to a more crypto-friendly stance. This would also be relevant for <Link href="/learn/xrp-spot-etf-vs-futures-etf" className="text-xrp-accent underline decoration-xrp-accent/30">understanding ETF structures</Link>.
            </p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/best-xrp-exchanges", label: "Best XRP Exchanges", desc: "Full comparison" },
              { href: "/learn/buy-xrp-on-coinbase", label: "Buy on Coinbase", desc: "Step-by-step guide" },
              { href: "/learn/xrp-tax-guide", label: "XRP Tax Guide", desc: "US obligations" },
              { href: "/learn/sec-vs-ripple-explained", label: "SEC v Ripple", desc: "The lawsuit explained" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Self-custody guide" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Buy XRP in the USA Today"
          description="XRP is fully legal in all 50 states. Choose your exchange and start buying in minutes."
          primaryHref="https://allaboutxrp.com/go/coinbase"
          primaryLabel="Start with Coinbase →"
          secondaryHref="/learn/best-xrp-exchanges"
          secondaryLabel="Compare All Exchanges"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. This is not financial or legal advice. This page may contain affiliate links.</em>
        </p>
      </div>
    </>
  );
}
