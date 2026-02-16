import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, DataTable, FAQAccordion, MisconceptionCard, IconList,
  TLDRBox, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Myths & Misconceptions Debunked",
  description:
    "Is XRP centralized? Is it a security? Can Ripple print XRP? We debunk the most common XRP myths with facts and sources.",
  keywords: ["XRP myths", "XRP FUD", "is XRP centralized", "is XRP a security", "XRP misconceptions"],
  openGraph: {
    title: "XRP Myths & Misconceptions Debunked | AllAboutXRP",
    description:
      "Fact-checking the biggest XRP myths: centralization, SEC security status, Ripple control, bank adoption, and more.",
    url: "https://allaboutxrp.com/learn/xrp-myths",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Myths Debunked | AllAboutXRP",
    description:
      "We debunk the most common XRP myths with facts and verifiable sources.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-myths",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Myths & Misconceptions Debunked",
    description: "A comprehensive fact-check of the most common XRP myths and misconceptions, including centralization claims, SEC security status, and more.",
    url: "https://allaboutxrp.com/learn/xrp-myths",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Myths Debunked" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-myths" }),
  buildFAQSchema([
    { question: "Is XRP centralized?", answer: "No. The XRP Ledger is maintained by over 150 independent validators worldwide. Ripple operates only about 6% of them and has no special power over the network. Anyone can run a validator." },
    { question: "Is XRP a security?", answer: "No. In July 2023, Judge Analisa Torres ruled that XRP sold on public exchanges to retail investors is not a security under U.S. law. This was affirmed in the SEC v. Ripple case." },
    { question: "Does Ripple control the XRP Ledger?", answer: "No. The XRPL is open-source and decentralized. Ripple contributes to development but cannot unilaterally change the protocol. Validators must reach consensus for any changes." },
    { question: "Can Ripple create more XRP?", answer: "No. It is cryptographically impossible to mint new XRP. The XRPL protocol has no minting function. All 100 billion XRP were created at genesis in 2012." },
    { question: "Do banks actually use XRP?", answer: "Yes. Through Ripple's On-Demand Liquidity (ODL), financial institutions in 55+ countries use XRP as a bridge currency for cross-border payments. SBI Holdings, one of Japan's largest financial groups, is a notable example." },
  ]),
];

const faqItems = [
  { q: "Is XRP centralized?", a: "No. The XRP Ledger is maintained by over 150 independent validators worldwide. Ripple operates only about 6% of them and has no special power over the network. Anyone can run a validator, and the default UNL is chosen by the community, not Ripple alone." },
  { q: "Is XRP a security?", a: "No. In July 2023, Judge Analisa Torres ruled that XRP sold on public exchanges is not a security under U.S. law. The SEC case against Ripple resulted in a $125M fine for institutional sales, but XRP itself was not classified as a security." },
  { q: "Can Ripple create more XRP?", a: "Absolutely not. The XRP Ledger protocol has no minting function. It is cryptographically impossible to create new XRP. All 100 billion XRP that will ever exist were created in the genesis ledger in 2012." },
  { q: "Do banks actually use XRP?", a: "Yes. Through Ripple's ODL product, financial institutions in 55+ countries actively use XRP as a bridge currency. SBI Holdings (Japan), Tranglo (Southeast Asia), and many licensed payment providers use XRP for real cross-border transactions." },
  { q: "Is XRP just a 'banker coin' with no utility?", a: "XRP has broad utility beyond banking: it powers the XRPL's built-in DEX, AMM, NFT marketplace, escrow system, and payment channels. It's also used for tokenized assets, stablecoins (RLUSD), and everyday payments via wallets like Xaman." },
];

