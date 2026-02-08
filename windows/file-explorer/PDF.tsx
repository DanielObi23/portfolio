"use client";

import WindowsControls from "@/components/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import useWindowStore from "@/store/windowsStore";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function PDF() {
  const windows = useWindowStore((state) => state.windows);
  const { data } = windows["pdf"];

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  return (
    <div className="flex flex-col bg-zinc-900 text-zinc-200">
      {/* Title bar */}
      <div className="sticky top-0 z-10 flex items-center h-10 px-3 bg-zinc-800 border-b border-zinc-700">
        {/* Left */}
        <a
          href="/files/resume.pdf"
          download
          title="Download resume"
          className="hover:text-white transition"
        >
          <Download size={18} />
        </a>

        {/* Center */}
        <p className="absolute left-1/2 -translate-x-1/2 text-sm font-medium select-none">
          {data?.title}
        </p>

        {/* Right */}
        <div className="ml-auto">
          <WindowsControls window="pdf" />
        </div>
      </div>

      {/* PDF viewer */}
      <div>
        <Document
          file={data?.url}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setPageNumber(1);
          }}
          loading={<p className="text-sm text-zinc-400">Loading PDF…</p>}
        >
          <Page
            pageNumber={pageNumber}
            className="shadow-xl"
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>

      {/* Footer controls */}
      <div className="flex items-center justify-center gap-4 h-10 bg-zinc-800 border-t border-zinc-700 text-sm">
        <button
          onClick={() => setPageNumber((p) => p - 1)}
          disabled={pageNumber <= 1}
          className="p-1 disabled:opacity-40 hover:text-white transition"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="opacity-70">
          Page {pageNumber} of {numPages || "—"}
        </span>

        <button
          onClick={() => setPageNumber((p) => p + 1)}
          disabled={pageNumber >= numPages}
          className="p-1 disabled:opacity-40 hover:text-white transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

const ResumeWindow = WindowWrapper(PDF, "pdf");

export default ResumeWindow;
