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
export function getCommentsByArticleId(article_id) {
  return ncNewsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    const { comments } = res.data;
   return comments
  });
}
export function patchArticleById(article_id, inc) {
  const patchBody = {
    "inc_votes": inc
  }

  return ncNewsAPI.patch(`/articles/${article_id}`, patchBody).then((res) => {
  return res.data.updated
  });
}

export function postCommentByArticleId(article_id, comment) {
  return ncNewsAPI.post(`/articles/${article_id}/comments`, comment).then((res) => {
    const { comment } = res.data;
  });
}