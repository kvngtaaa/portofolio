import React from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import DecryptedText from "../reactbits/DecryptedText";
import { Server, Layout, Database, Network, Cpu, Wrench, Users, Check } from "lucide-react";

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

const iconMap = {
  backend: Server,
  frontend: Layout,
  database: Database,
  "api-integration": Network,
  "ai-emerging": Cpu,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full select-none"
    >
      <div className="mb-12 md:mb-16">
        <SectionLabel number="05" label="TECHNICAL MATRIX" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3">
          Skills &amp; Capabilities
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
          Core technical competencies categorized directly from verified production experience,
          thesis development, and system analyst accreditation.
        </p>
      </div>

      {/* Skills Grid — 6 categories with clear card boundaries and consistent heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-stretch">
        {portfolioData.skills.categories.map((cat) => {
          const Icon = iconMap[cat.id] || Server;
          return (
            <SpotlightCard
              key={cat.id}
              className="p-6 sm:p-7 flex flex-col justify-between h-full"
              spotlightColor="rgba(74, 222, 128, 0.12)"
              borderColor="rgba(74, 222, 128, 0.35)"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground tracking-tight">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/90 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60 shrink-0">
                    {cat.items.length} items
                  </span>
                </div>

                {/* Skill Badges — distinct, legible, well-spaced */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/90 dark:border-zinc-700/70 text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-150 cursor-default shadow-xs"
                    >
                      <DecryptedText text={skill} speed={20} animateOn="hover" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="pt-4 mt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                <span className="uppercase tracking-wider">Verified Competency</span>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Soft Skills Bar */}
      <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#12151e] shadow-lg flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 shrink-0">
          <div className="size-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Users className="w-4 h-4 text-emerald-500" />
          </div>
          <span>Soft Skills &amp; Execution</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {portfolioData.skills.softSkills.map((soft) => (
            <span
              key={soft}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {soft}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
