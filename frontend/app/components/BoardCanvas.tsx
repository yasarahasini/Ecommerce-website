// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="@react-three/fiber" />
"use client";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: unknown;
    }
  }
}

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { DirectionalLight } from "three";
import { useBoardStore } from "./store";

function SceneLights() {
  const { scene } = useThree();

  useEffect(() => {
    const light = new DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    return () => {
      scene.remove(light);
    };
  }, [scene]);

  return null;
}

function BoardModel() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[3, 0.2, 1]} />
      <meshStandardMaterial color="#2563eb" />
    </mesh>
  );
}

export default function BoardCanvas() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [5, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <SceneLights />
        <BoardModel />
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  );
}
