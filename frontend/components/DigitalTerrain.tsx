"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Plane, Grid } from "@react-three/drei";
import { useRef } from "react";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { Vector2 } from "three";

export default function DigitalTerrain() {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: 'black'
            }}
        >
            <Canvas camera={{ position: [0, 5, 10], fov: 75 }} dpr={[1, 2]}>
                <color attach="background" args={['black']} />
                <fog attach="fog" args={['black', 5, 20]} />

                <MovingGrid />

                <EffectComposer>
                    <Bloom luminanceThreshold={0.5} intensity={1.5} radius={0.5} />
                    <ChromaticAberration offset={new Vector2(0.002, 0.002)} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

function MovingGrid() {
    const gridRef = useRef<any>(null);

    useFrame((state) => {
        if (gridRef.current) {
            // Move grid towards camera to simulate speed
            gridRef.current.position.z = (state.clock.elapsedTime * 2) % 2;
        }
    });

    return (
        <group position={[0, -2, 0]}>
            {/* Infinite Floor Effect */}
            <gridHelper
                ref={gridRef}
                args={[50, 50, 0xff00ff, 0x00ffff]}
                position={[0, 0, 0]}
            />
            <Grid
                infiniteGrid
                fadeDistance={25}
                sectionColor="#00f3ff"
                cellColor="#2b1055"
                sectionSize={1}
                cellSize={0.25}
            />
        </group>
    );
}
