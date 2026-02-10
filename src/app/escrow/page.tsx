import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import EscrowContent from "./EscrowContent";

export const metadata: Metadata = {
  title: "XRP Escrow: Ripple's 55 Billion XRP Lockup Guide",
  description:
    "Understand Ripple's XRP escrow system — how it works, monthly releases, supply impact, and what it means for XRP price. Updated February 2026.",
  openGraph: {
    title: "XRP Escrow: Complete Guide | AllAboutXRP",
    description:
      "Everything about Ripple's 55 billion XRP escrow — monthly releases, re-escrow patterns, and on-chain tracking tools.",
    url: "https://allaboutxrp.com/escrow",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Escrow: Complete Guide | AllAboutXRP",
    description: "How Ripple's 55 billion XRP escrow works — monthly releases, re-escrow patterns, and supply impact.",
  },
  alternates: { canonical: "https://allaboutxrp.com/escrow" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "XRP Escrow: Ripple's 55 Billion XRP Lockup Guide",
  description: "A comprehensive guide to Ripple's XRP escrow system — how it works, monthly releases, and supply impact.",
  url: "https://allaboutxrp.com/escrow",
  datePublished: "2026-02-10",
  dateModified: "2026-02-10",
  author: { "@type": "Person", name: "AllAboutXRP Editorial Team", url: "https://allaboutxrp.com" },
  publisher: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://allaboutxrp.com/escrow" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Escrow", item: "https://allaboutxrp.com/escrow" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is XRP escrow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escrow is a native feature of the XRP Ledger that allows XRP to be locked in a trustless, on-chain smart contract. Ripple placed 55 billion XRP into escrow in December 2017, with up to 1 billion XRP unlocking monthly.",
      },
    },
    {
      "@type": "Question",
      name: "Does Ripple dump 1 billion XRP every month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. While 1 billion XRP unlocks monthly, Ripple typically re-escrows 700-800 million immediately. Only 200-300 million XRP enters potential circulation, and much goes to OTC/institutional buyers.",
      },
    },
    {
      "@type": "Question",
      name: "How much XRP is still in escrow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of February 2026, approximately 33.9 billion XRP remains in escrow out of the original 55 billion locked in December 2017.",
      },
    },
  ],
};

export default function EscrowPage() {
  return (
    <>
      <SEOSchema schema={[articleSchema, breadcrumbSchema, faqSchema]} />
      <EscrowContent />
    </>
  );
}
