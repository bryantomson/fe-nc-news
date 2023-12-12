import HeaderNav from "../HeaderNav/HeaderNav"
import "./Header.css"

export default function Header () {
    return <div id="header">
        <div ><h1>Northcoders News</h1></div><div>
            <HeaderNav/>
        </div>
    </div>
}