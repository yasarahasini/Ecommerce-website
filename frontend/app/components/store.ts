import { create } from "zustand";

type BoardState = {
  deckColor: string;
  wheelColor: string;
  truckColor: string;
  setDeck: (c: string) => void;
  setWheel: (c: string) => void;
  setTruck: (c: string) => void;
};

export const useBoardStore = create<BoardState>((set) => ({
  deckColor: "#ffffff",
  wheelColor: "#e84118",
  truckColor: "#deb887",

  setDeck: (deckColor) => set({ deckColor }),
  setWheel: (wheelColor) => set({ wheelColor }),
  setTruck: (truckColor) => set({ truckColor }),
}));
