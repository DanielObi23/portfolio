import { allFolders, FILE_TYPE_ICON } from "@/constants/file-explorer";
import type { ActiveFolder, WindowPayload } from "@/types/fileExplorerTypes";
import { cn } from "@/lib/utils";
import useWindowStore from "@/store/windowsStore";

export default function FileExplorerMain({
  activeFolder,
}: {
  activeFolder: ActiveFolder["id"];
}) {
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
    <main className="flex-1 p-4">
      <div key={activeFolder} className="grid grid-cols-5 gap-4">
        {activeFolderData?.files.map((file, index) => {
          const iconSrc = file.icon ?? FILE_TYPE_ICON[file.fileType];
          const animationDelay = `${index * 70}ms`;

          if (file.fileType === "url") {
            const src =
              file.title === "github"
                ? "/icons/file-explorer-icons/github-icon.svg"
                : iconSrc;
            return (
              <a
                key={`${file.id}-${index}`}
                href={file.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay }}
                className="animate-fade-in"
              >
                <div className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-[#2A2A2A] cursor-pointer">
                  <img
                    src={src}
                    alt="file icon"
                    className={cn(
                      file.title === "github"
                        ? "bg-white rounded-full p-1"
                        : "",
                      "size-10",
                    )}
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
                key={`${file.id}-${index}`}
                className="animate-fade-in flex flex-col items-center gap-2 p-2 rounded-md hover:bg-[#2A2A2A] cursor-pointer"
                style={{ animationDelay }}
                onClick={() =>
                  toggleDisplay({
                    windowKey: "screenshot",
                    data: {
                      title: activeFolderData.title + " " + file.title,
                      imageUrl: file.imageUrl,
                    },
                  })
                }
              >
                <img src={iconSrc} alt="file icon" className="size-10" />
                <span className="text-xs text-center opacity-80">
                  {file.title}
                </span>
              </button>
            );
          }

          if (file.fileType === "pdf") {
            return (
              <button
                key={`${file.id}-${index}`}
                className="animate-fade-in flex flex-col items-center gap-2 p-2 rounded-md hover:bg-[#2A2A2A] cursor-pointer"
                style={{ animationDelay }}
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
                <img src={iconSrc} alt="file icon" className="size-10" />
                <span className="text-xs text-center opacity-80">
                  {file.title}
                </span>
              </button>
            );
          }

          if (file.fileType === "txt") {
            return (
              <button
                key={`${file.id}-${index}`}
                className="animate-fade-in flex flex-col items-center gap-2 p-2 rounded-md hover:bg-[#2A2A2A] cursor-pointer"
                style={{ animationDelay }}
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
                <img src={iconSrc} alt="file icon" className="size-10" />
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
  );
}
