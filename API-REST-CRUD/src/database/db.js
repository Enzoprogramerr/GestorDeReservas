//Aquí se define la conexion a MySQL
require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true, // si todas las conexiones están ocupadas, espera en vez de fallar.
  connectionLimit: 10, //máximo de conexiones simultáneas
  queueLimit: 0, //cuántas peticiones pueden esperar en cola (0 = ilimitado)
});

module.exports = db;
