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

const slug = "xrp-risks";
const title = "XRP Risks: What Could Go Wrong? Honest Assessment";
const description = "The honest bear case for XRP. Regulatory risk, competition, adoption uncertainty, and every risk you should understand before buying.";
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
    { name: "XRP Risks" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What are the main risks of buying XRP?", answer: "Key risks include price volatility, competition from other payment solutions, Ripple's large XRP holdings, global regulatory uncertainty, adoption speed, and general cryptocurrency market risks." },
    { question: "Can XRP go to zero?", answer: "While extremely unlikely given XRP's institutional adoption and established infrastructure, any cryptocurrency can theoretically go to zero. The risk is very low for XRP but not zero." },
    { question: "Is Ripple's XRP holdings a risk?", answer: "Ripple holds billions of XRP in escrow. While releases are predictable and transparent, large sales could create selling pressure. This is a commonly cited risk, though Ripple has incentives to support XRP's value." },
    { question: "What about competition to XRP?", answer: "XRP faces competition from SWIFT's improvements (GPI), other crypto payment solutions (Stellar, stablecoins), and CBDCs. Any of these could reduce demand for XRP as a bridge currency." },
    { question: "Is XRP too volatile?", answer: "Like all cryptocurrencies, XRP can experience significant price swings. This volatility is a risk for investors and can also make it challenging as a stable payment medium, though the bridge use case handles this." },
  ]),
];

const faqItems = [
  { q: "What are the biggest risks?", a: "The main risks are: (1) Competition from SWIFT, stablecoins, and CBDCs, (2) Ripple's large XRP holdings creating potential sell pressure, (3) Slower-than-expected bank adoption, (4) Global regulatory changes, (5) General crypto market volatility." },
  { q: "Can XRP go to zero?", a: "It's extremely unlikely given the established infrastructure, institutional adoption, and community. But any investment can lose significant value. The XRP Ledger has run for 12+ years, but past performance doesn't guarantee the future." },
  { q: "Is Ripple's XRP stash a problem?", a: "Ripple holds billions of XRP, mostly in escrow with monthly releases. Bears worry about selling pressure. Bulls argue Ripple has every incentive to support XRP's value. The truth is somewhere in between — it's a managed risk." },
  { q: "What if banks don't adopt XRP?", a: "If bank adoption stalls, XRP's core thesis weakens. However, 100+ institutions already use Ripple's network, and regulatory clarity is accelerating new partnerships. Adoption risk exists but is decreasing." },
  { q: "Is crypto itself risky?", a: "Yes. All cryptocurrency carries risk — regulatory changes, security breaches, market crashes, technology failures. Only invest what you can afford to lose. XRP is less risky than many cryptos but still volatile." },
  { q: "How do I manage these risks?", a: "Diversify (don't put everything in XRP), dollar-cost average (buy regularly), secure your holdings (use proper wallets), and stay informed. Set a portfolio allocation you're comfortable with and stick to your plan." },
];

