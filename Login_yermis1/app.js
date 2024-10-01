//importar dependencias
const express = require("express");
const dbconnect = require("./config");
const ModelUser = require("./model");
// Iniciar la app con Express
const app = express();
const cors =require("cors");

const corsOptions={
    origin:"*",
}
app.use(cors(corsOptions))

const router =  express.Router();

//Creación nuevo usuario (POST)
router.post('/',async(req, res)=> {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
}) 

// Consultar todos los usuarios (GET)
router.get('/', async (req, res)=>{
    const respuesta = await ModelUser.find({}) //obtener todos los usuarios de la bae de datos
    res.send(respuesta)
})

//consultar un usuario por id (GET)
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta) //envia los datos del ususario correspondienteal id solicitado
})

//Actualizar usuarios por Id (PUT)
router.put('/:id', async (req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta); //envia los datos del usuario actualizado
})

 //Eliminar un usuario por Id (DELETE)
 router.delete('/:id', async(req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id});
    res.send(respuesta);
 })

app.use(express.json());
app.use(router);
app.listen(3005, ()=>{
    console.log("Servidor Iniciado en Puerto 3005")
})

dbconnect();

