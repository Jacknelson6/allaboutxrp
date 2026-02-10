"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased flex items-center justify-center">
        <div className="text-center px-5">
          <p className="font-mono text-sm uppercase tracking-widest text-red-400">
            Error
          </p>
          <h1 className="mt-3 text-3xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-gray-400">
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
