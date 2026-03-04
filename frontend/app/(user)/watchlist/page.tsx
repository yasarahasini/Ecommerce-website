"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface WatchlistItem {
  id: number;
  title: string;
  price: number;
  img: string;
  category: string;
  inStock: boolean;
  dateAdded: string;
}

const dummyWatchlist: WatchlistItem[] = [
  { 
    id: 1, 
    title: "The Midnight Library", 
    price: 18.99, 
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f", 
    category: "Books",
    inStock: true,
    dateAdded: "2023-10-24"
  },
  { 
    id: 2, 
    title: "Victorian Pocket Watch", 
    price: 1250.00, 
    img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ad5", 
    category: "Antiques",
    inStock: false,
    dateAdded: "2023-10-22"
  },
  { 
    id: 3, 
    title: "Abstract Horizons", 
    price: 450.00, 
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab", 
    category: "Art",
    inStock: true,
    dateAdded: "2023-10-20"
  }
];

const WatchlistPage: React.FC = () => {
  const [items, setItems] = useState<WatchlistItem[]>(dummyWatchlist);

  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const emptyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    }

  
    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }

   
    if (emptyRef.current) {
      gsap.from(emptyRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, [items]);

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-300 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">

        <div
          ref={titleRef}
          className="flex items-end justify-between mb-10 border-b border-gray-200 pb-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Watchlist</h1>
            <p className="text-gray-500 mt-1">
              Review and manage your saved treasures.
            </p>
          </div>
          <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded-full">
            {items.length} Items
          </span>
        </div>

        {items.length > 0 && (
          <div ref={cardsRef} className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-center p-4 gap-6">
                  
                  <div className="relative w-24 h-32 flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`object-cover w-full h-full rounded-md ${!item.inStock && "grayscale"}`}
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xl font-bold text-gray-900 mt-1">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      disabled={!item.inStock}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                        item.inStock
                          ? "bg-indigo-600 text-white hover:bg-indigo-700"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-4 py-2 rounded-lg border text-sm hover:bg-red-50 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

    
        {items.length === 0 && (
          <div ref={emptyRef} className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-semibold text-gray-900">
              Your watchlist is empty
            </h2>
            <Link
              href="/"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all mt-6 inline-block"
            >
              Start Exploring
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;