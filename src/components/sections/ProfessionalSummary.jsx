import React from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import TrueFocus from "../reactbits/TrueFocus";
import DecryptedText from "../reactbits/DecryptedText";
import { Award, Briefcase, FileCode2, GraduationCap } from "lucide-react";

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

export default function ProfessionalSummary() {
  const metricIcons = [Briefcase, FileCode2, Award, GraduationCap];

  return (
    <section
      id="summary"
      className="relative py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full select-none"
    >
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <SectionLabel number="01" label="PROFILE OVERVIEW" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3">
          Professional Summary
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
          A rare combination of national system analysis accreditation and hands-on full-stack development experience.
        </p>
      </div>

      {/* Two-column layout: narrative + metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Narrative Card — takes 7 cols */}
        <SpotlightCard
          className="lg:col-span-7 p-7 sm:p-9 md:p-10 flex flex-col justify-between"
          spotlightColor="rgba(74, 222, 128, 0.12)"
          borderColor="rgba(74, 222, 128, 0.4)"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-500 dark:text-emerald-400">
                Core Profile &amp; Architecture Philosophy
              </span>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed mb-6 font-normal">
              {portfolioData.personal.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <TrueFocus
              sentence="System Architecture • Smart Farming • IoT Telemetry • LLM & RAG"
              borderColor="#4ade80"
              glowColor="rgba(74, 222, 128, 0.4)"
            />
          </div>
        </SpotlightCard>

        {/* Metrics Grid — takes 5 cols, 2x2 grid inside */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolioData.personal.metrics.map((item, idx) => {
            const Icon = metricIcons[idx] || Briefcase;
            return (
              <SpotlightCard
                key={idx}
                className="p-6 flex flex-col justify-between h-full"
                spotlightColor="rgba(74, 222, 128, 0.1)"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-foreground block mb-1">
                    <DecryptedText text={item.value} speed={30} animateOn="view" />
                  </span>

                  <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-100 leading-snug">
                    {item.label}
                  </h4>
                </div>

                <div className="pt-3 mt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                    {item.sub}
                  </span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
