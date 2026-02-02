"use client";

import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

interface Accessory {
  id: number;
  name: string;
  price: number;
  image: string;
}

const accessories: Accessory[] = [
  {
    id: 1,
    name: "Leather Handbag",
    price: 59.99,
    image: "/images/accessories/bag.jpg",
  },
  {
    id: 2,
    name: "Stylish Sunglasses",
    price: 24.99,
    image: "/images/accessories/sunglasses.jpg",
  },
  {
    id: 3,
    name: "Gold Wrist Watch",
    price: 89.99,
    image: "/images/accessories/watch.jpg",
  },
  {
    id: 4,
    name: "Classic Belt",
    price: 19.99,
    image: "/images/accessories/belt.jpg",
  },
  {
    id: 5,
    name: "Women’s Scarf",
    price: 14.99,
    image: "/images/accessories/scarf.jpg",
  },
  {
    id: 6,
    name: "Silver Earrings",
    price: 29.99,
    image: "/images/accessories/earrings.jpg",
  },
    {
    id: 7,
    name: "Women’s Scarf",
    price: 14.99,
    image: "/images/accessories/scarf.jpg",
  },
  {
    id: 8,
    name: "Silver Earrings",
    price: 29.99,
    image: "/images/accessories/earrings.jpg",
  },
];

export default function AccessoriesPage() {
  return (
    <div className="max-w-[1200px]   mx-auto px-4 py-10">
  
      <div className="mb-8 text-white text-center">
        <h1 className="text-3xl font-semibold text-white">
          Accessories
        </h1>
        <p className="text-white mt-2">
          Complete your look with our latest accessories
        </p>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
         
            <div className="relative w-full h-[260px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500">
                <Heart size={16} />
              </button>
            </div>

     
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-900 font-semibold mt-1">
                ${item.price.toFixed(2)}
              </p>

              <button
                className="mt-4 w-full flex items-center justify-center gap-2 
                bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
