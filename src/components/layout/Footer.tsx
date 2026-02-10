import Link from "next/link";

const footerSections = [
  {
    title: "Learn",
    links: [
      { href: "/learn#what-is-xrp", label: "What is XRP?" },
      { href: "/escrow", label: "Escrow" },
      { href: "/acquisitions", label: "Acquisitions" },
      { href: "/riddlers", label: "Riddlers" },
      { href: "/people", label: "Leadership" },
      { href: "/learn/faq", label: "FAQ" },
      { href: "/get-started", label: "Get Started" },
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
    title: "Community",
    links: [
      { href: "/", label: "X/Twitter Feed" },
      { href: "/news", label: "News" },
      { href: "/donate", label: "Donate" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border/50 bg-surface-card/30 backdrop-blur-sm" role="contentinfo">
      <div className="accent-line" />

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="group font-display text-xl font-bold text-text-primary">
              <span className="gradient-text">All</span>About<span className="gradient-text">XRP</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Your comprehensive resource for everything XRP — education, vetted community voices, live on-chain data, and more.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              All systems operational
            </div>
          </div>

          <div className="flex flex-wrap gap-12">
            {footerSections.map((section) => (
              <nav key={section.title} aria-label={`${section.title} navigation`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">{section.title}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-sm text-text-secondary transition-colors hover:text-xrp-accent">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-surface-border/50 pt-8">
          <p className="text-xs leading-relaxed text-text-secondary/70">
            © {new Date().getFullYear()} AllAboutXRP.com — This site is for informational purposes only and does not constitute financial, legal, or investment advice.
            Cryptocurrency investments carry significant risk. Always do your own research. XRP, the XRP Ledger, and Ripple are trademarks of their respective owners.
            This website is not affiliated with or endorsed by Ripple Labs Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
