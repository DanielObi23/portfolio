import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { ModeToggle } from "../ModeToggle";

export default function Right() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [brightness, setBrightness] = useState("0.9");

  useEffect(() => {
    const brightnessValue = Math.abs(Number(brightness) - 0.9).toString(); //The range slider value is in reverse
    document.documentElement.style.setProperty("--brightness", brightnessValue);
  }, [brightness]);

  const now = new Date();
  const time = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  const date = new Intl.DateTimeFormat(undefined, {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).format(now);

  return (
    <div className="flex gap-3.5 items-center justify-center relative">
      <div
        className={cn(
          isSettingsModalOpen ? "flex" : "hidden",
          "py-3 px-2 bg-gray-800 absolute bottom-13 left-0 w-full gap-2 rounded-lg",
        )}
      >
        <ModeToggle />
        <input
          id="brightness"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          type="range"
          min={0}
          max={0.9}
          step={0.1}
          className="w-full text-white"
        />
      </div>

      <div>
        <ChevronUp />
      </div>

      <div className="text-center text-xs text-white">
        <p>ENG</p> <p>UK</p>
      </div>

      {/* SETTINGS */}
      <button
        type="button"
        className="flex gap-1 items-center justify-center hover:bg-white/15 h-9 w-20 rounded-sm"
        onClick={() => setIsSettingsModalOpen(!isSettingsModalOpen)}
      >
        <img
          data-tooltip-id="settings"
          data-tooltip-content="wifi"
          src="/icons/wifi-icon.png"
          alt="wifi icon"
          className="h-5.5"
        />

        <img
          data-tooltip-id="settings"
          data-tooltip-content="volume"
          src="/icons/volume-icon.png"
          alt="volume icon"
          className="h-5"
        />

        <img
          data-tooltip-id="settings"
          data-tooltip-content="battery"
          src="/icons/battery-icon.png"
          alt="battery icon"
          className="h-4.5 rotate-180"
        />
        <Tooltip id="settings" />
      </button>

      <div className="flex flex-col text-end text-xs text-white">
        <time>{time}</time>
        <time>{date}</time>
      </div>
    </div>
  );
}
