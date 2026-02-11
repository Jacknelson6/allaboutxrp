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
      <div className="relative mx-auto max-w-[1200px] px-4">
        {/* Center feed */}
        <div className="mx-auto max-w-[650px]">
          <XFeed />
        </div>

        {/* Right sidebar - desktop only, pinned to right */}
        <div className="hidden lg:block w-[300px] absolute right-4 top-0">
          <div className="sticky top-20">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
