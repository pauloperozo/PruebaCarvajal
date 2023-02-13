const express = require("express")
const logger  = require('morgan')
const cors    = require('cors')
const bodyp   = require('body-parser')

const app = express()
      app.use( cors() )
      app.use( logger("dev") )
      app.use( bodyp.json({limit: '50mb'}) )
      app.use( bodyp.urlencoded( { limit: '50mb', extended: true } ) ) /* Tamaño De 50MB  */

      /*Cargamos Rutas */
      const HandleRoute = require('./tools/routes')
      const Handle404   = require("./middleware/404")
      const Handle503   = require("./middleware/503")
      
      app.use(Handle503) /*Http Verifica El Timeout errores*/
      HandleRoute().forEach( route => app.use(route.name,require(route.path)) ) /*Routes */
      app.use(Handle404) /*Error 404*/

      /*Conectado Database */
      require('./services/database')
      
      module.exports = app