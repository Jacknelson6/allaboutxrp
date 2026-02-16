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
  title: "XRPL Trust Lines Explained: How Token Holding Works | AllAboutXRP",
  description: "XRPL trust lines explained. How to set them, why they're needed, reserve requirements, and security implications.",
  keywords: ["XRPL trust lines","trust lines XRP","XRP trust line","XRPL token holding"],
  openGraph: {
    title: "XRPL Trust Lines Explained: How Token Holding Works",
    description: "XRPL trust lines explained. How to set them, why they're needed, reserve requirements, and security implications.",
    url: "https://allaboutxrp.com/learn/xrpl-trust-lines-explained",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRPL Trust Lines Explained: How Token Holding Works", description: "XRPL trust lines explained. How to set them, why they're needed, reserve requirements, and security implications." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-trust-lines-explained" },
};

const schemas = [
  buildArticleSchema({ headline: "XRPL Trust Lines Explained: How Token Holding Works", description: "XRPL trust lines explained. How to set them, why they're needed, reserve requirements, and security implications.", url: "https://allaboutxrp.com/learn/xrpl-trust-lines-explained", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRPL Trust Lines Explained" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-trust-lines-explained" }),
  buildFAQSchema([
    { question: "What is a trust line?", answer: "An opt-in connection between your wallet and a token issuer that allows you to hold their token on the XRPL." },
    { question: "Why do trust lines cost 2 XRP?", answer: "The 2 XRP owner reserve prevents spam (creating millions of trust lines). It's locked, not spent, and returned when removed." },
    { question: "Can someone send me tokens without a trust line?", answer: "No. You must create a trust line first. This is a security feature preventing token spam." },
    { question: "How do I remove a trust line?", answer: "Set the trust line limit to 0 and ensure zero token balance. The 2 XRP reserve will be freed." },
    { question: "Do I need trust lines for XRP?", answer: "No. XRP is the native token and doesn't require trust lines. Only non-XRP issued tokens need them." },
  ]),
];

