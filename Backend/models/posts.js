/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const {INTEGER,STRING, UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('post',{
        idPost: { type: UUID,defaultValue:UUIDV4,primaryKey: true},
        idUser:{ type:STRING },
        text:{ type:STRING },
        comments:{type:INTEGER,defaultValue:0}
    })
   
}
/////////////////////////////////////////////////////////////


