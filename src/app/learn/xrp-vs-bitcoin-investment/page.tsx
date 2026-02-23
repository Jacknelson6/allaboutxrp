import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "XRP vs Bitcoin: Which Is the Better Investment? (2026) | AllAboutXRP",
  description: "XRP vs Bitcoin as an investment — risk/reward, growth potential, market caps, and how to allocate between the two in 2026.",
  keywords: ["XRP vs Bitcoin investment", "should I buy XRP or Bitcoin", "XRP or BTC", "XRP vs Bitcoin 2026"],
  openGraph: {
    title: "XRP vs Bitcoin: Better Investment in 2026?",
    description: "Risk/reward, growth potential, and portfolio allocation — full comparison.",
    url: "https://allaboutxrp.com/learn/xrp-vs-bitcoin-investment",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP vs Bitcoin Investment", description: "Which is better for 2026?" },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-vs-bitcoin-investment" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP vs Bitcoin: Which Is the Better Investment? (2026)", description: "Compare XRP and Bitcoin as investments — risk, reward, growth potential, and allocation strategy.", url: "https://allaboutxrp.com/learn/xrp-vs-bitcoin-investment", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP vs Bitcoin Investment" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-vs-bitcoin-investment" }),
  buildFAQSchema([
    { question: "Should I buy XRP or Bitcoin?", answer: "Different risk/reward profiles. Bitcoin is the established 'digital gold' with ETF inflows and institutional adoption — lower risk, potentially lower upside. XRP has more potential upside from a smaller market cap (~$110B vs $1T+) but carries more execution risk. Many investors hold both — Bitcoin as a core crypto holding and XRP as a higher-upside allocation." },
    { question: "Which has more upside potential?", answer: "XRP likely has more upside potential in percentage terms due to its smaller market cap. XRP going from $2 to $10 (5x) requires ~$570B market cap. Bitcoin going 5x from $100K would require $10T+ market cap. Smaller assets have more room to grow but also more room to fall." },
    { question: "Is Bitcoin safer than XRP?", answer: "Generally yes. Bitcoin has the longest track record (15+ years), the largest market cap, approved ETFs with billions in inflows, and is recognized as a legitimate asset class by major institutions. XRP has more regulatory clarity post-SEC but is more dependent on Ripple's execution." },
    { question: "What percentage should I allocate to each?", answer: "Common approaches: Conservative (80% BTC / 20% XRP), Balanced (60% BTC / 40% XRP), or Aggressive (40% BTC / 60% XRP). Your allocation should reflect your risk tolerance, conviction, and investment timeline. Not financial advice." },
    { question: "Can XRP outperform Bitcoin?", answer: "Historically, altcoins including XRP have outperformed Bitcoin during specific bull market phases (typically late in the cycle). XRP outperformed Bitcoin significantly in late 2017 and late 2024. However, Bitcoin has outperformed most altcoins over full market cycles." },
  ]),
];

const faqItems = [
  { q: "Should I buy XRP or Bitcoin?", a: "Both serve different roles. Bitcoin = digital gold (lower risk). XRP = payment utility (higher upside, more risk). Many hold both." },
  { q: "Which has more upside?", a: "XRP in percentage terms — smaller market cap means more room to grow. 5x XRP = ~$570B. 5x BTC = ~$5T+." },
  { q: "Is Bitcoin safer?", a: "Generally yes — longer track record, larger market cap, approved ETFs, broader institutional acceptance." },
  { q: "How should I allocate?", a: "Conservative: 80/20 BTC/XRP. Balanced: 60/40. Aggressive: 40/60. Depends on risk tolerance." },
  { q: "Can XRP outperform Bitcoin?", a: "In specific phases, yes (late 2017, late 2024). Over full cycles, Bitcoin typically outperforms most altcoins." },
];

export default function XRPvsBitcoinInvestmentPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP vs Bitcoin" titleAccent="Which Is the Better Investment?" subtitle="The #1 question crypto investors ask. Both have compelling cases. Here's how to think about it — risk, reward, and how to allocate between them." breadcrumbLabel="XRP vs Bitcoin Investment">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Bitcoin</strong> is the safer, more established choice — &quot;digital gold&quot; with approved ETFs and $1T+ market cap. <strong className="text-text-primary">XRP</strong> has more percentage upside potential from its smaller ~$110B market cap, with strong catalysts (ETF pending, 300+ <Link href="/learn/banks-using-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">institutional partners</Link>, <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link>). <strong className="text-text-primary">Many investors hold both</strong> — Bitcoin as the core, XRP as the higher-upside play.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "BTC Market Cap", value: "~$1-1.5 trillion" },
          { label: "XRP Market Cap", value: "~$110 billion" },
          { label: "BTC Upside (5x)", value: "Requires ~$5-7.5T" },
          { label: "XRP Upside (5x)", value: "Requires ~$570B" },
          { label: "BTC ETF", value: "Approved (billions flowing)" },
          { label: "XRP ETF", value: "Pending (under review)" },
          { label: "BTC Use Case", value: "Store of value" },
          { label: "XRP Use Case", value: "Payment settlement" },
        ]} />

        <SectionNav items={[
          { id: "comparison", label: "Investment Comparison" },
          { id: "upside", label: "Upside Analysis" },
          { id: "risk", label: "Risk Comparison" },
          { id: "allocation", label: "Allocation Strategy" },
          { id: "history", label: "Historical Performance" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">Investment Profile Comparison</h2>
            <div className="mt-6">
              <DataTable
                headers={["Factor", "Bitcoin (BTC)", "XRP"]}
                rows={[
                  ["Market Cap", "~$1-1.5T", "~$110B"],
                  ["Age", "15+ years", "12+ years"],
                  ["ETF Status", "Approved (BTC ETFs)", "Pending review"],
                  ["Institutional Adoption", "Very high (treasuries, ETFs)", "High (300+ bank partners)"],
                  ["Volatility", "High (but decreasing)", "Very High"],
                  ["Regulatory Status", "Commodity (per CFTC)", "Post-SEC clarity"],
                  ["Revenue/Utility", "Store of value", "Payment settlement"],
                  ["Supply", "21M (fixed)", "100B (slowly deflationary)"],
                  ["Correlation to S&P 500", "Increasing", "Moderate"],
                  ["Narrative Strength", "Digital gold", "Global payments"],
                  ["Bear Market Drawdown", "50-75%", "70-90%"],
                  ["Bull Market Upside", "3-10x", "5-50x (historically)"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="upside" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Upside Potential: The Math</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP&apos;s smaller market cap means each dollar of new investment has more impact on price. Here&apos;s what different returns require:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Return", "BTC Price Required", "BTC Market Cap", "XRP Price Required", "XRP Market Cap"]}
                rows={[
                  ["2x", "~$200K", "~$2-3T", "~$4", "~$228B"],
                  ["5x", "~$500K", "~$5-7.5T", "~$10", "~$570B"],
                  ["10x", "~$1M", "~$10-15T", "~$20", "~$1.14T"],
                  ["20x", "~$2M", "~$20-30T", "~$40", "~$2.28T"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary text-sm">XRP 5x ($10) requires a market cap comparable to Ethereum. BTC 5x ($500K) requires a market cap larger than any asset in history except possibly gold. XRP has a mathematically easier path to multiples.</p>
          </RevealSection>

          <RevealSection id="risk" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk Comparison</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Bitcoin: Lower Risk", desc: "Longest track record, largest market cap, approved ETFs, recognized by institutions and governments. The 'blue chip' of crypto." },
                { title: "XRP: Higher Risk", desc: "More volatile, dependent on Ripple's execution, smaller market cap, ETF not yet approved. Higher risk = higher potential reward." },
                { title: "Bitcoin: Bear Case", desc: "50-75% drawdowns typical. $100K could drop to $25-50K. Painful but historically recovers." },
                { title: "XRP: Bear Case", desc: "70-90% drawdowns typical. $2 could drop to $0.20-0.60. More severe but also recovers more dramatically in bull markets." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="allocation" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Portfolio Allocation Strategies</h2>
            <div className="mt-6">
              <DataTable
                headers={["Strategy", "Bitcoin %", "XRP %", "Best For"]}
                rows={[
                  ["Conservative", "80-90%", "10-20%", "Risk-averse, long-term holders"],
                  ["Balanced", "60-70%", "30-40%", "Moderate risk tolerance"],
                  ["Aggressive", "40-50%", "50-60%", "High conviction in XRP thesis"],
                  ["XRP Maximalist", "10-20%", "80-90%", "Maximum XRP conviction (highest risk)"],
                ]}
                highlightCol={3}
              />
            </div>
            <div className="mt-4">
              <HighlightBox title="Not Financial Advice" variant="warning">
                <p>These are illustrative allocation frameworks, not recommendations. Your allocation should reflect your personal risk tolerance, investment timeline, financial situation, and conviction. Consult a financial advisor. Never invest more than you can afford to lose.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="history" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Historical Performance</h2>
            <div className="mt-4">
              <HighlightBox title="XRP's Altseason Behavior" variant="accent">
                <p>Historically, XRP has <Link href="/learn/xrp-altseason-guide" className="text-xrp-accent underline decoration-xrp-accent/30">outperformed Bitcoin</Link> during specific bull market phases — particularly late in crypto cycles when altcoins rotate. In Q4 2017, XRP gained 1,200%+ while Bitcoin gained ~200%. In late 2024, XRP rallied 300%+ post-election. However, over full market cycles (peak to peak), Bitcoin has generally been the safer hold.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin", desc: "Technology comparison" },
              { href: "/learn/is-xrp-a-good-investment", label: "Good Investment?", desc: "Full analysis" },
              { href: "/learn/can-xrp-reach-10", label: "Can XRP Reach $10?", desc: "Price target math" },
              { href: "/learn/xrp-long-term-potential", label: "Long-Term Potential", desc: "5-year outlook" },
              { href: "/learn/how-much-xrp-to-be-a-millionaire", label: "XRP Millionaire?", desc: "Calculate your number" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Get started" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Ready to Decide?" description="Explore more investment analysis and price targets." primaryHref="/learn/is-xrp-a-good-investment" primaryLabel="Is XRP a Good Investment? →" secondaryHref="/learn/can-xrp-reach-10" secondaryLabel="Can XRP Reach $10?" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Not financial advice. Past performance does not predict future results.</em></p>
      </div>
    </>
  );
}
