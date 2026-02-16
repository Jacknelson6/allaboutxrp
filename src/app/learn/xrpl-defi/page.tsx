import { Metadata } from "next";
import Image from "next/image";
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
  title: "XRPL DeFi & AMM: A Complete Guide",
  description:
    "Learn about DeFi on the XRP Ledger — native AMM, liquidity pools, DEX, trust lines, and projects building on XRPL.",
  keywords: ["XRPL DeFi", "XRP AMM", "XRP Ledger decentralized finance", "XRPL liquidity pools"],
  openGraph: {
    title: "XRPL DeFi & AMM: A Complete Guide | AllAboutXRP",
    description:
      "Everything about decentralized finance on XRPL — the native AMM, liquidity pools, DEX, and DeFi projects.",
    url: "https://allaboutxrp.com/learn/xrpl-defi",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL DeFi & AMM Guide | AllAboutXRP",
    description:
      "DeFi on the XRP Ledger — native AMM, liquidity pools, DEX, and building projects explained.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrpl-defi",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL DeFi & AMM: A Complete Guide",
    description: "A comprehensive guide to decentralized finance on the XRP Ledger, covering the native AMM, liquidity pools, built-in DEX, trust lines, and projects building on XRPL.",
    url: "https://allaboutxrp.com/learn/xrpl-defi",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL DeFi & AMM" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-defi" }),
  buildFAQSchema([
    { question: "What is DeFi on the XRP Ledger?", answer: "DeFi (Decentralized Finance) on the XRPL refers to financial services — trading, lending, liquidity provision — built natively on the XRP Ledger without intermediaries. Unlike Ethereum DeFi, many XRPL DeFi features are built directly into the protocol layer." },
    { question: "How does the XRPL AMM work?", answer: "The XRPL's native Automated Market Maker (AMM), activated via the XLS-30 amendment in 2024, allows users to create liquidity pools for any token pair. It uses a constant product formula and integrates directly with the XRPL's built-in DEX order book for optimal price execution." },
    { question: "What are trust lines on the XRPL?", answer: "Trust lines are a unique XRPL feature that represents a bilateral relationship between two accounts for holding issued tokens. You must explicitly opt in to hold a token by creating a trust line, which prevents spam tokens from being forced into your wallet." },
    { question: "How does XRPL DeFi compare to Ethereum DeFi?", answer: "XRPL DeFi features are built into the protocol layer (native AMM, DEX, escrow), offering lower fees and faster settlement. Ethereum DeFi relies on smart contracts, offering more flexibility but higher gas fees and slower execution. XRPL's TVL is growing but still smaller than Ethereum's." },
    { question: "What projects are building DeFi on XRPL?", answer: "Key XRPL DeFi projects include Orchestra Finance (lending), Magnetic (aggregator), XPMarket (NFT/DeFi), and various AMM liquidity providers. Ripple's RLUSD stablecoin also adds significant DeFi utility to the XRPL ecosystem." },
  ]),
];

const faqItems = [
  { q: "What is DeFi on the XRP Ledger?", a: "DeFi (Decentralized Finance) on the XRPL encompasses financial services — trading, lending, liquidity provision, and more — built on the XRP Ledger without centralized intermediaries. What makes XRPL unique is that many DeFi primitives (DEX, AMM, escrow, token issuance) are built directly into the protocol rather than as smart contracts." },
  { q: "How does the XRPL AMM work?", a: "The XRPL AMM (XLS-30 amendment, activated 2024) lets anyone create liquidity pools for any token pair on the ledger. It uses a constant product formula (similar to Uniswap) but is integrated natively into the XRPL's order book DEX. This means trades can be routed through either the AMM or the order book — whichever offers a better price — automatically." },
  { q: "What are trust lines on the XRPL?", a: "Trust lines are a unique XRPL concept — they represent an explicit opt-in to hold a particular issued token. Before you can receive any non-XRP token, you must create a trust line to the issuer. This prevents spam and gives users full control over what tokens they hold. Each trust line requires a small XRP reserve." },
  { q: "How does XRPL DeFi compare to Ethereum DeFi?", a: "XRPL DeFi is faster (3-5 second finality), cheaper (fractions of a cent per transaction), and more energy efficient. Many features are protocol-native rather than smart contract-based. However, Ethereum's DeFi ecosystem is more mature with higher TVL and more composable smart contract functionality. XRPL is growing rapidly as its DeFi features mature." },
  { q: "What projects are building DeFi on XRPL?", a: "The XRPL DeFi ecosystem includes Orchestra Finance (lending/borrowing), Magnetic (DEX aggregator), XPMarket (NFT/DeFi hub), Sologenic (tokenized assets), and many AMM liquidity providers. Ripple's RLUSD stablecoin adds a key DeFi building block, and the XLS-30 AMM has attracted significant liquidity since launch." },
];

