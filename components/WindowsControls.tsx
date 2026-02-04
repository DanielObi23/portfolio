import useWindowStore from "@/store/useWIndows";
import { Minus, X, Copy } from "lucide-react";

export default function WindowsControls({ window }: { window: string }) {
  const closeWindow = useWindowStore((state) => state.closeWindow);
  return (
    <div className="flex gap-3 items-center">
      <button>
        <Minus className="size-4" />
      </button>
      <button>
        <Copy className="rotate-90 size-4" />
      </button>
      <button onClick={() => closeWindow(window)}>
        <X className="size-5" />
      </button>
    </div>
  );
}
