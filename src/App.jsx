import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Article from "./Article/Article";
import { UserProvider } from "./UserContext";
import TopicView from "./TopicView/TopicView";
import { getTopics } from "./api";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([])

useEffect(() => {
    getTopics().then((topics)=>{
    setTopics(topics)
  })
}, [])



  return (
    <BrowserRouter>
      <UserProvider>
        <Header topics={topics} />
        <Routes className="body">
          <Route
            path="/"
            element={
              <Home
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                articles={articles}
                setArticles={setArticles}
              />
            }
          />
          <Route
            path="/:topic"
            element={
              <TopicView
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                articles={articles}
                setArticles={setArticles}
              />
            }
          />
          <Route
            path="/articles/:article_id"
            element={
              <div className="body">
                <Article
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  article={article}
                  setArticle={setArticle}
                  setArticles={setArticles}
                />
              </div>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
