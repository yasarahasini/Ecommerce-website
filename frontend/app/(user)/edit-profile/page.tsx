"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EditProfilePage: React.FC = () => {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "Yasara Hasini",
    email: "yasarahasini61@email.com",
    phone: "+94 77 123 4567",
    address: "No 45, Galle Road, Colombo 03, Sri Lanka",
    avatar: "/yasara.png"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Updated profile:", form);

    alert("Profile Updated Successfully!");

    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg">

        <h1 className="text-2xl font-bold mb-6">
          Edit Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Avatar */}
          <div className="flex items-center gap-5">

            <div className="relative w-24 h-24">
              <Image
                src={form.avatar}
                alt="avatar"
                fill
                className="rounded-full object-cover border"
              />
            </div>

            <input
              type="text"
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Avatar Image URL"
            />

          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-2"
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-sm text-gray-500">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-2"
              rows={3}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="px-5 py-2 rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProfilePage;