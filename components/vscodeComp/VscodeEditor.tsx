import { vscodeTheme } from "@/constants/vscode";
import { X } from "lucide-react";

export default function VscodeEditor() {
  return (
    <>
      <div className="col-span-11 row-span-1 grid grid-cols-12">
        <div
          className={`border-t-[1.5px] border-blue-700  flex justify-center gap-1 p-1 col-span-1 ${vscodeTheme["bg-editor"]}`}
        >
          <img src="/react-icon.png" alt="react icon" className="size-4" />
          page.tsx <X size={16} strokeWidth={3} />
        </div>
      </div>

      <div className={`col-span-11 row-span-3 ${vscodeTheme["bg-editor"]}`}>
        <div>
          app {">"}
          <img src="/react-icon.png" alt="react icon" className="size-4" />
          page.tsx
          {">"} {"box logo"} Home
        </div>
        <div>
          export default function Home()
          {`{
                return <h1>Welcome to my portfolio</h1>
            }`}
        </div>
      </div>
    </>
  );
}
