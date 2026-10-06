import React, { useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

/**
 * ReactBits - ParticlesBackground Component
 * Renders ambient floating nodes and atmospheric light cones inspired by the reference portfolio.
 */
export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 28000), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      const dotColor = isDark ? "255, 255, 255" : "15, 23, 42";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.alpha * 0.4})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${dotColor}, ${(1 - dist / 100) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial dot matrix overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#888_0.6px,_transparent_0.6px)] dark:bg-[radial-gradient(circle,_#555_0.6px,_transparent_0.6px)] opacity-[0.16] [background-size:28px_28px]" />

      {/* Atmospheric Spotlight Light Cones (Dual angled headlights like reference site) */}
      <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none opacity-40 dark:opacity-60">
        {/* Left Light Cones */}
        <div
          style={{
            transform: "translateY(-300px) rotate(-45deg)",
            background:
              "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(217, 91%, 60%, 0.15) 0, hsla(217, 91%, 60%, 0.03) 50%, transparent 80%)",
            width: "600px",
            height: "1400px"
          }}
          className="absolute top-0 left-0 animate-pulse-slow"
        />
        {/* Right Light Cones */}
        <div
          style={{
            transform: "translateY(-300px) rotate(45deg)",
            background:
              "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(271, 91%, 65%, 0.12) 0, hsla(271, 91%, 65%, 0.02) 50%, transparent 80%)",
            width: "600px",
            height: "1400px"
          }}
          className="absolute top-0 right-0 animate-pulse-slow"
        />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
