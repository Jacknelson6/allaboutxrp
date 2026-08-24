import Link from "next/link";
import { Bell, ChartNoAxesCombined, ExternalLink, ShieldCheck } from "lucide-react";

const plannedFeatures = [
  {
    icon: ChartNoAxesCombined,
    title: "Compact XRP market view",
    description: "A small price and market-context panel sourced from the same providers used by the public site.",
  },
  {
    icon: Bell,
    title: "User-controlled alerts",
    description: "Optional threshold alerts that the user creates, edits, and removes. No trading or wallet access is planned.",
  },
  {
    icon: ShieldCheck,
    title: "Minimum permissions",
    description: "The product plan calls for only the browser permissions required for its core purpose, with optional capabilities requested at the moment they are used.",
  },
];

export default function ExtensionPageContent() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-xrp-accent">Product plan</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            The AllAboutXRP browser monitor is not available yet
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            This page documents the proposed product, its privacy requirements, and the verification work required before release. There is currently no AllAboutXRP listing in the Chrome Web Store and no extension download on this site.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/live-chart" className="bg-xrp-accent px-5 py-3 font-semibold text-black transition-opacity hover:opacity-90">Use the live XRP chart</Link>
            <Link href="/tools" className="border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:border-xrp-accent/50">Browse current tools</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Proposed scope</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          The concept is a read-only market companion. It would show XRP market data and optional price alerts without connecting to a wallet, requesting a seed phrase, placing trades, or reading unrelated browsing activity. These boundaries are requirements, not claims about a released product.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plannedFeatures.map(({ icon: Icon, title, description }) => (
            <article key={title} className="border border-white/[0.08] bg-white/[0.02] p-6">
              <Icon className="h-6 w-6 text-xrp-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Release criteria</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Privacy and security</h3>
              <ul className="mt-3 space-y-3 text-zinc-400">
                <li>Request only permissions necessary for the feature being used.</li>
                <li>Explain every permission in plain language before the request.</li>
                <li>Never request wallet credentials, private keys, or recovery phrases.</li>
                <li>Publish a specific privacy disclosure before collecting any telemetry.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Data quality</h3>
              <ul className="mt-3 space-y-3 text-zinc-400">
                <li>Identify the market-data provider and its update time.</li>
                <li>Show an unavailable state instead of invented or cached-as-live values.</li>
                <li>Separate market observations from predictions or financial advice.</li>
                <li>Test alert delivery, rate limits, and provider failure behavior before release.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Primary references</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
          The proposed permission model follows Chrome&apos;s own guidance to minimize required permissions and request optional access only when a user enables a feature. Market data would be treated as third-party information and visibly labeled with its source and timestamp.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a href="https://developer.chrome.com/docs/extensions/develop/security-privacy/user-privacy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xrp-accent hover:text-white">Chrome extension privacy guidance <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
          <a href="https://developer.chrome.com/docs/extensions/reference/api/permissions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xrp-accent hover:text-white">Chrome optional permissions reference <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
        </div>
        <p className="mt-8 text-sm text-zinc-500">
          Status reviewed August 24, 2026. This page will be updated only when a verified store listing or release artifact exists.
        </p>
      </section>
    </main>
  );
}
