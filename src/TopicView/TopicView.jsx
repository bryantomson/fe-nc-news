import { useEffect, useState } from "react";
import ArticlesList from "../ArticlesList/ArticlesList";
import "./TopicView.css";
import { useParams } from "react-router-dom";

export default function TopicView({
  articles,
  setArticles,
  isLoading,
  setIsLoading,
}) {
  const { topic } = useParams()
  const [isTopicFetchErr, setIsTopicFetchErr] = useState(false)

  if (isTopicFetchErr) {
    return <h1>404 page not found!</h1>
  } else return (
    <div>
      <h1>articles about {topic}</h1>
      <div id="home" className="body">
        <ArticlesList
          articles={articles}
          setArticles={setArticles}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          topic={topic}
          setIsTopicFetchErr={setIsTopicFetchErr}
        />
      </div>
    </div>
  );
}
