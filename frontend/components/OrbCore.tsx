"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

export default function OrbCore() {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={2} color="#00f3ff" />
                <pointLight position={[-2, -2, -2]} intensity={1} color="#ff0055" />

                <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                    <AnimatedSphere />
                </Float>
            </Canvas>
        </div>
    );
}

function AnimatedSphere() {
    const mesh = useRef<any>(null);
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.distort = 0.4 + Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <Sphere ref={mesh} visible args={[1, 100, 200]} scale={1.2}>
            <MeshDistortMaterial
                color="#000000"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.9}
                wireframe={true}
                emissive="#00f3ff"
                emissiveIntensity={0.5}
            />
        </Sphere>
    );
}
