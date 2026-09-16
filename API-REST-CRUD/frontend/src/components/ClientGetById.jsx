import { useEffect, useState } from "react";
import { getByIdClientes } from "../services/clienteServices";
import { ResponseCard } from "./ResponseCard";
import { ResponseCardClient } from "./ResponseCardClient";

export function ClientGetById({ onClose }) {
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
      <div className="modal-overlay">
        <div className={`edit-client-modal ${visible ? "open" : ""}`}>
          <form className="edit-client-form" onSubmit={handleSubmit}>
            <h3>Buscar cliente</h3>
            <div className="form-field">
              <label>DNI</label>
              <input type="text" name="id" placeholder="Ingrese DNI" />
            </div>
            <div className="edit-client-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn-save">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>

      {error && <p>{error}</p>}
      {cliente && (
        <ResponseCardClient
          cliente={cliente}
          titulo={"Cliente encontrado con éxito"}
          onClose={onClose}
        />
      )}
    </>
  );
}
