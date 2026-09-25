const db = require("../database/db"); //importo la conexión a MySQL. Permite ejecutar consultas como db.query .

class ReservaModel {
  static async existeConflicto(
    alojamientoId,
    fechaInicio,
    fechaFin,
    id = null,
  ) {
    let query = `
    SELECT *
    FROM reserva
    WHERE alojamiento_id = ?
    AND NOT (
      fecha_fin <= ?
      OR fecha_inicio >= ?
    )
  `;

    const params = [alojamientoId, fechaInicio, fechaFin];

    if (id !== null) {
      query += ` AND id != ?`;
      params.push(id);
    }
    console.log("alojamientoId:", alojamientoId);
    console.log("fechaInicio:", fechaInicio);
    console.log("fechaFin:", fechaFin);
    console.log("params:", params);
    const [rows] = await db.query(query, params);

    return rows.length > 0;
  }

  static async create(data, precioTotal) {
    const query = `
        INSERT INTO reserva
        (alojamiento_id, fecha_inicio, fecha_fin, cliente_dni, precio_total)
        VALUES (?,?,?,?,?)`;
    // Se envían los valores al SQL.
    const [result] = await db.query(query, [
      data.alojamientoId,
      data.fechaInicio,
      data.fechaFin,
      data.dniCliente,
      precioTotal,
    ]);

    return {
      id: result.insertId, //id generado por sql.
      ...data, // Es "spread operator" significa: copiar todas las propiedads de reserva .
      precioTotal,
    };
  }

  static async search(filtros = {}) {
    let query = `SELECT
  reserva.id,
  reserva.cliente_dni,
  reserva.fecha_inicio,
  reserva.fecha_fin,
  reserva.precio_total,
  alojamiento.tipo
FROM reserva
JOIN alojamiento
  ON reserva.alojamiento_id = alojamiento.id
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
    SELECT 
      reserva.id,
      reserva.cliente_dni,
      reserva.fecha_inicio,
      reserva.fecha_fin,
      reserva.precio_total,
      alojamiento.tipo
    FROM reserva
    JOIN alojamiento
      ON reserva.alojamiento_id = alojamiento.id
    WHERE reserva.id = ?`;
    const [result] = await db.query(query, [id]);
    return result[0];
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

  static async update(id, nuevaReserva) {
    const query = `
    UPDATE reserva
    SET 
    cliente_dni = ?,
    alojamiento_id = ?,
    fecha_inicio = ?,
    fecha_fin = ?
    WHERE id = ?;
    `;
    const [result] = await db.query(query, [
      nuevaReserva.dniCliente,
      nuevaReserva.alojamientoId,
      nuevaReserva.fechaInicio,
      nuevaReserva.fechaFin,
      id,
    ]);
    if (result.affectedRows === 0) {
      return null;
    }
    return await this.getById(id);
  }

  static async remove(id) {
    const query = `DELETE FROM reserva WHERE id = ?`;
    const [result] = await db.query(query, [id]);
    return result;
  }
}

module.exports = ReservaModel;
