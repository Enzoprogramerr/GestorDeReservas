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
        <button onClick={onClose}>x</button>
      </form>
      {error && <p>{error}</p>}
      {alojamiento && (
        <ResponseCard titulo={"Alojamiento actualizado."} onClose={onClose}>
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
