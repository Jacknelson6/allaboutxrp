import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";
import { getAllFAQSlugs, getFAQBySlug, getRelatedFAQs, slugify } from "@/lib/utils/faq";
import { faqExpanded } from "@/data/faq-expanded";
import FAQBlogContent from "./FAQBlogContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllFAQSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFAQBySlug(slug);
  if (!faq) return {};

  return {
    title: `${faq.question} — XRP FAQ`,
    description: faq.answer.slice(0, 160),
    openGraph: {
      title: `${faq.question} | AllAboutXRP FAQ`,
      description: faq.answer.slice(0, 160),
      url: `https://allaboutxrp.com/learn/faq/${slug}`,
      type: "article",
    },
  };
}

export default async function FAQBlogPage({ params }: Props) {
  const { slug } = await params;
  const faq = getFAQBySlug(slug);
  if (!faq) notFound();

  const expandedContent = faqExpanded[slug] || null;
  const related = getRelatedFAQs(slug, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: faq.question,
    description: faq.answer,
    url: `https://allaboutxrp.com/learn/faq/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "AllAboutXRP",
      url: "https://allaboutxrp.com",
    },
    mainEntityOfPage: `https://allaboutxrp.com/learn/faq/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://allaboutxrp.com/#what-is-xrp" },
      { "@type": "ListItem", position: 3, name: "FAQ", item: "https://allaboutxrp.com/learn/faq" },
      { "@type": "ListItem", position: 4, name: faq.question, item: `https://allaboutxrp.com/learn/faq/${slug}` },
    ],
  };

  return (
    <>
      <SEOSchema schema={[articleSchema, faqSchema, breadcrumbSchema]} />
      <article className="mx-auto max-w-3xl px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs text-text-secondary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-secondary/60">Learn</span>
          <span>/</span>
          <Link href="/learn/faq" className="hover:text-xrp-accent transition-colors">FAQ</Link>
          <span>/</span>
          <span className="text-text-primary truncate max-w-[200px]">{faq.question}</span>
        </nav>

        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl leading-tight">
          {faq.question}
        </h1>

        {/* Quick answer box */}
        <div className="mt-6 rounded-xl border border-xrp-accent/20 bg-xrp-accent/[0.03] p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-xrp-accent mb-2">Quick Answer</p>
          <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
        </div>

        {/* Expanded content */}
        {expandedContent ? (
          <FAQBlogContent content={expandedContent} />
        ) : (
          <div className="mt-8 prose-custom">
            <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
          </div>
        )}

        {/* Related questions */}
        {related.length > 0 && (
          <section className="mt-16 border-t border-surface-border/50 pt-8">
            <h2 className="font-display text-xl font-bold text-text-primary mb-4">Related Questions</h2>
            <div className="grid gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/learn/faq/${r.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-surface-border bg-surface-card/50 px-5 py-4 transition-colors hover:border-xrp-accent/30 hover:bg-surface-elevated/50"
                >
                  <span className="text-sm text-text-primary group-hover:text-xrp-accent transition-colors">{r.question}</span>
                  <span className="ml-auto text-text-secondary group-hover:text-xrp-accent transition-colors">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to FAQ */}
        <div className="mt-8 text-center">
          <Link
            href="/learn/faq"
            className="inline-flex items-center gap-2 text-sm font-medium text-xrp-accent hover:text-xrp-accent-bright transition-colors"
          >
            ← Back to all FAQ
          </Link>
        </div>
      </article>
    </>
  );
}
