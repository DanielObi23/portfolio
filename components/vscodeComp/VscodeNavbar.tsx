import { navList } from "@/constants/vscode";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";
import WindowsControls from "@/components/WindowsControls";

export default function VscodeNavbar() {
  return (
    <div className="col-span-12 row-span-1 flex justify-between items-center p-2 border-b-[1.5px] border-[#1e1e1e]">
      <ul className="flex gap-1">
        <li>
          <img
            src="/navbar/vscode-icon.png"
            alt="vscode icon"
            className="size-6"
          />
        </li>

        {navList.map((nav, i) => (
          <li key={i}>{nav}</li>
        ))}
      </ul>

      <div className="flex gap-2">
        <ArrowLeft className="text-white" />
        <ArrowRight className="text-gray-400" />
        <div className="rounded-lg w-80 h-7 flex gap-1 items-center justify-center bg-accent text-sm">
          <Search size={16} />
          techstack
        </div>
      </div>

      <WindowsControls window="vscode" />
    </div>
  );
}
