import { useState } from "react";
import { getByType } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";

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
        <button onClick={onClose}>x</button>
      </form>
      {error && <p>{error}</p>}
      {alojamiento && (
        <ResponseCard titulo={"Alojamiento encontrado."} onClose={onClose}>
          <div className="alojamiento-item">
            <p>
              <strong>ID</strong>
              <span>{alojamiento.id}</span>
            </p>

            <p>
              <strong>Tipo</strong>
              <span>{alojamiento.tipo}</span>
            </p>

            <p>
              <strong>Capacidad</strong>
              <span>{alojamiento.capacidad} personas</span>
            </p>

            <p>
              <strong>Precio</strong>
              <span>${alojamiento.precio}</span>
            </p>
          </div>
        </ResponseCard>
      )}
    </>
  );
}
