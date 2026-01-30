
"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/data/products";

const ProductPage = () => {
  const { id } = useParams();


  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black  bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
      
        {product.modelUrl ? (
          <div className="flex-1">
            <iframe
              title={`${product.name} 3D Model`}
              className="w-full h-[600px] shadow-lg rounded"
              src={product.modelUrl}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-200 rounded h-[600px]">
            <span className="text-gray-500">3D model not available</span>
          </div>
        )}

     
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-4">
            <h2 className="font-semibold mb-2">Available Sizes:</h2>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="border px-3 py-1 rounded cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold mb-2">Colors:</h2>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="border px-3 py-1 rounded cursor-pointer hover:bg-gray-100"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <button className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
