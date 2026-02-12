"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import SEOSchema from "@/components/shared/SEOSchema";
import { Globe, Server, BookOpen, Heart, Copy, Check } from "lucide-react";

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
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(XRP_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        <div className="mt-10 flex flex-col items-center rounded-xl border border-[#0085FF]/30 bg-gradient-to-br from-[#0085FF]/5 to-transparent p-8">
          <div className="rounded-xl bg-white p-4">
            <QRCodeSVG value={`xrp:${XRP_ADDRESS}`} size={180} level="M" />
          </div>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-widest text-white/30">XRP Address</p>
          <code className="mt-2 break-all rounded-lg border border-[#0085FF]/20 bg-[#0085FF]/5 px-4 py-2 font-mono text-sm text-[#0085FF]">
            {XRP_ADDRESS}
          </code>
          <div className="mt-4">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full bg-[#0085FF] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0085FF]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0085FF] shadow-lg shadow-[#0085FF]/20"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Address"}
            </button>
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
