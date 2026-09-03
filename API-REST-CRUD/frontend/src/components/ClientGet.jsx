import { useState, useEffect } from "react";
import { getClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";

//creo funcion madre
export function ShowClient({ onClose }) {
  const [clientes, setClientes] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarClientes() {
      try {
        const datos = await getClientes();
        setClientes(datos);
        setError("");
      } catch (error) {
        setError(error.message);
      }
    }
    cargarClientes();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {/* Si existe un error, muestra un párrafo con el mensaje del error. Si no existe, no muestres nada." */}
      {clientes && (
        <ResponseCard titulo="Lista de clientes:" onClose={onClose}>
          <ul className="alojamiento-list">
            {clientes.map((cliente) => (
              <li className="alojamiento-item" key={cliente.dni}>
                <p>
                  <strong>Dni: </strong>
                  <span>{cliente.dni}</span>
                  <strong> Nombre: </strong>
                  <span>{cliente.nombre}</span>
                  <strong> Apellido: </strong>
                  <span>{cliente.apellido}</span>
                  <strong>Telefono:</strong>
                  <span>{cliente.telefono}</span>
                </p>
              </li>
            ))}
          </ul>
        </ResponseCard>
      )}
    </>
  );
}
