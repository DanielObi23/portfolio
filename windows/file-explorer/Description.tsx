import WindowsControls from "@/components/desktop/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import useWindowStore from "@/store/windowsStore";

function Description() {
  const { data } = useWindowStore((state) => state.windows["description"]);
  if (!data) return null;

  return (
    <div className="bg-[#141414] text-white w-150 h-150 rounded-md">
      {/* Header */}
      <div className="h-1/14 flex justify-between px-2 pt-2">
        <div className="flex items-end">
          <img
            src="/icons/notepad-icon.png"
            alt="notepad logo"
            className="size-6 ml-1 mr-3 self-center"
          />
          <div className="bg-[#2A2A2A] flex items-center justify-between gap-2 px-3 py-1.5 rounded-t-md mr-0.5 whitespace-nowrap">
            <span className="text-sm">{data.title}</span>
          </div>
        </div>

        <WindowsControls window="description" />
      </div>

      {/* Editor space */}
      <div className="h-13/14 bg-[#1E1E1E] p-4 text-sm leading-relaxed font-mono scrollbar rounded-b-md">
        <p className="whitespace-pre-line">{data.description.text}</p>
        <div className="mt-6 space-y-4">
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            Tech Stack
          </p>

          <div className="space-y-3">
            {data.description.techstack.map(({ category, items }) => (
              <div
                key={category}
                className="border border-[#2A2A2A] rounded-md bg-[#181818]"
              >
                {/* Category header */}
                <div className="px-3 py-1.5 border-b border-[#2A2A2A] bg-[#1F1F1F]">
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
    </div>
  );
}

const DescriptionWindow = WindowWrapper(Description, "description");

export default DescriptionWindow;
