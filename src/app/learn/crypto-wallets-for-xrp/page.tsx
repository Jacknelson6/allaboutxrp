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
  title: "Best Crypto Wallets for XRP in 2026: Complete Guide | AllAboutXRP",
  description: "Best crypto wallets for XRP — hardware, software, and mobile wallet reviews with security ratings, features, and setup guides.",
  keywords: ["crypto wallets for XRP","best XRP wallet","XRP wallet 2026","XRPL wallet","hardware wallet XRP"],
  openGraph: {
    title: "Best Crypto Wallets for XRP in 2026: Complete Guide",
    description: "Hardware, software, and mobile wallet reviews for XRP with security ratings and setup guides.",
    url: "https://allaboutxrp.com/learn/crypto-wallets-for-xrp",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Best Crypto Wallets for XRP in 2026", description: "Complete guide to the best wallets for storing XRP safely." },
  alternates: { canonical: "https://allaboutxrp.com/learn/crypto-wallets-for-xrp" },
};

const schemas = [
  buildArticleSchema({ headline: "Best Crypto Wallets for XRP in 2026: Complete Guide", description: "Best crypto wallets for XRP — hardware, software, and mobile reviews with security ratings.", url: "https://allaboutxrp.com/learn/crypto-wallets-for-xrp", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Wallets for XRP" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/crypto-wallets-for-xrp" }),
  buildFAQSchema([
    { question: "What's the best wallet for XRP?", answer: "For maximum security: Ledger Nano X or Trezor Safe 3 (hardware). For convenience: Xaman (XUMM) or Trust Wallet (mobile). For XRPL features: Xaman." },
    { question: "Do I need a special wallet for XRP?", answer: "No, but the wallet must support XRP/XRPL. Not all wallets do. Major hardware and software wallets support XRP." },
    { question: "What's the 10 XRP wallet reserve?", answer: "XRPL requires a 10 XRP minimum balance to activate an account. This reserve prevents ledger spam and is locked until you close the account." },
    { question: "Can I use the same wallet for XRP and Bitcoin?", answer: "Yes. Multi-asset wallets like Ledger, Trezor, and Trust Wallet support both XRP and Bitcoin (and many other assets)." },
    { question: "Are mobile wallets safe for XRP?", answer: "Reasonably safe for moderate amounts. For large holdings ($10K+), use a hardware wallet. Mobile wallets are vulnerable to phone theft/malware." },
    { question: "What happens if I lose my wallet?", answer: "If you have your recovery phrase (12-24 words), you can restore your wallet on any compatible device. If you lose the phrase, your XRP is gone forever." },
  ]),
];

