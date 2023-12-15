import { useEffect, useState } from "react";
import ArticlesList from "../ArticlesList/ArticlesList";
import "./ArticleListView.css";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function ArticleListView({
  articles,
  setArticles,
  isLoading,
  setIsLoading,
  errMsg,
  setErrMsg,
}) {
  const { topic } = useParams();
  const [isTopicFetchErr, setIsTopicFetchErr] = useState(false);

useEffect(()=>setIsTopicFetchErr(false), [topic])

  if (isTopicFetchErr) {
    return <ErrorPage errMsg={errMsg} />;
  } else
    return (
      <div>
        <h1>{topic ? `articles about ${topic}` : `Welcome to NC News!`}</h1>
        <div id="home" className="body">
          <ArticlesList
            articles={articles}
            setArticles={setArticles}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            topic={topic}
            setIsTopicFetchErr={setIsTopicFetchErr}
            setErrMsg={setErrMsg}
          />
        </div>
      </div>
    );
}
