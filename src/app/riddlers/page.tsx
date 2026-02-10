import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import RiddlersContent from "./RiddlersContent";

export const metadata: Metadata = {
  title: "XRP Riddlers: BG123, Mr. Pool & Cryptic Predictions",
  description:
    "Explore the mysterious XRP Riddler phenomenon — BearableGuy123, Mr. Pool, the $589 prediction, and the cryptic symbols that define XRP culture.",
  openGraph: {
    title: "XRP Riddlers: The Complete Guide | AllAboutXRP",
    description:
      "BG123, Mr. Pool, $589, and the cryptic predictions that shaped XRP community culture.",
    url: "https://allaboutxrp.com/riddlers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Riddlers: BG123, Mr. Pool | AllAboutXRP",
    description: "BG123, Mr. Pool, $589, and the cryptic predictions of XRP culture.",
  },
  alternates: { canonical: "https://allaboutxrp.com/riddlers" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The XRP Riddlers: A Comprehensive Guide",
  description: "The definitive resource on BearableGuy123, Mr. Pool, the $589 prediction, and XRP's unique Riddler culture.",
  url: "https://allaboutxrp.com/riddlers",
  datePublished: "2026-02-01",
  dateModified: "2026-02-10",
  author: { "@type": "Person", name: "AllAboutXRP Editorial Team", url: "https://allaboutxrp.com" },
  publisher: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com", logo: { "@type": "ImageObject", url: "https://allaboutxrp.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://allaboutxrp.com/riddlers" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Riddlers", item: "https://allaboutxrp.com/riddlers" },
  ],
};

export default function RiddlersPage() {
  return (
    <>
      <SEOSchema schema={[articleSchema, breadcrumbSchema]} />
      <RiddlersContent />
    </>
  );
}
