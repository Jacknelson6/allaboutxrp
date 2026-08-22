import Image from "next/image";
import Link from "next/link";
import { Badge, DataList, NewsListItem, SectionHeader } from "@/components/ui";
import { getAllNewsArticles } from "@/lib/news-content";
import { DEK, LABEL } from "./home-style";

/**
 * Deterministic, server-rendered publication date. The homepage is statically
 * revalidated, so a fixed en-US / UTC format keeps the markup crawlable and
 * hydration-stable; the article pages themselves still render a localized
 * timestamp.
 */
const newsDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function publishedLabel(iso: string) {
  return newsDate.format(new Date(iso));
}

/**
 * Top stories: one lead with editorial art, a dense rail of the next reports,
 * and a two-column index of earlier reporting. All of it is server-rendered
 * from the same `getAllNewsArticles()` record the /news index reads.
 */
export default function HomeTopStories() {
  const articles = getAllNewsArticles();
  if (articles.length === 0) return null;

  const [lead, ...remaining] = articles;
  const rail = remaining.slice(0, 6);
  const earlier = remaining.slice(6, 16);

  return (
    <section className="border-b border-hairline bg-paper" aria-labelledby="top-stories-heading">
      <div className="site-container py-12 sm:py-16">
        <SectionHeader
          eyebrow="News wire / current coverage"
          title={<span id="top-stories-heading">Top stories</span>}
          href="/news"
          linkLabel="View all reporting"
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <article>
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
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <Badge variant="tonal" tone="cobalt">
                {lead.category}
              </Badge>
              <time dateTime={lead.publishedAt} className="text-xs tabular-nums text-text-secondary">
                {publishedLabel(lead.publishedAt)}
              </time>
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight font-normal text-ink sm:text-[2rem] sm:leading-[1.12]">
              <Link href={`/news/${lead.slug}`} className="transition-colors duration-150 hover:text-cobalt">
                {lead.title}
              </Link>
            </h3>
            <p className={`${DEK} mt-4 max-w-2xl`}>{lead.description}</p>
            <Link
              href={`/news/${lead.slug}`}
              className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-sans text-sm font-[650] text-ink underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
            >
              Read the report <span aria-hidden="true">→</span>
            </Link>
          </article>

          <div>
            <h3 className={`${LABEL} pb-3`}>More from the desk</h3>
            <DataList ariaLabel="More XRP reporting">
              {rail.map((article) => (
                <NewsListItem
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  headline={article.title}
                  category={article.category}
                  timestamp={publishedLabel(article.publishedAt)}
                  thumbnailSrc={article.image}
                  thumbnailAlt={article.imageAlt ?? ""}
                />
              ))}
            </DataList>
          </div>
        </div>

        {earlier.length > 0 ? (
          <div className="mt-12">
            <h3 className={`${LABEL} pb-3`}>Earlier reporting</h3>
            <div className="grid gap-x-12 md:grid-cols-2">
              <DataList ariaLabel="Earlier XRP reporting, first column">
                {earlier.slice(0, Math.ceil(earlier.length / 2)).map((article) => (
                  <NewsListItem
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    headline={article.title}
                    category={article.category}
                    timestamp={publishedLabel(article.publishedAt)}
                  />
                ))}
              </DataList>
              <DataList ariaLabel="Earlier XRP reporting, second column">
                {earlier.slice(Math.ceil(earlier.length / 2)).map((article) => (
                  <NewsListItem
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    headline={article.title}
                    category={article.category}
                    timestamp={publishedLabel(article.publishedAt)}
                  />
                ))}
              </DataList>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
