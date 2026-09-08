const reservaModel = require("../models/reservaModel");

class ReservaService {
  static async create(data) {
    const { fechaInicio, fechaFin } = data;

    if (fechaInicio >= fechaFin) {
      throw new Error("La fecha de inicio debe ser menor a la fecha fin");
    }

    const conflictos = await reservaModel.getByFecha(fechaInicio, fechaFin);

    if (conflictos.length > 0) {
      throw new Error("Ya existe una reserva en esas fechas");
    }

    return await reservaModel.create(data);
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

  static async update(reserva) {
    const nuevaReserva = await reservaModel.update(reserva);
    if (nuevaReserva.affectedRows === 0) {
      throw new Error("Reserva no encontrada");
    }
    return nuevaReserva;
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
      throw new Error("No existe un reserva con ese id");
    }
    return "Reserva eliminado correctamente.";
  }
}

module.exports = ReservaService;
