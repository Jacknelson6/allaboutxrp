import type { Metadata } from "next";
import Link from "next/link";

// This file is rendered with an HTTP 404 status automatically by Next.js.
// The explicit noindex is belt-and-suspenders: it stops the page from
// inheriting the root layout's default index:true robots directive.
export const metadata: Metadata = {
  title: "Page Not Found | AllAboutXRP",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-[13px] font-medium uppercase tracking-widest text-xrp-accent">
        404
      </p>
      <h1 className="mt-3 text-[36px] font-bold tracking-[-0.04em] text-text-primary">
        Page not found
      </h1>
      <p className="mt-2 text-[15px] text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
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
  );
}
