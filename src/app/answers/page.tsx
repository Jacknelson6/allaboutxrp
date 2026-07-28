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
      { href: "/learn/what-is-xrp", title: "What is XRP?", snippet: "XRP is the native digital asset of the open-source XRP Ledger." },
      { href: "/learn/how-does-xrp-work", title: "How does XRP work?", snippet: "XRPL validators agree on transactions without proof-of-work mining." },
      { href: "/learn/what-is-ripple", title: "Is XRP the same as Ripple?", snippet: "No. XRP is a digital asset; Ripple is a private technology company." },
      { href: "/learn/xrp-supply-explained", title: "How many XRP exist?", snippet: "The entire 100 billion XRP supply was created when the ledger began." },
      { href: "/learn/can-xrp-be-mined", title: "Can XRP be mined?", snippet: "No. XRP was created at genesis and XRPL does not use proof-of-work." },
    ],
  },
  {
    title: "Buying and security",
    description: "Use a risk-aware process for acquiring, sending, and protecting XRP.",
    icon: WalletCards,
    answers: [
      { href: "/learn/how-to-buy-xrp", title: "How do you buy XRP?", snippet: "Choose a regulated venue available in your jurisdiction and plan custody before funding." },
      { href: "/learn/how-to-store-xrp-safely", title: "How do you store XRP safely?", snippet: "Protect private keys, recovery phrases, devices, and destination-tag workflows." },
      { href: "/learn/xrp-wallets", title: "Which type of XRP wallet should you use?", snippet: "The right choice depends on custody responsibility, transaction frequency, and security needs." },
    ],
  },
  {
    title: "Risk and legal context",
    description: "Separate court records, investment risk, and valuation math from speculation.",
    icon: Scale,
    answers: [
      { href: "/learn/is-xrp-a-security", title: "Is XRP a security?", snippet: "The answer depends on the transaction and jurisdiction; U.S. court rulings require context." },
      { href: "/learn/is-xrp-a-good-investment", title: "Is XRP a good investment?", snippet: "That depends on your goals and risk tolerance; no price outcome is guaranteed." },
      { href: "/learn/xrp-price-prediction", title: "Can XRP price predictions be trusted?", snippet: "Only as scenarios whose assumptions, supply math, and uncertainty are made explicit." },
      { href: "/learn/xrp-risks", title: "What are the main XRP risks?", snippet: "Market volatility, custody loss, regulation, concentration, and technology all matter." },
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

export default function AnswersHub() {
  return (
    <>
      <SEOSchema schema={buildBreadcrumbSchema([
        { name: "Home", url: "https://allaboutxrp.com" },
        { name: "Answers" },
      ])} />
      <SEOSchema schema={collectionSchema} />

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
                    <li key={answer.href}>
                      <Link href={answer.href} className="group grid min-h-24 gap-3 py-5 transition-colors hover:bg-white/[0.02] sm:grid-cols-[2rem_1fr_auto] sm:items-start sm:px-3">
                        <span className="pt-1 font-mono text-xs text-text-secondary">{String(index + 1).padStart(2, "0")}</span>
                        <span>
                          <span className="block text-lg font-semibold text-text-primary transition-colors group-hover:text-xrp-accent-bright">{answer.title}</span>
                          <span className="mt-1 block text-sm leading-6 text-text-secondary">{answer.snippet}</span>
                        </span>
                        <ArrowUpRight className="hidden h-4 w-4 text-text-secondary transition-colors group-hover:text-xrp-accent sm:block" aria-hidden="true" />
                      </Link>
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
