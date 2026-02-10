"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, CreditCard, Wallet, ArrowRight, Rocket, Star } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Buy XRP",
  description: "A step-by-step guide to purchasing XRP cryptocurrency.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Choose an Exchange", text: "Select a reputable cryptocurrency exchange that supports XRP trading." },
    { "@type": "HowToStep", position: 2, name: "Create & Verify Account", text: "Sign up and complete identity verification (KYC) as required." },
    { "@type": "HowToStep", position: 3, name: "Deposit Funds", text: "Add funds via bank transfer, debit card, or other supported payment method." },
    { "@type": "HowToStep", position: 4, name: "Buy XRP", text: "Search for XRP and place your buy order at market or limit price." },
    { "@type": "HowToStep", position: 5, name: "Secure Your XRP", text: "Consider transferring to a self-custody wallet like Xaman for long-term storage." },
  ],
};

const exchanges = [
  { name: "Uphold", description: "Buy XRP directly with USD, EUR, GBP. No trading fees on spreads. Great for beginners.", url: "https://uphold.com", featured: true },
  { name: "Coinbase", description: "Largest U.S. exchange. Easy-to-use interface with strong security.", url: "https://coinbase.com", featured: false },
  { name: "Kraken", description: "Established exchange with advanced trading features and low fees.", url: "https://kraken.com", featured: false },
  { name: "Bitstamp", description: "One of the oldest exchanges. EU-regulated with good XRP liquidity.", url: "https://bitstamp.net", featured: false },
];

const steps = [
  { icon: <CreditCard className="h-6 w-6" />, num: "01", title: "Choose an Exchange", description: "Pick a regulated exchange that supports XRP. We recommend Uphold for beginners due to its simplicity and direct XRP purchases." },
  { icon: <Shield className="h-6 w-6" />, num: "02", title: "Verify Your Identity", description: "Complete the KYC (Know Your Customer) process. You'll need a government-issued ID and proof of address." },
  { icon: <Wallet className="h-6 w-6" />, num: "03", title: "Deposit & Buy", description: "Fund your account via bank transfer or card, then search for XRP and place your order at market or limit price." },
  { icon: <ArrowRight className="h-6 w-6" />, num: "04", title: "Secure Your XRP", description: "For long-term holding, transfer XRP to a self-custody wallet like Xaman (XUMM). Your keys, your crypto." },
];

export default function GetStartedPage() {
  return (
    <>
      <SEOSchema schema={howToSchema} />
      <div className="mx-auto max-w-4xl px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-xrp-accent/10 p-2">
              <Rocket className="h-5 w-5 text-xrp-accent" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                How to Buy <span className="gradient-text">XRP</span>
              </h1>
              <p className="mt-1 text-text-secondary">
                A beginner-friendly guide to purchasing XRP
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-6"><Disclaimer /></div>

        {/* Exchanges */}
        <section className="mt-10" aria-label="Recommended exchanges">
          <h2 className="font-display text-2xl font-bold text-text-primary">Where to Buy XRP</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {exchanges.map((ex, i) => (
              <motion.a
                key={ex.name}
                href={ex.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`card-glow flex flex-col rounded-xl border p-5 backdrop-blur-sm ${
                  ex.featured
                    ? "border-xrp-accent/30 bg-gradient-to-br from-xrp-accent/5 to-transparent sm:col-span-2"
                    : "border-surface-border bg-surface-card/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-lg font-bold text-text-primary">{ex.name}</h3>
                  {ex.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-xrp-accent/20 bg-xrp-accent/10 px-2.5 py-0.5 text-xs font-semibold text-xrp-accent">
                      <Star className="h-3 w-3" /> Recommended
                    </span>
                  )}
                  <ExternalLink className="ml-auto h-4 w-4 text-text-secondary" />
                </div>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{ex.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mt-16" aria-label="Step by step guide">
          <h2 className="font-display text-2xl font-bold text-text-primary">Step-by-Step Guide</h2>
          <div className="mt-8 space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-glow flex gap-5 rounded-xl border border-surface-border bg-surface-card/50 p-6 backdrop-blur-sm"
              >
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-xrp-accent/10">
                    <span className="font-mono text-lg font-bold text-xrp-accent">{step.num}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary">{step.title}</h3>
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
          className="mt-16 rounded-2xl border border-surface-border bg-gradient-to-br from-surface-card/50 to-xrp-accent/[0.02] p-8 text-center backdrop-blur-sm"
        >
          <h2 className="font-display text-xl font-bold text-text-primary">Ready to Learn More?</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Head back to our{" "}
            <a href="/" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">home page</a>{" "}
            for a complete guide on what XRP is and how it works.
          </p>
        </motion.div>
      </div>
    </>
  );
}
