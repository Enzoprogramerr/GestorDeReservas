import { useState } from "react";
import { remove } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";
import { useEffect } from "react";
import { ErrorCard } from "./ErrorCard";

export function AlojDelete({ onClose, aloj }) {
  const [alojamiento, setAlojamiento] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  let idAEliminar = aloj?.id;

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idAEliminar) {
      const formData = new FormData(e.target);
      idAEliminar = Number(formData.get("id"));
    }
    try {
      const response = await remove(idAEliminar);
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
          {alojamiento ? (
            <ResponseCard
              titulo={alojamiento.message}
              onClose={onClose}
            ></ResponseCard>
          ) : error ? (
            <ErrorCard
              title={"Error al eliminar"}
              message={error}
              close={onClose}
            />
          ) : (
            <form className="edit-client-form" onSubmit={handleSubmit}>
              <h3>Eliminar alojamiento</h3>
              <div className="form-field">
                <label>Id del alojamiento</label>
                <input
                  type="number"
                  name="id"
                  placeholder="Id de alojamiento"
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
          )}
        </div>
      </div>
    </>
  );
}
