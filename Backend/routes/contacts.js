//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
const Auth   = require('../middleware/auth')
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/contacts')

    const data = { 
        idUser: "ABC123456"
    }  

    const resultado = await Index( data )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idOwner',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/contacts')
    const resultado = await Read( req.params )
    res.status( resultado.status ).send( resultado.respuesta )
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth,async ( req, res ) => {

    const { Create }  = require('../controllers/contacts')

    /* Crear Relacion Bidireccional */
    const { idOwner,idFriend } = req.body
    const relations = [{idOwner:idOwner,idFriend:idFriend},{idOwner:idFriend,idFriend:idOwner}]
    
    let resultado = Array()
    for( let obj of  relations)
    {
        const result = await Create( obj ) 
        resultado.push( result.respuesta )
    }

    res.status( 200 ).send( resultado )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idOwner',Auth,async (req, res) => {
   
    const { Update }  = require('../controllers/contacts')
   
    /* Aceptar Relacion Bidireccional */
    const { idOwner  } = req.params
    const { idFriend } = req.body

    const relations = [{idOwner:idOwner,idFriend:idFriend,confirmed:true},{idOwner:idFriend,idFriend:idOwner,confirmed:true}]
   
    let resultado = Array()
    for( let obj of  relations )
    {
        const result = await Update( obj )
        resultado.push( result.respuesta )
    }

    res.status( 200 ).send( resultado )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/owner/:idOwner/friend/:idFriend',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/contacts')

    /* Aceptar Relacion Bidireccional */
    const { idOwner  } = req.params
    const { idFriend } = req.params

    const relations = [{idOwner:idOwner,idFriend:idFriend},{idOwner:idFriend,idFriend:idOwner}]

    let resultado = Array()
    for( let obj of  relations )
    {
        const result = await Delete( obj )
        resultado.push( result.respuesta )
    }

    res.status( 200 ).send( resultado )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////