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
  title: "XRP Airdrops: How to Get Free XRPL Tokens | AllAboutXRP",
  description:
    "Learn about XRP airdrops — how they work, how to qualify, past and upcoming airdrops, and how to avoid scams. Complete guide to XRPL token distributions.",
  keywords: ["XRP airdrops", "XRPL airdrop", "free XRP tokens", "XRP airdrop list", "how to get XRP airdrop", "XRPL token airdrop"],
  openGraph: {
    title: "XRP Airdrops: Complete Guide to XRPL Token Distributions",
    description: "How to qualify for XRP airdrops, avoid scams, and track upcoming distributions on the XRP Ledger.",
    url: "https://allaboutxrp.com/learn/xrp-airdrops",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Airdrops Guide", description: "How XRPL airdrops work and how to qualify." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-airdrops" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Airdrops: How to Get Free XRPL Tokens", description: "A comprehensive guide to XRP and XRPL token airdrops — how they work, how to qualify, and how to avoid scams.", url: "https://allaboutxrp.com/learn/xrp-airdrops", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Airdrops" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-airdrops" }),
  buildFAQSchema([
    { question: "What is an XRP airdrop?", answer: "An XRP airdrop is a distribution of free tokens to XRP holders on the XRP Ledger. Projects building on the XRPL often distribute their native tokens to existing XRP holders as a way to bootstrap their community and reward the ecosystem. Airdrops typically require holding XRP in a self-custody wallet and setting a trust line to the project's token." },
    { question: "How do I qualify for XRP airdrops?", answer: "To qualify for most XRPL airdrops: (1) Hold XRP in a self-custody wallet (not an exchange), (2) Set a trust line to the airdropped token before the snapshot date, (3) Hold the minimum required XRP balance at snapshot time. Exchange-held XRP usually doesn't qualify unless the exchange explicitly supports the airdrop." },
    { question: "Are XRP airdrops safe?", answer: "Legitimate XRPL airdrops are generally safe, but scams exist. Never send XRP to receive an airdrop — real airdrops are free. Never share your private keys or secret phrase. Be cautious of unsolicited airdrop claims via DMs or emails. Research projects thoroughly before setting trust lines." },
    { question: "What is a trust line for XRP airdrops?", answer: "A trust line is a connection you create on the XRP Ledger that allows your wallet to hold a specific token. Setting a trust line is like 'opting in' to receive a token. It requires a small XRP reserve (2 XRP per trust line). You must set the trust line before the airdrop snapshot date." },
    { question: "Do I need to pay taxes on XRP airdrops?", answer: "In most jurisdictions, yes. Airdropped tokens are typically considered taxable income at their fair market value when received. Consult a tax professional for your specific situation. See our XRP tax guide for more details." },
  ]),
];

const faqItems = [
  { q: "What is an XRP airdrop?", a: "A free distribution of tokens to XRP holders. XRPL projects distribute tokens to bootstrap community and reward the ecosystem." },
  { q: "How do I qualify?", a: "Hold XRP in a self-custody wallet, set a trust line to the token before the snapshot date, and hold the minimum required balance." },
  { q: "Are they safe?", a: "Legitimate airdrops are free. Never send XRP to receive one. Never share private keys. Research projects before setting trust lines." },
  { q: "What is a trust line?", a: "A connection on the XRPL that allows your wallet to hold a specific token. Requires 2 XRP reserve per trust line." },
  { q: "Are airdrops taxable?", a: "Usually yes — considered taxable income at fair market value when received. Consult a tax professional." },
];

