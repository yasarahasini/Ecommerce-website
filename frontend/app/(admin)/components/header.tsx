"use client";

import React from "react";
import { Bell, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      

      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-green-600">
          Admin Dashboard
        </h1>
      </div>

      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
        <Search className="text-gray-500 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>


      <div className="flex items-center gap-6">
        
    
        <div className="relative cursor-pointer">
          <Bell className="text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </div>

   
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="text-gray-600" />
          <span className="text-sm font-medium">Admin</span>
        </div>

      </div>
    </header>
  );
};

export default Header;