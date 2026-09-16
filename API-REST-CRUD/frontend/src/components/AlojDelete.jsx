import { useState } from "react";
import { remove } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";

export function AlojDelete({ onClose }) {
  const [alojamiento, setAlojamiento] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = Number(formData.get("id"));
    try {
      const response = await remove(id);
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
            <h3>Eliminar alojamiento</h3>
            <div className="form-field">
              <label>Id del alojamiento</label>
              <input type="number" name="id" placeholder="Id de alojamiento" />
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
        <ResponseCard
          titulo={alojamiento.message}
          onClose={onClose}
        ></ResponseCard>
      )}
    </>
  );
}
