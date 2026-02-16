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
  title: "Can You Recover Lost XRP? What to Do",
  description: "Lost access to your XRP? Guide to recovery options for lost seed phrases, forgotten passwords, and exchange issues.",
  keywords: ["recover lost XRP", "lost XRP wallet", "forgot XRP seed phrase", "XRP recovery"],
  openGraph: {
    title: "Can You Recover Lost XRP? What to Do | AllAboutXRP",
    description: "Lost access to your XRP? Guide to recovery options for lost seed phrases, forgotten passwords, and exchange issues.",
    url: "https://allaboutxrp.com/learn/recover-lost-xrp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Lost XRP Guide | AllAboutXRP",
    description: "Lost your XRP? Recovery options for lost seed phrases, forgotten passwords, and exchange issues.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/recover-lost-xrp" },
};

const schemas = [
  buildArticleSchema({
    headline: "Can You Recover Lost XRP? What to Do",
    description: "Comprehensive guide to recovering lost XRP — options for lost seed phrases, forgotten passwords, exchange recovery, and missing destination tags.",
    url: "https://allaboutxrp.com/learn/recover-lost-xrp",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Recover Lost XRP" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/recover-lost-xrp" }),
  buildFAQSchema([
    { question: "Can you recover XRP if you lost your seed phrase?", answer: "If you've lost your seed phrase and have no other backup of your secret key, the XRP is likely permanently inaccessible. No one — not Ripple, not the XRPL Foundation — can recover it. This is why securely backing up your seed phrase is critical." },
    { question: "What if I forgot my destination tag when sending XRP?", answer: "If you sent XRP to an exchange without a destination tag, contact the exchange's support team immediately. Most major exchanges can manually credit your account, though the process may take days to weeks and some charge a recovery fee." },
    { question: "Can I recover XRP from a dead exchange?", answer: "It depends on the exchange's legal proceedings. If the exchange went through bankruptcy (like FTX), you may be able to file a claim through the bankruptcy trustee. Keep all records of your holdings, emails, and transaction history." },
    { question: "Is there a way to brute-force an XRP wallet?", answer: "No. XRP wallets use cryptographic key pairs with 2^256 possible combinations. It would take longer than the age of the universe to brute-force even one wallet. Services claiming to brute-force wallets are scams." },
    { question: "Can Ripple recover my lost XRP?", answer: "No. Ripple has no control over individual XRP wallets. The XRP Ledger is decentralized — no single entity can access, freeze, or recover funds in someone else's wallet. Only the holder of the secret key can control the funds." },
  ]),
];

const faqItems = [
  { q: "Can you recover XRP if you lost your seed phrase?", a: "If you've lost your seed phrase and have no other backup of your secret key, the XRP is likely permanently inaccessible. No one — not Ripple, not the XRPL Foundation — can recover it. This is why securely backing up your seed phrase with multiple physical copies is critical." },
  { q: "What if I forgot my destination tag when sending XRP?", a: "Contact the exchange's support team immediately with your transaction hash, the amount sent, your account details, and when you sent it. Most major exchanges can manually credit your account, though the process may take days to weeks." },
  { q: "Can I recover XRP from a dead exchange?", a: "It depends on the exchange's legal proceedings. For bankruptcies (like FTX), you may file a claim through the bankruptcy trustee. Keep all records of your holdings, emails, and transaction history as evidence." },
  { q: "Is there a way to brute-force an XRP wallet?", a: "No. XRP uses cryptographic key pairs with 2^256 possible combinations. Brute-forcing is mathematically impossible. Any service claiming to do this is a scam trying to steal your money." },
  { q: "Can Ripple recover my lost XRP?", a: "No. Ripple has no control over individual wallets. The XRP Ledger is decentralized — only the holder of the secret key can control the funds. No entity can access, freeze, or recover funds in someone else's wallet." },
  { q: "What about XRP recovery services I see advertised?", a: "The vast majority of 'crypto recovery services' are scams. They charge upfront fees and deliver nothing. Legitimate recovery help is limited to specific scenarios like exchange support or wallet software bugs — never seed phrase recovery." },
];

