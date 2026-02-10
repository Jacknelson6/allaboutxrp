"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rss, ExternalLink, Newspaper, ChevronRight } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "News", item: "https://allaboutxrp.com/news" },
  ],
};

const sources = [
  { name: "@Ripple", handle: "Ripple", description: "Official Ripple news and announcements", url: "https://x.com/Ripple" },
  { name: "@XRPLF", handle: "XRPLF", description: "XRP Ledger Foundation updates", url: "https://x.com/XRPLF" },
  { name: "@RippleXDev", handle: "RippleXDev", description: "Developer platform and grants", url: "https://x.com/RippleXDev" },
  { name: "@JoelKatz", handle: "JoelKatz", description: "David Schwartz — Ripple CTO", url: "https://x.com/JoelKatz" },
];

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
                XRP News Feed
              </h1>
              <p className="mt-1 text-text-secondary">
                Real-time updates from the XRP ecosystem
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
                  AI-powered daily summaries of everything XRP
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
          className="mt-4 rounded-2xl border border-white/[0.06] bg-black p-8 "
        >
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-2xl bg-xrp-accent/10 p-5 mb-6 ">
              <svg className="h-10 w-10 text-xrp-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-text-primary">Live on X / Twitter</h2>
            <p className="mt-3 max-w-md text-sm text-text-secondary leading-relaxed">
              Follow the latest XRP conversations, breaking news, and community updates directly on X. 
              Check our <a href="/people" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">People page</a> for curated accounts.
            </p>
            <a
              href="https://x.com/search?q=%23XRP&src=typed_query&f=live"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-xrp-accent px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-xrp-accent/25"
            >
              View Live #XRP Feed
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        <div className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">Official Sources</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {sources.map((source, i) => (
              <motion.a
                key={source.handle}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black p-4 "
              >
                <div className="h-10 w-10 rounded-full bg-[#111113] flex items-center justify-center text-xs font-bold text-xrp-accent">
                  X
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary text-sm">{source.name}</h3>
                  <p className="text-xs text-text-secondary truncate">{source.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-text-secondary shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
