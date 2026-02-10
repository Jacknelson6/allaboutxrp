import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ContentSection from "@/components/home/ContentSection";
import Timeline from "@/components/home/Timeline";
import FAQ from "@/components/home/FAQ";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import { getAllContent } from "@/lib/utils/markdown";
import timelineData from "@/data/timeline.json";
import faqData from "@/data/faq.json";

export const metadata: Metadata = {
  title: "What is XRP? Complete Guide to XRP & the XRP Ledger",
  description: "Learn everything about XRP — what it is, who created it, how it works, its history, and why it matters.",
  openGraph: {
    title: "What is XRP? Complete Guide | AllAboutXRP",
    description: "Everything you need to know about XRP.",
    url: "https://allaboutxrp.com/learn",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is XRP? Complete Guide | AllAboutXRP",
    description: "Learn everything about XRP — what it is, who created it, how it works, and why it matters.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default async function LearnPage() {
  const contents = await getAllContent();

  return (
    <>
      <SEOSchema schema={faqSchema} />
      <Hero />
      <div className="mx-auto max-w-3xl px-4">
        <Disclaimer />
        {contents.map((content) => (
          <ContentSection
            key={content.slug}
            id={content.slug}
            title={content.title}
            html={content.contentHtml}
          />
        ))}
        <Timeline events={timelineData} />
        <FAQ items={faqData} />
      </div>
    </>
  );
}
