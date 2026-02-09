"use client";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Manage your ShopEase store
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <DashboardCard title="Total Users" value="1,240" />
        <DashboardCard title="Total Orders" value="856" />
        <DashboardCard title="Revenue" value="LKR 1,250,000" />
        <DashboardCard title="Products" value="320" />
      </section>

      {/* Recent Orders */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <OrderRow id="#1023" name="Kasun Perera" total="LKR 12,500" status="Completed" />
              <OrderRow id="#1024" name="Nimali Silva" total="LKR 8,900" status="Pending" />
              <OrderRow id="#1025" name="Amila Fernando" total="LKR 15,200" status="Cancelled" />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

/* ---------- Components ---------- */

const DashboardCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <p className="text-gray-500 text-sm">{title}</p>
    <h3 className="text-2xl font-bold mt-2">{value}</h3>
  </div>
);

const OrderRow = ({
  id,
  name,
  total,
  status,
}: {
  id: string;
  name: string;
  total: string;
  status: string;
}) => {
  const statusColor =
    status === "Completed"
      ? "text-green-600"
      : status === "Pending"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <tr className="border-b">
      <td className="px-4 py-3">{id}</td>
      <td className="px-4 py-3">{name}</td>
      <td className="px-4 py-3">{total}</td>
      <td className={`px-4 py-3 font-semibold ${statusColor}`}>
        {status}
      </td>
    </tr>
  );
};
