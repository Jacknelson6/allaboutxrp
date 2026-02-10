import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AcquisitionsContent from "./AcquisitionsContent";

export const metadata: Metadata = {
  title: "Ripple's $3.7B Acquisition Strategy & What It Means for XRP",
  description:
    "How Ripple assembled a full-stack financial infrastructure through acquisitions totaling $3.7B+ — Hidden Road, Metaco, GTreasury, Rail, and more.",
  openGraph: {
    title: "Ripple Acquisitions: The Full Strategy | AllAboutXRP",
    description:
      "Every Ripple acquisition explained — $3.7B+ in deals building the future of financial infrastructure around XRP.",
    url: "https://allaboutxrp.com/acquisitions",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ripple's Acquisition Strategy: Building the Future of Financial Infrastructure",
  description: "How Ripple quietly assembled a $3.7 billion empire through strategic acquisitions.",
  url: "https://allaboutxrp.com/acquisitions",
  publisher: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com" },
  dateModified: "2026-02-01",
};

export default function AcquisitionsPage() {
  return (
    <>
      <SEOSchema schema={articleSchema} />
      <AcquisitionsContent />
    </>
  );
}
