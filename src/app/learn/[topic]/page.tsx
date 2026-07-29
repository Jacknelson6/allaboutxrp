import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import { getLearnHub, LEARN_HUBS, titleFromSlug } from "@/data/learn-hubs";

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
      <main className="bg-surface-primary">
        <header className="border-b border-surface-border">
          <div className="site-container py-14 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-7 text-sm text-text-secondary">
              <Link href="/" className="py-3 transition-colors hover:text-text-primary">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/learn" className="py-3 transition-colors hover:text-text-primary">Learn</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-text-primary">{hub.shortTitle}</span>
            </nav>
            <p className="editorial-kicker">Guided learning path</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-text-primary">
              {hub.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">{hub.description}</p>
          </div>
        </header>

        <section className="site-container border-b border-surface-border py-10 sm:py-14" aria-labelledby="direct-answer-heading">
          <div className="grid gap-5 lg:grid-cols-[0.34fr_1fr]">
            <h2 id="direct-answer-heading" className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-xrp-accent-bright">
              Start here
            </h2>
            <p className="max-w-4xl text-xl leading-9 text-text-primary sm:text-2xl">{hub.answer}</p>
          </div>
        </section>

        <section className="site-container section-shell" aria-labelledby="guides-heading">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr]">
            <div>
              <h2 id="guides-heading" className="text-3xl text-text-primary">Guides in this path</h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">Read in order for a structured introduction, or open the question you need answered.</p>
            </div>
            <ol className="divide-y divide-surface-border border-y border-surface-border">
              {hub.guides.map((slug, index) => (
                <li key={slug}>
                  <Link href={`/learn/${slug}`} className="group grid min-h-20 grid-cols-[2rem_1fr_auto] items-center gap-3 py-4 transition-colors hover:bg-white/[0.02] sm:px-3">
                    <span className="font-mono text-xs text-text-secondary">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-semibold text-text-primary transition-colors group-hover:text-xrp-accent-bright">{titleFromSlug(slug)}</span>
                    <ArrowUpRight className="h-4 w-4 text-text-secondary transition-colors group-hover:text-xrp-accent" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}
