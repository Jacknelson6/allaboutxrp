import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import { LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid } from "@/components/learn/LearnPageShell";

export const metadata: Metadata = {
  title: "How Does RLUSD Help XRP? | Ripple Stablecoin",
  description:
    "Learn how RLUSD, Ripple's NYDFS-approved stablecoin, helps XRP through AMM liquidity, transaction fee burns, DEX activity, and cross-border payment demand.",
  openGraph: {
    title: "How Does RLUSD Help XRP? | AllAboutXRP",
    description:
      "Discover how Ripple's RLUSD stablecoin drives XRP demand through liquidity pools, fee burns, DEX activity, and institutional adoption on the XRPL.",
    url: "https://allaboutxrp.com/learn/rlusd",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does RLUSD Help XRP? | AllAboutXRP",
    description:
      "RLUSD explained: how Ripple's stablecoin boosts XRP through AMM liquidity, fee burns, and cross-border payments.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/rlusd",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "How Does RLUSD Help XRP? Ripple's Stablecoin Explained",
    description: "A comprehensive guide explaining what RLUSD is, how it works on the XRP Ledger, and the specific mechanisms through which it benefits XRP holders and the XRPL ecosystem.",
    url: "https://allaboutxrp.com/learn/rlusd",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "RLUSD & XRP" },
  ]),
  buildFAQSchema([
    { question: "What is RLUSD?", answer: "RLUSD is Ripple's USD-pegged stablecoin, approved by the New York Department of Financial Services (NYDFS) in December 2024. It's backed 1:1 by U.S. dollar deposits, short-term U.S. government treasuries, and cash equivalents, with monthly third-party reserve attestations." },
    { question: "How does RLUSD help XRP?", answer: "RLUSD helps XRP through multiple mechanisms: every RLUSD transaction on the XRPL burns a small amount of XRP as a fee (reducing supply), RLUSD/XRP AMM liquidity pools increase XRP trading volume, auto-bridging routes trades through XRP for optimal pricing, and growing RLUSD adoption drives overall XRPL network activity." },
    { question: "What blockchain does RLUSD run on?", answer: "RLUSD operates on both the XRP Ledger (XRPL) and Ethereum. However, Ripple has indicated that RLUSD volumes could increasingly shift to the XRPL as institutional DeFi adoption grows, which would further benefit XRP." },
    { question: "Is RLUSD regulated?", answer: "Yes. RLUSD received final approval from the New York Department of Financial Services (NYDFS) on December 10, 2024, under its limited purpose trust company charter. Ripple publishes monthly third-party attestations of reserves and is pursuing additional banking licenses." },
    { question: "How does RLUSD compare to USDT and USDC?", answer: "RLUSD targets institutional settlements and tokenization, while USDT dominates trading volume and USDC leads in regulated U.S. DeFi. RLUSD's key advantages include NYDFS regulatory approval, native XRPL integration with auto-bridging through XRP, and partnerships with institutions like Franklin Templeton and DBS Bank." },
    { question: "Does RLUSD burn XRP?", answer: "Yes, indirectly. Every transaction on the XRP Ledger — including RLUSD transfers, DEX trades, and AMM operations — requires a small XRP fee that is permanently burned. As RLUSD activity on the XRPL grows, more XRP gets destroyed, making XRP slightly more scarce over time." },
    { question: "What is RLUSD's market cap?", answer: "As of February 2026, RLUSD's market cap is approximately $1.5 billion, having grown rapidly from its December 2024 launch. This growth reflects strong institutional adoption through partnerships with major financial institutions." },
    { question: "Can I earn yield with RLUSD and XRP?", answer: "Yes. The XRPL's native AMM feature allows users to provide liquidity to RLUSD/XRP pools and earn trading fees. As RLUSD adoption grows, these pools may see increasing volume and yield opportunities for liquidity providers." },
  ]),
];

