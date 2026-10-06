import React from "react";
import { portfolioData } from "../../data/portfolioData";
import { Mail, FileDown, MapPin, ArrowUp, ExternalLink, MessageCircle } from "lucide-react";
import { Linkedin, Github, Whatsapp } from "../common/BrandIcons";

export default function Contact({ onOpenResume }) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#07080a] text-white z-20 border-t border-white/[0.08] select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-24">
        {/* Main Grid: Left CTA + Right Direct Reachout Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.08] items-start">
          {/* Left — CTA Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 w-fit">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              {portfolioData.personal.status}
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
                Let&rsquo;s Connect &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                  Collaborate
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Open to full-time software engineering roles, system analyst opportunities,
              and smart farming IoT / AI architectures. Reach out via email or connect on LinkedIn.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Send Direct Email
              </a>

              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-emerald-500/10 hover:border-emerald-500/30 text-xs font-mono text-zinc-200 hover:text-emerald-400 transition-all duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{portfolioData.personal.whatsappDisplay}</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-200 transition-all duration-200 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-emerald-400" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right — Contact Panel (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#11141c] border border-white/[0.09] p-6 sm:p-8 space-y-4 shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-emerald-400">
                // DIRECT REACHOUT
              </span>
              <span className="size-2 rounded-full bg-emerald-500/50" />
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">
                Location
              </span>
              <div className="flex items-center gap-2 text-sm font-sans font-medium text-zinc-200">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{portfolioData.personal.fullLocation}</span>
              </div>
            </div>

            {/* Direct Email Link */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">
                Email Address
              </span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center justify-between text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">
                WhatsApp
              </span>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Whatsapp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{portfolioData.personal.whatsappDisplay}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">
                Professional Network
              </span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{portfolioData.personal.linkedinDisplay}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* GitHub */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">
                Code Repositories
              </span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm font-mono text-zinc-200 hover:text-emerald-400 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{portfolioData.personal.githubDisplay}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>&copy; 2026 {portfolioData.personal.name}. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-200 cursor-pointer"
          >
            <span className="uppercase tracking-wider">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
