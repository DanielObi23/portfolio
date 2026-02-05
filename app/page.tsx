"use client";

import Navbar from "@/components/Navbar";
import { VscodeWindow, ChromeWindow, NotepadWindow } from "@/windows/index";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <VscodeWindow />
      <ChromeWindow />
      <NotepadWindow />
    </main>
  );
}
