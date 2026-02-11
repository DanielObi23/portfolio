import { Folder, Star } from "lucide-react";
import { folders } from "@/constants/file-explorer";
import type { ActiveFolder } from "@/types/fileExplorerTypes";
import { SetStateAction, Dispatch } from "react";
import { cn } from "@/lib/utils";

export default function FileExplorerSidebar({
  activeFolder,
  setActiveFolder,
}: {
  activeFolder: ActiveFolder["id"];
  setActiveFolder: Dispatch<SetStateAction<ActiveFolder["id"]>>;
}) {
  return (
    <aside className="w-40 bg-primary p-3 text-sm space-y-4">
      {/* Favourites */}
      <div>
        <p className="px-2 mb-1 text-xs uppercase tracking-wide opacity-50">
          Favourites
        </p>

        <ul className="space-y-0.5 max-h-30 scrollbar">
          {folders.favourites.map(({ id, title }, index) => (
            <li
              key={`${id}-${index}`}
              className={cn(
                activeFolder === id ? "bg-accent" : "",
                "flex items-center gap-2 px-2 py-1.5 rounded hover:bg-secondary cursor-pointer",
              )}
              onClick={() => setActiveFolder(id)}
            >
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <span className="truncate">{title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div>
        <p className="px-2 mb-1 text-xs uppercase tracking-wide opacity-50">
          Projects
        </p>

        <ul className="space-y-0.5 max-h-60 scrollbar">
          {[...folders.projects].reverse().map(({ id, title }, index) => (
            <li
              key={`${id}-${index}`}
              onClick={() => setActiveFolder(id)}
              className={cn(
                activeFolder === id ? "bg-[#2A2A2A]" : "",
                "flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#383838] cursor-pointer",
              )}
            >
              <Folder className="size-4 opacity-70" />
              <span className="truncate">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
