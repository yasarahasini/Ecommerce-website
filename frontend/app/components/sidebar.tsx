"use client";
import { FaTshirt, FaShoppingBag, FaRulerCombined, FaDollarSign } from "react-icons/fa";
import { GiLargeDress, GiRunningShoe } from "react-icons/gi";

const categories = [
  { name: "Dresses", icon: <GiLargeDress /> },
  { name: "Tops", icon: <FaTshirt /> },
  { name: "Jeans", icon: <FaRulerCombined /> },
  { name: "Jackets", icon: <FaTshirt /> },
  { name: "Shoes", icon: <GiRunningShoe /> },
  { name: "Bags", icon: <FaShoppingBag /> },
];

const sizes = ["XS", "S", "M", "L", "XL"];
const priceRanges = ["Under $50", "$50 - $100", "$100 - $200"];

interface WomenSidebarProps {
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  selectedSize: string | null;
  setSelectedSize: (size: string | null) => void;
  selectedPrice: string | null;
  setSelectedPrice: (price: string | null) => void;
}

export default function WomenSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedSize,
  setSelectedSize,
  selectedPrice,
  setSelectedPrice,
}: WomenSidebarProps) {
  return (
    <div className="w-64 bg-purple-200 p-6 rounded-lg shadow-md space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaShoppingBag /> Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat.name}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat.name ? null : cat.name)
              }
              className={`flex items-center gap-2 cursor-pointer px-2 py-2 rounded transition ${
                selectedCategory === cat.name
                  ? "bg-pink-500 text-white"
                  : "hover:bg-pink-300"
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaRulerCombined /> Sizes
        </h3>
        <ul className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => setSelectedSize(selectedSize === size ? null : size)}
              className={`cursor-pointer px-3 py-1 border rounded transition ${
                selectedSize === size
                  ? "bg-pink-500 text-white border-pink-500"
                  : "hover:bg-yellow-300"
              }`}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaDollarSign /> Price
        </h3>
        <ul className="space-y-2">
          {priceRanges.map((price) => (
            <li
              key={price}
              onClick={() => setSelectedPrice(selectedPrice === price ? null : price)}
              className={`cursor-pointer px-2 py-2 rounded transition ${
                selectedPrice === price
                  ? "bg-pink-500 text-white"
                  : "hover:bg-green-300"
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
