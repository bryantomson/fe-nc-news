import { useState } from "react";
import { patchCommentById } from "../api";

export default function CommentVoteButtons({
  comment,
  setComments,
  setComment,
}) {
  const [isErr, setIsErr] = useState(false);

  function incCommentVotes(inc) {
    setIsErr(false);

    setComments((currComments) => {
      return [...currComments].map((currComment) => {
        if (currComment.comment_id === comment.comment_id) {
          return { ...currComment, votes: currComment.votes + inc };
        } else return { ...currComment };
      });
    });

    patchCommentById(comment.comment_id, inc).catch((err) => {
      setIsErr(true);

      setComments((currComments) => {
        return [...currComments].map((currComment) => {
          if (currComment.comment_id === comment.comment_id) {
            return { ...currComment, votes: currComment.votes - inc };
          } else return { ...currComment };
        });
      });
    });
  }

  return (
    <>
      <div className="votes-display">
        Votes: {comment.votes}
        <div className="vote-buttons">
          <div
            className={`upvote ${isErr ? "vote-buttons-error" : ""}`}
            onClick={() => {
              incCommentVotes(1);
            }}
          >
            ⬆️
          </div>
          <div
            className={`downvote ${isErr ? "vote-buttons-error" : ""}`}
            onClick={() => {
              incCommentVotes(-1);
            }}
          >
            ⬇️
          </div>
        </div>
      </div>
      <p id="vote-err-msg">{isErr ? "There was a problem" : ""}</p>
    </>
  );
}
