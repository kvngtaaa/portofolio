import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import TiltedCard from "../reactbits/TiltedCard";
import DecryptedText from "../reactbits/DecryptedText";
import { ArrowUpRight, ExternalLink, Sparkles, Layers } from "lucide-react";
import { Github } from "../common/BrandIcons";
import { useSound } from "../../context/SoundContext";

export default function Projects({ onSelectProject }) {
  const { playClick } = useSound();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Applied AI", "Web & Fullstack", "IoT & Systems"];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-16 max-w-[105rem] mx-auto z-10 select-none"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sky-400" />
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-sky-500 dark:text-sky-400">
              PORTFOLIO // FLAGSHIP PROJECTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Architecting Digital Reality
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            A curated showcase of technical innovation and creative engineering exploring
            Artificial Intelligence, Edge Computing, and Scalable Web Platforms.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-sky-500 text-white shadow-md font-bold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <TiltedCard
            key={project.id}
            maxTilt={8}
            scale={1.01}
            onClick={() => {
              playClick();
              onSelectProject(project);
            }}
            className="cursor-pointer h-full"
          >
            <div className="p-7 flex flex-col justify-between h-full group">
              <div>
                {/* Visual Header Image or Banner */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 border border-zinc-200 dark:border-white/10 bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-sky-400 border border-white/10">
                    {project.category}
                  </span>

                  {/* Corner Action Arrow */}
                  <div className="absolute top-3 right-3 size-9 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Subtitle floating at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-zinc-300 font-medium truncate">
                    {project.subtitle}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-sky-500 transition-colors mb-2">
                  <DecryptedText text={project.title} speed={25} animateOn="hover" />
                </h3>

                {/* Tagline */}
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                  {project.tagline}
                </p>
              </div>

              <div>
                {/* Performance / Metric Badges */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-white/5">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        {key}
                      </span>
                      <span className="text-xs font-mono font-bold text-sky-500 dark:text-sky-400">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-200/40 dark:border-white/5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </TiltedCard>
        ))}
      </div>
    </section>
  );
}
