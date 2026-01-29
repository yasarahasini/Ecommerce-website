"use client";
import React from 'react';
import { ShoppingCart, Bell, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 text-[12px] text-[#333] font-sans">
   
      <div className="max-w-[1200px] mx-auto px-4 h-8 flex items-center justify-between">
        
   
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer hover:underline">
            <span>Hi <span className="font-bold">Yash!</span></span>
            <ChevronDown size={14} className="ml-1" />
          </div>
          <Link href="/#deals" className="hover:underline">Daily Deals</Link>
          <a href="#" className="hover:underline">Brand Outlet</a>
          <a href="#" className="hover:underline">Gift Cards</a>
          <a href="#" className="hover:underline">Help & Contact</a>
        </div>

     
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer hover:underline">
            <img 
              src="https://flagcdn.com/w20/lk.png" 
              alt="Sri Lanka Flag" 
              className="w-4 h-3 mr-1"
            />
            <span>Ship to</span>
          </div>
          <a href="#" className="hover:underline">Sell</a>
          <div className="flex items-center cursor-pointer hover:underline">
            <span>Watchlist</span>
            <ChevronDown size={14} className="ml-1" />
          </div>
          <div className="flex items-center cursor-pointer hover:underline">
            <span>My yash</span>
            <ChevronDown size={14} className="ml-1" />
          </div>
       
          <div className="flex items-center space-x-3 ml-2">
            <button className="relative p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} strokeWidth={1.5} />
            </button>
            <button className="relative p-1 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart size={20} strokeWidth={1.5} />
           
              <span className="absolute top-0 right-0 bg-[#e53238] text-white text-[10px] font-bold px-1 rounded-full min-w-[16px] text-center">
                4
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;