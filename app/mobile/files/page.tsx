import MobileNavigation from "@/components/mobile/MobileNavigation";
import { folders } from "@/constants/file-explorer";
import { MobileOnly } from "@/hoc/MobileOnly";
import { Mic, Search } from "lucide-react";
import Link from "next/link";

//TODO: brief description, figure out what to put there or remove it, maybe put techstack instead or description but truncate
export default function page() {
  return (
    <MobileOnly>
      <MobileNavigation title="Files" />
      <div className="px-5 py-4 text-white">
        <div className="rounded-md bg-accent flex items-baseline justify-between px-2.5 py-2 text-sm order-2">
          <div className="flex gap-2 border-0">
            <Search className="h-4.5 text-white" />
            <input
              placeholder="Search"
              className="w-30 focus:outline-none placeholder-white"
            />
          </div>

          <Mic className="h-4.5 text-white" />
        </div>

        <div className="flex flex-col gap-3 p-2 mt-2">
          {[...folders.projects].reverse().map(({ title, id }) => (
            <Link
              key={id}
              href={`/mobile/files/${id}`}
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
                    brief description
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
