import { useState } from "react"
import CreatePost from "../createpost"
import ListPosts from "../listpost"

/////////////////////////////////////
const IndexPost = ( ) => {

    const[ newpost,setnewpost] = useState("")

    const NewPost = ( idPost ) => setnewpost(idPost)

    const sectionStyle = {
        "background": "hsla(0, 45%, 6%, 0.55)",
        "backdrop-filter": "blur(30px)"
    }

    return(
        <section class="gradient-custom" style={sectionStyle}>
            <CreatePost NewPost={NewPost}/>
            <ListPosts  Reload={newpost}/>
        </section>
    )

}
/////////////////////////////////////
export default IndexPost
/////////////////////////////////////