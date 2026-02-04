"use client";

import BoardCanvas from "@/app/components/BoardCanvas";
import OptionGroup from "@/app/components/optionalgroup";
import { useBoardStore } from "@/app/components/store";
export default function BuildPage() {
  const {
    deckColor,
    wheelColor,
    truckColor,
    setDeck,
    setWheel,
    setTruck,
  } = useBoardStore();

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* 3D View */}
      <div className="flex-1 bg-[#3a414a]">
        <BoardCanvas />
      </div>

      {/* Controls */}
      <aside className="w-full lg:w-96 bg-zinc-900 text-white p-6 space-y-6">
        <h1 className="uppercase text-3xl">Build your board</h1>

        <OptionGroup
          title="Deck"
          selected={deckColor}
          onChange={setDeck}
          colors={["#ffffff", "#000000", "#e84118", "#8e44ad", "#f1c40f"]}
        />

        <OptionGroup
          title="Wheels"
          selected={wheelColor}
          onChange={setWheel}
          colors={["#e84118", "#ffffff", "#000000", "#3498db"]}
        />

        <OptionGroup
          title="Trucks"
          selected={truckColor}
          onChange={setTruck}
          colors={["#deb887", "#eeeeee", "#333333"]}
        />
      </aside>
    </main>
  );
}
