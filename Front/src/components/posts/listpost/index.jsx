import { useEffect, useState } from "react"
import makeBlockiesUrl from 'blockies-react-svg/dist/es/makeBlockiesUrl.js'
import axios from "axios"
///////////////////////////////////////////////////////////////
const ListPosts = ({Reload}) => {

    const [ posts,setpost ] = useState([])

    const Load = async () => {
        const response = await axios.get("/posts")
        response.status === 200 ? setpost( response.data ) : []
    }


    useEffect(()=>{
        Load()
    },[Reload])

    const listapost = posts.map( ( row,index ) =>
            <div class="d-flex flex-start">
            <img class="rounded-circle shadow-1-strong me-3" src={makeBlockiesUrl(row.idUser)} alt="avatar" width="30" height="30" />
            <div class="flex-grow-1 flex-shrink-1">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                <p class="mb-1">
                    {row.username} <span class="small">- {row.createdAt}</span>
                </p>
                {row.comments > 0 ? <a href="#!"><i class="fas fa-reply fa-xs"></i><span class="small"> comentarios({row.comments})</span></a> : ""}
                </div>
                <p class="small mb-0">{row.text}</p>
            </div>
            </div>
            </div>
    )    


    return (

            <div class="container my-5 py-5">
            <div class="row d-flex justify-content-center">
              <div class="col-md-12 col-lg-10 col-xl-8">
                <div class="card">
                  <div class="card-body p-4">
                    <h4 class="text-center mb-4 pb-2">Sección de Publicaciones</h4>
        
                    <div class="row">
                      <div class="col">{listapost}</div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    
}
///////////////////////////////////////////////////////////////
export default ListPosts
///////////////////////////////////////////////////////////////