import "./LoginForm.css";
import { UserContext } from "../UserContext";
import { useState, useContext } from "react";
import { getUserByUsername } from "../api";
export default function LoginForm({ setIsHidden, inComments }) {
  const [loginFormInput, setLoginFormInput] = useState("");
  const [isErr, setIsErr] = useState(false);

  const { user, setUser } = useContext(UserContext);

  function handleLoginFormChange(e) {
    setIsErr(false);
    setLoginFormInput(e.target.value);
  }

  function handleLoginFormSubmit(e) {
    e.preventDefault();
    getUserByUsername(loginFormInput)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setIsErr(true);
      });
    setLoginFormInput("");
  }

  return (
    <div>
      <form
        className={inComments ? "login-form-comments" : "login-form"}
        onSubmit={handleLoginFormSubmit}
      >
        <label id="username-input-label" htmlFor="username-input">
          Enter your username:
        </label>
        <input
          id="username-input"
          type="text"
          onChange={handleLoginFormChange}
          value={loginFormInput}
        ></input>
        <div className="login-form-buttons">
          <button
            onClick={() => {
              setIsHidden(true);
            }}
            onKeyUp={() => {
              setIsHidden(true);
            }}
          >
            Cancel
          </button>
          <button>Log in</button>
        </div>
        <p className="login-err-msg">
          {isErr ? "username not recognised" : ""}
        </p>
      </form>
    </div>
  );
}
