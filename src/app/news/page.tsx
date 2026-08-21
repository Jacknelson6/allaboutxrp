import Image from "next/image";
import Link from "next/link";
import LocalDateTime from "@/components/shared/LocalDateTime";
import SEOSchema from "@/components/shared/SEOSchema";
import { Badge, DataList, NewsListItem, SectionHeader } from "@/components/ui";
import { getAllNewsArticles } from "@/lib/news-content";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "News", item: "https://allaboutxrp.com/news" },
  ],
};

export default function NewsPage() {
  const articles = getAllNewsArticles();
  const [lead, ...rest] = articles;

  return (
    <main id="main-content" className="bg-paper">
      <SEOSchema schema={breadcrumbSchema} />
      <header className="border-b border-hairline bg-paper">
        <div className="site-container py-12 sm:py-16">
          <p className="font-sans text-xs font-[650] uppercase tracking-[0.04em] text-cobalt">
            The XRP news desk
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.98] font-normal text-ink">
            Reporting that starts with the record.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
            Independent reporting on XRP markets, policy, institutions, and the XRP Ledger. Confirmed facts stay
            separate from analysis.
          </p>
        </div>
      </header>

      {lead ? (
        <div className="site-container py-12 sm:py-16">
          <article className="grid gap-8 border-b border-hairline pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <Link
              href={`/news/${lead.slug}`}
              className="group relative block aspect-[16/9] w-full overflow-hidden border border-hairline bg-paper-muted transition-colors duration-150 hover:border-ink"
            >
              {lead.image ? (
                <Image
                  src={lead.image}
                  alt={lead.imageAlt ?? ""}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              ) : null}
            </Link>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <Badge variant="tonal" tone="cobalt">
                  {lead.category}
                </Badge>
                <span className="text-xs tabular-nums text-text-secondary">
                  <LocalDateTime value={lead.publishedAt} />
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl leading-tight font-normal text-ink sm:text-4xl">
                <Link href={`/news/${lead.slug}`} className="transition-colors duration-150 hover:text-cobalt">
                  {lead.title}
                </Link>
              </h2>
              <p className="mt-4 text-base leading-7 text-text-secondary">{lead.description}</p>
              <Link
                href={`/news/${lead.slug}`}
                className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-sans text-sm font-[650] text-ink underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
              >
                Read the report <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          <section className="pt-12" aria-labelledby="latest-news-heading">
            <SectionHeader title={<span id="latest-news-heading">Latest reporting</span>} />
            <p className="mt-3 text-xs text-text-secondary">Times display in your local zone.</p>
            <DataList ariaLabel="Latest XRP reporting" className="mt-4">
              {rest.map((article) => (
                <NewsListItem
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  headline={article.title}
                  category={article.category}
                  timestamp={<LocalDateTime value={article.publishedAt} />}
                  thumbnailSrc={article.image}
                  thumbnailAlt={article.imageAlt ?? ""}
                />
              ))}
            </DataList>
          </section>
        </div>
      ) : (
        <div className="site-container py-16">
          <p className="border-y border-hairline py-8 text-text-secondary">
            No current reports. New reporting will appear here after source review.
          </p>
        </div>
      )}
    </main>
  );
}
