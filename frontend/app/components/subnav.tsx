"use client"

import Link from "next/link"

const SubNav = () => {
  return (
    <div className="w-full px-20  flex items-center justify-center text-center bg-white text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center gap-6 h-12 overflow-x-auto text-sm font-medium">
          
          <Link href="/deals" className="text-red-700 hover:text-red-700 whitespace-nowrap">
            🔥 Deals
          </Link>

          <Link href="/newarrivals" className="hover:text-blue-600 whitespace-nowrap">
            New Arrivals
          </Link>

          <Link href="/men" className="hover:text-blue-600 whitespace-nowrap">
            Men
          </Link>

          <Link href="/women" className="hover:text-blue-600 whitespace-nowrap">
            Women
          </Link>

          <Link href="/electronics" className="hover:text-blue-600 whitespace-nowrap">
            Electronics
          </Link>

          <Link href="/fashion" className="hover:text-blue-600 whitespace-nowrap">
            Fashion
          </Link>

          <Link href="/accessories" className="hover:text-blue-600 whitespace-nowrap">
            Accessories
          </Link>

        </nav>
      </div>
    </div>
  )
}

export default SubNav
