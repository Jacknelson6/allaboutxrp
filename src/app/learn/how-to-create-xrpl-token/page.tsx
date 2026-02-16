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
  title: "How to Create an XRPL Token: Token Issuance Guide | AllAboutXRP",
  description: "Step-by-step guide to creating tokens on the XRP Ledger. Covers trust lines, token settings, and distribution.",
  keywords: ["create XRPL token","issue XRP token","XRPL tokenization","XRP Ledger token"],
  openGraph: {
    title: "How to Create an XRPL Token: Token Issuance Guide",
    description: "Step-by-step guide to creating tokens on the XRP Ledger. Covers trust lines, token settings, and distribution.",
    url: "https://allaboutxrp.com/learn/how-to-create-xrpl-token",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "How to Create an XRPL Token: Token Issuance Guide", description: "Step-by-step guide to creating tokens on the XRP Ledger. Covers trust lines, token settings, and distribution." },
  alternates: { canonical: "https://allaboutxrp.com/learn/how-to-create-xrpl-token" },
};

const schemas = [
  buildArticleSchema({ headline: "How to Create an XRPL Token: Token Issuance Guide", description: "Step-by-step guide to creating tokens on the XRP Ledger. Covers trust lines, token settings, and distribution.", url: "https://allaboutxrp.com/learn/how-to-create-xrpl-token", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "How to Create an XRPL Token" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-to-create-xrpl-token" }),
  buildFAQSchema([
    { question: "How much does it cost?", answer: "~10 XRP for account reserve plus minimal fees. Much cheaper than Ethereum." },
    { question: "Do I need to code?", answer: "No. Native feature — use wallet interfaces or API calls." },
    { question: "Can I control tokens after issuance?", answer: "Yes if configured. Freeze, transfer fees, clawback all possible." },
    { question: "What's a trust line?", answer: "Opt-in from a wallet to hold your token. Prevents spam, gives users control." },
    { question: "Immediately tradeable?", answer: "Yes. Available on the XRPL DEX against any token with trust lines." },
  ]),
];

const faqItems = [
  { q: "How much does it cost?", a: "~10 XRP for account reserve plus minimal fees. Much cheaper than Ethereum." },
  { q: "Do I need to code?", a: "No. Native feature — use wallet interfaces or API calls." },
  { q: "Can I control tokens after issuance?", a: "Yes if configured. Freeze, transfer fees, clawback all possible." },
  { q: "What's a trust line?", a: "Opt-in from a wallet to hold your token. Prevents spam, gives users control." },
  { q: "Immediately tradeable?", a: "Yes. Available on the XRPL DEX against any token with trust lines." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How to Create an XRPL Token" titleAccent="Token Issuance Guide" subtitle="Issue your own token on the XRP Ledger in minutes. No smart contracts required — tokenization is native." breadcrumbLabel="How to Create an XRPL Token">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Creating tokens on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> is a <strong className="text-text-primary">native protocol feature</strong>. Any account can issue tokens representing stablecoins, <Link href="/learn/xrp-real-world-assets" className="text-xrp-accent underline decoration-xrp-accent/30">real-world assets</Link>, or community tokens. Holders need trust lines, and issuers can configure freeze, clawback, and transfer fees.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Cost", value: "~10 XRP (reserve)" },
          { label: "Contracts", value: "Not needed" },
          { label: "Time", value: "Minutes" },
          { label: "Trust Lines", value: "Required for holders" },
          { label: "Settings", value: "Freeze, clawback, fees" },
          { label: "Standard", value: "Native issued currencies" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "steps", label: "Steps" },
          { id: "settings", label: "Settings" },
          { id: "distribution", label: "Distribution" },
          { id: "use-cases", label: "Use Cases" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Cost" value="~10 XRP" delay={0.00} />
          <StatPill label="Time" value="Minutes" delay={0.06} />
          <StatPill label="Contracts" value="None" delay={0.12} />
          <StatPill label="Type" value="Native" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Token Issuance on XRPL</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Unlike Ethereum&apos;s ERC-20 smart contracts, the XRPL has <strong className="text-text-primary">token issuance built into the protocol</strong>. Tokens inherit XRPL speed, low fees, and trade immediately on the <Link href="/learn/how-to-use-xrpl-dex" className="text-xrp-accent underline decoration-xrp-accent/30">built-in DEX</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"No Smart Contracts",desc:"Native feature. No code to write, audit, or worry about exploits."},
              {title:"Instant DEX Listing",desc:"Token is immediately tradeable once issued."},
              {title:"Configurable Controls",desc:"Freeze, transfer fees, clawback at issuance."},
              {title:"Trust Line Model",desc:"Holders opt-in via trust lines. Prevents spam tokens."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="steps" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step-by-Step</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Create issuing account",desc:"New XRPL account for issuance. Fund with 10+ XRP for reserve."},
              {title:"2. Configure settings",desc:"Set DefaultRipple, decide freeze/clawback. Hard to change later."},
              {title:"3. Choose token code",desc:"3-char code (USD) or up to 160-bit hex for longer names."},
              {title:"4. Set up trust lines",desc:"Recipients create trust lines to your address for your token."},
              {title:"5. Send tokens",desc:"Issue by sending Payment from issuer to trust line holders. Created on send."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="settings" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Token Settings</h2>
            <div className="mt-6"><DataTable headers={["Setting","Description","Use Case"]} rows={[
              ["Default Ripple","Allows token to flow through account","Required for most"],
              ["Global Freeze","Freeze all issued tokens","Regulatory compliance"],
              ["Individual Freeze","Freeze specific holder","AML/compliance"],
              ["Clawback","Reclaim from holders","Regulated assets"],
              ["Transfer Fee","Charge % on transfers","Revenue"],
              ["No Freeze","Permanently disable freeze","Decentralization"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="distribution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Distribution</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Distribute via payments, <Link href="/learn/xrp-airdrops" className="text-xrp-accent underline decoration-xrp-accent/30">airdrops</Link>, or the XRPL DEX. Use the <Link href="/learn/xrp-amm" className="text-xrp-accent underline decoration-xrp-accent/30">AMM</Link> to bootstrap liquidity.</p>
            <div className="mt-6"><HighlightBox title="Bootstrap Liquidity" variant="accent"><p>Create an AMM pool pairing your token with XRP or <Link href="/learn/rlusd-explained" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link>. Gives immediate price discovery and trading.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Use Cases</h2>
            <div className="mt-6"><IconList items={[
              {title:"Stablecoins",desc:"Dollar-pegged tokens. RLUSD is Ripple's example."},
              {title:"Real-World Assets",desc:"Tokenize real estate, commodities, securities."},
              {title:"Community Tokens",desc:"Governance or reward tokens for projects."},
              {title:"Loyalty Points",desc:"Brandcoin loyalty programs redeemable for goods."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "DeFi on the XRPL" },
              { href: "/learn/xrp-amm", label: "XRP AMM", desc: "Automated market maker" },
              { href: "/learn/how-to-use-xrpl-dex", label: "XRPL DEX Guide", desc: "Decentralized trading" },
              { href: "/learn/how-to-stake-xrp", label: "How to Stake XRP", desc: "Earn yield on XRP" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Staking options explained" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How XRPL works" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "Byzantine agreement" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Network consensus nodes" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Build on the XRP Ledger" description="Create tokens, trade on the DEX, and explore the XRPL ecosystem." primaryHref="/learn/xrp-ledger-explained" primaryLabel="XRPL Guide →" secondaryHref="/learn/xrpl-defi" secondaryLabel="XRPL DeFi" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
