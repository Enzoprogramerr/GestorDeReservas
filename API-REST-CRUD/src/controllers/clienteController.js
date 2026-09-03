// TODO CREAR CONTROLLER
const clienteService = require("../services/clienteService");

class ClienteController {
  static async create(req, res) {
    try {
      const persona = req.body;
      const result = await clienteService.create(persona);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const registros = await clienteService.getAll();
      res.status(201).json(registros);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const { dni } = req.params;
      const cliente = await clienteService.getById(dni);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { dni } = req.params;
      const data = req.body;
      const nuevoCliente = await clienteService.put(dni, data);
      res.status(201).json(nuevoCliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async remove(req, res) {
    try {
      const { dni } = req.params;
      const result = await clienteService.remove(dni);
      res.status(201).json({ message: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
module.exports = ClienteController;
