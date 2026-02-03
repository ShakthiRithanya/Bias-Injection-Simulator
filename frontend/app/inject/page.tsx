"use client";
import BiasControlPanel from "@/components/BiasControlPanel";
import Link from "next/link";

export default function InjectPage() {
    return (
        <div className="relative w-full h-full">
            <main className="flex flex-col items-center justify-center min-h-screen p-6 relative z-10 w-full h-full">
                <Link href="/dataset" className="absolute top-6 left-6 text-xs font-mono text-muted hover:text-white transition">
                    &lt; PREVIOUS_STEP
                </Link>

                <BiasControlPanel mode="inject" />

                <div className="mt-8 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-neon-pink shadow-glow" style={{ background: 'var(--neon-pink)', boxShadow: '0 0 10px var(--neon-pink)' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                </div>
            </main>
        </div>
    );
}
