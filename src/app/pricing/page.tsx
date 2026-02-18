"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Lock } from "lucide-react";
import { useAuth } from "@/lib/supabase/auth-context";
import AuthModal from "@/components/auth/AuthModal";

const TIERS = [
  {
    name: "Plus",
    price: "$2.99",
    description: "Weekly digest access",
    features: [
      "Weekly XRP digest",
      "Market movement breakdowns",
      "Regulatory updates",
    ],
    popular: false,
    bestValue: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "Full daily + weekly coverage",
    features: [
      "Everything in Plus",
      "Daily analysis reports",
      "Key takeaways & summaries",
      "Price action tracking",
    ],
    popular: true,
    bestValue: false,
  },
  {
    name: "Max",
    price: "$12.99",
    description: "Complete intelligence suite",
    features: [
      "Everything in Pro",
      "Weekly TA request",
      "Priority support",
      "Early access to new features",
    ],
    popular: false,
    bestValue: true,
  },
];

const FAQ = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your subscription at any time from your account settings. You'll retain access until the end of your billing period.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards through Stripe, including Visa, Mastercard, and American Express.",
  },
  {
    q: "How do I access content?",
    a: "Once subscribed, all premium content is available on the site when you're signed in. New digests and reports are published on a regular schedule.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Absolutely. You can switch plans at any time. Changes take effect at the start of your next billing cycle.",
  },
];

export default function PricingPage() {
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Choose your plan
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Get the XRP intelligence you need. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 md:p-8 flex flex-col transition-all ${
                tier.popular
                  ? "border-[#0085FF] bg-[#0085FF]/[0.03] md:-mt-2 md:mb-[-8px] shadow-[0_0_40px_-12px_rgba(0,133,255,0.15)]"
                  : "border-[#2F3336] bg-[#16181C]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0085FF] text-xs font-semibold text-white tracking-wide">
                  Most Popular
                </div>
              )}
              {tier.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white tracking-wide">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-semibold text-xl mb-1">{tier.name}</h3>
                <p className="text-gray-500 text-sm">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-gray-500 text-sm">/mo</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <Check className="h-4 w-4 text-[#0085FF] mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/subscribe"
                className={`block w-full py-3 rounded-xl text-sm font-semibold text-center transition-colors ${
                  tier.popular
                    ? "bg-[#0085FF] text-white hover:bg-[#0070DD]"
                    : "bg-white/5 text-white border border-[#2F3336] hover:border-[#0085FF]/40 hover:bg-white/[0.08]"
                }`}
              >
                Get {tier.name}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-2">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#2F3336] bg-[#16181C] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-white text-sm font-medium">{item.q}</span>
                  <span className="text-gray-500 text-lg ml-4">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sign in link */}
        <div className="text-center">
          {user ? (
            <p className="text-gray-500 text-sm">
              Signed in as {user.email}.{" "}
              <Link href="/digest" className="text-[#0085FF] hover:underline">
                Go to digests
              </Link>
            </p>
          ) : (
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => setShowAuth(true)}
                className="text-[#0085FF] hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </main>
  );
}
