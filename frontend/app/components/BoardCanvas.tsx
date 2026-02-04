"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useBoardStore } from "./store";

function Board() {
  const { deckColor, wheelColor, truckColor } = useBoardStore();

  return (
    <group rotation={[0.2, 0.6, 0]}>
      {/* Deck */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.15, 0.8]} />
        <meshStandardMaterial color={deckColor} />
      </mesh>

      {/* Wheels */}
      {[-1.2, 1.2].map((x) =>
        [-0.5, 0.5].map((z, i) => (
          <mesh key={`${x}-${z}-${i}`} position={[x, -0.25, z]}>
            <cylinderGeometry args={[0.18, 0.18, 0.2, 32]} />
            <meshStandardMaterial color={wheelColor} />
          </mesh>
        ))
      )}

      {/* Trucks */}
      <mesh position={[0, -0.18, 0]}>
        <boxGeometry args={[2.4, 0.1, 0.4]} />
        <meshStandardMaterial color={truckColor} />
      </mesh>
    </group>
  );
}

export default function BoardCanvas() {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Board />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
