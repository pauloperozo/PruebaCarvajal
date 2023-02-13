/////////////////////////////////////////////////////////
const Login = async ( {login,password} ) => {

    const { User } = require("../services/database")
 
    try {

        const resultado =  await User.findOne({ where: { login,password }})
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"Credenciales Invalidas"}}

        const { GenerateToken } = require('../services/jwt')
        const payload = { idUser : resultado.dataValues.idUser }
    
        const respuesta  = {
          success:true,
          idUser: resultado.dataValues.idUser,
          token:GenerateToken( payload )
        }

        return { status:200,respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }    
}
/////////////////////////////////////////////////////////
module.exports  = { Login }
/////////////////////////////////////////////////////////