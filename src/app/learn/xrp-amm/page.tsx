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
  title: "XRP AMM: Automated Market Maker on the XRPL | AllAboutXRP",
  description:
    "Learn about the native Automated Market Maker (AMM) on the XRP Ledger. How it works, how to provide liquidity, earn fees, and how it compares to Uniswap.",
  keywords: ["XRP AMM", "XRPL AMM", "XRP automated market maker", "XRP liquidity pool", "XRP DeFi AMM", "provide liquidity XRP"],
  openGraph: {
    title: "XRP AMM: Native Automated Market Maker Explained",
    description: "The XRPL has a built-in AMM at the protocol level — no smart contracts needed. Here's how it works.",
    url: "https://allaboutxrp.com/learn/xrp-amm",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRPL AMM: Built-in Liquidity", description: "Native AMM on the XRP Ledger explained." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-amm" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP AMM: Automated Market Maker on the XRPL", description: "Guide to the native AMM on the XRP Ledger — how it works, liquidity provision, fees, and comparison to Ethereum AMMs.", url: "https://allaboutxrp.com/learn/xrp-amm", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP AMM" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-amm" }),
  buildFAQSchema([
    { question: "What is the XRP AMM?", answer: "The XRP AMM (Automated Market Maker) is a native feature of the XRP Ledger that enables decentralized token trading through liquidity pools. Unlike Ethereum where AMMs like Uniswap are smart contracts, the XRPL AMM is built directly into the protocol, making it faster, cheaper, and more secure." },
    { question: "How do I provide liquidity on the XRPL AMM?", answer: "You can provide liquidity by depositing equal value of two tokens into an AMM pool using a compatible XRPL wallet (like Xaman). You'll receive LP tokens representing your share. As trades occur, you earn a portion of the trading fees. You can withdraw your liquidity at any time." },
    { question: "What fees do AMM liquidity providers earn on XRP?", answer: "The trading fee for XRPL AMM pools is set by the pool creator and can be voted on by liquidity providers. Typical fees range from 0.1% to 1% of each trade. These fees are distributed proportionally to all liquidity providers based on their pool share." },
    { question: "Is the XRPL AMM safe?", answer: "The XRPL AMM is built into the protocol itself, not a smart contract. This eliminates smart contract risks like bugs and exploits that have drained billions from Ethereum DeFi. However, impermanent loss still applies — the risk that your deposited tokens change in relative value." },
    { question: "How does the XRPL AMM compare to Uniswap?", answer: "The XRPL AMM is native protocol vs Uniswap's smart contracts. XRPL AMM has lower fees (near-zero gas), faster execution (3-5 sec), no smart contract risk, and integrates with the XRPL's built-in DEX orderbook. Uniswap has more liquidity, more trading pairs, and a larger DeFi ecosystem." },
  ]),
];

const faqItems = [
  { q: "What is the XRP AMM?", a: "A native automated market maker built into the XRP Ledger protocol. It enables decentralized trading through liquidity pools without smart contracts." },
  { q: "How do I provide liquidity?", a: "Deposit equal value of two tokens into a pool via a compatible wallet (Xaman). You receive LP tokens and earn trading fees proportionally." },
  { q: "What fees do LPs earn?", a: "Trading fees (typically 0.1-1% per trade) are distributed to liquidity providers based on pool share. Fee rates are set by creators and votable by LPs." },
  { q: "Is it safe?", a: "Being protocol-native eliminates smart contract risk. But impermanent loss still applies — the risk of deposited tokens changing in relative value." },
  { q: "How does it compare to Uniswap?", a: "Native protocol (safer), lower gas, faster execution. But Uniswap has more liquidity, pairs, and a larger ecosystem." },
];

