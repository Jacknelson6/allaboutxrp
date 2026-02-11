import Link from "next/link";

const footerSections = [
  {
    title: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/live-chart", label: "Live Chart" },
      { href: "/learn", label: "Learn" },
      { href: "/how-to-start", label: "How to Start" },
      { href: "/donate", label: "Donate" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/learn/what-is-xrp", label: "What is XRP?" },
      { href: "/learn/what-is-ripple", label: "What is Ripple?" },
      { href: "/learn/history", label: "History" },
      { href: "/learn/partnerships", label: "Partnerships" },
      { href: "/learn/acquisitions", label: "Acquisitions" },
      { href: "/learn/key-people", label: "Key People" },
      { href: "/learn/trusted-sources", label: "Trusted Sources" },
      { href: "/learn/escrow", label: "Escrow" },
      { href: "/learn/faq", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="text-[17px] font-semibold tracking-tight text-text-primary">
              All<span className="text-xrp-accent">About</span>XRP
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Your comprehensive resource for everything XRP — education, vetted community voices, live on-chain data, and more.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex md:gap-16">
            {footerSections.map((section) => (
              <nav key={section.title} aria-label={`${section.title} navigation`}>
                <p className="text-[11px] font-medium uppercase tracking-widest text-white/25 mb-4">{section.title}</p>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-[13px] text-text-secondary hover:text-text-primary transition-colors duration-200">
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
        
        <p className="text-[11px] text-white/20 leading-relaxed">
          © {new Date().getFullYear()} AllAboutXRP.com — This site is for informational purposes only and does not constitute financial, legal, or investment advice.
          Cryptocurrency investments carry significant risk. Always do your own research. XRP, the XRP Ledger, and Ripple are trademarks of their respective owners.
          This website is not affiliated with or endorsed by Ripple Labs Inc.
        </p>
      </div>
    </footer>
  );
}
