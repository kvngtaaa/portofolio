import React, { useEffect } from "react";
import { portfolioData } from "../../data/portfolioData";
import { X, Download } from "lucide-react";

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = portfolioData.personal.cvPath;
    link.download = "CV_Kevin_Genta_Alexander.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[92vh] flex flex-col rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-zinc-950 shrink-0">
          <div className="flex items-center gap-3">
            <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              CURRICULUM VITAE // KEVIN GENTA ALEXANDER
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-[11px] font-black uppercase tracking-wider transition-colors cursor-pointer"
              title="Download CV"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-white/10 text-zinc-400 hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-zinc-900 overflow-hidden">
          <iframe
            src={`${portfolioData.personal.cvPath}#toolbar=0&navpanes=0&scrollbar=1`}
            title="CV Kevin Genta Alexander"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
