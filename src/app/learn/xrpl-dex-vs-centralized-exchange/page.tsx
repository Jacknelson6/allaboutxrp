import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRPL DEX vs Centralized Exchanges: Trading Compared",
  description: "XRPL's built-in DEX vs centralized exchanges. Compare fees, custody, speed, and when to use each for XRP trading.",
  keywords: ["XRPL DEX vs CEX", "decentralized exchange XRP", "XRPL DEX advantages"],
  openGraph: {
    title: "XRPL DEX vs Centralized Exchanges | AllAboutXRP",
    description: "XRPL's built-in DEX vs centralized exchanges — compare fees, custody, speed, and when to use each.",
    url: "https://allaboutxrp.com/learn/xrpl-dex-vs-centralized-exchange",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL DEX vs CEX | AllAboutXRP",
    description: "DEX vs centralized exchange for XRP trading — which is right for you?",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-dex-vs-centralized-exchange" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL DEX vs Centralized Exchanges: Trading Compared",
    description: "Comprehensive comparison of the XRPL built-in DEX and centralized exchanges for XRP trading. Covers fees, custody, speed, liquidity, and use cases.",
    url: "https://allaboutxrp.com/learn/xrpl-dex-vs-centralized-exchange",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL DEX vs Centralized Exchange" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-dex-vs-centralized-exchange" }),
  buildFAQSchema([
    { question: "What is the XRPL DEX?", answer: "The XRPL DEX is a decentralized exchange built directly into the XRP Ledger protocol since 2012. It features an on-chain order book and native AMM, allowing peer-to-peer trading of any XRPL-issued token without intermediaries." },
    { question: "Is the XRPL DEX cheaper than centralized exchanges?", answer: "Yes, XRPL DEX transaction fees are fractions of a cent per trade. Centralized exchanges typically charge 0.1-0.5% per trade. However, the XRPL DEX may have lower liquidity on some pairs, which can result in higher slippage for large trades." },
    { question: "Do I need KYC to use the XRPL DEX?", answer: "No. The XRPL DEX is permissionless — anyone with an XRPL wallet can trade without identity verification. Centralized exchanges require KYC (Know Your Customer) documentation for most features." },
    { question: "What are the disadvantages of the XRPL DEX?", answer: "Lower liquidity than major CEXes on some pairs, no fiat on/off ramp (you need XRP already), smaller selection of trading pairs, and a steeper learning curve for beginners compared to CEX interfaces." },
    { question: "Can I trade any token on the XRPL DEX?", answer: "You can trade any token issued on the XRPL. This includes stablecoins (RLUSD), wrapped assets, project tokens, and more. However, tokens from other blockchains must be bridged or wrapped to trade on the XRPL DEX." },
  ]),
];

const faqItems = [
  { q: "What is the XRPL DEX?", a: "A decentralized exchange built into the XRP Ledger protocol since 2012. Features an on-chain order book and native AMM for peer-to-peer trading of any XRPL token — no intermediaries needed." },
  { q: "Is the XRPL DEX cheaper?", a: "Yes — transaction fees are fractions of a cent. CEXes charge 0.1-0.5% per trade. However, lower liquidity on some XRPL DEX pairs may mean higher slippage for large orders." },
  { q: "Do I need KYC for the XRPL DEX?", a: "No. The XRPL DEX is permissionless — anyone with an XRPL wallet can trade. CEXes require KYC documentation." },
  { q: "What are the downsides of the XRPL DEX?", a: "Lower liquidity on some pairs, no fiat on/off ramp, fewer trading pairs than major CEXes, and steeper learning curve for beginners." },
  { q: "Can I trade any token?", a: "Any token issued on the XRPL — stablecoins, project tokens, wrapped assets. Tokens from other chains need to be bridged first." },
  { q: "Which should I use?", a: "Use CEXes for fiat purchases, high-liquidity trading, and convenience. Use the XRPL DEX for self-custodial trading, privacy, and accessing XRPL-native tokens." },
];

export default function XRPLDEXvsCEXPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL DEX vs Centralized Exchanges:"
          titleAccent="Trading Compared"
          subtitle="The XRP Ledger has its own built-in exchange. Here's how it compares to Coinbase, Binance, and other centralized platforms."
          breadcrumbLabel="XRPL DEX vs Centralized Exchange"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DEX</Link> offers self-custody trading with near-zero fees and no KYC. Centralized exchanges offer higher liquidity, fiat on-ramps, and easier UX. Use both: CEX for buying with fiat, DEX for self-custodial trading of XRPL tokens. The XRPL&apos;s hybrid <Link href="/learn/xrpl-amm-liquidity-pools" className="text-xrp-accent underline decoration-xrp-accent/30">AMM + order book</Link> model is unique in crypto.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "XRPL DEX Age", value: "Since 2012" },
          { label: "DEX Fees", value: "< $0.01 per trade" },
          { label: "CEX Fees", value: "0.1-0.5% per trade" },
          { label: "DEX KYC", value: "None required" },
          { label: "DEX Custody", value: "Self-custody (your keys)" },
          { label: "Unique Feature", value: "Order book + AMM hybrid" },
        ]} />

        <SectionNav items={[
          { id: "comparison", label: "Full Comparison" },
          { id: "dex-advantages", label: "DEX Advantages" },
          { id: "cex-advantages", label: "CEX Advantages" },
          { id: "when-to-use", label: "When to Use Each" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="DEX Fee" value="< $0.01" delay={0} />
          <StatPill label="CEX Fee" value="0.1-0.5%" delay={0.06} />
          <StatPill label="DEX KYC" value="None" delay={0.12} />
          <StatPill label="DEX Age" value="12+ yrs" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">Full Feature Comparison</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRPL DEX", "Centralized Exchange"]}
                rows={[
                  ["Custody", "Self-custody (your keys)", "Exchange holds your funds"],
                  ["Trading Fee", "< $0.01 per transaction", "0.1-0.5% per trade"],
                  ["KYC Required", "No", "Yes (government ID)"],
                  ["Fiat On-Ramp", "No (need XRP already)", "Yes (bank, card, etc.)"],
                  ["Settlement", "3-5 seconds (on-chain)", "Instant (internal ledger)"],
                  ["Order Types", "Limit orders + AMM swaps", "Market, limit, stop, etc."],
                  ["Liquidity", "Growing (lower on niche pairs)", "Deep (major pairs)"],
                  ["Downtime Risk", "Zero (protocol runs 24/7)", "Maintenance windows possible"],
                  ["Counterparty Risk", "None", "Exchange hack/bankruptcy"],
                  ["Privacy", "Pseudonymous", "Full identity required"],
                  ["Available Pairs", "Any XRPL-issued token", "Curated selection"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="dex-advantages" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL DEX Advantages</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "True Self-Custody", desc: "Your XRP never leaves your wallet. Trade directly from your own account — no deposit, no withdrawal, no counterparty risk." },
                { title: "Near-Zero Fees", desc: "Pay only the XRPL network fee (fractions of a cent) instead of 0.1-0.5% per trade on CEXes." },
                { title: "No KYC", desc: "Trade permissionlessly without submitting ID documents, selfies, or personal information." },
                { title: "100% Uptime", desc: "The XRPL DEX has never gone offline since launch in 2012 — no maintenance windows, no outages." },
                { title: "Hybrid AMM + Order Book", desc: "Uniquely combines passive AMM liquidity with active order book trading for optimal price execution." },
                { title: "Censorship Resistant", desc: "No entity can block your trades, freeze your funds, or restrict your access to the DEX." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="cex-advantages" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Centralized Exchange Advantages</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Fiat On/Off Ramp", desc: "Buy XRP with bank transfer, credit card, or Apple Pay. Convert back to fiat for withdrawal." },
                { title: "Deep Liquidity", desc: "Major pairs have billions in daily volume — minimal slippage even for large orders." },
                { title: "Easier UX", desc: "Familiar trading interface, mobile apps, customer support, and guided onboarding for beginners." },
                { title: "Advanced Order Types", desc: "Stop-loss, trailing stop, OCO, and other advanced order types not available on the XRPL DEX." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="when-to-use" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">When to Use Each</h2>
            <div className="mt-6">
              <DataTable
                headers={["Use Case", "Best Option", "Why"]}
                rows={[
                  ["First XRP purchase", "CEX", "Fiat on-ramp needed"],
                  ["Large volume trading", "CEX", "Better liquidity"],
                  ["XRPL token trading", "DEX", "Only available on DEX"],
                  ["Privacy-focused trading", "DEX", "No KYC required"],
                  ["Long-term holding", "DEX wallet", "Self-custody security"],
                  ["Frequent small trades", "DEX", "Lower fees"],
                  ["Fiat withdrawal", "CEX", "Only CEX offers this"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Pro Strategy" variant="accent">
                <p>Use a centralized exchange to buy XRP with fiat, then withdraw to a <Link href="/learn/xrp-self-custody-guide" className="text-xrp-accent underline decoration-xrp-accent/30">self-custody wallet</Link> and trade on the XRPL DEX. Best of both worlds — fiat access + self-custody trading.</p>
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
              { href: "/learn/xrpl-amm-liquidity-pools", label: "XRPL AMM Pools", desc: "Earn fees as LP" },
              { href: "/learn/xrp-self-custody-guide", label: "Self-Custody Guide", desc: "Be your own bank" },
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "Full DeFi ecosystem" },
              { href: "/learn/xrpl-transaction-fees", label: "Transaction Fees", desc: "How XRPL fees work" },
              { href: "/learn/how-to-use-xrpl-dex", label: "How to Use XRPL DEX", desc: "Step-by-step guide" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Wallet comparison" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Try the XRPL DEX"
          description="Experience decentralized trading with near-zero fees. Start with a wallet and explore the built-in exchange."
          primaryHref="/learn/xrp-wallets"
          primaryLabel="Get a Wallet →"
          secondaryHref="/learn/how-to-use-xrpl-dex"
          secondaryLabel="DEX Trading Guide"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org DEX documentation.</em>
        </p>
      </div>
    </>
  );
}
