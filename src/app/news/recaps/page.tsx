import { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Calendar, ChevronRight } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import { getAllRecaps } from "@/lib/utils/news";

export const metadata: Metadata = {
  title: "Daily XRP News Recaps — AllAboutXRP",
  description:
    "Daily summaries of XRP and Ripple news: price action, regulatory updates, on-chain data, community buzz, and what to watch next.",
  openGraph: {
    title: "Daily XRP News Recaps | AllAboutXRP",
    description:
      "Catch up on everything XRP — daily recap articles covering price, regulation, partnerships, and community.",
    url: "https://allaboutxrp.com/news/recaps",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "News", item: "https://allaboutxrp.com/news" },
    { "@type": "ListItem", position: 3, name: "Daily Recaps", item: "https://allaboutxrp.com/news/recaps" },
  ],
};

export default function RecapsIndexPage() {
  const recaps = getAllRecaps();

  return (
    <>
      <SEOSchema schema={breadcrumbSchema} />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="rounded-lg bg-xrp-accent/10 p-2">
            <Newspaper className="h-5 w-5 text-xrp-accent" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Daily XRP Recaps
            </h1>
            <p className="mt-1 text-text-secondary">
              Everything that happened in the XRP ecosystem, summarized daily.
            </p>
          </div>
        </div>

        {recaps.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-surface-border bg-surface-card/50 p-12 text-center backdrop-blur-sm">
            <Newspaper className="mx-auto h-10 w-10 text-text-secondary mb-4" />
            <h2 className="font-display text-xl font-bold text-text-primary">No recaps yet</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Daily recaps will appear here once generated. Check back soon!
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {recaps.map((recap) => (
              <Link
                key={recap.date}
                href={`/news/recaps/${recap.date}`}
                className="card-glow group block rounded-xl border border-surface-border bg-surface-card/50 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs text-text-secondary mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={recap.date}>
                        {new Date(recap.date + "T12:00:00").toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="font-display text-lg font-semibold text-text-primary group-hover:text-xrp-accent transition-colors">
                      {recap.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                      {recap.excerpt}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-text-secondary group-hover:text-xrp-accent transition-colors mt-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
