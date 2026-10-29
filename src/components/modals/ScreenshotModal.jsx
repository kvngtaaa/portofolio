import React, { useEffect } from "react";
import { X, ExternalLink, Maximize2, Download } from "lucide-react";
import BrowserMockup from "../common/BrowserMockup";

/**
 * ScreenshotModal - Elegant High-Resolution Lightbox for Project Screenshots
 */
export default function ScreenshotModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0d1017] text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-zinc-950/80">
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <span>{project.title}</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.projectType}
              </span>
            </h3>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              {project.role} · {project.period}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {project.links?.demo && project.links.demo !== "#" && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Large Browser Mockup */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[75vh] flex items-center justify-center bg-[#07090e]">
          <div className="w-full shadow-2xl">
            <BrowserMockup
              src={project.image}
              alt={project.title}
              url={project.previewUrl}
              aspectRatio="aspect-[16/10]"
              priority={true}
              className="border-white/15"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-white/10 bg-zinc-950/90 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
          <span className="font-mono text-[11px]">
            Screenshot Asset: <code className="text-emerald-400">{project.image}</code>
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Open raw image
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
