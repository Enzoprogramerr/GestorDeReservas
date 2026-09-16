import { useEffect, useState } from "react";
import { removeClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";

export function ClientDelete({ onClose }) {
  const [action, setAction] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
      <div className="modal-overlay">
        <div className={`edit-client-modal ${visible ? "open" : ""}`}>
          <form className="edit-client-form" onSubmit={handleSubmit}>
            <h3>Eliminar cliente</h3>
            <div className="form-field">
              <label>DNI</label>
              <input type="number" name="id" placeholder="Ingrese DNI" />
            </div>
            <div className="edit-client-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn-save">
                Eliminar
              </button>
            </div>
          </form>
        </div>
      </div>

      {action && (
        <ResponseCard titulo={action} onClose={onClose}></ResponseCard>
      )}
      {error && <p>{error}</p>}
    </>
  );
}
