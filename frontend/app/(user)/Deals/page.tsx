"use client";

import dynamic from "next/dynamic";

const BoardCanvas = dynamic(
  () => import("../../components/BoardCanvas"),
  { ssr: false }
);

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Build Your Board</h1>

      <div className="bg-white rounded-xl shadow p-6">
        <BoardCanvas />
      </div>
    </main>
  );
}
