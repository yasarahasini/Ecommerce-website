"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* Reusable Image Block */
const ImageBlock = () => (
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
        alt="Model"
        fill
        className="object-contain"
      />
    </div>
  </div>
);

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
    <div className="min-h-screen">

      {/* 🔵 BLUE – PERFORMANCE */}
      <section className="sticky top-0 bg-blue-900 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="uppercase text-4xl md:text-6xl font-bold">
              Built for Performance
            </h2>
            <p className="max-w-md text-lg font-semibold">
              Pro-grade boards engineered for balance, control, and hard landings.
            </p>
            <Link
              href="/shop"
              className="inline-flex bg-lime-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Explore Boards
            </Link>
          </div>
          <ImageBlock />
        </div>
      </section>

      {/* 🌸 PINK – STREET FASHION */}
      <section className="sticky top-0 bg-pink-300 text-black px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="uppercase text-4xl md:text-6xl font-bold">
              Street Style Ready
            </h2>
            <p className="max-w-md text-lg">
              Fresh streetwear inspired by skate culture and urban fashion.
            </p>
            <Link
              href="/fashion"
              className="inline-flex bg-black text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Shop Fashion
            </Link>
          </div>
          <ImageBlock />
        </div>
      </section>

      {/* ⚫ GRAY – ACCESSORIES */}
      <section className="sticky top-0 bg-gray-800 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="uppercase text-4xl md:text-6xl font-bold">
              Everyday Essentials
            </h2>
            <p className="max-w-md text-lg font-semibold">
              Bags, helmets, caps, and gear built for daily grind.
            </p>
            <Link
              href="/accessories"
              className="inline-flex bg-orange-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              View Accessories
            </Link>
          </div>
          <ImageBlock />
        </div>
      </section>

      {/* 🖼 HERO SLIDER */}
      <section className="py-12 bg-gray-100">
        <div className="relative h-[420px] max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
          {heroImages.map((img, index) => (
            <Image
              key={img}
              src={img}
              alt="Hero"
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Store
            </h1>
            <p className="mb-6">Quality products. Fast delivery. Secure checkout.</p>
            <Link href="/shop">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 🔥 HOT DEALS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">🔥 Hot Deals</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: "/9.jpg", title: "Sneakers", price: "$49.99" },
              { img: "/10.jpg", title: "T-Shirt", price: "$19.99" },
              { img: "/11.jpg", title: "Jacket", price: "$89.99" },
              { img: "/12.jpg", title: "Jeans", price: "$34.99" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
                <img src={item.img} className="h-48 w-full object-cover rounded-t-xl" />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="font-bold text-red-600">{item.price}</p>
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
