const { body, param } = require("express-validator");

const validarCliente = [
  body("dni")
    .notEmpty()
    .withMessage("El DNI es obligatorio.")
    .bail()
    .isInt()
    .withMessage("El DNI debe contener solamente números enteros."),

  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio.")
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage("El nombre debe tener entre 3 y 20 caracteres."),

  body("apellido")
    .notEmpty()
    .withMessage("El apellido es obligatorio.")
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage("El apellido debe tener entre 3 y 20 caracteres."),

  body("telefono")
    .notEmpty()
    .withMessage("El telefono es obligatorio.")
    .isInt()
    .withMessage("Los datos ingresados deben ser numeros enteros.")
    .bail()
    .isLength({ min: 9, max: 13 })
    .withMessage("El telefono debe tener entre 9 y 13 caracteres."),
];

const validarEditCliente = [
  param("dniCliente")
    .notEmpty()
    .withMessage("Debe ingresar DNI cliente.")
    .bail()
    .isInt()
    .withMessage("El DNI debe contener solamente números enteros."),
];
module.exports = { validarCliente, validarEditCliente };