export default function XRPAirdropsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Airdrops" titleAccent="How to Get Free XRPL Tokens" subtitle="The XRPL ecosystem regularly distributes free tokens to XRP holders. Here's how airdrops work, how to qualify, and — critically — how to avoid scams." breadcrumbLabel="XRP Airdrops">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP airdrops</strong> are free token distributions to XRP holders by projects building on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. To qualify, you typically need to <strong className="text-text-primary">hold XRP in a self-custody <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">wallet</Link></strong> (not an exchange) and <strong className="text-text-primary">set a trust line</strong> to the token before a snapshot date. Legitimate airdrops are always free — <strong className="text-text-primary">never send XRP or share your keys</strong> to receive one. The XRPL&apos;s trust line system makes airdrops straightforward, but always research projects before participating.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "What You Need", value: "Self-custody XRP wallet" },
          { label: "Trust Line Cost", value: "2 XRP reserve per line" },
          { label: "Exchange XRP?", value: "Usually doesn't qualify" },
          { label: "Cost to Receive", value: "Free (always)" },
          { label: "Taxable?", value: "Usually yes (income)" },
          { label: "Common Wallets", value: "Xaman, XUMM, Crossmark" },
          { label: "Snapshot", value: "Specific date/time" },
          { label: "Scam Red Flag", value: "Asks you to send XRP first" },
        ]} />

        <SectionNav items={[
          { id: "how-airdrops-work", label: "How They Work" },
          { id: "qualifying", label: "How to Qualify" },
          { id: "trust-lines", label: "Trust Lines" },
          { id: "avoiding-scams", label: "Avoiding Scams" },
          { id: "taxes", label: "Tax Implications" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-airdrops-work">
            <h2 className="text-2xl font-bold text-text-primary">How XRP Airdrops Work</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRPL airdrops work through a simple process. A project takes a <strong className="text-text-primary">snapshot</strong> of the XRP Ledger at a specific date and time, recording every wallet that holds XRP and has set a trust line to their token. Then they distribute their tokens proportionally to those wallets.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Snapshot Date", desc: "A specific date/time when the XRPL is scanned to identify eligible wallets." },
                { title: "Trust Line Required", desc: "You must 'opt in' by creating a trust line to the token before the snapshot." },
                { title: "Proportional Distribution", desc: "Tokens are typically distributed based on how much XRP you hold." },
                { title: "Automatic Delivery", desc: "Tokens appear in your wallet automatically after the distribution date." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="qualifying" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Qualify for XRP Airdrops</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "1. Use a self-custody wallet", desc: "Hold your XRP in wallets like Xaman (XUMM), Crossmark, or a hardware wallet. Exchange-held XRP usually doesn't qualify." },
                { title: "2. Research upcoming airdrops", desc: "Follow XRPL community channels, xrpl.org, and trusted XRP news sources for airdrop announcements." },
                { title: "3. Set trust lines before snapshot", desc: "Create trust lines to the airdropped token before the snapshot date. This is done through your wallet app." },
                { title: "4. Hold minimum XRP balance", desc: "Some airdrops require a minimum XRP balance (e.g., 100+ XRP) at snapshot time." },
                { title: "5. Wait for distribution", desc: "After the snapshot, tokens are distributed to eligible wallets. This can take days to weeks." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="trust-lines" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Understanding Trust Lines</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Trust lines are a unique feature of the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. They&apos;re essentially your consent to hold a specific token. The XRPL won&apos;t let someone send you a random token unless you&apos;ve explicitly created a trust line for it.
            </p>

            <div className="mt-6">
              <HighlightBox title="Trust Line Costs" variant="info">
                <p>Each trust line requires a <strong className="text-text-primary">2 XRP owner reserve</strong> that&apos;s locked while the trust line exists. This isn&apos;t a fee — it&apos;s returned when you remove the trust line. If you set 10 trust lines, 20 XRP is reserved. Factor this into your balance when preparing for airdrops. Learn more about <Link href="/learn/xrp-addresses-and-keys" className="text-xrp-accent underline decoration-xrp-accent/30">XRP addresses and reserves</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="avoiding-scams" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Avoid Airdrop Scams</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "Never send XRP to receive an airdrop", desc: "Legitimate airdrops are ALWAYS free. If someone asks you to send XRP first, it's a scam. No exceptions." },
                { title: "Never share your secret key/seed phrase", desc: "No legitimate project will ever ask for your private keys. Anyone who does is trying to steal your funds." },
                { title: "Ignore unsolicited DMs and emails", desc: "Scammers impersonate projects and team members. Always verify through official channels." },
                { title: "Research the project thoroughly", desc: "Check the project's website, team, whitepaper, and community presence before setting trust lines." },
                { title: "Use trusted sources for airdrop info", desc: "Rely on official XRPL community resources, not random social media posts or YouTube videos." },
              ]} variant="warn" />
            </div>
          </RevealSection>

          <RevealSection id="taxes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tax Implications of Airdrops</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In most jurisdictions, airdropped tokens are considered <strong className="text-text-primary">taxable income</strong> at their fair market value when received. If you later sell the tokens, any gain or loss from the received value is a separate capital gains event.
            </p>

            <div className="mt-6">
              <HighlightBox title="Keep Records" variant="warning">
                <p>Track the date you received airdropped tokens and their fair market value at that time. You&apos;ll need this for tax reporting. Consider using crypto tax software. For detailed guidance, see our <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">XRP tax guide</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Best wallets for airdrops" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Get XRP for your wallet" },
              { href: "/learn/xrp-tax-guide", label: "XRP Tax Guide", desc: "Airdrop tax implications" },
              { href: "/learn/xrp-addresses-and-keys", label: "Addresses & Keys", desc: "Wallet security basics" },
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "More ways to earn" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "Understanding the XRPL" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Set Up Your XRP Wallet" description="To qualify for airdrops, you need a self-custody wallet. Learn which wallets support XRPL airdrops." primaryHref="/learn/xrp-wallets" primaryLabel="XRP Wallets →" secondaryHref="/learn/how-to-buy-xrp" secondaryLabel="Buy XRP" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. This is not financial or tax advice. Sources: XRPL.org, community resources.</em></p>
      </div>
    </>
  );
}
