/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const {STRING, UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('user',{
        idUser:{ type:UUID,defaultValue:UUIDV4,primaryKey: true},
        login:{ type:STRING },
        password:{ type:STRING }
    })
   
}
/////////////////////////////////////////////////////////////