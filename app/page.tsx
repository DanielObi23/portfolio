"use client";

import Navbar from "@/components/Navbar";
import {
  VscodeWindow,
  NotepadWindow,
  ContactsWindow,
  FileExplorerWindow,
  DescriptionWindow,
  PDFWindow,
} from "@/windows/index";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <VscodeWindow />
      <PDFWindow />
      <NotepadWindow />
      <ContactsWindow />
      <FileExplorerWindow />
      <DescriptionWindow />
    </main>
  );
}
