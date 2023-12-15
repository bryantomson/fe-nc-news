import "./ArticlesList.css";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import ArticleSort from "../ArticleSort/ArticleSort";

export default function ArticlesList({
  setIsTopicFetchErr,
  topic,
  articles,
  setArticles,
  isLoading,
  setIsLoading,
  setErrMsg,
}) {
  const [sortBy, setSortBy] = useState();
  const [sortOrder, setSortOrder] = useState();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortBy, sortOrder)
      .then((res) => {
        setIsTopicFetchErr(false);

        setArticles(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsTopicFetchErr(true);
        setErrMsg({ status: err.response.status, msg: err.response.data.msg });
      });
  }, [topic, sortBy, sortOrder]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div>
        <ArticleSort
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div id="articles-list">
          {articles.map((article) => {
            return (
              <div key={article.article_id}>
                <ArticleTeaser setArticles={setArticles} article={article} />
              </div>
            );
          })}
        </div>
      </div>
    );
}
