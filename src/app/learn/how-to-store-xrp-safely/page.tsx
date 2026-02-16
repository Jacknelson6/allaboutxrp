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
  title: "How to Store XRP Safely: Complete Security Guide | AllAboutXRP",
  description: "Learn how to store XRP safely using hardware wallets, cold storage, and best security practices. Complete guide to protecting your XRP investment.",
  keywords: ["how to store XRP","XRP cold storage","XRP hardware wallet","store XRP safely","XRP security"],
  openGraph: {
    title: "How to Store XRP Safely: Complete Security Guide",
    description: "Hardware wallets, cold storage, and security best practices for your XRP.",
    url: "https://allaboutxrp.com/learn/how-to-store-xrp-safely",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "How to Store XRP Safely: Complete Security Guide", description: "Hardware wallets, cold storage, and security best practices for your XRP." },
  alternates: { canonical: "https://allaboutxrp.com/learn/how-to-store-xrp-safely" },
};

const schemas = [
  buildArticleSchema({ headline: "How to Store XRP Safely: Complete Security Guide", description: "Learn how to store XRP safely using hardware wallets, cold storage, and best security practices. Complete guide to protecting your XRP investment.", url: "https://allaboutxrp.com/learn/how-to-store-xrp-safely", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "How to Store XRP Safely" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-to-store-xrp-safely" }),
  buildFAQSchema([
    {
        "question": "What's the safest way to store XRP?",
        "answer": "A hardware wallet like Ledger Nano X provides the highest security. Your private keys stay offline and protected from hacking."
    },
    {
        "question": "What is the XRP reserve requirement?",
        "answer": "Every XRP wallet must maintain a 10 XRP minimum reserve to remain active on the ledger. This is a spam-prevention mechanism."
    },
    {
        "question": "Can I store XRP on a Ledger?",
        "answer": "Yes. Ledger Nano X and Nano S Plus both support XRP natively. Set up through Ledger Live software."
    },
    {
        "question": "What happens if I lose my hardware wallet?",
        "answer": "You can recover your XRP using the 24-word recovery phrase on a new device. Without this phrase, your funds are lost permanently."
    },
    {
        "question": "Is Xaman wallet safe?",
        "answer": "Yes, Xaman is a reputable XRPL-native wallet with strong security. It stores keys locally on your device and supports biometric authentication."
    }
]),
];

const faqItems = [
  {
    "q": "What's the safest way to store XRP?",
    "a": "A hardware wallet like Ledger Nano X provides the highest security. Your private keys stay offline and protected from hacking."
  },
  {
    "q": "What is the XRP reserve requirement?",
    "a": "Every XRP wallet must maintain a 10 XRP minimum reserve to remain active on the ledger. This is a spam-prevention mechanism."
  },
  {
    "q": "Can I store XRP on a Ledger?",
    "a": "Yes. Ledger Nano X and Nano S Plus both support XRP natively. Set up through Ledger Live software."
  },
  {
    "q": "What happens if I lose my hardware wallet?",
    "a": "You can recover your XRP using the 24-word recovery phrase on a new device. Without this phrase, your funds are lost permanently."
  },
  {
    "q": "Is Xaman wallet safe?",
    "a": "Yes, Xaman is a reputable XRPL-native wallet with strong security. It stores keys locally on your device and supports biometric authentication."
  }
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How to Store XRP Safely" titleAccent="Complete Security Guide" subtitle="Learn the safest ways to store your XRP — from hardware wallets to cold storage. Protect your investment from hacks, scams, and loss." breadcrumbLabel="How to Store XRP Safely">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Storing XRP safely means moving it off exchanges and into wallets you control. <strong className="text-text-primary">Hardware wallets</strong> like Ledger and Trezor offer the best security for long-term holders. For everyday use, the <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">Xaman wallet</Link> provides a good balance of security and convenience. Never share your secret keys, always enable 2FA on exchanges, and consider splitting large holdings across multiple wallets.</p>
        </TLDRBox>

        <KeyFactsTable facts={[{"label":"Safest Method","value":"Hardware wallet (Ledger)"},{"label":"Reserve Requirement","value":"10 XRP minimum"},{"label":"Backup","value":"24-word recovery phrase"},{"label":"Exchange Risk","value":"Not your keys, not your crypto"},{"label":"2FA","value":"Always enable on exchanges"},{"label":"Best Mobile Wallet","value":"Xaman (formerly Xumm)"}]} />

        <SectionNav items={[{"id":"wallet-types","label":"Wallet Types"},{"id":"hardware-wallets","label":"Hardware Wallets"},{"id":"software-wallets","label":"Software Wallets"},{"id":"exchange-storage","label":"Exchange Storage"},{"id":"security-tips","label":"Security Tips"},{"id":"faq","label":"FAQ"}]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Best Security" value="Hardware" delay={0.00} />
          <StatPill label="Reserve" value="10 XRP" delay={0.06} />
          <StatPill label="Backup" value="24 words" delay={0.12} />
          <StatPill label="Cost" value="$79+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          
          <RevealSection id="wallet-types">
            <h2 className="text-2xl font-bold text-text-primary">Types of XRP Wallets</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              There are three main ways to store XRP: <strong className="text-text-primary">hardware wallets</strong> (most secure), <strong className="text-text-primary">software wallets</strong> (convenient), and <strong className="text-text-primary">exchange wallets</strong> (least secure). The right choice depends on how much XRP you hold and how often you trade.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={3} items={[
                { title: "Hardware Wallets", desc: "Physical devices that store keys offline. Best for large holdings. Ledger Nano X, Trezor Model T." },
                { title: "Software Wallets", desc: "Apps on your phone or computer. Good for daily use. Xaman, Trust Wallet, Exodus." },
                { title: "Exchange Wallets", desc: "Kept on exchanges like Coinbase or Binance. Convenient but risky — you don't control the keys." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="hardware-wallets" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Hardware Wallets for XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Hardware wallets are the gold standard for <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP storage</Link>. They keep your private keys on a physical device that never connects directly to the internet. Even if your computer is compromised, your XRP remains safe.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Wallet", "Price", "XRP Support", "Best For"]}
                rows={[
                  ["Ledger Nano X", "$149", "Native", "Most users"],
                  ["Ledger Nano S Plus", "$79", "Native", "Budget option"],
                  ["Trezor Model T", "$219", "Via suite", "Multi-crypto"],
                  ["Tangem Card", "$55", "Native XRPL", "Simple cold storage"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="software-wallets" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Software Wallets</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For everyday transactions and <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DeFi</Link> access, software wallets offer the best balance. Xaman (formerly Xumm) is the most popular XRPL-native wallet with full support for the DEX, NFTs, and token management.
            </p>
            <div className="mt-6">
              <IconList items={[
                { title: "Xaman (Xumm)", desc: "The premier XRPL wallet. Full DEX access, NFT support, token management. Available on iOS and Android." },
                { title: "Trust Wallet", desc: "Multi-chain wallet with XRP support. Good for users who hold multiple cryptocurrencies." },
                { title: "Exodus", desc: "Desktop and mobile wallet with a beautiful interface. Built-in exchange feature for swapping tokens." },
                { title: "Crossmark", desc: "Browser extension wallet for XRPL. Great for interacting with XRPL dApps and the DEX." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="exchange-storage" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Should You Store XRP on an Exchange?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Keeping XRP on exchanges like <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">Coinbase or Binance</Link> is convenient for trading but risky for long-term storage. Exchange hacks, freezes, and bankruptcies (like FTX) have cost investors billions. The crypto rule: <strong className="text-text-primary">"Not your keys, not your crypto."</strong>
            </p>
            <div className="mt-6">
              <HighlightBox title="When Exchange Storage Is OK" variant="accent">
                <p>If you're actively trading small amounts, exchange storage is fine. But for any significant holding you plan to keep long-term, move it to a <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">personal wallet</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="security-tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Essential Security Tips</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "Write down your recovery phrase", desc: "Store your 24-word seed phrase on paper or metal. Never digitally — no photos, no cloud storage, no text files." },
                { title: "Enable 2FA everywhere", desc: "Use an authenticator app (not SMS) for all exchange and wallet accounts. Google Authenticator or Authy recommended." },
                { title: "Verify addresses carefully", desc: "Always double-check the destination address when sending XRP. Use destination tags when required. Transactions are irreversible." },
                { title: "Beware of scams", desc: "No legitimate entity will ever ask for your secret keys. XRP giveaway scams are everywhere — they're always fake." },
                { title: "Split large holdings", desc: "Don't keep all XRP in one wallet. Distribute across hardware wallet, software wallet, and possibly a small amount on exchange." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/get-started", label: "Get Started with XRP", desc: "Buy your first XRP" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Step-by-step buying guide" },
              { href: "/learn/how-to-send-xrp", label: "How to Send XRP", desc: "Transfer XRP quickly" },
              { href: "/learn/crypto-wallets-for-xrp", label: "Crypto Wallets for XRP", desc: "Best wallet comparison" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets Guide", desc: "Top wallet picks" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Secure Your XRP Today" description="Don't leave your XRP at risk. Get a hardware wallet and take control of your crypto security." primaryHref="/learn/xrp-wallets" primaryLabel="XRP Wallets Guide →" secondaryHref="/learn/how-to-buy-xrp" secondaryLabel="Buy XRP" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
