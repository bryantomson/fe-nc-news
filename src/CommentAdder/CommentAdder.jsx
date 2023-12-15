import { postCommentByArticleId } from "../api";
import "./CommentAdder.css";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import SignIn from "../SignIn/SignIn";

export default function CommentAdder({ setComments, article }) {
  const [newComment, setNewComment] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [postCommentErr, setPostCommentErr] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function handleCommentChange(e) {
    setIsInvalid(false);
    setNewComment(e.target.value);
  }

  function handleCommentSubmit(e) {
    e.preventDefault();
    const commentToPost = {
      username: user.username,
      body: newComment,
    };

    setIsPending(true);
    setPostCommentErr(false);

    postCommentByArticleId(article.article_id, commentToPost)
      .then((resComment) => {
        setIsPending(false);
        setComments((currComments) => {
          return [resComment, ...currComments];
        });
      })
      .catch(() => {
        setIsPending(false);
        setPostCommentErr(true);
      });

    setNewComment("");
  }

  function handleEmptySubmit(e) {
    setIsInvalid(true);
    setPostCommentErr(false);
    e.preventDefault();
  }

  if (!user) {
    return (
      <div>
        <p>Please sign in to make a comment</p>
        <SignIn inComments={true} />
      </div>
    );
  } else
    return (
      <form
        className="comment-form"
        onSubmit={newComment.length ? handleCommentSubmit : handleEmptySubmit}
      >
        <div className="comment-input">
          <textarea
            type="text"
            placeholder={"Add a comment..."}
            onChange={handleCommentChange}
            value={newComment}
            className={`comment-input  ${isInvalid ? "invalid-input" : ""}`}
          ></textarea>
          <p>{postCommentErr ? "there was an error" : ""}</p>
        </div>
        <div className="sumbit-container">
          <button
            className={`sumbit-button ${isPending ? "submitted-button" : ""}`}
            disabled={isPending ? true : false}
          >
            {isPending ? "Comment submitted" : "Submit comment"}
          </button>
          <p className="invalid-message">
            {isInvalid ? "Please enter a comment" : ""}
          </p>
        </div>
      </form>
    );
}
