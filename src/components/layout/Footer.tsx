import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/escrow", label: "Escrow" },
  { href: "/acquisitions", label: "Acquisitions" },
  { href: "/riddlers", label: "Riddlers" },
  { href: "/people", label: "People" },
  { href: "/richlist", label: "Rich List" },
  { href: "/get-started", label: "Get Started" },
  { href: "/donate", label: "Donate" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border/50 bg-surface-card/30 backdrop-blur-sm" role="contentinfo">
      {/* Top accent line */}
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
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary transition-colors hover:text-xrp-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
