import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Eye, ListChecks } from "lucide-react";
import { notFound } from "next/navigation";
import { accountablePublisher } from "@/lib/editorial";
import { getAllNewsArticles, getNewsArticle } from "@/lib/news-content";

const SITE_URL = "https://allaboutxrp.com";

type PageProps = { params: Promise<{ slug: string }> };

function getAbsoluteImageUrl(image: string) {
  return image.startsWith("/") ? `${SITE_URL}${image}` : image;
}

function getArticleWords(article: ReturnType<typeof getNewsArticle>) {
  if (!article) return 0;
  return article.sections
    .flatMap((section) => [...section.paragraphs, ...(section.bullets || [])])
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function generateStaticParams() {
  return getAllNewsArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getNewsArticle((await params).slug);
  if (!article) return { title: "Article Not Found" };
  const url = `${SITE_URL}/news/${article.slug}`;
  const image = getAbsoluteImageUrl(article.image || `${url}/opengraph-image`);
  const imageWidth = article.imageWidth || 1200;
  const imageHeight = article.imageHeight || 630;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    authors: [{ name: article.author, url: `${SITE_URL}/authors/jack-nelson` }],
    openGraph: { title: article.title, description: article.description, type: "article", url, siteName: "AllAboutXRP", publishedTime: article.publishedAt, modifiedTime: article.modifiedAt, images: [{ url: image, alt: article.imageAlt || article.title, width: imageWidth, height: imageHeight }] },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [image] },
  };
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
}

