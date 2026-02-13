"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  artist: string;
  price: number;
  img: string;
  category: string;
}

const dummyArt: Product[] = [
  { id: 1, name: "Abstract Horizons", artist: "Elena Rossi", price: 450, img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab", category: "Painting" },
  { id: 2, name: "Golden Hour Sculpt", artist: "Marcus Aurel", price: 1200, img: "https://images.unsplash.com/photo-1549490349-8643362247b5", category: "Sculpture" },
  { id: 3, name: "Urban Geometry", artist: "Sarah Chen", price: 195, img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb", category: "Wall Art" },
  { id: 4, name: "Midnight Bloom", artist: "Julian Vane", price: 320, img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85", category: "Painting" },
  { id: 5, name: "Minimalist Form", artist: "Dieter Rams", price: 850, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4", category: "Digital Art" },
  { id: 6, name: "Marble Echo", artist: "Luca Brasi", price: 2100, img: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0", category: "Sculpture" },
];

const categories = [
  "All Art",
  "Painting",
  "Wall Art",
  "Sculpture",
  "Digital Art",
];

const ArtGalleryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(dummyArt);
  const [selectedCategory, setSelectedCategory] = useState("All Art");

  useEffect(() => {
    fetch("http://localhost:3001/art")
      .then((res) => res.json())
      .then((data: Product[]) => {
        if (data && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(() => {
        console.log("Using curated gallery collection");
      });
  }, []);

  const filteredProducts =
    selectedCategory === "All Art"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen text-stone-900 bg-[#f9f8f4]">
   
      <header className="bg-white border-b border-stone-200 py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide italic">The Fine Art Gallery</h1>
        <p className="mt-4 text-stone-500 font-light max-w-xl mx-auto uppercase tracking-widest text-xs">
          Discover unique pieces from emerging global artists..
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        <aside className="w-full md:w-48 shrink-0">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6 border-b border-stone-300 pb-2">Collections</h2>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-sm transition-all duration-300 ${
                    selectedCategory === cat
                      ? "text-stone-900 font-bold translate-x-2"
                      : "text-stone-400 hover:text-stone-600 hover:translate-x-1"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-stone-400 italic">Showing {filteredProducts.length} masterpieces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-transparent overflow-hidden"
              >
                <Link href={`/products/${product.id}`}>
               
                  <div className="relative w-full aspect-[4/5] bg-stone-200 border-[12px] border-white shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                
                    <img
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>

                
                  <div className="mt-6 text-center md:text-left">
                    <h3 className="text-xl font-serif text-stone-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-stone-500 italic mb-2">By {product.artist}</p>
                    <div className="w-8 h-[1px] bg-stone-300 my-2 mx-auto md:mx-0" />
                    <p className="text-md font-medium text-stone-900 mt-2">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="h-64 flex items-center justify-center border border-dashed border-stone-300 rounded-lg">
              <p className="text-stone-400 italic font-light">
                The vault is empty for this category.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ArtGalleryPage;