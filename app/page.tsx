"use client";

import Desktop from "@/components/desktop/Desktop";
import Mobile from "@/components/mobile/Mobile";

export default function Home() {
  return (
    <>
      <div className="block lg:hidden">
        <Mobile />
      </div>

      <div className="hidden lg:block">
        <Desktop />
      </div>
    </>
  );
}
