"use client";

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
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
            Donate XRP
          </h1>
          <p className="mt-3 text-text-secondary">
            Support AllAboutXRP and help keep this resource free and independent.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center rounded-xl border border-surface-border bg-surface-card p-8">
          <div className="rounded-2xl bg-white p-4">
            <QRCodeSVG value={`xrp:${XRP_ADDRESS}`} size={200} level="M" />
          </div>
          <p className="mt-6 text-sm text-text-secondary">XRP Address</p>
          <code className="mt-2 break-all rounded-lg bg-surface-primary px-4 py-2 font-mono text-sm text-text-primary">
            {XRP_ADDRESS}
          </code>
          <div className="mt-4">
            <CopyButton text={XRP_ADDRESS} label="Copy Address" />
          </div>
        </div>

        <section className="mt-12" aria-label="What your donation supports">
          <h2 className="font-display text-2xl font-bold text-text-primary text-center">
            What Your Donation Supports
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {supports.map((item) => (
              <div key={item.title} className="rounded-xl border border-surface-border bg-surface-card p-5">
                <div className="text-xrp-accent">{item.icon}</div>
                <h3 className="mt-3 font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
