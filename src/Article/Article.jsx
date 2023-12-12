import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import "./Article.css"
import CommentsList from "../CommentsList/CommentsList";
import Collapsible from "../Collapsible/Collapsible";

export default function Article({article, setArticle, isLoading, setIsLoading}) {

    const {article_id} = useParams()

useEffect(() => {
  setIsLoading(true)
  getArticleById(article_id).then((res) => {
    setArticle(res)
    setIsLoading(false)
});
}, []);

if (isLoading){
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

     Comments ({article.comment_count})
      <Collapsible>
        <div><CommentsList isLoading={isLoading} setIsLoading={setIsLoading} article={article} /></div>
      </Collapsible>
    
  </div>
);
}