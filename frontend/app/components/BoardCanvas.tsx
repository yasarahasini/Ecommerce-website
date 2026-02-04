"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

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
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <BoardModel />
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  );
}
