"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface NewsletterSignupProps {
  variant?: "compact" | "full";
}

export default function NewsletterSignup({ variant = "full" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      trackEvent("newsletter_signup_completed", { placement: variant });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-xl border border-success/25 bg-success/[0.045] ${variant === "compact" ? "p-4" : "p-6 md:p-8"}`} role="status" aria-live="polite">
        <div className="flex flex-col items-center text-center gap-2">
          <CheckCircle className="h-8 w-8 text-success" />
          <p className="text-[15px] font-bold text-text-primary">You&apos;re in! Check your inbox.</p>
          <p className="text-[13px] text-text-secondary">Welcome to the AllAboutXRP newsletter.</p>
        </div>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <div className={`rounded-xl border border-surface-border bg-surface-card ${isCompact ? "p-4" : "p-6 md:p-8"}`}>
      <div className={`flex items-center gap-2 ${isCompact ? "mb-2" : "mb-3"}`}>
        <div className={`${isCompact ? "h-8 w-8" : "h-10 w-10"} flex items-center justify-center rounded-lg bg-xrp-accent/10`}>
          <Mail className={`${isCompact ? "h-4 w-4" : "h-5 w-5"} text-xrp-accent`} aria-hidden="true" />
        </div>
        <h3 className={`${isCompact ? "text-[15px]" : "text-[17px]"} font-extrabold text-text-primary`}>
          {isCompact ? "Stay in the loop" : "Get XRP insights delivered weekly"}
        </h3>
      </div>
      <p className={`${isCompact ? "text-[12px] mb-3" : "text-[14px] mb-4"} text-text-secondary leading-relaxed`}>
        Free weekly newsletter. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className={isCompact ? "space-y-2" : "flex flex-col gap-2 sm:flex-row"}>
        <div className={isCompact ? "w-full" : "flex-1"}>
          <label htmlFor={`newsletter-email-${variant}`} className="sr-only">Email address</label>
          <input
            id={`newsletter-email-${variant}`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? `newsletter-error-${variant}` : undefined}
            className="min-h-11 w-full rounded-lg border border-surface-border bg-surface-primary px-4 text-base text-text-primary placeholder:text-text-secondary focus:border-xrp-accent/60 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`btn-primary ${isCompact ? "w-full" : "sm:w-auto"} px-5 disabled:cursor-not-allowed disabled:opacity-60`}
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      {status === "error" && (
        <p id={`newsletter-error-${variant}`} className="mt-2 text-sm text-danger" role="alert">{errorMsg}</p>
      )}
    </div>
  );
}
