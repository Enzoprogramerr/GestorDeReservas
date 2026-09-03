const clienteModel = require("../models/clienteModel");

class ClienteService {
  static async create(persona) {
    const { nombre, apellido, dni, telefono } = persona;
    if (!nombre || !apellido || !dni) {
      throw new Error("Por favor debe ingresar todos los campos.");
    }
    if (!Number.isInteger(dni)) {
      throw new Error("El campo 'dni' debe contener números.");
    }
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; //expresión regular que permite caracteres menos numéricos.

    if (!soloLetras.test(nombre) || !soloLetras.test(apellido)) {
      throw new Error(
        "Los campos Nombre y Apellido solo pueden contener letras.",
      );
    }
    if (nombre.length > 50 || apellido.length > 50) {
      throw new Error(
        "Los campos 'nombre'  y 'apellido' no pueden superar los 50 caracteres.",
      );
    }

    try {
      const result = await clienteModel.create(dni, nombre, apellido, telefono);
      return "Cliente registrado con éxito.";
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        throw new Error("Ya existe un cliente con ese dni.");
      }
      throw error; //"No sé manejar este error acá, así que no lo voy a ocultar. Lo voy a enviar hacia arriba."
    }
  }

  static async getAll() {
    return await clienteModel.getAll();
  }

  static async getById(dni) {
    const result = await clienteModel.getById(dni);
    if (result === undefined) {
      throw new Error("No existe cliente con el dni ingresado.");
    }
    return result;
  }

  static async put(dni, data) {
    const { nombre, apellido, telefono } = data;
    if (!nombre || !apellido) {
      throw new Error("Debe ingresar nombre y apellido.");
    }
    const result = await clienteModel.put(dni, nombre, apellido, telefono);
    if (result === null) {
      throw new Error("Ese dni no se encuentra registrado.");
    }
    return result;
  }

  static async remove(dni) {
    const dniNumber = Number(dni);
    if (!Number.isInteger(dniNumber) || dniNumber <= 0) {
      throw new Error("Debe ingresar carácter numérico mayor a cero.");
    }
    const result = await clienteModel.remove(dniNumber);
    if (result.affectedRows === 0) {
      throw new Error("No existe un cliente con ese id.");
    }
    return "Cliente eliminado correctamente.";
  }
}
module.exports = ClienteService;
