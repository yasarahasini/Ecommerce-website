"use client";

import { useEffect, useState } from "react";

type FashionItem = {
  _id?: string;
  name: string;
  price: string;
  image: string;
};

const API_URL = "http://localhost:3001/fashion";

const AddFashionForm = () => {
  const [formData, setFormData] = useState<FashionItem>({
    name: "",
    price: "",
    image: "",
  });

  const [items, setItems] = useState<FashionItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ fetch fashion items
  const fetchItems = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ submit (add/update)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
      setFormData({ name: "", price: "", image: "" });
    } catch {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  // ✅ delete
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch {
      alert("Delete failed ❌");
    }
  };

  // ✅ edit
  const handleEdit = (item: FashionItem) => {
    setFormData(item);
    setEditingId(item._id || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto text-black">

      {/* ✅ TABLE */}
      <h2 className="text-2xl font-bold mb-4">Fashion Items</h2>

      {items.length > 0 ? (
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
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
                        src={item.image}
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
        <p className="mb-6">No fashion items yet.</p>
      )}

      {/* ✅ FORM */}
      <div className="max-w-md bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "Edit Fashion Item" : "Add Fashion Item"}
        </h2>

        {success && (
          <p className="text-green-600 mb-3">
            Item saved successfully ✅
          </p>
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
            {loading
              ? "Saving..."
              : editingId
              ? "Update Item"
              : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFashionForm;
