
import { useState, useContext } from "react";
import LoginForm from "./LoginForm";

export default function SignInButton({  inComments}) {
    const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setIsHidden(!isHidden);
        }}
        hidden={isHidden ? false : true}
      >
        {isHidden ? "Sign in" : null}
      </button>
      {isHidden ? null : (
        <LoginForm inComments={inComments} setIsHidden={setIsHidden} />
      )}
    </div>
  );
}
