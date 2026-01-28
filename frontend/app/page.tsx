// pages/index.tsx
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const products: Product[] = [
  { id: 1, name: "Red Sneakers", price: 59.99, img: "/products/red-shoes.jpg" },
  { id: 2, name: "Blue T-Shirt", price: 25.0, img: "/products/blue-shirt.jpg" },
  { id: 3, name: "Black Jacket", price: 120.0, img: "/products/black-jacket.jpg" },
  { id: 4, name: "Jeans", price: 70.0, img: "/products/jeans.jpg" },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My eCommerce Store</h1>
        <p className="text-gray-600 mb-6">Find the best products at unbeatable prices!</p>
        <Link href="#products">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
