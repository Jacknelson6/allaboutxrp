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
  title: "XRP Scams: How to Spot & Avoid Them (2026)",
  description: "Common XRP scams and how to avoid them. Fake airdrops, phishing sites, impersonator accounts, and rug pulls explained.",
  keywords: ["XRP scams", "XRP scam", "XRP fraud", "crypto scam XRP", "XRP phishing"],
  openGraph: {
    title: "XRP Scams: How to Spot & Avoid Them (2026) | AllAboutXRP",
    description: "Common XRP scams and how to avoid them. Fake airdrops, phishing sites, impersonator accounts, and rug pulls explained.",
    url: "https://allaboutxrp.com/learn/xrp-scams",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Scams: How to Spot & Avoid Them | AllAboutXRP",
    description: "Spot and avoid the most common XRP scams — fake airdrops, phishing, impersonators, and more.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-scams" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Scams: How to Spot & Avoid Them (2026)",
    description: "Complete guide to identifying and avoiding common XRP scams including fake airdrops, phishing attacks, impersonator accounts, and rug pulls.",
    url: "https://allaboutxrp.com/learn/xrp-scams",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Scams" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-scams" }),
  buildFAQSchema([
    { question: "What are the most common XRP scams?", answer: "The most common XRP scams include fake airdrop giveaways (send XRP to get double back), phishing websites that mimic legitimate wallets or exchanges, impersonator accounts pretending to be Ripple executives, fake investment schemes promising guaranteed returns, and rug pulls on XRPL-issued tokens." },
    { question: "How do I spot a fake XRP giveaway?", answer: "Any giveaway asking you to send XRP first is a scam — no legitimate entity will ask you to send crypto to receive more back. These often use fake profiles impersonating Brad Garlinghouse, David Schwartz, or the official Ripple account on social media." },
    { question: "Can I get my XRP back after being scammed?", answer: "XRP transactions are irreversible on the blockchain. Once sent, funds cannot be recovered through the network. You should report the scam to law enforcement, the platform where it occurred, and file reports with the FTC and IC3. Some victims have recovered funds through exchange cooperation if the scammer used a traceable exchange." },
    { question: "Is the XRP Ledger itself safe?", answer: "Yes, the XRP Ledger has operated since 2012 with zero security breaches at the protocol level. Scams target users through social engineering and phishing, not through vulnerabilities in the XRPL itself. Using a hardware wallet and practicing good security hygiene keeps your XRP safe." },
    { question: "How do I report an XRP scam?", answer: "Report XRP scams to the FTC (reportfraud.ftc.gov), FBI's IC3 (ic3.gov), the social media platform hosting the scam, and your local law enforcement. If the scam involves a specific exchange, report it to that exchange's support team immediately." },
  ]),
];

const faqItems = [
  { q: "What are the most common XRP scams?", a: "The most common XRP scams include fake airdrop giveaways (\"send XRP to get double back\"), phishing websites mimicking legitimate wallets or exchanges, impersonator accounts pretending to be Ripple executives, fake investment schemes promising guaranteed returns, and rug pulls on XRPL-issued tokens." },
  { q: "How do I spot a fake XRP giveaway?", a: "Any giveaway asking you to send XRP first is a scam — no legitimate entity will ask you to send crypto to receive more back. These often use fake profiles impersonating Brad Garlinghouse, David Schwartz, or the official Ripple account. Look for verified accounts, check follower counts, and never click links from unsolicited messages." },
  { q: "Can I get my XRP back after being scammed?", a: "XRP transactions are irreversible on the blockchain. Once sent, funds cannot be recovered through the network. Report the scam to law enforcement, the platform where it occurred, and file reports with the FTC and IC3. Some victims have recovered funds if the scammer used a traceable exchange." },
  { q: "Is the XRP Ledger itself safe?", a: "Yes, the XRP Ledger has operated since 2012 with zero security breaches at the protocol level. Scams target users through social engineering and phishing — not XRPL vulnerabilities. A hardware wallet and good security hygiene keep your XRP safe." },
  { q: "How do I report an XRP scam?", a: "Report XRP scams to the FTC (reportfraud.ftc.gov), FBI's IC3 (ic3.gov), the social media platform hosting the scam, and your local law enforcement. If it involves a specific exchange, report it to that exchange's support team immediately." },
  { q: "Are XRP airdrops legitimate?", a: "Some XRPL token airdrops are legitimate — projects distribute tokens to XRP holders via trust lines. However, any airdrop requiring you to send XRP, share your secret key, or connect your wallet to an unknown website is a scam. Always verify through official project channels." },
];

