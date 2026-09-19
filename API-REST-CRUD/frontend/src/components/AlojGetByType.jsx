import { useState } from "react";
import { getByType } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";
import { ResponseCardAlojamiento } from "./ResponseCardAloj";
import { useEffect } from "react";

export function AlojGetByType({ onClose }) {
  const [alojamiento, setAlojamiento] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textForm = new FormData(e.target);
    const type = textForm.get("tipo");
    try {
      const response = await getByType(type);
      setAlojamiento(response);
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
            <h3>Buscar alojamiento</h3>
            <div className="form-field">
              <label>Tipo de alojamiento</label>
              <input
                type="text"
                name="tipo"
                placeholder="Tipo de alojamiento"
              />
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

      {error && <p>{error}</p>}
      {alojamiento && (
        <ResponseCardAlojamiento
          alojamiento={alojamiento}
          titulo={"Alojamiento encontrado con éxito"}
          onClose={onClose}
        />
      )}
    </>
  );
}
