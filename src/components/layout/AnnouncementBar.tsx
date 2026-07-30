import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="trust-bar">
      <div className="site-container flex min-h-9 items-center justify-between gap-4 py-1.5 text-[12px]">
        <div className="flex min-w-0 items-center gap-2 text-text-secondary">
          <span className="status-dot" aria-hidden="true" />
          <span className="sm:hidden">Independent XRP reference</span>
          <span className="hidden sm:inline">Independent XRP research, guides, and live data</span>
        </div>
        <Link href="/editorial" className="shrink-0 font-medium text-text-primary transition-colors hover:text-xrp-accent">
          Our standards
        </Link>
      </div>
    </div>
  );
}
