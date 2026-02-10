"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#0A0A0B] px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-[#111113] hover:text-text-primary focus-visible:outline-2 focus-visible:outline-xrp-accent"
      aria-label={copied ? "Copied!" : label}
    >
      {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied!" : label}
    </button>
  );
}
