import "./ArticlesList.css";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import { Link } from "react-router-dom";

export default function ArticlesList({ articles, setArticles }) {
const [listLoading, setListLoading] = useState(true)


  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
      setListLoading(false)
    });
  }, []);

  if(listLoading) {
    return <h1>Loading...</h1>
  } else return (
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
