"use client";

import React from "react";
import Image from "next/image";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  joined: string;
  address: string;
  avatar: string;
  orders: {
    total: number;
    completed: number;
    pending: number;
  };
}

const user: UserProfile = {
  name: "John Doe",
  email: "johndoe@email.com",
  phone: "+94 77 123 4567",
  joined: "January 2025",
  address: "No 45, Galle Road, Colombo 03, Sri Lanka",
  avatar: "/profile.jpg",
  orders: {
    total: 12,
    completed: 9,
    pending: 3,
  },
};

const page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-lg">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 border-b pb-6 md:flex-row">
          <div className="relative h-32 w-32">
            <Image
              src={user.avatar}
              alt="Profile"
              fill
              className="rounded-full object-cover border"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>

            <button className="mt-3 rounded-lg bg-black px-5 py-2 text-sm text-white hover:bg-gray-800">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          
          {/* Personal Info */}
          <div className="rounded-xl bg-gray-50 p-5 md:col-span-2">
            <h2 className="mb-4 text-lg font-semibold">Personal Information</h2>

            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <Info label="Full Name" value={user.name} />
              <Info label="Phone" value={user.phone} />
              <Info label="Email" value={user.email} />
              <Info label="Joined" value={user.joined} />
            </div>
          </div>

          {/* Orders */}
          <div className="rounded-xl bg-gray-50 p-5">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

            <Stat label="Total Orders" value={user.orders.total} />
            <Stat label="Completed" value={user.orders.completed} color="text-green-600" />
            <Stat label="Pending" value={user.orders.pending} color="text-orange-500" />
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 rounded-xl bg-gray-50 p-5">
          <h2 className="mb-3 text-lg font-semibold">Shipping Address</h2>
          <p className="text-sm text-gray-600">{user.address}</p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-end">
          <button className="rounded-lg bg-red-500 px-6 py-2 text-sm text-white hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

/* Reusable Components */

interface InfoProps {
  label: string;
  value: string;
}

const Info: React.FC<InfoProps> = ({ label, value }) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

interface StatProps {
  label: string;
  value: number;
  color?: string;
}

const Stat: React.FC<StatProps> = ({ label, value, color = "text-black" }) => (
  <div className="mb-3 flex justify-between text-sm">
    <span>{label}</span>
    <span className={`font-bold ${color}`}>{value}</span>
  </div>
);

export default page;
