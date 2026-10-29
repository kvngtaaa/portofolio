import React from "react";
import BrowserMockup from "../common/BrowserMockup";
import DecryptedText from "../reactbits/DecryptedText";
import { Sparkles, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { Github } from "../common/BrandIcons";

/**
 * ProjectCard Component
 * 
 * Criteria:
 * - Browser Frame Mockup wrapping screenshot
 * - Modern Styling: rounded-2xl, border border-gray-200 / border-white/10, shadow-lg / shadow-xl
 * - Smooth Hover Effect: hover:-translate-y-2, hover:shadow-2xl, hover:scale-[1.01], transition-all duration-300
 * - Reusable & Clean: reads project object with image, title, stack, points, etc.
 * - Responsive: 100% fluid mobile friendly
 */
export default function ProjectCard({
  project,
  featured = false,
  className = "",
  aspectRatio = "aspect-[16/10]",
  onOpenPreview = null,
}) {
  const {
    title,
    role,
    projectType,
    period,
    location,
    tagline,
    points = [],
    stack = [],
    image = "/assets/aga-web.png",
    previewUrl = "demo.local",
    links = {},
  } = project;

  const isFeatured = featured || project.featured;

  return (
    <article
      className={`group relative flex flex-col h-full rounded-2xl bg-white dark:bg-[#10131b] border border-zinc-200/90 dark:border-white/10 shadow-lg dark:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5 hover:scale-[1.01] hover:border-emerald-500/40 dark:hover:border-emerald-500/30 overflow-hidden ${className}`}
    >
      {/* 1. Browser Frame Mockup Showcase Container */}
      <div className="relative p-3.5 sm:p-5 pb-0 bg-gradient-to-b from-zinc-100/60 via-zinc-50/30 to-transparent dark:from-zinc-900/40 dark:via-zinc-950/20 dark:to-transparent">
        <BrowserMockup
          src={image}
          alt={title}
          url={previewUrl}
          title={title}
          aspectRatio={aspectRatio}
          onImageClick={onOpenPreview ? () => onOpenPreview(project) : undefined}
        />
      </div>

      {/* 2. Project Card Content Area */}
      <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* Top Row: Badge & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            {isFeatured ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500 text-black shadow-md shadow-emerald-500/20 shrink-0">
                <Sparkles className="w-3 h-3" />
                Featured Flagship
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 shrink-0">
                {projectType}
              </span>
            )}

            <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
                {location}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-emerald-500 shrink-0" />
                {period}
              </span>
            </div>
          </div>

          {/* Title & Role */}
          <div className="mb-3">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
              <DecryptedText text={title} speed={25} animateOn="hover" />
            </h3>
            <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
              {role} <span className="text-zinc-400 dark:text-zinc-600">/</span> {projectType}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
            {tagline}
          </p>

          {/* Points / Deliverables */}
          {points.length > 0 && (
            <ul className="space-y-2 mb-6">
              {points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"
                >
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer Area: Tech Stack & Actions */}
        <div className="pt-4 border-t border-zinc-200/80 dark:border-white/5 mt-auto flex flex-col gap-4">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 truncate">
              {previewUrl}
            </span>

            <div className="flex items-center gap-2">
              {links?.repo && links.repo !== "#" && (
                <a
                  href={links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition-colors"
                  title="View Repository"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {links?.demo && links.demo !== "#" && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-black shadow-sm transition-all"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
