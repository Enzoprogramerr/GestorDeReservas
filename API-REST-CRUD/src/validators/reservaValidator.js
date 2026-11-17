const { body, param, query } = require("express-validator");

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

const validarEditReserva = [
  param("Id")
    .isLength({ min: 1, max: 2 })
    .withMessage(
      "Reserva id  supera los caracteres permitidos, deben ser máximo 2 caracteres.",
    ),

  body("alojamientoId")
    .isLength({ min: 1, max: 2 })
    .withMessage(
      "Alojamiento id  supera los caracteres permitidos, deben ser máximo 2 caracteres.",
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

const validarGetReserva = [
  query("cliente_dni")
    .optional({ checkFalsy: true })
    .isInt()
    .withMessage("El DNI debe contener solamente números enteros.")
    .isLength({ min: 1, max: 9 })
    .withMessage("Los numeros de DNI deben ser entre 1 y 9 caracteres."),

  query("alojamiento_id")
    .optional({ checkFalsy: true })
    .isInt()
    .withMessage("El campo debe contener solamente números enteros.")
    .isLength({ min: 1, max: 3 })
    .withMessage("El campo id alojamiento acepta como máximo 3 caracteres."),

  query("mes")
    .optional({ checkFalsy: true })
    .isLength({ min: 1, max: 2 })
    .withMessage("El campo Mes acepta máximo 2 caracteres."),

  query("anio")
    .optional({ checkFalsy: true })
    .isLength({ min: 1, max: 4 })
    .withMessage("El campo Año acepta máximo 4 caracteres."),

  query().custom((value, { req }) => {
    const { cliente_dni, alojamiento_id, mes, anio } = req.query;

    // Debe existir al menos un filtro
    if (!cliente_dni && !alojamiento_id && !mes && !anio) {
      throw new Error("Debe rellenar al menos un campo de búsqueda.");
    }

    // Mes y año deben enviarse juntos
    if ((mes && !anio) || (!mes && anio)) {
      throw new Error("Debe proporcionar mes y año para realizar la búsqueda.");
    }

    return true;
  }),
];

module.exports = { validarReserva, validarEditReserva, validarGetReserva };