export default function XRPScamsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Scams:"
          titleAccent="How to Spot & Avoid Them"
          subtitle="XRP's growing popularity has attracted scammers. From fake airdrops to impersonator accounts, here's every scam you need to watch for — and how to protect yourself."
          breadcrumbLabel="XRP Scams"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Never send XRP to &quot;get more back&quot; — it&apos;s always a scam. Use a <a href="https://allaboutxrp.com/go/ledger" className="text-xrp-accent underline decoration-xrp-accent/30">hardware wallet</a> to protect your assets, verify URLs before connecting, and never share your secret key or seed phrase. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> itself is secure — scams target <em>people</em>, not the protocol. Learn about <Link href="/learn/xrp-self-custody-guide" className="text-xrp-accent underline decoration-xrp-accent/30">self-custody</Link> and <Link href="/learn/xrp-phishing-protection" className="text-xrp-accent underline decoration-xrp-accent/30">phishing protection</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Top Scam Type", value: "Fake giveaways / airdrops" },
          { label: "Common Tactic", value: "Impersonating Ripple executives" },
          { label: "Recovery Chance", value: "Very low (irreversible transactions)" },
          { label: "Best Defense", value: "Hardware wallet + skepticism" },
          { label: "XRPL Protocol Hacks", value: "Zero (since 2012)" },
        ]} />

        <SectionNav items={[
          { id: "common-scams", label: "Common Scams" },
          { id: "fake-airdrops", label: "Fake Airdrops" },
          { id: "impersonators", label: "Impersonators" },
          { id: "rug-pulls", label: "Rug Pulls" },
          { id: "protect-yourself", label: "Protection" },
          { id: "report", label: "Reporting" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Protocol Hacks" value="Zero" delay={0} />
          <StatPill label="Top Threat" value="Social Eng." delay={0.06} />
          <StatPill label="Best Defense" value="HW Wallet" delay={0.12} />
          <StatPill label="Tx Reversible?" value="No" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="common-scams">
            <h2 className="text-2xl font-bold text-text-primary">Common XRP Scams in 2026</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              As <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> has grown in popularity and value, scammers have developed increasingly sophisticated methods to steal funds. Understanding these scam patterns is your first line of defense.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Fake Giveaway Scams", desc: "\"Send 1,000 XRP, get 10,000 back!\" — promoted via fake social media accounts impersonating Ripple executives. Always a scam." },
                { title: "Phishing Websites", desc: "Fake copies of Xaman, exchanges, or Ripple's website designed to steal your login credentials or secret keys." },
                { title: "Impersonator Accounts", desc: "Fake Brad Garlinghouse, David Schwartz, or Ripple accounts on X/Twitter, YouTube, and Telegram promoting scam links." },
                { title: "Rug Pull Tokens", desc: "New tokens issued on the XRPL that promise huge returns, then the creator disappears with investor funds." },
                { title: "Fake Investment Platforms", desc: "Websites promising guaranteed daily returns on XRP deposits — classic Ponzi scheme structure." },
                { title: "Romance / Pig Butchering", desc: "Scammers build relationships online then convince victims to invest in fake XRP trading platforms." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="fake-airdrops" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Fake Airdrop & Giveaway Scams</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The most prevalent XRP scam involves fake giveaways. Scammers create social media posts, YouTube livestreams, or websites claiming that Ripple, Brad Garlinghouse, or another public figure is giving away XRP. The catch: you must &quot;send XRP first to verify your wallet.&quot;
            </p>
            <div className="mt-6">
              <HighlightBox title="Golden Rule" variant="warning">
                <p><strong className="text-text-primary">No legitimate person or company will ever ask you to send cryptocurrency to receive more back.</strong> This is the #1 rule. If someone asks you to send XRP to &quot;activate,&quot; &quot;verify,&quot; or &quot;unlock&quot; a reward — it is a scam. 100% of the time.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "YouTube Livestream Scams", desc: "Scammers hijack or create YouTube channels, run fake \"live\" streams with Ripple executives, and post QR codes/wallet addresses in the description." },
                { title: "Twitter/X Reply Scams", desc: "Fake accounts reply to legitimate Ripple tweets with links to giveaway sites. They often have similar handles with subtle character differences." },
                { title: "Telegram Group Scams", desc: "Fake Ripple or XRP community groups where admins promote giveaway links. Legitimate Ripple representatives will never DM you first." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="impersonators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impersonator Accounts</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Scammers frequently impersonate <Link href="/learn/brad-garlinghouse" className="text-xrp-accent underline decoration-xrp-accent/30">Brad Garlinghouse</Link>, <Link href="/learn/david-schwartz" className="text-xrp-accent underline decoration-xrp-accent/30">David Schwartz</Link>, and other Ripple executives. They create lookalike profiles with stolen photos, similar usernames, and fake verification badges.
            </p>
            <div className="mt-5">
              <DataTable
                headers={["Red Flag", "What to Look For"]}
                rows={[
                  ["Username", "Subtle misspellings: @BradGarlinghouze, @brad_garlinghouse_ with extra characters"],
                  ["Followers", "Legitimate accounts have 500K+ followers; fakes have few thousand"],
                  ["DMs", "No Ripple executive will ever DM you about investment opportunities"],
                  ["Links", "Scam accounts post links to fake giveaway sites in replies and DMs"],
                  ["Verification", "Check for official platform verification; scammers use fake checkmark emojis"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="rug-pulls" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Rug Pulls & Token Scams</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Anyone can issue a token on the <Link href="/learn/xrpl-trust-lines-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger via trust lines</Link>. While this openness enables innovation, it also allows bad actors to create worthless tokens, hype them up, and then disappear with investor funds.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Hype Phase", desc: "Scammers create a token, build social media buzz, and often pay for promotion by influencers. They promise revolutionary technology or guaranteed price increases." },
                { title: "Pump Phase", desc: "Early buyers drive the price up, creating FOMO. The creator may control most of the supply and use wash trading to simulate volume." },
                { title: "Dump Phase", desc: "Once enough victims have bought in, the creator sells their entire holding, crashing the price to near zero. They disappear with the XRP." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Due Diligence Checklist" variant="accent">
                <p>Before buying any XRPL token: verify the team&apos;s identity, check if the token has a legitimate use case, review the total supply and distribution, look for audits or trusted endorsements, and be wary of tokens that only exist on social media hype.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="protect-yourself" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Protect Yourself</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The best defense against XRP scams is education and hardware security. Follow these practices to keep your <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP wallet</Link> safe.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Use a Hardware Wallet", desc: "A Ledger or Trezor device keeps your private keys offline — even if you visit a phishing site, they can't drain your wallet without physical confirmation." },
                { title: "Verify URLs Manually", desc: "Always type exchange and wallet URLs directly. Never click links from emails, DMs, or social media posts." },
                { title: "Never Share Your Seed Phrase", desc: "No legitimate service will ever ask for your 12/24-word recovery phrase. Anyone who asks is trying to steal your XRP." },
                { title: "Enable 2FA Everywhere", desc: "Use authenticator apps (not SMS) for exchange accounts. SMS can be SIM-swapped." },
                { title: "Bookmark Official Sites", desc: "Save the real URLs for your exchange, wallet, and XRPL explorer to avoid phishing." },
                { title: "Be Skeptical of \"Urgency\"", desc: "Scammers create fake urgency — \"limited time,\" \"act now,\" \"last chance.\" Legitimate opportunities don't pressure you." },
              ]} />
            </div>
            <div className="mt-6">
              <GlowCard
                title="Hardware Wallet"
                value="#1 Protection"
                subtitle="A hardware wallet is the single most effective tool against crypto scams"
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ready to secure your XRP? Check out our <Link href="/learn/xrp-self-custody-guide" className="text-xrp-accent underline decoration-xrp-accent/30">self-custody guide</Link> and consider a <a href="https://allaboutxrp.com/go/ledger" className="text-xrp-accent underline decoration-xrp-accent/30">Ledger hardware wallet</a> for maximum security.
            </p>
          </RevealSection>

          <RevealSection id="report" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Report XRP Scams</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              If you encounter or fall victim to an XRP scam, report it immediately to help protect others.
            </p>
            <div className="mt-5">
              <DataTable
                headers={["Where to Report", "Details"]}
                rows={[
                  ["FTC", "reportfraud.ftc.gov — U.S. Federal Trade Commission"],
                  ["FBI IC3", "ic3.gov — Internet Crime Complaint Center"],
                  ["Social Media Platform", "Report the scam account on X/Twitter, YouTube, Telegram, etc."],
                  ["Your Exchange", "If funds were sent through an exchange, contact their fraud department"],
                  ["Local Law Enforcement", "File a police report for documentation and potential investigation"],
                  ["XRPL Foundation", "Report scam tokens and addresses to the XRPL community"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://xrpl.org/docs" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL.org — Official Documentation</a></li>
              <li>• <a href="https://www.ftc.gov/cryptocurrency-scams" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">FTC — Cryptocurrency Scams</a></li>
              <li>• <a href="https://ripple.com/insights/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Insights — Official Communications</a></li>
            </ul>
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-phishing-protection", label: "Phishing Protection", desc: "Protect your wallet from phishing" },
              { href: "/learn/recover-lost-xrp", label: "Recover Lost XRP", desc: "Options for lost access" },
              { href: "/learn/xrp-self-custody-guide", label: "Self-Custody Guide", desc: "Be your own bank" },
              { href: "/learn/xrp-destination-tag-guide", label: "Destination Tags", desc: "Don't lose XRP in transfers" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Best wallets compared" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How the XRPL works" },
              { href: "/learn/what-is-xrp", label: "What Is XRP?", desc: "Start from the basics" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Secure Your XRP Today"
          description="Don't wait until it's too late. Move your XRP to self-custody and protect yourself from scams."
          primaryHref="/learn/xrp-self-custody-guide"
          primaryLabel="Self-Custody Guide →"
          secondaryHref="/learn/xrp-wallets"
          secondaryLabel="Best XRP Wallets"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, FTC, Ripple Insights.</em>
        </p>
      </div>
    </>
  );
}
