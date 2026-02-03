"use client";
import BiasControlPanel from "@/components/BiasControlPanel";
import Link from "next/link";

export default function DatasetPage() {
    return (
        <div className="relative w-full h-full">
            <main className="flex flex-col items-center justify-center min-h-screen p-6 relative z-10 w-full h-full">
                <Link href="/" className="absolute top-6 left-6 text-xs font-mono text-muted hover:text-white transition">
                    &lt; ABORT_PROTOCOL
                </Link>

                <BiasControlPanel mode="upload" />

                <div className="mt-8 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-glow"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                </div>
            </main>
        </div>
    );
}
