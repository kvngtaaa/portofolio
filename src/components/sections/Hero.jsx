import React from "react";
import { portfolioData } from "../../data/portfolioData";
import { FileDown, Mail, ArrowRight, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { Github, Linkedin, Whatsapp } from "../common/BrandIcons";
import ShinyText from "../reactbits/ShinyText";
import DecryptedText from "../reactbits/DecryptedText";

export default function Hero({ onOpenResume }) {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperiences = () => {
    const el = document.querySelector("#experiences");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] py-14 sm:py-20 md:py-24 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full select-none">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center gap-2.5 text-[11px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>{portfolioData.personal.location}</span>
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">·</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            {portfolioData.personal.status}
          </span>
        </div>

        {/* Social Quick Links */}
        <div className="flex items-center gap-2">
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
            className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            title="Direct Email"
            className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 shadow-sm"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub Repositories"
            className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.whatsapp}
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
            className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 shadow-sm"
          >
            <Whatsapp className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Role Badge */}
      <div className="mb-5 sm:mb-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-[0.16em] uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          {portfolioData.personal.role}
        </span>
      </div>

      {/* Main Hero Name */}
      <div className="mb-6 sm:mb-8">
        <h1 className="font-black tracking-tight leading-[0.92] text-foreground text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem]">
          <span className="block">
            <ShinyText text="KEVIN GENTA" speed={4} />
          </span>
          <span className="block text-zinc-400 dark:text-zinc-500 mt-1 sm:mt-2">
            <DecryptedText text="ALEXANDER" speed={30} animateOn="view" />
          </span>
        </h1>
      </div>

      {/* Tagline */}
      <div className="max-w-2xl mb-8 sm:mb-10">
        <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-600 dark:text-zinc-300 leading-relaxed">
          &ldquo;{portfolioData.personal.tagline}&rdquo;
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-3.5 mb-10">
        <button
          onClick={onOpenResume}
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/35 hover:-translate-y-0.5 cursor-pointer"
        >
          <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          Download CV
        </button>

        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-emerald-500/40 hover:bg-emerald-500/5 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer"
        >
          Contact
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>

        <button
          onClick={scrollToExperiences}
          className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-zinc-500 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 font-mono text-xs font-semibold tracking-wider transition-colors cursor-pointer"
        >
          View Projects &darr;
        </button>
      </div>

      {/* Quick Highlights Row */}
      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-200/60 dark:border-white/[0.06]">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-[#12151e] border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-700 dark:text-zinc-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>BNSP Certified System Analyst</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-[#12151e] border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-700 dark:text-zinc-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Full-Stack &amp; Smart Farming IoT</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-[#12151e] border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-700 dark:text-zinc-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>LLM &amp; RAG Architecture</span>
        </div>
      </div>
    </section>
  );
}
