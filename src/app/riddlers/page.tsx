import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import RiddlersContent from "./RiddlersContent";

export const metadata: Metadata = {
  title: "The XRP Riddlers: BG123, Mr. Pool & the Cryptic Predictions",
  description:
    "Explore the mysterious XRP Riddler phenomenon — BearableGuy123, Mr. Pool, the $589 prediction, and the cryptic symbols that define XRP culture.",
  openGraph: {
    title: "XRP Riddlers: The Complete Guide | AllAboutXRP",
    description:
      "BG123, Mr. Pool, $589, and the cryptic predictions that shaped XRP community culture.",
    url: "https://allaboutxrp.com/riddlers",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The XRP Riddlers: A Comprehensive Guide",
  description: "The definitive resource on BearableGuy123, Mr. Pool, the $589 prediction, and XRP's unique Riddler culture.",
  url: "https://allaboutxrp.com/riddlers",
  publisher: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com" },
  dateModified: "2026-02-01",
};

export default function RiddlersPage() {
  return (
    <>
      <SEOSchema schema={articleSchema} />
      <RiddlersContent />
    </>
  );
}
