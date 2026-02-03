"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, TorusKnot, Box } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";

export default function FunBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-transparent pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ff00ff" />
                <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#00ffff" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <FloatingShapes />
                </Float>

                <EffectComposer>
                    <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} intensity={1.5} />
                    <Noise opacity={0.05} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

function FloatingShapes() {
    const count = 15;
    const shapes = useMemo(() => {
        return new Array(count).fill(0).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ] as [number, number, number],
            scale: Math.random() * 0.5 + 0.2,
            type: Math.floor(Math.random() * 3), // 0: Sphere, 1: Box, 2: Torus
            color: Math.random() > 0.5 ? "#ccff00" : (Math.random() > 0.5 ? "#ff00ff" : "#00ffff"),
            rotationSpeed: Math.random() * 0.02
        }));
    }, []);

    return (
        <group>
            {shapes.map((shape, i) => (
                <FloatingShapeItem key={i} {...shape} />
            ))}
        </group>
    );
}

function FloatingShapeItem({ position, scale, type, color, rotationSpeed }: any) {
    const mesh = useRef<any>(null);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += rotationSpeed;
            mesh.current.rotation.y += rotationSpeed;
        }
    });

    const material = <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />;

    return (
        <group position={position} scale={scale}>
            {type === 0 && <Sphere ref={mesh} args={[1, 32, 32]}>{material}</Sphere>}
            {type === 1 && <Box ref={mesh} args={[1.5, 1.5, 1.5]}>{material}</Box>}
            {type === 2 && <TorusKnot ref={mesh} args={[0.8, 0.3, 100, 16]}>{material}</TorusKnot>}
        </group>
    );
}
