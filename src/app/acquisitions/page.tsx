import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AcquisitionsContent from "./AcquisitionsContent";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ripple's $3.7B Acquisition Strategy for XRP",
  description:
    "How Ripple assembled a full-stack financial infrastructure through acquisitions totaling $3.7B+ — Hidden Road, Metaco, GTreasury, Rail, and more.",
  openGraph: {
    title: "Ripple Acquisitions: The Full Strategy | AllAboutXRP",
    description:
      "Every Ripple acquisition explained — $3.7B+ in deals building the future of financial infrastructure around XRP.",
    url: "https://allaboutxrp.com/acquisitions",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple's $3.7B Acquisition Strategy | AllAboutXRP",
    description: "Every Ripple acquisition explained — building financial infrastructure around XRP.",
  },
  alternates: { canonical: "https://allaboutxrp.com/acquisitions" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ripple's Acquisition Strategy: Building the Future of Financial Infrastructure",
  description: "How Ripple quietly assembled a $3.7 billion empire through strategic acquisitions.",
  url: "https://allaboutxrp.com/acquisitions",
  datePublished: "2026-02-01",
  dateModified: "2026-02-10",
  author: { "@type": "Person", name: "AllAboutXRP Editorial Team", url: "https://allaboutxrp.com" },
  publisher: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com", logo: { "@type": "ImageObject", url: "https://allaboutxrp.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://allaboutxrp.com/acquisitions" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Acquisitions", item: "https://allaboutxrp.com/acquisitions" },
  ],
};

export default function AcquisitionsPage() {
  return (
    <>
      <SEOSchema schema={[articleSchema, breadcrumbSchema]} />
      <AcquisitionsContent />
    </>
  );
}
