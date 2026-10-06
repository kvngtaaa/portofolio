import React from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import { GraduationCap, Calendar, MapPin, Star, Award } from "lucide-react";

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

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full select-none"
    >
      <div className="mb-12 md:mb-16">
        <SectionLabel number="03" label="ACADEMIC FOUNDATION" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3">
          Education
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
          Formal academic training in Information Systems, software quality engineering,
          and enterprise IT architecture at Telkom University.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {portfolioData.education.map((item, idx) => (
          <SpotlightCard
            key={idx}
            className="p-7 sm:p-9 flex flex-col justify-between h-full"
            spotlightColor="rgba(74, 222, 128, 0.1)"
            borderColor="rgba(74, 222, 128, 0.3)"
          >
            {/* Top row */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="size-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 mb-1.5 shadow-sm">
                    GPA: {item.gpa}
                  </div>
                  {item.status.includes("Cum Laude") && (
                    <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-amber-500 dark:text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      Cum Laude Honors
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-1.5">
                {item.degree}
              </h3>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                {item.institution}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-emerald-500" />
                  {item.location}
                </span>
                <span className="text-zinc-400 dark:text-zinc-600">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-emerald-500" />
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                {item.details}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono mt-auto">
              <span className="text-zinc-500 dark:text-zinc-400">Enrollment Status</span>
              <span className="text-foreground font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                {item.status}
              </span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
