/////////////////////////////////////////////////////////
const Index = async ( data ) => {


    const { Contact } = require("../services/database")
 
    try {
        const resultado = await Contact.findAll({ limit: 1000, order: [['createdAt', 'DESC']]})     
        return { status:200,respuesta: resultado }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Read = async ( data ) => {


    const { Contact,Profile } = require("../services/database")
    const moment = require('moment')
    
    try {
        
        const { idOwner } = data
        const resultado = await Contact.findAll({ include:Profile,where: {idOwner}})  

        const respuesta = resultado.map( row => {

            const {idFriend} = row
            const username   = row.profile.username
            const confirmed  = row.profile.confirmed == 1 ? true:false
            const createdAt  = new moment(row.profile.createdAt).format("YYYY-MM-DD HH:mm:ss")

            return {idFriend,username,confirmed,createdAt}
        })   

        return { status:200,respuesta}   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Create = async ( data ) => {

    const { Contact } = require("../services/database")
 
    try {
        
        const { idOwner,idFriend } = data
        const resultado = await Contact.findOrCreate({where: {idOwner,idFriend}})     
        return { status:200,respuesta: resultado }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema al guardar"}}
    }
    
}
/////////////////////////////////////////////////////////
const Update =  async ( data ) => {

    const { Contact } = require("../services/database")
 
    try {
        const { idOwner,idFriend } = data 
        const resultado = await Contact.update(data,{where:{idOwner,idFriend}})     
        return { status:200,respuesta: { success:true,message:"Actualizado Con Exito",idOwner} }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema Al Actualizar"}}
    }
}
/////////////////////////////////////////////////////////
const Delete =  async ( data ) => {

    const { Contact } = require("../services/database")
 
    try {
        const resultado = await Contact.destroy({ where:data })     
        return { status:200,respuesta: { success:true,message:"Borrado Con Exito",idFriend:data.idFriend } }   
    } 
    catch (error) {
        return {status:400,respuesta:{ success:false,mensaje:"Problema AL Borrar"}}
    }
}
/////////////////////////////////////////////////////////
module.exports  = { Index,Read,Create,Update,Delete }
/////////////////////////////////////////////////////////