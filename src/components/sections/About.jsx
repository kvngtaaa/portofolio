import React from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import TrueFocus from "../reactbits/TrueFocus";
import DecryptedText from "../reactbits/DecryptedText";
import { ShieldCheck, Cpu, Layers, Activity, Sparkles } from "lucide-react";

export default function About() {

  const iconMap = {
    ShieldCheck: ShieldCheck,
    Cpu: Cpu,
    Layers: Layers,
    Activity: Activity
  };

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-16 max-w-[105rem] mx-auto z-10 select-none"
    >
      {/* Top Tagline & LeadIn */}
      <div className="flex flex-col gap-6 mb-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sky-400" />
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-sky-500 dark:text-sky-400">
            {portfolioData.leadIn.tagline} // {portfolioData.leadIn.label}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Large Editorial Headline */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-foreground">
              <span className="block text-sky-500 dark:text-sky-400">
                {portfolioData.leadIn.headlineAI}
              </span>
              <span className="block text-foreground">
                {portfolioData.leadIn.headlineData}
              </span>
              <span className="block font-serif italic font-normal text-zinc-600 dark:text-zinc-300">
                {portfolioData.leadIn.headlineSoftware}
              </span>
            </h2>

            <div className="mt-8">
              <TrueFocus
                sentence="Applied AI • Scalable Systems • Measurable Impact"
                borderColor="#38bdf8"
                glowColor="rgba(56, 189, 248, 0.5)"
              />
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="lg:col-span-5 space-y-6 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p className="text-base md:text-lg font-medium text-foreground">
              {portfolioData.leadIn.thesis}
            </p>
            <p>{portfolioData.leadIn.scope}</p>
            <p>{portfolioData.leadIn.integration}</p>
          </div>
        </div>
      </div>

      {/* Numerical Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
        {Object.entries(portfolioData.personal.stats).reduce((acc, [key, val]) => {
          if (key.endsWith("Label")) return acc;
          const labelKey = `${key}Label`;
          acc.push({
            value: val,
            label: portfolioData.personal.stats[labelKey]
          });
          return acc;
        }, []).map((stat, idx) => (
          <SpotlightCard
            key={idx}
            className="p-6 md:p-8 flex flex-col justify-between"
            spotlightColor="rgba(56, 189, 248, 0.12)"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-foreground">
              <DecryptedText text={stat.value} speed={30} animateOn="view" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-4">
              {stat.label}
            </span>
          </SpotlightCard>
        ))}
      </div>

      {/* Core Engineering Pillars */}
      <div className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              ARCHITECTURE PRINCIPLES
            </span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground mt-1">
              Core Engineering Pillars
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <SpotlightCard
                key={pillar.id}
                className="p-7 flex flex-col justify-between h-full"
                spotlightColor="rgba(56, 189, 248, 0.18)"
              >
                <div>
                  <div className="size-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-sky-500 mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3 tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200/50 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  <span>Pillar {pillar.id}</span>
                  <span className="text-emerald-500">Active</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>

      {/* Emerging Research & Expansion */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h3 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-foreground">
            EMERGING RESEARCH & EXPANSION
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.emergingResearch.map((item, idx) => (
            <SpotlightCard
              key={idx}
              className="p-8 relative overflow-hidden"
              spotlightColor="rgba(168, 85, 247, 0.15)"
              borderColor="rgba(168, 85, 247, 0.35)"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-zinc-500 uppercase">
                  {item.category}
                </span>
              </div>

              <h4 className="text-xl md:text-2xl font-black tracking-tight text-foreground mb-3">
                {item.title}
              </h4>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
