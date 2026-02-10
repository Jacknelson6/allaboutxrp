interface AuthorBylineProps {
  date: string;
  modified?: string;
}

export default function AuthorByline({ date, modified }: AuthorBylineProps) {
  const showModified = modified && modified !== date;
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-text-secondary">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-xrp-accent/10 text-[10px] font-bold text-xrp-accent">
          AA
        </div>
        <span className="font-medium text-text-primary">AllAboutXRP Editorial</span>
      </div>
      <span className="text-white/15">·</span>
      <time dateTime={date}>Published {new Date(date + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      {showModified ? (
        <>
          <span className="text-white/15">·</span>
          <time dateTime={modified}>Updated {new Date(modified + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
        </>
      ) : null}
    </div>
  );
}
