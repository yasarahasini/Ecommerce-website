"use client";
import React, { useState, useEffect } from "react";

type Deal = {
  _id?: string;
  title: string;
  originalPrice: string;
  discountPrice: string;
  image: string | null;
};

const AddDealForm = () => {
  const [formData, setFormData] = useState<Deal>({
    title: "",
    originalPrice: "",
    discountPrice: "",
    image: null,
  });

  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null); // track editing


  const fetchDeals = async () => {
    try {
      const res = await fetch("http://localhost:3001/deals");
      const data = await res.json();
      setDeals(data);
    } catch (err) {
      console.error("Failed to fetch deals:", err);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value } as Deal));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);
      setFormData((prev) => ({ ...prev, image: result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `http://localhost:3001/deals/${editingId}`
        : "http://localhost:3001/deals";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save deal");

      const data = await res.json();
      if (editingId) {
        
        setDeals((prev) => prev.map((d) => (d._id === editingId ? data : d)));
        setEditingId(null);
      } else {
       
        setDeals((prev) => [...prev, data]);
      }

      setSuccess(true);
      setFormData({ title: "", originalPrice: "", discountPrice: "", image: null });
      setPreview(null);
    } catch (err) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this deal?")) return;
    try {
      const res = await fetch(`http://localhost:3001/deals/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete deal");
      setDeals((prev) => prev.filter((d) => d._id !== id));
    } catch (err) {
      alert("Failed to delete deal ❌");
    }
  };

  const handleEdit = (deal: Deal) => {
    setFormData(deal);
    setPreview(deal.image);
    setEditingId(deal._id || null);
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f9fafb", padding: "3rem 1.5rem" }}>
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>Deals</h2>

     
        {deals.length > 0 ? (
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
            <thead>
              <tr style={{ backgroundColor: "#2563eb", color: "#fff" }}>
                <th style={thTdStyle}>Title</th>
                <th style={thTdStyle}>Original Price</th>
                <th style={thTdStyle}>Discount Price</th>
                <th style={thTdStyle}>Image</th>
                <th style={thTdStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal._id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={thTdStyle}>{deal.title}</td>
                  <td style={thTdStyle}>{deal.originalPrice}</td>
                  <td style={thTdStyle}>{deal.discountPrice}</td>
                  <td style={thTdStyle}>
                    {deal.image && (
                      <img
                        src={deal.image}
                        alt={deal.title}
                        style={{ width: "80px", height: "50px", objectFit: "cover", borderRadius: "6px" }}
                      />
                    )}
                  </td>
                  <td style={thTdStyle}>
                    <button
                      onClick={() => handleEdit(deal)}
                      style={actionBtnStyle("#facc15")}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(deal._id!)}
                      style={actionBtnStyle("#ef4444")}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No deals available.</p>
        )}

      
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>
            {editingId ? "Edit Deal" : "Add New Deal"}
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Deal title"
              value={formData.title}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="number"
              name="originalPrice"
              placeholder="Original price"
              value={formData.originalPrice}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="number"
              name="discountPrice"
              placeholder="Discount price"
              value={formData.discountPrice}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input type="file" accept="image/*" onChange={handleImageChange} style={inputStyle} />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "12px", marginTop: "0.8rem" }}
              />
            )}

            <button
              type="submit"
              style={{
                marginTop: "1.5rem",
                width: "100%",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "0.75rem",
                borderRadius: "10px",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {loading ? "Saving..." : editingId ? "Update Deal" : "Add Deal"}
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem",
  marginBottom: "0.8rem",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};

const thTdStyle: React.CSSProperties = {
  padding: "0.75rem",
  textAlign: "left",
};

const actionBtnStyle = (color: string): React.CSSProperties => ({
  marginRight: "0.5rem",
  padding: "0.4rem 0.8rem",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: color,
  color: "#fff",
  fontWeight: 600,
});

export default AddDealForm;
