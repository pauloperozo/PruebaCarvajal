//////////////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
const Auth   = require('../middleware/auth')
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',Auth,async (req, res) => {

    const { Index }  = require('../controllers/threads')

    const data = { 
        idUser: "ABC123456"
    }  

    const resultado = await Index( data )
    res.status( resultado.status ).send( resultado.respuesta )
    
})
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/:idPost',Auth,async (req, res)=>{

    const { Read }  = require('../controllers/threads')
    const data = { idPost: req.params.idPost }  
    const resultado = await Read( data )
    res.status( resultado.status ).send( resultado.respuesta )
})
//////////////////////////////////////////////////////////////////////////////////////////
router.post('/',Auth,async ( req, res ) => {

    const { Create }  = require('../controllers/threads')

    const data = { 
        idComment:req.body.idComment,
        idUser: req.session.idUser,
        text:req.body.text
    }  

    const resultado = await Create( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.put('/:idPost',Auth,async (req, res) => {
   
    const { Update }  = require('../controllers/threads')
    const data = Object.assign({ idPost: req.params.idPost},req.body)
    const resultado = await Update( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:idPost',Auth,async (req, res) => {
  
    const { Delete }  = require('../controllers/threads')
    const data = { idPost: req.params.idPost }
    const resultado = await Delete( data )
    res.status( resultado.status ).send( resultado.respuesta )

})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////