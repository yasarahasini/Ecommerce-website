"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
     
        <div className="flex items-end justify-between mb-10 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Watchlist</h1>
            <p className="text-gray-500 mt-1">Review and manage your saved treasures.</p>
          </div>
          <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded-full">
            {items.length} Items
          </span>
        </div>

      
        <div className="space-y-4">
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
                    fill 
                    className={`object-cover rounded-md ${!item.inStock && 'grayscale'}`} 
                  />
                </div>

             
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600">
                      {item.category}
                    </span>
                    {!item.inStock && (
                      <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full w-fit mx-auto sm:mx-0">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-xl font-bold text-gray-900 mt-1">${item.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-400 mt-2">Added on {new Date(item.dateAdded).toLocaleDateString()}</p>
                </div>

              
                <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 sm:pl-6">
                  <button 
                    disabled={!item.inStock}
                    className={`flex-1 sm:w-32 py-2 rounded-lg font-semibold text-sm transition-colors ${
                      item.inStock 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="flex-1 sm:w-32 py-2 rounded-lg border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all"
                  >
                    Remove
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

     
        {items.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">empty</div>
            <h2 className="text-xl font-semibold text-gray-900">Your watchlist is empty</h2>
            <p className="text-gray-500 mt-2 mb-8">Items you save while browsing will appear here.</p>
            <Link 
              href="/" 
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all"
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