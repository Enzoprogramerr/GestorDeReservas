//DEFINICION DE ENDPOINTS
const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const validarCampos = require("../middlewares/validarCampos");
const {
  validarEditCliente,
  validarCliente,
} = require("../validators/clienteValidator");

router.post("/", validarCliente, validarCampos, clienteController.create);
router.get("/", clienteController.getAll);
router.get("/count", clienteController.count);
router.get("/:dni", clienteController.getById);
router.put(
  "/:dniCliente",
  validarEditCliente,
  validarCampos,
  clienteController.update,
);
router.delete("/:dni", clienteController.remove);
module.exports = router;
