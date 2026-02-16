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
  title: "XRP Phishing Attacks: Protect Your Wallet",
  description: "How XRP phishing attacks work and how to protect yourself. Spot fake sites, secure your wallet, and report scams.",
  keywords: ["XRP phishing", "XRP wallet phishing", "XRP fake website", "protect XRP wallet"],
  openGraph: {
    title: "XRP Phishing Attacks: Protect Your Wallet | AllAboutXRP",
    description: "How XRP phishing attacks work and how to protect yourself. Spot fake sites, secure your wallet, and report scams.",
    url: "https://allaboutxrp.com/learn/xrp-phishing-protection",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Phishing Protection | AllAboutXRP",
    description: "Protect your XRP wallet from phishing attacks — spot fake sites, secure your keys, report scams.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-phishing-protection" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Phishing Attacks: Protect Your Wallet",
    description: "Complete guide to identifying and preventing XRP phishing attacks. Learn to spot fake websites, protect your wallet credentials, and report phishing attempts.",
    url: "https://allaboutxrp.com/learn/xrp-phishing-protection",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Phishing Protection" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-phishing-protection" }),
  buildFAQSchema([
    { question: "What is XRP phishing?", answer: "XRP phishing is a social engineering attack where scammers create fake websites, emails, or messages that mimic legitimate XRP services (wallets, exchanges, Ripple) to trick you into entering your secret keys, seed phrases, or login credentials." },
    { question: "How do I spot a phishing website?", answer: "Check the URL carefully for misspellings or extra characters. Look for HTTPS and valid SSL certificates. Legitimate sites like xaman.app, xrpl.org, and major exchanges have specific domains. Use bookmarks instead of clicking links. Check the domain registration date — phishing sites are usually newly registered." },
    { question: "Can a hardware wallet protect against phishing?", answer: "Yes, a hardware wallet is the best protection against phishing. Even if you visit a phishing site, your private keys remain on the hardware device. Transactions require physical confirmation on the device, so a phishing site cannot drain your wallet without your explicit approval on the hardware." },
    { question: "What should I do if I entered my seed phrase on a suspicious site?", answer: "Immediately create a new wallet and transfer all your XRP and tokens to it. Your compromised wallet should be considered permanently insecure. Do not wait — attackers often have automated bots that drain wallets within minutes of obtaining seed phrases." },
    { question: "How do XRP email phishing scams work?", answer: "Scammers send emails pretending to be from exchanges, Ripple, or wallet providers. They may claim your account needs verification, there's a security issue, or you've received an airdrop. The emails contain links to fake websites designed to capture your credentials." },
  ]),
];

const faqItems = [
  { q: "What is XRP phishing?", a: "XRP phishing is a social engineering attack where scammers create fake websites, emails, or messages mimicking legitimate XRP services to trick you into entering your secret keys, seed phrases, or login credentials. The fake sites look nearly identical to real ones." },
  { q: "How do I spot a phishing website?", a: "Check the URL carefully for misspellings or extra characters. Look for HTTPS and valid SSL certificates. Legitimate sites like xaman.app, xrpl.org, and major exchanges have specific domains. Always use bookmarks instead of clicking links. Check the domain registration date — phishing sites are usually newly registered." },
  { q: "Can a hardware wallet protect against phishing?", a: "Yes — a hardware wallet is the best protection. Even if you visit a phishing site, your private keys remain on the hardware device. Transactions require physical confirmation on the device, preventing unauthorized access." },
  { q: "What should I do if I entered my seed phrase on a suspicious site?", a: "Immediately create a new wallet and transfer all your XRP and tokens to the new address. Your compromised wallet should be considered permanently insecure. Attackers often have automated bots that drain wallets within minutes." },
  { q: "How do XRP email phishing scams work?", a: "Scammers send emails pretending to be from exchanges, Ripple, or wallet providers claiming your account needs verification or there's a security issue. The emails contain links to fake websites designed to capture your credentials." },
  { q: "Are browser extensions safe for managing XRP?", a: "Only use official, well-reviewed browser extensions from verified sources. Malicious browser extensions can read your clipboard, inject code into web pages, and capture your credentials. Use a hardware wallet as an additional security layer." },
];

