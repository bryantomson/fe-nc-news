import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://news-api-project-jycn.onrender.com/api",
});

export function getArticles() {
  return ncNewsAPI.get(`/articles`).then((res) => {
    const { articles } = res.data;
    return articles;
  });
}

export function getArticleById(article_id) {
  return ncNewsAPI.get(`/articles/${article_id}`).then((res) => {
    const { article } = res.data;
   return article
  });
}
