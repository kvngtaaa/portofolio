import React from "react";

/**
 * ReactBits - StarBorder Component
 * Renders interactive CTA buttons with a rotating specular gradient border beam.
 */
export default function StarBorder({
  as: Component = "button",
  className = "",
  color = "#38bdf8",
  speed = "5s",
  children,
  onClick,
  ...props
}) {
  return (
    <Component
      onClick={onClick}
      className={`relative inline-block py-[1px] overflow-hidden rounded-full cursor-pointer group ${className}`}
      {...props}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      />
      <div className="relative z-1 border border-zinc-300/40 dark:border-white/10 bg-zinc-900/90 dark:bg-black/90 text-white text-xs md:text-sm font-semibold tracking-wider uppercase text-center rounded-full px-6 py-3 backdrop-blur-md transition-all duration-300 group-hover:bg-zinc-800/90 group-hover:scale-[1.02] flex items-center justify-center gap-2">
        {children}
      </div>
    </Component>
  );
}
