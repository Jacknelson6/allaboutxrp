"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Handshake, ExternalLink } from "lucide-react";

const partnershipHighlights = [
  { name: "SBI Holdings", type: "Strategic", region: "Japan", desc: "Japan's largest financial conglomerate. Co-created SBI Ripple Asia." },
  { name: "Mastercard", type: "Payments", region: "Global", desc: "Settling fiat card transactions using RLUSD on the XRP Ledger." },
  { name: "BNY Mellon", type: "Custody", region: "USA", desc: "Custodian for RLUSD stablecoin reserves." },
  { name: "Banco Santander", type: "Bank", region: "Spain", desc: "One Pay FX cross-border payment app via RippleNet." },
  { name: "Standard Chartered", type: "Bank", region: "UK", desc: "Cross-border payments using Ripple technology." },
  { name: "BBVA", type: "Bank", region: "Spain", desc: "Ripple Custody (Metaco Harmonize) for digital assets." },
  { name: "Citibank", type: "Bank", region: "USA", desc: "Ripple Custody (Metaco Harmonize) for institutional custody." },
  { name: "BNP Paribas", type: "Bank", region: "France", desc: "Europe's largest bank by assets, uses Ripple Custody." },
  { name: "Tranglo", type: "Payments", region: "SE Asia", desc: "40% Ripple-owned. $970M+ ODL volume across 25 corridors." },
  { name: "Archax", type: "Tokenization", region: "UK", desc: "FCA-regulated, tokenizing BlackRock fund on XRPL." },
  { name: "Republic of Palau", type: "CBDC", region: "Pacific", desc: "National stablecoin built on the XRP Ledger." },
  { name: "Hidden Road", type: "Prime Broker", region: "USA", desc: "$1.25B acquisition. $3T+ annual clearing, 300+ clients." },
];

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        <Link href="/people" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to People
        </Link>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#0085FF]/10 p-2"><Handshake className="h-5 w-5 text-[#0085FF]" /></div>
            <div>
              <h1 className="text-[28px] font-bold tracking-[-0.03em] text-text-primary md:text-[32px]">Partnerships</h1>
              <p className="mt-0.5 text-text-secondary text-sm">Banks, payment providers, and institutions across 55+ countries</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 mb-6">
          {[
            { label: "Countries", value: "55+" },
            { label: "Payments Processed", value: "$90B+" },
            { label: "CBDC Pilots", value: "20+" },
            { label: "Institutional Clients", value: "300+" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-4 text-center">
              <p className="text-xl font-bold text-text-primary font-mono">{stat.value}</p>
              <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {partnershipHighlights.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-xl border border-white/[0.06] bg-black p-4 hover:border-[#0085FF]/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-text-primary text-sm">{p.name}</h3>
                <span className="rounded-full border border-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-text-secondary">
                  {p.type}
                </span>
              </div>
              <p className="mt-0.5 text-[10px] text-text-secondary">{p.region}</p>
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/learn/partnerships"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF] hover:gap-2 transition-all"
          >
            View all partnerships <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
