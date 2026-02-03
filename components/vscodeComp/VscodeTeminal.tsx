import {
  techStack,
  terminalNav,
  terminalNavIcons,
  generateTechStackTable,
  firstname,
  lastname,
} from "@/constants/vscode";
import { SquareTerminal } from "lucide-react";

export default function VscodeTeminal() {
  return (
    <div className="col-span-11 row-span-8 border-t-[1] border-[#1e1e1e]">
      <div className="flex items-center justify-between px-2 py-1">
        <ul className="flex gap-2">
          {terminalNav.map((nav, i) => (
            <li
              key={i}
              className={
                nav === "TERMINAL" ? "border-b-[1.2] border-blue-700" : ""
              }
            >
              {nav}
            </li>
          ))}
        </ul>
        <ul className="flex">
          <li className="flex">
            <SquareTerminal /> bash
          </li>
          {terminalNavIcons.map((Icon, i) => (
            <li key={i}>
              <Icon />
            </li>
          ))}
        </ul>
      </div>

      <div className="p-2">
        <p>
          {firstname}@{lastname} MINGW64 ~/OneDrive/Documents/My
          projects/portfolio (master)
        </p>
        <p>$ npm run tech-stack</p>
        <p>{">"}tech-stack@0.1.0 dev</p>

        <pre>{generateTechStackTable(techStack)}</pre>
      </div>
    </div>
  );
}
