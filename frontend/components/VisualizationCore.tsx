"use client";
import React from 'react';
import OrbCore from "@/components/OrbCore";

export default function VisualizationCore() {
    return (
        <section className="glass-panel relative flex flex-col items-center justify-center h-full w-full overflow-hidden">
            <div className="absolute top-4 left-4 font-mono text-xs text-neon-cyan flex items-center gap-2 z-20">
                <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" style={{ background: 'var(--neon-cyan)' }}></span>
                SYSTEM_STATUS: ONLINE
            </div>

            {/* The 3D Core */}
            <div className="absolute inset-0 z-0 opacity-80">
                <OrbCore />
            </div>

            <div className="relative z-10 text-center pointer-events-none mt-32">
                <span className="font-mono text-xs tracking-widest text-muted block mb-1">DATA INTEGRITY</span>
                <span className="font-mono text-6xl text-white font-bold drop-shadow-[0_0_15px_rgba(0,0,0,1)]">100%</span>
            </div>

            <div className="absolute bottom-8 font-mono text-xs text-muted flex flex-col items-center gap-2 z-20">
                <span>RENDER_ENGINE: WEBGL_READY</span>
                <span className="text-neon-pink" style={{ opacity: 0.5 }}>AWAITING_INJECTION</span>
            </div>
        </section>
    );
}