export default function XRPPhishingProtectionPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Phishing Attacks:"
          titleAccent="Protect Your Wallet"
          subtitle="Phishing is the #1 way people lose their XRP. Learn exactly how these attacks work and how to make yourself virtually immune."
          breadcrumbLabel="XRP Phishing Protection"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Phishing attacks trick you into entering your credentials on fake websites. The best defenses: use a <a href="https://allaboutxrp.com/go/ledger" className="text-xrp-accent underline decoration-xrp-accent/30">hardware wallet</a>, bookmark legitimate sites, never click links from emails or DMs, and never enter your seed phrase anywhere online. Learn about <Link href="/learn/xrp-scams" className="text-xrp-accent underline decoration-xrp-accent/30">common XRP scams</Link> and <Link href="/learn/xrp-self-custody-guide" className="text-xrp-accent underline decoration-xrp-accent/30">self-custody</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Attack Type", value: "Social engineering via fake websites" },
          { label: "Primary Target", value: "Seed phrases and private keys" },
          { label: "Best Defense", value: "Hardware wallet + bookmarks" },
          { label: "Response Time", value: "Minutes (bots drain wallets instantly)" },
          { label: "Recovery", value: "Transfer to new wallet immediately" },
        ]} />

        <SectionNav items={[
          { id: "how-phishing-works", label: "How It Works" },
          { id: "types", label: "Types of Phishing" },
          { id: "spot-phishing", label: "Spotting Attacks" },
          { id: "protection", label: "Protection Guide" },
          { id: "compromised", label: "If Compromised" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Attack Vector" value="Fake Sites" delay={0} />
          <StatPill label="Target" value="Seed Phrases" delay={0.06} />
          <StatPill label="Best Shield" value="HW Wallet" delay={0.12} />
          <StatPill label="Drain Speed" value="< 1 min" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-phishing-works">
            <h2 className="text-2xl font-bold text-text-primary">How XRP Phishing Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Phishing attacks don&apos;t hack the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> — they hack <em>you</em>. Attackers create pixel-perfect replicas of legitimate services and trick you into entering your most sensitive credentials.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Step 1: The Bait", desc: "You receive an email, DM, search result, or social media ad that looks legitimate. It creates urgency — \"verify your account\" or \"claim your airdrop.\"" },
                { title: "Step 2: The Fake Site", desc: "Clicking the link takes you to a pixel-perfect copy of a real website. The URL is slightly different (one character off) but the page looks identical." },
                { title: "Step 3: Credential Capture", desc: "You enter your seed phrase, secret key, or exchange login. The phishing site captures these credentials instantly." },
                { title: "Step 4: Wallet Drain", desc: "Automated bots use your stolen credentials to drain your wallet within seconds. XRP transactions are irreversible." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="types" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Types of XRP Phishing Attacks</h2>
            <div className="mt-6">
              <DataTable
                headers={["Type", "How It Works", "Example"]}
                rows={[
                  ["Website Phishing", "Fake copies of wallets/exchanges", "xaman-app.com instead of xaman.app"],
                  ["Email Phishing", "Fake security alerts from \"your exchange\"", "\"Suspicious login detected — verify now\""],
                  ["Search Engine Phishing", "Paid ads for fake wallet/exchange sites", "Google ad for \"Xaman wallet\" leading to fake site"],
                  ["DM Phishing", "Direct messages with malicious links", "\"Support\" messaging you about an issue"],
                  ["QR Code Phishing", "Malicious QR codes replacing legitimate ones", "Fake QR codes in YouTube giveaway streams"],
                  ["Clipboard Hijacking", "Malware replaces copied XRP addresses", "You copy one address but a different one gets pasted"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="spot-phishing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Spot Phishing Attempts</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Check the URL Letter by Letter", desc: "Phishing URLs use subtle tricks: rn looks like m, l looks like 1, extra hyphens or subdomains." },
                { title: "Look for HTTPS + Valid Certificate", desc: "While HTTPS alone doesn't guarantee legitimacy, its absence is a clear red flag." },
                { title: "Verify Domain Age", desc: "Use whois to check when the domain was registered. Phishing sites are usually days or weeks old." },
                { title: "Grammar and Design Errors", desc: "Phishing sites often have subtle typography issues, broken links, or inconsistent branding." },
                { title: "Urgency and Pressure", desc: "\"Act now or lose access\" — legitimate services don't pressure you with countdown timers." },
                { title: "Unsolicited Contact", desc: "No exchange or wallet will contact you first asking for credentials. Ever." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="protection" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Complete Protection Guide</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Use a Hardware Wallet", desc: "A Ledger or Trezor keeps private keys offline. Even if you visit a phishing site, they cannot access your keys without physical device confirmation." },
                { title: "Bookmark All Important Sites", desc: "Save the real URLs for your exchange, wallet, and XRPL explorer. Only access them through bookmarks — never through search results or links." },
                { title: "Enable 2FA with an Authenticator App", desc: "Use Google Authenticator or Authy — not SMS. SIM-swap attacks can intercept SMS codes." },
                { title: "Use a Password Manager", desc: "Password managers auto-fill only on the correct domain. If the login fields don't auto-fill, you may be on a phishing site." },
                { title: "Verify Before You Sign", desc: "Always review transaction details on your hardware wallet screen before confirming. Check the destination address matches what you expect." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <GlowCard
                title="Ledger Hardware Wallet"
                value="Best Protection"
                subtitle="Your private keys never leave the device — even on a phishing site"
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Protect your XRP with a <a href="https://allaboutxrp.com/go/ledger" className="text-xrp-accent underline decoration-xrp-accent/30">Ledger hardware wallet</a> — the gold standard in crypto security.
            </p>
          </RevealSection>

          <RevealSection id="compromised" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What to Do If Compromised</h2>
            <div className="mt-6">
              <HighlightBox title="Act Immediately" variant="warning">
                <p>If you&apos;ve entered your seed phrase or secret key on a suspicious site, you have <strong className="text-text-primary">minutes, not hours</strong>. Automated bots monitor for stolen credentials and drain wallets almost instantly.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Create a New Wallet Immediately", desc: "Generate a brand new wallet with a new seed phrase on a trusted device. Use a hardware wallet if possible." },
                { title: "2. Transfer All Assets", desc: "Move all XRP and tokens from the compromised wallet to your new wallet address as fast as possible." },
                { title: "3. Change Exchange Passwords", desc: "If you entered exchange credentials, change your password and 2FA immediately. Contact support to freeze the account." },
                { title: "4. Report the Phishing Site", desc: "Report to Google Safe Browsing, the platform it impersonates, and relevant authorities." },
                { title: "5. Scan Your Device", desc: "Run malware scans on the device you used. Consider the device compromised until verified clean." },
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
              { href: "/learn/xrp-scams", label: "XRP Scams", desc: "All common scam types" },
              { href: "/learn/xrp-self-custody-guide", label: "Self-Custody Guide", desc: "Be your own bank" },
              { href: "/learn/recover-lost-xrp", label: "Recover Lost XRP", desc: "What to do if you lose access" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Best wallets compared" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
              { href: "/learn/xrp-destination-tag-guide", label: "Destination Tags", desc: "Don't lose XRP in transfers" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Protect Your XRP Now"
          description="A hardware wallet is the best defense against phishing. Secure your XRP before it's too late."
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
