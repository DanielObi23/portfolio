import { Search } from "lucide-react";
import WindowsControls from "@/components/desktop/WindowsControls";

export default function VscodeNavbar() {
  return (
    <div className="col-span-12 row-span-1 flex justify-between items-center p-2 border-b-[1.5px] bg-window-surface border-[#1e1e1e]">
      <ul className="flex gap-2 items-center text-sm">
        <li>
          <img
            src="/icons/window-icons/vscode-icon.svg"
            alt="vscode icon"
            className="size-6"
          />
        </li>
      </ul>

      <div className="flex gap-2 items-center">
        <div className="rounded-lg w-80 h-7 flex gap-1 items-center justify-center bg-vscode-editor text-sm">
          <Search size={16} />
          <span className="text-white">my techstack</span>
        </div>
      </div>

      <WindowsControls window="vscode" />
    </div>
  );
}
