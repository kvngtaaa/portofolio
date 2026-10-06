import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "../../data/portfolioData";
import SpotlightCard from "../reactbits/SpotlightCard";
import DecryptedText from "../reactbits/DecryptedText";
import { Terminal, Activity, Cpu, Wifi, ShieldAlert, Play, CornerDownLeft } from "lucide-react";
import { useSound } from "../../context/SoundContext";

export default function SystemMetrics() {
  const { playClick } = useSound();
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState([
    { type: "system", text: "Genta OS [Version 2026.4.1] — DARWIN_X64_STABLE" },
    { type: "system", text: "Type 'help' or click quick commands to inspect telemetry." }
  ]);
  const terminalBottomRef = useRef(null);

  const quickCommands = ["status", "skills", "projects", "contact", "clear"];

  const handleCommand = (cmd) => {
    playClick();
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs = [...terminalLogs, { type: "user", text: `> ${cmd}` }];

    if (cleanCmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    }

    if (cleanCmd === "help") {
      newLogs.push({
        type: "response",
        text: "Available commands:\n- status    : Print system load and runtime telemetry\n- skills    : List primary neural & fullstack frameworks\n- projects  : Overview of flagship repositories\n- contact   : Display direct communication channels\n- clear     : Wipe terminal buffer"
      });
    } else if (cleanCmd === "status") {
      newLogs.push({
        type: "response",
        text: `STATUS: ONLINE | LATENCY: 14MS | CPU_LOAD: 23% | MEMORY: 41.2% | LOCATION: JAKARTA_ID`
      });
    } else if (cleanCmd === "skills") {
      newLogs.push({
        type: "response",
        text: "CORE ARSENAL:\n[AI/ML] PyTorch, TensorFlow, LangChain, YOLOv8, ChromaDB\n[WEB] React 19, Next.js 14, TypeScript, Tailwind CSS\n[BACKEND] Python FastAPI, Go Gin, Node.js, PostgreSQL, Docker"
      });
    } else if (cleanCmd === "projects") {
      newLogs.push({
        type: "response",
        text: "FLAGSHIP REPOSITORIES:\n1. Creative Portfolio (React 19 + ReactBits Shaders)\n2. SNBTIn EdTech (10,000+ Active Students)\n3. TerraFlow Precision IoT (Go + ESP32 Nodes)\n4. DocsInsight RAG (Air-gapped Private Vector Search)"
      });
    } else if (cleanCmd === "contact") {
      newLogs.push({
        type: "response",
        text: `DIRECT DISPATCH: genta.engineer@gmail.com\nGITHUB: https://github.com/Arfazrll\nLINKEDIN: https://linkedin.com/in/syahril-arfian-almazril`
      });
    } else {
      newLogs.push({
        type: "error",
        text: `Unknown command '${cleanCmd}'. Type 'help' for available commands.`
      });
    }

    setTerminalLogs(newLogs);
    setTerminalInput("");
  };

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs]);

  return (
    <section
      id="telemetry"
      className="relative py-28 px-6 md:px-16 max-w-[105rem] mx-auto z-10 select-none"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sky-400" />
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-sky-500 dark:text-sky-400">
            ENGINEERING METRICS // INFRASTRUCTURE & PERFORMANCE DATA
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          System Status & Observability
        </h2>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
          Live simulated telemetry metrics representing computing throughput, latency thresholds,
          and weekly development sprint intensity.
        </p>
      </div>

      {/* Top Telemetry Ticker Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 font-mono text-xs">
        <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-zinc-500 uppercase">LATENCY</span>
          <span className="text-emerald-500 font-bold flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5" />
            {portfolioData.metrics.latency}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-zinc-500 uppercase">SYSTEM LOAD</span>
          <span className="text-sky-400 font-bold">STABLE</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-zinc-500 uppercase">CORE ENGINE</span>
          <span className="text-purple-400 font-bold">DARWIN_X64</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-zinc-500 uppercase">STATUS</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            ONLINE
          </span>
        </div>
      </div>

      {/* Interactive Telemetry Terminal & Weekly Velocity Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive CLI Terminal */}
        <div className="lg:col-span-7 rounded-2xl border border-zinc-300 dark:border-white/10 bg-zinc-950 text-white overflow-hidden shadow-2xl">
          {/* Terminal Window Header */}
          <div className="px-5 py-3.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500/80" />
              <span className="size-3 rounded-full bg-yellow-500/80" />
              <span className="size-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-[11px] text-zinc-400">
                genta@core-node: ~/telemetry
              </span>
            </div>
            <Terminal className="w-4 h-4 text-zinc-500" />
          </div>

          {/* Terminal Output Stream */}
          <div className="p-5 font-mono text-xs space-y-2.5 h-64 overflow-y-auto custom-scrollbar">
            {terminalLogs.map((log, idx) => (
              <div
                key={idx}
                className={
                  log.type === "user"
                    ? "text-sky-400 font-semibold"
                    : log.type === "error"
                    ? "text-rose-400"
                    : log.type === "response"
                    ? "text-zinc-300 whitespace-pre-wrap pl-2 border-l border-zinc-700"
                    : "text-zinc-500"
                }
              >
                {log.text}
              </div>
            ))}
            <div ref={terminalBottomRef} />
          </div>

          {/* Quick Command Suggestions */}
          <div className="px-5 py-2.5 bg-zinc-900/60 border-t border-zinc-800 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase mr-1">
              RUN:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 hover:bg-sky-500 hover:text-white text-zinc-400 transition-colors cursor-pointer"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(terminalInput);
            }}
            className="px-5 py-3 bg-zinc-900 border-t border-zinc-800 flex items-center gap-3"
          >
            <span className="text-sky-400 font-mono text-xs font-bold">$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type command here..."
              className="w-full bg-transparent font-mono text-xs text-white placeholder-zinc-600 focus:outline-none"
            />
            <button
              type="submit"
              className="p-1 rounded text-zinc-400 hover:text-sky-400 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Weekly Coding Effort Bar Chart */}
        <div className="lg:col-span-5">
          <SpotlightCard
            className="p-6 md:p-8"
            spotlightColor="rgba(56, 189, 248, 0.15)"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">
                  WEEKLY ACTIVITY
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  Coding Sprint Velocity
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                48 hrs / wk
              </span>
            </div>

            {/* Weekly Bars */}
            <div className="flex items-end justify-between gap-3 h-44 pt-4 border-b border-zinc-200 dark:border-white/10 pb-3">
              {portfolioData.metrics.weeklyActivity.map((day) => {
                const heightPercent = (day.hours / 12) * 100;
                return (
                  <div
                    key={day.day}
                    className="flex-1 flex flex-col items-center gap-2 group h-full justify-end"
                  >
                    <div className="text-[10px] font-mono text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {day.hours}h
                    </div>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-sky-600 to-sky-400 group-hover:from-sky-500 group-hover:to-cyan-300 transition-all duration-300 shadow-md shadow-sky-500/20"
                    />
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">
                      {day.day}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Avg Efficiency: 94.6%</span>
              <span className="text-sky-400">Total Commits: 98</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
