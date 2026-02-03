"use client";
import React from 'react';

export default function MetricsPanel() {
    return (
        <section className="glass-panel flex flex-col gap-6 p-6 h-full">
            <h2 className="font-mono text-xs text-muted uppercase tracking-widest">Live Telemetry</h2>

            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted">Predictive Accuracy</span>
                        <span className="font-mono text-neon-cyan">--.--%</span>
                    </div>
                    <div className="w-full bg-black/40 h-1 rounded overflow-hidden border border-white/5">
                        <div className="bg-cyan h-full w-0" style={{ background: 'var(--neon-cyan)' }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted">Demographic Parity</span>
                        <span className="font-mono text-neon-cyan">--.--</span>
                    </div>
                    <div className="w-full bg-black/40 h-1 rounded overflow-hidden border border-white/5">
                        <div className="bg-cyan h-full w-0" style={{ background: 'var(--neon-cyan)' }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted">Disparate Impact</span>
                        <span className="font-mono text-muted">--.--</span>
                    </div>
                    <div className="w-full bg-black/40 h-1 rounded overflow-hidden border border-white/5">
                        <div className="bg-gray-600 h-full w-0"></div>
                    </div>
                </div>
            </div>

            <div className="mt-auto border-t border-white/10 pt-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-mono text-xs text-muted text-gray-500">EVENT LOG</h3>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px #22c55e' }}></span>
                </div>
                <div className="h-48 overflow-y-auto font-mono text-[10px] text-gray-400 space-y-2 p-3 bg-black/40 rounded border border-white/5" style={{ fontSize: '10px' }}>
                    <p className="border-l-2 border-green-500 pl-2 text-gray-300">
                        <span className="text-green-500 opacity-50 block text-[9px]">10:00:23 AM</span>
                        System initialized.
                    </p>
                    <p className="pl-2 border-l-2 border-transparent opacity-50">
                        Waiting for data injection...
                    </p>
                </div>
            </div>
        </section>
    );
}
