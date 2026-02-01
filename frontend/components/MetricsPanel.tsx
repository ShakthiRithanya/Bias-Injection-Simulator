"use client";
import React from 'react';

export default function MetricsPanel() {
    return (
        <section className="glass-panel flex flex-col gap-6 p-6 h-full">
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
    );
}
