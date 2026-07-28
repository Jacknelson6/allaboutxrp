import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import SourceList from "@/components/shared/SourceList";
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
  buildArticleSchema({ headline: "XRPL Trust Lines Explained: How Token Holding Works", description: "XRPL trust lines explained. How to set them, why they're needed, reserve requirements, and security implications.", url: "https://allaboutxrp.com/learn/xrpl-trust-lines-explained", datePublished: "2026-02-15", dateModified: "2026-07-27", citations: ["https://xrpl.org/docs/concepts/tokens/fungible-tokens/trust-line-tokens", "https://xrpl.org/docs/concepts/accounts/reserves"] }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRPL Trust Lines Explained" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-trust-lines-explained" }),
  buildFAQSchema([
    { question: "What is a trust line?", answer: "An opt-in connection between your wallet and a token issuer that allows you to hold their token on the XRPL." },
    { question: "Why do trust lines usually reserve 0.2 XRP?", answer: "The owner reserve discourages ledger spam. The first two trust lines can qualify for an exemption when an account holds only the 1 XRP base reserve; otherwise the current owner reserve is 0.2 XRP per item." },
    { question: "Can someone send me tokens without a trust line?", answer: "No. You must create a trust line first. This is a security feature preventing token spam." },
    { question: "How do I remove a trust line?", answer: "Return your settings to their defaults and offload any positive token balance. When neither side keeps the line in a non-default state, the trust line is deleted and any owner reserve it required is freed." },
    { question: "Do I need trust lines for XRP?", answer: "No. XRP is the native token and doesn't require trust lines. Only non-XRP issued tokens need them." },
  ]),
];

const faqItems = [
  { q: "What is a trust line?", a: "An opt-in connection between your wallet and a token issuer that allows you to hold their token on the XRPL." },
  { q: "Why do trust lines usually reserve 0.2 XRP?", a: "The owner reserve discourages ledger spam. The first two trust lines can qualify for an exemption when an account holds only the 1 XRP base reserve; otherwise the current owner reserve is 0.2 XRP per item." },
  { q: "Can someone send me tokens without a trust line?", a: "No. You must create a trust line first. This is a security feature preventing token spam." },
  { q: "How do I remove a trust line?", a: "Return your settings to their defaults and offload any positive token balance. When neither side keeps the line in a non-default state, the trust line is deleted and any owner reserve it required is freed." },
  { q: "Do I need trust lines for XRP?", a: "No. XRP is the native token and doesn't require trust lines. Only non-XRP issued tokens need them." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRPL Trust Lines Explained" titleAccent="How Token Holding Works" subtitle="Trust lines are the XRPL mechanism for holding non-XRP tokens. Understand how they work and why they matter." breadcrumbLabel="XRPL Trust Lines Explained">
          <div className="mt-5"><AuthorByline date="2026-02-15" modified="2026-07-27" /><LastUpdated date="July 27, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Trust lines</strong> are how the XRPL handles non-XRP tokens. Before you can hold any <Link href="/learn/how-to-create-xrpl-token" className="text-xrp-accent underline decoration-xrp-accent/30">issued token</Link>, you must create a trust line to the issuer. This <strong className="text-text-primary">opt-in model reduces unsolicited token spam</strong> and gives users control over which assets they accept. A trust line normally adds the current 0.2 XRP owner reserve, with a limited exception for an account&apos;s first two trust lines.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Purpose", value: "Enable holding non-XRP tokens" },
          { label: "Reserve", value: "Usually 0.2 XRP per trust line" },
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
          <StatPill label="Reserve" value="0.2 XRP" delay={0.00} />
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
              {title:"3. Reserve evaluated",desc:"A trust line normally adds the current 0.2 XRP owner reserve. A narrow exemption can apply to an account's first two lines."},
              {title:"4. Receive tokens",desc:"Now the issuer (or anyone holding the token) can send it to you."},
              {title:"5. Trade on DEX",desc:"With trust lines set, you can trade tokens on the <Link href='/learn/how-to-use-xrpl-dex' className='text-xrp-accent underline decoration-xrp-accent/30'>XRPL DEX</Link>."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="reserve" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Reserve Cost</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">A trust line normally adds the current <strong className="text-text-primary">0.2 XRP owner reserve</strong>. This XRP is locked rather than burned and becomes available again when the line no longer counts toward the owner reserve. The XRPL has a special exception that can let a new account create its first two trust lines while holding only the 1 XRP base reserve; once the account owns three or more objects, the full owner reserve applies.</p>
            <div className="mt-6"><DataTable headers={["Trust Lines","Typical Total Reserve","Available"]} rows={[
              ["0 (XRP only)","1 XRP","All above 1"],
              ["5 tokens","2 XRP","All above 2"],
              ["10 tokens","3 XRP","All above 3"],
              ["20 tokens","5 XRP","All above 5"],
            ]} highlightCol={1} /></div>
            <p className="mt-3 text-xs leading-relaxed text-text-secondary/70">Typical totals assume every line counts toward the owner reserve and no other owned ledger objects. Check the live account state for an exact requirement.</p>
          </RevealSection>
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Security Benefits</h2>
            <div className="mt-6"><HighlightBox title="Why Opt-In Matters" variant="accent"><p>The trust-line model means an account generally accepts only the issued assets it has opted into. That reduces unsolicited token spam, but it does not make an issued asset safe: verify the issuer and currency before creating a line.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="management" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Managing Trust Lines</h2>
            <div className="mt-6"><IconList items={[
              {title:"Setting trust lines",desc:"Use Xaman, Crossmark, or any XRPL wallet. Most handle it automatically when you first interact with a token."},
              {title:"Removing trust lines",desc:"Return your settings to their defaults and offload any positive balance. If the line is deleted, any owner reserve it required is freed."},
              {title:"Rippling",desc:"Configure whether tokens can 'ripple' through your account in payment paths. Default off for most users."},
              {title:"Check before trusting",desc:"Verify the token issuer before setting trust lines. Scam tokens exist on XRPL too."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <SourceList sources={[
            { label: "XRPL.org: Trust Line Tokens", href: "https://xrpl.org/docs/concepts/tokens/fungible-tokens/trust-line-tokens" },
            { label: "XRPL.org: Account Reserves", href: "https://xrpl.org/docs/concepts/accounts/reserves" },
          ]} />

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

        <LearnCTA title="Master XRPL Tokens" description="Understand trust lines to safely participate in the XRPL token ecosystem." primaryHref="/learn/how-to-create-xrpl-token" primaryLabel="Create Token →" secondaryHref="/learn/how-to-use-xrpl-dex" secondaryLabel="XRPL DEX" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: July 27, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
