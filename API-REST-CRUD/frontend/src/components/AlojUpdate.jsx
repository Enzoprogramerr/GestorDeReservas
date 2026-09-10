import { useState } from "react";
import { update } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";

export function AlojUpdate({ onClose }) {
  const [alojamiento, setAlojamiento] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevoAlojamiento = {
      id: formData.get("id"),
      tipo: formData.get("tipo"),
      capacidad: formData.get("capacidad"),
      precio: formData.get("precio"),
    };

    try {
      const response = await update(nuevoAlojamiento);
      setAlojamiento(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" />
        <input type="text" name="tipo" placeholder="tipo" />
        <input type="text" name="capacidad" placeholder="capacidad" />
        <input type="number" name="precio" placeholder="precio" />
        <button type="submit">Guardar</button>
        <button type="button" onClick={onClose}>
          x
        </button>
      </form>
      {error && <p>{error}</p>}
      {alojamiento && (
        <ResponseCardAlojamiento
          alojamiento={alojamiento}
          titulo={"Alojamiento actualizado con éxito"}
          onClose={onClose}
        />
      )}
    </>
  );
}
