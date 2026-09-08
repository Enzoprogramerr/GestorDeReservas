const db = require("../database/db"); //importo la conexión a MySQL. Permite ejecutar consultas como db.query .

class ReservaModel {
  static async create(data) {
    const query = `
        INSERT INTO reserva
        (alojamiento_id, fecha_inicio, fecha_fin, cliente_dni)
        VALUES (?,?,?,?)`;
    // Se envían los valores al SQL.
    const [result] = await db.query(query, [
      data.alojamientoId,
      data.fechaInicio,
      data.fechaFin,
      data.dniCliente,
    ]);

    return {
      id: result.insertId, //id generado por sql.
      ...data, // Es "spread operator" significa: copiar todas las propiedads de reserva .
    };
  }

  static async search(filtros = {}) {
    let query = `SELECT *
                    FROM reserva
                    WHERE 1 = 1`;

    let params = [];

    if (filtros.dniNumber) {
      query += ` AND cliente_dni = ?`;
      params.push(filtros.dniNumber);
    }
    if (filtros.idAlojNumber) {
      query += ` AND alojamiento_id = ?`;
      params.push(filtros.idAlojNumber);
    }
    if (filtros.mesNumber && filtros.anioNumber) {
      const inicioMes = new Date(filtros.anioNumber, filtros.mesNumber - 1, 1);
      const inicioMesSiguiente = new Date(
        filtros.anioNumber,
        filtros.mesNumber,
        1,
      );
      const formatDate = (date) =>
        date.toISOString().slice(0, 19).replace("T", " ");
      query += ` AND NOT (
                fecha_fin < ?
                OR fecha_inicio >= ?
                )`;
      params.push(formatDate(inicioMes));
      params.push(formatDate(inicioMesSiguiente));
    }
    const [result] = await db.query(query, params);
    return result;
  }

  static async getById(id) {
    const query = `
    SELECT  * FROM reserva WHERE id=?`;
    const [rows] = await db.query(query, [id]);
    return rows;
  }

  static async getByFecha(fechaInicio, fechaFin) {
    const query = `SELECT * FROM reserva WHERE fecha_inicio <= ? AND fecha_fin >= ?`;
    const [result] = await db.query(query, [fechaFin, fechaInicio]);

    return {
      result,
    };
  }

  static async getByAlojamiento(alojamientoId) {
    const query = `
    SELECT * FROM reserva WHERE alojamiento_id=?`;
    const [rows] = await db.query(query, [alojamientoId]);
    return rows;
  }

  static async update(nuevaReserva) {
    const query = `
    UPDATE reserva
    SET 
    cliente_id = ?,
    alojamiento_id = ?,
    fecha_inicio = ?,
    fecha_fin = ?
    WHERE id = ?;
    `;
    const [resultado] = await db.query(query, [
      nuevaReserva.clienteId,
      nuevaReserva.alojamientoId,
      nuevaReserva.nuevaFechaInicio,
      nuevaReserva.nuevaFechaFin,
      nuevaReserva.id,
    ]);
    return resultado;
  }

  static async remove(id) {
    const query = `DELETE FROM reserva WHERE id = ?`;
    const [result] = await db.query(query, [id]);
    return result;
  }
}

module.exports = ReservaModel;
