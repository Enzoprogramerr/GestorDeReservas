import { useEffect, useState } from "react";
import { createClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";

export function ClientCreate({ onClose }) {
  // crear objeto estado para setearlo con los valores del form que envia el usuario.
  const [clienteCreado, setClienteCreado] = useState(null);

  //estado del error para poder mostrarlo
  const [error, setError] = useState("");

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
      <div className="modal-overlay">
        <div className={`edit-client-modal ${visible ? "open" : ""}`}>
          <form className="edit-client-form" onSubmit={handleSubmit}>
            <h3>Crear cliente</h3>
            <div className="form-field">
              <label>DNI</label>
              <input type="number" name="dni" placeholder="DNI" />
            </div>

            <div className="form-field">
              <label>Nombre</label>
              <input type="text" name="nombre" placeholder="Nombre" />
            </div>

            <div className="form-field">
              <label>Apellido</label>
              <input type="text" name="apellido" placeholder="Apellido" />
            </div>

            <div className="form-field">
              <label>Telefono</label>
              <input type="number" name="telefono" placeholder="Teléfono" />
            </div>

            <div className="edit-client-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn-save">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <p>{error}</p>}
      {clienteCreado && (
        <ResponseCard titulo={clienteCreado} onClose={onClose}></ResponseCard>
      )}
    </>
  );
}
