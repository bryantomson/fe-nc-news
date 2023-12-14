import { UserContext } from "../UserContext";
import { useContext } from "react";
import SignInButton from "../LoginForm/SignInButton";
import SignOutButton from "../LoginForm/SignOutButton";

export default function SignIn({inComments}) {
  const { user, setUser } = useContext(UserContext);


  return (
    <div>
      {user ? <SignOutButton /> : <SignInButton inComments={inComments} />}
    </div>
  );
}
