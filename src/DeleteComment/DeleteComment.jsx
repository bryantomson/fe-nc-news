import { deleteCommentById } from "../api";
import { useState } from "react";
import "./DeleteComment.css";

export default function DeleteComment({
  deletePending,
  setDeletePending,
  comment,
  setComments,
}) {
  const [deleteCommentErr, setDeleteCommentErr] = useState(false);

  function handleDeleteComment() {
    setDeleteCommentErr(false);
    setDeletePending(true);
    deleteCommentById(comment.comment_id)
      .then((res) => {
        setComments((currComments) => {
          return [...currComments].filter(
            (currComment) => comment.comment_id !== currComment.comment_id
          );
        });
        setDeletePending(false);
      })
      .catch((err) => {
        setDeletePending(false);

        setDeleteCommentErr(true);
      });
  }

  return (
    <div id="delete-comment-container">
      <p id="delete-comment-err-msg">
        {deleteCommentErr ? "Could not delete comment" : null}
      </p>
      <div
        className={
          deletePending ? "deleted-comment-button" : "delete-comment-button"
        }
        disabled={deletePending ? true : false}
        onClick={handleDeleteComment}
        onKeyUp={handleDeleteComment}
      >
        ❌ <span class="tooltiptext">Delete comment</span>
      </div>
    </div>
  );
}
