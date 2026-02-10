import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { ChevronLeft, ChevronRight, Calendar, Share2, Link2 } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import { getAllRecaps, getRecapByDate, getAdjacentRecaps } from "@/lib/utils/news";
import ShareButtons from "./ShareButtons";

interface Props {
  params: Promise<{ date: string }>;
}

export async function generateStaticParams() {
  return getAllRecaps().map((r) => ({ date: r.date }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const recap = getRecapByDate(date);
  if (!recap) return {};
  return {
    title: `${recap.title} — AllAboutXRP`,
    description: recap.description || recap.excerpt,
    openGraph: {
      title: recap.title,
      description: recap.description || recap.excerpt,
      url: `https://allaboutxrp.com/news/recaps/${date}`,
      type: "article",
      publishedTime: `${date}T12:00:00Z`,
    },
  };
}

export default async function RecapPage({ params }: Props) {
  const { date } = await params;
  const recap = getRecapByDate(date);
  if (!recap) notFound();

  const { prev, next } = getAdjacentRecaps(date);
  const processed = await remark().use(remarkHtml).process(recap.content);
  const html = processed.toString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: recap.title,
    description: recap.description || recap.excerpt,
    datePublished: `${date}T12:00:00Z`,
    dateModified: `${date}T12:00:00Z`,
    author: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com" },
    publisher: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com" },
    mainEntityOfPage: `https://allaboutxrp.com/news/recaps/${date}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
      { "@type": "ListItem", position: 2, name: "News", item: "https://allaboutxrp.com/news" },
      { "@type": "ListItem", position: 3, name: "Daily Recaps", item: "https://allaboutxrp.com/news/recaps" },
      { "@type": "ListItem", position: 4, name: recap.title, item: `https://allaboutxrp.com/news/recaps/${date}` },
    ],
  };

  const formattedDate = new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <SEOSchema schema={[articleSchema, breadcrumbSchema]} />
      <article className="mx-auto max-w-3xl px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-text-secondary mb-8">
          <Link href="/news" className="hover:text-xrp-accent transition-colors">News</Link>
          <span>/</span>
          <Link href="/news/recaps" className="hover:text-xrp-accent transition-colors">Daily Recaps</Link>
          <span>/</span>
          <span className="text-text-primary">{date}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formattedDate}</time>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl leading-tight">
            {recap.title}
          </h1>
          {recap.description && (
            <p className="mt-3 text-lg text-text-secondary">{recap.description}</p>
          )}
        </header>

        {/* Share */}
        <ShareButtons date={date} title={recap.title} />

        {/* Content */}
        <div
          className="prose prose-invert max-w-none
            prose-headings:font-display prose-headings:text-text-primary prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-surface-border prose-h2:pb-2
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-text-secondary prose-p:leading-relaxed
            prose-a:text-xrp-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-text-primary
            prose-li:text-text-secondary
            prose-ul:my-3 prose-ol:my-3
            prose-blockquote:border-xrp-accent/30 prose-blockquote:text-text-secondary
            prose-hr:border-surface-border"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Prev / Next */}
        <div className="mt-12 flex items-center justify-between gap-4 border-t border-surface-border pt-6">
          {prev ? (
            <Link
              href={`/news/recaps/${prev}`}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-xrp-accent transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>{prev}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/news/recaps/${next}`}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-xrp-accent transition-colors"
            >
              <span>{next}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </article>
    </>
  );
}
