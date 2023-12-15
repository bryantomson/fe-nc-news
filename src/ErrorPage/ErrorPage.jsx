import errImg404 from "./error-page.png"
import errImg400 from "./400-error-page.png"

export default function ErrorPage ({errMsg}) {
    return <div>
        <h1>{errMsg.status}</h1>
        <h2>{errMsg.msg}</h2>
        <img src={errMsg.status === 404 ? errImg404 : null}/>
        <img src={errMsg.status === 400 ? errImg400 : null}/>
    </div>
}