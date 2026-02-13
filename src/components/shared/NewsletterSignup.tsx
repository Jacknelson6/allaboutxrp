"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

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
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-2xl border border-[#2F3336] bg-[#16181C] ${variant === "compact" ? "p-4" : "p-6 md:p-8"}`}>
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
    <div className={`rounded-2xl border border-[#2F3336] bg-[#16181C] ${isCompact ? "p-4" : "p-6 md:p-8"}`}>
      <div className={`flex items-center gap-2 ${isCompact ? "mb-2" : "mb-3"}`}>
        <div className={`${isCompact ? "h-8 w-8" : "h-10 w-10"} rounded-xl bg-[#0085FF]/10 flex items-center justify-center`}>
          <Mail className={`${isCompact ? "h-4 w-4" : "h-5 w-5"} text-[#0085FF]`} />
        </div>
        <h3 className={`${isCompact ? "text-[15px]" : "text-[17px]"} font-extrabold text-text-primary`}>
          {isCompact ? "Stay in the loop" : "Get XRP insights delivered weekly"}
        </h3>
      </div>
      <p className={`${isCompact ? "text-[12px] mb-3" : "text-[14px] mb-4"} text-text-secondary leading-relaxed`}>
        Free weekly newsletter. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className={isCompact ? "space-y-2" : "flex gap-2"}>
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`${isCompact ? "w-full" : "flex-1"} rounded-xl border border-[#2F3336] bg-[#0E1015] px-4 py-2.5 text-[14px] text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-[#0085FF]/50 transition-colors`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${isCompact ? "w-full" : ""} rounded-xl bg-[#0085FF] text-white px-5 py-2.5 text-[14px] font-bold hover:bg-[#0085FF]/90 transition-all hover:shadow-[0_0_20px_rgba(0,133,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-[12px] text-danger">{errorMsg}</p>
      )}
    </div>
  );
}
