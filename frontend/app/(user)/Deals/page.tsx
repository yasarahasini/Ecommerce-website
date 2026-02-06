"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


interface Deal {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  category: string;
}

const deals: Deal[] = [
  { id: 1, name: "Wireless Headphones", originalPrice: 120, discountedPrice: 80, image: "/d1.jpg", category: "Audio" },
  { id: 2, name: "Smart Watch", originalPrice: 200, discountedPrice: 150, image: "/d2.jpg", category: "Wearables" },
  { id: 3, name: "Gaming Mouse", originalPrice: 50, discountedPrice: 35, image: "/d3.jpg", category: "Accessories" },
];

export default function Home() {
  const heroImages = ["/1.jpg", "/2.jpg", "/8.jpg", "/7.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-slate-50">
      
  
      <section className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-20 shadow-2xl">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Flash Sale</h2>
              <p className="text-slate-500 mt-2">Limited time offers on premium tech.</p>
            </div>
            <Link href="/deals" className="text-blue-600 font-semibold hover:underline">View All →</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <ProductCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>


      <section className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-24 shadow-2xl">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-bold uppercase">New Collection</span>
            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase italic">
              Crafted for <br />the Kickflip
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Built for big tricks and hard landings. Our boards handle every 
              grind and bail with precision engineering.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-black font-black px-8 py-4 rounded-full hover:bg-lime-400 transition-colors duration-300"
            >
              SHOP BOARDS
            </Link>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-lime-400/20 blur-3xl rounded-full group-hover:bg-lime-400/30 transition"></div>
            <div className="relative aspect-square w-full max-w-md mx-auto">
               <Image 
                src="/guy.png" 
                alt="Skater" 
                fill 
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-30 bg-blue-600 text-white px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Bundle & Save</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                   <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl">{deal.name}</h3>
                <p className="text-blue-100 mb-4">Starting at ${deal.discountedPrice}</p>
                <button className="w-full bg-white text-blue-600 font-bold py-2 rounded-lg hover:bg-blue-50">Add to Bundle</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


function ProductCard({ deal }: { deal: Deal }) {
  const discount = Math.round(((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100);
  
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{discount}% OFF
        </div>
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{deal.category}</span>
        <h3 className="text-xl font-bold text-slate-800 mt-1">{deal.name}</h3>
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-black text-slate-900">${deal.discountedPrice}</span>
          <span className="text-slate-400 line-through text-sm">${deal.originalPrice}</span>
        </div>
        <button className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}