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
export function patchArticleById(article_id, inc) {

console.log(inc, "INC")
  const patchBody = {
    "inc_votes": inc
  }

  return ncNewsAPI.patch(`/articles/${article_id}`, patchBody).then((res) => {
  return res.data.updated
  });
}