function formatSourceDate(value: string) {
  return new Date(`${value}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getNewsArticle((await params).slug);
  if (!article) notFound();
  const url = `${SITE_URL}/news/${article.slug}`;
  const image = getAbsoluteImageUrl(article.image || `${url}/opengraph-image`);
  const imageWidth = article.imageWidth || 1200;
  const imageHeight = article.imageHeight || 630;
  const articleSchema = {
    "@context": "https://schema.org", "@type": "NewsArticle", "@id": `${url}#article`, headline: article.title, description: article.description,
    url, inLanguage: "en-US", image: { "@type": "ImageObject", url: image, width: imageWidth, height: imageHeight }, thumbnailUrl: image,
    datePublished: article.publishedAt, dateModified: article.modifiedAt, author: accountablePublisher,
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "AllAboutXRP", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png`, width: 2000, height: 2000 } },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }, articleSection: article.category, keywords: article.keywords.join(", "),
    about: article.keywords.map((keyword) => ({ "@type": "Thing", name: keyword })), wordCount: getArticleWords(article),
    citation: article.sources.map((source) => source.url), isAccessibleForFree: true,
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "News", item: `${SITE_URL}/news` }, { "@type": "ListItem", position: 3, name: article.title, item: url },
  ] };

  return (
    <main id="main-content" className="min-h-screen bg-surface-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="news-reading-container py-12 sm:py-16">
        <Link href="/news" className="text-link">← All XRP news</Link>
        <header className="mt-7 border-b border-surface-border pb-8">
          <p className="editorial-kicker">{article.category}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-text-primary sm:text-5xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-8 text-text-secondary">{article.description}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
            <span>By <Link href="/authors/jack-nelson" rel="author" className="font-semibold text-text-primary hover:text-xrp-accent-bright">{article.author}</Link></span>
            <time dateTime={article.publishedAt}>Published {formatDate(article.publishedAt)}</time>
            {article.modifiedAt !== article.publishedAt && <time dateTime={article.modifiedAt}>Updated {formatDate(article.modifiedAt)}</time>}
          </div>
        </header>

        {article.image ? (
          <figure className="mt-8 overflow-hidden  border border-surface-border bg-surface-card  shadow-black/20">
            <Image src={article.image} alt={article.imageAlt || article.title} width={imageWidth} height={imageHeight} priority unoptimized sizes="(min-width: 1024px) 960px, calc(100vw - 2rem)" className="h-auto w-full" />
          </figure>
        ) : null}

        <aside className="mt-8  border border-xrp-accent/20 bg-xrp-accent/[0.06] p-6" aria-labelledby="takeaways-heading">
          <div className="flex items-center gap-2"><ListChecks className="h-5 w-5 text-xrp-accent" aria-hidden="true" /><h2 id="takeaways-heading" className="text-xl font-bold text-text-primary">Key takeaways</h2></div>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">{article.keyTakeaways.map((item) => <li key={item} className="flex gap-3"><span className="text-xrp-accent">•</span><span>{item}</span></li>)}</ul>
        </aside>

        <div className="news-article-prose prose prose-invert mt-10 break-words prose-headings:text-text-primary prose-p:leading-8 prose-p:text-text-secondary prose-strong:text-text-primary">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets?.length ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              {section.table ? <div className="not-prose my-7 overflow-x-auto  border border-surface-border"><table className="w-full min-w-[560px] text-left text-sm"><caption className="bg-surface-elevated px-4 py-3 text-left font-semibold text-text-primary">{section.table.caption}</caption><thead className="bg-black/30 text-text-primary"><tr>{section.table.headers.map((header) => <th key={header} className="px-4 py-3">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index} className="border-t border-surface-border">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 text-text-secondary">{cell}</td>)}</tr>)}</tbody><tfoot><tr><td colSpan={section.table.headers.length} className="border-t border-surface-border px-4 py-3 text-xs text-text-secondary">{section.table.sourceNote}</td></tr></tfoot></table></div> : null}
              <p className="not-prose mt-5 flex flex-wrap items-center gap-2 text-xs text-text-secondary" aria-label={`Sources for ${section.heading}`}>
                <span className="font-semibold uppercase tracking-wide">Section sources</span>
                {section.sourceUrls.map((sourceUrl) => {
                  const sourceIndex = article.sources.findIndex((source) => source.url === sourceUrl);
                  return <a key={sourceUrl} href={sourceUrl} rel="noopener noreferrer" className=" border border-surface-border px-2.5 py-1 text-link" data-source-link="true">[{sourceIndex + 1}]</a>;
                })}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-10  border border-surface-border bg-surface-card p-6" aria-labelledby="watch-heading"><div className="flex items-center gap-2"><Eye className="h-5 w-5 text-xrp-accent" aria-hidden="true" /><h2 id="watch-heading" className="text-xl font-bold text-text-primary">What to watch next</h2></div><ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">{article.whatToWatch.map((item) => <li key={item}>• {item}</li>)}</ul></section>

        <section className="mt-10 border-t border-surface-border pt-8" aria-labelledby="sources-heading"><h2 id="sources-heading" className="text-2xl font-bold text-text-primary">Sources and verification</h2><p className="mt-3 text-sm leading-7 text-text-secondary">We prioritize primary records and label supporting coverage. Dates reflect each source’s publication record.</p><ol className="mt-5 space-y-3">{article.sources.map((source, index) => <li key={source.url} className="flex flex-wrap items-center gap-x-2 gap-y-1"><span className="text-xs font-semibold text-text-secondary">[{index + 1}]</span><a href={source.url} rel="noopener noreferrer" className="text-link" data-source-link="true">{source.name}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a><span className=" border border-surface-border px-2 py-0.5 text-[11px] uppercase text-text-secondary">{source.type}</span>{source.publishedAt ? <time dateTime={source.publishedAt} className="text-xs text-text-secondary">{formatSourceDate(source.publishedAt)}</time> : <span className="text-xs text-text-secondary">Undated reference</span>}</li>)}</ol></section>
        <nav className="related-topic-map mt-12 border-t border-surface-border pt-9" aria-labelledby="related-topics-heading">
          <div className="max-w-2xl">
            <p className="editorial-kicker">Related coverage</p>
            <h2 id="related-topics-heading" className="mt-2 text-2xl font-bold text-text-primary">Continue the research</h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">Follow the legal, regulatory, and risk concepts connected to this report.</p>
          </div>
          <ul className="mt-6 grid gap-x-8 md:grid-cols-2">
            {article.relatedLinks.map((link) => (
              <li key={link.href} className="border-t border-surface-border">
                <Link href={link.href} className="group grid min-h-32 grid-cols-[1fr_auto] gap-4 py-5">
                  <span>
                    {link.topic ? <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-xrp-accent-bright">{link.topic}</span> : null}
                    <span className="mt-1.5 block text-lg font-bold leading-6 text-text-primary group-hover:text-xrp-accent-bright">{link.label}</span>
                    {link.description ? <span className="mt-2 block text-sm leading-6 text-text-secondary">{link.description}</span> : null}
                  </span>
                  <span className="pt-5 text-text-secondary transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  );
}
