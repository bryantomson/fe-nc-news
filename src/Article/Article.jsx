import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import "./Article.css";
import ArticleVoteButtons from "../ArticleVoteButtons/ArticleVoteButtons";
import Comments from "../Comments/Comments";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function Article({ article, setArticle, errMsg, setErrMsg }) {
  const [articleLoading, setArticleLoading] = useState(true);
  const [isArticleErr, setIsArticleErr] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setArticleLoading(true);
    getArticleById(article_id)
      .then((res) => {
        setArticle(res);
        setArticleLoading(false);
      })
      .catch((err) => {
        setArticleLoading(false);
        setIsArticleErr(true);

        setErrMsg({
          status: err.response.status,
          msg: err.response.data.msg,
        });

      });
  }, []);

  if (articleLoading) {
    return <h1>Loading...</h1>;
  } else if (isArticleErr) {
    return <ErrorPage errMsg={errMsg} />;
  } else {
    return (
      <div id="article-container">
        <div id="article-header">
          <div id="article-topic-head">{article.topic} </div>
          <div id="article-date">{article.created_at.slice(0, -14)}</div>
        </div>
        <h1>{article.title}</h1>
        <div id="author-container">
          <p>{article.author}</p>
        </div>
        <img id="article-image" src={article.article_img_url} />
        <p id="article-body">{article.body}</p>

        <div id="votes-in-article">
          <ArticleVoteButtons
            inArticle={true}
            article={article}
            setArticle={setArticle}
          />
        </div>
        <Comments article={article} />
      </div>
    );
  }
}
