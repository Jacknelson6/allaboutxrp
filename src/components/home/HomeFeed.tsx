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
      <div className="mx-auto max-w-[1200px] flex justify-center px-4">
        {/* Center feed */}
        <div className="flex-1 min-w-0 max-w-[650px]">
          <XFeed />
        </div>

        {/* Right sidebar - desktop only, pushed right */}
        <div className="hidden lg:block w-[300px] shrink-0 ml-auto pl-8">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
