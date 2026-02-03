"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BiasControlPanelProps {
    mode?: 'full' | 'upload' | 'inject';
}

export default function BiasControlPanel({ mode = 'full' }: BiasControlPanelProps) {
    const [samplingBias, setSamplingBias] = useState(0);
    const [labelBias, setLabelBias] = useState(0);
    const router = useRouter();

    return (
        <section className="glass-panel flex flex-col gap-6 p-6 h-full max-w-2xl mx-auto w-full">
            <header>
                <h1 className="text-neon-cyan font-mono text-xl mb-2 leading-tight">
                    {mode === 'upload' && 'STEP 01: INGESTION'}
                    {mode === 'inject' && 'STEP 02: INJECTION'}
                    {mode === 'full' && 'BIAS CONTROL'}
                </h1>
                <div className="h-0.5 w-20 bg-cyan shadow-glow" style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 10px var(--neon-cyan)' }}></div>
            </header>

            {(mode === 'full' || mode === 'upload') && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="font-mono text-xs text-muted uppercase tracking-widest">Dataset Ingestion</h2>
                    <div className="control-card border-dashed border border-gray-700 bg-black/20 text-center cursor-pointer hover:bg-white/5 group h-48 flex flex-col items-center justify-center">
                        <div className="text-muted group-hover:text-white transition flex flex-col items-center justify-center p-4">
                            <span className="text-4xl mb-2 opacity-50">+</span>
                            <span className="font-mono text-xs tracking-widest">DRAG_AND_DROP.csv</span>
                        </div>
                    </div>
                </div>
            )}

            {(mode === 'full' || mode === 'inject') && (
                <div className="space-y-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    <h2 className="font-mono text-xs text-muted uppercase tracking-widest">Injection Protocols</h2>

                    {/* Sampling Bias Control */}
                    <div className="control-card">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-semibold">Sampling Bias</span>
                            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 5px var(--neon-cyan)' }}></div>
                        </div>
                        <input
                            type="range"
                            min="0" max="100"
                            value={samplingBias}
                            onChange={(e) => setSamplingBias(Number(e.target.value))}
                            className="range-cyan"
                        />
                        <div className="flex justify-between text-xs text-muted mt-2 font-mono">
                            <span>CLEAN</span>
                            <span className="text-neon-cyan">CRITICAL</span>
                        </div>
                    </div>

                    {/* Label Bias Control */}
                    <div className="control-card">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-semibold">Label Corruption</span>
                            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--neon-pink)', boxShadow: '0 0 5px var(--neon-pink)' }}></div>
                        </div>
                        <input
                            type="range"
                            min="0" max="100"
                            value={labelBias}
                            onChange={(e) => setLabelBias(Number(e.target.value))}
                            className="range-pink"
                        />
                        <div className="flex justify-between text-xs text-muted mt-2 font-mono">
                            <span>CLEAN</span>
                            <span className="text-neon-pink">FATAL</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-auto pt-6">
                {mode === 'upload' && (
                    <Link href="/inject">
                        <button className="btn-primary text-center">
                            PROCEED TO INJECTION &gt;&gt;
                        </button>
                    </Link>
                )}

                {mode === 'inject' && (
                    <Link href="/monitor">
                        <button className="btn-primary text-center">
                            INITIATE EXPERIMENT &gt;&gt;
                        </button>
                    </Link>
                )}

                {mode === 'full' && (
                    <button className="btn-primary text-center">
                        INITIATE EXPERIMENT
                    </button>
                )}
            </div>
        </section>
    );
}
