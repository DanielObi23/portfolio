import { navIcons } from "@/constants";
import { cn } from "@/lib/utils";
import useWindowStore from "@/store/useWIndows";
import { Search } from "lucide-react";
import { Tooltip } from "react-tooltip";

/**
 * Renders the center navigation group: icon buttons (with tooltips) that toggle corresponding windows, a search input, and a gift icon.
 *
 * @returns The component's rendered JSX element.
 */
export default function Center() {
  const openWindow = useWindowStore((state) => state.openWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const windows = useWindowStore((state) => state.windows);

  function toggleDisplay(windowKey: string) {
    const window = windows[windowKey];
    if (!window) return;
    if (window.isOpen) {
      closeWindow(windowKey);
    } else {
      openWindow(windowKey);
    }
  }

  return (
    <div className="flex gap-4 justify-center items-center text-white">
      <ul className="flex gap-4 justify-center items-center">
        {navIcons.map((icon, i) => (
          <li
            key={icon.id}
            data-tooltip-id="windows"
            data-tooltip-content={icon.name}
            className={cn(i === 0 ? "order-1" : "order-3")}
          >
            <button onClick={() => toggleDisplay(icon.id)}>
              <img src={icon.src} alt={`${icon.name} icon`} className="h-8" />
            </button>
          </li>
        ))}

        <Tooltip id="windows" />

        <li className="w-50 rounded-full bg-gray-700 flex items-baseline justify-between px-2.5 py-1 text-sm order-2">
          <div className="flex gap-2 border-0">
            <Search className="h-4.5" />
            <input placeholder="Search" className="w-30 focus:outline-none" />
          </div>

          <img
            src={`/navbar/gift-icon.png`}
            alt={`gift icon`}
            className="h-5.5"
          />
        </li>
      </ul>
    </div>
  );
}