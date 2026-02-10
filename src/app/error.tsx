"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-[13px] font-medium uppercase tracking-widest text-danger">
        Error
      </p>
      <h1 className="mt-3 text-[28px] font-bold tracking-[-0.04em] text-text-primary">
        Something went wrong
      </h1>
      <p className="mt-2 text-[15px] text-text-secondary">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-lg bg-xrp-accent px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
