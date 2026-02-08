"use client";

import WindowsControls from "@/components/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import { Download } from "lucide-react";
import useWindowStore from "@/store/windowsStore";

function PDF() {
  const windows = useWindowStore((state) => state.windows);
  const { data } = windows["pdf"];

  return (
    <div className="flex flex-col bg-zinc-900 text-zinc-200 h-full w-full overflow-hidden">
      <div className="flex items-center h-10 px-3 bg-zinc-800 border-b border-zinc-700 shrink-0">
        <p className="absolute left-1/2 -translate-x-1/2 text-sm font-medium select-none">
          {data?.title}
        </p>

        {/* Right */}
        <div className="ml-auto">
          <WindowsControls window="pdf" />
        </div>
      </div>

      {/* PDF viewer */}
      <div className="h-[85vh] w-[35vw]">
        <embed
          src={data?.url}
          title={data?.title || "PDF"}
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}

const ResumeWindow = WindowWrapper(PDF, "pdf");

export default ResumeWindow;
