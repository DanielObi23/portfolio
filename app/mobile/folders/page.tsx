"use client";

import MobileNavigation from "@/components/mobile/MobileNavigation";
import { folders } from "@/constants/file-explorer";
import { MobileOnly } from "@/hoc/MobileOnly";
import { Mic, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [input, setInput] = useState("");

  const projects = folders.projects
    .filter((project) =>
      project.title.toLowerCase().includes(input.toLowerCase()),
    )
    .reverse();

  return (
    <MobileOnly>
      <MobileNavigation title="Folders" />
      <div className="px-5 py-4 text-white">
        <label className="rounded-md bg-accent flex items-baseline justify-between px-2.5 py-2 text-sm order-2">
          <div className="flex gap-2 border-0">
            <Search className="h-4.5 text-white" />
            <input
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-30 focus:outline-none placeholder-white"
            />
          </div>

          <Mic className="h-4.5 text-white" />
        </label>

        <div className="flex flex-col gap-3 p-2 mt-2">
          {projects.map(({ title, id, briefDescription }) => (
            <Link
              key={id}
              href={`/mobile/folders/${id}`}
              className="bg-tertiary rounded-xl p-4 active:scale-[0.98] transition"
            >
              <div className="flex items-start gap-3">
                <img
                  src="/icons/file-explorer-icons/folder-icon.svg"
                  alt="folder icon"
                  className="size-6 opacity-80 mt-1"
                />

                <div className="flex flex-col">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs opacity-60 line-clamp-2">
                    {briefDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MobileOnly>
  );
}
