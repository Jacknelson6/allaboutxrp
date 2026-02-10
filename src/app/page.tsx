import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import HomeHero from "@/components/home/HomeHero";
import FeatureGrid from "@/components/home/FeatureGrid";
import ProductShowcase from "@/components/home/ProductShowcase";
import CommunityFeed from "@/components/home/CommunityFeed";
import Newsletter from "@/components/home/Newsletter";
import HomeFAQ from "@/components/home/HomeFAQ";

export const metadata: Metadata = {
  title: "AllAboutXRP — Everything You Need to Know About XRP",
  description: "Your XRP community hub — curated X/Twitter feed, live price data, rich list analytics, comprehensive XRP education, and more. Stay connected with the XRP ecosystem.",
  openGraph: {
    title: "AllAboutXRP — XRP Community Feed & Resources",
    description: "Curated XRP community feed, education, and live data.",
    url: "https://allaboutxrp.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AllAboutXRP — XRP Community Hub",
    description: "Curated XRP community feed, education, live data, and comprehensive resources.",
  },
  alternates: { canonical: "https://allaboutxrp.com" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AllAboutXRP",
  url: "https://allaboutxrp.com",
  description: "Comprehensive XRP community hub with curated feeds, education, and live data.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is XRP?", acceptedAnswer: { "@type": "Answer", text: "XRP is a digital asset and cryptocurrency native to the XRP Ledger, an open-source blockchain launched in June 2012. It was designed for fast, low-cost cross-border payments, settling transactions in 3–5 seconds with fees under $0.01." } },
    { "@type": "Question", name: "Is XRP the same as Ripple?", acceptedAnswer: { "@type": "Answer", text: "No. Ripple is a private fintech company that builds payment solutions. XRP is an independent digital asset on the open-source XRP Ledger." } },
    { "@type": "Question", name: "Is XRP a security?", acceptedAnswer: { "@type": "Answer", text: "In July 2023, Judge Analisa Torres ruled that XRP sold on public exchanges to retail investors is not a security." } },
    { "@type": "Question", name: "How fast are XRP transactions?", acceptedAnswer: { "@type": "Answer", text: "XRP transactions settle in 3–5 seconds on the XRP Ledger, which can handle approximately 1,500 transactions per second." } },
    { "@type": "Question", name: "How many XRP exist?", acceptedAnswer: { "@type": "Answer", text: "100 billion XRP were created at genesis. No more can ever be minted. Approximately 60 billion are in circulation, ~33.9 billion are in Ripple's escrow." } },
    { "@type": "Question", name: "What is XRP escrow?", acceptedAnswer: { "@type": "Answer", text: "Ripple placed 55 billion XRP into cryptographically enforced escrow contracts in 2017. Up to 1 billion unlocks monthly, but 60-80% is typically re-escrowed immediately." } },
  ],
};

export default function HomePage() {
  return (
    <>
      <SEOSchema schema={organizationSchema} />
      <SEOSchema schema={faqSchema} />
      <HomeHero />
      <FeatureGrid />
      <ProductShowcase />
      <CommunityFeed />
      <Newsletter />
      <HomeFAQ />
    </>
  );
}
