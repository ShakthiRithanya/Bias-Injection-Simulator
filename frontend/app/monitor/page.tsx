"use client";
import VisualizationCore from "@/components/VisualizationCore";
import MetricsPanel from "@/components/MetricsPanel";
import Link from "next/link";

export default function MonitorPage() {
    return (
        <div className="relative w-full h-full">
            <main className="dashboard-grid h-screen w-full relative z-10">
                <div className="col-span-1 md:col-span-1 h-full flex flex-col justify-between py-6">
                    <Link href="/inject" className="text-xs font-mono text-muted hover:text-white transition mb-4">
                        &lt; RECONFIGURE
                    </Link>

                    <div className="glass-panel p-6 flex-1">
                        <h2 className="font-mono text-xs text-muted uppercase tracking-widest mb-6">Execution Log</h2>
                        <div className="font-mono text-[10px] space-y-2 text-gray-500">
                            <p className="text-green-500">System initialized.</p>
                            <p>Dataset loaded: 14.5MB</p>
                            <p>Sampling bias: 24%</p>
                            <p>Label noise: 12%</p>
                            <p className="animate-pulse text-neon-cyan">TRAINING_IN_PROGRESS...</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <VisualizationCore />
                </div>

                <div className="col-span-1">
                    <MetricsPanel />
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-pink-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-glow" style={{ boxShadow: '0 0 10px #22c55e' }}></div>
                </div>
            </main>
        </div>
    );
}
