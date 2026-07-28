"use client";

import { useState } from "react";
import { MailCheck, X } from "lucide-react";
import { useAuth } from "@/lib/supabase/auth-context";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectAfterAuth?: string;
}

export default function AuthModal({ isOpen, onClose, redirectAfterAuth }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const { signInWithMagicLink } = useAuth();

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email");
      return;
    }

    setSending(true);
    setError("");

    // Store redirect target
    if (redirectAfterAuth) {
      sessionStorage.setItem("auth_redirect", redirectAfterAuth);
    }

    const { error: authError } = await signInWithMagicLink(email);
    setSending(false);

    if (authError) {
      setError(authError);
    } else {
      setSent(true);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl border border-surface-border bg-surface-card p-7 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-white/[0.04] hover:text-text-primary"
          aria-label="Close sign-in dialog"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {sent ? (
          <div className="text-center py-4">
            <MailCheck className="mx-auto mb-4 h-9 w-9 text-success" aria-hidden="true" />
            <h2 id="auth-modal-title" className="mb-2 text-2xl text-text-primary">Check your email</h2>
            <p className="text-sm leading-6 text-text-secondary" role="status" aria-live="polite">
              We sent a magic link to <span className="text-text-primary">{email}</span>.
              Click it to sign in.
            </p>
          </div>
        ) : (
          <>
            <h2 id="auth-modal-title" className="mb-2 text-2xl text-text-primary">Sign in to AllAboutXRP</h2>
            <p className="mb-6 text-sm leading-6 text-text-secondary">
              Enter your email and we&apos;ll send you a magic link.
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="auth-email" className="mb-2 block text-sm font-semibold text-text-primary">Email address</label>
              <input
                id="auth-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="you@example.com"
                autoFocus
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "auth-email-error" : undefined}
                className="mb-3 min-h-11 w-full rounded-lg border border-surface-border bg-surface-primary px-4 text-base text-text-primary placeholder:text-text-secondary focus:border-xrp-accent/60 focus:outline-none"
              />
              {error && <p id="auth-email-error" className="mb-3 text-sm text-danger" role="alert">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full px-5 disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Magic Link"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
