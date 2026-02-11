import { BatteryMedium } from "lucide-react";
import Link from "next/link";
import MobileAppList from "./MobileAppList";
import { useEffect, useState } from "react";

export default function Mobile() {
  const [time, setTime] = useState("11:27");

  useEffect(() => {
    const timeNow = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(timeNow);
  });

  return (
    <div className="flex flex-col gap-4 justify-between h-dvh py-5 px-3 text-white">
      {/* System bar */}
      <div className="flex items-center justify-between px-4 text-xs text-white/70">
        <span>{time}</span>

        <div className="flex items-center gap-2">
          <span className="text-[10px]">5G</span>
          <span>
            <BatteryMedium />
          </span>
          <span>84%</span>
        </div>
      </div>

      <MobileAppList />

      {/* Dock list */}
      <div className="flex justify-around border-t border-t-white/30 pt-4">
        <Link href="/mobile/folders" className="flex flex-col items-center">
          <div className="size-16 bg-primary rounded-3xl flex items-center justify-center shadow-md transition active:scale-90">
            <img
              src="/icons/file-explorer-icons/folder-icon.svg"
              alt="folders icon"
              className="size-9"
            />
          </div>
        </Link>

        <Link href="/mobile/contacts" className="flex flex-col items-center">
          <div className="size-16 bg-primary rounded-3xl flex items-center justify-center shadow-md transition active:scale-90">
            <img
              src="/icons/window-icons/contacts-icon.svg"
              alt="contacts icon"
              className="size-9"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
