import { postCommentByArticleId } from "../api";
import "./CommentAdder.css";
import { useState } from "react";

export default function CommentAdder({  setComments, article }) {
  const [newComment, setNewComment] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  function handleCommentChange(e) {
    setIsInvalid(false);
    setNewComment(e.target.value);
  }

  function handleCommentSubmit(e) {
    e.preventDefault();
    const commentToPost = {
      username: "tickle122",
      body: newComment,
    };

    const optimisticComment = {
      ...commentToPost,
      votes: 0,
      created_at: new Date().toJSON(),
      author: commentToPost.username,
    };

    setIsPending(true);

    postCommentByArticleId(article.article_id, commentToPost).then(() =>
      setComments((currComments) => {
        setIsPending(false);

        return [
          optimisticComment,
          ...currComments,
        ];
      })
    );


    setNewComment("");
  }

  function handleEmptySubmit(e) {
    setIsInvalid(true);
    e.preventDefault();
  }

  return (
    <form
    className="comment-form"
      onSubmit={newComment.length ? handleCommentSubmit : handleEmptySubmit}
    >
      <textarea
  
        type="text"
        placeholder="Add a comment..."
        onChange={handleCommentChange}
        value={newComment}
        className={`comment-input  ${isInvalid ? "invalid-input" : ""}`}
      ></textarea>
      <div className="sumbit-container">
        <button className={`sumbit-button ${isPending ? "submitted-button" : ""}`} disabled={isPending ? true : false}>{isPending ? "Comment submitted" : "Submit comment"}</button>
        <p className="invalid-message">
          {isInvalid ? "Please enter a comment" : ""}
        </p>
      </div>
    </form>
  );
}
