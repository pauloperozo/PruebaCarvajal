/////////////////////////////////////////////////////////
const Index = async ( data ) => {


    const { Comment } = require("../services/database")
 
    try {
        resultado = await Comment.findAll({ limit: 1000, order: [['createdAt', 'DESC']]})     
        return { status:200,respuesta: resultado }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Read = async ( data ) => {


    const { Comment } = require("../services/database")
 
    try {
        resultado = await Comment.findByPk( data.idComment )     
        return { status:200,respuesta: resultado }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Comment,Post } = require("../services/database")
 
    try {

        /* Guardamos Comentario */
        resultado = await Comment.create( data )    
        const  { idComment } = resultado

        /* Actualizamos Indicador De Comentarios +1  */
        Post.increment('comments', { by: 1, where: { idPost: data.idPost }})
        
        return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idComment } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { Comment } = require("../services/database")
 
    try {
        resultado = await Comment.update(data,{where:{idComment: data.idComment}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idComment:resultado.idComment } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Comment } = require("../services/database")
 
    try {
        resultado = await Comment.destroy({where:{idComment: data.idComment}})     
        return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idComment:resultado.idComment } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create,Update,Delete }
/////////////////////////////////////////////////////////