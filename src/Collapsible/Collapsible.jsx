import "./Collapsible.css";
import { useState } from "react";

export default function Collapsible({ children, item, length }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        {isHidden
          ? `Show ${length} more ${item}${length > 1 ? "s" : ""} ⤵`
          : `Hide ${item}${length > 1 ? "s" : ""}⤴`}
      </button>
      {isHidden ? null : children}
    </div>
  );
}
