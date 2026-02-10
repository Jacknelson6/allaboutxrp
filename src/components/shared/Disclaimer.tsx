import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="rounded-xl border border-warning/30 bg-warning/5 p-4" role="alert">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
        <p className="text-sm text-text-secondary">
          <strong className="text-warning">Disclaimer:</strong> This website is for informational purposes only and does not constitute financial advice. 
          Cryptocurrency investments carry significant risk. Always do your own research before making investment decisions.
        </p>
      </div>
    </div>
  );
}
