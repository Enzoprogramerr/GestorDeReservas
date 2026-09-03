//LÓGICA DE NEGOCIO (CRUD)
//TODO PERSONALIZAR MENSAJES DE ERROR
// Recibe peticion y delega trabajo al Service

const alojamientoService = require("../services/alojamientoService");

class AlojamientoControllers {
  static async create(req, res) {
    try {
      const data = req.body;
      const nuevoAlojamiento = await alojamientoService.createAlojamiento(data);
      res.status(201).json(nuevoAlojamiento);
    } catch (error) {
      res.status(400).json({ error: error.message }); //Se crea el objeto error con el mensaje de error para luego mostrarlo en JSON.
    }
  } //static para no instanciar la clase al utilizar el método. //async: para no producir un bloqueo durante las consultas a bd usando promesas y await.

  static async getAll(req, res) {
    try {
      const registros = await alojamientoService.getAll();
      res.status(201).json(registros);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getType(req, res) {
    try {
      const { type } = req.params;
      const alojamiento = await alojamientoService.getByType(type);
      res.status(201).json(alojamiento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const nuevoAlojamiento = await alojamientoService.put(id, data);
      res.status(201).json(nuevoAlojamiento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async remove(req, res) {
    try {
      const { id } = req.params;
      const result = await alojamientoService.remove(id);
      res.status(201).json({ message: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AlojamientoControllers;
