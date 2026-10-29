import React, { useState } from "react";
import { Lock, Globe, AlertCircle } from "lucide-react";

/**
 * BrowserMockup - Minimalist macOS-Style Browser Frame Component
 * 
 * Criteria:
 * - Minimalist browser window header with macOS 3 traffic dots (red, yellow, green)
 * - Modern styling: rounded-xl / rounded-2xl, ultra-thin border, elegant shadow
 * - Responsive: image scales seamlessly without overflow or clipping
 * - Graceful fallback if image is missing or loading fails
 */
export default function BrowserMockup({
  src = "/assets/aga-web.png",
  alt = "Project Preview Screenshot",
  url = "aga-smartfarming.id",
  title = "",
  className = "",
  imageClassName = "",
  aspectRatio = "aspect-[16/10]",
  priority = false,
  onImageClick = null,
}) {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Normalize display URL
  const cleanUrl = url
    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "local.preview";

  return (
    <div
      className={`w-full overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c0f17] shadow-lg dark:shadow-2xl transition-all duration-300 group/mockup ${className}`}
    >
      {/* macOS Minimalist Browser Header Bar */}
      <div className="relative px-3.5 py-2.5 sm:py-3 bg-zinc-100/95 dark:bg-[#131722] border-b border-zinc-200/90 dark:border-white/10 flex items-center justify-between select-none">
        {/* 3 Traffic Dots (macOS Style: Red, Yellow, Green) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span
            className="size-2.5 sm:size-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-xs transition-transform hover:scale-110"
            title="Close"
          />
          <span
            className="size-2.5 sm:size-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-xs transition-transform hover:scale-110"
            title="Minimize"
          />
          <span
            className="size-2.5 sm:size-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-xs transition-transform hover:scale-110"
            title="Maximize"
          />
        </div>

        {/* Center: Simulated Minimalist Browser Address Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/90 dark:bg-[#090b10] border border-zinc-200/80 dark:border-white/5 text-[10px] sm:text-[11px] font-mono text-zinc-500 dark:text-zinc-400 max-w-[190px] sm:max-w-xs md:max-w-sm w-full mx-2 sm:mx-auto truncate shadow-2xs">
          <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500 shrink-0" />
          <span className="truncate tracking-tight font-medium text-zinc-700 dark:text-zinc-300">
            https://{cleanUrl}
          </span>
        </div>

        {/* Right Status / Action Icon */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
          <Globe className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
        </div>
      </div>

      {/* Browser Viewport with Responsive Image Container */}
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden bg-zinc-900 flex items-center justify-center cursor-pointer`}
        onClick={onImageClick}
      >
        {!imageError ? (
          <>
            {/* Loading shimmer skeleton while image is caching */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 animate-pulse flex items-center justify-center">
                <span className="text-xs font-mono text-zinc-500">Loading preview...</span>
              </div>
            )}

            {/* The Actual Screenshot Image */}
            <img
              src={src}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              onLoad={() => setIsLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover object-top block transition-all duration-500 ease-out group-hover/mockup:scale-[1.025] ${
                isLoaded ? "opacity-100" : "opacity-0"
              } ${imageClassName}`}
            />

            {/* Subtle Gradient Vignette & Sheen Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover/mockup:opacity-40 transition-opacity duration-300" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
          </>
        ) : (
          /* Graceful Fallback if image file is not found */
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-zinc-950 text-zinc-400">
            <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <AlertCircle className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-200 mb-1">
              {title || alt}
            </p>
            <p className="text-[11px] font-mono text-zinc-500 max-w-xs">
              Taruh screenshot di <span className="text-emerald-400 font-bold">{src}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
