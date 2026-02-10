import { WindowDataMap } from "@/constants/windows";
import useWindowStore from "@/store/windowsStore";
import { Minus, X, Copy } from "lucide-react";

export default function WindowsControls({
  window,
}: {
  window: keyof WindowDataMap;
}) {
  const closeWindow = useWindowStore((state) => state.closeWindow);
  return (
    <div className="flex gap-3 items-center">
      <button
        className="cursor-not-allowed"
        aria-label="Minimize window"
        disabled
      >
        <Minus className="size-4" />
      </button>
      <button
        className="cursor-not-allowed"
        aria-label="Restore window"
        disabled
      >
        <Copy className="rotate-90 size-4" />
      </button>
      <button
        aria-label="Close window"
        className="cursor-pointer"
        onClick={() => closeWindow(window as keyof WindowDataMap)}
      >
        <X className="size-5 " />
      </button>
    </div>
  );
}
