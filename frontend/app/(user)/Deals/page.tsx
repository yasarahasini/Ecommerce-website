import React from "react";

interface DealItem {
  id: number;
  title: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
}

const deals: DealItem[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    originalPrice: 99.99,
    discountPrice: 69.99,
    image: "/images/deal1.jpg",
  },
  {
    id: 2,
    title: "Smart Watch",
    originalPrice: 149.99,
    discountPrice: 99.99,
    image: "/images/deal2.jpg",
  },
  {
    id: 3,
    title: "Running Shoes",
    originalPrice: 119.99,
    discountPrice: 79.99,
    image: "/images/deal3.jpg",
  },
  {
    id: 4,
    title: "Leather Backpack",
    originalPrice: 89.99,
    discountPrice: 59.99,
    image: "/images/deal4.jpg",
  },
];

const Deals: React.FC = () => {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f9fafb", padding: "3rem 1.5rem" }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Today’s Deals
        </h1>

        <p style={{ color: "#4b5563", marginBottom: "2.5rem" }}>
          Grab these limited-time offers before they’re gone!
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {deals.map((deal) => {
            const discountPercent = Math.round(
              ((deal.originalPrice - deal.discountPrice) / deal.originalPrice) * 100
            );

            return (
              <div
                key={deal.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {discountPercent}% OFF
                </span>

                <img
                  src={deal.image}
                  alt={deal.title}
                  style={{ width: "100%", height: "240px", objectFit: "cover" }}
                />

                <div style={{ padding: "1.2rem" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                    {deal.title}
                  </h3>

                  <div style={{ margin: "0.5rem 0" }}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#9ca3af",
                        marginRight: "0.5rem",
                      }}
                    >
                      ${deal.originalPrice.toFixed(2)}
                    </span>

                    <span style={{ color: "#16a34a", fontWeight: 700 }}>
                      ${deal.discountPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    style={{
                      marginTop: "0.8rem",
                      width: "100%",
                      backgroundColor: "#2563eb",
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
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Deals;
