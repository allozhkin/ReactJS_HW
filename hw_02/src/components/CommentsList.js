import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const deleteComment = (index) => {
    {
      const newComments = [...comments];
      newComments.splice(index, 1);
      setComments(newComments);
    }
  };
  return comments.map((comment) => (
    <>
      <div key={comment.id}>{comment.text}</div>
      <button onClick={() => deleteComment()}>Delete</button>
    </>
  ));
}

export default CommentsList;
