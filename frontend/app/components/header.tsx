"use client";
import React from 'react';
import Link from "next/link";

const MainSearch: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-4">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center gap-4">
     
        <div className="flex-shrink-0 cursor-pointer">
        
        </div>

      
        <button className="flex items-center text-[#555] text-[14px] leading-tight text-left hover:text-blue-600 transition-colors">
          <span>Shop by<br />category</span>
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="flex flex-1 items-center border-2 border-black rounded-full h-[44px] overflow-hidden">
       
          <div className="flex flex-1 items-center px-4">
            <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search for anything" 
              className="w-full outline-none text-[16px] text-gray-700 placeholder-gray-500"
            />
          </div>


          <div className="h-2/3 border-l border-gray-300 flex items-center">
            <select className="bg-transparent pl-4 pr-8 outline-none text-[14px] text-gray-600 appearance-none cursor-pointer">
              <option>All Categories</option>
              <option>Antiques</option>
              <option>Art</option>
              <option>Baby</option>
              <option>Books</option>
              
            </select>
        
            <svg className="w-4 h-4 text-gray-500 -ml-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

 
        <button className="bg-[#3665f3] hover:bg-blue-700 text-white font-bold px-10 h-[44px] rounded-full text-[16px] transition-colors">
          Search
        </button>

       
        <Link  href="#" className="text-[12px] text-gray-500 hover:text-blue-600 cursor-pointer">
          Advanced
        </Link>

      </div>
    </div>
  );
};

export default MainSearch;