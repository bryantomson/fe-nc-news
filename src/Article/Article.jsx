import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import "./article.css"


export default function Article({article, setArticle}) {
    const [loading, setLoading] = useState(true)

    const {article_id} = useParams()

useEffect(() => {
  getArticleById(article_id).then((res) => {
    setArticle(res)
    setLoading(false)
});
}, []);

if (loading){
    return <h1>Loading...</h1>
} else return (
  <div id="article-container">
    <div id="article-header">
      <div id="article-topic-head">{article.topic} </div> <div id="article-date">{article.created_at.slice(0, -14)}</div>
    </div>
    <h1>{article.title}</h1>
    <div id="author-container">
      <p>{article.author}</p>
    </div>
    <img id="article-image"src={article.article_img_url} />
    <p>{article.body}</p>
    {console.log(article)}
    <h2>Comments ({article.comment_count})</h2>
    <div>Comments component will go here</div>
  </div>
);
}