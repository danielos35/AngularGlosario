// Para importar paquetes en JS debemos de usar require('nombre del paquete');
const express = require("express");
const authRouter = require("./routes/auth");
const app = express();

// Traer variables de entorno
require("dotenv").config();

//Escuchar.............................................................................
// 1. Primer argumento: puerto en ejecución. (Se pueden tener 65536 puertos por IP).
// 2. Segundo callBack: tarea a ejecutar.

app.listen(process.env.PORT, () => {
  console.log("aplicación corriendo en el puerto 3000");
});

// Configurar Rutas....................................................................
// 1. Ruta
// 2. callback
// a. request (Lo que entra al servidor).
// b. response (Lo que se envia del servidor hacia afuera)

app.get("/respuesta", (req, res) => {
  res.send("Respuesta de la solicitud");
});

// Limitar ingreso mediante navegadores
app.use("/", express.static(__dirname + "/public"));
app.use("/auth", authRouter);

// Configurar rutas

