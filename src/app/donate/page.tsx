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
      <div className="mx-auto max-w-2xl px-5 py-20">
        <div className="text-center">
          <h1 className="text-[36px] font-bold tracking-[-0.04em] text-text-primary">
            Donate <span className="gradient-text">XRP</span>
          </h1>
          <p className="mt-2 text-[15px] text-text-secondary">
            Support AllAboutXRP and help keep this resource free.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-8">
          <div className="rounded-xl bg-white p-4">
            <QRCodeSVG value={`xrp:${XRP_ADDRESS}`} size={180} level="M" />
          </div>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-widest text-white/30">XRP Address</p>
          <code className="mt-2 break-all rounded-lg border border-white/[0.06] px-4 py-2 font-mono text-sm text-xrp-accent">
            {XRP_ADDRESS}
          </code>
          <div className="mt-3">
            <CopyButton text={XRP_ADDRESS} label="Copy Address" />
          </div>
        </div>

        <section className="mt-14" aria-label="What your donation supports">
          <h2 className="text-xl font-semibold tracking-tight text-text-primary text-center">
            What Your Donation Supports
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {supports.map((item) => (
              <div
                key={item.title}
                className="linear-card p-5"
              >
                <div className="text-xrp-accent/60">{item.icon}</div>
                <h3 className="mt-2.5 font-medium text-text-primary text-[14px]">{item.title}</h3>
                <p className="mt-1 text-[13px] text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
