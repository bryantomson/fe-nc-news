import Comment from "../Comment/Comment";
import { getCommentsByArticleId } from "../api";
import "./CommentsList.css";
import { useState, useEffect } from "react";
import Collapsible from "../Collapsible/Collapsible";

export default function CommentsList({ article, comments, setComments, displayedComment, hiddenComments,setDisplayedComment, setHiddenComments }) {
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article.article_id).then((res) => {
      setComments(res);
      setDisplayedComment(res.slice(0, -(res.length-1)))
      setHiddenComments(res.slice(1))
      setCommentsLoading(false);
    });
  }, []);

  if (commentsLoading) {
    return <h2>Loading...</h2>;
  } else
    return (
      <ul className="comments-list">
        {displayedComment.map((comment) => {
          return (
            <li key={comment.comment_id}> {<Comment comment={comment} />}</li>
          );
        })}

        <Collapsible item="comment" length={comments.length - 1}>
          {hiddenComments.map((comment) => {
            return (
              <li key={comment.comment_id}> {<Comment comment={comment} />}</li>
            );
          })}
        </Collapsible>
      </ul>
    );
}
