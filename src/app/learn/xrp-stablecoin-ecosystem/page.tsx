import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Stablecoin Ecosystem: RLUSD and Beyond",
  description:
    "Explore the XRP stablecoin ecosystem including RLUSD, how stablecoins work on XRPL, DEX integration, and institutional implications.",
  keywords: ["XRP stablecoin", "RLUSD", "Ripple stablecoin", "XRPL stablecoins"],
  openGraph: {
    title: "XRP Stablecoin Ecosystem: RLUSD & Beyond | AllAboutXRP",
    description:
      "Deep dive into RLUSD and the growing stablecoin ecosystem on the XRP Ledger — backing, regulation, DEX integration, and more.",
    url: "https://allaboutxrp.com/learn/xrp-stablecoin-ecosystem",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Stablecoin Ecosystem | AllAboutXRP",
    description:
      "RLUSD deep dive, XRPL stablecoins, DEX integration, and institutional implications for the XRP ecosystem.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-stablecoin-ecosystem",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Stablecoin Ecosystem: RLUSD and Beyond",
    description: "A comprehensive guide to stablecoins on the XRP Ledger, including RLUSD backing, regulation, DEX integration, and institutional use cases.",
    url: "https://allaboutxrp.com/learn/xrp-stablecoin-ecosystem",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Stablecoin Ecosystem" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-stablecoin-ecosystem" }),
  buildFAQSchema([
    { question: "What is RLUSD?", answer: "RLUSD is Ripple's USD-backed stablecoin launched in December 2024. It is fully backed by US dollar deposits and short-term US Treasuries, regulated by the New York Department of Financial Services (NYDFS)." },
    { question: "How do stablecoins work on the XRP Ledger?", answer: "Stablecoins on XRPL are issued as trust line tokens. Users must set a TrustSet to hold them. They can be traded on the built-in DEX, used in AMM pools, and transferred peer-to-peer with the same 3-5 second settlement as XRP." },
    { question: "Does RLUSD help or hurt XRP's price?", answer: "RLUSD helps XRP. Every RLUSD transaction on XRPL burns XRP as a fee. RLUSD increases XRPL activity, DEX liquidity, and institutional adoption — all of which drive demand for XRP as the native asset." },
    { question: "What other stablecoins exist on XRPL?", answer: "Besides RLUSD, the XRPL hosts stablecoins from Bitstamp (USD), GateHub (EUR, USD), and various community-issued tokens. RLUSD is the first institutional-grade, fully regulated stablecoin on XRPL." },
    { question: "Can I earn yield on RLUSD?", answer: "Yes. RLUSD can be deposited into XRPL's native AMM pools paired with XRP or other assets to earn trading fees. Some platforms also offer lending and DeFi opportunities with RLUSD." },
  ]),
];

const faqItems = [
  { q: "What is RLUSD?", a: "RLUSD is Ripple's USD-backed stablecoin launched in December 2024. It is fully backed by US dollar deposits and short-term US Treasuries, regulated by the New York Department of Financial Services (NYDFS). Its market cap has surpassed $1.26 billion as of early 2026." },
  { q: "How do stablecoins work on the XRP Ledger?", a: "Stablecoins on XRPL are issued as trust line tokens. Users must set a TrustSet transaction to hold them. They can be traded on the built-in DEX, used in AMM pools, and transferred peer-to-peer with the same 3-5 second settlement as XRP." },
  { q: "Does RLUSD help or hurt XRP's price?", a: "RLUSD helps XRP. Every RLUSD transaction on XRPL burns XRP as a fee. RLUSD increases XRPL activity, DEX liquidity, and institutional adoption — all of which create demand for XRP as the native settlement asset." },
  { q: "What other stablecoins exist on XRPL?", a: "Besides RLUSD, the XRPL hosts stablecoins from Bitstamp (USD), GateHub (EUR, USD), and various community-issued tokens. RLUSD is the first institutional-grade, fully regulated stablecoin on XRPL." },
  { q: "Can I earn yield on RLUSD?", a: "Yes. RLUSD can be deposited into XRPL's native AMM pools paired with XRP or other assets to earn trading fees. Some platforms and DeFi protocols also offer lending opportunities with RLUSD." },
];

export default function XRPStablecoinEcosystemPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Stablecoin Ecosystem:"
          titleAccent="RLUSD and Beyond"
          subtitle="Stablecoins are transforming the XRP Ledger into a full-stack financial platform. From Ripple's regulated RLUSD to community-issued tokens, the XRPL stablecoin ecosystem is growing rapidly — bringing institutional capital, DEX liquidity, and real-world utility."
          breadcrumbLabel="XRP Stablecoin Ecosystem"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">RLUSD</strong> is <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s</Link> fully-regulated USD stablecoin on the XRPL, backed 1:1 by cash and US Treasuries. Launched December 2024, it has surpassed $1.26B market cap. Stablecoins on XRPL trade on the native <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">DEX</Link>, settle in 3-5 seconds, and burn XRP with every transaction — directly benefiting <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> holders.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "RLUSD Launch", value: "December 17, 2024" },
          { label: "Market Cap", value: "$1.26B+ (Feb 2026)" },
          { label: "Backing", value: "USD deposits + US Treasuries" },
          { label: "Regulator", value: "NYDFS (New York)" },
          { label: "Settlement", value: "3-5 seconds on XRPL" },
          { label: "Chains", value: "XRPL + Ethereum" },
          { label: "DEX Trading", value: "Native XRPL order book" },
          { label: "XRP Benefit", value: "Burns XRP fees on every tx" },
        ]} />

        <SectionNav items={[
          { id: "what-are-stablecoins", label: "What Are Stablecoins?" },
          { id: "rlusd-deep-dive", label: "RLUSD Deep Dive" },
          { id: "other-stablecoins", label: "Other Stablecoins" },
          { id: "dex-integration", label: "DEX Integration" },
          { id: "institutional", label: "Institutional Impact" },
          { id: "xrp-benefit", label: "How It Helps XRP" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="RLUSD Market Cap" value="$1.26B+" delay={0} />
          <StatPill label="Settlement" value="3-5 sec" delay={0.06} />
          <StatPill label="Backing" value="100% USD" delay={0.12} />
          <StatPill label="Regulation" value="NYDFS" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== WHAT ARE STABLECOINS ===== */}
          <RevealSection id="what-are-stablecoins">
            <h2 className="text-2xl font-bold text-text-primary">What Are Stablecoins on the XRP Ledger?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A <strong className="text-text-primary">stablecoin</strong> is a cryptocurrency designed to maintain a stable value, typically pegged 1:1 to a fiat currency like the US dollar. On the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>, stablecoins are issued as trust line tokens — a native XRPL feature that allows any entity to issue digital representations of real-world assets.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Unlike stablecoins on Ethereum that require smart contracts and high gas fees, XRPL stablecoins leverage the ledger&apos;s built-in token infrastructure. This means they inherit the XRPL&apos;s speed (3-5 second settlement), low cost (fractions of a cent), and can be traded directly on the native decentralized exchange.
            </p>
            <div className="mt-6">
              <HighlightBox title="Why Stablecoins Matter for XRPL" variant="accent">
                <p>Stablecoins bring <strong className="text-text-primary">real-world dollar liquidity</strong> onto the XRP Ledger. They serve as on/off ramps for fiat, provide stable trading pairs on the DEX, enable cross-border payments without crypto volatility, and attract institutional capital that requires price stability.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== RLUSD DEEP DIVE ===== */}
          <RevealSection id="rlusd-deep-dive" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">RLUSD Deep Dive: Ripple&apos;s Stablecoin</h2>

            <h3 className="mt-6 text-xl font-semibold text-text-primary">What Is RLUSD?</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">RLUSD</strong> (Ripple USD) is a fully-regulated, USD-pegged stablecoin issued by Ripple. Launched on December 17, 2024, it represents Ripple&apos;s strategic entry into the $200+ billion stablecoin market. RLUSD is available on both the XRPL and Ethereum, giving it cross-chain reach from day one.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Backing and Reserves</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Every RLUSD token is backed 1:1 by a combination of US dollar bank deposits and short-term US Treasury securities. Ripple publishes monthly attestation reports from an independent accounting firm to verify reserves.
            </p>
            <div className="mt-5">
              <DataTable
                headers={["Reserve Component", "Details"]}
                rows={[
                  ["US Dollar Deposits", "Held at regulated US banking institutions"],
                  ["US Treasuries", "Short-term government securities"],
                  ["Attestation", "Monthly third-party verification"],
                  ["Redemption", "1:1 redeemable for USD at any time"],
                ]}
                highlightCol={0}
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Regulation and Compliance</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              RLUSD is issued under a limited-purpose trust company charter regulated by the <strong className="text-text-primary">New York Department of Financial Services (NYDFS)</strong> — one of the strictest financial regulators in the world. This gives RLUSD institutional-grade compliance from the outset, differentiating it from many competing stablecoins.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">RLUSD Use Cases</h3>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Cross-Border Payments", desc: "RLUSD enables instant settlement without crypto volatility. Ripple's ODL can use RLUSD alongside XRP for payment corridors." },
                { title: "DEX Trading Pair", desc: "RLUSD serves as a stable base pair on the XRPL DEX, enabling traders to move in and out of positions without off-ramping to fiat." },
                { title: "DeFi & AMM Pools", desc: "RLUSD can be paired with XRP in native AMM pools, providing liquidity and earning trading fees for liquidity providers." },
                { title: "Treasury Management", desc: "Enterprises can hold RLUSD on-ledger as a stable store of value with instant settlement capabilities." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== OTHER STABLECOINS ===== */}
          <RevealSection id="other-stablecoins" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Other Stablecoins on the XRPL</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While RLUSD is the flagship institutional stablecoin, the XRPL has hosted various stablecoins since its early days. These are issued by different gateways using the XRPL&apos;s trust line system.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Issuer", "Assets", "Type", "Status"]}
                rows={[
                  ["Ripple (RLUSD)", "USD", "Fully regulated (NYDFS)", "Active — $1.26B+"],
                  ["Bitstamp", "USD", "Exchange-issued IOU", "Active"],
                  ["GateHub", "USD, EUR, GBP", "Gateway-issued IOU", "Active"],
                  ["Stably", "USD (USDS)", "Fiat-backed", "Active"],
                ]}
                highlightCol={0}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Trust Lines Are Key" variant="info">
                <p>To hold any issued token on XRPL (including stablecoins), you must first create a <strong className="text-text-primary">trust line</strong> to the issuer using a <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">TrustSet transaction</Link>. This is a deliberate security feature — you explicitly choose which tokens and issuers to trust. Each trust line increases your <Link href="/learn/xrp-addresses-and-keys" className="text-xrp-accent underline decoration-xrp-accent/30">account reserve</Link> by 2 XRP.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== DEX INTEGRATION ===== */}
          <RevealSection id="dex-integration" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Stablecoins and the XRPL DEX</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              One of the XRPL&apos;s most powerful features is its <strong className="text-text-primary">built-in decentralized exchange</strong>. Unlike Ethereum where DEXs require separate smart contracts (Uniswap, SushiSwap), the XRPL DEX is part of the protocol itself. Stablecoins can be traded against XRP and any other issued token directly on-ledger.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Order Book Trading", desc: "Place limit orders for RLUSD/XRP pairs directly on the XRPL — no intermediary smart contracts needed" },
                { title: "Auto-Bridging", desc: "The XRPL automatically routes trades through XRP when it offers a better price, increasing XRP's utility" },
                { title: "AMM Pools", desc: "Native Automated Market Maker pools allow passive liquidity provision for RLUSD pairs" },
                { title: "Cross-Currency Payments", desc: "Send USD and receive EUR instantly — the DEX handles the conversion atomically in one transaction" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== INSTITUTIONAL IMPACT ===== */}
          <RevealSection id="institutional" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Institutional Implications of XRPL Stablecoins</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RLUSD represents a pivotal moment for the XRPL ecosystem. By bringing a regulated, institutional-grade stablecoin to the ledger, <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> is positioning the XRPL as a serious platform for traditional finance.
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Bank On-Ramps", desc: "Regulated stablecoins give banks a compliant way to interact with the XRPL without directly holding volatile crypto assets." },
                { title: "Payment Corridors", desc: "RLUSD expands Ripple's ODL corridors — institutions can settle in a stable asset while still leveraging XRPL speed." },
                { title: "Tokenized Assets", desc: "RLUSD provides a stable settlement layer for tokenized real-world assets like treasuries, real estate, and commodities on XRPL." },
                { title: "CBDC Bridge", desc: "RLUSD can serve as a bridge between central bank digital currencies and the broader crypto ecosystem on XRPL." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== HOW IT HELPS XRP ===== */}
          <RevealSection id="xrp-benefit" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Stablecoins Help XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A common misconception is that stablecoins on XRPL compete with XRP. In reality, they <strong className="text-text-primary">directly benefit XRP</strong> in multiple ways:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Fee Burns", desc: "Every RLUSD transaction burns XRP as a transaction fee — reducing total XRP supply permanently" },
                { title: "Reserve Requirements", desc: "Holding RLUSD requires trust lines, which lock up XRP in account reserves (2 XRP per trust line)" },
                { title: "DEX Auto-Bridging", desc: "The XRPL DEX routes trades through XRP when optimal, creating constant buy/sell pressure" },
                { title: "Network Activity", desc: "More stablecoin usage means more XRPL transactions, validators, and ecosystem growth" },
                { title: "Institutional Gravity", desc: "RLUSD brings institutions to the XRPL — once on the ledger, they naturally encounter XRP" },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="The Flywheel Effect" variant="accent" large>
                <p>More stablecoins → more XRPL activity → more XRP burned → more institutional adoption → more demand for XRP as the native asset. RLUSD isn&apos;t competing with XRP — it&apos;s creating a <strong className="text-text-primary">virtuous cycle</strong> that benefits the entire ecosystem. Learn more about XRP&apos;s deflationary mechanics in our <Link href="/learn/xrp-tokenomics" className="text-xrp-accent underline decoration-xrp-accent/30">tokenomics guide</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== SOURCES ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://ripple.com/solutions/stablecoin/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">Ripple — RLUSD Stablecoin</a></li>
              <li>• <a href="https://xrpl.org/tokens.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Tokens & Trust Lines Documentation</a></li>
              <li>• <a href="https://xrpl.org/decentralized-exchange.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Decentralized Exchange</a></li>
              <li>• <a href="https://www.dfs.ny.gov/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">New York Department of Financial Services</a></li>
              <li>• <a href="https://www.coingecko.com/en/coins/ripple-usd" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">CoinGecko — RLUSD Market Data</a></li>
            </ul>
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP bridge currency" },
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Complete product suite" },
              { href: "/learn/ripple-prime", label: "Ripple Prime", desc: "Enterprise brokerage" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Ready to Explore XRPL Stablecoins?"
          description="RLUSD is transforming the XRP Ledger into a full financial platform. Start by getting your first XRP and exploring the ecosystem."
          primaryHref="/learn/get-started"
          primaryLabel="Get Started with XRP →"
          secondaryHref="/learn/rlusd"
          secondaryLabel="Learn About RLUSD"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple official announcements, XRPL.org documentation, NYDFS records, CoinGecko market data.</em>
        </p>
      </div>
    </>
  );
}
