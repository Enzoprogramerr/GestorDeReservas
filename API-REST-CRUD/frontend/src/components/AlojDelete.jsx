import { useState } from "react";
import { remove } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";

export function AlojDelete({ onClose }) {
  const [alojamiento, setAlojamiento] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = Number(formData.get("id"));
    try {
      const response = await remove(id);
      setAlojamiento(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" placeholder="Id de alojamiento" />
        <button type="submit">Eliminar</button>
        <button onClick={onClose}>x</button>
      </form>
      {error && <p>{error}</p>}
      {alojamiento && (
        <ResponseCard
          titulo={alojamiento.message}
          onClose={onClose}
        ></ResponseCard>
      )}
    </>
  );
}
