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
    <footer className="border-t border-surface-border bg-black" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="text-xl font-bold text-text-primary">
              All<span className="text-xrp-accent">About</span>XRP
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Your comprehensive resource for everything XRP — education, vetted community voices, live on-chain data, and more.
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            {footerSections.map((section) => (
              <nav key={section.title} aria-label={`${section.title} navigation`}>
                <p className="text-xs font-bold uppercase tracking-wider text-text-secondary/60 mb-4">{section.title}</p>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        
        <div className="section-divider mt-12 mb-6" />
        
        <p className="text-xs text-text-secondary/50 leading-relaxed">
          © {new Date().getFullYear()} AllAboutXRP.com — This site is for informational purposes only and does not constitute financial, legal, or investment advice.
          Cryptocurrency investments carry significant risk. Always do your own research. XRP, the XRP Ledger, and Ripple are trademarks of their respective owners.
          This website is not affiliated with or endorsed by Ripple Labs Inc.
        </p>
      </div>
    </footer>
  );
}
