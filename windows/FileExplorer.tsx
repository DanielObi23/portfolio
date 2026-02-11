"use client";

import WindowsControls from "@/components/desktop/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import { allFoldersId } from "@/constants/file-explorer";
import type { ActiveFolder } from "@/types/fileExplorerTypes";
import { useState } from "react";
import FileExplorerSidebar from "@/components/desktop/fileExplorerComp/FileExplorerSidebar";
import FileExplorerMain from "@/components/desktop/fileExplorerComp/FileExplorerMain";

function FileExplorer() {
  const [activeFolder, setActiveFolder] = useState<ActiveFolder["id"]>(
    allFoldersId[0]?.id ?? "",
  );

  return (
    <div className="w-2xl h-137 rounded-md bg-secondary text-white flex flex-col">
      {/* Top bar */}
      <div className="h-12 flex items-center gap-2 px-3 bg-primary">
        <img
          src="/icons/file-explorer-icons/folder-icon.svg"
          alt="folder logo"
          className="size-6 ml-1 self-center"
        />

        <div className="flex-1 text-sm px-3 opacity-80">File Explorer</div>
        <WindowsControls window="file-explorer" />
      </div>

      {/* Body */}
      <div className="flex flex-1">
        <FileExplorerSidebar
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        />

        {/* Main area */}
        <FileExplorerMain activeFolder={activeFolder} />
      </div>
    </div>
  );
}

const FileExplorerWindow = WindowWrapper(FileExplorer, "file-explorer");
export default FileExplorerWindow;
