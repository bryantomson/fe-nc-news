import "./HeaderNav.css";
import { Link } from "react-router-dom";

export default function HeaderNav({topics}) {
  return (
    <div className="topnav">
      <Link key="home" to="/">
       home
      </Link>
      {topics.map(({slug})=>{
        return <Link key={slug} to={`/${slug}`} >{slug}</Link>
      })}
    </div>
  );
}
