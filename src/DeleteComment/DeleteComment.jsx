import { deleteCommentById } from "../api";
import { useState } from "react";
import "./DeleteComment.css"

export default function DeleteComment({ comment, setComments }) {
const [deleteCommentErr, setDeleteCommentErr] = useState(false)
const [deletePending, setDeletePending] = useState(false)

  function handleDeleteComment() {
    setDeletePending(true)
    deleteCommentById(comment.comment_id).then((res)=>{
        setDeletePending(false)
      setComments((currComments) => {
        return [...currComments].filter(
          (currComment) => comment.comment_id !== currComment.comment_id
        )
      })}
    ).catch((err)=>{
        setDeleteCommentErr(true)

    })
  }


  return (
    <div id="delete-comment-container">
        <p id="delete-comment-err-msg">{deleteCommentErr ? "Could not delete comment" : null}</p>
        <div
          className={deletePending ? "deleted-comment-button" : "delete-comment-button" }
          disabed={deletePending ? true : false}
          onClick={handleDeleteComment}
          onKeyUp={handleDeleteComment}
        >
          ❌ <span class="tooltiptext">Delete comment</span>
        
        </div>
    </div>
  );
}