export default function XRPRisksPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Risks:"
          titleAccent="The Honest Truth"
          subtitle="We're bullish on XRP, but we believe in honest information. Here are the real risks you should understand before investing."
          breadcrumbLabel="XRP Risks"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Every investment has risks. XRP&apos;s include <strong className="text-text-primary">competition from SWIFT and stablecoins</strong>, <strong className="text-text-primary">Ripple&apos;s large XRP holdings</strong>, slower-than-expected adoption, global regulatory changes, and general crypto volatility. Understanding these risks doesn&apos;t mean XRP is a bad investment — it means you&apos;re making an <Link href="/learn/xrp-portfolio-allocation" className="text-xrp-accent underline decoration-xrp-accent/30">informed decision</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Risk Level", value: "High (like all crypto)" },
          { label: "Key Risks", value: "Competition, supply, adoption speed" },
          { label: "Mitigating Factors", value: "Regulatory clarity, institutional adoption" },
          { label: "Risk Reduction", value: "Diversification, DCA, proper security" },
          { label: "Bottom Line", value: "Only invest what you can afford to lose" },
        ]} />

        <SectionNav items={[
          { id: "competition", label: "Competition" },
          { id: "supply", label: "Supply Risk" },
          { id: "adoption", label: "Adoption" },
          { id: "market", label: "Market" },
          { id: "manage", label: "Managing Risk" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="competition">
            <h2 className="text-2xl font-bold text-text-primary">Risk 1: Competition</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP isn&apos;t the only solution for cross-border payments. It faces competition from multiple directions:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "SWIFT GPI", desc: "SWIFT isn't standing still — its GPI system improves tracking and speed. Banks may upgrade SWIFT rather than switch to XRP." },
                { title: "Stablecoins", desc: "USDT, USDC, and other stablecoins can also facilitate cross-border transfers without XRP's volatility." },
                { title: "CBDCs", desc: "Central bank digital currencies could reduce the need for bridge currencies if countries build direct connections." },
                { title: "Other Crypto", desc: "Stellar (XLM), among others, targets the same cross-border payment space as XRP." },
              ]} variant="check" />
            </div>
            <div className="mt-5">
              <HighlightBox title="The Bull Response" variant="info">
                <p>XRP has a massive head start — 100+ partners, regulatory clarity, and 12+ years of battle-tested infrastructure. SWIFT GPI is an improvement but not a replacement. Stablecoins complement XRP (see RLUSD). And no competitor has XRP&apos;s institutional adoption.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="supply" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk 2: Ripple&apos;s XRP Holdings</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple holds billions of XRP, most locked in escrow with monthly releases. Bears worry that Ripple selling XRP creates downward pressure on the price.
            </p>
            <div className="mt-5">
              <HighlightBox title="The Bull Response" variant="info">
                <p>Escrow releases are predictable and transparent (visible on-chain). Ripple has strong incentives to support XRP&apos;s value since it&apos;s their treasury asset. Unsold escrow is re-locked. Monthly releases are a known quantity priced into the market.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="adoption" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk 3: Adoption Speed</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While 100+ institutions have partnered with Ripple, adoption could be slower than expected. Banks are conservative. Integration takes time. Not every partnership translates to high XRP transaction volume.
            </p>
            <div className="mt-5">
              <HighlightBox title="The Bull Response" variant="info">
                <p>The SEC case held back adoption for 4 years. With clarity achieved, adoption is accelerating rapidly. Major acquisitions (Hidden Road), new products (Ripple Prime, RLUSD), and ETF filings all indicate momentum is building.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="market" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk 4: Market & Volatility</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Crypto market crashes", desc: "XRP tends to fall with the broader crypto market. Bitcoin drops often drag everything down." },
                { title: "Price volatility", desc: "XRP can swing 10-20% in a single day. This is normal for crypto but stressful for new investors." },
                { title: "Regulatory surprise", desc: "Even with US clarity, other countries could introduce restrictive crypto regulations." },
                { title: "Technology risk", desc: "Any blockchain could have undiscovered bugs, though XRPL's 12+ year track record is reassuring." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="manage" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Managing Your Risk</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Only Risk What You Can Lose", desc: "Never invest money you need for rent, food, or emergencies. Crypto is high-risk. Period." },
                { title: "Diversify", desc: "Don't put 100% of your portfolio in XRP. Spread across different assets. See our portfolio allocation guide." },
                { title: "Dollar-Cost Average", desc: "Buy a fixed amount regularly instead of all at once. This reduces the impact of volatility." },
                { title: "Secure Your Holdings", desc: "Use proper wallets, enable 2FA, never share your seed phrase. Security prevents the #1 actual loss of crypto." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-portfolio-allocation", label: "Portfolio Allocation", desc: "How much to hold" },
              { href: "/learn/xrp-dollar-cost-averaging", label: "Dollar Cost Averaging", desc: "Reduce volatility risk" },
              { href: "/learn/xrp-common-mistakes", label: "Common Mistakes", desc: "Avoid these errors" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store Safely", desc: "Secure your XRP" },
              { href: "/learn/xrp-price-potential", label: "Price Potential", desc: "The bull case" },
              { href: "/learn/xrp-exit-strategy", label: "Exit Strategy", desc: "When to take profits" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Informed Investing Is Smart Investing"
          description="Understanding risks doesn't mean avoiding them — it means managing them. Make your decision with full knowledge."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-portfolio-allocation"
          secondaryLabel="Portfolio Guide"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. This is not financial advice. All investments carry risk.</em>
        </p>
      </div>
    </>
  );
}
