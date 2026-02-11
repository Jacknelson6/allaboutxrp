import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList,
} from "@/components/learn/LearnPageShell";

export const metadata: Metadata = {
  title: "XRP Wallets: Best Options Explained (2026)",
  description:
    "Best XRP wallets in 2026. Compare Xaman, Ledger, Trust Wallet, and more. Learn wallet types, setup, and security tips.",
  openGraph: {
    title: "XRP Wallets Explained | AllAboutXRP",
    description:
      "Complete guide to XRP wallets — types, setup, security, and the best options for storing your XRP safely in 2026.",
    url: "https://allaboutxrp.com/learn/xrp-wallets",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Wallets: Best Options (2026) | AllAboutXRP",
    description: "Everything you need to know about storing XRP safely. Compare the best XRP wallets.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-wallets",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Wallets: Best Options Explained",
    description: "A comprehensive guide to XRP wallets covering types, setup, security best practices, and comparisons of the best options in 2026.",
    url: "https://allaboutxrp.com/learn/xrp-wallets",
    datePublished: "2026-02-11",
    dateModified: "2026-02-11",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Wallets" },
  ]),
  buildFAQSchema([
    { question: "What is the best XRP wallet?", answer: "The best XRP wallet depends on your needs. Xaman (formerly XUMM) is the most popular self-custody mobile wallet built specifically for the XRPL. Ledger Nano is the best hardware wallet option. For convenience, exchange wallets on Coinbase or Kraken work well for active traders." },
    { question: "What is the 10 XRP wallet reserve?", answer: "The XRP Ledger requires a base reserve of 10 XRP to activate any account. This XRP is locked and cannot be spent while the account exists. The reserve amount is set by validator vote and may be reduced in the future." },
    { question: "Can I store XRP on a Ledger?", answer: "Yes. Ledger hardware wallets (Nano S Plus and Nano X) support XRP natively. You can manage your XRP through Ledger Live software, which provides a secure way to send, receive, and manage your XRP holdings." },
    { question: "What happens if I lose my wallet recovery phrase?", answer: "If you lose your recovery phrase (seed phrase) and also lose access to your wallet device, your XRP is permanently lost. There is no password reset or account recovery. Always store your recovery phrase securely offline in multiple locations." },
    { question: "Do I need a destination tag when sending XRP?", answer: "It depends. When sending XRP to an exchange or custodial service, you typically need a destination tag to identify your account. When sending to a personal self-custody wallet like Xaman, a destination tag is usually not required." },
  ]),
];

const faqItems = [
  { q: "What is the best XRP wallet?", a: "The best wallet depends on your needs. For mobile self-custody, Xaman (formerly XUMM) is the gold standard — it's built specifically for the XRP Ledger by XRPL Labs. For maximum security on large holdings, Ledger hardware wallets are ideal. For convenience and active trading, exchange wallets on Coinbase or Kraken work well. Many experienced users combine multiple wallet types." },
  { q: "What is the 10 XRP wallet reserve?", a: "The XRP Ledger requires a base reserve of 10 XRP to activate any account. This amount is locked and cannot be spent while the account exists. Each additional object you create on the XRPL (trust lines, offers, etc.) requires an additional 2 XRP owner reserve. The reserve amounts are set by validator vote and could be lowered in the future — in fact, they were already reduced from 20 XRP in 2021." },
  { q: "Can I store XRP on a Ledger hardware wallet?", a: "Yes. Both the Ledger Nano S Plus and Ledger Nano X support XRP natively. You can manage your XRP through Ledger Live software. For even more functionality, you can connect your Ledger to Xaman for the best of both worlds — hardware security with full XRPL feature access." },
  { q: "What happens if I lose my wallet recovery phrase?", a: "If you lose your recovery phrase (also called seed phrase or secret numbers) and also lose access to your wallet device, your XRP is permanently and irreversibly lost. There is no password reset, no customer support, and no way to recover the funds. This is why securely backing up your recovery phrase is the single most important thing you can do." },
  { q: "Do I need a destination tag when sending XRP?", a: "When sending XRP to an exchange or custodial service, you almost always need a destination tag — it's how the exchange identifies which account the XRP belongs to. Missing the destination tag can result in lost funds (though some exchanges can recover them with support tickets). When sending to a personal self-custody wallet like Xaman, a destination tag is not required." },
  { q: "Is it safe to store XRP on an exchange?", a: "Exchanges like Coinbase, Kraken, and Uphold are generally safe for moderate amounts and active trading. However, you don't control the private keys — the exchange does. If the exchange is hacked, goes bankrupt, or freezes withdrawals, your funds could be at risk. For long-term storage of significant amounts, self-custody is recommended." },
  { q: "What is Xaman (XUMM)?", a: "Xaman (formerly known as XUMM) is the most popular self-custody wallet for the XRP Ledger, developed by XRPL Labs. It's available on iOS and Android, supports all native XRPL features (DEX, NFTs, AMM, trust lines), and allows you to interact with XRPL decentralized applications. It's free to use and widely regarded as the best XRP-specific wallet." },
];