export default function XRPMythsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Myths &"
          titleAccent="Misconceptions Debunked"
          subtitle="XRP is one of the most misunderstood cryptocurrencies. From centralization claims to security status FUD, we fact-check every major myth with verifiable sources."
          breadcrumbLabel="XRP Myths Debunked"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>XRP is <strong className="text-text-primary">not centralized</strong> (150+ validators, Ripple runs ~6%), <strong className="text-text-primary">not a security</strong> (Torres ruling, 2023), and Ripple <strong className="text-text-primary">cannot create new XRP</strong> (cryptographically impossible). Banks <em>do</em> use XRP via <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> in 55+ countries. Estimated reading time: <strong className="text-text-primary">9 minutes</strong>.</p>
        </TLDRBox>

        <SectionNav items={[
          { id: "centralized", label: "\"XRP Is Centralized\"" },
          { id: "ripple-controls", label: "\"Ripple Controls XRP\"" },
          { id: "security", label: "\"XRP Is a Security\"" },
          { id: "banks", label: "\"Banks Don't Use XRP\"" },
          { id: "no-utility", label: "\"XRP Has No Utility\"" },
          { id: "print-xrp", label: "\"Ripple Can Print XRP\"" },
          { id: "more-myths", label: "More Myths" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== MYTH 1: CENTRALIZED ===== */}
          <RevealSection id="centralized">
            <h2 className="text-2xl font-bold text-text-primary">Myth #1: &quot;XRP Is Centralized&quot;</h2>

            <div className="mt-5">
              <MisconceptionCard
                myth="XRP is centralized because Ripple controls the network"
                reality="The XRP Ledger is maintained by 150+ independent validators globally. Ripple operates only ~6% of them. Ripple has no special authority over the network — it cannot reverse transactions, freeze funds, or override consensus."
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              The confusion stems from conflating <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple (the company)</Link> with the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger (the blockchain)</Link>. They are not the same thing. The XRPL is open-source software that anyone can run, audit, and contribute to.
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "150+ Validators", desc: "Independent validators operated by universities, exchanges, companies, and individuals worldwide" },
                { title: "Open-Source", desc: "The XRPL codebase is publicly available on GitHub — anyone can review or contribute" },
                { title: "No Special Privileges", desc: "Ripple's validators carry no more weight than any other validator on the network" },
                { title: "UNL Independence", desc: "The default Unique Node List is curated by the XRPL Foundation, not Ripple alone" },
                { title: "Permissionless", desc: "Anyone can create an account, send transactions, or run a validator without approval" },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Comparison" variant="info">
                <p>Bitcoin has ~4 mining pools controlling over 60% of hashrate. Ethereum has centralization concerns around Lido&apos;s staking dominance. <strong className="text-text-primary">The XRPL&apos;s validator distribution is arguably more decentralized</strong> than many networks that claim decentralization as a core feature.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== MYTH 2: RIPPLE CONTROLS ===== */}
          <RevealSection id="ripple-controls" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Myth #2: &quot;Ripple Controls XRP&quot;</h2>

            <div className="mt-5">
              <MisconceptionCard
                myth="Ripple can do whatever they want with the XRP Ledger"
                reality="Ripple is a contributor to the XRPL ecosystem, not its controller. Protocol changes require supermajority consensus (80%) among independent validators. Ripple cannot unilaterally change rules, reverse transactions, or freeze accounts."
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              While Ripple is the largest corporate contributor to XRPL development, the network operates independently. If Ripple disappeared tomorrow, the XRP Ledger would continue to function. The <strong className="text-text-primary">XRPL Foundation</strong> (an independent entity) also supports development and governance.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Aspect", "Ripple's Role", "Reality"]}
                rows={[
                  ["Protocol Changes", "Proposes amendments", "Requires 80% validator consensus"],
                  ["Validators", "Runs ~6% of validators", "No special voting power"],
                  ["XRP Holdings", "Holds XRP in escrow", "Escrow is protocol-enforced, not discretionary"],
                  ["Development", "Major contributor", "XRPL Foundation + community also contribute"],
                  ["Network Operation", "Participant", "Network runs independently of Ripple"],
                ]}
                highlightCol={2}
              />
            </div>
          </RevealSection>

          {/* ===== MYTH 3: SECURITY ===== */}
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Myth #3: &quot;XRP Is a Security&quot;</h2>

            <div className="mt-5">
              <MisconceptionCard
                myth="The SEC proved XRP is an unregistered security"
                reality="The opposite. In July 2023, Judge Analisa Torres ruled that XRP sold on public exchanges to retail investors is NOT a security. Ripple was fined $125M for institutional sales practices, but XRP itself was not classified as a security."
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              The SEC filed suit against Ripple in December 2020, but the case&apos;s outcome was largely favorable to XRP. Key rulings from the <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v. Ripple case</Link>:
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "Programmatic Sales ≠ Securities", desc: "XRP sold on exchanges to retail buyers does not constitute an investment contract (security)" },
                { title: "XRP Itself Is Not a Security", desc: "The court distinguished between the token and the manner of its sale" },
                { title: "$125M Fine", desc: "Ripple paid a civil penalty for institutional sales — far less than the SEC's $2B demand" },
                { title: "Exchange Relistings", desc: "Major U.S. exchanges like Coinbase and Kraken relisted XRP following the ruling" },
                { title: "ETF Filings", desc: "Multiple firms filed for spot XRP ETFs after regulatory clarity was established" },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Legal Precedent" variant="success">
                <p>The Torres ruling set a significant legal precedent for the entire cryptocurrency industry. It established that a <strong className="text-text-primary">digital asset can be sold as part of an investment contract in one context but not be a security in another</strong>. This nuanced ruling has been cited in other crypto cases.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== MYTH 4: BANKS ===== */}
          <RevealSection id="banks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Myth #4: &quot;Banks Don&apos;t Actually Use XRP&quot;</h2>

            <div className="mt-5">
              <MisconceptionCard
                myth="No bank or financial institution actually uses XRP for real transactions"
                reality="Ripple's ODL processes real cross-border payments using XRP in 55+ countries. SBI Holdings (Japan's largest financial group), Tranglo, and hundreds of licensed payment providers actively use XRP as a bridge currency."
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              The confusion often arises because <Link href="/learn/ripplenet" className="text-xrp-accent underline decoration-xrp-accent/30">RippleNet</Link> has two tiers: a messaging layer (which some banks use without XRP) and <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> (which uses XRP directly). Critics focus on the messaging layer and ignore ODL&apos;s growing transaction volume.
            </p>

            <div className="mt-6">
              <HighlightBox title="Real Numbers" variant="accent">
                <p><Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s partner network</Link> includes 300+ financial institutions. ODL corridors are live in 55+ countries. With the acquisition of Hidden Road (now <Link href="/learn/ripple-prime" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Prime</Link>), over <strong className="text-text-primary">$3 trillion in annual clearing volume</strong> could eventually settle on the XRPL.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== MYTH 5: NO UTILITY ===== */}
          <RevealSection id="no-utility" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Myth #5: &quot;XRP Has No Utility&quot;</h2>

            <div className="mt-5">
              <MisconceptionCard
                myth="XRP is useless — it's just a speculative token"
                reality="XRP is the native asset of one of the most feature-rich blockchains in existence. It's used for cross-border payments, DEX trading, AMM liquidity, NFTs, escrow, tokenized assets, stablecoins, and more."
              />
            </div>

            <div className="mt-6">
              <DataTable
                headers={["Use Case", "Description", "Status"]}
                rows={[
                  ["Cross-Border Payments", "Bridge currency via ODL in 55+ countries", "Live"],
                  ["Built-in DEX", "Native order book for any XRPL-issued asset", "Live"],
                  ["AMM", "Automated Market Maker for decentralized liquidity", "Live"],
                  ["NFTs (XLS-20)", "Native NFT minting and trading", "Live"],
                  ["Escrow", "Time-locked and conditional escrow contracts", "Live"],
                  ["Stablecoins", "RLUSD and other issued currencies", "Live"],
                  ["Token Issuance", "Issue any asset on the XRPL", "Live"],
                  ["Payment Channels", "Off-ledger micropayment streaming", "Live"],
                ]}
                highlightCol={2}
              />
            </div>
          </RevealSection>

          {/* ===== MYTH 6: PRINT XRP ===== */}
          <RevealSection id="print-xrp" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Myth #6: &quot;Ripple Can Print XRP&quot;</h2>

            <div className="mt-5">
              <MisconceptionCard
                myth="Ripple can create new XRP whenever they want, like the Federal Reserve prints money"
                reality="It is cryptographically impossible to create new XRP. The XRPL protocol has no minting function. All 100 billion XRP were created at genesis in 2012. The supply can only decrease through transaction fee burns — never increase."
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              This is perhaps the most easily disproven myth. The <Link href="/learn/xrp-supply-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP supply</Link> is hard-coded into the protocol. You can verify this by reading the XRPL source code on GitHub — there is literally no function to create new XRP tokens.
            </p>

            <div className="mt-6">
              <HighlightBox title="Verify It Yourself" variant="info">
                <p>The XRPL is open-source. Anyone can audit the code at <a href="https://github.com/XRPLF/rippled" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">github.com/XRPLF/rippled</a>. There is <strong className="text-text-primary">no minting function</strong> in the codebase. XRP&apos;s supply is fixed forever.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== MORE MYTHS ===== */}
          <RevealSection id="more-myths" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">More Myths Quickly Debunked</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="XRP is a scam" reality="XRP has been operating since 2012, survived a 4-year SEC lawsuit, has 300+ institutional partners, and powers real financial infrastructure. It's one of the most legally tested digital assets in existence." />
              <MisconceptionCard myth="XRP will go to zero" reality="XRP has survived multiple bear markets, regulatory attacks, and exchange delistings — and recovered stronger each time. With expanding institutional adoption and regulatory clarity, the fundamentals are stronger than ever." />
              <MisconceptionCard myth="XRP was pre-mined (and that's bad)" reality="XRP was pre-created, not pre-mined. There's no mining on the XRPL. The fixed supply was a design choice to avoid energy waste and provide immediate utility. Bitcoin's slow mining schedule is a different approach, not a superior one." />
              <MisconceptionCard myth="Escrow unlocks crash the price" reality="Monthly escrow unlocks are fully predictable and have been priced in since 2017. Ripple re-escrows 60-80% immediately. Markets don't react to expected events." />
              <MisconceptionCard myth="Only crypto bros care about XRP" reality="Ripple has partnerships with central banks, major financial institutions, and enterprise clients. XRP is one of the most institutionally connected digital assets in the world." />
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
              <li>• <a href="https://xrpl.org/decentralization.html" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPL.org — Decentralization & Validators</a></li>
              <li>• <a href="https://casetext.com/case/sec-v-ripple-labs-inc-5" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">SEC v. Ripple Labs — Court Ruling (Torres, 2023)</a></li>
              <li>• <a href="https://github.com/XRPLF/rippled" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPL Source Code — GitHub (XRPLF/rippled)</a></li>
              <li>• <a href="https://ripple.com/customers" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">Ripple — Customer & Partner Network</a></li>
              <li>• <a href="https://xrpscan.com/metrics" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPScan — Network Metrics & Validator Data</a></li>
            </ul>
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How the XRPL works" },
              { href: "/learn/history", label: "XRP History & Timeline", desc: "The full story" },
              { href: "/learn/xrp-supply-explained", label: "XRP Supply Explained", desc: "Supply & inflation facts" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Who uses XRP" },
              { href: "/learn/xrp-glossary", label: "XRP Glossary", desc: "Key terms explained" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Get the Facts on XRP"
          description="Don't let myths and FUD cloud your understanding. Explore our comprehensive library of XRP guides backed by verifiable sources."
          primaryHref="/learn/what-is-xrp"
          primaryLabel="Start with the Basics →"
          secondaryHref="/learn/xrp-supply-explained"
          secondaryLabel="Understand XRP Supply"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, SEC court filings, GitHub XRPLF/rippled, Ripple official documentation, XRPScan.</em>
        </p>
      </div>
    </>
  );
}
