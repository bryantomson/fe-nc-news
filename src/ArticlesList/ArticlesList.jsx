import "./ArticlesList.css"
import { getArticles } from "../api";
import { useEffect } from "react";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";

export default function ArticlesList ({articles, setArticles}) {

useEffect(() => {
  getArticles().then((res) => {
    setArticles(res);
  });
}, []);



return <div id="articles-list">
{articles.map((article)=> {
    return <li key={article.article_id}><ArticleTeaser article={article}/></li>
})}
</div>

}