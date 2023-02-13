/////////////////////////////////////////////////////////
const Index = async ( data ) => {

    const { Thread } = require("../services/database")
 
    try {
        const resultado = await Thread.findAll({ limit: 1000, order: [['createdAt', 'DESC']]})     
        return { status:200,respuesta: resultado }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Read = async ( data ) => {


    const { Thread } = require("../services/database")
 
    try {
        const resultado = await Thread.findByPk( data.idThread )     
        return { status:200,respuesta: resultado }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Thread,Comment } = require("../services/database")
 
    try {
        
        /* Guardamos Comentario En El Hilo De Conversacion */
        const resultado = await Thread.create( data )  
        const { idThread } = resultado
        
        /* Actualizamos Indicador De Hilo De Conversacion +1  */
        Comment.increment('threads', { by: 1, where: { idComment: data.idComment }})

        return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idThread } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { Thread } = require("../services/database")
 
    try {
        const resultado = await Thread.update(data,{where:{idThread: data.idThread}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idThread:resultado.idThread } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Thread } = require("../services/database")
 
    try {
        const resultado = await Thread.destroy({where:{idThread: data.idThread}})     
        return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idThread:resultado.idThread } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create,Update,Delete }
/////////////////////////////////////////////////////////