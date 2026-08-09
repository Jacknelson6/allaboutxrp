import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import DeferredHomeContent from "./DeferredHomeContent";

const pathways = [
  { code: "LEARN", href: "/learn/what-is-xrp", title: "Understand XRP", text: "Asset, ledger, supply, and real use cases." },
  { code: "WATCH", href: "/live-chart", title: "Follow live data", text: "Market context and XRP Ledger signals." },
  { code: "TRACE", href: "/holders", title: "Explore the ledger", text: "Distribution, accounts, and methodology." },
  { code: "MODEL", href: "/tools", title: "Use XRP tools", text: "Fees, outcomes, alerts, and calculators." },
];

const answerLinks = [
  { href: "/learn/what-is-xrp", label: "What is XRP?", tag: "BASICS" },
  { href: "/learn/how-does-xrp-work", label: "How does the XRP Ledger work?", tag: "NETWORK" },
  { href: "/learn/what-is-ripple", label: "Is Ripple the same as XRP?", tag: "COMPANY" },
  { href: "/learn/xrp-supply-explained", label: "How many XRP exist?", tag: "SUPPLY" },
  { href: "/learn/how-to-store-xrp-safely", label: "How do you store XRP safely?", tag: "CUSTODY" },
  { href: "/learn/is-xrp-a-security", label: "What is XRP’s legal status?", tag: "LEGAL" },
];

export default function HomeFeed() {
  return (
    <div className="ascii-home premium-home bg-surface-primary">
      <section className="premium-hero" aria-labelledby="home-hero-heading">
        <div className="site-container premium-hero-frame">
          <div className="premium-hero-canvas">
            <Image
              src="/images/xrp-ascii-bank-hero.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="premium-hero-art"
            />
            <div className="premium-hero-copy">
              <p className="premium-eyebrow">AllAboutXRP / Independent reference</p>
              <h1 id="home-hero-heading">The independent guide to XRP.</h1>
              <p className="premium-answer">XRP is the native digital asset of the XRP Ledger, an open-source network designed to settle value in seconds. AllAboutXRP explains how it works, what Ripple’s role is, and what the evidence actually shows through primary sources, live data, and transparent methodology.</p>
              <div className="premium-hero-actions">
                <Link href="/learn/what-is-xrp" className="premium-primary-action">Read the XRP guide <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link href="/learn" className="premium-text-action">Explore every guide <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <p className="premium-art-caption" aria-hidden="true">OPEN LEDGER / OPEN RECORD / INDEPENDENT ANALYSIS</p>
          </div>

          <dl className="ascii-proof-grid">
            <div><dt>Source policy</dt><dd>Primary records first</dd></div>
            <div><dt>Ownership</dt><dd>Independent of Ripple</dd></div>
            <div><dt>Review state</dt><dd><span className="ascii-status" aria-hidden="true" />Dates shown in context</dd></div>
            <div><dt>Editorial record</dt><dd><Link href="/corrections">Public corrections log ↗</Link></dd></div>
          </dl>
        </div>
      </section>

      <section className="premium-section" aria-labelledby="pathways-heading">
        <div className="site-container py-14 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="ascii-section-label">SELECT A RESEARCH PATH</p><h2 id="pathways-heading" className="mt-3 max-w-2xl text-3xl text-text-primary sm:text-5xl">What are you trying to find out?</h2></div>
            <Link href="/learn" className="text-link text-sm">Browse the full learning center <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="ascii-pathways mt-10">
            {pathways.map((item) => (
              <Link key={item.code} href={item.href} className="ascii-pathway group">
                <span className="ascii-pathway-code">[{item.code}]</span>
                <span><strong>{item.title}</strong><small>{item.text}</small></span>
                <span className="ascii-pathway-arrow" aria-hidden="true">────────↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ascii-answer-index premium-section" aria-labelledby="answer-index-heading">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-20">
          <div>
            <p className="ascii-section-label">ANSWER INDEX / CORE RECORDS</p>
            <h2 id="answer-index-heading" className="mt-4 text-4xl text-text-primary sm:text-5xl">Start with a precise question.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-text-secondary">Each guide opens with the short answer, then shows the evidence, context, and limits behind it.</p>
            <div className="ascii-mini-art mt-9" aria-hidden="true"><pre>{"query ──→ claim\n            │\nsource ──→ check ──→ answer\n            │\n         limits"}</pre></div>
          </div>
          <ol className="ascii-answer-list">
            {answerLinks.map((item, index) => (
              <li key={item.href}><Link href={item.href}><span className="ascii-answer-count">{String(index + 1).padStart(2, "0")}</span><span className="ascii-answer-title">{item.label}</span><span className="ascii-answer-tag">{item.tag}</span><span aria-hidden="true">↗</span></Link></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-container py-14 sm:py-20" aria-labelledby="latest-xrp-heading">
        <div className="ascii-feed-heading">
          <div><p className="ascii-section-label">NEWS WIRE / CURRENT COVERAGE</p><h2 id="latest-xrp-heading" className="mt-3 text-3xl text-text-primary sm:text-5xl">Latest XRP developments</h2></div>
          <p className="max-w-md text-sm leading-6 text-text-secondary">Original reporting and dated recaps. Every time-sensitive claim points back to its source.</p>
        </div>
        <div className="mt-8"><DeferredHomeContent /></div>
      </section>
    </div>
  );
}
