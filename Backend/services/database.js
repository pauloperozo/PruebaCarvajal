const Sequelize = require("sequelize")

const { SERVICES,HOST,USER,PASSWORD,DATABASE } = process.env

/* Instanciar la Conexion*/
const sequelize = new Sequelize(DATABASE,USER,PASSWORD,{
    host:HOST,
    dialect:SERVICES,
    timezone: "-05:00"
})

/* Validar Conexion */
sequelize.authenticate().then( ( succes ) => console.log("**** Conectado Correctamente **** "), error  => {
    console.error(error) 
    process.exit(0)
})


/* Cargar Los Modelos */

/* Publicaciones */
const PostModel = require("../models/posts")
const Post = PostModel( sequelize )

/* Comentarios */
const CommentModel = require("../models/comments")
const Comment = CommentModel( sequelize )

/* Hilos De Conversacion */
const threadsModel = require("../models/threads")
const Thread = threadsModel( sequelize )

/* Perfiles */
const userModel = require("../models/users")
const User = userModel( sequelize )

/* Perfiles */
const profileModel = require("../models/profiles")
const Profile = profileModel( sequelize )

/* Contactos */
const ContactModel = require("../models/contacts")
const Contact = ContactModel( sequelize )

/*Relaciones */
Contact.hasOne(Profile,{ sourceKey:"idFriend",foreignKey:"idUser"})
Post.hasOne(Profile,{ sourceKey:"idUser",foreignKey:"idUser"})

/*Sincronizamos Database */
sequelize.sync({ alter: true, force: false })

module.exports = { sequelize,Post,Comment,Thread,User,Profile,Contact }