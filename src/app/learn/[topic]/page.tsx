import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import { DataList, SectionHeader } from "@/components/ui";
import { getLearnHub, LEARN_HUBS, titleFromSlug } from "@/data/learn-hubs";
import AuthorByline from "@/components/shared/AuthorByline";

type Props = { params: Promise<{ topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LEARN_HUBS.map((hub) => ({ topic: hub.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const hub = getLearnHub(topic);
  if (!hub) return {};

  const url = `https://allaboutxrp.com/learn/${hub.slug}`;
  return {
    title: `${hub.title}: Evidence-Based Guides | AllAboutXRP`,
    description: hub.description,
    alternates: { canonical: url },
    openGraph: { title: hub.title, description: hub.description, url, siteName: "AllAboutXRP", type: "website" },
    twitter: { card: "summary", title: hub.title, description: hub.description },
  };
}

export default async function LearnTopicPage({ params }: Props) {
  const { topic } = await params;
  const hub = getLearnHub(topic);
  if (!hub) notFound();

  const url = `https://allaboutxrp.com/learn/${hub.slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      name: hub.title,
      description: hub.description,
      url,
      isPartOf: { "@id": "https://allaboutxrp.com/learn#collection" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: hub.guides.map((slug, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: titleFromSlug(slug),
          url: `https://allaboutxrp.com/learn/${slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
        { "@type": "ListItem", position: 2, name: "Learn", item: "https://allaboutxrp.com/learn" },
        { "@type": "ListItem", position: 3, name: hub.title, item: url },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => <SEOSchema key={index} schema={schema} />)}
      <main className="bg-paper">
        <header className="border-b border-hairline">
          <div className="site-container py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
              <Link href="/" className="py-3 transition-colors duration-150 hover:text-cobalt">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/learn" className="py-3 transition-colors duration-150 hover:text-cobalt">Learn</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-ink">{hub.shortTitle}</span>
            </nav>
            <p className="font-sans text-xs font-[650] uppercase tracking-[0.04em] text-cobalt">Guided learning path</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.98] font-normal text-ink">
              {hub.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-text-secondary">{hub.description}</p>
            <div className="mt-6"><AuthorByline date="2026-07-29" modified="2026-08-08" /></div>
          </div>
        </header>

        <section className="border-b border-hairline bg-paper-muted" aria-labelledby="direct-answer-heading">
          <div className="site-container grid gap-5 py-10 sm:py-12 lg:grid-cols-[0.34fr_1fr]">
            <h2 id="direct-answer-heading" className="font-sans text-xs font-[650] uppercase tracking-[0.04em] text-cobalt">
              Start here
            </h2>
            <p className="max-w-4xl font-display text-xl leading-9 font-normal text-ink sm:text-2xl">{hub.answer}</p>
          </div>
        </section>

        <section className="site-container py-12 sm:py-16" aria-labelledby="guides-heading">
          <SectionHeader
            eyebrow="Guide index"
            title={<span id="guides-heading">Guides in this path</span>}
          />
          <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary">
            Read in order for a structured introduction, or open the question you need answered.
          </p>
          <DataList ariaLabel="Guides in this learning path" className="mt-6">
            {hub.guides.map((slug, index) => (
              <li key={slug}>
                <Link href={`/learn/${slug}`} className="group grid min-h-[3.5rem] grid-cols-[2rem_1fr_auto] items-center gap-3 py-4">
                  <span className="font-sans text-xs font-[650] tabular-nums text-text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base leading-snug font-normal text-ink transition-colors duration-150 group-hover:text-cobalt sm:text-lg">
                    {titleFromSlug(slug)}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-text-secondary transition-colors duration-150 group-hover:text-cobalt" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </DataList>
        </section>
      </main>
    </>
  );
}
