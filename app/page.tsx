"use client";

import Navbar from "@/components/Navbar";
import {
  VscodeWindow,
  ChromeWindow,
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
      <ChromeWindow />
      <PDFWindow />
      <NotepadWindow />
      <ContactsWindow />
      <FileExplorerWindow />
      <DescriptionWindow />
    </main>
  );
}
