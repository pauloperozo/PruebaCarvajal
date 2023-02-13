///////////////////////////////////////////////////////////////
import makeBlockiesUrl from 'blockies-react-svg/dist/es/makeBlockiesUrl.js'
import axios from "axios"
///////////////////////////////////////////////////////////////
const CreatePost = ({NewPost}) => {

    const handleReload = () => NewPost( true )
  
    const handleSubmit = async ( event ) => {
        
        event.preventDefault()
        const form = { text:  event.target.text.value }
        event.target.reset()

        const response = await axios.post("/posts",form )
        if( response.status === 200)
        {
            NewPost( response.data.idPost )
        }
        else alert("Error Enviando Publicacion")
    }

    return (
        <div class="container my-5 py-5 text-dark">
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-12 col-lg-8 col-xl-8">
                      <div class="card">
                        <div class="card-body p-4">
                          <div class="d-flex flex-start w-100">
                            <img class="rounded-circle shadow-1-strong me-3"
                              src={makeBlockiesUrl(localStorage.getItem("idUser"))} alt="avatar" width="65"
                              height="65" />
                            <div class="w-100">
                              <h5>Agregar Publicaciones</h5>
                              <form onSubmit={handleSubmit}>

                                <div class="form-outline">
                                  <textarea class="form-control" name="text" rows="4" placeholder="Dinos que piensas?"></textarea>
                                </div>
                              
                              <div class="d-flex justify-content-between mt-3">
                                <button onClick={handleReload} type="button" class="btn btn-info">Recargar</button>
                                <input type="submit" class="btn btn-success"  value="Comentar"/>
                             
                              </div>

                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
    )
}
///////////////////////////////////////////////////////////////
export default CreatePost
///////////////////////////////////////////////////////////////