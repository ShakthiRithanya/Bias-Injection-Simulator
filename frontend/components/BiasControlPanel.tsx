"use client";
import React, { useState } from 'react';

export default function BiasControlPanel() {
    const [samplingBias, setSamplingBias] = useState(0);
    const [labelBias, setLabelBias] = useState(0);

    return (
        <section className="glass-panel flex flex-col gap-6 p-6 h-full">
            <header>
                <h1 className="text-[var(--neon-cyan)] font-mono text-xl mb-2 leading-tight">
                    BIAS INJECTION<br />SIMULATOR
                </h1>
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

                {/* Sampling Bias Control */}
                <div className="p-4 bg-black/20 rounded border border-white/5 hover:border-white/20 transition">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold">Sampling Bias</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                    <input
                        type="range"
                        min="0" max="100"
                        value={samplingBias}
                        onChange={(e) => setSamplingBias(Number(e.target.value))}
                        className="w-full accent-[var(--neon-cyan)] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                        <span>CLEAN</span>
                        <span>CRITICAL</span>
                    </div>
                </div>

                {/* Label Bias Control */}
                <div className="p-4 bg-black/20 rounded border border-white/5 hover:border-white/20 transition">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold">Label Corruption</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                    <input
                        type="range"
                        min="0" max="100"
                        value={labelBias}
                        onChange={(e) => setLabelBias(Number(e.target.value))}
                        className="w-full accent-[var(--neon-pink)] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </div>

            <button className="mt-auto btn-primary text-center">
                INITIATE EXPERIMENT
            </button>
        </section>
    );
}
