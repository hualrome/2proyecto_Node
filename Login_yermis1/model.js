const mongoose = require('mongoose');
//variable que controla las variantes de la base de datos
const userModel = new mongoose.Schema(
    {
        nomuser:{
            type: String,
        },
        password:{
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey:  false,
    }
)
const ModelUser = mongoose.model("usuarios", userModel);
// exportamos el modelo para poder usarlo en otros archivos
module.exports = ModelUser;

