import "./Comment.css";

export default function Comment({ comment }) {
const date = comment.created_at.slice(0,-14)
const time = comment.created_at.slice(11,16)
  return (
    <div id="comment-container">
      <div id="comment-top">
        <div id="comment-author">{comment.author} </div>
        <div id="comment-date">{date}, {time}</div>
      </div>
      <div id="comment-body">{comment.body}</div>

      <div id="comment-votes">⬆️ {comment.votes} ⬇️</div>
    </div>
  );
}
