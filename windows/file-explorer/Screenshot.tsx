"use client";

import WindowsControls from "@/components/desktop/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import useWindowStore from "@/store/windowsStore";

function Screenshot() {
  const { data } = useWindowStore((state) => state.windows["screenshot"]);
  if (!data) return null;

  return (
    <div className="flex flex-col w-[820px] h-[520px] bg-zinc-900 text-zinc-200 overflow-hidden">
      <div className="relative flex items-center h-10 px-3 bg-zinc-800 border-b border-zinc-700 shrink-0">
        <p className="absolute left-1/2 -translate-x-1/2 text-sm font-medium select-none truncate max-w-[70%]">
          {data.title}
        </p>

        <div className="ml-auto">
          <WindowsControls window="screenshot" />
        </div>
      </div>

      <div className="flex-1 bg-black overflow-auto flex items-center justify-center p-4">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="max-w-full max-h-full object-contain select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}

const ScreenshotWindow = WindowWrapper(Screenshot, "screenshot");

export default ScreenshotWindow;
