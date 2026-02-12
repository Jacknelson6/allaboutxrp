export default function LiveLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-6">
        <div className="h-10 w-48 bg-white/[0.06] rounded-lg animate-pulse" />
        <div className="h-[600px] w-full bg-white/[0.06] rounded-2xl animate-pulse flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-white/[0.04] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
