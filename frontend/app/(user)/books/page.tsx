"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
  category: string;
  format: "Hardcover" | "Paperback" | "E-book";
  rating: number;
}

const dummyBooks: Book[] = [
  { 
    id: 1, 
    title: "The Midnight Library", 
    author: "Matt Haig", 
    price: 18.99, 
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f", 
    category: "Fiction",
    format: "Hardcover",
    rating: 4.8
  },
  { 
    id: 2, 
    title: "Atomic Habits", 
    author: "James Clear", 
    price: 22.50, 
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73", 
    category: "Self-Help",
    format: "Paperback",
    rating: 4.9
  },
  { 
    id: 3, 
    title: "The Great Gatsby", 
    author: "F. Scott Fitzgerald", 
    price: 12.00, 
    img: "/baby.jpg", 
    category: "Classic",
    format: "Hardcover",
    rating: 4.5
  },
  { 
    id: 4, 
    title: "Dune", 
    author: "Frank Herbert", 
    price: 25.99, 
    img: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a", 
    category: "Sci-Fi",
    format: "Hardcover",
    rating: 4.7
  }
];

const categories = ["All Books", "Fiction", "Self-Help", "Classic", "Sci-Fi", "History"];

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(dummyBooks);
  const [selectedCategory, setSelectedCategory] = useState("All Books");

  const filteredBooks = selectedCategory === "All Books" 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#1a1a1a]">
    
      <header className="bg-[#1a365d] text-[#fdfcf8] py-16 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">The Bibliophile's Haven</h1>
          <p className="text-blue-200 font-light italic mb-8">"A room without books is like a body without a soul."</p>
          
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search by title, author, or ISBN..." 
              className="w-full py-3 px-6 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-inner"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      
        <aside className="w-full md:w-56 shrink-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#1a365d] mb-6 border-b-2 border-yellow-500 pb-2">Genres</h2>
          <nav>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-md transition-all block w-full text-left py-1 ${
                      selectedCategory === cat 
                        ? "text-[#1a365d] font-bold border-l-4 border-[#1a365d] pl-3" 
                        : "text-gray-600 hover:text-[#1a365d] hover:pl-2"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

      
        <main className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} className="flex flex-col group">
                <Link href={`/book/${book.id}`}>
              
                  <div className="relative aspect-[2/3] w-full shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 rounded-r-lg overflow-hidden border-l-4 border-black/20">
                    <img
                      src={book.img}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="mt-4">
                    <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-tighter">{book.category}</span>
                    <h3 className="text-lg font-serif font-bold text-[#1a365d] leading-tight mt-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 italic">{book.author}</p>
                    
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-yellow-500 text-xs">★</span>
                      <span className="text-xs font-bold text-gray-700">{book.rating}</span>
                      <span className="text-gray-300 mx-1">|</span>
                      <span className="text-[10px] text-gray-500 uppercase">{book.format}</span>
                    </div>

                    <p className="text-[#1a365d] font-bold mt-3">${book.price}</p>
                  </div>
                </Link>
                
                <button className="mt-4 w-full border border-[#1a365d] text-[#1a365d] py-2 text-sm font-bold hover:bg-[#1a365d] hover:text-white transition-colors">
                  Add to Bag
                </button>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
              <p className="text-gray-500 italic font-serif">Alas, this shelf is currently empty.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BooksPage;