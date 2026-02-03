"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface Product3DCardProps {
  modelUrl: string;
  name: string;
  price: string;
  discount: string;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url) as any;
  return <primitive object={scene} scale={1.2} />;
}

const Product3DCard: React.FC<Product3DCardProps> = ({ modelUrl, name, price, discount }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-4">
      <div className="h-64 w-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Model url={modelUrl} />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
      <div className="mt-4 text-center">
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {discount}
        </span>
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-lg font-semibold text-green-600">{price}</p>
      </div>
    </div>
  );
};

export default Product3DCard;
