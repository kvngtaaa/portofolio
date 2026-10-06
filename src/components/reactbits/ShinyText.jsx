import React from "react";

/**
 * ReactBits - ShinyText Component
 * Renders high-impact text with an animated shining metallic/crystalline reflection.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = ""
}) {
  return (
    <span
      className={`inline-block font-extrabold tracking-tighter bg-clip-text text-transparent ${
        disabled ? "text-foreground" : "shiny-text"
      } ${className}`}
      style={{
        animationDuration: `${speed}s`
      }}
    >
      {text}
    </span>
  );
}