const faqItems = [
  { q: "What is a trust line?", a: "An opt-in connection between your wallet and a token issuer that allows you to hold their token on the XRPL." },
  { q: "Why do trust lines cost 2 XRP?", a: "The 2 XRP owner reserve prevents spam (creating millions of trust lines). It's locked, not spent, and returned when removed." },
  { q: "Can someone send me tokens without a trust line?", a: "No. You must create a trust line first. This is a security feature preventing token spam." },
  { q: "How do I remove a trust line?", a: "Set the trust line limit to 0 and ensure zero token balance. The 2 XRP reserve will be freed." },
  { q: "Do I need trust lines for XRP?", a: "No. XRP is the native token and doesn't require trust lines. Only non-XRP issued tokens need them." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRPL Trust Lines Explained" titleAccent="How Token Holding Works" subtitle="Trust lines are the XRPL mechanism for holding non-XRP tokens. Understand how they work and why they matter." breadcrumbLabel="XRPL Trust Lines Explained">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Trust lines</strong> are how the XRPL handles non-XRP tokens. Before you can hold any <Link href="/learn/how-to-create-xrpl-token" className="text-xrp-accent underline decoration-xrp-accent/30">issued token</Link>, you must create a trust line to the issuer. This <strong className="text-text-primary">opt-in model prevents token spam</strong> and gives users full control over which assets appear in their wallets. Each trust line requires a 2 XRP reserve.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Purpose", value: "Enable holding non-XRP tokens" },
          { label: "Reserve", value: "2 XRP per trust line" },
          { label: "Creation", value: "User opts in (not automatic)" },
          { label: "Spam Prevention", value: "Reserve + opt-in model" },
          { label: "Rippling", value: "Configurable per line" },
          { label: "Deletion", value: "Set limit to 0 + zero balance" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Are They" },
          { id: "how", label: "How They Work" },
          { id: "reserve", label: "Reserve Cost" },
          { id: "security", label: "Security" },
          { id: "management", label: "Management" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Reserve" value="2 XRP" delay={0.00} />
          <StatPill label="Model" value="Opt-in" delay={0.06} />
          <StatPill label="Spam" value="Prevented" delay={0.12} />
          <StatPill label="Control" value="User" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Are Trust Lines?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">A trust line is a <strong className="text-text-primary">relationship between your XRPL account and a token issuer</strong> that allows you to hold their token. Think of it as explicitly saying &quot;I agree to hold tokens issued by this account.&quot; Without a trust line, you cannot receive non-XRP tokens.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Opt-In Model",desc:"You choose which tokens to trust. No one can airdrop unwanted tokens."},
              {title:"Per-Issuer",desc:"Each trust line connects you to one specific issuer for one specific token code."},
              {title:"Limit Setting",desc:"You can set a maximum amount of that token you're willing to hold."},
              {title:"Bilateral",desc:"Both parties can see the trust line. The issuer can see who trusts them."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How They Work</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Issuer creates token",desc:"An XRPL account decides to issue a token (e.g., 'USD' from Bitstamp)."},
              {title:"2. You create trust line",desc:"Submit a TrustSet transaction specifying the issuer and token code."},
              {title:"3. 2 XRP reserved",desc:"Your wallet reserves 2 XRP for the trust line. This is locked, not spent."},
              {title:"4. Receive tokens",desc:"Now the issuer (or anyone holding the token) can send it to you."},
              {title:"5. Trade on DEX",desc:"With trust lines set, you can trade tokens on the <Link href='/learn/how-to-use-xrpl-dex' className='text-xrp-accent underline decoration-xrp-accent/30'>XRPL DEX</Link>."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="reserve" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Reserve Cost</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Each trust line requires a <strong className="text-text-primary">2 XRP owner reserve</strong>. This is locked (not burned) and returned when the trust line is deleted. Combined with the 10 XRP base reserve, this means holding multiple tokens requires more XRP.</p>
            <div className="mt-6"><DataTable headers={["Trust Lines","Total Reserve","Available"]} rows={[
              ["0 (XRP only)","10 XRP","All above 10"],
              ["5 tokens","20 XRP","All above 20"],
              ["10 tokens","30 XRP","All above 30"],
              ["20 tokens","50 XRP","All above 50"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Security Benefits</h2>
            <div className="mt-6"><HighlightBox title="Why Opt-In Matters" variant="accent"><p>On Ethereum, anyone can send you any ERC-20 token — including scam tokens with malicious smart contracts. On the XRPL, the trust line model means you only hold tokens you&apos;ve explicitly agreed to. This eliminates an entire class of scam attacks.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="management" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Managing Trust Lines</h2>
            <div className="mt-6"><IconList items={[
              {title:"Setting trust lines",desc:"Use Xaman, Crossmark, or any XRPL wallet. Most handle it automatically when you first interact with a token."},
              {title:"Removing trust lines",desc:"Set limit to 0 and ensure zero balance. The 2 XRP reserve is returned."},
              {title:"Rippling",desc:"Configure whether tokens can 'ripple' through your account in payment paths. Default off for most users."},
              {title:"Check before trusting",desc:"Verify the token issuer before setting trust lines. Scam tokens exist on XRPL too."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/how-to-create-xrpl-token", label: "Create Token", desc: "Token issuance" },
            { href: "/learn/how-to-use-xrpl-dex", label: "XRPL DEX", desc: "Trading" },
            { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "Technology" },
            { href: "/learn/xrp-wallets", label: "Wallets", desc: "Wallet options" },
            { href: "/learn/xrp-addresses-and-keys", label: "Addresses", desc: "Account management" },
            { href: "/learn/xrp-amm", label: "XRP AMM", desc: "Liquidity provision" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Master XRPL Tokens" description="Understand trust lines to safely participate in the XRPL token ecosystem." primaryHref="/learn/how-to-create-xrpl-token" primaryLabel="Create Token →" secondaryHref="/learn/how-to-use-xrpl-dex" secondaryLabel="XRPL DEX" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
