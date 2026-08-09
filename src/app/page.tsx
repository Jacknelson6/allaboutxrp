import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import HomeFeed from "@/components/home/HomeFeed";
import FeatureGrid from "@/components/home/FeatureGrid";
import HomeFAQ from "@/components/home/HomeFAQ";
import { HOME_FAQ_ITEMS } from "@/data/home-faq";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "The Independent Guide to XRP: How It Works | AllAboutXRP",
  description: "Learn what XRP is and how the XRP Ledger works with source-led guides, direct answers, live data, practical tools, holder analytics, and XRP news.",
  openGraph: {
    title: "The Independent Guide to XRP: How It Works | AllAboutXRP",
    description: "Source-led XRP guides, direct answers, live data, practical tools, holder analytics, and independent news.",
    url: "https://allaboutxrp.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Independent Guide to XRP: How It Works | AllAboutXRP",
    description: "Source-led XRP guides, direct answers, live data, practical tools, holder analytics, and independent news.",
  },
  alternates: { canonical: "https://allaboutxrp.com" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://allaboutxrp.com/#organization",
  name: "AllAboutXRP",
  url: "https://allaboutxrp.com",
  description: "Independent XRP publisher with source-led education, live data, tools, and news.",
  logo: {
    "@type": "ImageObject",
    url: "https://allaboutxrp.com/logo-full.png",
    width: 2000,
    height: 2000,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <SEOSchema schema={organizationSchema} />
      <SEOSchema schema={faqSchema} />
      <main id="main-content">
        <HomeFeed />
        <FeatureGrid />
        <HomeFAQ />
      </main>
    </>
  );
}
