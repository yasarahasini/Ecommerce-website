"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiHome,
  FiUsers,
  FiShoppingCart,
  FiSettings,
  FiMenu,
  FiBell,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

interface LayoutProps {
  children: React.ReactNode;
}

interface LinkItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

const sidebarLinks: LinkItem[] = [
  { name: "Dashboard", path: "/admin", icon: <FiHome /> },
  { name: "Add Deals", path: "/add-deals", icon: <FiShoppingCart /> },
  { name: "Add Accessories", path: "/add-accessories", icon: <FiShoppingCart /> },
  { name: "Add Electronics", path: "/add-electronics", icon: <FiSettings /> },
  { name: "Add Fashion", path: "/add-fashion", icon: <FiUsers /> },
  { name: "Add Men", path: "/add-men", icon: <FiUsers /> },
  { name: "Add Women", path: "/add-women", icon: <FiUsers /> },
  { name: "Contact Info", path: "/contact-info", icon: <FiSettings /> },
  { name: "Order Details", path: "/order-details", icon: <FiShoppingCart /> },
  { name: "Signup List", path: "/signup-list", icon: <FiUsers /> },
];

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    alert("Logged out");
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-gray-200">
   
      <aside
        className={`bg-white shadow-md transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        } hidden md:flex flex-col`}
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

        <nav className="mt-4 flex-1">
          {sidebarLinks.map((link) => (
            <div
              key={link.name}
              onClick={() => router.push(link.path)}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              {link.icon && <span className="text-lg">{link.icon}</span>}
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
   
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col p-4 gap-2 z-50">
              {sidebarLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    router.push(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-gray-700 px-3 py-2 rounded hover:bg-gray-200"
                >
                  {link.icon && <span className="text-lg">{link.icon}</span>}
                  <span>{link.name}</span>
                </button>
              ))}
            </div>
          )}
        </header>

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
