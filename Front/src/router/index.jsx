/////////////////////////////////////
import { useEffect } from "react"
import axios from "axios"
/////////////////////////////////////
const Index = ( ) => {

    /*Iniciar la App Cargar la url del Backend */
    useEffect(()=> {

      localStorage.setItem("baseURL",`http://localhost:3000`)
      localStorage.removeItem("token")
      localStorage.removeItem("idUser")

    },[])

    const handleSubmit = async ( event ) => {
      event.preventDefault()
      
      const form = { 
        login: event.target.login.value,
        password: event.target.password.value
      }

      event.target.reset()

      try {
        const response = await axios.post(`${localStorage.getItem("baseURL")}/login/`,form)      
        if( response.status === 200)
        {
            /*Set Token IdUser y Redir */
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("idUser",response.data.idUser)
            window.location.href = "/home"
        }
      } 
      catch (error) { alert("Credenciales Invalidas")}

  }        
  
   const divStyle = {
        "background": "hsla(0, 45%, 6%, 0.55)",
        "backdrop-filter": "blur(30px)"
    }
    
    return(
        <div class="container py-4">
        <div class="row g-0 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card cascading-right" style={divStyle}>
              <div class="card-body p-5 shadow-5 text-center">
                <h2 class="fw-bold mb-5">Realiza Login</h2>
                <form onSubmit={handleSubmit}>
               
                  <div class="form-outline mb-4">
                    <input type="text" name="login" class="form-control" placeholder="Indica tu Usuario" required />
                  </div>
    
                 
                  <div class="form-outline mb-4">
                    <input type="password" name="password" class="form-control" placeholder="Indica tu Password" required />
                  </div>
          
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Ingresar
                  </button>
                </form>
                <span>No Tiene Cuenta Registrar <a href="/register">Aqui</a></span>
              </div>
            </div>
          </div>
    
          <div class="col-lg-6 mb-5 mb-lg-0">
            <img src="./istockphoto-1076326738-612x612.jpg" class="w-80 rounded-4 shadow-4"
              alt="" />
          </div>
        </div>
      </div>
    )

}
/////////////////////////////////////
export default Index
/////////////////////////////////////