////////////////////////////////////////////////////////////////////////////
module.exports = async (req, res, next) => {      
	   
	if( req.headers.hasOwnProperty('authorization') && req.headers['authorization'].includes("Bearer "))
	{
			const [bearer,token] = req.headers['authorization'].split("Bearer ")
			const { ValidateToken } = require('../services/jwt')

			const resultado = await ValidateToken( token )
		    if(resultado.error)return res.status(500).send({error:"0001",mensaje:"Error Interno"}) 
			req.session = resultado
 			return next()
	}
	else return res.status(401).send({ mensaje: 'Authorization faltante'}) 
}
////////////////////////////////////////////////////////////////////////////
