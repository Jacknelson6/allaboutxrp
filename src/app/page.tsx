import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import HomeHero from "@/components/home/HomeHero";
import XFeed from "@/components/home/XFeed";
import Newsletter from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: "AllAboutXRP — XRP Community Feed & Resources",
  description: "Your XRP community hub — curated X/Twitter feed, follow checklist, live data, and comprehensive XRP education. Stay connected with the XRP ecosystem.",
  openGraph: {
    title: "AllAboutXRP — XRP Community Feed & Resources",
    description: "Curated XRP community feed, education, and live data.",
    url: "https://allaboutxrp.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AllAboutXRP",
  url: "https://allaboutxrp.com",
  description: "Comprehensive XRP community hub with curated feeds, education, and live data.",
};

export default function HomePage() {
  return (
    <>
      <SEOSchema schema={organizationSchema} />
      <HomeHero />
      <XFeed />
      <Newsletter />
    </>
  );
}
