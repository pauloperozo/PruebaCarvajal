/////////////////////////////////////////////////////////////
module.exports = ( sequelize ) => {

    const { UUID, BOOLEAN } = require("sequelize")
 
    return sequelize.define('contact',{
        idOwner: {type:UUID,primaryKey: true},
        idFriend: {type:UUID,primaryKey: true},
        confirmed:{type:BOOLEAN,defaultValue: false}
    })
   
}
/////////////////////////////////////////////////////////////