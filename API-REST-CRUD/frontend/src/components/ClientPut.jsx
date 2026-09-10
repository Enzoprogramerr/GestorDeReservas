import { useState } from "react";
import { updateClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";
import { ResponseCardClient } from "./ResponseCardClient";

export function ClientPut({ onClose }) {
  const [clienteEditado, setClienteEditado] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevoCliente = {
      dni: Number(formData.get("dni")),
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      telefono: Number(formData.get("telefono")),
    };
    try {
      const response = await updateClientes(nuevoCliente);
      setClienteEditado(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form className="post-form" onSubmit={handleSubmit}>
        <input type="number" name="dni" placeholder="Dni" />
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="apellido" placeholder="Apellido" />
        <input type="number" name="telefono" placeholder="Teléfono" />
        <button type="submit">Guardar</button>
        <button type="button" onClick={onClose}>
          x
        </button>
      </form>
      {error && <p>{error}</p>}
      {clienteEditado && (
        <ResponseCardClient
          cliente={clienteEditado}
          titulo={"Cliente actualizado con éxito"}
          onClose={onClose}
        />
      )}
    </>
  );
}
