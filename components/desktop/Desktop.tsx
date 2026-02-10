import Navbar from "@/components/desktop/Navbar";
import {
  VscodeWindow,
  NotepadWindow,
  ContactsWindow,
  FileExplorerWindow,
  DescriptionWindow,
  PDFWindow,
  ScreenshotWindow,
} from "@/windows/index";
import useWindowStore from "@/store/windowsStore";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

export default function Desktop() {
  const openWindow = useWindowStore((state) => state.openWindow);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const [instance] = Draggable.create(el);

    return () => instance.kill();
  }, []);

  return (
    <main className="relative">
      <Navbar />

      <div
        // ref={ref}
        className="absolute top-40 left-25 cursor-pointer z-0"
        onClick={() =>
          openWindow("pdf", { title: "Resume", url: "/files/resume.pdf" })
        }
      >
        <img
          src="/icons/file-explorer-icons/folder-icon.svg"
          alt="resume folder icon"
          className="size-18"
        />
        <p className="text-center text-white">Resume</p>
      </div>

      <VscodeWindow />
      <PDFWindow />
      <NotepadWindow />
      <ContactsWindow />
      <FileExplorerWindow />
      <DescriptionWindow />
      <ScreenshotWindow />
    </main>
  );
}
