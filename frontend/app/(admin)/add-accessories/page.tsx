"use client";

import { useState } from "react";

type AccessoryItem = {
  name: string;
  price: string;
  image: File | null;
};

const AddAccessoryForm = () => {
  const [formData, setFormData] = useState<AccessoryItem>({
    name: "",
    price: "",
    image: null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("price", formData.price);
      if (formData.image) form.append("image", formData.image);

      const res = await fetch("http://localhost:3001/accessories", {
        method: "POST",
        body: form, // multipart/form-data
      });

      if (!res.ok) throw new Error("Failed to add accessory");

      const data = await res.json();
      console.log("Saved accessory:", data);

      setSuccess(true);
      setFormData({ name: "", price: "", image: null });
      setPreview(null);
    } catch (err) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow text-black">
      <h2 className="text-xl font-bold mb-4">Add Accessory</h2>

      {success && (
        <p className="text-green-600 mb-3">Accessory added successfully ✅</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Accessory name"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (e.g 29.99)"
          type="number"
          step="0.01"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded border"
          />
        )}

        <button
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded"
        >
          {loading ? "Adding..." : "Add Accessory"}
        </button>
      </form>
    </div>
  );
};

export default AddAccessoryForm;