export default function XRPWalletsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP"
          titleAccent="Wallets"
          subtitle="Choosing the right wallet is essential for keeping your XRP safe. Whether you're a beginner looking for simplicity or an experienced holder wanting maximum security, this guide covers every option for storing XRP, the native token of the XRP Ledger, in 2026."
          breadcrumbLabel="XRP Wallets"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" />
          </div>
        </LearnHero>

        {/* TL;DR */}
        <div className="mt-10 rounded-2xl border border-xrp-accent/20 bg-xrp-accent/5 p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-xrp-accent">TL;DR</h2>
          <p className="mt-3 text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Here&apos;s what you need to know:</strong> For most users, <strong className="text-text-primary">Xaman</strong> (formerly XUMM) is the best self-custody XRP wallet — it&apos;s free, mobile, and built specifically for the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. For maximum security on large holdings, pair it with a <strong className="text-text-primary">Ledger</strong> hardware wallet. Remember: XRPL accounts require a 10 XRP base reserve.
          </p>
        </div>

        <SectionNav items={[
          { id: "types", label: "Wallet Types" },
          { id: "comparison", label: "Comparison" },
          { id: "xaman", label: "Xaman (XUMM)" },
          { id: "hardware", label: "Hardware Wallets" },
          { id: "other", label: "Other Wallets" },
          { id: "reserve", label: "10 XRP Reserve" },
          { id: "security", label: "Security Tips" },
          { id: "tags", label: "Destination Tags" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Base Reserve" value="10 XRP" />
          <StatPill label="Owner Reserve" value="2 XRP" />
          <StatPill label="Transfer Fee" value="< $0.01" />
          <StatPill label="Transfer Time" value="3-5 sec" />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== WALLET TYPES ===== */}
          <RevealSection id="types">
            <h2 className="text-2xl font-bold text-text-primary">XRP Wallets — Everything You Need to Know in 2026</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              An <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> wallet is software or hardware that stores your private keys — the cryptographic credentials that prove you own your XRP and allow you to send transactions. There are several types of wallets, each with different trade-offs between security and convenience.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Software Wallets (Hot Wallets)", desc: "Mobile or desktop apps connected to the internet. Examples: Xaman, Trust Wallet. Convenient for daily use, but vulnerable to device compromise. Best for moderate holdings." },
                { title: "Hardware Wallets (Cold Wallets)", desc: "Physical devices that store private keys offline. Examples: Ledger Nano S Plus, Ledger Nano X. Highest security for self-custody. Best for large, long-term holdings." },
                { title: "Exchange Wallets (Custodial)", desc: "Wallets managed by exchanges like Coinbase or Kraken. You don't control the private keys — the exchange does. Convenient but carries counterparty risk. Best for active trading." },
                { title: "Paper Wallets", desc: "Private keys printed on paper and stored physically. Maximum security from digital attacks, but vulnerable to physical damage/loss. Best for ultra-long-term cold storage." },
              ]} />
            </div>

            <div className="mt-6">
              <HighlightBox title="Not Your Keys, Not Your Crypto" variant="accent">
                <p>When you use an exchange wallet, the exchange holds your private keys. If the exchange is hacked, goes bankrupt, or freezes your account, you could lose access to your XRP. <strong className="text-text-primary">Self-custody wallets</strong> (software or hardware) give you full control over your keys and your XRP.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== COMPARISON ===== */}
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">XRP Wallet Comparison Table</h2>
            <div className="mt-6">
              <DataTable
                headers={["Wallet", "Type", "Platform", "XRPL Features", "Security", "Best For"]}
                rows={[
                  ["Xaman (XUMM)", "Software", "iOS, Android", "Full (DEX, NFTs, AMM)", "High", "Primary XRP wallet"],
                  ["Ledger Nano X", "Hardware", "USB + Bluetooth", "Via Ledger Live", "Very High", "Large holdings"],
                  ["Ledger Nano S Plus", "Hardware", "USB", "Via Ledger Live", "Very High", "Budget hardware option"],
                  ["Trust Wallet", "Software", "iOS, Android", "Basic (send/receive)", "Medium-High", "Multi-chain users"],
                  ["Coinbase", "Exchange", "Web, Mobile", "None (custody only)", "Medium", "Active traders"],
                  ["Kraken", "Exchange", "Web, Mobile", "None (custody only)", "Medium", "Active traders"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          {/* ===== XAMAN ===== */}
          <RevealSection id="xaman">
            <h2 className="text-2xl font-bold text-text-primary">Xaman (Formerly XUMM): The Best XRP Wallet</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Xaman</strong> is the most popular and feature-rich self-custody wallet built specifically for the XRP Ledger. Developed by XRPL Labs (now part of the broader XRPL ecosystem), Xaman offers full access to every native XRPL feature.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Full XRPL support", desc: "Access the native DEX, AMM, NFT marketplace, trust lines, escrow, and more — all from your phone" },
                { title: "xApp ecosystem", desc: "Built-in app marketplace for interacting with XRPL-based dApps, DeFi protocols, and services" },
                { title: "Tangem card integration", desc: "Pair with Tangem NFC cards for hardware-level security with the convenience of tap-to-sign" },
                { title: "Multi-account support", desc: "Manage multiple XRP accounts from a single app, with easy switching between them" },
                { title: "Free to use", desc: "Xaman is free to download and use. Premium features (Pro subscription) offer enhanced tools for power users" },
                { title: "Ledger integration", desc: "Connect your Ledger hardware wallet to Xaman for maximum security with full XRPL feature access" },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Setting Up Xaman" variant="info">
                <ol className="list-decimal pl-4 space-y-2">
                  <li>Download Xaman from the App Store (iOS) or Google Play (Android)</li>
                  <li>Create a new account — the app will generate a set of &quot;Secret Numbers&quot; (your recovery phrase)</li>
                  <li><strong className="text-text-primary">Write down your Secret Numbers on paper and store them securely.</strong> Never screenshot or store digitally.</li>
                  <li>Verify your Secret Numbers by entering them back</li>
                  <li>Your wallet is ready — but you&apos;ll need to send at least 10 XRP to activate the account on the XRPL</li>
                </ol>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== HARDWARE ===== */}
          <RevealSection id="hardware">
            <h2 className="text-2xl font-bold text-text-primary">Hardware Wallets for XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Hardware wallets store your private keys on a dedicated physical device that never connects directly to the internet. This makes them extremely resistant to hacking, malware, and phishing attacks. For XRP holders with significant amounts, a hardware wallet is strongly recommended.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Ledger Nano X</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The Ledger Nano X is the premium option, offering Bluetooth connectivity (for mobile use), USB-C, and support for over 5,500 cryptocurrencies including XRP. Manage your XRP through the Ledger Live desktop or mobile app. You can also connect the Nano X to Xaman for full XRPL feature access with hardware-level security.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Ledger Nano S Plus</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The more affordable option, the Nano S Plus offers the same security as the Nano X but connects via USB only (no Bluetooth). It&apos;s a great choice for users who primarily manage their crypto from a desktop computer.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Tangem Cards</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Tangem offers NFC-based hardware wallets in a credit card form factor. They integrate natively with Xaman — simply tap the card to your phone to sign transactions. No battery, no screen, waterproof, and extremely portable. A popular choice in the XRP community.
            </p>
          </RevealSection>

          {/* ===== OTHER ===== */}
          <RevealSection id="other">
            <h2 className="text-2xl font-bold text-text-primary">Other XRP Wallet Options</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Trust Wallet", desc: "Multi-chain mobile wallet supporting XRP alongside thousands of other tokens. Good for users who hold multiple cryptocurrencies and want a single app. Supports basic send/receive for XRP but lacks advanced XRPL features." },
                { title: "Exodus", desc: "Desktop and mobile wallet with a clean interface and built-in exchange. Supports XRP alongside 250+ assets. Good for beginners who want a simple, visually appealing wallet experience." },
                { title: "GateHub", desc: "A web-based XRPL wallet and gateway that has been part of the XRP ecosystem since the early days. Offers full XRPL functionality including the DEX and trust lines. Operates as a regulated financial service." },
                { title: "Crossmark", desc: "A browser extension wallet for the XRPL, similar to MetaMask for Ethereum. Useful for interacting with XRPL-based web dApps and DeFi protocols from your desktop browser." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== RESERVE ===== */}
          <RevealSection id="reserve">
            <h2 className="text-2xl font-bold text-text-primary">Understanding the 10 XRP Account Reserve</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              One unique aspect of the XRP Ledger is the <strong className="text-text-primary">account reserve system</strong>. To activate an account on the XRPL and prevent spam, a minimum amount of XRP must be held in the account at all times.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Reserve Type", "Amount", "Purpose"]}
                rows={[
                  ["Base Reserve", "10 XRP", "Required to activate any XRPL account"],
                  ["Owner Reserve", "2 XRP per object", "Required for each trust line, offer, escrow, etc."],
                ]}
                highlightCol={1}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For example, if you have an XRPL account with 3 trust lines (e.g., for RLUSD, a token, and an NFT offer), your total reserve would be 10 + (3 × 2) = <strong className="text-text-primary">16 XRP</strong> that cannot be spent.
            </p>
            <div className="mt-6">
              <HighlightBox title="Good News" variant="success">
                <p>The reserve amounts are set by validator vote and can be changed. They were already reduced from 20 XRP base / 5 XRP owner in 2021. As XRP&apos;s price increases, validators may vote to reduce the reserve further, making it even more accessible. Additionally, the XRPL supports account deletion, which recovers most of the base reserve.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== SECURITY ===== */}
          <RevealSection id="security">
            <h2 className="text-2xl font-bold text-text-primary">Wallet Security Best Practices</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Backup your recovery phrase", desc: "Write it down on paper (or metal for fire/water resistance). Store in multiple secure locations. Never store it digitally — no photos, no cloud storage, no notes apps." },
                { title: "Never share your keys", desc: "No legitimate service will ever ask for your private key or recovery phrase. Anyone who asks is trying to steal your XRP." },
                { title: "Verify addresses carefully", desc: "Always double-check the recipient address before sending XRP. Malware can swap clipboard addresses. Compare the first and last several characters." },
                { title: "Use hardware for large holdings", desc: "If you hold more than a few hundred dollars in XRP, a hardware wallet is a wise investment. The $70-150 cost is trivial compared to the security it provides." },
                { title: "Keep software updated", desc: "Always update your wallet app and device firmware to the latest version. Updates often include critical security patches." },
                { title: "Test with small amounts first", desc: "Before sending large amounts, always do a test transaction with a small amount to verify the address and any required destination tags." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== DESTINATION TAGS ===== */}
          <RevealSection id="tags">
            <h2 className="text-2xl font-bold text-text-primary">Destination Tags Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Destination tags</strong> are numerical identifiers used on the XRP Ledger to route payments to the correct recipient when multiple users share a single XRP address (as is common with exchanges).
            </p>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="I always need a destination tag" reality="Only when sending to exchanges and custodial services. Personal self-custody wallets (Xaman, Ledger) typically don't require destination tags." />
              <MisconceptionCard myth="I forgot the destination tag — my XRP is gone forever" reality="Usually not. Contact the exchange's support team. Most exchanges can manually credit your account if you can provide the transaction hash. It may take time, but funds are rarely lost permanently." />
              <MisconceptionCard myth="Destination tags and memos are the same thing" reality="They're related but different. Destination tags are numeric identifiers for routing. Memos are optional text fields for adding notes. Some services use memos instead of destination tags — always check the specific instructions." />
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq">
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== RELATED ===== */}
          <RevealSection>
            <h2 className="text-2xl font-bold text-text-primary">Related Resources</h2>
            <LearnLinkGrid links={[
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Step-by-step buying guide" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/xrp-ledger-explained", label: "XRPL Explained", desc: "How the ledger works" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Earning yield on XRP" },
              { href: "/best/xrp-wallets", label: "Best XRP Wallets", desc: "Our top wallet picks" },
              { href: "/best/hardware-wallets-for-xrp", label: "Best Hardware Wallets", desc: "Cold storage options" },
              { href: "/answers/how-fast-is-xrp", label: "How Fast is XRP?", desc: "Transaction speed explained" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Ready to Set Up Your XRP Wallet?"
          description="Download Xaman to get started with self-custody, or check out our buying guide if you haven't purchased XRP yet."
          primaryHref="/learn/how-to-buy-xrp"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-ledger-explained"
          secondaryLabel="Learn About XRPL"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 11, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation, Xaman official docs, Ledger support documentation.</em>
        </p>
      </div>
    </>
  );
}
