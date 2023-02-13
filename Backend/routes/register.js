//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
const router = Router()
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',async (req, res)=>{

    const { login,password,username} = req.body
    const user = {login,password}
    const profile = {username}
    
    let resultado 

    try {
        const { Create }  = require('../controllers/users')
        resultado = await Create( user )
    }
    catch (error) {
        return res.status( 400 ).send( {success: false,menssage:"Problemas Al Guardar El Usuario"} )
    }

    const status = resultado.respuesta.idUser[1]
    const respuesta = resultado.respuesta.idUser[0]

    if( !status ) return res.status( 400 ).send( {success: false,menssage:"Usuario Ya Existente"} )
    else 
    {
        try {
            profile.idUser = respuesta.idUser
            const { Create }  = require('../controllers/profiles')
            await Create( profile )
        } catch (error) {
            return res.status( 400 ).send( {success: false,menssage:"Problemas Al Guardar El Perfil"} )
        }
    }

    res.status( 200 ).send( {success: true,respuesta:{ idUser: respuesta.idUser }}  )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////