import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Article from "./Article/Article";
import { UserProvider } from "./UserContext";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
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
            path="/:article_id"
            element={
              <div className="body">
              <Article
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                article={article}
                setArticle={setArticle}
                setArticles={setArticles}
              /></div>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
