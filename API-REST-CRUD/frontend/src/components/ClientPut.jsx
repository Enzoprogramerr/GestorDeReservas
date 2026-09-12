import { useEffect, useState } from "react";
import { updateClientes } from "../services/clienteServices";
import { ResponseCardClient } from "./ResponseCardClient";

export function ClientPut({ onClose }) {
  const [clienteEditado, setClienteEditado] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
      <div className="modal-overlay">
        <div className={`edit-client-modal ${visible ? "open" : ""}`}>
          <form className="edit-client-form" onSubmit={handleSubmit}>
            <h3>Editar cliente</h3>
            <div className="form-field">
              <label>Dni</label>
              <input type="number" name="dni" placeholder="Dni" />
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
