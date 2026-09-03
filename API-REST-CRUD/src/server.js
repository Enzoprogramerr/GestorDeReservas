// importo la aplicacion desde app.js
const app = require("./app");

//defino puerto
const PORT = 3000;
//Llamo para que el servidor empiece a recibir peticiones
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost: ${PORT}`);
});
