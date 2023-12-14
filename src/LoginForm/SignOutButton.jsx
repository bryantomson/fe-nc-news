import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function SignOutButton() {
  const { user, setUser } = useContext(UserContext);

  function handleSignOut() {
    setUser(null);
  }

  return (
    <button onClick={handleSignOut} onKeyUp={handleSignOut}>
      Sign out
    </button>
  );
}
