import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "../../data/portfolioData";
import { X, Send, Bot, User } from "lucide-react";
import { useSound } from "../../context/SoundContext";

export default function AIAssistant({ isOpen, onClose }) {
  const { playClick, playChime } = useSound();
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hi! I'm Genta's Autonomous AI Agent. 👋\n\nI can answer technical questions about Genta's:\n• Core Neural & Fullstack Skills\n• Flagship Engineering Projects\n• Research & Work Experience\n• Contact & Collaboration Availability\n\nWhat would you like to explore?`
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestions = [
    "What are Genta's main skills?",
    "Tell me about the best project",
    "What is the work experience?",
    "Is Genta open for hiring?"
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    playClick();
    const userMsg = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate intelligent agent reasoning
    setTimeout(() => {
      let matchedReply = null;
      const lower = query.toLowerCase();

      for (const item of portfolioData.botResponses) {
        if (item.keywords.some((kw) => lower.includes(kw))) {
          matchedReply = item.reply;
          break;
        }
      }

      if (!matchedReply) {
        matchedReply = `Genta is an AI & Software Engineer based in Jakarta, specializing in PyTorch, Computer Vision, Next.js, and Go microservices. You can ask me about projects (like SNBTIn, TerraFlow, DocsInsight), skills, or email Genta directly at ${portfolioData.personal.email}.`;
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: matchedReply }]);
      playChime();
    }, 600);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-l border-zinc-200 dark:border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Genta AI Agent // Autonomous
            </h3>
            <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Online & Ready
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-500 hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Chat Messages Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar text-xs">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${
              msg.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`size-6 rounded-lg flex items-center justify-center shrink-0 text-white ${
                msg.sender === "user" ? "bg-sky-500" : "bg-zinc-800"
              }`}
            >
              {msg.sender === "user" ? (
                <User className="w-3.5 h-3.5" />
              ) : (
                <Bot className="w-3.5 h-3.5 text-sky-400" />
              )}
            </div>

            <div
              className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                msg.sender === "user"
                  ? "bg-sky-500 text-white rounded-tr-none font-medium"
                  : "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 rounded-tl-none font-sans"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-zinc-400 pl-8">
            <span className="size-2 rounded-full bg-sky-400 animate-bounce" />
            <span
              className="size-2 rounded-full bg-sky-400 animate-bounce"
              style={{ animationDelay: "0.15s" }}
            />
            <span
              className="size-2 rounded-full bg-sky-400 animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      <div className="p-3 border-t border-zinc-200/50 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-wrap gap-1.5">
        {suggestions.map((sug) => (
          <button
            key={sug}
            onClick={() => handleSend(sug)}
            className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-zinc-200/70 dark:bg-zinc-800/70 hover:bg-sky-500 hover:text-white text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          >
            {sug}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-zinc-200 dark:border-white/10 flex items-center gap-2 bg-white dark:bg-zinc-950"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 px-3 py-2 text-xs rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-foreground placeholder-zinc-500 focus:outline-none focus:border-sky-500"
        />
        <button
          type="submit"
          className="p-2 rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
