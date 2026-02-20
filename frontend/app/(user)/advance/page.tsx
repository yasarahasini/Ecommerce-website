"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Tag,
  Store,
  Gift,
  Star,
} from "lucide-react";

const Page = () => {
  const router = useRouter();

  const features = [
    {
      title: "New Arrivals",
      icon: Sparkles,
      path: "/new-arrivals",
    },
    {
      title: "Deals",
      icon: Tag,
      path: "/deals",
    },
    {
      title: "Brand Outlet",
      icon: Store,
      path: "/brand-outlet",
    },
    {
      title: "Gift Cards",
      icon: Gift,
      path: "/gift-cards",
    },
    {
      title: "Features",
      icon: Star,
      path: "/features",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-pink-500 via-white to-pink-200 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        
     
        <h1 className="text-4xl font-bold text-center mb-4">
          Advanced Features
        </h1>

        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto">
          Explore our advanced features designed to enhance your shopping experience.
        </p>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => router.push(item.path)}
                className="group bg-white/70 backdrop-blur-md border border-white/40 
                           h-36 rounded-3xl shadow-lg cursor-pointer
                           flex flex-col items-center justify-center gap-2
                           hover:bg-pink-500 hover:text-white
                           hover:scale-105 transition-all duration-300"
              >
                <Icon className="w-7 h-7 group-hover:scale-110 transition" />
                <span className="font-semibold text-center px-2">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Page;