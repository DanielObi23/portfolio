"use client";

import WindowsControls from "@/components/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import { Folder, Star } from "lucide-react";
import { folders, allFolders, allFoldersId } from "@/constants/file-explorer";
import type { ActiveFolder, WindowPayload } from "@/types/fileExplorerTypes";
import { useState } from "react";
import { cn } from "@/lib/utils";
import useWindowStore from "@/store/windowsStore";

function FileExplorer() {
  const [activeFolder, setActiveFolder] = useState<ActiveFolder["id"]>(
    allFoldersId[0].id,
  );

  const activeFolderData = allFolders.find(
    (folder) => folder.id === activeFolder,
  );

  const openWindow = useWindowStore((state) => state.openWindow);
  const windows = useWindowStore((state) => state.windows);

  function toggleDisplay(payload: WindowPayload) {
    const { windowKey, data } = payload;
    const window = windows[windowKey];
    if (!window) return;
    openWindow(windowKey, data);
  }

  return (
    <div className="w-[900px] h-[550px] rounded-md bg-[#141414] text-white flex flex-col">
      {/* Top bar */}
      <div className="h-12 flex items-center gap-2 px-3 bg-[#1C1C1C]">
        <img
          src="/icons/folder-icon.svg"
          alt="folder logo"
          className="size-6 ml-1 self-center"
        />

        <div className="flex-1 text-sm px-3 opacity-80">File Explorer</div>
        <WindowsControls window="file-explorer" />
      </div>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-52 bg-[#1A1A1A] p-3 text-sm space-y-4">
          {/* Favourites */}
          <div>
            <p className="px-2 mb-1 text-xs uppercase tracking-wide opacity-50">
              Favourites
            </p>

            <ul className="space-y-0.5">
              {[...folders.favourites].map(({ id, title }) => (
                <li
                  key={id}
                  className={cn(
                    activeFolder === id ? "bg-[#2A2A2A]" : "",
                    "flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#383838] cursor-pointer",
                  )}
                  onClick={() => setActiveFolder(id)}
                >
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <p className="px-2 mb-1 text-xs uppercase tracking-wide opacity-50">
              Projects
            </p>

            <ul className="space-y-0.5">
              {[...folders.projects].map(({ id, title }) => (
                <li
                  key={id}
                  onClick={() => setActiveFolder(id)}
                  className={cn(
                    activeFolder === id ? "bg-[#2A2A2A]" : "",
                    "flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#383838] cursor-pointer",
                  )}
                >
                  <Folder className="size-4 opacity-70" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main area */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-5 gap-4">
            {activeFolderData?.files.map((file) => {
              if (file.fileType === "url") {
                return (
                  <a key={file.id} href={file.link} target="_blank">
                    <div className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-[#2A2A2A] cursor-pointer">
                      <img
                        src={file.icon}
                        alt="file icon"
                        className="size-10"
                      />
                      <span className="text-xs text-center opacity-80">
                        {file.title}
                      </span>
                    </div>
                  </a>
                );
              }

              if (file.fileType === "img") {
                return (
                  <button
                    key={file.id}
                    className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-[#2A2A2A] cursor-pointer"
                  >
                    <img src={file.icon} alt="file icon" className="size-10" />
                    <span className="text-xs text-center opacity-80">
                      {file.title}
                    </span>
                  </button>
                );
              }

              if (file.fileType === "pdf") {
                return (
                  <div
                    key={file.id}
                    className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-[#2A2A2A] cursor-pointer"
                    onClick={() =>
                      toggleDisplay({
                        windowKey: "pdf",
                        data: {
                          title: activeFolderData.title,
                          url: file.url,
                        },
                      })
                    }
                  >
                    <img src={file.icon} alt="file icon" className="size-10" />
                    <span className="text-xs text-center opacity-80">
                      {file.title}
                    </span>
                  </div>
                );
              }

              if (file.fileType === "txt") {
                return (
                  <button
                    key={file.id}
                    className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-[#2A2A2A] cursor-pointer"
                    onClick={() =>
                      toggleDisplay({
                        windowKey: "description",
                        data: {
                          title: activeFolderData.title,
                          description: file.description,
                        },
                      })
                    }
                  >
                    <img src={file.icon} alt="file icon" className="size-10" />
                    <span className="text-xs text-center opacity-80">
                      {file.title}
                    </span>
                  </button>
                );
              }

              return null;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

const FileExplorerWindow = WindowWrapper(FileExplorer, "file-explorer");
export default FileExplorerWindow;
