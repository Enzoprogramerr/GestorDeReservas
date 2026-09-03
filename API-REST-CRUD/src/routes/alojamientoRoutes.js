//DEFINICION DE ENDPOINTS
const alojamientoController = require("../controllers/alojamientosController");

const express = require("express");
const router = express.Router();

router.post("/", alojamientoController.create); //crear //Se pasa el metodo sin parentesis ya que necesitamos que se ejecute solo cuando reciba esa peticion por medio de esa URL.
router.get("/", alojamientoController.getAll); //obtener todas
router.get("/type/:type", alojamientoController.getType); //obtener una
router.put("/:id", alojamientoController.update); //actualizar
router.delete("/:id", alojamientoController.remove);
module.exports = router;
