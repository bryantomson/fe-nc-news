import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://news-api-project-jycn.onrender.com/api",
});

export function getArticles(topic, sort_by, order) {
  return ncNewsAPI
    .get(`/articles`, { params: { topic: topic, sort_by: sort_by, order: order } })
    .then((res) => {
      const { articles } = res.data;
      return articles;
    });
}

//"/api/articles?sort_by=author&order=asc"

export function getTopics() {
  return ncNewsAPI.get(`/topics`).then((res) => {
    const { topics } = res.data;
    return topics;
  });
}

export function getArticleById(article_id) {
  return ncNewsAPI.get(`/articles/${article_id}`).then((res) => {
    const { article } = res.data;
    return article;
  });
}
export function getCommentsByArticleId(article_id) {
  return ncNewsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    const { comments } = res.data;
    return comments;
  });
}
export function patchArticleById(article_id, inc) {
  const patchBody = {
    inc_votes: inc,
  };

  return ncNewsAPI.patch(`/articles/${article_id}`, patchBody).then((res) => {
    return res.data.updated;
  });
}
export function patchCommentById(comment_id, inc) {
  const patchBody = {
    inc_votes: inc,
  };

  return ncNewsAPI.patch(`/comments/${comment_id}`, patchBody).then((res) => {
    return res.data.updated;
  });
}





export function postCommentByArticleId(article_id, comment) {
  return ncNewsAPI
    .post(`/articles/${article_id}/comments`, comment)
    .then((res) => {
      const { comment } = res.data;
      return comment;
    });
}

export function getUserByUsername(username) {
  return ncNewsAPI.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
}

export function deleteCommentById(comment_id) {
  return ncNewsAPI.delete(`/comments/${comment_id}`).then((res) => {
    return res.status;
  });
}

// pi/comments/:comment_id
