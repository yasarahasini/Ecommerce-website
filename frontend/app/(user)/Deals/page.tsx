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
interface Deal {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
}

const deals: Deal[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    originalPrice: 120,
    discountedPrice: 80,
    image: "/d1.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    originalPrice: 200,
    discountedPrice: 150,
    image: "/d2.jpg",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    originalPrice: 50,
    discountedPrice: 35,
    image: "/d3.jpg",
  },
];
  return (
    <div className="min-h-screen bg-white  ">

      <section className="sticky top-0 bg-brand-blue rounded-lg shadow hover:shadow-lg transitionshadow-blue-300 text-black px-6 py-16">
       <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Hot Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{deal.name}</h3>
                <p className="text-gray-500 line-through">${deal.originalPrice}</p>
                <p className="text-red-600 font-bold text-lg">
                  ${deal.discountedPrice}
                </p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>


    
      <section className="sticky top-0 bg-gray-200 bg-brand-blue text-white px-6 py-16">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Hot Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{deal.name}</h3>
                <p className="text-gray-500 line-through">${deal.originalPrice}</p>
                <p className="text-red-600 font-bold text-lg">
                  ${deal.discountedPrice}
                </p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      

<section className="sticky top-0 bg-pink-200 bg-brand-blue text-white px-6 py-16">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Hot Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{deal.name}</h3>
                <p className="text-gray-500 line-through">${deal.originalPrice}</p>
                <p className="text-red-600 font-bold text-lg">
                  ${deal.discountedPrice}
                </p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      <section className="sticky top-0 bg-gray-800 bg-brand-blue text-white px-6 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        
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

    </div>
  );
}
