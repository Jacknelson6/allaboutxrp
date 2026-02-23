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
  robots: { index: false, follow: true },
  title: "XRP Transaction Types Explained",
  description:
    "Learn about all XRP transaction types: Payment, OfferCreate, TrustSet, Escrow, NFTokenMint, AMM, and how to read transaction hashes.",
  keywords: ["XRP transaction types", "XRPL transactions", "XRP payment types"],
  openGraph: {
    title: "XRP Transaction Types Explained | AllAboutXRP",
    description:
      "Complete guide to XRPL transaction types — payments, offers, trust lines, escrows, NFTs, AMM, and more.",
    url: "https://allaboutxrp.com/learn/xrp-transaction-types",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Transaction Types | AllAboutXRP",
    description:
      "Every XRPL transaction type explained: Payment, OfferCreate, TrustSet, Escrow, NFTokenMint, AMM, and more.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-transaction-types",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Transaction Types Explained",
    description: "A comprehensive guide to every transaction type on the XRP Ledger, including payments, offers, trust lines, escrows, NFTs, AMM operations, and how to read transaction hashes.",
    url: "https://allaboutxrp.com/learn/xrp-transaction-types",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Transaction Types" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-transaction-types" }),
  buildFAQSchema([
    { question: "How many transaction types does the XRPL support?", answer: "The XRPL supports over 25 transaction types including Payment, OfferCreate, OfferCancel, TrustSet, EscrowCreate, EscrowFinish, EscrowCancel, AccountSet, SetRegularKey, SignerListSet, NFTokenMint, NFTokenBurn, AMMCreate, AMMDeposit, AMMWithdraw, and more." },
    { question: "How much does an XRP transaction cost?", answer: "The minimum transaction fee on the XRPL is 0.00001 XRP (10 drops), typically less than $0.01. Some transaction types like multi-signed transactions or account deletions have higher fees. All fees are permanently burned." },
    { question: "What is a transaction hash on the XRPL?", answer: "A transaction hash is a unique 64-character hexadecimal identifier for every transaction on the XRPL. You can look up any transaction by its hash on explorers like XRPScan, Bithomp, or XRPL.org Explorer." },
    { question: "What is a TrustSet transaction?", answer: "TrustSet creates or modifies a trust line between your account and an issuer. It's required before you can hold any issued token (stablecoins, NFTs on the DEX, etc.) on the XRPL. Each trust line increases your account reserve by 2 XRP." },
    { question: "Can I cancel an XRP transaction?", answer: "No. Once a transaction is validated and included in a closed ledger (3-5 seconds), it cannot be reversed. However, you can cancel pending offers (OfferCancel) and finish or cancel escrows before they expire." },
  ]),
];

const faqItems = [
  { q: "How many transaction types does the XRPL support?", a: "The XRPL supports over 25 transaction types including Payment, OfferCreate, OfferCancel, TrustSet, EscrowCreate, EscrowFinish, EscrowCancel, AccountSet, SetRegularKey, SignerListSet, NFTokenMint, NFTokenBurn, AMMCreate, AMMDeposit, AMMWithdraw, and more. New types are added through the amendment process." },
  { q: "How much does an XRP transaction cost?", a: "The minimum transaction fee is 0.00001 XRP (10 drops), typically less than $0.01 USD. Some transaction types like multi-signed transactions or account deletions have higher minimum fees. All fees are permanently burned — they're not paid to validators." },
  { q: "What is a transaction hash on the XRPL?", a: "A transaction hash is a unique 64-character hexadecimal string (SHA-512Half) that identifies every transaction. You can look up any transaction by its hash on explorers like XRPScan, Bithomp, or the XRPL.org Explorer." },
  { q: "What is a TrustSet transaction?", a: "TrustSet creates or modifies a trust line between your account and a token issuer. It's required before you can hold any issued token (like RLUSD or other stablecoins) on the XRPL. Each trust line increases your account reserve by 2 XRP." },
  { q: "Can I cancel an XRP transaction after sending?", a: "No. Once a transaction is validated and included in a closed ledger (3-5 seconds), it is permanent and irreversible. However, you can cancel pending DEX offers with OfferCancel, and escrows can be cancelled before completion with EscrowCancel." },
];

