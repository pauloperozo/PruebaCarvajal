require('dotenv').config();
const app = require("./app");

( async _=> {

    await app.listen( process.env.PORT)
    console.log(`Servidor Corriendo Por El Puerto :${process.env.PORT}`)

})()
