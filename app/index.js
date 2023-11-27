import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url))

//Server
const app = express()
app.set('port', 3000)
app.listen(app.get('port'))

//Config
app.use(express.static(__dirname + "/public"));


//Rutas
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/pages/IniciarSesion.html")
})