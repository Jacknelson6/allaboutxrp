import Link from "next/link";

interface AuthorBylineProps {
  date: string;
  modified?: string;
}

export default function AuthorByline({ date, modified }: AuthorBylineProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-secondary">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/10 text-xs font-bold text-xrp-accent">
          AA
        </div>
        <div>
          <span className="font-medium text-text-primary">AllAboutXRP Editorial Team</span>
        </div>
      </div>
      <span className="hidden sm:inline text-text-secondary/40">·</span>
      <time dateTime={date}>Published {new Date(date + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      {modified && modified !== date && (
        <>
          <span className="text-text-secondary/40">·</span>
          <time dateTime={modified}>Updated {new Date(modified + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
        </>
      )}
    </div>
  );
}
