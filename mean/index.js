// Para importar paquetes en JS debemos de usar require('nombre del paquete');
const express = require("express");
const app = express();

//Escuchar.............................................................................
// 1. Primer argumento: puerto en ejecución. (Se pueden tener 65536 puertos por IP).
// 2. Segundo callBack: tarea a ejecutar.

app.listen(3000, () => {
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
