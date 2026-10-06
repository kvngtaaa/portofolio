import React from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import DecryptedText from "../reactbits/DecryptedText";
import { CheckCircle, ExternalLink, Calendar } from "lucide-react";
import { useSound } from "../../context/SoundContext";

export default function Achievements() {
  const { playClick } = useSound();

  return (
    <section
      id="achievements"
      className="relative py-28 px-6 md:px-16 max-w-[105rem] mx-auto z-10 select-none"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sky-400" />
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-sky-500 dark:text-sky-400">
            VALIDATION // CERTIFICATIONS & RECOGNITION
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Verified Milestones
        </h2>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
          National hackathon championships, enterprise cloud competencies, and academic research grants.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.achievements.map((item) => (
          <SpotlightCard
            key={item.id}
            className="p-7 md:p-8 flex flex-col justify-between"
            spotlightColor="rgba(245, 158, 11, 0.15)"
            borderColor="rgba(245, 158, 11, 0.3)"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-2">
                <DecryptedText text={item.title} speed={25} animateOn="hover" />
              </h3>

              <div className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold mb-4">
                Issued by {item.issuer}
              </div>

              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200/50 dark:border-white/5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-500">
                <CheckCircle className="w-4 h-4" />
                Verified Credential
              </span>

              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-sky-400 transition-colors"
              >
                <span>Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
