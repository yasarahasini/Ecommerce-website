"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Antique {
  id: number;
  name: string;
  era: string; 
  origin: string;
  price: number;
  img: string;
  category: string;
  condition: "Excellent" | "Good" | "Fair";
}

const dummyAntiques: Antique[] = [
  { 
    id: 1, 
    name: "Victorian Pocket Watch", 
    era: "c. 1890", 
    origin: "London, UK",
    price: 1250, 
    img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ad5", 
    category: "Horology",
    condition: "Excellent"
  },
  { 
    id: 2, 
    name: "Ming Dynasty Style Vase", 
    era: "Late 19th Century", 
    origin: "Jingdezhen, China",
    price: 3400, 
    img: "https://images.unsplash.com/photo-1580512126919-3f098518b7ec", 
    category: "Ceramics",
    condition: "Good"
  },
  { 
    id: 3, 
    name: "Solid Oak Writing Desk", 
    era: "Edwardian Era", 
    origin: "France",
    price: 850, 
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd", 
    category: "Furniture",
    condition: "Fair"
  },
  { 
    id: 4, 
    name: "Antique Brass Telescope", 
    era: "c. 1920", 
    origin: "Naval Supply",
    price: 520, 
    img: "https://images.unsplash.com/photo-1505350319500-1c990267605e", 
    category: "Instruments",
    condition: "Excellent"
  }
];

const categories = ["All Rarities", "Furniture", "Ceramics", "Horology", "Instruments"];

const AntiquesPage: React.FC = () => {
  const [items, setItems] = useState<Antique[]>(dummyAntiques);
  const [selectedCategory, setSelectedCategory] = useState("All Rarities");

  const filteredItems = selectedCategory === "All Rarities" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2c241e] font-serif">
      {/* Ornamental Header */}
      <header className="py-16 px-6 text-center border-b border-[#d1c7b7] bg-[#ede8de]">
        <span className="block text-xs tracking-[0.3em] uppercase mb-4 text-[#8b7355]">Established Vault</span>
        <h1 className="text-5xl md:text-6xl font-light mb-4">The Curator’s Archive</h1>
        <p className="max-w-2xl mx-auto font-sans text-sm text-[#5d534a] leading-relaxed">
          Sourcing rare historical artifacts and authentic period pieces from around the globe. 
          Every item is authenticated and cataloged with provenance.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        
        {/* Sidebar: The Catalog Menu */}
        <aside className="lg:w-64">
          <div className="sticky top-10 border border-[#d1c7b7] p-8 bg-white/50 backdrop-blur-sm shadow-inner">
            <h2 className="text-lg mb-6 border-b border-[#2c241e] pb-2 italic">Departments</h2>
            <ul className="space-y-4 font-sans text-sm tracking-wide">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`uppercase transition-colors ${
                      selectedCategory === cat ? "text-[#8b7355] font-bold" : "text-[#5d534a] hover:text-[#2c241e]"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main: The Collection Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <Link href={`/antiques/${item.id}`}>
                  {/* Image Container with "Antique Paper" border */}
                  <div className="relative aspect-square overflow-hidden bg-[#e5e1d8] p-4 shadow-xl group-hover:shadow-2xl transition-all duration-700">
                    <div className="relative w-full h-full border border-[#c4baaa] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      />
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="mt-8 text-center border-t border-[#d1c7b7] pt-6 relative">
                    {/* Decorative Diamond */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#f4f1ea] border border-[#d1c7b7]" />
                    
                    <span className="text-[10px] uppercase tracking-widest text-[#8b7355]">{item.era} — {item.origin}</span>
                    <h3 className="text-2xl mt-1 mb-3 group-hover:text-[#8b7355] transition-colors">{item.name}</h3>
                    <div className="flex justify-center gap-4 text-xs font-sans text-[#5d534a]">
                      <span className="border px-2 py-0.5 border-[#d1c7b7] uppercase">{item.condition}</span>
                      <span className="font-bold text-[#2c241e]">${item.price.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AntiquesPage;