export default function XRPTransactionTypesPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Transaction Types"
          titleAccent="Explained"
          subtitle="The XRP Ledger supports over 25 different transaction types — from simple payments to complex escrows, DEX offers, NFT operations, and AMM interactions. Understanding these types is key to mastering the XRPL."
          breadcrumbLabel="XRP Transaction Types"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL</Link> has 25+ transaction types. The most common are <strong className="text-text-primary">Payment</strong> (send XRP/tokens), <strong className="text-text-primary">OfferCreate</strong> (DEX trading), <strong className="text-text-primary">TrustSet</strong> (enable token holding), and <strong className="text-text-primary">EscrowCreate</strong> (time-locked funds). All transactions cost ~0.00001 <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> and settle in 3-5 seconds. Fees are permanently burned.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Total Tx Types", value: "25+ (and growing)" },
          { label: "Min Fee", value: "0.00001 XRP (10 drops)" },
          { label: "Settlement", value: "3-5 seconds" },
          { label: "Fee Destination", value: "Burned permanently" },
          { label: "Hash Format", value: "64-char hex (SHA-512Half)" },
          { label: "Ledger Close", value: "Every 3-5 seconds" },
          { label: "New Types Added", value: "Via amendment voting" },
          { label: "Reversible?", value: "No — all final" },
        ]} />

        <SectionNav items={[
          { id: "payment", label: "Payment" },
          { id: "dex", label: "DEX Transactions" },
          { id: "trust-lines", label: "Trust Lines" },
          { id: "escrow", label: "Escrow" },
          { id: "account", label: "Account Management" },
          { id: "nft", label: "NFT Transactions" },
          { id: "amm", label: "AMM Transactions" },
          { id: "hashes", label: "Reading Tx Hashes" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Transaction Types" value="25+" delay={0} />
          <StatPill label="Min Fee" value="10 drops" delay={0.06} />
          <StatPill label="Settlement" value="3-5 sec" delay={0.12} />
          <StatPill label="Reversible" value="Never" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== PAYMENT ===== */}
          <RevealSection id="payment">
            <h2 className="text-2xl font-bold text-text-primary">Payment Transactions</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">Payment</strong> transaction is the most fundamental type on the XRPL. It transfers <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> or any issued token from one account to another. Payments settle in 3-5 seconds and can include <Link href="/learn/xrp-addresses-and-keys" className="text-xrp-accent underline decoration-xrp-accent/30">destination tags</Link> for exchange deposits.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Direct XRP Payment", desc: "Send XRP from one address to another — the simplest transaction type" },
                { title: "Cross-Currency Payment", desc: "Send USD and deliver EUR — the XRPL DEX handles the conversion atomically" },
                { title: "Partial Payments", desc: "Allow the delivered amount to be less than the specified amount (flagged with tfPartialPayment)" },
                { title: "Account Creation", desc: "The first payment to a new address (≥10 XRP) creates the account on the ledger" },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Partial Payment Warning" variant="warning">
                <p>Be cautious of the <strong className="text-text-primary">tfPartialPayment flag</strong>. A transaction may show a large &quot;Amount&quot; but only deliver a fraction. Always check the <strong className="text-text-primary">&quot;delivered_amount&quot;</strong> field in the transaction metadata, not the &quot;Amount&quot; field. Exchanges have lost funds by not checking this.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== DEX ===== */}
          <RevealSection id="dex" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">DEX Transactions: OfferCreate & OfferCancel</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL has a <strong className="text-text-primary">built-in decentralized exchange</strong> that uses an order book model. Trading on the DEX uses two transaction types:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Transaction", "Purpose", "Details"]}
                rows={[
                  ["OfferCreate", "Place a trade order", "Creates a buy or sell offer on the DEX order book. Can fill immediately or sit as a limit order."],
                  ["OfferCancel", "Cancel an open order", "Removes a previously placed offer from the order book. Frees the owner reserve."],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL DEX supports <strong className="text-text-primary">auto-bridging</strong> — if a direct market between two tokens doesn&apos;t have great liquidity, the DEX will automatically route through XRP if it offers a better price. This mechanism creates constant utility for XRP as the bridge currency.
            </p>
          </RevealSection>

          {/* ===== TRUST LINES ===== */}
          <RevealSection id="trust-lines" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">TrustSet: Enabling Token Holding</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Before you can hold any issued token on the XRPL (stablecoins like <Link href="/learn/xrp-stablecoin-ecosystem" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link>, NFTs, or community tokens), you must create a <strong className="text-text-primary">trust line</strong> to the issuer using a TrustSet transaction. This is a deliberate security design — you explicitly opt in to holding tokens from specific issuers.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Set a Limit", desc: "Define the maximum amount of a token you're willing to hold from an issuer" },
                { title: "Reserve Cost", desc: "Each trust line adds 2 XRP to your account's owner reserve" },
                { title: "Freeze Controls", desc: "Issuers can freeze individual trust lines for compliance — a feature used by regulated stablecoins" },
                { title: "Rippling", desc: "Trust lines can enable 'rippling' — allowing balances to shift through your account for path-finding" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== ESCROW ===== */}
          <RevealSection id="escrow" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Escrow Transactions</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL supports native <strong className="text-text-primary">escrow contracts</strong> — XRP locked by the protocol until specific conditions are met. <Link href="/learn/escrow" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s 55 billion XRP escrow</Link> is the most famous use case, but anyone can create escrows.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Transaction", "Purpose", "Details"]}
                rows={[
                  ["EscrowCreate", "Lock XRP", "Creates a time-locked or condition-locked escrow. XRP is removed from your balance."],
                  ["EscrowFinish", "Release XRP", "Completes the escrow, delivering XRP to the destination. Requires conditions to be met."],
                  ["EscrowCancel", "Cancel escrow", "Returns XRP to the creator. Only works after the CancelAfter time (if set)."],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Escrows can use <strong className="text-text-primary">time-based conditions</strong> (release after a specific date), <strong className="text-text-primary">crypto-conditions</strong> (release when a cryptographic condition is fulfilled), or both. This makes them useful for trustless agreements, scheduled payments, and cross-chain atomic swaps.
            </p>
          </RevealSection>

          {/* ===== ACCOUNT MANAGEMENT ===== */}
          <RevealSection id="account" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Account Management Transactions</h2>
            <div className="mt-6">
              <DataTable
                headers={["Transaction", "Purpose"]}
                rows={[
                  ["AccountSet", "Modify account settings — enable RequireDest, disable master key, set domain, etc."],
                  ["SetRegularKey", "Assign or remove a regular key pair for daily transaction signing"],
                  ["SignerListSet", "Configure multi-signing with up to 32 signers and a quorum threshold"],
                  ["AccountDelete", "Delete an account, recovering most of the base reserve (costs 2 XRP fee)"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Learn more about how these transactions relate to account security in our <Link href="/learn/xrp-addresses-and-keys" className="text-xrp-accent underline decoration-xrp-accent/30">Addresses & Keys guide</Link>.
            </p>
          </RevealSection>

          {/* ===== NFT ===== */}
          <RevealSection id="nft" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">NFT Transactions (XLS-20)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Since October 2022, the XRPL has supported <strong className="text-text-primary">native NFTs</strong> through the XLS-20 standard. Unlike Ethereum NFTs that require smart contracts, XRPL NFTs are a built-in protocol feature.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Transaction", "Purpose"]}
                rows={[
                  ["NFTokenMint", "Create a new NFT on the XRPL with metadata, transfer fees, and flags"],
                  ["NFTokenBurn", "Permanently destroy an NFT"],
                  ["NFTokenCreateOffer", "Create a buy or sell offer for an NFT"],
                  ["NFTokenAcceptOffer", "Accept an existing NFT offer to complete a sale"],
                  ["NFTokenCancelOffer", "Cancel a previously created NFT offer"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          {/* ===== AMM ===== */}
          <RevealSection id="amm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">AMM Transactions</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL&apos;s native <strong className="text-text-primary">Automated Market Maker (AMM)</strong> was activated in 2024, adding DeFi-style liquidity pools alongside the existing order book DEX. This is unique — no other major blockchain has both an order book and AMM at the protocol level.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Transaction", "Purpose"]}
                rows={[
                  ["AMMCreate", "Create a new AMM pool for a token pair (e.g., XRP/RLUSD)"],
                  ["AMMDeposit", "Add liquidity to an existing AMM pool and receive LP tokens"],
                  ["AMMWithdraw", "Remove liquidity from a pool by returning LP tokens"],
                  ["AMMVote", "Vote on the trading fee for a pool (weighted by LP token holdings)"],
                  ["AMMBid", "Bid for the auction slot to get discounted trading fees for 24 hours"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          {/* ===== TX HASHES ===== */}
          <RevealSection id="hashes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Read XRPL Transaction Hashes</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every transaction on the XRPL gets a unique <strong className="text-text-primary">transaction hash</strong> — a 64-character hexadecimal string generated using SHA-512Half. Here&apos;s an example:
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 font-mono text-sm text-text-primary break-all">
              E08D6E9754025BA2534A78707605E0601F03ACE063687A0CA1BDDACFCD1698C7
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              You can look up any transaction hash on these block explorers:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={3} items={[
                { title: "XRPScan", desc: "xrpscan.com — the most popular XRPL explorer" },
                { title: "Bithomp", desc: "bithomp.com — detailed account and transaction views" },
                { title: "XRPL Explorer", desc: "livenet.xrpl.org — official explorer by the XRPL Foundation" },
              ]} />
            </div>
            <div className="mt-6">
              <HighlightBox title="What's in a Transaction?" variant="info">
                <p>Every XRPL transaction includes: the <strong className="text-text-primary">transaction type</strong>, sender account, fee, sequence number, and type-specific fields. After validation, the <strong className="text-text-primary">metadata</strong> shows exactly what changed on the ledger — balances modified, offers consumed, trust lines created, and more.</p>
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
              <li>• <a href="https://xrpl.org/transaction-types.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Transaction Types</a></li>
              <li>• <a href="https://xrpl.org/payment.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Payment Transaction</a></li>
              <li>• <a href="https://xrpl.org/escrow.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Escrow</a></li>
              <li>• <a href="https://xrpl.org/non-fungible-tokens.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Non-Fungible Tokens</a></li>
              <li>• <a href="https://xrpl.org/automated-market-makers.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Automated Market Makers</a></li>
              <li>• <a href="https://xrpscan.com" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPScan — XRPL Block Explorer</a></li>
            </ul>
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How XRPL works" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "Byzantine agreement" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Network consensus nodes" },
              { href: "/learn/xrpl-decentralization", label: "XRPL Decentralization", desc: "Centralization debate" },
              { href: "/learn/xrpl-sidechains", label: "XRPL Sidechains", desc: "EVM sidechain & scaling" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore the XRP Ledger"
          description="Now that you understand transaction types, explore the XRPL yourself. Send a payment, create a trust line, or browse transactions on XRPScan."
          primaryHref="/learn/get-started"
          primaryLabel="Get Started →"
          secondaryHref="/learn/xrp-ledger-explained"
          secondaryLabel="Learn About XRPL"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation, XRPScan on-chain data.</em>
        </p>
      </div>
    </>
  );
}
