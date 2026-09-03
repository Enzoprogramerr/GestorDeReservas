import { useState } from "react";
import { createClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";

export function ClientCreate({ onClose }) {
  // crear objeto estado para setearlo con los valores del form que envia el usuario.
  const [clienteCreado, setClienteCreado] = useState(null);

  //estado del error para poder mostrarlo
  const [error, setError] = useState("");

  // funcion que se ejecuta al hacer click en elboton del form.
  const handleSubmit = async (e) => {
    // "e" es el evento que recibe React en el submit.
    e.preventDefault(); // indica (No hagas el comportamiento por defecto del formulario(recargar página)).

    const formData = new FormData(e.target); //toma todos los campos del evento que en este caso es el form y los junta en un objeto especial llamado FormData.

    const nuevoCliente = {
      dni: Number(formData.get("dni")),
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      telefono: Number(formData.get("telefono")),
    };
    try {
      const response = await createClientes(nuevoCliente);
      setClienteCreado(response);
      setError(""); //seteamos el error por si anteriormente hubo alguno.
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form className="post-form" onSubmit={handleSubmit}>
        <input type="number" name="dni" placeholder="DNI" />
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="apellido" placeholder="Apellido" />
        <input type="number" name="telefono" placeholder="Telefono" />
        <button type="submit">Guardar</button>
        <button onClick={onClose}>x</button>
      </form>

      {clienteCreado && (
        <ResponseCard titulo={clienteCreado} onClose={onClose}></ResponseCard>
      )}

      {error && <p>{error}</p>}
    </>
  );
}
