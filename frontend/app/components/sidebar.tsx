"use client";
import { useState } from "react";

const categories = ["Dresses", "Tops", "Jeans", "Jackets", "Shoes", "Bags"];
const sizes = ["XS", "S", "M", "L", "XL"];
const priceRanges = ["Under $50", "$50 - $100", "$100 - $200"];

export default function WomenSidebar() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  return (
    <div className="w-64 bg-purple-300 p-6 rounded-lg shadow-md space-y-6">
     
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-2 py-1 rounded ${
                selectedCategory === cat ? "bg-pink-500 text-white" : "hover:bg-pink-300"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>


      <div>
        <h3 className="text-lg font-semibold mb-3">Sizes</h3>
        <ul className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`cursor-pointer px-3 py-1 border rounded ${
                selectedSize === size ? "bg-pink-500 text-white border-pink-500" : "hover:bg-yellow-300"
              }`}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>

     
      <div>
        <h3 className="text-lg font-semibold mb-3">Price</h3>
        <ul className="space-y-2">
          {priceRanges.map((price) => (
            <li
              key={price}
              onClick={() => setSelectedPrice(price)}
              className={`cursor-pointer px-2 py-1 rounded ${
                selectedPrice === price ? "bg-pink-500 text-white" : "hover:bg-green-300"
              }`}
            >
              {price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
