import "./ArticlesList.css";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";

export default function ArticlesList({
  setIsTopicFetchErr,
  topic,
  articles,
  setArticles,
  isLoading,
  setIsLoading,
}) {
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic)
      .then((res) => {
        setArticles(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsTopicFetchErr(true)
      });
  }, [topic]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div id="articles-list">
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <ArticleTeaser setArticles={setArticles} article={article} />
            </div>
          );
        })}
      </div>
    );
}
