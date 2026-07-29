"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rss, Newspaper, ChevronRight } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "News", item: "https://allaboutxrp.com/news" },
  ],
};

export default function NewsPage() {
  return (
    <>
      <SEOSchema schema={breadcrumbSchema} />
      <div className="mx-auto max-w-4xl px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-xrp-accent/10 p-2">
              <Rss className="h-5 w-5 text-xrp-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                XRP News and Recaps
              </h1>
              <p className="mt-1 text-text-secondary">
                A source-led archive of XRP ecosystem coverage
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/news/recaps"
            className="group flex items-center justify-between rounded-xl border border-xrp-accent/20 bg-xrp-accent/5 p-5 "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-xrp-accent/10 p-2">
                <Newspaper className="h-5 w-5 text-xrp-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-text-primary group-hover:text-xrp-accent transition-colors">
                  Daily XRP Recaps
                </h2>
                <p className="text-sm text-text-secondary">
                  Dated summaries with links back to original reporting
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-text-secondary group-hover:text-xrp-accent transition-colors" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 rounded-2xl border border-white/[0.06] bg-black p-8"
        >
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-2xl bg-xrp-accent/10 p-5 mb-6">
              <Rss className="h-10 w-10 text-xrp-accent" />
            </div>
            <h2 className="text-xl font-bold text-text-primary">News feed status</h2>
            <p className="mt-3 max-w-md text-sm text-text-secondary leading-relaxed">
              No current stories are available in the feed. Browse the{" "}
              <Link href="/news/recaps" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">recap archive</Link>{" "}
              and verify time-sensitive claims with the original source linked from each entry.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
