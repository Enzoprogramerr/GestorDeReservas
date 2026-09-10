import { useState } from "react";
import { update } from "../services/reservaService";
import { ResponseCardReserva } from "./ResponseCardReservas";

export function ReservePut({ onClose }) {
  const [reserva, setReserva] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevaReserva = {
      id: formData.get("idReserva"),
      alojamientoId: formData.get("alojamientoId"),
      fechaInicio: formData.get("fechaInicio"),
      fechaFin: formData.get("fechaFin"),
      dniCliente: formData.get("dniCliente"),
    };
    try {
      const response = await update(nuevaReserva);
      setReserva(response);
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
          name="idReserva"
          placeholder="Id de la reserva"
          required
        />
        <input
          type="number"
          name="alojamientoId"
          placeholder="Id alojamiento"
          required
        />
        <input
          type="date"
          name="fechaInicio"
          placeholder="Fecha de inicio"
          required
        />
        <input
          type="date"
          name="fechaFin"
          placeholder="Fecha de fin"
          required
        />
        <input
          type="number"
          name="dniCliente"
          placeholder="Dni del cliente"
          required
        />
        <button type="submit">Actualizar reserva</button>
        <button type="button" onClick={onClose}>
          x
        </button>
      </form>
      {error && <p>{error}</p>}
      {reserva && (
        <ResponseCardReserva
          reserva={reserva}
          titulo={"Reserva actualizada"}
          onClose={onClose}
        ></ResponseCardReserva>
      )}
    </>
  );
}
