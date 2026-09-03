const db = require("../database/db");

class ClienteModel {
  static async create(dni, nombre, apellido, telefono) {
    const query = `INSERT INTO cliente (dni, nombre, apellido, telefono) VALUES (?,?,?,?)`;
    const [result] = await db.query(query, [dni, nombre, apellido, telefono]);
    return result;
  }
  static async getAll() {
    const query = `SELECT * FROM cliente`;
    const [result] = await db.query(query, []);
    return result;
  }

  static async getById(dni) {
    const query = `SELECT * FROM cliente WHERE dni= ? LIMIT 1`;
    const [result] = await db.query(query, [dni]);
    return result[0];
  }
  static async put(dni, nombre, apellido, telefono) {
    const query = `update cliente set nombre = ?, apellido =  ?, telefono = ? 
      WHERE dni = ?`;
    const [result] = await db.query(query, [nombre, apellido, telefono, dni]);
    if (result.affectedRows === 0) {
      return null;
    }
    return await this.getById(dni);
  }
  static async remove(dni) {
    const query = `DELETE FROM cliente WHERE dni = ?`;
    const [result] = await db.query(query, [dni]);
    return result;
  }
}

module.exports = ClienteModel;
