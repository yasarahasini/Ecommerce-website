// app/about/page.tsx
"use client"; // required for GSAP in Next.js app router

import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (storyRef.current && valuesRef.current) {
      gsap.from(storyRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
      });

      gsap.from(valuesRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Our Store</h1>
        <p className="text-gray-600 mb-6">
          Welcome to our e-commerce store! We are dedicated to providing the best
          products with top-notch service.
        </p>

        {/* 3D Canvas */}
        <div className="w-full h-64">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <Sphere args={[1, 64, 64]} scale={1.5}>
              <MeshDistortMaterial
                color="#f97316"
                attach="material"
                distort={0.4}
                speed={2}
              />
            </Sphere>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>

      {/* Our Story Section */}
      <div ref={storyRef} className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Started in 2023, our store quickly became a favorite for quality products.
          </p>
          <p className="text-gray-600">
            Every item is handpicked and curated with care, ensuring that you get only the best.
          </p>
        </div>
        <div>
          <img
            src="/about-hero.jpg"
            alt="Our Story"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Values Section */}
      <div
        ref={valuesRef}
        className="mt-16 max-w-5xl w-full grid md:grid-cols-3 gap-8 text-center"
      >
        {["Quality Products", "Fast Delivery", "Customer Support"].map((title, idx) => (
          <div key={idx} className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-gray-600">
              {title === "Quality Products"
                ? "Only the best items, carefully selected for you."
                : title === "Fast Delivery"
                ? "Get your orders quickly with our reliable shipping."
                : "Friendly and responsive support whenever you need help."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
