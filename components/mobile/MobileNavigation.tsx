"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileNavigation({ title }: { title: string }) {
  const route = useRouter();
  return (
    <nav className="sticky top-0 left-0 z-10 bg-primary w-full h-12 flex items-center px-2 text-white">
      <button onClick={route.back} className="z-10">
        <ChevronLeft />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 text-base font-medium truncate max-w-[60%]">
        {title}
      </div>
    </nav>
  );
}
