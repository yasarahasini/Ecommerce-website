"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const heroImages = ["/1.jpg", "/2.jpg", "/8.jpg", "/7.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-blue-200">

      {/* ================= HERO SECTION ================= */}
      <section className="sticky top-0 bg-brand-blue text-white px-6 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="uppercase text-4xl md:text-6xl font-bold">
              Crafted for the Kickflip
            </h2>

            <p className="max-w-md text-lg font-semibold">
              Built for big tricks and hard landings, our boards are designed to
              handle every flip, grind, and bail. Perfect balance, every time.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-orange-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Shop Boards
            </Link>
          </div>

          {/* RIGHT */}
          <div className="relative grid place-items-center">
            <div className="relative w-[300px] md:w-[380px] aspect-[3/4]">
              <Image
                src="/6.jpg"
                alt="Background"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute w-[220px] md:w-[280px] aspect-[3/4]">
              <Image
                src="/guy.png"
                alt="Skater"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>


         {/* ================= HERO SECTION ================= */}
      <section className="sticky top-0 bg-gray-200 bg-brand-blue text-white px-6 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="uppercase text-4xl md:text-6xl font-bold">
              Crafted for the Kickflip
            </h2>

            <p className="max-w-md text-lg font-semibold">
              Built for big tricks and hard landings, our boards are designed to
              handle every flip, grind, and bail. Perfect balance, every time.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-orange-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Shop Boards
            </Link>
          </div>

          {/* RIGHT */}
          <div className="relative grid place-items-center">
            <div className="relative w-[300px] md:w-[380px] aspect-[3/4]">
              <Image
                src="/6.jpg"
                alt="Background"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute w-[220px] md:w-[280px] aspect-[3/4]">
              <Image
                src="/guy.png"
                alt="Skater"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>
      

<section className="sticky top-0 bg-pink-200 bg-brand-blue text-white px-6 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="uppercase text-4xl md:text-6xl font-bold">
              Crafted for the Kickflip
            </h2>

            <p className="max-w-md text-lg font-semibold">
              Built for big tricks and hard landings, our boards are designed to
              handle every flip, grind, and bail. Perfect balance, every time.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-orange-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Shop Boards
            </Link>
          </div>

          {/* RIGHT */}
          <div className="relative grid place-items-center">
            <div className="relative w-[300px] md:w-[380px] aspect-[3/4]">
              <Image
                src="/6.jpg"
                alt="Background"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute w-[220px] md:w-[280px] aspect-[3/4]">
              <Image
                src="/guy.png"
                alt="Skater"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>
      <section className="sticky top-0 bg-gray-800 bg-brand-blue text-white px-6 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="uppercase text-4xl md:text-6xl font-bold">
              Crafted for the Kickflip
            </h2>

            <p className="max-w-md text-lg font-semibold">
              Built for big tricks and hard landings, our boards are designed to
              handle every flip, grind, and bail. Perfect balance, every time.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-orange-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Shop Boards
            </Link>
          </div>

          {/* RIGHT */}
          <div className="relative grid place-items-center">
            <div className="relative w-[300px] md:w-[380px] aspect-[3/4]">
              <Image
                src="/6.jpg"
                alt="Background"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute w-[220px] md:w-[280px] aspect-[3/4]">
              <Image
                src="/guy.png"
                alt="Skater"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>
      {/* ================= SLIDER HERO ================= */}
      <section className="py-10 bg-gradient-to-r from-gray-300 via-white to-gray-200">
        <div className="relative h-[420px] max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">

          {heroImages.map((img, index) => (
            <Image
              key={img}
              src={img}
              alt="Hero"
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to My eCommerce Store
            </h1>
            <p className="text-lg mb-6">
              Find the best products at unbeatable prices!
            </p>
            <Link href="/shop">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
                Shop Now
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white shadow-md rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Shopping Made Easy
              </h2>
              <p className="text-gray-600">
                Discover amazing deals, fast delivery, and secure checkout.
              </p>
            </div>

            <Link href="/shop">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
