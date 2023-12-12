import "./ArticleTeaser.css";
import { Link } from "react-router-dom";
export default function ArticleTeaser({ article }) {
  return (
    <div className="article-teaser-container">
      <div>
        <Link className="article-link" to={`${article.article_id}`}>
          <img className="article-image" src={article.article_img_url}></img>
          <div className="article-title">{article.title}</div>
        </Link>
      </div>

      <div className="article-topic">{article.topic}</div>
      <div className="teaser-bottom">
        <div className="teaser-item article-date">
          {article.created_at.slice(0, -14)}
        </div>
        <div className="votes-comments">
          <div className="teaser-item article-comment-count">
            Comments: {article.comment_count}
          </div>
          <div className="teaser-item article-votes">Votes: {article.votes}</div>
                </div>
        </div>
    </div>
  );
}
