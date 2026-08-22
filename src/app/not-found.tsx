import type { Metadata } from "next";
import Link from "next/link";
import {
  MACHINE_INDEX_LINKS,
  SECTION_LINKS,
  TRUST_LINKS,
  type RecoveryLink,
} from "@/lib/agent/site-index";

// This file is rendered with an HTTP 404 status automatically by Next.js.
// The explicit noindex is belt-and-suspenders: it stops the page from
// inheriting the root layout's default index:true robots directive.
export const metadata: Metadata = {
  title: "Page Not Found | AllAboutXRP",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: true },
};

const groups: { title: string; links: RecoveryLink[] }[] = [
  { title: "Main sections", links: SECTION_LINKS },
  { title: "Publisher", links: TRUST_LINKS },
  { title: "Machine-readable indexes", links: MACHINE_INDEX_LINKS },
];

/**
 * The 404 page doubles as a recovery map. A reader gets the three routes back
 * into the site; an agent gets the same map — and, when it asks for Markdown,
 * the equivalent 404 document built from these same lists.
 */
export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 sm:py-28">
      <div className="text-center">
        <p className="font-mono text-[13px] font-medium uppercase tracking-widest text-xrp-accent">
          404
        </p>
        <h1 className="mt-3 text-[36px] font-bold tracking-[-0.04em] text-text-primary">
          Page not found
        </h1>
        <p className="mt-2 text-[15px] text-text-secondary">
          Nothing is published at this address. Retired URLs redirect to their canonical
          replacement, so this path was either never published or mistyped.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className=" bg-xrp-accent px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Back to Home
          </Link>
          <Link
            href="/learn/what-is-xrp"
            className=" border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium text-text-primary transition-all hover:bg-white/[0.06]"
          >
            Learn about XRP
          </Link>
          <Link
            href="/live-chart"
            className=" border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium text-text-primary transition-all hover:bg-white/[0.06]"
          >
            Live Charts
          </Link>
        </div>
      </div>

      <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-10 sm:grid-cols-3">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-text-secondary">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] font-medium text-text-primary underline decoration-white/20 underline-offset-4 transition-colors hover:text-xrp-accent"
                  >
                    {link.label}
                  </a>
                  <p className="mt-1 text-[13px] leading-5 text-text-secondary">{link.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 border-t border-white/[0.08] pt-6 text-[13px] leading-6 text-text-secondary">
        Machine clients: every page on this site also serves Markdown. Send{" "}
        <code>Accept: text/markdown</code> or append <code>.md</code> to the path. This 404
        answers in Markdown too, with the same links listed above.
      </p>
    </div>
  );
}
