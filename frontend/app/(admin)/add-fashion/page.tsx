"use client";

import { useState } from "react";

type FashionItem = {
  name: string;
  price: string;
  image: string;
};

const AddFashionForm = () => {
  const [formData, setFormData] = useState<FashionItem>({
    name: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/fashion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to add fashion item");
      }

      const data = await res.json();
      console.log("Saved item:", data);

      setSuccess(true);
      setFormData({ name: "", price: "", image: "" });
    } catch (err) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow text-black">
      <h2 className="text-xl font-bold mb-4">Add Fashion Items</h2>

      {success && (
        <p className="text-green-600 mb-3">Item added successfully ✅</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product name"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (e.g $49.99)"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddFashionForm;
