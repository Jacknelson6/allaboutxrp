export default function HoldersLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-6">
        <div className="h-10 w-48 bg-white/[0.06] rounded-lg animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-white/[0.06] rounded-2xl animate-pulse" />
          <div className="h-64 bg-white/[0.06] rounded-2xl animate-pulse" />
        </div>
        <div className="h-96 bg-white/[0.06] rounded-2xl animate-pulse" />
      </div>
    </div>
  );
}
