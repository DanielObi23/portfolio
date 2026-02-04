import { sideBarList } from "@/constants/vscode";
import { CircleUserRound, Settings } from "lucide-react";

export default function VscodeSidebar() {
  return (
    <div className="row-span-11 w-15 flex flex-col items-center justify-between gap-2 py-3 px-2 border-r-[1.5px] border-[#1e1e1e]">
      <ul className="space-y-3">
        {sideBarList.map((Icon, i) => (
          <li key={`icon-${i}`}>
            <Icon size={24} />
          </li>
        ))}
      </ul>

      <ul className="space-y-3">
        <li>
          <CircleUserRound />
        </li>
        <li>
          <Settings />
        </li>
      </ul>
    </div>
  );
}
