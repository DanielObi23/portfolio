"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileNavigation({ title }: { title: string }) {
  const route = useRouter();
  return (
    <nav className="bg-primary w-full h-12 flex items-center relative px-2 text-white">
      <button onClick={route.back} className="z-10">
        <ChevronLeft />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 text-base font-medium truncate max-w-[60%]">
        {title}
      </div>
    </nav>
  );
}
