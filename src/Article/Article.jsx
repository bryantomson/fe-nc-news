import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import "./Article.css"
import CommentsList from "../CommentsList/CommentsList";
import Collapsible from "../Collapsible/Collapsible";
import ArticleVoteButtons from "../ArticleVoteButtons/ArticleVoteButtons";

export default function Article({article, setArticle, isLoading, setIsLoading, setArticles}) {

const [articleLoading, setArticleLoading] = useState(true)

    const {article_id} = useParams()

useEffect(() => {
  setArticleLoading(true)
  getArticleById(article_id).then((res) => {
    setArticle(res)
    setArticleLoading(false)
});
}, []);

if (articleLoading){
    return <h1>Loading...</h1>
} else return (
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

    <div id="article-foot">
      <div id="comments-in-article">
        Comments ({article.comment_count})
        <Collapsible>
          <CommentsList
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            article={article}
          />
        </Collapsible>
      </div>
      <div id="votes-in-article">
        Votes: {article.votes}
        <ArticleVoteButtons inArticle={true} article={article} setArticle={setArticle}/>
      </div>
    </div>
  </div>
);
}