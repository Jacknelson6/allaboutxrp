import Link from "next/link";
import { ArrowRight, Clock3, Newspaper, Rss } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import { getAllNewsArticles } from "@/lib/news-content";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "News", item: "https://allaboutxrp.com/news" },
  ],
};

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export default function NewsPage() {
  const articles = getAllNewsArticles();

  return (
    <main id="main-content" className="min-h-screen bg-surface-primary">
      <SEOSchema schema={breadcrumbSchema} />
      <div className="site-container py-14 sm:py-18">
        <div className="max-w-3xl">
          <p className="editorial-kicker">Source-led reporting</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="rounded-xl bg-xrp-accent/10 p-2.5"><Rss className="h-5 w-5 text-xrp-accent" aria-hidden="true" /></div>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">XRP News</h1>
          </div>
          <p className="mt-5 text-base leading-7 text-text-secondary">
            Original XRP reporting that starts with primary sources, separates confirmed facts from analysis, and tells you what evidence to watch next.
          </p>
        </div>

        <Link href="/news/recaps" className="mt-8 flex max-w-3xl items-center justify-between rounded-2xl border border-xrp-accent/20 bg-xrp-accent/[0.06] p-5 transition-colors hover:border-xrp-accent/40">
          <div className="flex items-center gap-3">
            <Newspaper className="h-5 w-5 text-xrp-accent" aria-hidden="true" />
            <div><h2 className="font-semibold text-text-primary">Daily XRP recap archive</h2><p className="mt-1 text-sm text-text-secondary">Dated summaries with direct links to original reporting</p></div>
          </div>
          <ArrowRight className="h-5 w-5 text-xrp-accent" aria-hidden="true" />
        </Link>

        {articles.length ? (
          <section className="mt-10" aria-labelledby="latest-news-heading">
            <h2 id="latest-news-heading" className="text-2xl font-bold text-text-primary">Latest verified reporting</h2>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              {articles.map((article) => (
                <article key={article.slug} className="rounded-2xl border border-surface-border bg-surface-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
                    <span className="rounded-full border border-xrp-accent/20 bg-xrp-accent/[0.07] px-2.5 py-1 font-semibold text-xrp-accent-bright">{article.category}</span>
                    <Clock3 className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-text-primary"><Link href={`/news/${article.slug}`} className="hover:text-xrp-accent-bright">{article.title}</Link></h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{article.description}</p>
                  <Link href={`/news/${article.slug}`} className="text-link mt-5">Read the analysis <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-10 max-w-3xl rounded-2xl border border-surface-border bg-surface-card p-8">
            <h2 className="text-xl font-bold text-text-primary">The new research desk is launching</h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">New source-verified reports will publish throughout the day. Until then, browse the recap archive and use the linked primary records to verify time-sensitive claims.</p>
          </div>
        )}
      </div>
    </main>
  );
}
