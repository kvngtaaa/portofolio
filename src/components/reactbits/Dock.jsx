import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * ReactBits - Dock Component
 * Interactive macOS-style floating dock with smooth magnification physics.
 */
function DockItem({ mouseX, item, activeId, onClick }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-120, 0, 120], [42, 60, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 14 });

  const isActive = activeId === item.id;

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(item)}
      className="relative aspect-square rounded-2xl flex items-center justify-center cursor-pointer group transition-colors"
    >
      <div
        className={`w-full h-full rounded-2xl flex items-center justify-center transition-all duration-200 border ${
          isActive
            ? "bg-sky-500/20 text-sky-400 border-sky-400/40 shadow-lg shadow-sky-500/20"
            : "bg-zinc-800/60 dark:bg-zinc-900/60 text-zinc-400 hover:text-white border-zinc-700/50 hover:border-zinc-500/60 hover:bg-zinc-700/60"
        }`}
      >
        <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
      </div>

      {/* Tooltip badge */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 5 }}
          className="absolute -top-9 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider font-semibold whitespace-nowrap bg-zinc-900/90 dark:bg-zinc-950/95 text-white border border-zinc-700 shadow-xl pointer-events-none z-50 backdrop-blur-md"
        >
          {item.label}
        </motion.div>
      )}

      {/* Active Indicator Dot */}
      {isActive && (
        <span className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
      )}
    </motion.div>
  );
}

export default function Dock({ items, activeId, onItemClick, className = "" }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-3xl bg-zinc-950/75 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className}`}
    >
      {items.map((item) => (
        <DockItem
          key={item.id}
          mouseX={mouseX}
          item={item}
          activeId={activeId}
          onClick={onItemClick}
        />
      ))}
    </motion.div>
  );
}
