/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const {STRING, UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('thread',{
        idThread: { type:UUID,defaultValue:UUIDV4,primaryKey: true},
        idComment: { type:UUID },
        idUser:{ type:UUID },
        text:{ type:STRING }
    })
   
}
/////////////////////////////////////////////////////////////