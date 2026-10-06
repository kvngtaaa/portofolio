import React from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import DecryptedText from "../reactbits/DecryptedText";
import { ShieldCheck, CheckCircle2, FileCheck, ExternalLink } from "lucide-react";

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

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full select-none"
    >
      <div className="mb-12 md:mb-16">
        <SectionLabel number="04" label="PROFESSIONAL VALIDATION" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3">
          Certificates &amp; Credentials
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
          National regulatory certifications validating system analysis methodologies,
          architectural integrity, and enterprise IT governance.
        </p>
      </div>

      {portfolioData.certificates.map((cert) => (
        <SpotlightCard
          key={cert.id}
          className="p-0 overflow-hidden border border-emerald-500/30 dark:border-emerald-500/25 shadow-xl"
          spotlightColor="rgba(74, 222, 128, 0.12)"
          borderColor="rgba(74, 222, 128, 0.4)"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left accent panel — 5 cols */}
            <div className="lg:col-span-5 p-7 sm:p-9 md:p-10 bg-emerald-500/5 dark:bg-emerald-500/[0.04] border-b lg:border-b-0 lg:border-r border-emerald-500/20 flex flex-col justify-between gap-6">
              <div>
                <div className="size-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 mb-3">
                  {cert.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground leading-tight mb-2">
                  <DecryptedText text={cert.title} speed={25} animateOn="hover" />
                </h3>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold leading-relaxed">
                  Issued by {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-5 border-t border-emerald-500/20">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                  <FileCheck className="w-4 h-4" />
                  {cert.status}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {cert.year}
                </span>
              </div>
            </div>

            {/* Right content panel — 7 cols */}
            <div className="lg:col-span-7 p-7 sm:p-9 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <p className="text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed mb-6 font-normal">
                  {cert.desc}
                </p>

                <div className="mb-6">
                  <span className="block text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 mb-3">
                    Core Competency Units
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cert.competencies.map((unit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{unit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  National Qualification Standard — BNSP Indonesia
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      ))}
    </section>
  );
}
