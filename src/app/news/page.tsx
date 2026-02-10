import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";

export const metadata: Metadata = {
  title: "XRP News — Live Feed & Updates",
  description: "Stay up to date with the latest XRP and Ripple news from trusted sources on X/Twitter.",
  openGraph: {
    title: "XRP News — Live Feed | AllAboutXRP",
    description: "Real-time XRP news and updates from the community.",
    url: "https://allaboutxrp.com/news",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "News", item: "https://allaboutxrp.com/news" },
  ],
};

export default function NewsPage() {
  return (
    <>
      <SEOSchema schema={breadcrumbSchema} />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          XRP News Feed
        </h1>
        <p className="mt-3 text-text-secondary">
          Real-time updates from the XRP community and official sources on X/Twitter.
        </p>

        <div className="mt-8 rounded-xl border border-surface-border bg-surface-card p-6">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-xrp-accent/10 p-4 mb-4">
              <svg className="h-8 w-8 text-xrp-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-text-primary">X/Twitter Feed</h2>
            <p className="mt-2 max-w-md text-sm text-text-secondary">
              Follow the latest XRP conversations directly on X. We curate the best accounts — 
              check our <a href="/people" className="text-xrp-accent hover:underline">People page</a> for who to follow.
            </p>
            <a
              href="https://x.com/search?q=%23XRP&src=typed_query&f=live"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-xl bg-xrp-accent px-6 py-2.5 font-semibold text-white transition-all hover:bg-xrp-accent-dim"
            >
              View Live #XRP Feed on X
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="https://x.com/Ripple"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-surface-border bg-surface-card p-5 transition-colors hover:bg-surface-elevated"
          >
            <h3 className="font-semibold text-text-primary">@Ripple</h3>
            <p className="mt-1 text-sm text-text-secondary">Official Ripple news and announcements</p>
          </a>
          <a
            href="https://x.com/XRPLF"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-surface-border bg-surface-card p-5 transition-colors hover:bg-surface-elevated"
          >
            <h3 className="font-semibold text-text-primary">@XRPLF</h3>
            <p className="mt-1 text-sm text-text-secondary">XRP Ledger Foundation updates</p>
          </a>
        </div>
      </div>
    </>
  );
}
