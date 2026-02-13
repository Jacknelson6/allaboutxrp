"use client";

import {
  ArrowRight,
  Chrome,
  Monitor,
  TrendingUp,
  BarChart3,
  Globe,
  Activity,
  Lightbulb,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Persistent Standalone Window",
    description:
      "Not an ephemeral popup — a real standalone window that stays open while you browse. It remembers its position and size, so your trading dashboard is always where you left it.",
  },
  {
    icon: TrendingUp,
    title: "Live Price Tracker Strip",
    description:
      "Always-visible top strip showing the current XRP price, 24-hour percentage change, and the day's high and low. Powered by Binance WebSocket for real-time updates.",
  },
  {
    icon: BarChart3,
    title: "Chart Tab",
    description:
      "Your default view. Switch between a full TradingView embed with professional tools or a fast native lightweight chart. Candlesticks, indicators, and timeframes — all built in.",
  },
  {
    icon: Globe,
    title: "Globe Tab — Live XRPL Transactions",
    description:
      "Watch XRP Ledger transactions arc across an interactive 3D globe in real time. The same visualization from the AllAboutXRP homepage, now in your extension with a live transaction feed.",
  },
  {
    icon: Activity,
    title: "Compact Live Trades Tape",
    description:
      "A scrolling 20-row tape of real-time XRP trades. See the flow of buys and sells as they happen — price, size, and direction at a glance.",
  },
  {
    icon: Zap,
    title: "Real-Time Data Pipeline",
    description:
      "Primary data from Binance WebSocket with automatic Binance US fallback. Sub-second price updates, no polling, no delays.",
  },
  {
    icon: Lightbulb,
    title: "Contextual Tips",
    description:
      "One-time tips that appear when you first use each feature, then auto-dismiss forever. Learn the interface without reading a manual.",
  },
];

export default function ExtensionPageContent() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0085FF]/[0.06] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0085FF]/[0.04] rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0085FF]/20 bg-[#0085FF]/[0.06] px-4 py-1.5 text-[13px] font-medium text-[#0085FF] mb-6">
            <Chrome className="h-4 w-4" />
            Chrome Extension
          </div>
          <h1 className="text-[36px] sm:text-[52px] font-bold tracking-[-0.04em] text-text-primary leading-[1.1]">
            All About XRP
          </h1>
          <p className="mt-3 text-[20px] sm:text-[24px] font-medium text-[#0085FF] tracking-[-0.02em]">
            Live XRP trader monitor
          </p>
          <p className="mt-5 text-[16px] sm:text-[17px] text-text-secondary leading-relaxed max-w-2xl mx-auto">
            A persistent XRP trading dashboard that lives in your browser. Real-time price, professional charts, live XRPL transaction globe, and a streaming trades tape — always one click away.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#0085FF] px-8 py-3 text-[15px] font-bold text-white hover:bg-[#0070DD] transition-all hover:shadow-[0_0_24px_rgba(0,133,255,0.35)] hover:gap-3"
            >
              <Chrome className="h-4.5 w-4.5" />
              Install Extension
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-[13px] text-text-secondary">
              Free · Chrome Web Store
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-text-primary">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-3 text-[15px] text-text-secondary max-w-xl mx-auto">
            Built for XRP traders who want live data without tab-switching or clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/[0.06] bg-[#0A0A0B] p-6 hover:border-[#0085FF]/20 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] text-[#0085FF] mb-4 group-hover:bg-[#0085FF]/10 group-hover:border-[#0085FF]/20 transition-colors">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-[17px] font-bold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-2xl border border-[#0085FF]/20 bg-gradient-to-b from-[#0085FF]/[0.04] to-transparent p-10 sm:p-14 text-center">
          <h2 className="text-[26px] sm:text-[32px] font-bold tracking-[-0.03em] text-text-primary">
            Ready to trade smarter?
          </h2>
          <p className="mt-3 text-[15px] text-text-secondary max-w-md mx-auto">
            Install the All About XRP extension and get live market data without leaving your browser.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0085FF] px-8 py-3 text-[15px] font-bold text-white hover:bg-[#0070DD] transition-all hover:shadow-[0_0_24px_rgba(0,133,255,0.35)] hover:gap-3"
          >
            <Chrome className="h-4.5 w-4.5" />
            Install Extension
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
