"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainSearch: React.FC = () => {
  const router = useRouter();

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;

    if (value === "antiques") router.push("/antiques");
    if (value === "art") router.push("/art");
    if (value === "baby") router.push("/baby-items");
    if (value === "books") router.push("/books");
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 py-4">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center gap-4">

      
        <div className="flex flex-1 items-center border-2 border-black rounded-full h-[44px] overflow-hidden">

          <div className="flex flex-1 items-center px-4">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full outline-none text-[16px]"
            />
          </div>

        
          <div className="h-2/3 border-l border-gray-300 flex items-center">
            <select
              onChange={handleCategoryChange}
              className="bg-transparent pl-4 pr-8 outline-none text-[14px] text-gray-600 appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              <option value="antiques">Antiques</option>
              <option value="art">Art</option>
              <option value="baby">Baby</option>
              <option value="books">Books</option>
            </select>
          </div>
        </div>

        <button className="bg-[#3665f3] text-white px-10 h-[44px] rounded-full">
          Search
        </button>

        <Link
          href="/advanced-search"
          className="text-[12px] text-gray-500 hover:text-blue-600"
        >
          Advanced
        </Link>
      </div>
    </div>
  );
};

export default MainSearch;
