"use client";

import { Navbar } from "@/components/index";
import { VscodeWindow, ChromeWindow } from "@/windows/index";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <VscodeWindow />
      <ChromeWindow />
    </main>
  );
}
