import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LocalDateTime from "@/components/shared/LocalDateTime";
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

export default function NewsPage() {
  const articles = getAllNewsArticles();
  const [lead, ...rest] = articles;

  return (
    <main id="main-content" className="min-h-screen bg-surface-primary">
      <SEOSchema schema={breadcrumbSchema} />
      <header className="border-b border-surface-border">
        <div className="site-container py-16 sm:py-24">
          <p className="editorial-kicker">THE XRP NEWS DESK</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(3.25rem,7vw,4.75rem)] leading-[0.98] text-text-primary">Reporting that starts with the record.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary">Independent reporting on XRP markets, policy, institutions, and the XRP Ledger. Confirmed facts stay separate from analysis.</p>
        </div>
      </header>

      {lead ? (
        <div className="site-container py-12 sm:py-16">
          <article className="news-lead grid gap-8 border-b border-surface-border pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <Link href={`/news/${lead.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-surface-elevated">
              {lead.image ? <Image src={lead.image} alt={lead.imageAlt ?? ""} fill priority className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" /> : null}
            </Link>
            <div>
              <div className="news-meta"><span>{lead.category}</span><LocalDateTime value={lead.publishedAt} /></div>
              <h2 className="mt-4 text-3xl leading-tight text-text-primary sm:text-4xl"><Link href={`/news/${lead.slug}`}>{lead.title}</Link></h2>
              <p className="mt-4 text-base leading-7 text-text-secondary">{lead.description}</p>
              <Link href={`/news/${lead.slug}`} className="text-link mt-5">Read the report <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </article>

          <section className="pt-12" aria-labelledby="latest-news-heading">
            <div className="flex items-end justify-between gap-6 border-b border-surface-border pb-5">
              <h2 id="latest-news-heading" className="text-3xl text-text-primary">Latest reporting</h2>
              <span className="text-xs text-text-secondary">Times display in your local zone</span>
            </div>
            <div className="divide-y divide-surface-border">
              {rest.map((article) => (
                <article key={article.slug} className="news-row grid gap-5 py-7 sm:grid-cols-[11rem_1fr]">
                  <Link href={`/news/${article.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-surface-elevated">
                    {article.image ? <Image src={article.image} alt={article.imageAlt ?? ""} fill className="object-cover" sizes="176px" /> : null}
                  </Link>
                  <div>
                    <div className="news-meta"><span>{article.category}</span><LocalDateTime value={article.publishedAt} /></div>
                    <h3 className="mt-2 text-xl leading-snug text-text-primary"><Link href={`/news/${article.slug}`}>{article.title}</Link></h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">{article.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="site-container py-16"><p className="border-y border-surface-border py-8 text-text-secondary">No current reports. New reporting will appear here after source review.</p></div>
      )}
    </main>
  );
}
