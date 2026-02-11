"use client";

import XFeed from "./XFeed";
import RightSidebar from "./RightSidebar";

export default function HomeFeed() {
  return (
    <div className="min-h-screen bg-black">
      {/* Mobile price widget */}
      <div className="lg:hidden px-4 py-2 border-b border-[#2F3336]">
        <RightSidebar mobilePrice />
      </div>

      {/* Two-column layout */}
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 px-4">
        {/* Center feed */}
        <div className="min-w-0 max-w-[650px] mx-auto lg:mx-0 lg:justify-self-center">
          <XFeed />
        </div>

        {/* Right sidebar - desktop only */}
        <div className="hidden lg:block">
          <div className="sticky top-20">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
