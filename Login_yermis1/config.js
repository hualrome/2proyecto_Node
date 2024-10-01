const { request } = require("express");
const { default: mongoose } = require("mongoose");
const dbconnect = ()=> {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://localhost:27017/Login_yermis1") 
    .then((success)=> console.log("La conexión exitosa con la base de datos")) 
    .catch ((Error)=> console.log(Error.message));
}
module.exports = dbconnect;