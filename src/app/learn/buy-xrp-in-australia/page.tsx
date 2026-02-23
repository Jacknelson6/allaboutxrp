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
  robots: { index: false, follow: true },
  title: "How to Buy XRP in Australia: AUD Guide (2026) | AllAboutXRP",
  description: "How to buy XRP in Australia with AUD. Top exchanges, PayID deposits, tax reporting, and AUSTRAC-regulated options.",
  keywords: ["buy XRP Australia", "how to buy XRP in Australia", "XRP AUD"],
  openGraph: {
    title: "How to Buy XRP in Australia: AUD Guide (2026)",
    description: "How to buy XRP in Australia with AUD. Top exchanges, PayID deposits, and AUSTRAC-regulated options.",
    url: "https://allaboutxrp.com/learn/buy-xrp-in-australia",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy XRP in Australia with AUD (2026)",
    description: "Best Australian exchanges, PayID deposits, and tax guide for buying XRP.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/buy-xrp-in-australia" },
};

const schemas = [
  buildArticleSchema({
    headline: "How to Buy XRP in Australia: AUD Guide (2026)",
    description: "How to buy XRP in Australia with AUD. Top exchanges, PayID deposits, tax reporting, and AUSTRAC-regulated options.",
    url: "https://allaboutxrp.com/learn/buy-xrp-in-australia",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Buy XRP in Australia" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/buy-xrp-in-australia" }),
  buildFAQSchema([
    { question: "Is XRP legal in Australia?", answer: "Yes. XRP is fully legal to buy, sell, and hold in Australia. Cryptocurrency exchanges must register with AUSTRAC (Australian Transaction Reports and Analysis Centre) and comply with AML/CTF requirements." },
    { question: "What is the best exchange to buy XRP in Australia?", answer: "CoinSpot is Australia's most popular exchange with instant AUD deposits. Swyftx offers competitive fees. Kraken and Binance are also available. For lowest fees, use Kraken Pro (0.16% maker)." },
    { question: "Can I buy XRP with PayID in Australia?", answer: "Yes. CoinSpot, Swyftx, and several other Australian exchanges support PayID for instant, free AUD deposits. PayID is linked to your bank account and processes deposits within minutes." },
    { question: "Do I pay tax on XRP in Australia?", answer: "Yes. The ATO treats cryptocurrency as a CGT asset. Capital Gains Tax applies when you sell XRP for profit. Holding for 12+ months gives a 50% CGT discount. All transactions must be reported." },
    { question: "What is the crypto tax rate in Australia?", answer: "Crypto gains are added to your income and taxed at your marginal rate (19-45%). If you hold for 12+ months, you get a 50% CGT discount — effectively halving your tax rate on those gains." },
  ]),
];

const faqItems = [
  { q: "Is XRP legal in Australia?", a: "Yes. Fully legal. Exchanges must register with AUSTRAC and comply with AML/CTF requirements." },
  { q: "Best exchange for Australians?", a: "CoinSpot (most popular, instant AUD), Swyftx (competitive fees), Kraken (0.16% maker), Binance (0.1%)." },
  { q: "Can I use PayID?", a: "Yes. CoinSpot, Swyftx, and others support free, instant PayID deposits linked to your bank account." },
  { q: "Do I pay tax on XRP?", a: "Yes. ATO treats crypto as a CGT asset. Hold 12+ months for 50% CGT discount." },
  { q: "What's the crypto tax rate?", a: "Added to income at marginal rate (19-45%). 50% discount for 12+ month holdings." },
];

export default function BuyXRPInAustraliaPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy XRP in Australia"
          titleAccent="AUD Guide (2026)"
          subtitle="Australia has a thriving crypto market with clear regulations and multiple AUSTRAC-registered exchanges. Here's how to buy XRP with AUD using PayID, bank transfer, or card — plus everything you need to know about Australian crypto taxes."
          breadcrumbLabel="Buy XRP in Australia"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Australians</strong> can buy XRP easily using <strong className="text-text-primary">PayID</strong> for free, instant AUD deposits. Top exchanges: <strong className="text-text-primary">CoinSpot</strong> (most popular Australian exchange), <strong className="text-text-primary">Swyftx</strong> (competitive fees), or <a href="https://allaboutxrp.com/go/kraken" className="text-xrp-accent underline decoration-xrp-accent/30 font-semibold">Kraken</a> (lowest pro fees). Hold 12+ months for a <strong className="text-text-primary">50% CGT discount</strong>. Store long-term in a <Link href="/learn/how-to-store-xrp-safely" className="text-xrp-accent underline decoration-xrp-accent/30">self-custody wallet</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Legal Status", value: "✅ Fully legal" },
          { label: "Regulator", value: "AUSTRAC" },
          { label: "Best Local Exchange", value: "CoinSpot / Swyftx" },
          { label: "Cheapest Deposit", value: "PayID (free, instant)" },
          { label: "CGT Discount", value: "50% (hold 12+ months)" },
          { label: "Tax Reporting", value: "Required (ATO)" },
          { label: "Trading Pair", value: "XRP/AUD" },
          { label: "GST on Crypto", value: "No (since 2017)" },
        ]} />

        <SectionNav items={[
          { id: "best-exchanges", label: "Best Exchanges" },
          { id: "how-to-buy", label: "How to Buy" },
          { id: "payid", label: "PayID Deposits" },
          { id: "taxes", label: "ATO Tax Guide" },
          { id: "regulation", label: "Regulation" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Legal" value="✅ Yes" delay={0} />
          <StatPill label="PayID" value="Free" delay={0.06} />
          <StatPill label="CGT Discount" value="50%" delay={0.12} />
          <StatPill label="No GST" value="✅" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="best-exchanges">
            <h2 className="text-2xl font-bold text-text-primary">Best Exchanges for Australian XRP Buyers</h2>
            <div className="mt-6">
              <DataTable
                headers={["Exchange", "AUSTRAC", "AUD Deposit", "Fee", "XRP/AUD"]}
                rows={[
                  ["CoinSpot", "✅", "PayID (free)", "0.1%", "✅"],
                  ["Swyftx", "✅", "PayID (free)", "0.6% spread", "✅"],
                  ["Kraken", "✅", "OSKO/PayID", "0.16-0.26%", "XRP/AUD ✅"],
                  ["Binance", "✅", "PayID (free)", "0.1%", "XRP/AUD ✅"],
                  ["Independent Reserve", "✅", "PayID (free)", "0.5%", "✅"],
                ]}
                highlightCol={0}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="🇦🇺 Our Top Pick for Australians" variant="accent">
                <p><strong className="text-text-primary">CoinSpot</strong> — Australia&apos;s most popular exchange with 2.5M+ users, free PayID deposits, and 0.1% trading fees. AUSTRAC-registered with an excellent track record. For lowest pro fees, <a href="https://allaboutxrp.com/go/kraken" className="text-xrp-accent underline decoration-xrp-accent/30 font-bold" target="_blank" rel="noopener noreferrer">Kraken</a> at 0.16% is hard to beat.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="how-to-buy" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Buy XRP in Australia: Step by Step</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "1. Choose an AUSTRAC-registered exchange", desc: "CoinSpot for ease, Swyftx for features, Kraken for lowest fees. All are regulated." },
                { title: "2. Sign up and verify", desc: "Register with email, verify identity with Australian driver's licence or passport. Usually 5-10 minutes." },
                { title: "3. Deposit AUD via PayID", desc: "Free and instant. Open your banking app, add the exchange as a PayID recipient, and send funds." },
                { title: "4. Buy XRP", desc: "Search for XRP, select XRP/AUD, enter your amount. Use limit orders for the best price." },
                { title: "5. Consider self-custody", desc: "For holdings you plan to keep 12+ months (CGT discount), consider a hardware wallet." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="payid" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Depositing AUD via PayID/OSKO</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">PayID</strong> (powered by OSKO/NPP) is Australia&apos;s real-time payment system. It&apos;s the best way to fund your crypto exchange — free, instant, and supported by all major Australian banks. It works similarly to how <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">other deposit methods</Link> function globally.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Instant Settlement", desc: "Funds arrive in seconds to minutes — much faster than traditional bank transfers" },
                { title: "Free on Most Exchanges", desc: "CoinSpot, Swyftx, Binance, and others don't charge for PayID deposits" },
                { title: "All Major Banks", desc: "Works with CBA, ANZ, Westpac, NAB, and virtually every Australian bank" },
                { title: "High Limits", desc: "Typically $10K-$50K daily depending on your bank. Contact your bank to increase." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="taxes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Australian Tax on XRP (ATO)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The ATO treats cryptocurrency as a <strong className="text-text-primary">CGT asset</strong>. Here&apos;s what you need to know — for the complete picture, check our <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">XRP tax guide</Link>.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Event", "Taxable?", "Details"]}
                rows={[
                  ["Buy XRP with AUD", "❌ No", "Not a taxable event"],
                  ["Hold XRP", "❌ No", "No tax until disposal"],
                  ["Sell XRP for AUD", "✅ Yes", "CGT event — report gain/loss"],
                  ["Trade XRP for crypto", "✅ Yes", "CGT event on each trade"],
                  ["Spend XRP", "✅ Yes", "CGT event at time of spending"],
                  ["Receive XRP as income", "✅ Yes", "Ordinary income tax"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="💰 50% CGT Discount — Hold 12+ Months" variant="accent">
                <p>If you hold XRP for <strong className="text-text-primary">more than 12 months</strong>, you get a 50% discount on capital gains. Example: $10,000 profit at 32.5% tax rate = $3,250 tax (short-term) vs $1,625 (long-term). This is a powerful incentive to <Link href="/learn/xrp-portfolio-allocation" className="text-xrp-accent underline decoration-xrp-accent/30">hold long-term</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="regulation" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Australian Crypto Regulation</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Australia is considered <strong className="text-text-primary">crypto-friendly</strong> with clear regulatory frameworks through AUSTRAC and evolving legislation. Understanding <Link href="/learn/crypto-regulation-xrp-impact" className="text-xrp-accent underline decoration-xrp-accent/30">how regulation impacts XRP</Link> helps you make informed decisions.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "AUSTRAC Registration", desc: "All crypto exchanges must register and comply with AML/CTF rules." },
                { title: "No GST on Crypto", desc: "Since July 2017, crypto purchases are GST-free (previously double-taxed)." },
                { title: "Consumer Protection", desc: "ASIC monitors crypto products for misleading conduct. Exchanges must be transparent." },
                { title: "Licensing Framework", desc: "Australia is developing a comprehensive crypto licensing regime expected to provide even greater clarity." },
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
              { href: "/learn/buy-xrp-on-kraken", label: "Buy on Kraken", desc: "Lowest pro fees" },
              { href: "/learn/best-xrp-exchanges", label: "Best Exchanges", desc: "Full comparison" },
              { href: "/learn/xrp-tax-guide", label: "XRP Tax Guide", desc: "Tax obligations" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Self-custody guide" },
              { href: "/learn/xrp-southeast-asia", label: "XRP in Asia-Pacific", desc: "Regional adoption" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Buy XRP in Australia Today"
          description="Free PayID deposits, AUSTRAC-regulated exchanges, and 50% CGT discount for long-term holders."
          primaryHref="https://allaboutxrp.com/go/kraken"
          primaryLabel="Start with Kraken →"
          secondaryHref="/learn/best-xrp-exchanges"
          secondaryLabel="Compare All Exchanges"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. This is not financial or tax advice. This page may contain affiliate links.</em>
        </p>
      </div>
    </>
  );
}