export default function RecoverLostXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Can You Recover Lost XRP?"
          titleAccent="What to Do"
          subtitle="Lost access to your XRP can feel devastating. Here's an honest guide to what's recoverable, what's not, and the exact steps to try."
          breadcrumbLabel="Recover Lost XRP"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Recovery depends on <em>how</em> you lost access. Exchange password forgotten? Usually recoverable. Lost seed phrase with no backup? Likely gone forever. Missing <Link href="/learn/xrp-destination-tag-guide" className="text-xrp-accent underline decoration-xrp-accent/30">destination tag</Link>? Contact the exchange. The best strategy is prevention — use a <a href="https://allaboutxrp.com/go/ledger" className="text-xrp-accent underline decoration-xrp-accent/30">hardware wallet</a> and keep multiple secure backups of your seed phrase.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Lost Seed Phrase", value: "Usually unrecoverable" },
          { label: "Exchange Password", value: "Recoverable via support" },
          { label: "Missing Dest. Tag", value: "Recoverable (contact exchange)" },
          { label: "Scam/Theft", value: "Irreversible transactions" },
          { label: "Prevention", value: "Backup seed phrase + hardware wallet" },
        ]} />

        <SectionNav items={[
          { id: "scenarios", label: "Loss Scenarios" },
          { id: "seed-phrase", label: "Lost Seed Phrase" },
          { id: "exchange", label: "Exchange Issues" },
          { id: "destination-tag", label: "Missing Dest. Tag" },
          { id: "prevention", label: "Prevention" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Seed Lost" value="Likely Gone" delay={0} />
          <StatPill label="Exchange" value="Recoverable" delay={0.06} />
          <StatPill label="Dest. Tag" value="Contact Exch." delay={0.12} />
          <StatPill label="Prevention" value="Backup!" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="scenarios">
            <h2 className="text-2xl font-bold text-text-primary">Recovery by Scenario</h2>
            <div className="mt-6">
              <DataTable
                headers={["Scenario", "Recovery Possible?", "What to Do"]}
                rows={[
                  ["Lost seed phrase / secret key", "❌ Usually no", "Check all physical backups, old devices, cloud storage"],
                  ["Forgotten exchange password", "✅ Yes", "Use exchange password reset / identity verification"],
                  ["Exchange shut down / bankrupt", "⚠️ Maybe", "File claim with bankruptcy trustee, keep records"],
                  ["Missing destination tag", "✅ Usually yes", "Contact exchange support with tx hash"],
                  ["Sent to wrong address", "❌ No", "XRP transactions are irreversible"],
                  ["Scam / phishing theft", "❌ No", "Report to authorities, warn others"],
                  ["Hardware wallet damaged", "✅ Yes (with seed)", "Restore from seed phrase on new device"],
                  ["Old wallet software no longer works", "✅ Yes (with key)", "Import secret key into new wallet software"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="seed-phrase" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Lost Seed Phrase Recovery Attempts</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              If you&apos;ve lost your seed phrase, here are places to check before giving up — though chances depend entirely on whether you stored a backup somewhere.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Physical Locations", desc: "Check safes, drawers, notebooks, filing cabinets. Many people write seed phrases on paper and forget where they put them." },
                { title: "Old Devices", desc: "Check old phones, laptops, USB drives, and external hard drives for wallet files or notes containing keys." },
                { title: "Cloud Storage", desc: "Check Google Drive, iCloud, Dropbox, and email drafts. Some people saved backups digitally (not recommended, but may help now)." },
                { title: "Photos", desc: "Check your photo library — some people photograph their seed phrase cards. Search for images from the time you created the wallet." },
                { title: "Password Managers", desc: "Check 1Password, LastPass, Bitwarden — you may have stored the seed phrase or key as a secure note." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Warning: Recovery Scams" variant="warning">
                <p><strong className="text-text-primary">Beware of &quot;crypto recovery services.&quot;</strong> The vast majority are scams that charge upfront fees and deliver nothing. No legitimate service can recover a lost seed phrase. If they ask for money upfront or claim to have &quot;special tools,&quot; they are scamming you.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="exchange" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Exchange Account Recovery</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              If your XRP is on an exchange and you&apos;ve lost access to your account, recovery is usually possible through the exchange&apos;s support process.
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Password Reset", desc: "Use the exchange's standard password reset process via email or phone verification." },
                { title: "2FA Recovery", desc: "If you lost your 2FA device, most exchanges have a recovery process requiring identity verification." },
                { title: "Identity Verification", desc: "Exchanges may require photo ID, selfie verification, or video call to prove account ownership." },
                { title: "Bankrupt Exchange Claims", desc: "For defunct exchanges, file claims through the bankruptcy court. Keep all records of deposits and holdings." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="destination-tag" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Missing Destination Tag Recovery</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              One of the most common XRP issues: sending to an exchange without a <Link href="/learn/xrp-destination-tag-guide" className="text-xrp-accent underline decoration-xrp-accent/30">destination tag</Link>. The good news: this is usually recoverable.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Contact Exchange Support", desc: "Open a support ticket with the exchange. Provide your transaction hash, the amount, your account email, and the destination address." },
                { title: "Provide Transaction Proof", desc: "Include the XRPL transaction hash (found on any XRPL explorer like xrpscan.com or bithomp.com)." },
                { title: "Wait Patiently", desc: "Manual crediting can take 1-4 weeks depending on the exchange. Some charge a small recovery fee." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="prevention" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Preventing Future Loss</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Multiple Seed Backups", desc: "Store your seed phrase in at least 2-3 separate physical locations. Use metal backup plates for fire/water resistance." },
                { title: "Hardware Wallet", desc: "Use a Ledger or Trezor. Even if the device breaks, you can restore from your seed phrase on a new device." },
                { title: "Test Small Amounts First", desc: "Always send a small test transaction before sending large amounts. Verify destination tags." },
                { title: "Document Everything", desc: "Keep records of your wallet addresses, which exchange accounts you have, and how to access backups." },
              ]} />
            </div>
            <div className="mt-6">
              <GlowCard
                title="Prevention"
                value="> Recovery"
                subtitle="A $79 hardware wallet and proper backups prevent 99% of loss scenarios"
              />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-scams", label: "XRP Scams", desc: "Common scams to avoid" },
              { href: "/learn/xrp-phishing-protection", label: "Phishing Protection", desc: "Protect your wallet" },
              { href: "/learn/xrp-self-custody-guide", label: "Self-Custody Guide", desc: "Be your own bank" },
              { href: "/learn/xrp-destination-tag-guide", label: "Destination Tags", desc: "Never miss a tag again" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Best wallets compared" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Prevent Future Loss"
          description="Don't let it happen again. Set up proper self-custody with a hardware wallet and secure backups."
          primaryHref="/learn/xrp-self-custody-guide"
          primaryLabel="Self-Custody Guide →"
          secondaryHref="/learn/xrp-wallets"
          secondaryLabel="Best XRP Wallets"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em>
        </p>
      </div>
    </>
  );
}
