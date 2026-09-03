const db = require("./database/db");

async function testDB() {
  try {
    const [rows] = await db.query("SELECT 1");
    console.log("Conexión exitosa:", rows);
    await db.end();
  } catch (error) {
    console.error("Error conectando a la base:", error);
  }
}

testDB();
