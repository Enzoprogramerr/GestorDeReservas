import { useState } from "react";
import { getByType } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";
import { ResponseCardAlojamiento } from "./ResponseCardAloj";

export function AlojGetByType({ onClose }) {
  const [alojamiento, setAlojamiento] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textForm = new FormData(e.target);
    const type = textForm.get("tipo");
    try {
      const response = await getByType(type);
      setAlojamiento(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="tipo" placeholder="Tipo de alojamiento" />
        <button type="submit">Buscar</button>
        <button type="button" onClick={onClose}>
          x
        </button>
      </form>
      {error && <p>{error}</p>}
      {alojamiento && (
        <ResponseCardAlojamiento
          alojamiento={alojamiento}
          titulo={"Alojamiento encontrado con éxito"}
          onClose={onClose}
        />
      )}
    </>
  );
}
