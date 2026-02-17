"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { useAuth } from "@/lib/supabase/auth-context";
import AuthModal from "@/components/auth/AuthModal";

interface DigestPaywallProps {
  /** Full HTML or text content of the digest */
  contentHtml: string;
  /** The slug for redirect after auth */
  slug: string;
}

function getPreviewText(html: string, wordLimit = 200): string {
  // Strip HTML tags to get plain text
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text.split(" ");
  if (words.length <= wordLimit) return html; // Short enough, show all
  return words.slice(0, wordLimit).join(" ");
}

export default function DigestPaywall({ contentHtml, slug }: DigestPaywallProps) {
  const { user, loading } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const previewText = getPreviewText(contentHtml);

  async function handleCheckout() {
    setCheckoutLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnUrl: `${window.location.origin}/digest/${slug}` }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Failed to start checkout");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setCheckoutLoading(false);
    }
  }

  return (
    <div className="relative">
      {/* Preview content */}
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 leading-relaxed">{previewText}...</p>
      </div>

      {/* Gradient blur overlay */}
      <div className="relative -mt-24">
        <div className="h-32 bg-gradient-to-b from-transparent via-black/70 to-black" />
      </div>

      {/* CTA Card */}
      <div className="relative -mt-8 rounded-2xl border border-[#2F3336] bg-[#16181C] p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 mb-4">
          <Lock className="h-5 w-5 text-[#0085FF]" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Get XRP Pro</h3>
        <p className="text-gray-400 mb-1">Full weekly intelligence digest with deep analysis</p>
        <p className="text-3xl font-bold text-white mb-1">
          $3<span className="text-base font-normal text-gray-500">/mo</span>
        </p>
        <p className="text-gray-600 text-xs mb-6">Cancel anytime</p>

        {loading ? (
          <div className="w-8 h-8 border-2 border-[#0085FF] border-t-transparent rounded-full animate-spin mx-auto" />
        ) : user ? (
          /* Logged in but no subscription */
          <div>
            <button
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="w-full max-w-xs rounded-xl bg-[#0085FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors disabled:opacity-50"
            >
              {checkoutLoading ? "Loading..." : "Subscribe Now"}
            </button>
            <p className="text-gray-600 text-xs mt-3">
              Signed in as {user.email}
            </p>
          </div>
        ) : (
          /* Not logged in */
          <div>
            <button
              onClick={() => setShowAuth(true)}
              className="w-full max-w-xs rounded-xl bg-[#0085FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors"
            >
              Sign In to Subscribe
            </button>
            <p className="text-gray-600 text-xs mt-3">
              Sign in with your email, then subscribe
            </p>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        redirectAfterAuth={`/digest/${slug}`}
      />
    </div>
  );
}
