
"use client";

import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
     
        <div>
          <Image
            src="/dress.jpg"
            alt="Product"
            width={500}
            height={600}
            className="rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-semibold">Floral Dress</h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">(124 reviews)</span>
          </div>

          <p className="text-2xl font-bold mt-4">$49.99</p>

   
          <div className="mt-4">
            <p className="font-medium">Size</p>
            <div className="flex gap-2 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border px-4 py-2 rounded hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

       
          <button className="w-full mt-6 bg-black text-white py-3 rounded text-lg">
            Add to Cart
          </button>

    
          <ul className="mt-6 space-y-2 text-gray-600">
            <li>✔ Premium quality fabric</li>
            <li>✔ Free delivery</li>
            <li>✔ Easy returns</li>
          </ul>
        </div>
      </div>

     
      <div className="mt-12">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-gray-600 mt-2">
          This floral dress is designed for comfort and style. Perfect for daily wear,
          parties, and special occasions.
        </p>
      </div>
    </div>
  );
}
