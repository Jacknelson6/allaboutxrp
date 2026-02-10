interface AuthorBylineProps {
  date: string;
  modified?: string;
}

export default function AuthorByline({ date, modified }: AuthorBylineProps) {
  const showModified = modified && modified !== date;
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-text-secondary/70">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-xrp-accent/15 to-xrp-indigo/10 text-[10px] font-bold text-xrp-accent ring-1 ring-surface-border/30">
          AA
        </div>
        <span className="font-medium text-text-primary/80">AllAboutXRP Editorial</span>
      </div>
      <span className="hidden sm:inline text-text-secondary/25">·</span>
      <time dateTime={date}>Published {new Date(date + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      {showModified ? (
        <>
          <span className="text-text-secondary/25">·</span>
          <time dateTime={modified}>Updated {new Date(modified + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
        </>
      ) : null}
    </div>
  );
}
