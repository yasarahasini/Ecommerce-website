"use client";

import { useEffect, useState } from "react";

type AccessoryItem = {
  _id?: string;
  name: string;
  price: string;
  image: File | string | null;
};

const API_URL = "http://localhost:3001/accessories";

const AddAccessoryForm = () => {
  const [formData, setFormData] = useState<AccessoryItem>({
    name: "",
    price: "",
    image: null,
  });

  const [items, setItems] = useState<AccessoryItem[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const fetchAccessories = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  useEffect(() => {
    fetchAccessories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreview(URL.createObjectURL(file));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("price", formData.price);
      if (formData.image instanceof File) {
        form.append("image", formData.image);
      }

      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;

      const res = await fetch(url, {
        method,
        body: form,
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();

      if (editingId) {
        setItems((prev) =>
          prev.map((item) => (item._id === editingId ? data : item))
        );
        setEditingId(null);
      } else {
        setItems((prev) => [...prev, data]);
      }

      setSuccess(true);
      setFormData({ name: "", price: "", image: null });
      setPreview(null);
    } catch {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
    }
  };


  const handleDelete = async (id: string) => {
    if (!confirm("Delete this accessory?")) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch {
      alert("Delete failed ❌");
    }
  };

 
  const handleEdit = (item: AccessoryItem) => {
    setFormData({
      name: item.name,
      price: item.price,
      image: item.image,
    });

    if (typeof item.image === "string") {
      setPreview(item.image);
    }

    setEditingId(item._id || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto text-black">

   
      <h2 className="text-2xl font-bold mb-4">Accessories</h2>

      {items.length > 0 ? (
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-3">
                    {item.image && (
                      <img
                        src={
                          typeof item.image === "string"
                            ? item.image
                            : URL.createObjectURL(item.image)
                        }
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                  </td>

                  <td className="p-3">{item.name}</td>
                  <td className="p-3">${item.price}</td>

                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item._id!)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mb-6">No accessories yet.</p>
      )}

     
      <div className="max-w-md bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "Edit Accessory" : "Add Accessory"}
        </h2>

        {success && (
          <p className="text-green-600 mb-3">
            Accessory saved successfully ✅
          </p>
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
            {loading
              ? "Saving..."
              : editingId
              ? "Update Accessory"
              : "Add Accessory"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAccessoryForm;
