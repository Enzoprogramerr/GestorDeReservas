const db = require("../database/db");

class AlojamientoModel {
  static async create(alojamiento) {
    const query = `INSERT INTO alojamiento (tipo, capacidad, precio) VALUES (?, ?, ?)`;
    const [result] = await db.query(query, [
      //destructuring del array que devuelve mysql2/promise [result, fields]
      alojamiento.tipo,
      alojamiento.capacidad,
      alojamiento.precio,
    ]);
    return {
      id: result.insertId,
      ...alojamiento,
    };
  }

  static async getAll() {
    const query = `SELECT * FROM alojamiento`;
    const [result] = await db.query(query, []);
    return result;
  }

  static async getByType(type) {
    const query = `SELECT * FROM alojamiento WHERE tipo = ? LIMIT 1`;
    const [result] = await db.query(query, [type]);
    return result[0];
  }

  static async getById(id) {
    const query = `SELECT * FROM alojamiento WHERE id= ? LIMIT 1`;
    const [result] = await db.query(query, [id]);
    return result[0];
  }
  static async put(id, tipo, capacidad, precio) {
    const query = `update alojamiento set tipo = ?, capacidad= ?, precio  =  ? 
      WHERE id = ?`;
    const [result] = await db.query(query, [tipo, capacidad, precio, id]);
    if (result.affectedRows === 0) {
      return null;
    }
    return await this.getById(id);
  }
  static async remove(id) {
    const query = `DELETE FROM alojamiento WHERE id = ?`;
    const [result] = await db.query(query, [id]);
    return result;
  }
}

module.exports = AlojamientoModel;
