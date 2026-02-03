"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function NeuralBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <color attach="background" args={['black']} />
                <fog attach="fog" args={['black', 0, 15]} />

                <WarpTunnel />

                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} intensity={2.5} radius={0.8} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

function WarpTunnel() {
    const ref = useRef<any>();

    // Generate points in a long tunnel cylinder
    const points = useMemo(() => {
        const count = 8000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * 2 * Math.PI;
            // Cylinder radius between 2 and 10
            const r = 3 + Math.random() * 8;

            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);
            // Length of tunnel from -100 to 0
            const z = (Math.random() - 1) * 100;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Move tunnel towards camera
            ref.current.position.z += delta * 15;
            // Rotation for dizziness effect
            ref.current.rotation.z += delta * 0.2;

            // Reset position to loop
            if (ref.current.position.z > 50) {
                ref.current.position.z = 0;
            }
        }
    });

    return (
        <group rotation={[0, 0, 0]} position={[0, 0, -50]}>
            <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00f3ff"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}
