import { useState } from "react";
import { create } from "../services/reservaService";
import { ResponseCard } from "./ResponseCard";

export function ReservaCreate({ onClose }) {
  const [reserva, setNuevaReserva] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevaReserva = {
      alojamientoId: formData.get("alojamientoId"),
      fechaInicio: formData.get("fechaInicio"),
      fechaFin: formData.get("fechaFin"),
      dniCliente: formData.get("dniCliente"),
    };
    try {
      const response = await create(nuevaReserva);
      setNuevaReserva(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="alojamientoId"
          placeholder="Id alojamiento"
        />
        <input type="date" name="fechaInicio" placeholder="Fecha de inicio" />
        <input type="date" name="fechaFin" placeholder="Fecha de fin" />
        <input type="number" name="dniCliente" placeholder="Dni del cliente" />
        <button type="submit">Crear</button>
        <button type="button" onClick={onClose}>
          x
        </button>
      </form>
      {error && <p>{error}</p>}
      {reserva && (
        <ResponseCard titulo={"Reserva creada con éxito."} onClose={onClose}>
          <div className="alojamiento-item">
            <p>
              <strong>Id</strong>
              <span>{reserva.id}</span>
            </p>

            <p>
              <strong>Id alojamiento</strong>
              <span>{reserva.alojamientoId}</span>
            </p>

            <p>
              <strong>Fecha de inicio</strong>
              <span>{reserva.fechaInicio}</span>
            </p>

            <p>
              <strong>Fecha fin</strong>
              <span>{reserva.fechaFin}</span>
            </p>
            <p>
              <strong>Dni cliente </strong>
              <span>{reserva.dniCliente}</span>
            </p>
          </div>
        </ResponseCard>
      )}
    </>
  );
}
