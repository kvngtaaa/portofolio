import React, { useRef, useState } from "react";

/**
 * ReactBits - TiltedCard Component
 * Implements 3D card tilt physics responding smoothly to mouse pointer movements.
 */
export default function TiltedCard({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
  glare = true,
  onClick
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransform({
      rotateX,
      rotateY,
      scale,
      glareX,
      glareY,
      glareOpacity: 0.18
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0
    });
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`inline-block w-full h-full ${className}`}
      onClick={onClick}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${transform.scale}, ${transform.scale}, ${transform.scale})`,
          transition: "transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)"
        }}
        className="relative h-full overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-[#12151e]/95 backdrop-blur-md will-change-transform shadow-md dark:shadow-2xl dark:shadow-black/60 transition-colors duration-300 hover:border-emerald-500/40"
      >
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
            style={{
              opacity: transform.glareOpacity,
              background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
