import MobileNavigation from "@/components/mobile/MobileNavigation";
import { MobileOnly } from "@/hoc/MobileOnly";
import { allFolders } from "@/constants/file-explorer";

export default async function page({
  params,
}: {
  params: Promise<{ txt: string }>;
}) {
  const { txt } = await params;
  console.log(txt);
  const folder = allFolders.find((folder) => folder.id === "gazetteer");
  const txtFile = folder?.files.find((file) => file.fileType === "txt"); // issue here is if there's multiple files with fileType txt, fix this

  return (
    <MobileOnly>
      <MobileNavigation title={`${folder?.title} ${txtFile?.title}`} />
      <div className="flex-1 bg-secondary p-4 text-sm leading-relaxed font-mono scrollbar rounded-b-md">
        <p className="whitespace-pre-line text-white">
          {txtFile?.description.text}
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            Tech Stack
          </p>

          <div className="space-y-3">
            {txtFile?.description.techstack.map(({ category, items }) => (
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
      </div>
    </MobileOnly>
  );
}
