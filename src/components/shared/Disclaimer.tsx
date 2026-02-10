import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="rounded-lg border border-surface-border p-4" role="alert">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
        <p className="text-sm text-text-secondary leading-relaxed">
          <strong className="text-warning font-semibold">Disclaimer:</strong> This website is for informational purposes only and does not constitute financial advice. 
          Always do your own research before making investment decisions.
        </p>
      </div>
    </div>
  );
}
