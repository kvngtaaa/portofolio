import React, { useState, useEffect, useRef } from "react";

/**
 * ReactBits - TrueFocus Component
 * Focuses on words dynamically with a bounding frame and background blur.
 */
export default function TrueFocus({
  sentence = "Applied AI • Scalable Data • Systems",
  manualMode = false,
  blurAmount = 4,
  borderColor = "#38bdf8",
  glowColor = "rgba(56, 189, 248, 0.4)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1.2
}) {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (manualMode) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const activeWordRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeWordRect.left - parentRect.left - 4,
      y: activeWordRect.top - parentRect.top - 2,
      width: activeWordRect.width + 8,
      height: activeWordRect.height + 4
    });
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex flex-wrap items-center justify-center gap-2 p-2 select-none"
    >
      {/* Dynamic Animated Focus Box */}
      <div
        className="pointer-events-none absolute rounded-lg border-2 transition-all duration-300 ease-out z-10"
        style={{
          transform: `translate(${focusRect.x}px, ${focusRect.y}px)`,
          width: `${focusRect.width}px`,
          height: `${focusRect.height}px`,
          borderColor: borderColor,
          boxShadow: `0 0 15px ${glowColor}, inset 0 0 10px ${glowColor}`
        }}
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
      </div>

      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            onMouseEnter={() => {
              if (manualMode) setCurrentIndex(index);
            }}
            className={`cursor-pointer text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
              isActive
                ? "text-sky-400 dark:text-sky-300 filter-none opacity-100 scale-105"
                : "text-zinc-500 dark:text-zinc-400 opacity-60"
            }`}
            style={{
              filter: isActive ? "none" : `blur(${blurAmount * 0.4}px)`
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
