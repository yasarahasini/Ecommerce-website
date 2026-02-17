"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiHome, FiUsers, FiShoppingCart, FiLogOut, FiSettings } from "react-icons/fi";

const sidebarLinks = [
  { name: "Dashboard", icon: <FiHome />, path: "/admin" },
  { name: "Users", icon: <FiUsers />, path: "/admin/users" },
  { name: "Products", icon: <FiShoppingCart />, path: "/admin/products" },
  { name: "Settings", icon: <FiSettings />, path: "/admin/settings" },
];

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
 
    alert("Logged out");
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
    
      <aside
        className={`bg-white shadow-md transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className={`text-xl font-bold ${sidebarOpen ? "block" : "hidden"}`}>
            Admin
          </h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <nav className="mt-4">
          {sidebarLinks.map((link) => (
            <div
              key={link.name}
              onClick={() => router.push(link.path)}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              <span className="text-lg">{link.icon}</span>
              {sidebarOpen && <span>{link.name}</span>}
            </div>
          ))}
        </nav>

        <div className="mt-auto px-4 py-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 hover:text-red-700 w-full"
          >
            <FiLogOut />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>


      <div className="flex-1 flex flex-col">
   
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert("Profile clicked")}
            >
              Profile
            </button>
          </div>
        </header>

    
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
