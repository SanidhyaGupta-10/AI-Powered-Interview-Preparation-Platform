"use client";

import { motion, AnimatePresence } from "framer-motion";

// ─── Glass Card Component ──────────────────────────────────
function GlassCard(
  { children, className = "" }: { children: React.ReactNode; className?: string }
) {
  return (
    <div
      className={`
        rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl
        shadow-lg shadow-white/5 ${className}
      `}
    >
      {children}
    </div>
  );
}

// ─── Main UI Component ────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-5 pb-5 relative">

      {/* ── Background Grid ── */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Header ── */}
      <motion.div
        className="text-center mb-10 max-w-xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-semibold uppercase tracking-widest">
          AI Interview Engine
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
          Land Your{" "}
          <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Dream Job
          </span>
        </h1>
        <p className="text-white/40 text-sm">
          Upload your resume, describe the role, and get a personalized interview report.
        </p>
      </motion.div>

      {/* ── Inputs Grid ── */}
      <motion.div
        className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Job Description */}
        <GlassCard className="h-full p-5 flex flex-col">
          <h2 className="text-white font-semibold text-sm mb-2">Job Description</h2>
          <textarea
            rows={8}
            placeholder="Paste the full job listing..."
            className="w-full bg-transparent text-white/70 placeholder-white/30 text-sm rounded-lg p-2 resize-none outline-none border border-white/10 focus:bg-white/10 focus:border-white/20 font-mono"
          />
        </GlassCard>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {/* Resume Upload */}
          <GlassCard className="p-5">
            <h2 className="text-white font-semibold text-sm mb-2">Upload Resume</h2>
            <button
              className="w-full py-4 px-3 border border-dashed border-white/10 rounded-xl bg-white/5 text-white/30 hover:bg-white/10 hover:text-white/60 transition-all text-sm"
            >
              Drop PDF or click to browse
            </button>
          </GlassCard>

          {/* Self Description */}
          <GlassCard className="flex-1 p-5 flex flex-col">
            <h2 className="text-white font-semibold text-sm mb-2">About You</h2>
            <textarea
              rows={5}
              placeholder="Your background & skills..."
              className="w-full bg-transparent text-white/70 placeholder-white/30 text-sm rounded-lg p-2 resize-none outline-none border border-white/10 focus:bg-white/10 focus:border-white/20 font-mono"
            />
          </GlassCard>
        </div>
      </motion.div>

      {/* Generate Button */}
      <motion.button
        className="mt-6 w-full max-w-sm h-12 rounded-xl text-sm font-semibold bg-linear-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all"
      >
        Generate Interview Report
      </motion.button>
    </main>
  );
}