const faqItems = [
  { q: "What's the best wallet for XRP?", a: "For maximum security: Ledger Nano X or Trezor Safe 3 (hardware). For convenience: Xaman (XUMM) or Trust Wallet (mobile). For XRPL features: Xaman." },
  { q: "Do I need a special wallet for XRP?", a: "No, but the wallet must support XRP/XRPL. Not all wallets do. Major hardware and software wallets support XRP." },
  { q: "What's the 10 XRP wallet reserve?", a: "XRPL requires a 10 XRP minimum balance to activate an account. This reserve prevents ledger spam and is locked until you close the account." },
  { q: "Can I use the same wallet for XRP and Bitcoin?", a: "Yes. Multi-asset wallets like Ledger, Trezor, and Trust Wallet support both XRP and Bitcoin (and many other assets)." },
  { q: "Are mobile wallets safe for XRP?", a: "Reasonably safe for moderate amounts. For large holdings ($10K+), use a hardware wallet. Mobile wallets are vulnerable to phone theft/malware." },
  { q: "What happens if I lose my wallet?", a: "If you have your recovery phrase (12-24 words), you can restore your wallet on any compatible device. If you lose the phrase, your XRP is gone forever." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="Best Crypto Wallets for XRP" titleAccent="Complete 2026 Guide" subtitle="Hardware, software, and mobile wallet reviews — find the right wallet for your XRP based on security, features, and ease of use." breadcrumbLabel="Wallets for XRP">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>For maximum security, use a <strong className="text-text-primary">hardware wallet</strong> (Ledger or Trezor). For daily use, <strong className="text-text-primary">Xaman (XUMM)</strong> is the best XRPL-native mobile wallet. Always <Link href="/learn/how-to-store-xrp-safely" className="text-xrp-accent underline decoration-xrp-accent/30">secure your recovery phrase</Link>. Remember: XRPL requires a <Link href="/learn/xrp-addresses-and-keys" className="text-xrp-accent underline decoration-xrp-accent/30">10 XRP reserve</Link> to activate accounts.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Best Security", value: "Ledger Nano X" },
          { label: "Best XRPL", value: "Xaman (XUMM)" },
          { label: "Best Multi-Asset", value: "Trust Wallet" },
          { label: "Account Reserve", value: "10 XRP minimum" },
          { label: "Backup", value: "Recovery phrase (24 words)" },
          { label: "Never Share", value: "Private keys or seed phrase" },
        ]} />

        <SectionNav items={[
          { id: "types", label: "Wallet Types" },
          { id: "hardware", label: "Hardware" },
          { id: "software", label: "Software" },
          { id: "comparison", label: "Comparison" },
          { id: "setup", label: "Setup Tips" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Hardware" value="Most Secure" delay={0.00} />
          <StatPill label="Software" value="Most Easy" delay={0.06} />
          <StatPill label="Reserve" value="10 XRP" delay={0.12} />
          <StatPill label="Backup" value="Essential" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="types">
            <h2 className="text-2xl font-bold text-text-primary">Wallet Types Explained</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              { title: "Hardware Wallets", desc: "Physical devices that store keys offline. Immune to online hacks. Best for large holdings and long-term storage." },
              { title: "Software Wallets", desc: "Apps on phone or computer. Convenient for regular use. Less secure than hardware but good for moderate amounts." },
              { title: "Exchange Wallets", desc: "Keeping XRP on Coinbase, Binance, etc. Easiest but you don't control keys. Risk of exchange hack or freeze." },
              { title: "Paper Wallets", desc: "Keys printed on paper. Fully offline but fragile (fire, water, loss). Complex to set up correctly." },
            ]} /></div>
          </RevealSection>

          <RevealSection id="hardware" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Hardware Wallets</h2>
            <div className="mt-6"><DataTable headers={["Wallet","Price","XRP Support","XRPL Features","Rating"]} rows={[
              ["Ledger Nano X","~$149","Full","Basic send/receive","9.5/10"],
              ["Ledger Nano S Plus","~$79","Full","Basic send/receive","9/10"],
              ["Trezor Safe 3","~$79","Full","Basic send/receive","8.5/10"],
              ["Tangem","~$55","Full","NFC card format","8/10"],
            ]} highlightCol={4} /></div>
            <div className="mt-6"><HighlightBox title="Our Pick: Ledger Nano X" variant="info"><p>The Ledger Nano X offers Bluetooth connectivity, supports 5,500+ assets including XRP, and pairs with the Ledger Live app. It's the gold standard for crypto self-custody.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="software" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Software Wallets</h2>
            <div className="mt-6"><DataTable headers={["Wallet","Platform","XRPL Features","Best For","Rating"]} rows={[
              ["Xaman (XUMM)","iOS/Android","Full DEX, trust lines, NFTs","XRPL power users","9.5/10"],
              ["Trust Wallet","iOS/Android","Basic send/receive","Multi-asset users","8.5/10"],
              ["Exodus","Desktop/Mobile","Basic send/receive","Beautiful UI","8/10"],
              ["Crossmark","Browser","Full XRPL","Browser-based DeFi","8/10"],
            ]} highlightCol={4} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><strong className="text-text-primary">Xaman</strong> is the standout for XRP users. Built specifically for the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>, it supports the <Link href="/learn/how-to-use-xrpl-dex" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DEX</Link>, trust lines, NFTs, and more.</p>
          </RevealSection>

          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Quick Comparison</h2>
            <div className="mt-6"><DataTable headers={["Factor","Hardware","Software","Exchange"]} rows={[
              ["Security","Excellent","Good","Medium"],
              ["Convenience","Low","High","Highest"],
              ["Cost","$55-149","Free","Free"],
              ["Key Control","You","You","Exchange"],
              ["Best For","$10K+","$500-$10K","<$500 / trading"],
            ]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="setup" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Wallet Setup Tips</h2>
            <div className="mt-6"><IconList items={[
              { title: "Write down recovery phrase on paper", desc: "Never digitally. No photos, no cloud storage, no text files. Paper only, stored in a safe place." },
              { title: "Test with a small amount first", desc: "Send a tiny amount of XRP before transferring your full balance. Verify the address." },
              { title: "Remember the 10 XRP reserve", desc: "Your first 10 XRP are locked as an account reserve. Plan accordingly when transferring." },
              { title: "Use destination tags for exchanges", desc: "When sending TO an exchange, include the destination tag or your XRP may be lost." },
              { title: "Enable all security features", desc: "PIN, biometrics, 2FA — use every security layer available." },
              { title: "Buy hardware wallets from official sources only", desc: "Never buy second-hand or from Amazon third-party sellers. Tampered devices steal funds." },
            ]} variant="check" /></div>
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
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
              { href: "/learn/how-to-send-xrp", label: "How to Send XRP", desc: "Transfer XRP quickly" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets Guide", desc: "Top wallet picks" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Secure Your XRP" description="The best investment you can make is in security. Choose the right wallet." primaryHref="/learn/how-to-store-xrp-safely" primaryLabel="Storage Guide →" secondaryHref="/learn/how-to-buy-xrp" secondaryLabel="Buy XRP" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
