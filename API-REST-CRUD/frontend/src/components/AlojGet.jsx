import { useEffect, useState } from "react";
import { getAll } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";

export function AlojGet({ onClose }) {
  const [error, setError] = useState("");
  const [alojamientos, setAlojamientos] = useState(null);

  useEffect(() => {
    async function mostrarAloj() {
      try {
        const response = await getAll();
        setAlojamientos(response);
      } catch (error) {
        setError(error.message);
      }
    }
    mostrarAloj();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {alojamientos && (
        <ResponseCard titulo={"Lista de alojamientos"} onClose={onClose}>
          <>
            <ul className="alojamiento-list">
              {alojamientos.map((a) => (
                <li className="alojamiento-item" key={a.id}>
                  <p>
                    <strong>ID</strong>
                    <span>{a.id}</span>
                  </p>

                  <p>
                    <strong>Tipo</strong>
                    <span>{a.tipo}</span>
                  </p>

                  <p>
                    <strong>Capacidad</strong>
                    <span>{a.capacidad} personas</span>
                  </p>

                  <p>
                    <strong>Precio</strong>
                    <span>${a.precio}</span>
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
