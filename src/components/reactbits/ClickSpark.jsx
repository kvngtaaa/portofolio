import React, { useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

/**
 * ReactBits - ClickSpark Component
 * Renders an interactive canvas that bursts glowing sparks at the click location.
 */
export default function ClickSpark({
  sparkColor = null,
  sparkSize = 10,
  sparkRadius = 24,
  sparkCount = 8,
  duration = 450,
  extraScale = 1.3
}) {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const color = sparkColor || (isDark ? "#38bdf8" : "#0284c7");

      const newSparks = [];
      for (let i = 0; i < sparkCount; i++) {
        const angle = (i * 2 * Math.PI) / sparkCount + (Math.random() * 0.2 - 0.1);
        newSparks.push({
          x,
          y,
          angle,
          startTime: performance.now(),
          color
        });
      }
      sparksRef.current.push(...newSparks);
    };

    window.addEventListener("pointerdown", handleClick);

    const render = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = time - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out

        const distance = ease * sparkRadius * extraScale;
        const currentX = spark.x + Math.cos(spark.angle) * distance;
        const currentY = spark.y + Math.sin(spark.angle) * distance;

        const currentSize = sparkSize * (1 - progress);
        const alpha = 1 - progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, currentY, Math.max(0.5, currentSize), 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = spark.color;
        ctx.fill();
        ctx.restore();

        return true;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, extraScale, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
