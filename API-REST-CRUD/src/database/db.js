//Aquí se define la conexion a MySQL
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root42384942",
  database: "AppCrud",
  port: 3306,
  waitForConnections: true, // si todas las conexiones están ocupadas, espera en vez de fallar.
  connectionLimit: 10, //máximo de conexiones simultáneas
  queueLimit: 0, //cuántas peticiones pueden esperar en cola (0 = ilimitado)
});

module.exports = db;
