import type { Metadata } from "next";
import EscrowContent from "@/app/escrow/EscrowContent";
import SEOSchema from "@/components/shared/SEOSchema";
import { buildArticleSchema, buildBreadcrumbSchema, buildSpeakableSchema } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "XRP Escrow — How Ripple's Escrow System Works",
  description: "Learn how Ripple's XRP escrow system works, its monthly release schedule, and its impact on XRP supply.",
  alternates: { canonical: "https://allaboutxrp.com/learn/escrow" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Escrow: How Ripple's Escrow System Works",
    description: "A comprehensive guide to Ripple's XRP escrow system, monthly release schedule, and impact on supply.",
    url: "https://allaboutxrp.com/learn/escrow",
    datePublished: "2026-02-10",
    dateModified: "2026-02-11",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Escrow" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/escrow" }),
];

export default function EscrowLearnPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEOSchema schema={schemas} />
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        <EscrowContent />
      </div>
    </div>
  );
}
