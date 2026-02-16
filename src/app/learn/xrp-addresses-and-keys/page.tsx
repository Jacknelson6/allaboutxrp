import { Metadata } from "next";
import Image from "next/image";
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
  title: "Understanding XRP Addresses & Keys",
  description:
    "Learn how XRP addresses, secret keys, regular keys, multi-signing, reserves, and destination tags work on the XRP Ledger.",
  keywords: ["XRP address", "XRP wallet address", "XRP secret key", "XRPL accounts"],
  openGraph: {
    title: "XRP Addresses & Keys Explained | AllAboutXRP",
    description:
      "Complete guide to XRP addresses (r-addresses, X-addresses), secret keys, multi-signing, reserves, and security best practices.",
    url: "https://allaboutxrp.com/learn/xrp-addresses-and-keys",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Addresses & Keys Guide | AllAboutXRP",
    description:
      "How XRP addresses, keys, reserves, destination tags, and multi-signing work on the XRPL.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-addresses-and-keys",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "Understanding XRP Addresses & Keys",
    description: "A comprehensive guide to how XRP wallet addresses, secret keys, regular keys, multi-signing, account reserves, and destination tags work on the XRP Ledger.",
    url: "https://allaboutxrp.com/learn/xrp-addresses-and-keys",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Addresses & Keys" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-addresses-and-keys" }),
  buildFAQSchema([
    { question: "What does an XRP address look like?", answer: "An XRP classic address starts with the letter 'r' followed by 25-34 alphanumeric characters, e.g., rN7n3473SaZBCG4dFL83w7p1W9cgZw7Gj9. X-addresses start with 'X' and encode both the address and destination tag in one string." },
    { question: "What is the XRP account reserve?", answer: "The XRP Ledger requires a base reserve of 10 XRP to activate an account. Each additional object (trust lines, offers, escrows) adds 2 XRP to the owner reserve. These reserves cannot be spent while the objects exist." },
    { question: "What is the difference between X-addresses and classic addresses?", answer: "Classic addresses (r-addresses) require a separate destination tag for exchanges. X-addresses encode both the address and destination tag into a single string starting with 'X', reducing errors when sending to exchanges." },
    { question: "Can I recover my XRP if I lose my secret key?", answer: "No. If you lose your secret key (family seed) and have no regular key or multi-sign configured, your XRP is permanently inaccessible. There is no recovery mechanism — always back up your keys securely." },
    { question: "What is multi-signing on the XRPL?", answer: "Multi-signing allows multiple parties to authorize a transaction using a SignerList. You can set a quorum (e.g., 3 of 5 signers must approve) for enhanced security, shared wallets, or organizational governance." },
  ]),
];

const faqItems = [
  { q: "What does an XRP address look like?", a: "An XRP classic address starts with the letter 'r' followed by 25-34 alphanumeric characters, e.g., rN7n3473SaZBCG4dFL83w7p1W9cgZw7Gj9. X-addresses start with 'X' and encode both the address and destination tag into a single string." },
  { q: "What is the XRP account reserve?", a: "The XRP Ledger requires a base reserve of 10 XRP to activate an account. Each additional object (trust lines, offers, escrows) adds 2 XRP to the owner reserve. These reserved amounts cannot be spent while the objects exist." },
  { q: "What is the difference between X-addresses and classic addresses?", a: "Classic addresses (r-addresses) require a separate destination tag for exchanges. X-addresses encode both the address and destination tag into a single string starting with 'X', reducing the risk of lost funds due to missing tags." },
  { q: "Can I recover my XRP if I lose my secret key?", a: "No. If you lose your secret key (family seed) and have no regular key or multi-sign configured, your XRP is permanently inaccessible. There is no recovery mechanism on the XRPL — always back up your keys in multiple secure locations." },
  { q: "What is multi-signing on the XRPL?", a: "Multi-signing allows multiple parties to authorize a single transaction using a SignerList. You set a quorum (e.g., 3 of 5 signers must approve). This enables enhanced security, shared wallets, and organizational governance on the XRPL." },
];

export default function XRPAddressesAndKeysPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Understanding XRP"
          titleAccent="Addresses & Keys"
          subtitle="Every interaction with the XRP Ledger starts with an address and a key. Understanding how XRPL accounts work — from r-addresses to multi-signing — is essential for securing your assets and using the ledger effectively."
          breadcrumbLabel="XRP Addresses & Keys"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/xrp-addresses-and-keys-hero.jpg"
            alt="XRP addresses and cryptographic keys"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <TLDRBox>
          <p>XRP addresses start with <strong className="text-text-primary">&quot;r&quot;</strong> (classic) or <strong className="text-text-primary">&quot;X&quot;</strong> (X-address format). Your secret key controls your account — lose it and your <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> is gone forever. The XRPL supports <strong className="text-text-primary">regular keys</strong> (changeable signing keys) and <strong className="text-text-primary">multi-signing</strong> (multiple parties approve transactions). Every account needs a 10 XRP base reserve, plus 2 XRP per object (trust lines, offers).</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Address Format", value: "r-address (classic) or X-address" },
          { label: "Base Reserve", value: "10 XRP to activate" },
          { label: "Owner Reserve", value: "2 XRP per object" },
          { label: "Key Algorithm", value: "secp256k1 or Ed25519" },
          { label: "Multi-Sign", value: "Up to 32 signers" },
          { label: "Destination Tags", value: "Required for exchanges" },
          { label: "Key Recovery", value: "Not possible — back up!" },
          { label: "Regular Key", value: "Changeable signing key" },
        ]} />

        <SectionNav items={[
          { id: "r-addresses", label: "r-Addresses" },
          { id: "secret-keys", label: "Secret Keys" },
          { id: "regular-keys", label: "Regular Keys" },
          { id: "multi-signing", label: "Multi-Signing" },
          { id: "reserves", label: "Account Reserves" },
          { id: "destination-tags", label: "Destination Tags" },
          { id: "x-addresses", label: "X-Addresses" },
          { id: "security", label: "Security Best Practices" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Base Reserve" value="10 XRP" delay={0} />
          <StatPill label="Owner Reserve" value="2 XRP/obj" delay={0.06} />
          <StatPill label="Max Signers" value="32" delay={0.12} />
          <StatPill label="Key Types" value="2 algos" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== R-ADDRESSES ===== */}
          <RevealSection id="r-addresses">
            <h2 className="text-2xl font-bold text-text-primary">How XRP Addresses Work (r-Addresses)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every account on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> has a unique address that starts with the letter <strong className="text-text-primary">&quot;r&quot;</strong>, followed by 25-34 alphanumeric characters. This is called a <strong className="text-text-primary">classic address</strong>. For example:
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 font-mono text-sm text-text-primary break-all">
              rN7n3473SaZBCG4dFL83w7p1W9cgZw7Gj9
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The address is derived from your public key using a series of cryptographic hash functions (SHA-256, then RIPEMD-160) and base58 encoding. This process is one-way — you cannot derive a private key from an address. The &quot;r&quot; prefix is an XRPL convention that makes XRP addresses instantly recognizable.
            </p>
            <div className="mt-6">
              <HighlightBox title="Addresses vs. Accounts" variant="info">
                <p>An address is just a mathematical derivation from a key pair. It doesn&apos;t become an <strong className="text-text-primary">account</strong> on the XRPL until it receives at least 10 XRP (the base reserve). Until funded, the address exists mathematically but not on the ledger.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== SECRET KEYS ===== */}
          <RevealSection id="secret-keys" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Secret Keys and Key Pairs</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Your XRP account is controlled by a <strong className="text-text-primary">cryptographic key pair</strong>: a private key (secret) and a public key. The XRPL supports two cryptographic algorithms:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Algorithm", "Key Format", "Details"]}
                rows={[
                  ["secp256k1", "Family seed (s...)", "Default — same curve as Bitcoin. Seeds start with 's'"],
                  ["Ed25519", "Family seed (sEd...)", "Modern, faster signature verification. Seeds start with 'sEd'"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Your <strong className="text-text-primary">family seed</strong> (secret key) is typically a string starting with &quot;s&quot;, like <code className="text-xs bg-white/[0.06] px-1.5 py-0.5 rounded">sn3nxiW7v8KXzPzAqzyHXbSSKNuN9</code>. This seed generates your private key, which generates your public key, which generates your address. <strong className="text-text-primary">Never share your secret key with anyone.</strong>
            </p>
            <div className="mt-6">
              <HighlightBox title="⚠️ Critical Warning" variant="warning">
                <p>Your secret key is the <strong className="text-text-primary">only way to control your account</strong>. If someone obtains your secret key, they can steal all your XRP. If you lose it without a regular key or multi-sign backup, your funds are <strong className="text-text-primary">permanently inaccessible</strong>. There is no &quot;forgot password&quot; on the XRPL.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== REGULAR KEYS ===== */}
          <RevealSection id="regular-keys" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Regular Key Pairs</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL has a unique security feature: <strong className="text-text-primary">regular keys</strong>. You can assign a secondary key pair to your account using a <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">SetRegularKey transaction</Link>. This regular key can sign transactions on behalf of your account, and — critically — it can be <strong className="text-text-primary">changed or removed</strong> at any time.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Key Rotation", desc: "If your regular key is compromised, use your master key to set a new one — without changing your address" },
                { title: "Cold Storage", desc: "Keep your master key offline and use the regular key for daily operations" },
                { title: "Revocation", desc: "Remove the regular key at any time by sending a SetRegularKey transaction with no key" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== MULTI-SIGNING ===== */}
          <RevealSection id="multi-signing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Multi-Signing on the XRPL</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Multi-signing allows you to require <strong className="text-text-primary">multiple parties to authorize</strong> a transaction. You create a SignerList with up to 32 signers, each with a weight, and set a quorum threshold. A transaction is only valid when signatures with enough combined weight meet the quorum.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Shared Wallets", desc: "A company treasury requiring 3-of-5 executives to approve outgoing payments." },
                { title: "Enhanced Security", desc: "Distribute signing authority across multiple devices or locations to prevent single points of failure." },
                { title: "Governance", desc: "DAO-like structures where community members vote on fund allocation through multi-sign quorums." },
                { title: "Estate Planning", desc: "Set up family members as signers to ensure funds remain accessible if the primary holder is unavailable." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== RESERVES ===== */}
          <RevealSection id="reserves" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Account Reserves</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger requires accounts to hold a minimum amount of XRP as a <strong className="text-text-primary">reserve</strong>. This serves two purposes: it prevents ledger spam (millions of empty accounts) and ensures accounts can pay transaction fees.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Reserve Type", "Amount", "Purpose"]}
                rows={[
                  ["Base Reserve", "10 XRP", "Required to activate any XRPL account"],
                  ["Owner Reserve", "2 XRP per object", "For each trust line, offer, escrow, signer list entry, etc."],
                  ["Example: 3 trust lines", "16 XRP total", "10 base + (3 × 2) owner reserve"],
                  ["Example: 3 trust lines + 2 offers", "20 XRP total", "10 base + (5 × 2) owner reserve"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Reserve XRP Is Locked, Not Lost" variant="info">
                <p>Reserved XRP isn&apos;t gone — it&apos;s locked in your account. If you remove objects (close trust lines, cancel offers), the corresponding owner reserve becomes spendable again. The base reserve can be recovered by <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">deleting your account</Link> (though this is rarely advisable).</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== DESTINATION TAGS ===== */}
          <RevealSection id="destination-tags" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Destination Tags Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A <strong className="text-text-primary">destination tag</strong> is a 32-bit integer (0 to 4,294,967,295) attached to an XRP payment. Exchanges and custodial services use a single XRP address for all customers and rely on destination tags to identify which customer a deposit belongs to.
            </p>
            <div className="mt-6">
              <HighlightBox title="⚠️ Don't Forget Your Destination Tag!" variant="warning">
                <p>When sending XRP to an exchange, <strong className="text-text-primary">always include the destination tag</strong> they provide. Without it, the exchange cannot credit your account, and recovering the funds may be difficult or impossible. This is the #1 cause of &quot;lost&quot; XRP deposits.</p>
              </HighlightBox>
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Accounts can enable the <strong className="text-text-primary">RequireDest</strong> flag using an <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">AccountSet transaction</Link>, which rejects any incoming payment that doesn&apos;t include a destination tag. Most exchanges enable this flag to prevent untagged deposits.
            </p>
          </RevealSection>

          {/* ===== X-ADDRESSES ===== */}
          <RevealSection id="x-addresses" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">X-Addresses vs. Classic Addresses</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">X-addresses</strong> are an encoding format that combines a classic r-address and a destination tag into a single string. They start with <strong className="text-text-primary">&quot;X&quot;</strong> on mainnet (or &quot;T&quot; on testnet) and are longer than classic addresses.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Format", "Example", "Includes Tag?"]}
                rows={[
                  ["Classic (r-address)", "rN7n347...w7Gj9 + tag: 12345", "Separate field"],
                  ["X-address", "X7gJ5YK8ab...QkS2mR", "Encoded in address"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              X-addresses solve the destination tag problem by making it impossible to forget — the tag is baked into the address itself. Many wallets and exchanges now support X-addresses, and tools like the <a href="https://xrpaddress.info" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRP Address Codec</a> can convert between formats.
            </p>
          </RevealSection>

          {/* ===== SECURITY ===== */}
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Security Best Practices for XRP Accounts</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Back Up Your Secret Key", desc: "Write it down on paper and store in multiple secure physical locations. Never store it digitally (screenshots, cloud, email)." },
                { title: "Use a Hardware Wallet", desc: "For large holdings, use a Ledger or Trezor device. Your keys never leave the device." },
                { title: "Set a Regular Key", desc: "Use your master key only for emergencies. Set a regular key for daily transactions and keep the master key in cold storage." },
                { title: "Consider Multi-Signing", desc: "For significant holdings, set up multi-sign with keys distributed across locations or trusted parties." },
                { title: "Verify Addresses Carefully", desc: "Always double-check the recipient address and destination tag before sending. XRP transactions are irreversible." },
                { title: "Disable Master Key (Advanced)", desc: "After setting a regular key or multi-sign, you can disable the master key with AccountSet — but only if you're confident in your backup strategy." },
              ]} variant="zap" />
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
              <li>• <a href="https://xrpl.org/accounts.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Accounts</a></li>
              <li>• <a href="https://xrpl.org/cryptographic-keys.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Cryptographic Keys</a></li>
              <li>• <a href="https://xrpl.org/multi-signing.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Multi-Signing</a></li>
              <li>• <a href="https://xrpl.org/reserves.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Reserves</a></li>
              <li>• <a href="https://xrpaddress.info" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">X-Address Codec Tool</a></li>
            </ul>
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/xrp-transaction-types", label: "Transaction Types", desc: "Payments, escrows & more" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets Guide", desc: "Choosing the right wallet" },
              { href: "/learn/xrp-ledger-explained", label: "XRPL Explained", desc: "How the ledger works" },
              { href: "/learn/xrpl-validators", label: "Validators & Consensus", desc: "How XRPL reaches agreement" },
              { href: "/learn/get-started", label: "Get Started", desc: "Buy your first XRP" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Secure Your XRP Today"
          description="Understanding addresses and keys is the first step to securing your XRP. Get started with a self-custody wallet and take control of your digital assets."
          primaryHref="/learn/xrp-wallets"
          primaryLabel="Choose a Wallet →"
          secondaryHref="/learn/get-started"
          secondaryLabel="Buy XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation, XRP Address Codec specification.</em>
        </p>
      </div>
    </>
  );
}
