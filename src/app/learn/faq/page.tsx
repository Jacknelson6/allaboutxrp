import { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";
import SEOSchema from "@/components/shared/SEOSchema";
import { getAllFAQItems } from "@/lib/utils/faq";

export const metadata: Metadata = {
  title: "XRP FAQ — Frequently Asked Questions About XRP",
  description:
    "Get answers to the most common questions about XRP, the XRP Ledger, Ripple, and cryptocurrency. Comprehensive FAQ covering everything from basics to advanced topics.",
  openGraph: {
    title: "XRP FAQ — Frequently Asked Questions | AllAboutXRP",
    description: "Answers to the most common questions about XRP and the XRP Ledger.",
    url: "https://allaboutxrp.com/learn/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP FAQ | AllAboutXRP",
    description: "Answers to the most common questions about XRP, the XRP Ledger, and Ripple.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/faq" },
};

export default function FAQPage() {
  const items = getAllFAQItems();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://allaboutxrp.com/#what-is-xrp" },
      { "@type": "ListItem", position: 3, name: "FAQ", item: "https://allaboutxrp.com/learn/faq" },
    ],
  };

  return (
    <>
      <SEOSchema schema={[faqSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-text-secondary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-secondary/60">Learn</span>
          <span>/</span>
          <span className="text-text-primary">FAQ</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Frequently Asked <span className="text-xrp-accent">Questions</span>
        </h1>
        <p className="mt-3 text-text-secondary">
          Everything you need to know about XRP, the XRP Ledger, and Ripple.
        </p>

        <FAQAccordion items={items} />
      </div>
    </>
  );
}