export default function RLUSDPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How Does RLUSD Help"
          titleAccent="XRP?"
          subtitle="RLUSD is Ripple's NYDFS-approved USD stablecoin built on the XRP Ledger. Every RLUSD transaction burns XRP, fuels AMM liquidity pools, and drives demand for XRP as a bridge currency — creating a powerful flywheel between Ripple's stablecoin and XRP."
          breadcrumbLabel="RLUSD & XRP"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-10" />
          </div>
        </LearnHero>

        <SectionNav items={[
          { id: "what-is-rlusd", label: "What is RLUSD?" },
          { id: "how-it-works", label: "How It Works" },
          { id: "xrp-benefits", label: "How RLUSD Helps XRP" },
          { id: "auto-bridging", label: "Auto-Bridging" },
          { id: "amm-liquidity", label: "AMM & Liquidity" },
          { id: "vs-stablecoins", label: "vs USDT & USDC" },
          { id: "adoption", label: "Adoption & Growth" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-6"><Disclaimer /></div>

        {/* Key Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Market Cap" value="~$1.5B" delay={0} />
          <StatPill label="NYDFS Approved" value="Dec 2024" delay={0.06} />
          <StatPill label="Blockchains" value="XRPL + ETH" delay={0.12} />
          <StatPill label="Peg" value="1:1 USD" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />

        <article className="prose-editorial cv-auto mt-14 space-y-12">
          {/* ─── Section 1: What is RLUSD? ─── */}
          <section id="what-is-rlusd">
            <h2 className="text-2xl font-bold text-text-primary">What is RLUSD?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong>RLUSD</strong> (Ripple USD) is a <strong>stablecoin</strong> pegged 1:1 to the U.S. dollar, issued by Ripple Labs. It launched globally on December 17, 2024, after receiving final approval from the <strong>New York Department of Financial Services (NYDFS)</strong> on December 10, 2024 — making it one of the most rigorously regulated stablecoins in the market. If you&apos;re wondering how RLUSD helps XRP, the answer starts with understanding what makes this stablecoin different.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every RLUSD token is backed by U.S. dollar deposits, short-term U.S. government treasuries, and cash equivalents. Ripple publishes <strong>monthly third-party attestations</strong> of its reserves, providing a level of transparency that exceeds many competitors. This institutional-grade compliance is central to <Link href="/learn/what-is-ripple" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">Ripple&apos;s</Link> strategy of positioning RLUSD as the stablecoin of choice for banks, payment providers, and enterprises.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RLUSD operates natively on two blockchains: the <strong>XRP Ledger (XRPL)</strong> and <strong>Ethereum</strong>. While a significant portion of RLUSD supply currently exists on Ethereum, Ripple has indicated that volumes are expected to increasingly shift to the XRPL as institutional DeFi infrastructure matures — a migration that would substantially amplify the benefits to XRP.
            </p>
          </section>

          {/* ─── Section 2: How RLUSD Works on the XRPL ─── */}
          <section id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How RLUSD Works on the XRP Ledger</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              On the XRPL, RLUSD is issued as a <strong>trust line token</strong> — the same native token standard that the ledger has supported since 2012. This means RLUSD benefits from every built-in feature of the XRP Ledger: the decentralized exchange (DEX), automated market maker (AMM), escrow, and payment channels — all without requiring smart contracts or layer-2 solutions.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When someone sends, trades, or interacts with RLUSD on the XRPL, the transaction is processed by the same <strong>consensus protocol</strong> that handles <Link href="/learn/what-is-xrp" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">XRP transactions</Link> — settling in 3-5 seconds with near-zero fees. Critically, every RLUSD transaction on the XRPL requires a <strong>small XRP fee</strong> that is permanently burned, directly linking RLUSD activity to XRP&apos;s deflationary tokenomics.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">RLUSD Transaction Flow on XRPL</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-text-secondary leading-relaxed">
              <li><strong>Minting:</strong> Ripple issues RLUSD against verified USD reserves held at regulated custodians</li>
              <li><strong>Distribution:</strong> RLUSD is distributed to exchange partners (Uphold, Bitstamp, MoonPay, Archax, etc.) and institutional clients</li>
              <li><strong>On-Ledger Activity:</strong> Users transfer, trade on the DEX, provide AMM liquidity, or use RLUSD in cross-border settlements — each action consuming XRP fees</li>
              <li><strong>Redemption:</strong> RLUSD can be redeemed 1:1 for USD through authorized channels, maintaining the peg</li>
            </ol>
          </section>

          {/* ─── Section 3: How RLUSD Helps XRP ─── */}
          <section id="xrp-benefits">
            <h2 className="text-2xl font-bold text-text-primary">How RLUSD Helps XRP: The Core Mechanisms</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The relationship between RLUSD and XRP is <strong>symbiotic by design</strong>. Ripple built RLUSD to complement XRP, not compete with it. Here are the specific mechanisms through which RLUSD directly benefits XRP:
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">1. Transaction Fee Burns (Deflationary Pressure)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Every transaction on the XRP Ledger — whether it&apos;s an XRP transfer, RLUSD payment, DEX trade, or AMM operation — burns a small amount of XRP as a network fee (typically 0.00001 XRP). These fees are <strong>permanently destroyed</strong>, never recycled. As RLUSD transaction volume grows on the XRPL, more XRP gets burned, gradually reducing the total supply and creating deflationary pressure on XRP&apos;s price.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">2. XRP Reserve Requirements</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              To hold RLUSD on the XRPL, every account must maintain a <strong>base reserve</strong> of XRP (currently 1 XRP per account) plus an <strong>owner reserve</strong> for each trust line (0.2 XRP per RLUSD trust line). As millions of users and institutions create RLUSD trust lines, a growing amount of XRP is effectively locked in reserve — reducing circulating supply and increasing demand.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">3. DEX Trading Volume</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The XRPL&apos;s built-in decentralized exchange enables direct trading of RLUSD against XRP and other assets. Every RLUSD/XRP trade on the DEX represents buying or selling pressure for XRP, increasing its trading volume and market depth. More liquidity attracts more traders, creating a virtuous cycle of activity.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">4. Cross-Border Payment Demand</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Ripple&apos;s payment products increasingly integrate RLUSD alongside XRP. In cross-border flows, RLUSD can serve as the USD-denominated settlement layer while XRP functions as the <strong>bridge currency</strong> for non-USD corridors. This dual-asset strategy means RLUSD growth directly translates to more XRP usage in payment routing. Ripple has processed over <strong>$90 billion in payments</strong> through its network, and RLUSD integration accelerates this flywheel.
            </p>
          </section>

          {/* ─── Section 4: Auto-Bridging ─── */}
          <section id="auto-bridging">
            <h2 className="text-2xl font-bold text-text-primary">Auto-Bridging: XRP as the Invisible Highway</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              One of the XRPL&apos;s most powerful features is <strong>auto-bridging</strong> — an automatic mechanism where the DEX routes trades through XRP when it results in a better exchange rate. For example, if someone wants to trade RLUSD for Japanese Yen (JPY) on the XRPL, the DEX might automatically convert RLUSD → XRP → JPY if that route offers better pricing than a direct RLUSD/JPY order book.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Auto-bridging positions XRP as <strong>&quot;market-structure plumbing&quot;</strong> — the default intermediary for all asset pairs on the XRPL. As RLUSD becomes a major stablecoin on the ledger, more and more trades route through XRP, increasing its velocity and utility without users even realizing they&apos;re using XRP. This creates organic, sustained demand for XRP that scales directly with RLUSD adoption.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Market makers facilitating these auto-bridged trades must hold <strong>XRP inventory</strong>, further locking up supply. The more RLUSD trading pairs that exist on the DEX, the more critical XRP becomes as the universal bridging asset — a role analogous to USD in traditional forex markets.
            </p>
          </section>

          {/* ─── Section 5: AMM & Liquidity ─── */}
          <section id="amm-liquidity">
            <h2 className="text-2xl font-bold text-text-primary">AMM Liquidity Pools: RLUSD + XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL&apos;s native <strong>Automated Market Maker (AMM)</strong> enables users to create liquidity pools pairing any two assets — and RLUSD/XRP is one of the most natural pairings. These pools allow decentralized trading without traditional order books, and liquidity providers earn fees from every swap.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RLUSD/XRP AMM pools benefit XRP in several ways:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>XRP Demand:</strong> Providing liquidity requires depositing equal value of both RLUSD and XRP, creating direct buy pressure for XRP</li>
              <li><strong>Fee Burns:</strong> Every AMM swap burns XRP transaction fees on the XRPL</li>
              <li><strong>Price Stability:</strong> Deep RLUSD/XRP pools provide better pricing for large trades, attracting institutional volume</li>
              <li><strong>Yield Generation:</strong> LP fees incentivize long-term XRP holding rather than selling, reducing sell pressure</li>
              <li><strong>Composability:</strong> RLUSD/XRP pools serve as building blocks for more complex DeFi strategies on the XRPL</li>
            </ul>
            <p className="mt-4 text-text-secondary leading-relaxed">
              As institutional DeFi grows on the XRPL — including tokenized real-world assets (RWAs), money market funds, and repo markets — RLUSD/XRP liquidity becomes critical infrastructure. Ripple&apos;s partnerships with <strong>Franklin Templeton</strong>, <strong>DBS Bank</strong>, and <strong>Securitize</strong> point toward a future where billions in tokenized assets settle through RLUSD and XRP.
            </p>
          </section>

          {/* ─── Section 6: vs Other Stablecoins ─── */}
          <section id="vs-stablecoins">
            <h2 className="text-2xl font-bold text-text-primary">RLUSD vs. USDT vs. USDC</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Understanding how RLUSD compares to the dominant stablecoins helps clarify why Ripple built its own — and why it matters for XRP.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-left">
                    <th className="pb-3 font-semibold text-text-primary">Feature</th>
                    <th className="pb-3 font-semibold text-text-primary">RLUSD</th>
                    <th className="pb-3 font-semibold text-text-primary">USDT</th>
                    <th className="pb-3 font-semibold text-text-primary">USDC</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Issuer</td>
                    <td className="py-3 text-xrp-accent font-medium">Ripple Labs</td>
                    <td className="py-3">Tether</td>
                    <td className="py-3">Circle</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Regulation</td>
                    <td className="py-3 text-xrp-accent font-medium">NYDFS Approved</td>
                    <td className="py-3">Offshore</td>
                    <td className="py-3">U.S. Regulated</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Market Cap</td>
                    <td className="py-3">~$1.5B</td>
                    <td className="py-3">~$164B</td>
                    <td className="py-3">~$65B</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Primary Use</td>
                    <td className="py-3 text-xrp-accent font-medium">Institutional</td>
                    <td className="py-3">Trading</td>
                    <td className="py-3">DeFi</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">XRP Benefit</td>
                    <td className="py-3 text-xrp-accent font-medium">Direct (fees, AMM, bridging)</td>
                    <td className="py-3">None</td>
                    <td className="py-3">None</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Reserve Audits</td>
                    <td className="py-3">Monthly attestations</td>
                    <td className="py-3">Quarterly</td>
                    <td className="py-3">Monthly</td>
                  </tr>
                  <tr>
                    <td className="py-3">Native Chains</td>
                    <td className="py-3 text-xrp-accent font-medium">XRPL + Ethereum</td>
                    <td className="py-3">Multi-chain</td>
                    <td className="py-3">Multi-chain</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The critical differentiator is that RLUSD is the <strong>only major stablecoin natively integrated with XRP</strong>. When USDT or USDC are used, XRP receives zero benefit. When RLUSD is used on the XRPL, XRP benefits from fee burns, auto-bridging demand, AMM pools, and reserve requirements. This makes RLUSD a strategic asset for the entire XRP ecosystem.
            </p>
          </section>

          {/* ─── Section 7: Adoption & Growth ─── */}
          <section id="adoption">
            <h2 className="text-2xl font-bold text-text-primary">RLUSD Adoption and Growth</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Since its December 2024 launch, RLUSD has experienced remarkable growth, driven by Ripple&apos;s institutional partnerships and regulatory positioning:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>Market Cap Growth:</strong> From zero to approximately $1.5 billion in just over a year — one of the fastest-growing stablecoins in history</li>
              <li><strong>Exchange Listings:</strong> Available on Uphold, Bitstamp, Bitso, MoonPay, Archax, CoinMENA, Bullish, Independent Reserve, Mercado Bitcoin, and Zero Hash</li>
              <li><strong>Institutional Partners:</strong> <Link href="/learn/partnerships" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">Franklin Templeton</Link>, DBS Bank, SBI Holdings, Securitize, BlackRock&apos;s BUIDL fund, and VivoPower</li>
              <li><strong>RWA Integration:</strong> RLUSD is approved for compliant off-ramping of tokenized real-world assets, connecting traditional finance to XRPL infrastructure</li>
              <li><strong>Banking Ambitions:</strong> Ripple is actively pursuing additional banking licenses and OCC supervision for RLUSD operations</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">The XRPL Migration Thesis</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Currently, a majority of RLUSD supply exists on Ethereum, where XRP plays no direct role. However, Ripple has publicly stated that RLUSD volumes are expected to shift toward the XRPL as institutional DeFi infrastructure matures. This migration would be transformative for XRP because:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li>All migrated volume would generate XRP fee burns</li>
              <li>Institutional RLUSD/XRP AMM pools would deepen on-chain liquidity</li>
              <li>Auto-bridging would route more trades through XRP</li>
              <li>Permissioned DEX pairs would attract regulated institutional capital</li>
              <li>Network activity metrics would strengthen XRP&apos;s fundamental value proposition</li>
            </ul>
          </section>

          {/* ─── Section 8: The Flywheel Effect ─── */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary">The RLUSD–XRP Flywheel Effect</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The most powerful aspect of the RLUSD–XRP relationship is the <strong>flywheel effect</strong> — each component reinforces the others in a self-accelerating cycle:
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-text-secondary leading-relaxed">
              <li><strong>RLUSD adoption grows</strong> → more transactions on the XRPL</li>
              <li><strong>More XRPL transactions</strong> → more XRP burned in fees</li>
              <li><strong>More XRP burned</strong> → reduced supply → potential price appreciation</li>
              <li><strong>Higher XRP value</strong> → more attractive AMM yields → more liquidity provision</li>
              <li><strong>Deeper liquidity</strong> → better pricing for institutional trades → more institutional adoption</li>
              <li><strong>More institutional adoption</strong> → more RLUSD demand → cycle repeats</li>
            </ol>
            <p className="mt-4 text-text-secondary leading-relaxed">
              This flywheel is why many <Link href="/learn/history" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">XRP community members</Link> view RLUSD not as competition to XRP, but as one of the most bullish developments in the asset&apos;s history. By building a regulated, institutional-grade stablecoin directly on the XRPL, Ripple is creating a new source of organic, sustainable demand for XRP that doesn&apos;t depend on speculation.
            </p>
          </section>

          {/* ─── Section 9: Risks & Considerations ─── */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary">Risks and Considerations</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While the RLUSD–XRP thesis is compelling, it&apos;s important to consider potential headwinds:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>Ethereum Dominance:</strong> If the majority of RLUSD volume remains on Ethereum, XRP fee burns and DEX benefits remain limited</li>
              <li><strong>Direct Pair Competition:</strong> As RLUSD liquidity grows, some trades may route directly between stablecoin pairs instead of auto-bridging through XRP</li>
              <li><strong>Market Cap Gap:</strong> At ~$1.5B, RLUSD is still small compared to USDT ($164B) and USDC ($65B) — its impact on XRP depends on continued growth</li>
              <li><strong>Regulatory Risk:</strong> Changes in U.S. stablecoin regulation could affect RLUSD&apos;s competitive positioning</li>
              <li><strong>Competitive Landscape:</strong> Other stablecoins (PYUSD, FDUSD) are also targeting institutional adoption</li>
            </ul>
            <p className="mt-4 text-text-secondary leading-relaxed">
              That said, Ripple&apos;s first-mover advantage on the XRPL, deep institutional relationships, and regulatory approvals position RLUSD uniquely to capture a meaningful share of the stablecoin market — with direct benefits flowing to XRP.
            </p>
          </section>

          {/* ─── FAQ ─── */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-text-primary">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              {[
                { q: "What is RLUSD?", a: "RLUSD is Ripple's USD-pegged stablecoin, approved by the NYDFS in December 2024. It's backed 1:1 by U.S. dollar deposits, short-term treasuries, and cash equivalents with monthly third-party reserve attestations." },
                { q: "How does RLUSD help XRP?", a: "RLUSD helps XRP through transaction fee burns (every RLUSD transaction on XRPL destroys XRP), AMM liquidity pools (locking up XRP), auto-bridging (routing trades through XRP), reserve requirements (accounts need XRP to hold RLUSD), and increased network activity." },
                { q: "What blockchain does RLUSD run on?", a: "RLUSD operates on both the XRP Ledger (XRPL) and Ethereum. Ripple expects XRPL volumes to grow as institutional DeFi matures." },
                { q: "Is RLUSD regulated?", a: "Yes. RLUSD received NYDFS approval on December 10, 2024. Ripple publishes monthly reserve attestations and is pursuing additional banking licenses." },
                { q: "How does RLUSD compare to USDT and USDC?", a: "RLUSD targets institutional settlements with NYDFS regulation, while USDT dominates trading and USDC leads DeFi. Only RLUSD directly benefits XRP through native XRPL integration." },
                { q: "Does RLUSD burn XRP?", a: "Yes. Every RLUSD transaction on the XRPL burns a small XRP fee (~0.00001 XRP), permanently reducing supply. More RLUSD activity means more XRP burned." },
                { q: "What is RLUSD's market cap?", a: "Approximately $1.5 billion as of February 2026, growing rapidly from its December 2024 launch through institutional partnerships." },
                { q: "Can I earn yield with RLUSD and XRP?", a: "Yes. The XRPL's native AMM allows RLUSD/XRP liquidity provision, earning trading fees from swaps in the pool." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-surface-border/40 bg-black p-5">
                  <h3 className="text-base font-semibold text-text-primary">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* ─── CTA ─── */}
        <LearnCTA
          title="Continue Your XRP Education"
          description="Now that you understand how RLUSD strengthens the XRP ecosystem, explore more about how XRP works, Ripple's partnerships, and how to get started."
          primaryHref="/learn/what-is-xrp"
          primaryLabel="What is XRP?"
          secondaryHref="/learn/get-started"
          secondaryLabel="How to Buy XRP"
        />

        {/* ─── Internal Links ─── */}
        <RevealSection className="mt-10">
          <h3 className="text-lg font-bold text-text-primary">Keep Learning</h3>
          <LearnLinkGrid links={[
            { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "The basics of XRP and the XRP Ledger" },
            { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind RLUSD and RippleNet" },
            { href: "/learn/partnerships", label: "Ripple Partnerships", desc: "Global partners driving XRPL adoption" },
            { href: "/learn/get-started", label: "Get Started", desc: "How to buy and hold XRP" },
          ]} />
        </RevealSection>
      </div>
    </>
  );
}
