import create from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const Test = () => {
  const bears = useStore((state) => state.bears);
  const increaseHandler = useStore((state) => state.increasePopulation);
  const removeHandler = useStore((state) => state.removeAllBears);
  return (
    <div>
      <h1>{bears} around here ...</h1>
      <button onClick={increaseHandler}>one up</button>
      <button onClick={removeHandler}>remove</button>
    </div>
  );
};

export default Test;
