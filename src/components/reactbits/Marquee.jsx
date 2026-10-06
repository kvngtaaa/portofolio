import React from "react";

/**
 * ReactBits - InfiniteScroll / Marquee Component
 * Seamlessly loops words or tech tags across screen with pause on hover.
 */
export default function Marquee({
  items = [],
  direction = "left",
  speed = 25,
  separator = "•",
  className = "",
  itemClassName = ""
}) {
  const content = items.join(`  ${separator}  `);

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-3 group ${className}`}
    >
      <div
        className={`flex w-fit whitespace-nowrap will-change-transform ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{
          animationDuration: `${speed}s`
        }}
      >
        <span className={`inline-block font-mono text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-400 px-4 ${itemClassName}`}>
          {content}  {separator}  {content}
        </span>
        <span className={`inline-block font-mono text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-400 px-4 ${itemClassName}`}>
          {content}  {separator}  {content}
        </span>
      </div>
    </div>
  );
}
