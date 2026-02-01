"use client";
import React, { useState } from "react";

interface FashionFormData {
  name: string;
  price: string;
  image: string;
}

const AddFashionForm: React.FC = () => {
  const [formData, setFormData] = useState<FashionFormData>({
    name: "",
    price: "",
    image: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("New Fashion Item:", formData);

    setSuccess(true);
    setFormData({ name: "", price: "", image: "" });

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "2rem auto",
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        color: "black",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
        Add Fashion Item
      </h2>

      {success && (
        <p style={{ color: "green", marginBottom: "0.8rem" }}>
          Item added successfully ✅
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="price"
          placeholder="Price (e.g. $39.99)"
          value={formData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Add Item
        </button>
      </form>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  padding: "0.6rem",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "blue",
  color: "white",
  padding: "0.6rem",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
};

export default AddFashionForm;
