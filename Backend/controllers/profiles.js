/////////////////////////////////////////////////////////
const Index = async ( data ) => {

    const { Profile } = require("../services/database")
    const moment      = require('moment')
    const _           = require('lodash')
    const {Op}        = require("sequelize")
    
    try {

        const resultado = _.isEmpty( data ) ?  await Profile.findAll() : await Profile.findAll( { where: { username: { [Op.like]: `%${data.search}%` } }} ) 
        const respuesta = resultado.map( row => ({             
            idUser : row.idUser,
            username :row.username,
            createdAt : new moment(row.createdAt).format("YYYY-MM-DD HH:mm:ss")    
        }))  


        return { status:200,respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar",error}}
    }
    
}
/////////////////////////////////////////////////////////
const Read = async ( {idUser} ) => {

    const { Profile } = require("../services/database")
 
    try {

        const moment = require('moment')
        const _      = require('lodash')
   
        const resultado =  await Profile.findOne({ where: { idUser }})
        if(resultado == null)return {status:400,respuesta:{ success:false,mensaje:"Valor Key No existente"}}

        const respuesta = {      
            idUser : idUser,
            username :resultado.dataValues.username,
            createdAt : new moment(resultado.dataValues.createdAt).format("YYYY-MM-DD HH:mm:ss")    
        }

        return { status:200,respuesta }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al Buscar"}}
    }
    
}

/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Profile } = require("../services/database")
 
    try {
        const resultado = await Profile.create( data )     
        return { status:200,respuesta: { success:true,message:"Agregado Con Exito",idPost:resultado.idPost } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Agregar"}}
    }
    
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create }
/////////////////////////////////////////////////////////