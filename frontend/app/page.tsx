import Image from "next/image";

export default function Home() {
  return (
    <main className="dashboard-grid">
      {/* LEFT PANEL: INPUT & CONTROLS */}
      <section className="glass-panel flex flex-col gap-6" style={{ padding: '1.5rem' }}>
        <header>
          <h1 className="text-neon font-mono text-xl mb-2">BIAS INJECTION<br />SIMULATOR</h1>
          <div className="h-0.5 w-20 bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)]"></div>
        </header>

        <div className="space-y-4">
          <h2 className="font-mono text-xs text-gray-400 uppercase tracking-widest">Dataset Ingestion</h2>
          <div className="border border-dashed border-gray-700 bg-black/20 rounded-lg p-8 text-center cursor-pointer hover:bg-white/5 transition group">
            <div className="text-gray-500 group-hover:text-white transition">drag_and_drop.csv</div>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <h2 className="font-mono text-xs text-gray-400 uppercase tracking-widest">Injection Protocols</h2>

          {/* Toggle 1 */}
          <div className="p-4 bg-black/20 rounded border border-white/5 hover:border-white/20 transition">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold">Sampling Bias</span>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
            <input type="range" className="w-full accent-[var(--neon-cyan)] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
              <span>CLEAN</span>
              <span>CRITICAL</span>
            </div>
          </div>

          {/* Toggle 2 */}
          <div className="p-4 bg-black/20 rounded border border-white/5 hover:border-white/20 transition">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold">Label Corruption</span>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
            <input type="range" className="w-full accent-[var(--neon-pink)] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
          </div>
        </div>

        <button className="mt-auto btn-primary text-center">
          INITIATE EXPERIMENT
        </button>
      </section>

      {/* CENTER PANEL: VISUALIZATION CORE */}
      <section className="glass-panel relative flex flex-col items-center justify-center">
        <div className="absolute top-4 left-4 font-mono text-xs text-[var(--neon-cyan)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-pulse"></span>
          SYSTEM_STATUS: STANDBY
        </div>

        {/* Placeholder for 3D View - The "Core" */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-64 h-64 border border-[var(--glass-border)] bg-black/40 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,243,255,0.1)] backdrop-blur-sm">
            <div className="text-center">
              <span className="font-mono text-xs tracking-[0.2em] text-gray-400 block mb-1">INTEGRITY</span>
              <span className="font-mono text-4xl text-white font-bold">100%</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 font-mono text-xs text-gray-500">
          RENDER_ENGINE: PREPARING SCENE...
        </div>
      </section>

      {/* RIGHT PANEL: METRICS & LOGS */}
      <section className="glass-panel flex flex-col gap-6" style={{ padding: '1.5rem' }}>
        <h2 className="font-mono text-xs text-gray-400 uppercase tracking-widest">Live Telemetry</h2>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Predictive Accuracy</span>
              <span className="font-mono text-[var(--neon-cyan)]">--.--%</span>
            </div>
            <div className="w-full bg-gray-800 h-1 rounded overflow-hidden">
              <div className="bg-[var(--neon-cyan)] h-full w-0"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Demographic Parity</span>
              <span className="font-mono text-[var(--neon-cyan)]">--.--</span>
            </div>
            <div className="w-full bg-gray-800 h-1 rounded overflow-hidden">
              <div className="bg-[var(--neon-cyan)] h-full w-0"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Disparate Impact</span>
              <span className="font-mono text-gray-500">--.--</span>
            </div>
            <div className="w-full bg-gray-800 h-1 rounded overflow-hidden">
              <div className="bg-gray-600 h-full w-0"></div>
            </div>
          </div>
        </div>

        <div className="mt-auto border-t border-white/10 pt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-mono text-xs text-gray-500">EVENT LOG</h3>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          </div>
          <div className="h-32 overflow-y-auto font-mono text-[10px] text-gray-400 space-y-1 p-2 bg-black/40 rounded border border-white/5">
            <p className="border-l-2 border-green-500 pl-2 text-gray-300">System initialized.</p>
            <p className="pl-2.5">Waiting for data injection...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
