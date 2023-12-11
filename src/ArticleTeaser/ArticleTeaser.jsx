import "./ArticleTeaser.css";
export default function ArticleTeaser({ article }) {
  return (
    <div className="article-teaser-container">
      <div className="teaser-item article-title">{article.title}</div>
      <div className="teaser-item article-topic">{article.topic}</div>
      <div className="teaser-item article-date">
        {article.created_at.slice(0, -14)}
      </div>
      <img
        className="teaser-item article-image"
        src={article.article_img_url}
      ></img>

      <div className="teaser-item article-author">{article.author}</div>
      <div className="teaser-item article-comment-count">
        Comments: {article.comment_count}
      </div>
      <div className="teaser-item article-votes">Votes: {article.votes}</div>
    </div>
  );
}
