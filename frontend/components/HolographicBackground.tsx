"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Stars, Torus, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function HolographicBackground() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-0 bg-[radial-gradient(circle_at_center,_#1a1a2e_0%,_#000000_100%)]">
            <Canvas camera={{ position: [0, 0, 8] }} className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#00f3ff" />
                <directionalLight position={[-10, -10, -5]} intensity={2} color="#ff00ff" />

                {/* Adjusted Scales for better mobile/desktop visibility */}
                <group scale={1.2}>
                    <CyberSphere />
                    <Rings />
                </group>

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

                <EffectComposer>
                    <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

function CyberSphere() {
    const mesh = useRef<any>(null);
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.002;
        }
    });

    return (
        <Sphere ref={mesh} args={[1.8, 64, 64]}>
            <MeshDistortMaterial
                color="#000"
                emissive="#00f3ff"
                emissiveIntensity={0.2}
                roughness={0.1}
                metalness={1}
                distort={0.4}
                speed={2}
                wireframe
            />
        </Sphere>
    );
}

function Rings() {
    return (
        <group rotation={[Math.PI / 6, 0, 0]}>
            <Torus args={[3, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color="#ff00ff" transparent opacity={0.6} />
            </Torus>
            <Torus args={[4.2, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
                <meshBasicMaterial color="#00ffff" transparent opacity={0.4} />
            </Torus>
        </group>
    )
}
