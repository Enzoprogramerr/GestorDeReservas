import { useState } from "react";
import { create } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";

export function AlojCreate({ onClose }) {
  const [nuevoAlojamiento, setNuevoAlojamiento] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevoAlojamiento = {
      tipo: formData.get("tipo"),
      capacidad: formData.get("capacidad"),
      precio: Number(formData.get("precio")),
    };
    try {
      const response = await create(nuevoAlojamiento);
      setNuevoAlojamiento(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form className="post-form" onSubmit={handleSubmit}>
        <input type="text" name="tipo" placeholder="tipo" />
        <input type="text" name="capacidad" placeholder="capacidad" />
        <input type="number" name="precio" placeholder="precio" />
        <button type="submit">Crear</button>
        <button onClick={onClose}>x</button>
      </form>
      {error && <p>{error}</p>}
      {nuevoAlojamiento && (
        <ResponseCard
          titulo={"Alojamiento creado con éxito."}
          onClose={onClose}
        >
          <div className="alojamiento-item">
            <p>
              <strong>ID</strong>
              <span>{nuevoAlojamiento.id}</span>
            </p>

            <p>
              <strong>Tipo</strong>
              <span>{nuevoAlojamiento.tipo}</span>
            </p>

            <p>
              <strong>Capacidad</strong>
              <span>{nuevoAlojamiento.capacidad} personas</span>
            </p>

            <p>
              <strong>Precio</strong>
              <span>${nuevoAlojamiento.precio}</span>
            </p>
          </div>
        </ResponseCard>
      )}
    </>
  );
}
