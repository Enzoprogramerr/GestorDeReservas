//MÉTODO HTTP + URL → FUNCIÓN DEL CONTROLLER

const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reservaController");

router.post("/", reservaController.create); //crear. es un método del enrutador de Express.js, que se usa para definir qué pasa cuando el servidor recibe una petición HTTP POST en una URL específica.
router.get("/", reservaController.getAll); //busqueda por mes, por tipo de aloj, por cliente.
router.get("/:id", reservaController.getById);
router.put("/:id", reservaController.update);
router.delete("/:id", reservaController.remove);
/* router.get("/", reservaController.getByFecha); */

module.exports = router;
