import { getAll, getByDni } from "../services/reservaService";
import { useState } from "react";
import { ResponseCardReserva } from "./ResponseCardReservas";
import { getByAlojamiento } from "../services/reservaService";
import { getByMesAño } from "../services/reservaService";
import { ReservaList } from "./ReservaTable";

export function MostrarReserva({ onClose }) {
  const [error, setError] = useState("");
  const [reserva, setReserva] = useState(null);
  const [tipoBusqueda, setTipoBusqueda] = useState(null);

  async function get() {
    try {
      const response = await getAll();
      setReserva(response);
      setError("");
    } catch (error) {
      setReserva(null);
      setError(error.message);
    }
  }

  async function getByClient(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dniCliente = formData.get("idCliente");
    console.log(dniCliente);
    try {
      const response = await getByDni(dniCliente);
      setError("");
      setReserva(response);
    } catch (error) {
      setReserva(null);
      setError(error.message);
    }
  }

  async function getByAloj(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const idAloj = formData.get("idAloj");
    try {
      const response = await getByAlojamiento(idAloj);
      setError("");
      setReserva(response);
    } catch (error) {
      setReserva(null);
      setError(error.message);
    }
  }

  async function getByMesandAnio(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const mes = formData.get("mes");
    const anio = formData.get("año");
    try {
      const response = await getByMesAño(mes, anio);
      setError("");
      setReserva(response);
    } catch (error) {
      setReserva(null);
      setError(error.message);
    }
  }

  return (
    <>
      <h2>¿Cómo queres buscar?</h2>

      <div className="busqueda-reserva">
        <button onClick={get}>Buscar todas las reservas</button>

        <button onClick={() => setTipoBusqueda("cliente")}>
          Buscar por cliente
        </button>
        {tipoBusqueda === "cliente" && (
          <form onSubmit={getByClient}>
            <input
              type="number"
              name="idCliente"
              placeholder="Dni del cliente"
            />
            <button type="submit">Buscar</button>
          </form>
        )}

        <button onClick={() => setTipoBusqueda("alojamiento")}>
          Buscar por alojamiento
        </button>
        {tipoBusqueda === "alojamiento" && (
          <form onSubmit={getByAloj}>
            <input
              type="number"
              name="idAloj"
              placeholder="Id del alojamiento"
            />
            <button type="submit">Buscar</button>
          </form>
        )}

        <button onClick={() => setTipoBusqueda("mes")}>Buscar por mes</button>
        {tipoBusqueda === "mes" && (
          <form onSubmit={getByMesandAnio}>
            <input type="number" name="mes" placeholder="Mes" />
            <input type="number" name="año" placeholder="Año" />
            <button type="submit">Buscar</button>
          </form>
        )}
      </div>

      {error && <p>{error}</p>}
      {reserva && (
        <>
          <div className="reserva-mobile">
            <ResponseCardReserva reservas={reserva} onClose={onClose} />
          </div>

          <div className="reserva-desktop">
            <ReservaList reservas={reserva} onClose={onClose} />
          </div>
        </>
      )}
    </>
  );
}
