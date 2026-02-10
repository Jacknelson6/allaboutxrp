import Link from "next/link";

const sites = [
  { ticker: "XRP", name: "allaboutxrp.com", href: "/", current: true },
  { ticker: "HBAR", name: "allabouthbar.com", href: "https://allabouthbar.com", comingSoon: true },
  { ticker: "XLM", name: "allaboutxlm.com", href: "https://allaboutxlm.com", comingSoon: true },
  { ticker: "XDC", name: "allaboutxdc.com", href: "https://allaboutxdc.com", comingSoon: true },
];

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-surface-border/30 bg-[#060911]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-1.5 text-xs sm:gap-6">
        <span className="hidden text-text-secondary/60 sm:inline">The &quot;All About&quot; Network:</span>
        {sites.map((site) => {
          const classes = site.current
            ? "text-xrp-accent font-semibold"
            : site.comingSoon
            ? "text-text-secondary/40 cursor-default"
            : "text-text-secondary hover:text-text-primary";

          if (site.current) {
            return (
              <Link key={site.ticker} href={site.href} className={`flex items-center gap-1.5 transition-colors ${classes}`}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-xrp-accent opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-xrp-accent" />
                </span>
                <span className="font-mono">{site.ticker}</span>
              </Link>
            );
          }

          return (
            <span key={site.ticker} className={`flex items-center gap-1.5 ${classes}`}>
              <span className="font-mono">{site.ticker}</span>
              {site.comingSoon && <span className="text-[10px] opacity-50">soon</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
