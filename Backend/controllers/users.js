/////////////////////////////////////////////////////////
const Read = async ( data ) => {


    const { User } = require("../services/database")
 
    try {   
        const resultado =  await User.findOne({ where: data })
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"No Existe Registro"}}
        return { status:200,respuesta:resultado.dataValues }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { User } = require("../services/database")
 
    try {
        const resultado = await User.findOrCreate({where:{ login:data.login },defaults:data})    
        return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idUser:resultado } }   
    } 
    catch (error) {

        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { User } = require("../services/database")
 
    try {
        const resultado = await User.update(data,{where:{idUser: data.idUser}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idUser:resultado.idUser } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { User } = require("../services/database")
 
    try {
        const resultado = await User.destroy({where:{idUser: data.idUser}})     
        return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idUser:resultado.idUser } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Read,Create,Update,Delete }
/////////////////////////////////////////////////////////