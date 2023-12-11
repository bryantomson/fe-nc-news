import ArticlesList from "../ArticlesList/ArticlesList";
import "./Home.css";

export default function Home({ articles, setArticles }) {
  return (
    <div id="home">
      <ArticlesList articles={articles} setArticles={setArticles} />
    </div>
  );
}
