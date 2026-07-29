import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CircleHelp, Scale, ShieldCheck, WalletCards } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import { buildBreadcrumbSchema } from "@/lib/utils/seo";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Answers — Clear, Source-Led XRP Explanations",
  description: "Get concise, source-led answers about XRP, the XRP Ledger, Ripple, supply, wallets, security, risk, and legal history.",
  openGraph: {
    title: "XRP Answers | AllAboutXRP",
    description: "Concise XRP answers with supporting context and links to primary sources.",
    url: "https://allaboutxrp.com/answers",
    type: "website",
  },
  alternates: { canonical: "https://allaboutxrp.com/answers" },
};

const answerGroups = [
  {
    title: "XRP fundamentals",
    description: "Understand the asset, ledger, supply, and relationship to Ripple.",
    icon: CircleHelp,
    answers: [
      {
        href: "/learn/what-is-xrp",
        title: "What is XRP?",
        snippet: "XRP is the native digital asset of the XRP Ledger, a public, open-source network built for moving value. XRP is used for transaction costs and can act as a bridge between assets, but owning XRP does not represent ownership in Ripple, the private company associated with parts of the ecosystem.",
        source: { label: "XRPL: XRP overview", href: "https://xrpl.org/about/xrp" },
      },
      {
        href: "/learn/how-does-xrp-work",
        title: "How does XRP work?",
        snippet: "XRP transactions are signed by account holders and proposed to the XRP Ledger network. Independent validators compare proposed transaction sets and reach agreement through the XRPL consensus protocol. Once validated, a transaction becomes part of the shared ledger without proof-of-work mining or a block reward.",
        source: { label: "XRPL consensus protocol", href: "https://xrpl.org/docs/concepts/consensus-protocol" },
      },
      {
        href: "/learn/what-is-ripple",
        title: "Is XRP the same as Ripple?",
        snippet: "No. XRP is a digital asset, the XRP Ledger is an open-source network, and Ripple is a private technology company. Ripple contributes software and participates in the ecosystem, but the ledger can operate independently and XRP holders do not receive equity or governance rights in Ripple.",
        source: { label: "Ripple: company overview", href: "https://ripple.com/company/" },
      },
      {
        href: "/learn/xrp-supply-explained",
        title: "How many XRP exist?",
        snippet: "The XRP Ledger began with a fixed supply of 100 billion XRP. New XRP cannot be created through mining, and small transaction costs are permanently destroyed. Circulating-supply estimates can differ because providers classify escrowed, company-held, and other non-circulating balances differently.",
        source: { label: "XRPL: XRP supply", href: "https://xrpl.org/about/xrp" },
      },
      {
        href: "/learn/can-xrp-be-mined",
        title: "Can XRP be mined?",
        snippet: "No. All XRP was created when the XRP Ledger began, and its consensus process does not reward miners or validators with newly issued XRP. Validators help the network agree on transaction order, while transaction costs are destroyed instead of being paid to a block producer.",
        source: { label: "XRPL: XRP overview", href: "https://xrpl.org/about/xrp" },
      },
    ],
  },
  {
    title: "Buying and security",
    description: "Use a risk-aware process for acquiring, sending, and protecting XRP.",
    icon: WalletCards,
    answers: [
      {
        href: "/learn/how-to-buy-xrp",
        title: "How do you buy XRP?",
        snippet: "Choose a venue that legally serves your jurisdiction and supports XRP withdrawals, complete its identity checks, deposit funds, and review the full order preview before confirming. Compare the live spread, trading fee, deposit cost, custody terms, and withdrawal rules rather than relying on a single advertised fee.",
        source: { label: "Investor.gov: crypto assets", href: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/crypto-assets" },
      },
      {
        href: "/learn/how-to-store-xrp-safely",
        title: "How do you store XRP safely?",
        snippet: "Safe XRP storage starts with deciding who controls the private keys. For self-custody, protect the recovery secret offline, verify wallet software and destination addresses, make a small test transfer, and never share a seed phrase. Losing the secret can permanently remove access to the account.",
        source: { label: "XRPL: cryptographic keys", href: "https://xrpl.org/docs/concepts/accounts/cryptographic-keys" },
      },
      {
        href: "/learn/xrp-wallets",
        title: "Which type of XRP wallet should you use?",
        snippet: "Use a custodial account if you accept provider risk in exchange for account recovery and convenience. Use a self-custody software or hardware wallet if you can securely manage keys and backups. The best choice depends on transaction frequency, technical comfort, recovery planning, and the value being protected.",
        source: { label: "XRPL: crypto wallets", href: "https://xrpl.org/docs/introduction/crypto-wallets" },
      },
    ],
  },
  {
    title: "Risk and legal context",
    description: "Separate court records, investment risk, and valuation math from speculation.",
    icon: Scale,
    answers: [
      {
        href: "/learn/is-xrp-a-security",
        title: "Is XRP a security?",
        snippet: "There is no universal yes-or-no answer detached from a transaction and jurisdiction. In the United States, the district court distinguished institutional sales from certain other sales, entered a final judgment in 2024, and the parties dismissed their appeals in 2025. That history should not be simplified into one rule for every XRP transaction.",
        source: { label: "SEC: Ripple case resolution", href: "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369" },
      },
      {
        href: "/learn/is-xrp-a-good-investment",
        title: "Is XRP a good investment?",
        snippet: "XRP may fit some high-risk portfolios, but no asset is a good investment for everyone. Evaluate the use case, supply and ownership concentration, regulation, custody, competition, liquidity, and your loss capacity. A price thesis should include conditions that would prove it wrong, not only upside catalysts.",
        source: { label: "Investor.gov: crypto asset risks", href: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/crypto-assets" },
      },
      {
        href: "/learn/xrp-price-prediction",
        title: "Can XRP price predictions be trusted?",
        snippet: "Treat XRP price predictions as scenarios, not forecasts. A useful scenario states its date, target market capitalization, circulating-supply assumption, catalysts, risks, and time horizon. Predictions that offer certainty, ignore supply math, or select only favorable evidence are not a reliable basis for a financial decision.",
        source: { label: "Investor.gov: crypto asset risks", href: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/crypto-assets" },
      },
      {
        href: "/learn/xrp-risks",
        title: "What are the main XRP risks?",
        snippet: "The principal XRP risks include severe price volatility, loss of keys or exchange access, regulatory changes, fraud, liquidity disruptions, technical or ecosystem failures, and dependence on adoption assumptions that may not materialize. Risk should be assessed separately from enthusiasm for Ripple or the XRP Ledger.",
        source: { label: "SEC: crypto asset investor alert", href: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/crypto-assets" },
      },
    ],
  },
];

const questions = answerGroups.flatMap((group) => group.answers);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://allaboutxrp.com/answers#collection",
  name: "XRP Answers",
  url: "https://allaboutxrp.com/answers",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: questions.map((question, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: question.title,
      url: `https://allaboutxrp.com${question.href}`,
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((question) => ({
    "@type": "Question",
    name: question.title,
    acceptedAnswer: { "@type": "Answer", text: question.snippet },
  })),
};

export default function AnswersHub() {
  return (
    <>
      <SEOSchema schema={buildBreadcrumbSchema([
        { name: "Home", url: "https://allaboutxrp.com" },
        { name: "Answers" },
      ])} />
      <SEOSchema schema={collectionSchema} />
      <SEOSchema schema={faqSchema} />

      <main id="main-content" className="bg-surface-primary">
        <header className="border-b border-surface-border">
          <div className="site-container grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
                <Link href="/" className="inline-flex min-h-11 items-center transition-colors hover:text-text-primary">Home</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span className="text-text-primary">Answers</span>
              </nav>
              <p className="editorial-kicker">The XRP answer desk</p>
              <h1 className="mt-5 max-w-3xl text-[clamp(3.25rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-text-primary">
                The answer first. The evidence next.
              </h1>
            </div>
            <div className="answer-block max-w-xl">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                <ShieldCheck className="h-4 w-4 text-xrp-accent" aria-hidden="true" />
                How these answers work
              </div>
              <p className="mt-3 text-[15px] leading-7 text-text-secondary">
                Each answer is written to stand on its own, then connects to a deeper guide, visible sources, and the
                uncertainty or limitations that matter.
              </p>
              <p className="mt-4 font-mono text-xs text-text-secondary">
                Reviewed <time dateTime="2026-07-29">July 29, 2026</time>
              </p>
            </div>
          </div>
        </header>

        <div>
          {answerGroups.map((group, groupIndex) => (
            <section key={group.title} className={groupIndex % 2 === 1 ? "border-y border-surface-border bg-surface-card" : "bg-surface-primary"} aria-labelledby={`answers-${groupIndex}`}>
              <div className="site-container section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-xrp-accent/10 text-xrp-accent">
                    <group.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h2 id={`answers-${groupIndex}`} className="mt-5 text-4xl text-text-primary">{group.title}</h2>
                  <p className="mt-4 max-w-md text-base leading-7 text-text-secondary">{group.description}</p>
                </div>
                <ol className="divide-y divide-surface-border border-y border-surface-border">
                  {group.answers.map((answer, index) => (
                    <li key={answer.href} className="grid gap-3 py-6 sm:grid-cols-[2rem_1fr] sm:px-3">
                        <span className="pt-1 font-mono text-xs text-text-secondary">{String(index + 1).padStart(2, "0")}</span>
                        <div>
                          <h3 className="font-sans text-lg font-semibold text-text-primary">
                            <Link href={answer.href} className="inline-flex items-center gap-2 transition-colors hover:text-xrp-accent-bright">
                              {answer.title}
                              <ArrowUpRight className="h-4 w-4 text-text-secondary" aria-hidden="true" />
                            </Link>
                          </h3>
                          <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">{answer.snippet}</p>
                          <a href={answer.source.href} data-source-link="true" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-xs font-semibold text-xrp-accent-bright underline decoration-xrp-accent/30 underline-offset-4 hover:decoration-xrp-accent-bright">
                            Source: {answer.source.label}
                          </a>
                        </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ))}
        </div>

        <section className="border-y border-surface-border bg-[#07111a]">
          <div className="site-container grid gap-7 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-3xl text-text-primary">Need the complete explanation?</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary">Follow a structured path through the XRP learning center.</p>
            </div>
            <Link href="/learn" className="btn-primary px-5">Explore XRP guides</Link>
          </div>
        </section>
      </main>
    </>
  );
}
