const alojamientoModel = require("../models/alojamientoModel");

class AlojamientoService {
  static async createAlojamiento(data) {
    const { tipo, capacidad, precio } = data; // Hago destructuring para construir unobjeto limpio y tener la posibilidad de validar datos o renombrar propiedades.
    const alojamiento = {
      tipo,
      capacidad,
      precio,
    };
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!tipo) {
      throw new Error("Debe ingresar el dato 'tipo'.");
    } else if (!soloLetras.test(tipo)) {
      throw new Error("El campo tipo deben ser letras.");
    } else if (!capacidad) {
      throw new Error("Debe ingresar el dato 'capacidad'.");
    } else if (!precio || precio === 0) {
      throw new Error("Debe ingresar el dato 'precio' o su valor mayor a 0.");
    }
    return await alojamientoModel.create(alojamiento);
  }

  static async getAll() {
    const data = await alojamientoModel.getAll();
    if (data == []) {
      return "No hay alojamientos registrados.";
    }
    return data;
  }
  static async getByType(type) {
    const result = await alojamientoModel.getByType(type);

    if (result === undefined) {
      throw new Error("No existe registro con ese valor de búsqueda.");
    }
    return result;
  }

  static async getById(id) {
    return await alojamientoModel.getById(id);
  }

  static async put(id, data) {
    const { tipo, capacidad, precio } = data;
    if (!tipo) {
      return "Debe ingresar el dato 'tipo'.";
    } else if (!capacidad) {
      return "Debe ingresar el dato 'capacidad'.";
    } else if (!precio) {
      return "Debe ingresar el dato 'precio.'";
    }
    const result = await alojamientoModel.put(id, tipo, capacidad, precio);
    if (result === null) {
      throw new Error("Ese id no se encuentra registrado.");
    }
    return result;
  }

  static async remove(id) {
    const result = await alojamientoModel.remove(id);
    if (result.affectedRows === 0) {
      throw new Error("No existe un alojamiento con ese id");
    }
    return "Alojamiento eliminado correctamente.";
  }
}
module.exports = AlojamientoService;
