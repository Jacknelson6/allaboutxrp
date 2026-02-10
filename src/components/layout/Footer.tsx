import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/people", label: "People" },
  { href: "/news", label: "News" },
  { href: "/richlist", label: "Rich List" },
  { href: "/get-started", label: "Get Started" },
  { href: "/donate", label: "Donate" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-card" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-lg font-bold text-text-primary">
              <span className="text-xrp-accent">All</span>About<span className="text-xrp-accent">XRP</span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary">
              Your comprehensive resource for everything XRP — education, community, live data, and more.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t border-surface-border pt-8">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} AllAboutXRP.com. This site is for informational purposes only and does not constitute financial advice. 
            XRP and the XRP Ledger are independent of this website. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
