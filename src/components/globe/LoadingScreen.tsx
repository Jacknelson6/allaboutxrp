'use client';

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] bg-[#0D1117]">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-2 border-[#30363d] border-t-[#00A3FF] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#00A3FF] animate-pulse" />
        </div>
      </div>
      <p className="mt-6 text-[#8b949e] font-mono text-sm tracking-wider animate-pulse">
        CONNECTING TO XRPL...
      </p>
    </div>
  );
}
