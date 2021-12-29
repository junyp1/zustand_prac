import create from "zustand";
import { devtools } from "zustand/middleware";

const setName = (set, { name }) => {
  set((_) => {
    return { name: name };
  });
};

const store = devtools(
  (set, get, api) => ({
    name: "JUNYEONG",
    setName: (name) => setName(set, { name }),
  }),
  "nameStore"
);
const nameStore = create(store);

export default nameStore;
