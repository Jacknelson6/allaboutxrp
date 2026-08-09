"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Shield, CreditCard, Wallet, ArrowRight, Rocket } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Buy and Secure XRP",
  description: "A risk-aware beginner checklist for researching an exchange, buying XRP, and planning secure custody.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Research an Exchange", text: "Check location support, license disclosures, total fees, funding methods, withdrawal rules, and security history." },
    { "@type": "HowToStep", position: 2, name: "Secure and Verify Your Account", text: "Use a unique password and strong multifactor authentication, then complete required identity checks." },
    { "@type": "HowToStep", position: 3, name: "Fund the Account and Review the Order", text: "Confirm the trading pair, price, spread, fee, and destination before placing an order." },
    { "@type": "HowToStep", position: 4, name: "Choose a Custody Plan", text: "Compare exchange and self-custody, then verify addresses, destination tags, backups, and the current XRPL reserve before withdrawing." },
  ],
};

const exchanges = [
  { name: "Bitstamp", description: "An established exchange that lists XRP in supported markets. Verify current availability, fees, and local eligibility directly with Bitstamp.", url: "https://bitstamp.net" },
  { name: "Coinbase", description: "A large U.S.-based exchange that supports XRP in eligible regions. Review its current fee disclosure and custody terms before using it.", url: "https://www.coinbase.com" },
  { name: "Kraken", description: "An established exchange with spot and advanced order interfaces. XRP availability and funding options vary by jurisdiction.", url: "https://kraken.com" },
  { name: "Uphold", description: "A multi-asset platform that offers XRP in supported regions. Confirm the quoted spread, withdrawal rules, and local availability before buying.", url: "https://uphold.com" },
];

const steps = [
  { icon: <CreditCard className="h-6 w-6" />, num: "01", title: "Research an Exchange", description: "Check whether the provider supports XRP in your location, then compare its license disclosures, total fees, funding methods, withdrawal rules, and security history." },
  { icon: <Shield className="h-6 w-6" />, num: "02", title: "Secure and Verify Your Account", description: "Use a unique password and phishing-resistant multifactor authentication, then complete any identity checks required in your jurisdiction." },
  { icon: <Wallet className="h-6 w-6" />, num: "03", title: "Fund the Account and Review the Order", description: "Confirm the trading pair, quoted price, spread, fee, and destination before placing a market or limit order. Only risk funds you can afford to lose." },
  { icon: <ArrowRight className="h-6 w-6" />, num: "04", title: "Choose a Custody Plan", description: "Decide whether exchange custody or a self-custody wallet fits your needs. If withdrawing, verify the address, destination tag requirements, wallet backup, and current XRPL reserve." },
];

export default function GetStartedPage() {
  return (
    <>
      <SEOSchema schema={howToSchema} />
      <main id="main-content" className="mx-auto max-w-4xl px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className=" bg-xrp-accent/10 p-2">
              <Rocket className="h-5 w-5 text-xrp-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                How to Start with <span className="text-xrp-accent">XRP</span>
              </h1>
              <p className="mt-1 text-text-secondary">
                A risk-aware checklist for researching, buying, and securing XRP
              </p>
            </div>
          </div>
        </motion.div>


        {/* Exchanges */}
        <section className="mt-10" aria-label="Example exchanges">
          <h2 className="text-2xl font-bold text-text-primary">Where to Buy XRP</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-text-secondary">
            These are examples of established platforms that list XRP in some markets, not a
            ranking or endorsement. Availability, regulation, fees, and withdrawal policies
            change. Compare the current terms on each provider&apos;s official site before opening
            or funding an account.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {exchanges.map((ex, i) => (
              <motion.a
                key={ex.name}
                href={ex.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col  border border-white/[0.06] bg-black p-5"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-text-primary">{ex.name}</h3>
                  <ExternalLink className="ml-auto h-4 w-4 text-text-secondary" />
                </div>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{ex.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mt-16" aria-label="Step by step guide">
          <h2 className="text-2xl font-bold text-text-primary">Step-by-Step Guide</h2>
          <div className="mt-8 space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5  border border-white/[0.06] bg-black p-6 "
              >
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center  bg-xrp-accent/10">
                    <span className="font-mono text-lg font-bold text-xrp-accent">{step.num}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16  border border-white/[0.06] bg-gradient-to-br from-[#0A0A0B]/50 to-xrp-accent/[0.02] p-8 text-center "
        >
          <h2 className="text-xl font-bold text-text-primary">Ready to Learn More?</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/learn/what-is-xrp" className=" border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-text-primary hover:bg-white/[0.06] transition-colors">What is XRP?</Link>
            <Link href="/learn/what-is-ripple" className=" border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-text-primary hover:bg-white/[0.06] transition-colors">What is Ripple?</Link>
            <Link href="/learn/history" className=" border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-text-primary hover:bg-white/[0.06] transition-colors">History</Link>
            <Link href="/learn/rlusd" className=" border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-text-primary hover:bg-white/[0.06] transition-colors">RLUSD</Link>
            <Link href="/learn/partnerships" className=" border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-text-primary hover:bg-white/[0.06] transition-colors">Partnerships</Link>
            <Link href="/learn" className=" bg-[#0085FF]/10 border border-[#0085FF]/20 px-4 py-2 text-sm font-semibold text-[#0085FF] hover:bg-[#0085FF]/20 transition-colors">Browse All →</Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
