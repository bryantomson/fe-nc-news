import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Article from "./Article/Article";
import { UserProvider } from "./UserContext";
import ArticleListView from "./ArticleListView/ArticleListView";
import { getTopics } from "./api";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([])
  const [errMsg, setErrMsg] = useState()

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
            path="/:topic"
            element={
              <ArticleListView
                errMsg={errMsg}
                setErrMsg={setErrMsg}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                articles={articles}
                setArticles={setArticles}
              />
            }
          />
          <Route
            path="/"
            element={
              <ArticleListView
                errMsg={errMsg}
                setErrMsg={setErrMsg}
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
                  errMsg={errMsg}
                  setErrMsg={setErrMsg}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  article={article}
                  setArticle={setArticle}
                  setArticles={setArticles}
                />
              </div>
            }
          />
          <Route path="*"
          element={<ErrorPage errMsg={{status: 404, msg: "page does not exist"}}/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
