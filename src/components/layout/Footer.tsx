import Link from "next/link";

const footerSections = [
  {
    title: "Learn",
    links: [
      { href: "/learn/what-is-xrp", label: "What is XRP?" },
      { href: "/escrow", label: "Escrow" },
      { href: "/acquisitions", label: "Acquisitions" },
      { href: "/riddlers", label: "Riddlers" },
      { href: "/people", label: "Leadership" },
      { href: "/learn/faq", label: "FAQ" },
      { href: "/learn/get-started", label: "Get Started" },
    ],
  },
  {
    title: "Track",
    links: [
      { href: "/live", label: "Live Charts" },
      { href: "/live", label: "3D Globe" },
      { href: "/richlist", label: "Rich List" },
    ],
  },
  {
    title: "Analysis",
    links: [
      { href: "/news/recaps", label: "Daily Recaps" },
      { href: "/news", label: "All Analysis" },
      { href: "/donate", label: "Donate" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border/30 bg-surface-card/20" role="contentinfo">
      {/* Atmospheric top gradient */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-xrp-accent/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-xrp-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="group font-display text-xl font-bold tracking-tight text-text-primary">
              <span className="gradient-text">All</span>About<span className="gradient-text">XRP</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary/80">
              Your comprehensive resource for everything XRP — education, vetted community voices, live on-chain data, and more.
            </p>
            <div className="mt-5 flex items-center gap-2.5 text-xs text-text-secondary/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              All systems operational
            </div>
          </div>

          <div className="flex flex-wrap gap-16">
            {footerSections.map((section) => (
              <nav key={section.title} aria-label={`${section.title} navigation`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/50 mb-5">{section.title}</p>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-sm text-text-secondary/70 transition-all duration-200 hover:text-xrp-accent hover:translate-x-0.5 inline-block">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        
        <div className="section-divider mt-16 mb-8" />
        
        <p className="text-[11px] leading-relaxed text-text-secondary/40">
          © {new Date().getFullYear()} AllAboutXRP.com — This site is for informational purposes only and does not constitute financial, legal, or investment advice.
          Cryptocurrency investments carry significant risk. Always do your own research. XRP, the XRP Ledger, and Ripple are trademarks of their respective owners.
          This website is not affiliated with or endorsed by Ripple Labs Inc.
        </p>
      </div>
    </footer>
  );
}
