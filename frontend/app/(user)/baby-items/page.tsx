"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  category: string;
  size: string[];
  price: number;
  modelUrl: string;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Modern Baby Stroller",
    category: "Gear",
    size: ["Standard"],
    price: 299.99,
    color: "bg-blue-50",
    modelUrl: "https://sketchfab.com/models/bb79a4188c5f4c55830a707737df5ac1/embed?autostart=1&ui_infos=0&ui_watermark=0",
  },
  {
    id: 2,
    name: "Classic Toy Train",
    category: "Toys",
    size: ["One Size"],
    price: 34.50,
    color: "bg-orange-50",
    modelUrl: "https://sketchfab.com/models/6c0b277c88424a1ea86d2ff44951ee69/embed?autostart=1&ui_infos=0&ui_watermark=0",
  },
  {
    id: 3,
    name: "Organic Baby Romper",
    category: "Clothing",
    size: ["0-3M", "3-6M", "6-12M"],
    price: 22.00,
    color: "bg-rose-50",
    modelUrl: "https://sketchfab.com/models/f304fe4903224b6cbb18eb2d4da7467f/embed?autostart=1&ui_infos=0&ui_watermark=0",
  },
  {
    id: 4,
    name: "Soft Plush Elephant",
    category: "Toys",
    size: ["Small", "Large"],
    price: 18.99,
    color: "bg-purple-50",
    modelUrl: "https://sketchfab.com/models/b49f5b8cd9e94fe7883f3e9af8f41acc/embed?autostart=1&ui_infos=0&ui_watermark=0",
  },
  {
    id: 5,
    name: "Wooden Baby Crib",
    category: "Furniture",
    size: ["Standard"],
    price: 450.00,
    color: "bg-stone-100",
    modelUrl: "https://sketchfab.com/models/0ed7f53f9e444a739a10bd45bb7d6096/embed?autostart=1&ui_infos=0&ui_watermark=0",
  },
  {
    id: 6,
    name: "ABC Learning Cubes",
    category: "Toys",
    size: ["Set of 6"],
    price: 15.99,
    color: "bg-green-50",
    modelUrl: "https://sketchfab.com/models/811fef12daf24bd783604f2a316187c5/embed?autostart=1&ui_infos=0&ui_watermark=0",
  }
];

export default function BabyCollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { addToCart } = useCart();
  const router = useRouter();

  const categories = ["All", "Gear", "Toys", "Clothing", "Furniture"];

  const filteredProducts = useMemo(() => {
    return selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-[#fffdfa] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <header className="text-center mb-16">
          <span className="text-rose-400 font-semibold tracking-widest uppercase text-sm">Premium Quality</span>
          <h1 className="text-5xl font-serif font-bold text-gray-800 mt-2 mb-4">Baby Collection</h1>
          <p className="text-gray-500 max-w-lg mx-auto italic">
            Everything your little one needs, designed with love and 3D precision.
          </p>
        </header>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-rose-300 border-rose-300 text-white shadow-md scale-105"
                  : "bg-white border-gray-200 text-gray-600 hover:border-rose-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* 3D Viewer Container */}
              <div className={`relative h-80 ${product.color} p-4`}>
                <iframe
                  src={product.modelUrl}
                  className="w-full h-full rounded-2xl"
                  allow="autoplay; fullscreen"
                  loading="lazy"
                  title={product.name}
                />
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-bold text-rose-400 uppercase tracking-tighter mb-1">
                      {product.category}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-xl font-light text-gray-900">${product.price}</p>
                </div>
                
                <div className="flex gap-2 mt-2 mb-6">
                  {product.size.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-1 bg-gray-100 rounded text-gray-500">
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    addToCart(product);
                    router.push("/cart");
                  }}
                  className="mt-auto w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-rose-400 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>Add to Nursery</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl font-light italic">No items found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}