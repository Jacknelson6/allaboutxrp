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
      <main id="main-content" className="min-h-screen bg-black text-white">
        <article className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
          <p className="text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#0085FF]">Home</Link>
            {" / "}
            <Link href="/answers" className="hover:text-[#0085FF]">Answers</Link>
            {" / "}
            <span className="text-gray-400">{title}</span>
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">{title}</h1>

          <p className="text-xs text-gray-500 mb-8">Last Updated: February 11, 2026</p>

          {/* Direct Answer Box — the most critical AEO element */}
          <div className="direct-answer rounded-xl border border-[#0085FF]/30 bg-[#0085FF]/[0.06] p-6 mb-10">
            <p className="text-lg text-white leading-relaxed font-medium">{directAnswer}</p>
          </div>

          {disclaimer && (
            <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/[0.04] px-4 py-3 mb-8 text-sm text-yellow-200/80">
              <strong>Disclaimer:</strong> This content is for educational purposes only and does not constitute financial advice. Always do your own research before making investment decisions.
            </div>
          )}

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#0085FF]">The Short Answer</h2>
            {shortAnswer}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#0085FF]">The Full Explanation</h2>
            {fullExplanation}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#0085FF]">What This Means for You</h2>
            {whatThisMeans}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#0085FF]">Related Questions</h2>
            <div className="space-y-4">
              {relatedQuestions.map((rq) => (
                <div key={rq.slug} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                  <Link href={`/answers/${rq.slug}`} className="text-[#0085FF] font-semibold hover:underline">
                    {rq.question}
                  </Link>
                  <p className="text-sm text-gray-400 mt-1">{rq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#0085FF]">Sources</h2>
            <ul className="space-y-2">
              {sources.map((s) => (
                <li key={s.url} className="text-sm">
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0085FF] underline">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
