import { X, ChevronRight } from "lucide-react";

export default function VscodeEditor() {
  return (
    <>
      <div className="col-span-11 row-span-1 grid grid-cols-12">
        <div className="border-t-[1.5px] border-blue-700  flex justify-center items-center gap-1 p-2 col-span-1 bg-vscode-editor ">
          <img src="/react-icon.png" alt="react icon" className="size-5" />
          <span>page.tsx</span> <X size={19} strokeWidth={1.5} />
        </div>
      </div>

      <div className="col-span-11 row-span-3 bg-vscode-editor py-1">
        <div className="flex items-center text-sm gap-0.5 px-2">
          <span>app</span>
          <ChevronRight size={20} strokeWidth={1.5} />

          <img src="/react-icon.png" alt="react icon" className="size-4" />

          <span>page.tsx</span>
          <ChevronRight size={20} strokeWidth={1.5} />
          <span>...</span>
        </div>

        <div className="px-5">
          <div className="flex gap-3">
            <p className="text-gray-400">1</p>
            <p>
              <span className="text-purple-400">export default</span>
              &nbsp;
              <span className="text-blue-400">function</span>&nbsp;
              <span className="text-yellow-200">Home</span>
              <span className="text-yellow-300 font-semibold">( ) {"{"}</span>
            </p>
          </div>

          <div className="flex gap-6">
            <p className="text-gray-400">2</p>
            <p>
              <span className="text-purple-400">return</span>&nbsp;
              <span className="text-gray-400">
                {"<"}
                <span className="text-blue-400">h1</span>
                {">"}
              </span>
              <span>Welcome to my portfolio</span>
              <span className="text-gray-400">
                {"<"}
                <span className="text-blue-400">h1</span>
                {"/>"}
              </span>
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-gray-400">3</p>
            <p className="text-yellow-300 font-semibold">{"}"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
