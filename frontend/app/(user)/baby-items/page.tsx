"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  category: string;
  ageGroup: string;
  price: number;
  modelUrl: string;
  color: string;
}

const babyProducts: Product[] = [
  {
    id: 1,
    name: "Organic Cotton Romper",
    category: "Clothing",
    ageGroup: "0-6 Months",
    price: 24.99,
    color: "bg-blue-100",
    modelUrl: "https://sketchfab.com/models/d28d416fda2f436399ea3a17c986d396/embed?autostart=1",
  },
  {
    id: 2,
    name: "Plush Elephant Toy",
    category: "Toys",
    ageGroup: "All Ages",
    price: 19.99,
    color: "bg-gray-100",
    modelUrl: "https://sketchfab.com/models/6c0b277c88424a1ea86d2ff44951ee69/embed?autostart=1",
  },
  {
    id: 3,
    name: "Soft Sole Booties",
    category: "Shoes",
    ageGroup: "6-12 Months",
    price: 15.50,
    color: "bg-rose-100",
    modelUrl: "https://sketchfab.com/models/b49f5b8cd9e94fe7883f3e9af8f41acc/embed?autostart=1",
  },
  {
    id: 4,
    name: "Wooden Teether Set",
    category: "Accessories",
    ageGroup: "3-12 Months",
    price: 12.99,
    color: "bg-yellow-100",
    modelUrl: "https://sketchfab.com/models/811fef12daf24bd783604f2a316187c5/embed?autostart=1",
  }
];

export default function BabyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  const categories = ["All", "Clothing", "Toys", "Shoes", "Accessories"];

  const filteredProducts = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") return babyProducts;
    return babyProducts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-orange-50/30 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Little Wonders</h1>
          <p className="text-gray-500">Curated essentials for your tiny humans.</p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all border ${
                selectedCategory === cat || (cat === "All" && !selectedCategory)
                  ? "bg-rose-400 text-white border-rose-400"
                  : "bg-white text-gray-600 border-gray-200 hover:border-rose-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* 3D Model Container */}
              <div className={`h-72 ${product.color} relative overflow-hidden`}>
                <iframe
                  src={product.modelUrl}
                  className="w-full h-full scale-110 pointer-events-auto"
                  allow="autoplay; fullscreen"
                  title={product.name}
                />
              </div>

              {/* Details Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="font-bold text-gray-800 text-lg">{product.name}</h2>
                  <span className="text-rose-500 font-bold">${product.price}</span>
                </div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                  {product.ageGroup}
                </p>

                <button
                  onClick={() => {
                    addToCart(product);
                    router.push("/cart");
                  }}
                  className="w-full bg-gray-900 text-white py-3 rounded-2xl font-semibold hover:bg-rose-500 transition-colors duration-300"
                >
                  Add to Nursery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}