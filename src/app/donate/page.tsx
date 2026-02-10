"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import CopyButton from "@/components/shared/CopyButton";
import SEOSchema from "@/components/shared/SEOSchema";
import { Heart, Globe, Server, BookOpen } from "lucide-react";

const XRP_ADDRESS = "rXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Donate", item: "https://allaboutxrp.com/donate" },
  ],
};

const supports = [
  { icon: <Server className="h-6 w-6" />, title: "Hosting & Infrastructure", description: "Servers, APIs, and bandwidth to keep AllAboutXRP fast and reliable." },
  { icon: <BookOpen className="h-6 w-6" />, title: "Content & Research", description: "Keeping educational content accurate, up-to-date, and comprehensive." },
  { icon: <Globe className="h-6 w-6" />, title: "Community Development", description: "Building tools and resources that benefit the entire XRP community." },
  { icon: <Heart className="h-6 w-6" />, title: "Independence", description: "Donations help us remain independent and free from advertising." },
];

export default function DonatePage() {
  return (
    <>
      <SEOSchema schema={breadcrumbSchema} />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-xrp-accent/10">
            <Heart className="h-8 w-8 text-xrp-accent" />
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Donate <span className="gradient-text">XRP</span>
          </h1>
          <p className="mt-3 text-text-secondary">
            Support AllAboutXRP and help keep this resource free and independent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex flex-col items-center rounded-2xl border border-surface-border bg-surface-card/50 p-8 backdrop-blur-sm"
        >
          <div className="rounded-2xl bg-white p-5 shadow-2xl shadow-xrp-accent/8 animate-pulse-glow">
            <QRCodeSVG value={`xrp:${XRP_ADDRESS}`} size={200} level="M" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">XRP Address</p>
          <code className="mt-2 break-all rounded-xl bg-surface-primary/80 px-5 py-3 font-mono text-sm text-xrp-accent border border-surface-border">
            {XRP_ADDRESS}
          </code>
          <div className="mt-4">
            <CopyButton text={XRP_ADDRESS} label="Copy Address" />
          </div>
        </motion.div>

        <section className="mt-16" aria-label="What your donation supports">
          <h2 className="font-display text-2xl font-bold text-text-primary text-center">
            What Your Donation Supports
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {supports.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-glow rounded-xl border border-surface-border bg-surface-card/50 p-5 backdrop-blur-sm"
              >
                <div className="rounded-lg bg-xrp-accent/10 p-2 w-fit text-xrp-accent">{item.icon}</div>
                <h3 className="mt-3 font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
