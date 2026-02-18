"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "SmartphoneX12", price: 799, img: "/products/phone1.jpg", category: "Electronics" },
  { id: 2, name: "Wireless Headphones", price: 199, img: "/products/headphones.jpg", category: "Electronics" },
  { id: 3, name: "Running Shoes", price: 129, img: "/products/shoes.jpg", category: "Fashion" },
  { id: 4, name: "Leather Jacket", price: 249, img: "/products/jacket.jpg", category: "Fashion" },
  { id: 5, name: "Coffee Maker", price: 89, img: "/products/coffee.jpg", category: "Home Appliances" },
  { id: 6, name: "Smart Watch", price: 299, img: "/products/watch.jpg", category: "Electronics" },
];

const categories = ["All", "Electronics", "Fashion", "Home Appliances"];

const BrandOutletPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const productRefs = useRef<HTMLDivElement[]>([]);
  const bannerRef = useRef<HTMLHeadingElement>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  useEffect(() => {
  
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }

   
    gsap.fromTo(
      productRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, [filteredProducts]);
const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="relative h-64 w-full">
        <Image
          src="/brandoutlet.jpg"
          alt="Brand Outlet Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 ref={bannerRef} className="text-white text-4xl font-bold">
            Brand Outlet
          </h1>
        </div>
      </section>

   
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedCategory === cat
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                if (el) productRefs.current[index] = el;
              }}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 transform hover:scale-105"
            >
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-red-500 font-bold mt-1">${product.price}</p>
              <button className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandOutletPage;
