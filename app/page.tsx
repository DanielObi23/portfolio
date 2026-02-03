"use client";

import Navbar from "@/components/Navbar";
import { VscodeWindow, ChromeWindow } from "@/windows/index";

/**
 * Renders the home page layout with a navbar followed by VS Code and Chrome window components.
 *
 * @returns The root React element containing <Navbar />, <VscodeWindow />, and <ChromeWindow />.
 */
export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <VscodeWindow />
      <ChromeWindow />
    </main>
  );
}