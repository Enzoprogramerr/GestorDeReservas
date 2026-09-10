const reservaModel = require("../models/reservaModel");

class ReservaService {
  static async create(data) {
    const { alojamientoId, fechaInicio, fechaFin } = data;

    if (fechaInicio >= fechaFin) {
      throw new Error("La fecha de inicio debe ser menor a la fecha fin");
    }

    const conflicto = await reservaModel.existeConflicto(
      alojamientoId,
      fechaInicio,
      fechaFin,
    );
    if (conflicto) {
      throw new Error("Ya existe una reserva en esas fechas");
    }
    try {
      return await reservaModel.create(data);
    } catch (error) {
      if (error.code === "ER_NO_REFERENCED_ROW_2") {
        if (
          error.message ===
          "Cannot add or update a child row: a foreign key constraint fails (`appcrud`.`reserva`, CONSTRAINT `reserva_fk_cliente` FOREIGN KEY (`cliente_dni`) REFERENCES `cliente` (`dni`))"
        ) {
          throw new Error("Dni cliente no registrado.");
        }
        throw new Error("No se encuentra registrado ese alojamiento.");
      }
      if (error.code === "ER_WARN_DATA_OUT_OF_RANGE") {
        if (
          error.message ===
          "Out of range value for column 'alojamiento_id' at row 1"
        ) {
          throw new Error(
            "El campo alojamiento id supera los caracteres permitidos.",
          );
        }
        if (
          error.message ===
          "Out of range value for column 'cliente_dni' at row 1"
        ) {
          throw new Error(
            "El dni cliente ingresado supera los caracteres permitidos.",
          );
        }
        throw error;
      }
    }
  }

  static async search(filtros = {}) {
    if (Object.keys(filtros).length === 0) {
      const result = await reservaModel.search();
      return result;
    }

    const { cliente_dni, alojamiento_id, mes, anio } = filtros;
    if (
      cliente_dni === "" ||
      alojamiento_id === "" ||
      mes === "" ||
      anio === ""
    ) {
      throw new Error("Debe ingresar un valor en el campo.");
    }
    const dniNumber = Number(cliente_dni);
    const idAlojNumber = Number(alojamiento_id);
    const mesNumber = Number(mes);
    const anioNumber = Number(anio);

    const result = await reservaModel.search({
      dniNumber,
      idAlojNumber,
      mesNumber,
      anioNumber,
    });
    if (result.length == 0) {
      throw new Error(
        "No existe registro con los parametros de búsqueda ingresados.",
      );
    }
    return result;
  }

  static async update(id, reserva) {
    const { alojamientoId, fechaInicio, fechaFin, dniCliente } = reserva;
    if (!id) {
      throw new Error("Debe ingresar el dato 'id'.");
    } else if (!alojamientoId) {
      throw new Error("Debe ingresar el dato 'alojamientoId'.");
    } else if (!fechaInicio) {
      throw new Error("Debe ingresar el dato 'fechaInicio'.");
    } else if (!fechaFin) {
      throw new Error("Debe ingresar el dato 'fechaFin'.");
    } else if (!dniCliente) {
      throw new Error("Debe ingresar el campo 'dniCliente'.");
    }

    try {
      const conflicto = await reservaModel.existeConflicto(
        alojamientoId,
        fechaInicio,
        fechaFin,
        id,
      );
      if (conflicto) {
        throw new Error("Ya existe una reserva en las fechas indicadas.");
      }

      const nuevaReserva = await reservaModel.update(id, reserva);
      if (nuevaReserva === null) {
        throw new Error("El Id de la reserva no está registrada.");
      }
      return nuevaReserva;
    } catch (error) {
      if (error.code === "ER_NO_REFERENCED_ROW_2") {
        if (
          error.message ===
          "Cannot add or update a child row: a foreign key constraint fails (`appcrud`.`reserva`, CONSTRAINT `reserva_fk_cliente` FOREIGN KEY (`cliente_dni`) REFERENCES `cliente` (`dni`))"
        ) {
          throw new Error("Dni cliente no registrado.");
        }
        throw new Error("No se encuentra registrado ese alojamiento.");
      }
      if (error.code === "ER_WARN_DATA_OUT_OF_RANGE") {
        if (
          error.message ===
          "Out of range value for column 'alojamiento_id' at row 1"
        ) {
          throw new Error(
            "El campo alojamiento id supera los caracteres permitidos.",
          );
        }
        if (
          error.message ===
          "Out of range value for column 'cliente_dni' at row 1"
        )
          throw new Error(
            "El dni cliente ingresado supera los caracteres permitidos.",
          );
      }
      throw error;
    }
  }

  static async getById(id) {
    const reserva = await reservaModel.getById(id);
    if (reserva.length === 0) {
      throw new Error("No existe registro de reserva con ese id");
    }
    return reserva;
  }

  static async remove(id) {
    const result = await reservaModel.remove(id);
    if (result.affectedRows === 0) {
      throw new Error("No existe una reserva con ese id");
    }

    return "Reserva eliminada correctamente.";
  }
}

module.exports = ReservaService;
