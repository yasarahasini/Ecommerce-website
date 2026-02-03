import React from "react";
import Deals from '../(user)/deals/page';

interface Deal {
  id: number;
  name: string;
  price: string;
  discount: string;
  modelUrl: string;
}

const deals: Deal[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59",
    discount: "20% OFF",
    modelUrl: "/3d/headphones.glb",
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    price: "$120",
    discount: "15% OFF",
    modelUrl: "/3d/smartwatch.glb",
  },
  {
    id: 3,
    name: "Gaming Chair",
    price: "$199",
    discount: "25% OFF",
    modelUrl: "/3d/chair.glb",
  },
  {
    id: 4,
    name: "4K Drone",
    price: "$450",
    discount: "10% OFF",
    modelUrl: "/3d/drone.glb",
  },
];

const Deals3D: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Hot 3D Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {deals.map((deal) => (
          <Deals key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  );
};

export default Deals3D;
