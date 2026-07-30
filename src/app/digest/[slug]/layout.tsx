import type { Metadata } from "next";
import { getPublishedDigestEntry } from "@/lib/seo/published-content";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

function formatDateRange(start: string, end: string): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  return `${formatter.format(new Date(`${start}T12:00:00Z`))} to ${formatter.format(new Date(`${end}T12:00:00Z`))}`;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const digest = await getPublishedDigestEntry(slug);

  if (!digest) {
    return {
      title: "Digest Not Found | AllAboutXRP",
      robots: { index: false, follow: true },
    };
  }

  const canonical = `https://allaboutxrp.com/digest/${digest.slug}`;
  const dateRange = formatDateRange(digest.weekStart, digest.weekEnd);
  const description = `Source-led XRP market analysis and ecosystem news for ${dateRange}, with the week's key developments in one concise report.`;

  return {
    title: `${digest.title} | AllAboutXRP`,
    description,
    alternates: { canonical },
    openGraph: {
      title: digest.title,
      description,
      url: canonical,
      type: "article",
      publishedTime: digest.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: digest.title,
      description,
    },
  };
}

export default async function DigestEntryLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const digest = await getPublishedDigestEntry(slug);

  const articleSchema = digest
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: digest.title,
        datePublished: digest.publishedAt,
        dateModified: digest.publishedAt,
        mainEntityOfPage: `https://allaboutxrp.com/digest/${digest.slug}`,
        publisher: {
          "@type": "Organization",
          name: "AllAboutXRP",
          url: "https://allaboutxrp.com",
        },
      }
    : null;

  return (
    <>
      {articleSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      ) : null}
      {children}
    </>
  );
}
