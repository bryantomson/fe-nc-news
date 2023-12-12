import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";


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
    <>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <img src={article.article_img_url}/>
      <p>{article.body}</p>
      {console.log(article)}
      <h2>Comments ({article.comment_count})</h2>
      <div>Comments component will go here</div>
    </>
  );
}