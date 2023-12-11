import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <Header />
      <Home articles={articles} setArticles={setArticles} />
    </>
  );
}

export default App;
