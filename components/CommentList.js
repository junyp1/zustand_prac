import React from "react";
import commentStore from "../store/comment";

const CommentList = () => {
  const { comments } = commentStore((state) => ({
    comments: state.comments,
  }));

  return (
    <div>
      {comments.map((v, idx) => (
        <div key={idx}>{v}</div>
      ))}
    </div>
  );
};

export default CommentList;
