const reservaModel = require("../models/reservaModel");

class ReservaService {
  static async create(data) {
    const { clienteId, alojamientoId, nuevaFechaInicio, nuevaFechaFin } = data;

    if (nuevaFechaInicio >= nuevaFechaFin) {
      throw new Error("La fecha de inicio debe ser menor a la fecha fin");
    }

    const conflictos = await reservaModel.getByFecha(
      alojamientoId,
      nuevaFechaInicio,
      nuevaFechaFin,
    );

    if (conflictos.length > 0) {
      throw new Error("Ya existe una reserva en esas fechas");
    }

    const reserva = {
      clienteId,
      alojamientoId,
      nuevaFechaInicio,
      nuevaFechaFin,
    };

    return await reservaModel.create(reserva);
  }

  static async search(filtros = {}) {
    const { clienteId, alojamientoId, mes, anio } = filtros;
    const result = await reservaModel.search({
      clienteId,
      alojamientoId,
      mes,
      anio,
    });
    if (result.length == 0) {
      return "No existe registro con los parametros de búsqueda ingresados.";
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
