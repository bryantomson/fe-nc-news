import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.css";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import SignIn from "../SignIn/SignIn";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div id="header">
      <div className="header-top">
        <div>
          <h1>ncnews</h1>
        </div>
        <div id="sign-in-area">
          <div> Logged in: {user ? user.username : "Nobody"} </div>
          <SignIn />
        </div>
      </div>
      <div>
        <HeaderNav />
      </div>
    </div>
  );
}
