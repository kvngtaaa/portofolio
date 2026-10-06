import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Cpu, BarChart2 } from "lucide-react";
import { Github } from "../common/BrandIcons";
import { useSound } from "../../context/SoundContext";

export default function ProjectModal({ project, onClose }) {
  const { playClick } = useSound();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 text-foreground shadow-2xl custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 size-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/90 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Banner */}
        <div className="relative h-64 md:h-72 w-full overflow-hidden bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-400/30">
              {project.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mt-2 text-white">
              {project.title}
            </h2>
            <p className="text-xs md:text-sm font-mono text-zinc-300 mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Mission Brief */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-sky-500 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              MISSION BRIEF & ARCHITECTURAL PROBLEM
            </h3>
            <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {project.missionBrief}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-sky-500 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              ENGINEERED HIGHLIGHTS & CAPABILITIES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 text-xs md:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5"
                >
                  <span className="text-sky-500 font-bold mt-0.5">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500 mb-3 flex items-center gap-2">
              <BarChart2 className="w-4 h-4" />
              PRODUCTION METRICS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(project.metrics).map(([k, v]) => (
                <div
                  key={k}
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/5 flex flex-col"
                >
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    {k}
                  </span>
                  <span className="text-sm font-mono font-bold text-sky-500 dark:text-sky-400">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500 mb-2">
              TECHNOLOGIES DEPLOYED
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-zinc-200/60 dark:border-white/10 flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/30 text-xs font-mono font-bold uppercase transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-mono font-bold uppercase shadow-lg shadow-sky-500/20 transition-all"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
