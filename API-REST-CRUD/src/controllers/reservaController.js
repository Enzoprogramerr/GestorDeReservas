const reservaService = require("../services/reservaService");

//TODO CREAR CONTOLLER
//recibe req.body de Route. LLama al service (crea el objeto, realiza validaciones y usa/llama al models que utiliza query)

class ReservaController {
  static async create(req, res) {
    // el body debe tener la fecha en formato -> "2026-01-01"
    try {
      const data = req.body;

      const nuevaReserva = await reservaService.create(data);

      res.status(201).json(nuevaReserva);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  static async getAll(req, res) {
    try {
      const filtros = req.query; //Utilizo query porque voy a usar consultas dinamicas(filtros)
      const reservas = await reservaService.search(filtros);

      res.status(200).json(reservas);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const reserva = req.body;
      const result = await reservaService.update(id, reserva);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const result = await reservaService.getById(id);
      res.status(201).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async remove(req, res) {
    try {
      const { id } = req.params;
      const result = await reservaService.remove(id);
      res.status(201).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}
module.exports = ReservaController;
