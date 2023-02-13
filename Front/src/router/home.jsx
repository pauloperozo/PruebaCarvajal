import { useEffect } from "react"
import IndexPost from "../components/posts/indexpost"
/////////////////////////////////////
const Home = ( ) => {
    
    return(
        <div>
            <p className="text-end"> <a href="/"> Regresar </a></p>
            <IndexPost/>
        </div>
    )

}
/////////////////////////////////////
export default Home
/////////////////////////////////////