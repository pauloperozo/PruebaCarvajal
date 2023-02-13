/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const {INTEGER,STRING, UUID,UUIDV4 } = require("sequelize")
 
    return sequelize.define('comments',{
        idComment: { type: UUID,defaultValue:UUIDV4,primaryKey: true},
        idUser:{ type:STRING },
        idPost: { type:STRING },
        text:{ type:STRING },
        threads: {type:INTEGER,defaultValue:0}
    })
   
}
/////////////////////////////////////////////////////////////    