const cors = require("cors");
//importamos Express y registramos rutas. Tambien exportamos la instancia de la aplicacion para poder ser usada en server.js
const express = require("express");
const app = express();

app.use(cors());

//Es un middleware incluido en Express.
//parsea el cuerpo de las peticiones que llegan en JSON a objeto JS lo que lo hace accesible desde req.body
app.use(express.json());

//Rutas
const reservaRoutes = require("./routes/reservaRoutes");
const alojamientoRoutes = require("./routes/alojamientoRoutes");
const clienteRoutes = require("./routes/clienteRoutes");

app.use("/reserva", reservaRoutes);
app.use("/alojamiento", alojamientoRoutes);
app.use("/cliente", clienteRoutes);

module.exports = app;
