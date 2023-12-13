import CommentAdder from "../CommentAdder/CommentAdder";
import Collapsible from "../Collapsible/Collapsible";
import CommentsList from "../CommentsList/CommentsList";
import { useState } from "react";

export default function Comments({ article }) {
  const [comments, setComments] = useState([]);
    const [displayedComment, setDisplayedComment] = useState([]);
    const [hiddenComments, setHiddenComments] = useState([]);


  return (
    <div id="comments-container">
      Comments ({article.comment_count})
      <CommentAdder
        comments={comments}
        setComments={setComments}
        article={article}
        setDisplayedComment={setDisplayedComment}
        setHiddenComments={setHiddenComments}
      />

        <CommentsList
        displayedComment={displayedComment}
        setDisplayedComment={setDisplayedComment}
        hiddenComments={hiddenComments}
        setHiddenComments={setHiddenComments}
          article={article}
          comments={comments}
          setComments={setComments}
        />
    
    </div>
  );
}
