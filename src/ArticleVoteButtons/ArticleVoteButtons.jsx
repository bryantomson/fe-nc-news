import { useState } from "react";
import { patchArticleById } from "../api";

export default function ArticleVoteButtons({
  article,
  setArticles,
  setArticle,
  inArticle,
}) {
  const [isErr, setIsErr] = useState(false);

  function incArticleVotes(inc) {
    setIsErr(false);
    if (!inArticle) {
      setArticles((currArticles) => {
        return [...currArticles].map((currArticle) => {
          if (currArticle.article_id === article.article_id) {
            return { ...currArticle, votes: currArticle.votes + inc };
          } else return { ...currArticle };
        });
      });
    }

    if (inArticle) {
      setArticle({ ...article, votes: article.votes + inc });
    }

    patchArticleById(article.article_id, inc).catch((err) => {
      setIsErr(true);
      if (inArticle) {
        setArticle((currArticle) => {
          return { ...currArticle, votes: currArticle.votes - inc };
        });
      } else {
        setArticles((currArticles) => {
          return [...currArticles].map((currArticle) => {
            if (currArticle.article_id === article.article_id) {
              return { ...currArticle, votes: currArticle.votes - inc };
            } else return { ...currArticle };
          });
        });
      }
    });
  }

  return (
    <>
      <div className="votes-display">
        Votes: {article.votes}
        <div className="vote-buttons">
          <div
            className={`upvote ${isErr ? "vote-buttons-error" : ""}`}
            onClick={() => {
              incArticleVotes(1);
            }}
          >
            ⬆️
          </div>
          <div
            className={`downvote ${isErr ? "vote-buttons-error" : ""}`}
            onClick={() => {
              incArticleVotes(-1);
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
