import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="rounded-xl border border-warning/15 bg-warning/[0.03] p-4 backdrop-blur-sm" role="alert">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning/70" />
        <p className="text-[13px] text-text-secondary/70 leading-relaxed">
          <strong className="text-warning/80 font-semibold">Disclaimer:</strong> This website is for informational purposes only and does not constitute financial advice. 
          Cryptocurrency investments carry significant risk. Always do your own research before making investment decisions.
        </p>
      </div>
    </div>
  );
}
