"use client";

import React, { useState } from "react";

const categories = [
  "Shirts",
  "Tops",
  "Jeans",
  "Shoes",
  "Jackets",
  "Accessories",
];

const sizes = ["S", "M", "L", "XL"];

const Page = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      name,
      category,
      size: selectedSizes,
      price: Number(price),
      image,
    };

    console.log("Men Product Added:", newProduct);

    alert("Men product added successfully!");

   
    setName("");
    setCategory("");
    setSelectedSizes([]);
    setPrice("");
    setImage("");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add Men Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
       
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

        
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Sizes</label>
            <div className="flex gap-3 flex-wrap">
              {sizes.map((size) => (
                <label
                  key={size}
                  className="flex items-center gap-2 border px-3 py-1 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => toggleSize(size)}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

      
          <div>
            <label className="block font-medium mb-1">Price ($)</label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

       
          <div>
            <label className="block font-medium mb-1">Image URLS</label>
            <input
              type="text"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

     
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
