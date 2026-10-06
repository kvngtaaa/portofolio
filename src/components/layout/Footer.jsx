import React, { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolioData";
import { ArrowUp, Mail, Clock, MapPin } from "lucide-react";
import { Github, Linkedin, Instagram } from "../common/BrandIcons";
import { useSound } from "../../context/SoundContext";

export default function Footer() {
  const { playClick } = useSound();
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Asia/Jakarta timezone
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(now);
      setTimeStr(`${formatted} WIB (UTC+7)`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-200/60 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl z-20 pt-16 pb-28 md:pb-24">
      <div className="max-w-[105rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-zinc-200/50 dark:border-white/10">
          {/* Identity & Status */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-black tracking-tight text-foreground">
                {portfolioData.personal.fullName}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-sky-500/10 text-sky-500 border border-sky-500/20">
                v2026.4
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              Architecting intelligent systems at the intersection of Deep Learning,
              Scalable Backend Infrastructures, and Interactive Web Realities.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Jakarta, Indonesia
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {timeStr || "Loading time..."}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-foreground">
              INDEX LINKS
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="#about"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                >
                  // 01. About & Narrative
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                >
                  // 02. Work & Research
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                >
                  // 03. Flagship Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                >
                  // 04. Technical Matrix
                </a>
              </li>
              <li>
                <a
                  href="#telemetry"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                >
                  // 05. System Telemetry
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connectivity */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-foreground">
              CONNECTIVITY
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                github.com/Arfazrll
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                linkedin/in/syahril-arfian
              </a>
              <a
                href={portfolioData.personal.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @arfazrll
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-sky-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {portfolioData.personal.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.fullName}. Crafted with React 19 & ReactBits.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 hover:border-sky-500/50 hover:text-sky-400 transition-all cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
