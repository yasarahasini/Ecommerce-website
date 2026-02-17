"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  "Phones",
  "Laptops",
  "Headphones",
  "Smartwatches",
  "Gaming",
];

type Electronic = {
  _id?: string;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
};

const API_URL = "http://localhost:3001/electronics";

const AddElectronicPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<Electronic>({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const [products, setProducts] = useState<Electronic[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (editingId) {
        setProducts((prev) =>
          prev.map((p) => (p._id === editingId ? data : p))
        );
        setEditingId(null);
      } else {
        setProducts((prev) => [...prev, data]);
      }

      setFormData({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
      });
    } catch (err) {
      alert("Save failed ❌");
    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch {
      alert("Delete failed ❌");
    }
  };


  const handleEdit = (product: Electronic) => {
    setFormData(product);
    setEditingId(product._id || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="max-w-5xl mx-auto px-6 py-10">

     
        <h1 className="text-3xl font-bold mb-6">Electronic Products</h1>

        {products.length > 0 ? (
          <div className="overflow-x-auto mb-10">
            <table className="w-full bg-white shadow rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item._id} className="border-b">
                    <td className="p-3">
                      {item.image && (
                        <img
                          src={item.image}
                          className="w-16 h-12 object-cover rounded"
                        />
                      )}
                    </td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">${item.price}</td>
                    <td className="p-3">{item.category}</td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-yellow-400 px-3 py-1 rounded text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id!)}
                        className="bg-red-500 px-3 py-1 rounded text-white"
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
          <p className="mb-10">No products yet.</p>
        )}

     
        <h2 className="text-2xl text-black  font-bold mb-6">
          {editingId ? "Edit Product" : "Add New Electronic"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              {loading
                ? "Saving..."
                : editingId
                ? "Update Product"
                : "Add Product"}
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-300 px-6 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddElectronicPage;
