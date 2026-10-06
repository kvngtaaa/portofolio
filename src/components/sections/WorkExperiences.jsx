import React from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import TiltedCard from "../reactbits/TiltedCard";
import DecryptedText from "../reactbits/DecryptedText";
import { Calendar, MapPin, Sparkles, Cpu, CheckCircle2 } from "lucide-react";

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
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
          From full-stack IoT and smart farming platforms to enterprise web applications
          and rigorous software quality assurance.
        </p>
      </div>

      {/* Featured Projects — side by side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-stretch">
        {featured.map((exp) => (
          <TiltedCard key={exp.id} maxTilt={4} scale={1.01} className="w-full h-full">
            <div className="p-6 sm:p-8 md:p-9 relative flex flex-col justify-between h-full">
              <div>
                {/* Top row: badge + meta */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500 text-black shadow-md shadow-emerald-500/20 shrink-0">
                    <Sparkles className="w-3 h-3" />
                    Featured Project
                  </span>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
                      {exp.location}
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-600">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-emerald-500 shrink-0" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground mb-1.5">
                  <DecryptedText text={exp.title} speed={25} animateOn="hover" />
                </h3>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
                  {exp.role} <span className="text-zinc-400 dark:text-zinc-600">/</span> {exp.projectType}
                </p>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                  {exp.tagline}
                </p>

                {/* Points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                      <span className="text-emerald-500 shrink-0 mt-0.5 font-bold">▸</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 mt-auto">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </TiltedCard>
        ))}
      </div>

      {/* Regular Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
        {regular.map((exp) => (
          <SpotlightCard
            key={exp.id}
            className="p-6 sm:p-8 flex flex-col justify-between h-full"
            spotlightColor="rgba(74, 222, 128, 0.08)"
          >
            <div>
              {/* Top */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                  {exp.projectType}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">{exp.period}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground mb-1">
                <DecryptedText text={exp.title} speed={25} animateOn="hover" />
              </h3>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                {exp.role} <span className="text-zinc-400 dark:text-zinc-600">·</span> {exp.location}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {exp.tagline}
              </p>

              <ul className="space-y-2 mb-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                    <span className="text-zinc-400 shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 mt-auto">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Technical Highlights Container */}
      <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12151e] p-6 sm:p-8 md:p-10 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
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
    </section>
  );
}
