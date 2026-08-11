import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DeferredHomeContent from "./DeferredHomeContent";
import HeroArtwork from "./HeroArtwork";
import HomeIntelligenceCharts from "./HomeIntelligenceCharts";

const featuredGuides = [
  { image: "/guides/ultimate-guide-xrp-2026-card.webp", label: "The complete guide to XRP", eyebrow: "FOUNDATIONS", link: "/learn/what-is-xrp" },
  { image: "/guides/ultimate-guide-buying-xrp-2026-card.webp", label: "How to buy XRP safely", eyebrow: "PRACTICAL GUIDE", link: "/learn/how-to-buy-xrp" },
  { image: "/guides/xrp-2026-outlook-card.webp", label: "The 2026 XRP outlook", eyebrow: "RESEARCH", link: "/learn/xrp-2026-outlook" },
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
        <div className="premium-hero-canvas">
            <HeroArtwork />
            <div className="premium-hero-copy">
              <h1 id="home-hero-heading" className="premium-eyebrow">XRP News, Data &amp; Research</h1>
              <p className="premium-display-headline">See what moves XRP.</p>
              <p className="premium-hero-deck">News, markets, policy, and intelligence shaping XRP and the future of global finance.</p>
              <div className="premium-hero-actions">
                <Link href="/learn/what-is-xrp" className="premium-primary-action">Read the XRP guide <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link href="/learn" className="premium-text-action">Explore every guide <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
        </div>
        <div className="site-container">
          <dl className="ascii-proof-grid">
            <div><dt>Source policy</dt><dd>Primary records first</dd></div>
            <div><dt>Ownership</dt><dd>Independent of Ripple</dd></div>
            <div><dt>Review state</dt><dd><span className="ascii-status" aria-hidden="true" />Dates shown in context</dd></div>
            <div><dt>Editorial record</dt><dd><Link href="/corrections">Public corrections log ↗</Link></dd></div>
          </dl>
        </div>
      </section>

      <HomeIntelligenceCharts />

      <section className="premium-section" aria-labelledby="pathways-heading">
        <div className="site-container py-14 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="ascii-section-label">SELECT A RESEARCH PATH</p><h2 id="pathways-heading" className="mt-3 max-w-2xl text-3xl text-text-primary sm:text-5xl">What are you trying to find out?</h2></div>
            <Link href="/learn" className="text-link text-sm">Browse the full learning center <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="editorial-cover-grid mt-10">
            {featuredGuides.map((item) => (
              <Link key={item.link} href={item.link} className="editorial-cover group">
                <span className="editorial-cover-image"><Image src={item.image} alt="" width={768} height={432} unoptimized loading="lazy" fetchPriority="low" className="absolute inset-0 h-full w-full" /></span>
                <span className="editorial-cover-meta"><span>{item.eyebrow}</span><strong>{item.label}</strong></span>
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
          <Link href="/news" className="text-link text-sm">View all source-led reporting <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          <p className="max-w-md text-sm leading-6 text-text-secondary">Original reporting grounded in primary records. Every time-sensitive claim points back to its source.</p>
        </div>
        <div className="mt-8"><DeferredHomeContent /></div>
      </section>
    </div>
  );
}
