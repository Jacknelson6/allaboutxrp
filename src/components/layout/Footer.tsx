import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const footerSections = [
  {
    title: "Explore",
    links: [
      { href: "/learn", label: "Learning center" },
      { href: "/answers", label: "XRP answers" },
      { href: "/news", label: "Latest news" },
      { href: "/live-chart", label: "Live XRP data" },
      { href: "/tools", label: "XRP tools" },
    ],
  },
  {
    title: "Essential guides",
    links: [
      { href: "/learn/what-is-xrp", label: "What is XRP?" },
      { href: "/learn/what-is-ripple", label: "What is Ripple?" },
      { href: "/learn/how-does-xrp-work", label: "How XRP works" },
      { href: "/learn/xrp-supply-explained", label: "XRP supply" },
      { href: "/learn/xrp-wallets", label: "XRP wallets" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "Our mission" },
      { href: "/editorial", label: "Editorial standards" },
      { href: "/learn/trusted-sources", label: "Trusted sources" },
      { href: "/privacy-policy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-[#070b10] pb-[env(safe-area-inset-bottom)]" role="contentinfo">
      <div className="site-container py-14 sm:py-18">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex min-h-11 items-center" aria-label="AllAboutXRP home">
              <Image src="/aaxrp-logo.png" alt="All About XRP" width={1299} height={138} unoptimized className="h-auto w-[218px]" />
            </Link>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Independent, source-led education, reporting, data, and tools for understanding XRP and the XRP Ledger.
            </p>
            <Link href="/editorial" className="text-link mt-4 text-sm">
              How we verify information <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footerSections.map((section) => (
              <nav key={section.title} aria-label={`${section.title} links`}>
                <h2 className="font-sans text-sm font-semibold text-text-primary">{section.title}</h2>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-flex min-h-9 items-center text-sm text-text-secondary transition-colors hover:text-text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-surface-border pt-6">
          <div className="flex flex-col gap-3 text-xs leading-6 text-text-secondary lg:flex-row lg:items-start lg:justify-between">
            <p>© {new Date().getFullYear()} AllAboutXRP.com</p>
            <p className="max-w-3xl lg:text-right">
              For educational purposes only; not financial, legal, or investment advice. Cryptocurrency involves significant risk.
              AllAboutXRP is not affiliated with or endorsed by Ripple Labs Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
