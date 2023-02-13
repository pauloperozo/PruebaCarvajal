/////////////////////////////////////////////////////////
const Index = async ({idUser}) => {

    const { Post } = require("../services/database")
    const {Profile} = require("../services/database")
    const moment   = require('moment')

    try {

        let resultado = await Post.findAll({ include:Profile,limit: 1000, order: [['createdAt', 'DESC']]})   
 
        let respuesta = resultado.map( row => {       
            
            let obj = {
                idPost :row.idPost,
                idUser:row.idUser,
                username: row.profile.username,
                text:row.text,
                comments:row.comments,
                createdAt: new moment(row.createdAt).format("YYYY-MM-DD HH:mm:ss")    
            }

            return obj
        })  
    
        return { status:200,respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Read = async ( data ) => {


    const { Post } = require("../services/database")
 
    try {
        const resultado = await Post.findByPk( data.idPost )     
        return { status:200,respuesta: resultado }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Post } = require("../services/database")
 
    try {
        const resultado = await Post.create( data )     
        return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idPost:resultado.idPost } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { Post } = require("../services/database")
 
    try {
        const resultado = await Post.update(data,{where:{idPost: data.idPost}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idPost:resultado.idPost } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Post } = require("../services/database")
 
    try {
        const resultado = await Post.destroy({where:{idPost: data.idPost}})     
        return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idPost:resultado.idPost } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create,Update,Delete }
/////////////////////////////////////////////////////////