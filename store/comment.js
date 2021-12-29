import create from "zustand";
import { devtools } from "zustand/middleware";

const setComment = (set, { content }) => {
  set((state) => ({
    comments: [...state.comments, content],
  }));
};

const store = devtools(
  (set, get, api) => ({
    comments: [],
    setComment: (content) => setComment(set, { content }),
  }),
  "commentStore"
);
const commentStore = create(store);

export default commentStore;
