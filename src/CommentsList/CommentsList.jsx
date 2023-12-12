import Comment from "../Comment/Comment";
import { getCommentsByArticleId } from "../api";
import "./CommentsList.css";
import { useState, useEffect } from "react";

export default function CommentsList({ article }) {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article.article_id).then((res) => {
      setComments(res);
      setCommentsLoading(false);
    });
  }, []);

  if(commentsLoading) { return <h2>Loading...</h2>
} else return (
   
        <ul className="comments-list">
              {comments.map((comment) => {
                return <li key={comment.comment_id} > {<Comment comment={comment} />}</li>
              })}
        
        </ul>
    
  );
}
