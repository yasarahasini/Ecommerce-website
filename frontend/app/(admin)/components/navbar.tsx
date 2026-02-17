"use client";

import React, { useState } from "react";
import { FiMenu, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";

const AdminNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    alert("Logged out");
    router.push("/login");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
  
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 text-2xl md:hidden"
        >
          <FiMenu />
        </button>
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </div>

     
      <div className="flex items-center gap-4">
        <button className="relative">
          <FiBell className="text-gray-600 text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <FiUser className="text-gray-600 text-xl" />
          <span className="hidden md:block">Admin</span>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>


      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col p-4 gap-2">
          <button onClick={() => router.push("/admin")} className="text-gray-700">
            Dashboard
          </button>
          <button onClick={() => router.push("/admin/users")} className="text-gray-700">
            Users
          </button>
          <button onClick={() => router.push("/admin/products")} className="text-gray-700">
            Products
          </button>
          <button onClick={() => router.push("/admin/settings")} className="text-gray-700">
            Settings
          </button>
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;
