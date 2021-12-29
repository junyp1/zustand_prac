import create from "zustand";
import { devtools } from "zustand/middleware";

const increaseCount = (state) => {
  return { count: state.count + 1 };
};

const decreaseCount = (state) => {
  return { count: state.count - 1 };
};
const store = devtools(
  (set, get, api) => ({
    count: 0,
    increaseCount: () => set(increaseCount),
    decreaseCount: () => set(decreaseCount),
  }),
  "counterStore"
);

const counterStore = create(store);

export default counterStore;
