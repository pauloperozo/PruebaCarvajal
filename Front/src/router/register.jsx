/////////////////////////////////////
import axios from "axios"
/////////////////////////////////////
const Register = ( ) => {

    const handleSubmit = async ( event ) => {
        event.preventDefault()
        
        const form = { 
          login: event.target.login.value,
          password: event.target.password.value,
          username: event.target.username.value
        }

        event.target.reset()

        try {
          const response = await axios.post(`${localStorage.getItem("baseURL")}/register/`,form)      
          if( response.status === 200)alert("Usuario Creado Con Exito.")
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
                <h2 class="fw-bold mb-5">Crear Registro</h2>

                <form onSubmit={handleSubmit}>
               
                  <div class="form-outline mb-4">
                    <input type="text" name="login" class="form-control" placeholder="Indica tu Usuario" required />
                  </div>
    
                  <div class="form-outline mb-4">
                    <input type="password" name="password" class="form-control" placeholder="Indica tu Password" required/>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="text" name="username" class="form-control" placeholder="Alias o Nickname" required/>
                  </div>
          
                  <input type="submit" class="btn btn-primary btn-block mb-4" value="Ingresar" />

                </form>

                <span>Volver al Inicio <a href="/">Aqui</a></span>
              </div>
            </div>
          </div>

        </div>
      </div>
   )

}
/////////////////////////////////////
export default Register
/////////////////////////////////////