"use client";

import { useState } from "react";
import { X } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-[#2F3336] bg-[#16181C] p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">✉️</div>
            <h2 className="text-xl font-bold text-white mb-2">Check your email</h2>
            <p className="text-gray-400 text-sm">
              We sent a magic link to <span className="text-white">{email}</span>.
              Click it to sign in.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-white mb-2">Sign in to AllAboutXRP</h2>
            <p className="text-gray-400 text-sm mb-6">
              Enter your email and we&apos;ll send you a magic link.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="your@email.com"
                autoFocus
                className="w-full rounded-xl border border-white/[0.08] bg-black px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#0085FF]/40 transition-colors mb-3"
              />
              {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-[#0085FF] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0085FF]/90 transition-colors disabled:opacity-50"
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
