"use client";

import Link from "next/link";
import MobileNavigation from "@/components/mobile/MobileNavigation";
import { MobileOnly } from "@/hoc/MobileOnly";

export default function Page() {
  const tabs = [
    {
      title: "About me",
      id: "about-me",
      url: "/mobile/notes/about-me",
      preview: "Who I am, what drives me, and what I'm building toward.",
    },
    {
      title: "Education",
      id: "education",
      url: "/mobile/notes/education",
      preview: "My academic background and continuous learning path.",
    },
    {
      title: "Work experience",
      id: "work-experience",
      url: "/mobile/notes/work-experience",
      preview: "Experience, projects, and practical exposure.",
    },
  ];

  return (
    <MobileOnly>
      <div className="h-full bg-secondary text-white">
        <MobileNavigation title="All notes" />

        <div className="flex flex-col gap-3 p-4">
          {tabs.map(({ title, id, url, preview }) => (
            <Link
              key={id}
              href={url}
              className="bg-tertiary rounded-xl p-4 active:scale-[0.98] transition"
            >
              <div className="flex items-start gap-3">
                <img
                  src="/icons/file-explorer-icons/txt-file-icon.svg"
                  alt="text file"
                  className="size-6 opacity-80 mt-1"
                />

                <div className="flex flex-col">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs opacity-60 line-clamp-2">{preview}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MobileOnly>
  );
}
