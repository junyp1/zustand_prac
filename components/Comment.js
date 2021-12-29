import React, { useCallback, useState } from "react";
import commentStore from "../store/comment";

const Comment = () => {
  const [text, setText] = useState("");

  const setComment = commentStore((state) => state.setComment);
  const onChangeComment = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const onSubmitComment = useCallback(() => {
    console.log(text);
    setComment(text);
  }, [text]);

  return (
    <>
      <div>
        <input value={text} type="text" onChange={onChangeComment}></input>
        <button onClick={onSubmitComment}>comment</button>
      </div>
    </>
  );
};

export default Comment;