export default function XRPLDeFiPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL DeFi & AMM:"
          titleAccent="A Complete Guide"
          subtitle="The XRP Ledger isn't just for payments anymore. With a native DEX, protocol-level AMM, and growing ecosystem of DeFi projects, XRPL is emerging as a serious decentralized finance platform. Here's everything you need to know."
          breadcrumbLabel="XRPL DeFi & AMM"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/xrpl-defi-hero.jpg"
            alt="XRPL decentralized finance"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> has a <strong className="text-text-primary">built-in DEX</strong> (since 2012), a <strong className="text-text-primary">native AMM</strong> (since 2024), and a growing DeFi ecosystem. Unlike Ethereum, XRPL DeFi features are protocol-native — not smart contracts — meaning lower fees, faster execution, and higher security. With <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link> as a stablecoin anchor, XRPL DeFi is poised for significant growth. Learn about <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> and its <Link href="/learn/xrp-use-cases" className="text-xrp-accent underline decoration-xrp-accent/30">expanding use cases</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "DEX", value: "Built-in since 2012" },
          { label: "AMM", value: "Native (XLS-30, activated 2024)" },
          { label: "Transaction Fee", value: "< $0.01" },
          { label: "Settlement", value: "3-5 seconds" },
          { label: "Stablecoin", value: "RLUSD (Ripple)" },
          { label: "Key Feature", value: "Protocol-native DeFi primitives" },
        ]} />

        <SectionNav items={[
          { id: "what-is-defi", label: "What is DeFi?" },
          { id: "xrpl-dex", label: "XRPL DEX" },
          { id: "amm", label: "Native AMM" },
          { id: "trust-lines", label: "Trust Lines" },
          { id: "vs-ethereum", label: "vs Ethereum" },
          { id: "projects", label: "Projects" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="DEX Age" value="12+ years" delay={0} />
          <StatPill label="AMM Launch" value="2024" delay={0.06} />
          <StatPill label="Tx Fee" value="< $0.01" delay={0.12} />
          <StatPill label="Finality" value="3-5 sec" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* WHAT IS DEFI */}
          <RevealSection id="what-is-defi">
            <h2 className="text-2xl font-bold text-text-primary">What is DeFi on the XRP Ledger?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Decentralized Finance (DeFi)</strong> refers to financial services — trading, lending, borrowing, earning yield — that operate on blockchain technology without centralized intermediaries like banks or brokers. Instead of trusting a company, users interact with transparent, deterministic protocols.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              What makes <strong className="text-text-primary">XRPL DeFi unique</strong> is that many of its core features are built directly into the protocol layer. While Ethereum relies on smart contracts (external code deployed to the blockchain), the XRPL has a native DEX, native AMM, native escrow, and native token issuance — all enforced by the validators that secure the network.
            </p>
            <div className="mt-6">
              <HighlightBox title="Protocol-Native Advantage" variant="accent">
                <p>Protocol-native DeFi means <strong className="text-text-primary">no smart contract risk</strong>. On Ethereum, DeFi exploits from smart contract bugs have cost billions. XRPL&apos;s DeFi features are hardened into the protocol itself, tested by 12+ years of operation with zero downtime.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* XRPL DEX */}
          <RevealSection id="xrpl-dex" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The XRPL Built-in DEX</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger has had a <strong className="text-text-primary">decentralized exchange (DEX)</strong> built into the protocol since its launch in 2012 — making it one of the oldest DEXes in existence. Unlike DEXes on other chains (Uniswap, SushiSwap), the XRPL DEX operates as an <strong className="text-text-primary">order book</strong> directly at the protocol level.
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Order Book Model", desc: "Limit orders, market orders — just like a traditional exchange, but fully decentralized on-chain" },
                { title: "Auto-bridging", desc: "XRP automatically serves as a bridge currency between any two tokens, improving liquidity for all pairs" },
                { title: "Any Token Pair", desc: "Trade any XRPL-issued token against any other, including stablecoins, NFTs, and tokenized assets" },
                { title: "Near-Zero Fees", desc: "Trades settle in 3-5 seconds with transaction fees under $0.01 — orders of magnitude cheaper than Ethereum DEXes" },
              ]} />
            </div>

            <div className="mt-5">
              <GlowCard
                title="Since 2012"
                value="90M+ Ledgers"
                subtitle="The XRPL DEX has operated continuously with zero downtime since launch"
              />
            </div>
          </RevealSection>

          {/* AMM */}
          <RevealSection id="amm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Native AMM: How It Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In 2024, the XRPL activated the <strong className="text-text-primary">XLS-30 amendment</strong>, adding a native Automated Market Maker (AMM) directly into the protocol. This was a major upgrade that brought modern DeFi functionality to the XRPL while maintaining its speed and low-cost advantages.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">How the AMM Works</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The XRPL AMM uses a <strong className="text-text-primary">constant product formula</strong> (similar to Uniswap v2) where the product of two token reserves in a pool stays constant. Users can:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Provide Liquidity", desc: "Deposit equal value of two tokens into a pool and receive LP tokens representing your share. Earn trading fees proportional to your share." },
                { title: "Swap Tokens", desc: "Trade between any two tokens in an AMM pool. The price adjusts automatically based on the constant product formula." },
                { title: "Earn Fees", desc: "Liquidity providers earn a share of the 0.1-1% trading fee on every swap in their pool, configurable at pool creation." },
                { title: "Auction Slots", desc: "A unique XRPL feature — MEV-resistant auction slots give discounted trading fees to the highest bidder, with proceeds going to LPs." },
              ]} variant="zap" />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">AMM + Order Book Integration</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              What truly sets the XRPL AMM apart is its <strong className="text-text-primary">integration with the existing order book DEX</strong>. When a trade is executed, the XRPL payment engine automatically routes it through the AMM, the order book, or both — whichever provides the best price. This hybrid model combines the liquidity depth of order books with the passive liquidity of AMMs.
            </p>
            <div className="mt-6">
              <HighlightBox title="Unique to XRPL" variant="info">
                <p>No other major blockchain has a <strong className="text-text-primary">protocol-native hybrid AMM + order book DEX</strong>. On Ethereum, AMMs and order books are separate smart contracts that don&apos;t natively interoperate. The XRPL&apos;s integrated approach provides better price execution and deeper effective liquidity.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* TRUST LINES */}
          <RevealSection id="trust-lines" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Understanding Trust Lines</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Trust lines</strong> are a fundamental concept unique to the XRPL. A trust line is a bilateral relationship between two accounts that allows one to hold tokens issued by the other. Before you can receive any non-XRP token on the XRPL, you must explicitly create a trust line to the token issuer.
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Spam Protection", desc: "No one can force unwanted tokens into your wallet — you choose what you hold by creating trust lines" },
                { title: "Opt-in Model", desc: "Unlike Ethereum (where anyone can send you any ERC-20 token), XRPL requires your explicit consent" },
                { title: "XRP Reserve", desc: "Each trust line requires a small XRP reserve (currently 2 XRP), which is recoverable when the trust line is removed" },
                { title: "Rippling", desc: "Trust lines enable 'rippling' — the XRPL can route payments through intermediary trust lines for efficient settlement" },
              ]} />
            </div>
          </RevealSection>

          {/* VS ETHEREUM */}
          <RevealSection id="vs-ethereum" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL DeFi vs. Ethereum DeFi</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRPL DeFi", "Ethereum DeFi"]}
                rows={[
                  ["Architecture", "Protocol-native", "Smart contract-based"],
                  ["DEX Type", "Order book + AMM (hybrid)", "AMM-dominant (Uniswap, etc.)"],
                  ["Transaction Fee", "< $0.01", "$0.50-$100+"],
                  ["Finality", "3-5 seconds", "12-15 seconds (+ confirmation)"],
                  ["Smart Contract Risk", "None (protocol-level)", "Significant (billions lost to exploits)"],
                  ["Composability", "Growing", "Highly composable"],
                  ["TVL", "Growing (~hundreds of millions)", "Dominant (~$50B+)"],
                  ["Ecosystem Maturity", "Emerging", "Mature"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="The Trade-off" variant="info">
                <p>Ethereum DeFi offers more flexibility through general-purpose smart contracts and a larger ecosystem. XRPL DeFi offers <strong className="text-text-primary">superior speed, lower costs, and no smart contract risk</strong>. As XRPL adds <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">more protocol features</Link> and attracts more projects, the gap in ecosystem maturity is narrowing.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* PROJECTS */}
          <RevealSection id="projects" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Projects Building DeFi on XRPL</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL DeFi ecosystem is growing rapidly. Key projects include:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Project", "Category", "Description"]}
                rows={[
                  ["RLUSD (Ripple)", "Stablecoin", "USD-backed stablecoin providing DeFi liquidity anchor"],
                  ["Orchestra Finance", "Lending/Borrowing", "Decentralized lending protocol on XRPL"],
                  ["Magnetic", "DEX Aggregator", "Routes trades across AMM pools for best execution"],
                  ["XPMarket", "NFT + DeFi", "NFT marketplace with DeFi integrations"],
                  ["Sologenic", "Tokenized Assets", "Trade tokenized stocks and crypto on XRPL"],
                  ["Xaman (XUMM)", "Wallet", "Primary XRPL wallet with DeFi integrations"],
                  ["First Ledger", "Analytics", "XRPL DEX/AMM analytics and tracking"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple&apos;s <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD stablecoin</Link> is particularly important for XRPL DeFi — stablecoins serve as the backbone of DeFi ecosystems, providing a stable unit of account for trading, lending, and liquidity pools. With RLUSD&apos;s market cap surpassing $1.26 billion, XRPL DeFi has a solid foundation for growth.
            </p>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* SOURCES */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://xrpl.org/docs/concepts/tokens/decentralized-exchange" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL.org — Decentralized Exchange Documentation</a></li>
              <li>• <a href="https://xrpl.org/docs/concepts/tokens/decentralized-exchange/automated-market-makers" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL.org — AMM Documentation</a></li>
              <li>• <a href="https://ripple.com/insights/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Insights — RLUSD & DeFi</a></li>
              <li>• <a href="https://www.coindesk.com/tech/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">CoinDesk — Technical Coverage</a></li>
              <li>• <a href="https://xrpl.org/docs/concepts/tokens/trust-lines-and-issuing" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL.org — Trust Lines Documentation</a></li>
            </ul>
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "XRP fundamentals" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How the XRPL works" },
              { href: "/learn/rlusd", label: "RLUSD Stablecoin", desc: "Ripple's USD stablecoin" },
              { href: "/learn/xrp-use-cases", label: "XRP Use Cases", desc: "Beyond payments" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Earn yield on XRP" },
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Supply & distribution" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore XRPL DeFi"
          description="Ready to dive into the XRPL DeFi ecosystem? Start by setting up a wallet and exploring the native DEX."
          primaryHref="/learn/get-started"
          primaryLabel="Get Started with XRP →"
          secondaryHref="/learn/xrp-wallets"
          secondaryLabel="Best XRP Wallets"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Ripple Insights, CoinDesk, DeFi Llama.</em>
        </p>
      </div>
    </>
  );
}
