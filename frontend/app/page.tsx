"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-white">

      {/* 3D Background removed - provided by layout */}

      {/* Main Content Card */}
      <main className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center gap-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            System Online: v4.2
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 pb-2">
            BIAS SIMULATOR
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Advanced AI Forensics & Adversarial Stress Testing Platform.
            <br />
            Analyze neural pathways for algorithmic prejudice.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          <FeatureCard
            title="INGEST"
            subtitle="Upload Datasets"
            icon="📁"
            color="group-hover:text-cyan-400"
            borderColor="group-hover:border-cyan-500/50"
            href="/dataset"
          />
          <FeatureCard
            title="INJECT"
            subtitle="Apply Noise"
            icon="⚡"
            color="group-hover:text-pink-400"
            borderColor="group-hover:border-pink-500/50"
            href="/inject"
          />
          <FeatureCard
            title="AUDIT"
            subtitle="View Telemetry"
            icon="📊"
            color="group-hover:text-purple-400"
            borderColor="group-hover:border-purple-500/50"
            href="/monitor"
          />
        </motion.div>

        {/* Big Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-md"
        >
          <Link href="/dataset" className="block w-full">
            <button className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xl rounded-xl tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6)]">
              Initiate Protocol
            </button>
          </Link>
        </motion.div>

      </main>

      {/* Footer */}
      <div className="absolute bottom-6 flex gap-6 text-xs text-slate-600 font-mono uppercase tracking-widest">
        <span>Secure Connection</span>
        <span>•</span>
        <span>Encrypted</span>
        <span>•</span>
        <span>Latency: 14ms</span>
      </div>

    </div>
  );
}

function FeatureCard({ title, subtitle, icon, color, borderColor, href }: any) {
  return (
    <Link href={href} className="flex-1">
      <div className={`h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group hover:bg-white/10 ${borderColor} cursor-pointer`}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className={`text-2xl font-bold text-white mb-2 transition-colors ${color}`}>{title}</h3>
        <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">{subtitle}</p>
      </div>
    </Link>
  )
}
