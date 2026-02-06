"use client";

import React from "react";

interface Brand {
  id: number;
  name: string;
  discount: string;
  image: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "Nike",
    discount: "Up to 50% OFF",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Adidas",
    discount: "Up to 60% OFF",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
  },
  {
    id: 3,
    name: "Puma",
    discount: "Up to 45% OFF",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  },
  {
    id: 4,
    name: "Zara",
    discount: "Up to 70% OFF",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53",
  },
  {
    id: 5,
    name: "H&M",
    discount: "Up to 55% OFF",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
  {
    id: 6,
    name: "Levi's",
    discount: "Up to 40% OFF",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
];

const BrandOutletPage: React.FC = () => {
  return (
   <div className="min-h-screen text-black bg-gradient-to-r from-gray-200 to-blue-600 px-4 py-10">


      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Brand Outlet</h1>
          <p className="text-gray-600 mt-2">
            Shop your favorite brands at unbeatable prices
          </p>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-40 w-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {brand.discount}
                </span>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{brand.name}</h3>
                <button className="mt-3 text-sm text-white bg-black px-4 py-1 rounded hover:bg-gray-800">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BrandOutletPage;
