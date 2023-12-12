import "./Collapsible.css";
import { useState } from "react";

export default function Collapsible({ children }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        {isHidden ? "Show ⤵" : "Hide ⤴"}
      </button>
      {isHidden ? null : children}
    </div>
  );
}
