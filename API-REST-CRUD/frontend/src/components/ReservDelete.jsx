import { useState } from "react";
import { remove } from "../services/reservaService";
import { ResponseCard } from "./ResponseCard";

export function ReserveDelete({ onClose }) {
  const [reserva, setReserva] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id");
    try {
      const response = await remove(id);
      setReserva(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" placeholder="Id de la reserva" />
        <button type="submit">Eliminar</button>
        <button type="button" onClick={onClose}>
          x
        </button>
      </form>
      {error && <p>{error}</p>}
      {reserva && (
        <ResponseCard titulo={reserva} onClose={onClose}></ResponseCard>
      )}
    </>
  );
}
