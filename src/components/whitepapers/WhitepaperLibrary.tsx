"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy, Link as LinkIcon, Search, X } from "lucide-react";
import { Button } from "@/components/ui";
import { COLLECTIONS, DOCUMENT_TYPES, type Whitepaper } from "@/data/whitepapers";
import { DEFAULT_LIBRARY_FILTERS, filterWhitepapers, formatPaperDate, paperCitation, paperPermalink, type LibraryFilters } from "@/lib/whitepapers";

const controlClass = "min-h-12 w-full border border-hairline bg-paper px-3 font-sans text-base text-ink focus:border-cobalt";

export default function WhitepaperLibrary({ papers }: { papers: Whitepaper[] }) {
  const [filters, setFilters] = useState<LibraryFilters>(DEFAULT_LIBRARY_FILTERS);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);
  const filtered = filterWhitepapers(papers, filters);
  const years = [...new Set(papers.flatMap((paper) => paper.date ? [paper.date.slice(0, 4)] : []))].sort().reverse();
  const hasFilters = filters.query !== "" || filters.collection !== "all" || filters.type !== "all" || filters.year !== "all";

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(null), 2400);
    return () => clearTimeout(timer);
  }, [copied]);

  // A bookmarked record stays reachable even after filtering the library.
  useEffect(() => {
    const revealRecord = () => {
      const id = window.location.hash.slice(1);
      if (!papers.some((paper) => `paper-${paper.id}` === id)) return;
      setFilters(DEFAULT_LIBRARY_FILTERS);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
    };
    window.addEventListener("hashchange", revealRecord);
    return () => window.removeEventListener("hashchange", revealRecord);
  }, [papers]);

  function update(key: keyof LibraryFilters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  async function copy(paper: Whitepaper, kind: "citation" | "link") {
    const key = `${paper.id}-${kind}`;
    try {
      await navigator.clipboard.writeText(kind === "citation" ? paperCitation(paper) : paperPermalink(paper));
      setCopied(key);
      setCopyError(null);
    } catch {
      setCopyError(paper.id);
    }
  }

  return (
    <section id="library" aria-labelledby="library-heading" className="site-container scroll-mt-24 py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
        <div>
          <h2 id="library-heading" className="font-display text-3xl font-normal text-ink sm:text-4xl">The document library</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">Original sources, with the context to read them well.</p>
        </div>
        <a href="#reading-guide" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cobalt hover:underline">How to read this collection <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
      </div>

      <div className="grid gap-8 pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <aside aria-label="Library filters" className="min-w-0">
          <fieldset disabled={!ready} className="min-w-0 lg:sticky lg:top-24">
            <legend className="mb-3 font-sans text-sm font-semibold text-ink">Browse collections</legend>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {(["all", ...COLLECTIONS] as const).map((collection) => (
                <button
                  type="button" key={collection} aria-pressed={filters.collection === collection}
                  onClick={() => update("collection", collection)}
                  className={`flex min-h-11 items-center justify-between gap-4 border px-3 py-2 text-left text-sm transition-colors duration-150 ${filters.collection === collection ? "border-ink bg-ink text-paper" : "border-hairline bg-paper text-secondary hover:border-cobalt hover:text-cobalt lg:border-transparent"}`}
                >
                  <span>{collection === "all" ? "All documents" : collection === "XRPL" ? "XRP Ledger" : collection === "Ripple" ? "Ripple & RLUSD" : collection}</span>
                  <span className="tabular-nums">{collection === "all" ? papers.length : papers.filter((paper) => paper.collection === collection).length}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-hairline pt-6 lg:grid-cols-1">
              <label className="block text-sm font-semibold text-ink">Document type
                <select value={filters.type} onChange={(e) => update("type", e.target.value)} className={`${controlClass} mt-2`}>
                  <option value="all">All types</option>
                  {Object.entries(DOCUMENT_TYPES).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              <label className="block text-sm font-semibold text-ink">Year
                <select value={filters.year} onChange={(e) => update("year", e.target.value)} className={`${controlClass} mt-2`}>
                  <option value="all">All years</option>
                  {years.map((year) => <option key={year}>{year}</option>)}
                  <option value="undated">Date not stated</option>
                </select>
              </label>
            </div>
            <p className="mt-3 text-xs leading-5 text-secondary">Year follows the publication, revision, creation, or listing date shown on each record.</p>
            {hasFilters && <Button type="button" variant="quiet" className="mt-3" onClick={() => setFilters(DEFAULT_LIBRARY_FILTERS)}><X className="h-4 w-4" aria-hidden="true" />Clear all filters</Button>}
            <div className="mt-8 hidden border-t border-hairline pt-5 lg:block">
              <p className="text-sm font-semibold text-ink">A library, not an endorsement.</p>
              <p className="mt-2 text-sm leading-6 text-secondary">Publisher claims, research proposals, and live network features are different things. Read the context note with each source.</p>
            </div>
          </fieldset>
        </aside>

        <div className="min-w-0">
          <form role="search" aria-label="Search whitepapers" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="paper-search" className="block text-sm font-semibold text-ink">Search the library</label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-secondary" aria-hidden="true" />
              <input id="paper-search" type="search" value={filters.query} disabled={!ready} onChange={(e) => update("query", e.target.value)} placeholder="Title, author, project, or topic" autoComplete="off" className={`${controlClass} h-14 pl-12 pr-4 placeholder:text-secondary`} />
            </div>
          </form>
          <noscript><p className="mt-3 text-sm text-secondary">All documents are listed below. Enable JavaScript to use search and filters, or use your browser’s Find command.</p></noscript>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline py-4">
            <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-secondary"><strong className="font-semibold text-ink">{filtered.length}</strong> of {papers.length} documents{hasFilters ? " match your filters" : " in the collection"}</p>
            <label className="flex min-h-11 items-center gap-2 text-sm text-secondary">Sort by
              <select aria-label="Sort documents" disabled={!ready} value={filters.sort} onChange={(e) => update("sort", e.target.value)} className="min-h-11 max-w-44 border border-hairline bg-paper px-2 text-sm text-ink">
                <option value="recommended">Reading order</option><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="title">Title A–Z</option>
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="border-b border-hairline bg-paper-muted px-6 py-12">
              <h3 className="font-display text-2xl text-ink">No matching documents</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-secondary">Try a broader topic such as consensus, tokenization, or payments, or clear a collection, type, or year filter.</p>
              <Button type="button" variant="secondary" className="mt-5" onClick={() => setFilters(DEFAULT_LIBRARY_FILTERS)}>Show all documents</Button>
            </div>
          ) : (
            <ol aria-label="Whitepapers and research documents" className="divide-y divide-hairline border-b border-hairline">
              {filtered.map((paper) => (
                <li key={paper.id}>
                  <article id={`paper-${paper.id}`} aria-labelledby={`title-${paper.id}`} className="scroll-mt-24 py-7 target:bg-paper-muted sm:py-8">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs leading-5">
                      <span className="font-semibold text-cobalt">{paper.collection === "XRPL" ? "XRP Ledger" : paper.collection}</span>
                      <span className="text-secondary">{DOCUMENT_TYPES[paper.type]}</span>
                      <span className="text-secondary">{paper.topic}</span>
                      {paper.sourceStatus === "moved" && <span className="border border-hairline px-2 py-0.5 font-semibold text-ink">Source moved</span>}
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,1fr)_140px] sm:gap-6">
                      <div className="min-w-0">
                        <h3 id={`title-${paper.id}`} className="font-display text-xl font-normal leading-snug text-ink sm:text-2xl"><a href={`#paper-${paper.id}`} className="hover:text-cobalt">{paper.displayTitle}</a></h3>
                        <p className="mt-2 text-sm leading-6 text-secondary">{paper.authors.length ? paper.authors.join(" · ") : paper.publisher}</p>
                      </div>
                      <p className="text-sm text-secondary sm:text-right">{paper.date && <span className="mr-1 sm:mr-0 sm:block">{paper.dateBasis}</span>}<span className="font-medium text-ink">{paper.date ? <time dateTime={paper.date}>{formatPaperDate(paper.date)}</time> : "Date not stated"}</span></p>
                    </div>
                    <p className="mt-4 max-w-[72ch] text-sm leading-7 text-secondary">{paper.summary}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1">
                      {paper.documentUrl ? (
                        <a href={paper.documentUrl} target="_blank" rel="noopener noreferrer" data-source-link="true" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-cobalt hover:underline" aria-label={`Read ${paper.format === "PDF" ? "PDF" : "source"}: ${paper.displayTitle} (opens in a new tab)`}>Read {paper.format === "PDF" ? "PDF" : "source"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
                      ) : <span className="inline-flex min-h-11 items-center text-sm font-semibold text-secondary">Original download unavailable</span>}
                      <span className="break-all text-xs text-secondary">{paper.documentUrl ? new URL(paper.documentUrl).hostname.replace(/^www\./, "") : "Historical record"}</span>
                    </div>
                    <details className="mt-1 group border-t border-hairline">
                      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 py-2 text-sm font-medium text-secondary hover:text-cobalt [&::-webkit-details-marker]:hidden">Context, version & citation<span aria-hidden="true" className="text-lg group-open:rotate-45 motion-safe:transition-transform">+</span></summary>
                      <div className="bg-paper-muted p-5">
                        <p className="text-sm leading-6 text-ink">{paper.note}</p>
                        <p className="mt-3 text-xs leading-5 text-secondary">{paper.version}{paper.specificationStatus ? ` · Specification status: ${paper.specificationStatus}` : ""}</p>
                        <a href={paper.sourceUrl} target="_blank" rel="noopener noreferrer" data-source-link="true" className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-cobalt hover:underline">{paper.sourceStatus === "moved" ? "View current project publications" : "Publisher or source record"}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
                        <p className="mt-4 text-xs font-semibold text-ink">Citation</p>
                        <p className="mt-2 select-text break-words text-sm leading-6 text-secondary">{paperCitation(paper)}</p>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                          <Button type="button" variant="quiet" size="sm" disabled={!ready} onClick={() => copy(paper, "citation")}>{copied === `${paper.id}-citation` ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}{copied === `${paper.id}-citation` ? "Copied citation" : "Copy citation"}</Button>
                          <Button type="button" variant="quiet" size="sm" disabled={!ready} onClick={() => copy(paper, "link")}><LinkIcon className="h-4 w-4" aria-hidden="true" />{copied === `${paper.id}-link` ? "Copied link" : "Copy record link"}</Button>
                        </div>
                        {copyError === paper.id && <p role="status" className="mt-2 text-sm text-secondary">Copy isn’t available in this browser. Select the citation above, or open the record heading and copy its address.</p>}
                      </div>
                    </details>
                  </article>
                </li>
              ))}
            </ol>
          )}
          <span className="sr-only" role="status" aria-live="polite">{copied ? copied.endsWith("-citation") ? "Citation copied to clipboard." : "Record link copied to clipboard." : ""}</span>
        </div>
      </div>
    </section>
  );
}
