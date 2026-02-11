import MobileNavigation from "@/components/mobile/MobileNavigation";
import { MobileOnly } from "@/hoc/MobileOnly";
import { notFound } from "next/navigation";
import { allFolders } from "@/constants/file-explorer";
import type { ProjectFolder, BaseFile } from "@/types/fileExplorerTypes";

export default async function Page({
  params,
}: {
  params: Promise<{ folderId: ProjectFolder["id"]; fileId: BaseFile["id"] }>;
}) {
  const { folderId, fileId } = await params;

  const folder = allFolders.find((folder) => folder.id === folderId);

  if (!folder) {
    notFound();
  }

  const file = folder.files.find((f) => f.id === fileId);

  if (!file) {
    notFound();
  }

  return (
    <MobileOnly>
      <MobileNavigation title={`${folder.title} ${file.title}`} />

      {file.fileType === "img" && (
        <div className="bg-secondary p-4 flex justify-center items-center">
          <div className="w-full max-w-3xl">
            <img
              src={file.imageUrl}
              alt={file.title}
              className="w-full rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
      )}

      {file.fileType === "txt" && (
        <div className="bg-secondary p-4 text-sm leading-relaxed font-mono rounded-b-md ">
          <div className="px-2 py-2 max-w-2xl mx-auto space-y-3 text-[15px] leading-7 text-white/85 font-mono">
            {file.description.text.map((paragraph, i) => (
              <p
                key={i}
                className="pb-4 border-b border-white/5 last:border-none"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {file.description.type !== "no-stack" && (
            <div className="mt-6 space-y-4">
              <p className="text-xs uppercase tracking-wider text-neutral-400">
                Tech Stack
              </p>

              <div className="space-y-3">
                {file.description?.techstack?.map(({ category, items }) => (
                  <div
                    key={category}
                    className="border border-[#2A2A2A] rounded-md bg-[#181818]"
                  >
                    {/* Category header */}
                    <div className="px-3 py-1.5 border-b border-[#2A2A2A] bg-tertiary">
                      <span className="text-sm font-medium text-neutral-200">
                        {category}
                      </span>
                    </div>

                    {/* Items */}
                    <div className="px-3 py-2 text-sm text-neutral-300">
                      <ul className="flex flex-wrap gap-x-3 gap-y-1">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="before:content-['•'] before:mr-2 before:text-neutral-500"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </MobileOnly>
  );
}
