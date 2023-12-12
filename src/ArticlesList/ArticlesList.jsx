import "./ArticlesList.css";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";

export default function ArticlesList({ articles, setArticles, isLoading, setIsLoading }) {


  useEffect(() => {
    setIsLoading(true)
    getArticles().then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div id="articles-list">
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <ArticleTeaser article={article} />
            </div>
          );
        })}
      </div>
    );
}
