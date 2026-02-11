import MobileNavigation from "@/components/mobile/MobileNavigation";
import { MobileOnly } from "@/hoc/MobileOnly";
import { cn } from "@/lib/utils";
import { allFolders, FILE_TYPE_ICON } from "@/constants/file-explorer";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ folderId: string }>;
}) {
  const { folderId } = await params;
  const activeFolderData = allFolders.find((folder) => folder.id === folderId);

  if (!activeFolderData) {
    notFound();
  }

  return (
    <MobileOnly>
      <MobileNavigation title={activeFolderData.title} />
      <div className="text-white grid grid-cols-9 gap-3 py-7">
        {activeFolderData.files.map((file, index) => {
          const iconSrc = file.icon ?? FILE_TYPE_ICON[file.fileType];

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
                className="animate-fade-in col-span-3"
              >
                <div className="flex flex-col items-center gap-2 p-2 rounded-md">
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

          if (file.fileType === "img" || file.fileType === "txt") {
            return (
              <Link
                key={`${file.id}-${index}`}
                href={`/mobile/folders/${folderId}/${file.id}`}
                className="col-span-3 animate-fade-in flex flex-col items-center gap-2 p-2 rounded-md"
              >
                <img src={iconSrc} alt="file icon" className="size-10" />
                <span className="text-xs text-center opacity-80">
                  {file.title}
                </span>
              </Link>
            );
          }

          if (file.fileType === "pdf") {
            return (
              <a
                key={`${file.id}-${index}`}
                href={file.url}
                target="_blank"
                rel="noopener"
                className="col-span-3 animate-fade-in flex flex-col items-center gap-2 p-2 rounded-md"
              >
                <img src={iconSrc} alt="file icon" className="size-10" />
                <span className="text-xs text-center opacity-80">
                  {file.title}
                </span>
              </a>
            );
          }

          return null;
        })}
      </div>
    </MobileOnly>
  );
}
