import { getAll, getByDni } from "../services/reservaService";
import { useState } from "react";
import { ResponseCard } from "./ResponseCard";
import { FormaterDate } from "../utils/formaterDate";
import { getByAlojamiento } from "../services/reservaService";
import { getByMesAño } from "../services/reservaService";

export function MostrarReserva({ onClose }) {
  const [error, setError] = useState("");
  const [reserva, setReserva] = useState(null);
  /*useEffect(() => {
     async function mostrarReserva() {
      try {
        const response = await getAll();
        setReserva(response);
      } catch (error) {
        setError(error.message);
      }
    }
    mostrarReserva();
  }, []); */

  async function get() {
    try {
      const response = await getAll();
      setReserva(response);
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
      <button onClick={get}>Buscar todas las reservas</button>
      <form onSubmit={getByClient}>
        <input type="number" name="idCliente" placeholder="Dni del cliente" />
        <button type="submit">Buscar</button>
      </form>

      <form onSubmit={getByAloj}>
        <input type="number" name="idAloj" placeholder="Id del alojamiento" />
        <button type="submit">Buscar</button>
      </form>

      <form onSubmit={getByMesandAnio}>
        <input type="number" name="mes" placeholder="Mes" />
        <input type="number" name="año" placeholder="Año" />
        <button type="submit">Buscar</button>
      </form>
      {error && <p>{error}</p>}
      {reserva && (
        <ResponseCard titulo={"Lista de reservas"} onClose={onClose}>
          <>
            <ul className="alojamiento-list">
              {reserva.map((a) => (
                <li className="alojamiento-item" key={a.id}>
                  <p>
                    <strong>Id reserva</strong>
                    <span>{a.id}</span>
                  </p>

                  <p>
                    <strong>Alojamiento Id</strong>
                    <span>{a.alojamiento_id}</span>
                  </p>

                  <p>
                    <strong>Fecha de inicio</strong>
                    <span>{FormaterDate(a.fecha_inicio)}</span>
                  </p>

                  <p>
                    <strong>Fecha de fin</strong>
                    <span>{FormaterDate(a.fecha_fin)}</span>
                  </p>
                  <p>
                    <strong>Dni cliente</strong>
                    <span>{a.cliente_dni}</span>
                  </p>
                </li>
              ))}
            </ul>
          </>
        </ResponseCard>
      )}
    </>
  );
}
