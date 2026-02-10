"use client";

import WindowsControls from "@/components/desktop/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import useWindowStore from "@/store/windowsStore";

function PDF() {
  const { data } = useWindowStore((state) => state.windows["pdf"]);
  if (!data) return null;

  return (
    <div className="flex flex-col bg-zinc-900 text-zinc-200 h-full w-full overflow-hidden">
      <div className="flex items-center h-10 px-3 bg-zinc-800 border-b border-zinc-700 shrink-0">
        <p className="absolute left-1/2 -translate-x-1/2 text-sm font-medium select-none">
          {data.title}
        </p>

        {/* Right */}
        <div className="ml-auto">
          <WindowsControls window="pdf" />
        </div>
      </div>

      {/* PDF viewer */}
      <div className="h-[85vh] w-[45vw] xl:w-[35vw]">
        <embed
          src={data.url}
          title={data.title}
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}

const PDFWindow = WindowWrapper(PDF, "pdf");

export default PDFWindow;
