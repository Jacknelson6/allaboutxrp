import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Correction Received | AllAboutXRP",
  description: "Confirmation that AllAboutXRP received a correction report.",
  robots: { index: false, follow: true },
};

export default function CorrectionThanksPage() {
  return (
    <main id="main-content" className="min-h-[70vh] bg-surface-primary">
      <article className="reading-container py-20 sm:py-28">
        <p className="editorial-kicker">Submission received</p>
        <h1 className="mt-4 text-4xl text-text-primary sm:text-6xl">Thank you for strengthening the record.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          The editorial team will check the disputed claim against the strongest available primary record. Material changes are added to the public correction log.
        </p>
        <div className="mt-9 flex flex-wrap gap-5">
          <Link href="/corrections" className="btn-primary">View the correction policy</Link>
          <Link href="/" className="text-link">Return to the homepage</Link>
        </div>
      </article>
    </main>
  );
}
