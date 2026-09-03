import { useState } from "react";
import { removeClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";

export function ClientDelete({ onClose }) {
  const [action, setAction] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = Number(formData.get("id"));
    setError("");
    setAction(null);
    try {
      const response = await removeClientes(id);
      setAction(response);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" placeholder="Ingrese Dni" />
        <button type="submit">Eliminar cliente</button>
        <button onClick={onClose}>x</button>
      </form>
      {action && (
        <ResponseCard titulo={action} onClose={onClose}></ResponseCard>
      )}
      {error && <p>{error}</p>}
    </>
  );
}
