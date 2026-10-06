import { useEffect, useState } from "react";
import { removeClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";
import { ErrorCard } from "./ErrorCard";

export function ClientDelete({ onClose, cliente }) {
  const [action, setAction] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  let dniAEliminar = cliente?.dni;

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!dniAEliminar) {
      const formData = new FormData(e.target);
      dniAEliminar = Number(formData.get("dni"));
    }
    setError("");
    setAction(null);
    try {
      const response = await removeClientes(dniAEliminar);
      setAction(response);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="modal-overlay">
        <div className={`edit-client-modal ${visible ? "open" : ""}`}>
          {action ? (
            <ResponseCard titulo={action} onClose={onClose}></ResponseCard>
          ) : error ? (
            <ErrorCard
              title={"Error al eliminar"}
              message={error}
              close={onClose}
            />
          ) : (
            <form className="edit-client-form" onSubmit={handleSubmit}>
              <h3>Eliminar cliente</h3>
              <div className="form-field">
                <label>DNI</label>
                <input type="number" name="dni" placeholder="Ingrese DNI" />
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
          )}
        </div>
      </div>
    </>
  );
}
