/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const {STRING, UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('profile',{
        idUser:{ type:UUID,primaryKey: true},
        username:{ type:STRING }
    })
   
}
/////////////////////////////////////////////////////////////