import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import HeaderNav from "./HeaderNav/HeaderNav";
import Home from "./Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Article from "./Article/Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
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
            <Article
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              article={article}
              setArticle={setArticle}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
