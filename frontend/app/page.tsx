
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const products: Product[] = [
  { id: 1, name: "Red Sneakers", price: 59.99, img: "/products/1.jpg" },
  { id: 2, name: "Blue T-Shirt", price: 25.0, img: "/products/2.jpg" },
  { id: 3, name: "Black Jacket", price: 120.0, img: "/products/3.jpg" },
  { id: 4, name: "Jeans", price: 70.0, img: "/products/4.jpg" },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <section className="relative h-[420px] md:h-[320px] flex items-center justify-center text-center text-white">
   
        <Image
          src="/1.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50"></div>

   
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to My eCommerce Store
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Find the best products at unbeatable prices!
          </p>
          <Link href="#products">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg text-white font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

    
     

      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm">
              A modern eCommerce platform delivering quality products at the
              best prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="#products" className="hover:text-white">Shop</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded text-black mb-3"
            />
            <button className="w-full bg-red-600 hover:bg-red-700 transition text-white py-2 rounded">
              Subscribe
            </button>
          </div>

        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} My eCommerce Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
