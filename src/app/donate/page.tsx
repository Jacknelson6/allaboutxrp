"use client";

import { QRCodeSVG } from "qrcode.react";
import CopyButton from "@/components/shared/CopyButton";
import SEOSchema from "@/components/shared/SEOSchema";
import { Globe, Server, BookOpen, Heart } from "lucide-react";

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
  { icon: <Server className="h-5 w-5" />, title: "Hosting & Infrastructure", description: "Servers, APIs, and bandwidth." },
  { icon: <BookOpen className="h-5 w-5" />, title: "Content & Research", description: "Keeping content accurate and current." },
  { icon: <Globe className="h-5 w-5" />, title: "Community Development", description: "Building tools for the XRP community." },
  { icon: <Heart className="h-5 w-5" />, title: "Independence", description: "Remaining ad-free and independent." },
];

export default function DonatePage() {
  return (
    <>
      <SEOSchema schema={breadcrumbSchema} />
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-text-primary">
            Donate <span className="text-xrp-accent">XRP</span>
          </h1>
          <p className="mt-2 text-text-secondary">
            Support AllAboutXRP and help keep this resource free.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center rounded-2xl border border-surface-border p-8">
          <div className="rounded-2xl bg-white p-4">
            <QRCodeSVG value={`xrp:${XRP_ADDRESS}`} size={180} level="M" />
          </div>
          <p className="mt-5 text-xs font-medium uppercase tracking-wider text-text-secondary">XRP Address</p>
          <code className="mt-2 break-all rounded-lg border border-surface-border px-4 py-2 font-mono text-sm text-xrp-accent">
            {XRP_ADDRESS}
          </code>
          <div className="mt-3">
            <CopyButton text={XRP_ADDRESS} label="Copy Address" />
          </div>
        </div>

        <section className="mt-12" aria-label="What your donation supports">
          <h2 className="text-xl font-bold text-text-primary text-center">
            What Your Donation Supports
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {supports.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-surface-border p-4"
              >
                <div className="text-xrp-accent">{item.icon}</div>
                <h3 className="mt-2 font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
