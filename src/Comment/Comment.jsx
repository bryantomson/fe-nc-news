import "./Comment.css";
import { UserContext } from "../UserContext";
import { useContext, useState } from "react";
import DeleteComment from "../DeleteComment/DeleteComment";
import CommentVoteButtons from "../CommentVoteButtons/CommentVoteButtons";

export default function Comment({ comment, setComments }) {
  const { user, setUser } = useContext(UserContext);
  const [deletePending, setDeletePending] = useState(false);

  const date = comment.created_at.slice(0, -14);
  const time = comment.created_at.slice(11, 16);
  return (
    <div id="comment-container" className={deletePending ? "comment-pending-delete" : ""}>
      <div id="comment-top">
        <div id="comment-author">{comment.author} </div>
        <div id="comment-date">
          {date}, {time}
        </div>
      </div>
      <div id="comment-body">{comment.body}</div>
      <div id="comment-bottom">
        <div id="comment-votes">
          <CommentVoteButtons comment={comment} setComments={setComments} />
        </div>{" "}
        <div id="comment-delete">
          {user ? (
            comment.author === user.username ? (
              <DeleteComment deletePending={deletePending} setDeletePending={setDeletePending} setComments={setComments} comment={comment} />
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
