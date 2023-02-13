//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
const Auth   = require('../middleware/auth')
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/comments')

    const data = { 
        idUser: "ABC123456"
    }  

    const resultado = await Index( data )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idPost',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/comments')
    const data = { idPost: req.params.idPost }  
    const resultado = await Read( data )
    res.status( resultado.status ).send( resultado.respuesta )
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth,async ( req, res ) => {

    const { Create }  = require('../controllers/comments')

    const data = { 
        idUser: req.session.idUser,
        idPost : req.body.idPost,
        text : req.body.text
    }  

    const resultado = await Create( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idPost',Auth,async (req, res) => {
   
    const { Update }  = require('../controllers/comments')
    const data = Object.assign({ idPost: req.params.idPost},req.body)
    const resultado = await Update( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:idPost',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/comments')
    const data = { idPost: req.params.idPost }
    const resultado = await Delete( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////