import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import { ChevronDown, CheckCircle2, BookOpen, Award } from "lucide-react";
import { useSound } from "../../context/SoundContext";

export default function Experience() {
  const { playClick } = useSound();
  const [expandedId, setExpandedId] = useState("dicoding");

  const toggleExpand = (id) => {
    playClick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="relative py-28 px-6 md:px-16 max-w-[105rem] mx-auto z-10 select-none"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sky-400" />
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-sky-500 dark:text-sky-400">
            BACKGROUND // PROFESSIONAL SEQUENCE
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Key Experience & Research
        </h2>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Bridging university laboratory innovations with industry-standard machine learning
          evaluation, high-throughput systems, and enterprise architectural governance.
        </p>
      </div>

      {/* Experience Timeline Accordion */}
      <div className="space-y-4">
        {portfolioData.experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <SpotlightCard
              key={exp.id}
              className="p-6 md:p-8 transition-all duration-300"
              spotlightColor="rgba(56, 189, 248, 0.14)"
            >
              {/* Header Bar */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start md:items-center gap-4">
                  <span className="font-mono text-xs font-bold text-sky-500 dark:text-sky-400 size-8 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                        {exp.company}
                      </h3>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 uppercase">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-mono text-sky-600 dark:text-sky-400 mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4">
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <div
                    className={`size-8 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-foreground transition-transform duration-300 ${
                      isExpanded ? "rotate-180 bg-zinc-200 dark:bg-zinc-800" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Collapsed Description Snippet */}
              {!isExpanded && (
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 mt-4 line-clamp-2">
                  {exp.desc}
                </p>
              )}

              {/* Expanded In-Depth Details */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-zinc-200/50 dark:border-white/10 space-y-6 animate-in fade-in duration-300">
                  <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                    {exp.desc}
                  </p>

                  {/* Tasks List */}
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-sky-500 dark:text-sky-400 flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4" />
                      TASKS & KEY RESPONSIBILITIES
                    </h4>
                    <ul className="space-y-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5">
                          <span className="text-sky-500 shrink-0 mt-1">▸</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learned & Impact Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/5">
                      <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5 uppercase mb-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        WHAT I LEARNED
                      </span>
                      <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {exp.learned}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/5">
                      <span className="text-[11px] font-mono font-bold tracking-wider text-purple-500 dark:text-purple-400 flex items-center gap-1.5 uppercase mb-1.5">
                        <Award className="w-3.5 h-3.5" />
                        MEASURABLE IMPACT
                      </span>
                      <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {exp.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tech Skills Chips */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase mr-1">
                      SKILLS USED:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
