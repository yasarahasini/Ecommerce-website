"use client";
import React from "react";
import { ShoppingCart, Bell, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/(user)/context/CartContext";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  const handleCartClick = () => {
    router.push("/cart"); 
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 text-[12px] text-[#333] font-sans">
      <div className="max-w-[1200px] mx-auto px-4 h-8 flex items-center justify-between">
        
      
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer hover:underline">
            <span>Hi <span className="font-bold">Yash!</span></span>
            <ChevronDown size={14} className="ml-1" />
          </div>
          <Link href="/#deals" className="hover:underline">Daily Deals</Link>
          <Link href="/brandoutlet" className="hover:underline">Brand Outlet</Link>
          <Link href="/giftcards" className="hover:underline">Gift Cards</Link>
          <Link href="/contact" className="hover:underline">Help & Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer hover:underline">
            <img 
              src="https://flagcdn.com/w20/lk.png" 
              alt="Sri Lanka Flag" 
              className="w-4 h-3 mr-1"
            />
            <Link href="/location">Ship to</Link>
          </div>
          <Link href="/sell" className="hover:underline">Sell</Link>
          <div className="flex items-center cursor-pointer hover:underline">
            <Link href="/watchlist">Watchlist</Link>
            <ChevronDown size={14} className="ml-1" />
          </div>
          <div className="flex items-center cursor-pointer hover:underline">
            <span>My Yash</span>
            <ChevronDown size={14} className="ml-1" />
          </div>

        
          <div className="flex items-center space-x-3 ml-2">
            <button className="relative p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={handleCartClick}
              className="relative p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#e53238] text-white text-[10px] font-bold px-1 rounded-full min-w-4 text-center">
                  {cartItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
