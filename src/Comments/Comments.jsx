import CommentAdder from "../CommentAdder/CommentAdder";

import CommentsList from "../CommentsList/CommentsList";
import { useState } from "react";
import "./Comments.css"

export default function Comments({ article }) {
  const [comments, setComments] = useState([]);


  return (
    <div id="comments-container">
      <h2>Leave a comment</h2>
      <CommentAdder
        comments={comments}
        setComments={setComments}
        article={article}
      />

        <CommentsList
        className={"comments-list"}
       
          article={article}
          comments={comments}
          setComments={setComments}
        />
    
    </div>
  );
}
