import useWindowStore from "@/store/useWIndows";
import { Minus, X, Copy } from "lucide-react";

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
