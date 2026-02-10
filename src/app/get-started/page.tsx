import { Metadata } from "next";
import { ExternalLink, Shield, CreditCard, Wallet, ArrowRight } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";

export const metadata: Metadata = {
  title: "How to Buy XRP — Get Started Guide",
  description: "Learn where and how to buy XRP step by step. Compare exchanges like Uphold, Coinbase, Kraken, and Bitstamp.",
  openGraph: {
    title: "How to Buy XRP — Get Started | AllAboutXRP",
    description: "Step-by-step guide to buying your first XRP.",
    url: "https://allaboutxrp.com/get-started",
  },
};

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
  { icon: <CreditCard className="h-6 w-6" />, title: "1. Choose an Exchange", description: "Pick a regulated exchange that supports XRP. We recommend Uphold for beginners due to its simplicity." },
  { icon: <Shield className="h-6 w-6" />, title: "2. Verify Your Identity", description: "Complete the KYC (Know Your Customer) process. You'll need a government-issued ID and proof of address." },
  { icon: <Wallet className="h-6 w-6" />, title: "3. Deposit & Buy", description: "Fund your account via bank transfer or card, then search for XRP and place your order." },
  { icon: <ArrowRight className="h-6 w-6" />, title: "4. Secure Your XRP", description: "For long-term holding, transfer XRP to a self-custody wallet like Xaman (XUMM). Your keys, your crypto." },
];

export default function GetStartedPage() {
  return (
    <>
      <SEOSchema schema={howToSchema} />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          How to Buy XRP
        </h1>
        <p className="mt-3 text-text-secondary">
          A beginner-friendly guide to purchasing XRP. Compare exchanges and learn the process step by step.
        </p>

        <div className="mt-6">
          <Disclaimer />
        </div>

        {/* Exchanges */}
        <section className="mt-10" aria-label="Recommended exchanges">
          <h2 className="font-display text-2xl font-bold text-text-primary">Where to Buy XRP</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {exchanges.map((ex) => (
              <a
                key={ex.name}
                href={ex.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col rounded-xl border p-5 transition-colors hover:bg-surface-elevated ${
                  ex.featured
                    ? "border-xrp-accent/50 bg-xrp-accent/5 sm:col-span-2"
                    : "border-surface-border bg-surface-card"
                }`}
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-lg font-bold text-text-primary">{ex.name}</h3>
                  {ex.featured && (
                    <span className="rounded-full bg-xrp-accent/20 px-2.5 py-0.5 text-xs font-medium text-xrp-accent">
                      Recommended
                    </span>
                  )}
                  <ExternalLink className="ml-auto h-4 w-4 text-text-secondary" />
                </div>
                <p className="mt-2 text-sm text-text-secondary">{ex.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mt-12" aria-label="Step by step guide">
          <h2 className="font-display text-2xl font-bold text-text-primary">Step-by-Step Guide</h2>
          <div className="mt-6 space-y-4">
            {steps.map((step) => (
              <div key={step.title} className="flex gap-4 rounded-xl border border-surface-border bg-surface-card p-5">
                <div className="shrink-0 text-xrp-accent">{step.icon}</div>
                <div>
                  <h3 className="font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-xl border border-surface-border bg-surface-card p-6 text-center">
          <h2 className="font-display text-xl font-bold text-text-primary">Ready to Learn More?</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Head back to our <a href="/" className="text-xrp-accent hover:underline">home page</a> for a complete guide on what XRP is and how it works.
          </p>
        </div>
      </div>
    </>
  );
}
