//MÉTODO HTTP + URL → FUNCIÓN DEL CONTROLLER

const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reservaController");
const {
  validarReserva,
  validarEditReserva,
  validarGetReserva,
} = require("../validators/reservaValidator");
const validarCampos = require("../middlewares/validarCampos");

router.post("/", validarReserva, validarCampos, reservaController.create); //crear. es un método del enrutador de Express.js, que se usa para definir qué pasa cuando el servidor recibe una petición HTTP POST en una URL específica.
router.get("/all", reservaController.getAll);
router.get("/", validarGetReserva, validarCampos, reservaController.getFilter); //busqueda por mes, por tipo de aloj, por cliente.
router.get("/countReserv", reservaController.count);
router.get("/:id", reservaController.getById);
router.put("/:id", validarEditReserva, validarCampos, reservaController.update);
router.delete("/:id", reservaController.remove);
/* router.get("/", reservaController.getByFecha); */

module.exports = router;
