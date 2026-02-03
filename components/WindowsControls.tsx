import useWindowStore from "@/store/useWIndows";
import { Minus, X, Copy } from "lucide-react";

/**
 * Renders a set of window control buttons for the given window identifier.
 *
 * The first button invokes the window-close action with the provided `window` identifier; the other two buttons render copy and close (X) icons without attached handlers.
 *
 * @param window - The identifier of the window these controls act on
 * @returns A JSX element containing three icon buttons (close, copy, and X)
 */
export default function WindowsControls({ window }: { window: string }) {
  const closeWindow = useWindowStore((state) => state.closeWindow);
  return (
    <div className="flex gap-2">
      <button onClick={() => closeWindow(window)}>
        <Minus />
      </button>
      <button>
        <Copy className="rotate-90 size-4" />
      </button>
      <button>
        <X className="size-4" />
      </button>
    </div>
  );
}