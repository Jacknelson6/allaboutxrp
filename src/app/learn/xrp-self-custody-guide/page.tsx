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
  title: "XRP Self-Custody Guide: Be Your Own Bank",
  description: "Complete guide to XRP self-custody. Why you should move XRP off exchanges, how to set it up, and best practices.",
  keywords: ["XRP self custody", "XRP not your keys", "self custody XRP", "take XRP off exchange"],
  openGraph: {
    title: "XRP Self-Custody Guide: Be Your Own Bank | AllAboutXRP",
    description: "Complete guide to XRP self-custody. Why you should move XRP off exchanges, how to set it up, and best practices.",
    url: "https://allaboutxrp.com/learn/xrp-self-custody-guide",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Self-Custody Guide | AllAboutXRP",
    description: "Be your own bank — move XRP off exchanges with this complete self-custody guide.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-self-custody-guide" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Self-Custody Guide: Be Your Own Bank",
    description: "Complete guide to taking custody of your own XRP. Why self-custody matters, hardware vs software wallets, setup steps, and security best practices.",
    url: "https://allaboutxrp.com/learn/xrp-self-custody-guide",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Self-Custody Guide" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-self-custody-guide" }),
  buildFAQSchema([
    { question: "What is XRP self-custody?", answer: "Self-custody means you personally control the private keys (secret key or seed phrase) to your XRP wallet — not an exchange or third party. The phrase 'not your keys, not your crypto' emphasizes that XRP on an exchange is controlled by that company, not you." },
    { question: "Why should I move XRP off exchanges?", answer: "Exchange risks include hacking (Mt. Gox, FTX), bankruptcy, account freezes, and regulatory seizures. With self-custody, only you control your funds. No exchange can freeze, lose, or restrict access to your XRP." },
    { question: "What's the best self-custody wallet for XRP?", answer: "For maximum security, use a hardware wallet like Ledger Nano X or Trezor Model T. For mobile convenience, Xaman (formerly XUMM) is the most popular XRP-specific wallet. For a balance, use Xaman paired with a Ledger via Tangem cards." },
    { question: "How much XRP do I need for a self-custody wallet?", answer: "You need a minimum of 10 XRP as a base reserve to activate an XRPL account. This reserve is locked but recoverable if you delete the account. Each additional feature (trust lines, offers) requires 2 XRP more in owner reserves." },
    { question: "What happens to my XRP if I lose my hardware wallet?", answer: "If you have your seed phrase backed up, you can restore your wallet on a new device. The hardware wallet is just an access tool — your XRP lives on the XRP Ledger, not on the device. The seed phrase is the actual key." },
  ]),
];

const faqItems = [
  { q: "What is XRP self-custody?", a: "Self-custody means you personally control the private keys to your XRP wallet. 'Not your keys, not your crypto' — XRP on an exchange is controlled by that company. With self-custody, only you can access your funds." },
  { q: "Why should I move XRP off exchanges?", a: "Exchanges can be hacked (Mt. Gox), go bankrupt (FTX), freeze accounts, or face regulatory action. Self-custody means no third party can freeze, lose, or restrict your XRP access." },
  { q: "What's the best self-custody wallet for XRP?", a: "Hardware wallets (Ledger Nano X, Trezor) offer maximum security. Xaman (formerly XUMM) is the best mobile option. For a balance, pair Xaman with Tangem cards for hardware-level security with mobile convenience." },
  { q: "How much XRP do I need for a self-custody wallet?", a: "A minimum of 10 XRP as base reserve to activate an XRPL account. Each trust line or DEX offer requires an additional 2 XRP owner reserve. These reserves are recoverable if you delete the account." },
  { q: "What happens if I lose my hardware wallet?", a: "Your XRP lives on the ledger, not the device. If you have your seed phrase backed up, you can restore on a new device. The seed phrase is the actual key — the hardware wallet is just the access tool." },
  { q: "Is self-custody safe for beginners?", a: "Yes, with proper setup. Start with a small amount, verify you can send and receive, and secure your seed phrase backup before transferring large amounts. The biggest risk is losing your seed phrase — not hackers." },
];

export default function XRPSelfCustodyGuidePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Self-Custody Guide:"
          titleAccent="Be Your Own Bank"
          subtitle={`"Not your keys, not your crypto." Here's how to take full control of your XRP — step by step.`}
          breadcrumbLabel="XRP Self-Custody Guide"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Self-custody means <em>you</em> hold the keys to your <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> — not an exchange. Get a <a href="https://allaboutxrp.com/go/ledger" className="text-xrp-accent underline decoration-xrp-accent/30">hardware wallet</a>, write down your seed phrase, store it safely in multiple locations, and transfer your XRP from the exchange. You need a minimum <Link href="/learn/xrpl-reserves-explained" className="text-xrp-accent underline decoration-xrp-accent/30">10 XRP reserve</Link> to activate your wallet.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "What It Means", value: "You control your private keys" },
          { label: "Min. Balance", value: "10 XRP (base reserve)" },
          { label: "Best Option", value: "Hardware wallet (Ledger, Trezor)" },
          { label: "Mobile Option", value: "Xaman (formerly XUMM)" },
          { label: "Key Risk", value: "Losing your seed phrase" },
          { label: "Key Benefit", value: "No exchange/counterparty risk" },
        ]} />

        <SectionNav items={[
          { id: "why-self-custody", label: "Why Self-Custody" },
          { id: "wallet-options", label: "Wallet Options" },
          { id: "setup-guide", label: "Setup Guide" },
          { id: "seed-phrase", label: "Seed Phrase Security" },
          { id: "best-practices", label: "Best Practices" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Min Reserve" value="10 XRP" delay={0} />
          <StatPill label="Best Security" value="HW Wallet" delay={0.06} />
          <StatPill label="Exchange Risk" value="Real" delay={0.12} />
          <StatPill label="Your Keys" value="Your Crypto" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="why-self-custody">
            <h2 className="text-2xl font-bold text-text-primary">Why Self-Custody Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When your XRP sits on an exchange, the exchange controls it — not you. You have an IOU from the exchange, not actual ownership. History has shown repeatedly why this matters.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Event", "Year", "Impact"]}
                rows={[
                  ["Mt. Gox Hack", "2014", "850,000 BTC lost — users waited 10+ years for partial recovery"],
                  ["QuadrigaCX Collapse", "2019", "CEO died with the only keys — $190M lost forever"],
                  ["FTX Bankruptcy", "2022", "$8B+ customer funds misappropriated"],
                  ["Celsius Bankruptcy", "2022", "Crypto lending platform froze withdrawals, billions lost"],
                  ["Voyager Bankruptcy", "2022", "3.5M customers lost access to crypto"],
                ]}
                highlightCol={2}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="The Simple Truth" variant="accent">
                <p>If the exchange goes down — hack, bankruptcy, regulatory seizure — your XRP goes with it. <strong className="text-text-primary">Self-custody eliminates this risk entirely.</strong> Your XRP exists on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>, accessible only with your keys.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="wallet-options" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Self-Custody Wallet Options</h2>
            <div className="mt-6">
              <DataTable
                headers={["Wallet", "Type", "Security", "Convenience", "Best For"]}
                rows={[
                  ["Ledger Nano X", "Hardware", "⭐⭐⭐⭐⭐", "⭐⭐⭐", "Large holdings, maximum security"],
                  ["Ledger Nano S Plus", "Hardware", "⭐⭐⭐⭐⭐", "⭐⭐⭐", "Budget hardware option"],
                  ["Trezor Model T", "Hardware", "⭐⭐⭐⭐⭐", "⭐⭐⭐", "Open-source preference"],
                  ["Xaman (XUMM)", "Mobile", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "Daily use, XRPL features"],
                  ["Tangem Cards", "Hardware/NFC", "⭐⭐⭐⭐", "⭐⭐⭐⭐", "Simple hardware security"],
                ]}
                highlightCol={0}
              />
            </div>
            <div className="mt-6">
              <GlowCard
                title="Our Recommendation"
                value="Ledger + Xaman"
                subtitle="Use Ledger for cold storage and Xaman for daily transactions"
              />
            </div>
          </RevealSection>

          <RevealSection id="setup-guide" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step-by-Step Setup Guide</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Choose Your Wallet", desc: "Buy a hardware wallet from the official manufacturer's website only. Never buy used or from third-party sellers — they may be pre-compromised." },
                { title: "2. Set Up the Device", desc: "Follow the manufacturer's setup process. The device will generate a seed phrase (12 or 24 words). Write this down on paper immediately." },
                { title: "3. Secure Your Seed Phrase", desc: "Write the seed phrase on multiple physical copies. Store in separate secure locations (safe, bank deposit box). Never store digitally." },
                { title: "4. Add the XRP App", desc: "Install the XRP app on your hardware wallet through the manufacturer's software (Ledger Live, Trezor Suite)." },
                { title: "5. Send a Test Transaction", desc: "Send a small amount (11-12 XRP to cover the 10 XRP reserve plus fees) from your exchange to your new wallet address." },
                { title: "6. Verify Receipt", desc: "Check the transaction on xrpscan.com. Verify your balance shows correctly in your wallet." },
                { title: "7. Transfer Remaining XRP", desc: "Once confirmed, transfer the rest of your XRP from the exchange. Include the correct destination tag when withdrawing." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="seed-phrase" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Seed Phrase Security</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Your seed phrase is the master key to your XRP. Whoever has it controls your funds. Protecting it is the most important part of self-custody.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "✅ Write on Paper", desc: "Use the cards provided with your hardware wallet. Write clearly in permanent ink." },
                { title: "✅ Metal Backup", desc: "Consider a metal seed phrase backup plate — survives fire, water, and corrosion." },
                { title: "✅ Multiple Locations", desc: "Store copies in 2-3 separate secure locations (home safe, bank deposit box, trusted family)." },
                { title: "✅ Test Recovery", desc: "Before loading large amounts, practice restoring from your seed phrase on a spare device." },
                { title: "❌ Never Store Digitally", desc: "No photos, no cloud storage, no notes apps, no email. Digital = hackable." },
                { title: "❌ Never Share", desc: "No legitimate service will ever ask for your seed phrase. Anyone who asks is a scammer." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="best-practices" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Self-Custody Best Practices</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Keep Some on Exchange for Trading", desc: "Only keep on exchanges what you actively trade. Long-term holdings should be in self-custody." },
                { title: "Use Multiple Wallets", desc: "Consider separate wallets for different purposes — a savings wallet (hardware) and a spending wallet (mobile)." },
                { title: "Regularly Verify Access", desc: "Periodically verify you can still access your wallet and that your seed phrase backups are intact." },
                { title: "Plan for Inheritance", desc: "Create a plan for how trusted family members can access your XRP if something happens to you." },
                { title: "Stay Updated", desc: "Keep your wallet firmware updated. Follow the wallet manufacturer's security advisories." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Compare all wallet options" },
              { href: "/learn/xrp-scams", label: "XRP Scams", desc: "Avoid common scams" },
              { href: "/learn/xrp-phishing-protection", label: "Phishing Protection", desc: "Protect against phishing" },
              { href: "/learn/xrpl-reserves-explained", label: "XRPL Reserves", desc: "Why 10 XRP minimum" },
              { href: "/learn/xrp-destination-tag-guide", label: "Destination Tags", desc: "Don't lose XRP in transfers" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
              { href: "/learn/recover-lost-xrp", label: "Recover Lost XRP", desc: "What if you lose access" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How the XRPL works" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Take Control of Your XRP"
          description="Ready to be your own bank? Start with a hardware wallet and never worry about exchange risk again."
          primaryHref="/learn/xrp-wallets"
          primaryLabel="Compare XRP Wallets →"
          secondaryHref="/learn/how-to-store-xrp-safely"
          secondaryLabel="Storage Best Practices"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em>
        </p>
      </div>
    </>
  );
}
