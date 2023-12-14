import { postCommentByArticleId } from "../api";
import "./CommentAdder.css";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import SignIn from "../SignIn/SignIn";

export default function CommentAdder({ setComments, article }) {
  const [newComment, setNewComment] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
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

    const optimisticComment = {
      ...commentToPost,
      votes: 0,
      created_at: new Date().toJSON(),
      author: commentToPost.username,
    };

    setIsPending(true);

    postCommentByArticleId(article.article_id, commentToPost).then((resComment) =>{
         setIsPending(false);
      setComments((currComments) => {
   

        return [resComment, ...currComments];
      })}
    );

    setNewComment("");
  }

  function handleEmptySubmit(e) {
    setIsInvalid(true);
    e.preventDefault();
  }

  if(!user){
    return <div>
      <p>
      Please sign in to make a comment</p>
      <SignIn inComments={true} />
    </div>
    
  }else return (
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
