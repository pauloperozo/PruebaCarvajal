////////////////////////////////////////////////////////////
const GenerateToken = ( payload = {} ) => {

    const { sign } = require('jsonwebtoken')
    return  sign( payload , process.env.JWTPrivateKey || "123",{ expiresIn: '12h' } )
} 
////////////////////////////////////////////////////////////
const ValidateToken = ( token = "" ) => {
    
    const { verify } = require('jsonwebtoken')

    return new Promise( resolve => {
        verify( token ,process.env.JWTPrivateKey,( error, data ) => error ? resolve( { error : true } ) : resolve( data ) )
    })

}
////////////////////////////////////////////////////////////
module.exports = { GenerateToken , ValidateToken }
////////////////////////////////////////////////////////////