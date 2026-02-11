import {
  terminalNav,
  terminalNavIcons,
  firstname,
  lastname,
  generateTechStackTable,
} from "@/constants/vscode";
import { techStack } from "@/constants";
import { ChevronDown, ChevronRight, Plus, SquareTerminal } from "lucide-react";

export default function VscodeTerminal() {
  return (
    <div className="col-span-11 row-span-11 border-t mt-3 bg-primary border-[#1e1e1e]">
      <div className="flex items-center justify-between px-2 py-1">
        <ul className="flex gap-2 text-xs">
          {terminalNav.map((nav, i) => (
            <li
              key={`nav-${i}`}
              className={
                nav === "TERMINAL"
                  ? "border-b-[1.2px] border-blue-700 text-white "
                  : "text-gray-400 pb-1"
              }
            >
              {nav}
            </li>
          ))}
        </ul>
        <ul className="flex gap-2 items-center">
          <li className="flex gap-1 items-center text-xs">
            <SquareTerminal strokeWidth={1.5} size={16} /> <p>bash</p>
          </li>

          <li className="flex">
            <Plus strokeWidth={1.5} size={16} />
            <ChevronDown strokeWidth={1.5} size={16} />
          </li>

          {terminalNavIcons.map((Icon, i) => {
            if (i === 3) {
              return [
                <li key="terminal-separator" className="text-gray-600">
                  |
                </li>,
                <li key={`terminal-icon-${i}`}>
                  <Icon strokeWidth={1.5} size={16} />
                </li>,
              ];
            }
            return (
              <li key={`terminal-icon-${i}`}>
                <Icon strokeWidth={1.5} size={16} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-2 px-4">
        <p>
          <span className="text-green-500">
            {firstname}@{lastname}
          </span>
          &nbsp;
          <span className="text-fuchsia-500">MINGW64</span>&nbsp;
          <span className="text-yellow-300">
            ~/OneDrive/Documents/My portfolio/techstack
          </span>
          &nbsp;
          <span className="text-sky-400">(master)</span>
        </p>
        <p>$ npm run tech-stack</p>
        <div className="flex items-center">
          <ChevronRight size={16} /> <p>tech-stack@0.1.0 dev</p>
        </div>
        <pre className="ml-4">{generateTechStackTable(techStack)}</pre>
      </div>
    </div>
  );
}
