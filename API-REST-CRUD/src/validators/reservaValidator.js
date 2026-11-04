const { body } = require("express-validator");

const validarReserva = [
  body("alojamientoId")
    .isLength({ min: 1, max: 2 })
    .withMessage(
      "Alojamiento id  supera los caracteres permitidos, deben ser entre 1 y 2 caracteres.",
    ),

  body("fechaInicio")
    .custom((value) => {
      const anioReserva = Number(value.slice(0, 4));
      const anioActual = new Date().getFullYear();

      return anioReserva >= anioActual;
    })
    .withMessage(
      "El año de la fecha de inicio debe ser igual o mayor al año actual.",
    ),

  body("fechaFin")
    .custom((value, { req }) => {
      const anioFechaFin = Number(value.slice(0, 4));
      const anioFechaInicio = Number(req.body.fechaInicio.slice(0, 4));

      return anioFechaFin >= anioFechaInicio;
    })
    .withMessage(
      "El año de fecha fin de reserva debe ser mayor al de fecha de inicio.",
    ),

  body("dniCliente")
    .isLength({ min: 1, max: 9 })
    .withMessage("Los numeros de DNI deben ser entre 1 y 9 caracteres."),
];

module.exports = validarReserva;
