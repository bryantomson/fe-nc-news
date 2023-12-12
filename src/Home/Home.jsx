import ArticlesList from "../ArticlesList/ArticlesList";
import "./Home.css";

export default function Home({ articles, setArticles, isLoading, setIsLoading }) {
  return (
    <div id="home">
      <ArticlesList
        articles={articles}
        setArticles={setArticles}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
