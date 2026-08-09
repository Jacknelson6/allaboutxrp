import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";

interface RelatedQuestion {
  question: string;
  answer: string;
  slug: string;
}

interface Source {
  name: string;
  url: string;
}

interface AnswerPageProps {
  title: string;
  slug: string;
  directAnswer: string;
  shortAnswer: React.ReactNode;
  fullExplanation: React.ReactNode;
  whatThisMeans: React.ReactNode;
  relatedQuestions: RelatedQuestion[];
  sources: Source[];
  faqSchema: { question: string; answer: string }[];
  disclaimer?: boolean;
}

export default function AnswerPageLayout({
  title,
  slug,
  directAnswer,
  shortAnswer,
  fullExplanation,
  whatThisMeans,
  relatedQuestions,
  sources,
  faqSchema,
  disclaimer = false,
}: AnswerPageProps) {
  const url = `https://allaboutxrp.com/answers/${slug}`;
  const schemas = [
    buildArticleSchema({
      headline: title,
      description: directAnswer,
      url,
      datePublished: "2026-02-11",
      dateModified: "2026-02-11",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: "https://allaboutxrp.com" },
      { name: "Answers", url: "https://allaboutxrp.com/answers" },
      { name: title },
    ]),
    buildFAQSchema(faqSchema),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".direct-answer"],
      },
      url,
    },
  ];

  return (
    <>
      <SEOSchema schema={schemas} />
      <main id="main-content" className="min-h-screen bg-surface-primary text-text-primary">
        <article className="reading-container py-16 sm:py-24">
          <p className="mb-6 font-mono text-xs text-text-secondary">
            <Link href="/" className="hover:text-xrp-accent">Home</Link>
            {" / "}
            <Link href="/answers" className="hover:text-xrp-accent">Answers</Link>
            {" / "}
            <span>{title}</span>
          </p>

          <h1 className="mb-6 text-4xl leading-tight sm:text-6xl">{title}</h1>

          <p className="mb-8 font-mono text-xs text-text-secondary">Last reviewed: February 11, 2026</p>

          {/* Direct Answer Box — the most critical AEO element */}
          <div className="direct-answer mb-10 border border-xrp-accent/30 bg-xrp-accent/[0.06] p-6">
            <p className="text-lg font-medium leading-relaxed text-text-primary">{directAnswer}</p>
          </div>

          {disclaimer && (
            <div className="mb-8 border border-warning/30 bg-warning/[0.06] px-4 py-3 text-sm text-text-primary">
              <strong>Disclaimer:</strong> This content is for educational purposes only and does not constitute financial advice. Always do your own research before making investment decisions.
            </div>
          )}

          <section className="mb-10">
            <h2 className="mb-4 text-3xl text-text-primary">The short answer</h2>
            {shortAnswer}
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-3xl text-text-primary">The full explanation</h2>
            {fullExplanation}
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-3xl text-text-primary">What this means for you</h2>
            {whatThisMeans}
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-3xl text-text-primary">Related questions</h2>
            <div className="space-y-4">
              {relatedQuestions.map((rq) => (
                <div key={rq.slug} className="border border-surface-border bg-surface-card p-4">
                  <Link href={`/answers/${rq.slug}`} className="font-semibold text-xrp-accent hover:underline">
                    {rq.question}
                  </Link>
                  <p className="mt-1 text-sm text-text-secondary">{rq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-3xl text-text-primary">Sources</h2>
            <ul className="space-y-2">
              {sources.map((s) => (
                <li key={s.url} className="text-sm">
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-text-secondary underline hover:text-xrp-accent">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-surface-border pt-8">
            <h2 className="mb-4 text-3xl text-text-primary">Keep learning</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/learn/what-is-xrp" className="border border-surface-border bg-surface-card p-4 transition-colors hover:border-xrp-accent/50 hover:bg-surface-elevated">
                <span className="text-sm font-medium text-text-primary">What is XRP?</span>
                <p className="mt-0.5 text-xs text-text-secondary">Complete beginner&apos;s guide</p>
              </Link>
              <Link href="/learn/how-to-buy-xrp" className="border border-surface-border bg-surface-card p-4 transition-colors hover:border-xrp-accent/50 hover:bg-surface-elevated">
                <span className="text-sm font-medium text-text-primary">How to buy XRP</span>
                <p className="mt-0.5 text-xs text-text-secondary">Step-by-step buying guide</p>
              </Link>
              <Link href="/learn/how-to-buy-xrp" className="border border-surface-border bg-surface-card p-4 transition-colors hover:border-xrp-accent/50 hover:bg-surface-elevated">
                <span className="text-sm font-medium text-text-primary">Best XRP exchanges</span>
                <p className="mt-0.5 text-xs text-text-secondary">Where to buy XRP safely</p>
              </Link>
              <Link href="/learn/xrp-wallets" className="border border-surface-border bg-surface-card p-4 transition-colors hover:border-xrp-accent/50 hover:bg-surface-elevated">
                <span className="text-sm font-medium text-text-primary">Best XRP wallets</span>
                <p className="mt-0.5 text-xs text-text-secondary">Top wallet picks for 2026</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
