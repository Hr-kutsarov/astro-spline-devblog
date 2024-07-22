import { create } from "zustand";

interface sampleBears {
  name: string;
  age: number;
  hungry: boolean;
}

const bearData = [
  { name: "Bob", age: 23, hungry: false },
  { name: "Jim", age: 17, hungry: true },
  { name: "Bill", age: 14, hungry: false },
];
// example
interface bearStoreProps {
  bears: sampleBears[];
  increasePopulation: (data: sampleBears[]) => void;
  removeAllBears: () => void;
}

const useBearStore = create<bearStoreProps>((set) => ({
  bears: bearData,
  increasePopulation: (data) => set((state) => ({ bears: data })),
  removeAllBears: () => set({ bears: [] }),
}));

export { useBearStore };
export type { bearStoreProps };
