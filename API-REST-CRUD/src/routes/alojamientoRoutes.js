//DEFINICION DE ENDPOINTS
const alojamientoController = require("../controllers/alojamientosController");

const express = require("express");
const router = express.Router();
const validarCampos = require("../middlewares/validarCampos");
const {
  validationCreate,
  validationEdit,
  validationSearch,
} = require("../validators/alojamientoValidator");

router.post("/", validationCreate, validarCampos, alojamientoController.create); //crear //Se pasa el metodo sin parentesis ya que necesitamos que se ejecute solo cuando reciba esa peticion por medio de esa URL.
router.get("/", alojamientoController.getAll); //obtener todas
router.get(
  "/type/:type",
  validationSearch,
  validarCampos,
  alojamientoController.getType,
); //obtener una
router.put("/:id", validationEdit, validarCampos, alojamientoController.update); //actualizar
router.delete("/:id", alojamientoController.remove);
module.exports = router;
