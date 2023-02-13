module.exports = (req, res, next) => {

    const ms = process.env.TIMEOUT ? Number( process.env.TIMEOUT ) : 0

    const time = setTimeout( __=> req.emit('timeout',{}), ms)	
    req.on('timeout', __ => {

          clearInterval( time )
          if(res.statusMessage == undefined)
          {
                res.status(503).send({mensaje:"Servidor Tiempo Agotado"})
                res.send = (...args) => new Error('ERR_HTTP_HEADERS_SENT')  
          }
          
    }) 
    
    res.on('finish', __ =>  clearInterval( time ) )

    next()
}