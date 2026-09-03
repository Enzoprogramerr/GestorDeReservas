//DEFINICION DE ENDPOINTS
const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.post("/", clienteController.create); //crear
router.get("/", clienteController.getAll); //obtener todas
router.get("/:dni", clienteController.getById); //obtener una
router.put("/:dni", clienteController.update); //actualizar
router.delete("/:dni", clienteController.remove);
module.exports = router;
