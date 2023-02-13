//////////////////////////////////////////////////////////////////
const fs = require("fs")
//////////////////////////////////////////////////////////////////

module.exports = () => {

    const routepath = require('path').join(__dirname, '../routes')

    const routes = fs.readdirSync( routepath ).map( file => {  
        
        let obj = {
            "name": file == 'index.js' ? '/' : `/${file.replace('.js','')}`,
            "path":`./routes/${file}`
        }

        return obj
    })
     
    return routes
}

//////////////////////////////////////////////////////////////////