export default function XRPAMMPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP AMM" titleAccent="Native Automated Market Maker" subtitle="The XRP Ledger has a built-in AMM — not a smart contract, but a native protocol feature. Provide liquidity, earn fees, and trade tokens without the risks and costs of Ethereum-based AMMs." breadcrumbLabel="XRP AMM">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> has a <strong className="text-text-primary">native Automated Market Maker (AMM)</strong> built directly into the protocol. This means decentralized token trading through liquidity pools happens at the <strong className="text-text-primary">protocol level</strong> — no smart contracts, no gas wars, no exploit risk. Liquidity providers deposit token pairs and earn trading fees. The XRPL AMM integrates with the ledger&apos;s built-in <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">DEX orderbook</Link>, creating a <strong className="text-text-primary">hybrid DEX+AMM system</strong> unique to the XRPL.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Type", value: "Native protocol AMM" },
          { label: "Activated", value: "March 2024 (XLS-30)" },
          { label: "Trading Fee", value: "0.1-1% (configurable)" },
          { label: "Gas Cost", value: "Near-zero (standard XRPL fee)" },
          { label: "Speed", value: "3-5 seconds" },
          { label: "Smart Contract Risk", value: "None (native)" },
          { label: "DEX Integration", value: "Hybrid orderbook + AMM" },
          { label: "LP Token", value: "Native XRPL token" },
        ]} />

        <SectionNav items={[
          { id: "how-it-works", label: "How It Works" },
          { id: "provide-liquidity", label: "Providing Liquidity" },
          { id: "hybrid-dex", label: "Hybrid DEX+AMM" },
          { id: "comparison", label: "vs Uniswap" },
          { id: "risks", label: "Risks" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Type" value="Native" delay={0} />
          <StatPill label="Speed" value="3-5 sec" delay={0.06} />
          <StatPill label="Gas" value="~$0" delay={0.12} />
          <StatPill label="Risk" value="No contracts" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How the XRPL AMM Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              An Automated Market Maker replaces traditional orderbooks with <strong className="text-text-primary">liquidity pools</strong>. Instead of matching buyers with sellers, prices are determined by a mathematical formula based on the ratio of tokens in a pool. The XRPL AMM uses a <strong className="text-text-primary">constant product formula</strong> (x × y = k), similar to Uniswap.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Token Pairs", desc: "Each AMM pool holds two tokens. Anyone can create a pool for any XRPL-issued token pair." },
                { title: "Price Discovery", desc: "Prices adjust automatically as trades change the ratio of tokens in the pool. More demand = higher price." },
                { title: "LP Tokens", desc: "Liquidity providers receive LP tokens representing their pool share. These can be redeemed for underlying tokens + fees." },
                { title: "Fee Distribution", desc: "Trading fees are added to the pool, increasing LP token value. Earn passively by holding LP tokens." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="provide-liquidity" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Provide Liquidity</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "1. Choose a token pair", desc: "Select two tokens you want to provide liquidity for (e.g., XRP/RLUSD or XRP/USD). You need equal value of both." },
                { title: "2. Deposit via wallet", desc: "Use a compatible XRPL wallet (Xaman, Crossmark) to deposit your tokens into the AMM pool." },
                { title: "3. Receive LP tokens", desc: "You'll receive LP tokens proportional to your share of the pool. These represent your claim on pool assets + fees." },
                { title: "4. Earn trading fees", desc: "Every trade in your pool generates fees distributed to all LPs. Your LP tokens increase in value over time." },
                { title: "5. Withdraw anytime", desc: "Redeem your LP tokens for your share of the pool's tokens plus accumulated fees. No lockup period." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="hybrid-dex" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Hybrid DEX + AMM: The XRPL Advantage</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL is unique in having <strong className="text-text-primary">both a traditional orderbook DEX and an AMM</strong> built into the same protocol. When you place a trade on the XRPL, the system automatically routes through whichever offers the best price — the orderbook, the AMM, or a combination of both.
            </p>

            <div className="mt-6">
              <HighlightBox title="Why This Matters" variant="accent">
                <p>Orderbooks are great for large trades with precise pricing. AMMs are great for always-available liquidity. The XRPL gives you <strong className="text-text-primary">the best of both worlds</strong> — automatic best-price routing between orderbook and AMM. No other major blockchain has this hybrid system at the protocol level.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL AMM vs Uniswap</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRPL AMM", "Uniswap (Ethereum)"]}
                rows={[
                  ["Implementation", "Native protocol", "Smart contract"],
                  ["Gas cost", "Near-zero", "$5-50+ per trade"],
                  ["Speed", "3-5 seconds", "12-15+ seconds"],
                  ["Smart contract risk", "None", "Yes (exploit history)"],
                  ["Orderbook integration", "Yes (hybrid)", "No (AMM only)"],
                  ["Liquidity", "Growing", "Deep ($3B+ TVL)"],
                  ["Trading pairs", "Any XRPL tokens", "Any ERC-20 tokens"],
                  ["Governance", "LP fee voting", "UNI token governance"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="risks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risks of XRPL AMM Participation</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "Impermanent loss", desc: "If the price ratio of your deposited tokens changes significantly, you may have less value than if you'd simply held the tokens. This is inherent to all AMMs." },
                { title: "Low liquidity pools", desc: "Some pools may have low liquidity, leading to high slippage on trades and less fee income for LPs." },
                { title: "Token risk", desc: "The non-XRP token in a pool could lose value or become worthless. Always research tokens before providing liquidity." },
              ]} variant="warn" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "Full DeFi ecosystem guide" },
              { href: "/learn/xrp-smart-contracts", label: "XRP Smart Contracts", desc: "Hooks and EVM sidechain" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "Technology deep dive" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Earning yield with XRP" },
              { href: "/learn/rlusd-explained", label: "RLUSD Explained", desc: "Ripple's stablecoin" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Wallets for DeFi" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore XRPL DeFi" description="The AMM is one part of the XRPL's growing DeFi ecosystem. Explore lending, trading, and earning on the XRP Ledger." primaryHref="/learn/xrpl-defi" primaryLabel="XRPL DeFi Guide →" secondaryHref="/learn/xrp-smart-contracts" secondaryLabel="Smart Contracts" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, XLS-30 documentation.</em></p>
      </div>
    </>
  );
}
