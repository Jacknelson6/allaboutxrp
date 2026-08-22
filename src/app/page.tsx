import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import HomeMarketProvider from "@/components/home/HomeMarketProvider";
import HomeTicker from "@/components/home/HomeTicker";
import HomeHeroBand from "@/components/home/HomeHeroBand";
import HomeTopStories from "@/components/home/HomeTopStories";
import HomeMarketBand from "@/components/home/HomeMarketBand";
import HomeEducationPaths from "@/components/home/HomeEducationPaths";
import HomeAnswerIndex from "@/components/home/HomeAnswerIndex";
import HomeToolsStrip from "@/components/home/HomeToolsStrip";
import FeatureGrid from "@/components/home/FeatureGrid";
import HomeFAQ from "@/components/home/HomeFAQ";
import { HOME_FAQ_ITEMS } from "@/data/home-faq";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "The Independent Guide to XRP: How It Works | AllAboutXRP",
  description: "Learn what XRP is and how the XRP Ledger works with source-led guides, direct answers, live data, practical tools, holder analytics, and XRP news.",
  // Page-level openGraph replaces the root layout's object rather than merging
  // into it, so type, siteName, and locale must be restated here or the
  // homepage ships without og:type at all.
  openGraph: {
    type: "website",
    siteName: "AllAboutXRP",
    locale: "en_US",
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

// Organization JSON-LD is emitted site-wide by the root layout (same @id).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/**
 * The front page, top to bottom: live ticker, masthead, top stories, the market
 * record, education pathways, the answer index, tools, editorial protocol, FAQ.
 *
 * Everything except the two market surfaces is a server component;
 * HomeMarketProvider only wraps its children so the ticker and the market band
 * can share one live `/api/market-data` fetch.
 */
export default function HomePage() {
  return (
    <>
      <SEOSchema schema={faqSchema} />
      <main id="main-content" className="bg-paper">
        <HomeMarketProvider>
          <HomeTicker />
          <HomeHeroBand />
          <HomeTopStories />
          <HomeMarketBand />
          <HomeEducationPaths />
          <HomeAnswerIndex />
          <HomeToolsStrip />
          <FeatureGrid />
          <HomeFAQ />
        </HomeMarketProvider>
      </main>
    </>
  );
}
