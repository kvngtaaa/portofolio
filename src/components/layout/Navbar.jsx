import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun, Menu, X, FileDown } from "lucide-react";

export default function Navbar({ onOpenResume }) {
  const { toggleTheme, isDark } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Summary", href: "#summary" },
    { label: "Experiences", href: "#experiences" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certificates" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const handleScroll = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/80 dark:bg-[#07080a]/85 border-b border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-20 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3.5 group focus:outline-none shrink-0"
        >
          <div className="size-10 rounded-xl bg-emerald-500 text-black flex items-center justify-center font-black text-sm tracking-tight shadow-md shadow-emerald-500/20 transition-transform duration-200 group-hover:scale-105">
            KG
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm md:text-base tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {portfolioData.personal.shortName}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">
              Full-Stack &amp; System Analyst
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.href)}
              className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3.5 shrink-0">
          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono tracking-wider font-semibold">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to full-time roles</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-emerald-400" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-400" />
            )}
          </button>

          {/* Download CV CTA */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-xl border border-white/10 text-zinc-300"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2.5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="text-left px-4 py-3 rounded-xl bg-zinc-900 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </button>
        </div>
      )}
    </header>
  );
}
