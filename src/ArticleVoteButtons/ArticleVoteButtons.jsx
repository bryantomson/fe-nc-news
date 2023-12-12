import { patchArticleById } from "../api";

export default function ArticleVoteButtons({
  article,
  setArticles,
  setArticle,
  inArticle,
}) {
  function incArticleVotes(inc) {
    if (!inArticle) {
      setArticles((currArticles) => {
        return [...currArticles].map((currArticle) => {
          return { ...currArticle, votes: currArticle.votes + inc };
        });
      });
    }

    if (inArticle) {
      setArticle({ ...article, votes: article.votes + inc });
    }

    patchArticleById(article.article_id, inc).catch((err) => {
      if (inArticle) {
        setArticle((currArticle) => {
          return { ...currArticle, votes: currArticle.votes - inc };
        });
      } else {
        setArticles((currArticles) => {
          return [...currArticles].map((currArticle) => {
            return { ...currArticle, votes: currArticle.votes - inc };
          });
        });
      }
    });
  }

  return (
    <>
      <div
        className="upvote"
        onClick={() => {
          incArticleVotes(1);
        }}
      >
        ⬆️
      </div>
      <div
        className="downvote"
        onClick={() => {
          incArticleVotes(-1);
        }}
      >
        ⬇️
      </div>
    </>
  );
}
