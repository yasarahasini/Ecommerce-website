import React from "react";

interface FashionItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

const fashionItems: FashionItem[] = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$49.99",
    image: "/f1.jpg",
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: "$39.99",
    image: "/f22.jpg",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$59.99",
    image: "/f3.jpg",
  },
  {
    id: 4,
    name: "Stylish Handbag",
    price: "$29.99",
    image: "/f4.jpg",
  },
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$49.99",
    image: "/f1.jpg",
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: "$39.99",
    image: "/f22.jpg",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$59.99",
    image: "/f3.jpg",
  },
  {
    id: 4,
    name: "Stylish Handbag",
    price: "$29.99",
    image: "/f4.jpg",
  },
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$49.99",
    image: "/f1.jpg",
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: "$39.99",
    image: "/f22.jpg",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$59.99",
    image: "/f3.jpg",
  },
  {
    id: 4,
    name: "Stylish Handbag",
    price: "$29.99",
    image: "/f4.jpg",
  },
];

const Fashion: React.FC = () => {
  return (
    <main style={{ minHeight: "100vh", color: "black", backgroundColor: "#f3f4f6", padding: "3rem 1.5rem" }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Fashion Collection
        </h1>

        <p style={{ color: "#4b5563", marginBottom: "2.5rem" }}>
          Discover the latest trends in fashion. Handpicked styles just for you.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {fashionItems.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />

              <div style={{ padding: "1.2rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  {item.name}
                </h3>

                <p style={{ color: "#6b7280", margin: "0.5rem 0" }}>
                  {item.price}
                </p>

                <button
                  style={{
                    marginTop: "0.8rem",
                    width: "100%",
                    backgroundColor: "blue",
                    color: "#ffffff",
                    padding: "0.6rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Fashion;
