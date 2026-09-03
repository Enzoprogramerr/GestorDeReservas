import { useEffect, useState } from "react";
import { getByIdClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";

export function ClientGetById({ onClose }) {
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState("");
  const [close, setClose] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id");
    setError("");
    try {
      const responseJSON = await getByIdClientes(id);
      setCliente(responseJSON);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="Ingrese dni" />
        <button type="submit">Buscar</button>
        <button onClick={onClose}>x</button>
      </form>

      {error && <p>{error}</p>}
      {cliente && (
        <ResponseCard titulo="Cliente encontrado con éxito" onClose={onClose}>
          <div className="client-response">
            <p>
              <strong>Dni:</strong>
              {cliente.dni}
            </p>

            <p>
              <strong>Nombre:</strong>
              {cliente.nombre}
            </p>

            <p>
              <strong>Apellido:</strong>
              {cliente.apellido}
            </p>
            <p>
              <strong>Telefono:</strong>
              {cliente.telefono}
            </p>
          </div>
        </ResponseCard>
      )}
    </>
  );
}
