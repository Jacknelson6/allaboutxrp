export default function LiveChartLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-6">
        <div className="h-10 w-64 bg-white/[0.06]  animate-pulse" />
        <div className="flex gap-4">
          <div className="h-16 w-40 bg-white/[0.06]  animate-pulse" />
          <div className="h-16 w-32 bg-white/[0.06]  animate-pulse" />
          <div className="h-16 w-36 bg-white/[0.06]  animate-pulse" />
        </div>
        <div className="h-[500px] w-full bg-white/[0.06]  animate-pulse" />
        <div className="h-[400px] w-full bg-white/[0.06]  animate-pulse flex items-center justify-center">
          <div className="h-48 w-48  bg-white/[0.04] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
