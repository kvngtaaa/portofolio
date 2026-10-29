import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import ScreenshotModal from "../modals/ScreenshotModal";
import { Cpu, CheckCircle2, Sparkles, Layers } from "lucide-react";

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="h-px w-6 bg-emerald-500" />
      <span className="text-[11px] font-mono font-bold tracking-[0.22em] uppercase text-emerald-500">
        {number} // {label}
      </span>
    </div>
  );
}

export default function WorkExperiences() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featured = portfolioData.experiences.filter((e) => e.featured);
  const regular = portfolioData.experiences.filter((e) => !e.featured);

  return (
    <section
      id="experiences"
      className="relative py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full select-none"
    >
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <SectionLabel number="02" label="PROFESSIONAL SEQUENCE" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3">
          Work Experiences &amp; Flagship Projects
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Production-grade applications and system engineering, showcasing real interfaces
          from full-stack IoT and smart farming platforms to enterprise corporate presence.
        </p>
      </div>

      {/* 1. Flagship Featured Projects (AGA & AgriNova) */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Flagship Smart Farming &amp; AI Systems
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {featured.map((exp) => (
            <ProjectCard
              key={exp.id}
              project={exp}
              featured={true}
              aspectRatio="aspect-[16/10]"
              onOpenPreview={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* 2. Enterprise & Industry Experience (PT Trigobalindo & Transtrack.id) */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Layers className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Enterprise Platforms &amp; Quality Assurance
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {regular.map((exp) => (
            <ProjectCard
              key={exp.id}
              project={exp}
              featured={false}
              aspectRatio="aspect-[16/10]"
              onOpenPreview={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* 3. Technical Architecture Highlights Container */}
      <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12151e] p-6 sm:p-8 md:p-10 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-foreground">
              Technical Architecture Highlights
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Core architectural patterns implemented in production and thesis systems
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.technicalHighlights.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-2 hover:border-emerald-500/40 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-wider">
                  // 0{idx + 1}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70" />
              </div>
              <h4 className="text-sm font-bold text-foreground leading-snug">{tech.title}</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshot Lightbox Modal */}
      {selectedProject && (
        <ScreenshotModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
