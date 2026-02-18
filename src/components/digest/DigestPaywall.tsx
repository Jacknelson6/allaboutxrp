"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import { useAuth } from "@/lib/supabase/auth-context";
import AuthModal from "@/components/auth/AuthModal";

interface DigestPaywallProps {
  contentHtml: string;
  slug: string;
}

function getPreviewText(html: string, wordLimit = 200): string {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ");
}

export default function DigestPaywall({ contentHtml, slug }: DigestPaywallProps) {
  const { loading } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  const previewText = getPreviewText(contentHtml);

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

        <h3 className="text-2xl font-bold text-white mb-2">
          Upgrade to read this digest
        </h3>
        <p className="text-gray-400 mb-6">
          Full weekly intelligence digest with deep analysis.
        </p>

        {loading ? (
          <div className="w-8 h-8 border-2 border-[#0085FF] border-t-transparent rounded-full animate-spin mx-auto" />
        ) : (
          <div>
            <Link
              href="/pricing"
              className="inline-block w-full max-w-xs rounded-xl bg-[#0085FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors"
            >
              Upgrade
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Already have an account?{" "}
              <button
                onClick={() => setShowAuth(true)}
                className="text-[#0085FF] hover:underline"
              >
                Sign in
              </button>
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
