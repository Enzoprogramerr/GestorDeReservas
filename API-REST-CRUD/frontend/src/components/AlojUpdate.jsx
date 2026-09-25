import { useState } from "react";
import { update } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";
import { useEffect } from "react";
import { Card } from "../pages/Card";
import { ResponseCardAlojamiento } from "./ResponseCardAloj";

export function AlojUpdate({ onClose, aloj }) {
  const [alojamiento, setAlojamiento] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  let idAEditar = aloj?.id;

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idAEditar) {
      const data = new FormData(e.target);
      const id = data.get("id");
      idAEditar = id;
    }
    const formData = new FormData(e.target);
    const nuevoAlojamiento = {
      tipo: formData.get("tipo"),
      capacidad: formData.get("capacidad"),
      precio: formData.get("precio"),
    };

    try {
      const response = await update(idAEliminar, nuevoAlojamiento);
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
            <ResponseCardAlojamiento
              alojamiento={alojamiento}
              titulo={"Alojamiento actualizado con éxito"}
              onClose={onClose}
            />
          ) : error ? (
            <ErrorCard
              title={"Error al eliminar"}
              message={error}
              close={onClose}
            />
          ) : (
            <form className="edit-client-form" onSubmit={handleSubmit}>
              <h3>Editar alojamiento</h3>
              <div className="form-field">
                <label>Id del alojamiento</label>
                <input type="text" name="id" placeholder="Id" />
              </div>
              <div className="form-field">
                <label>Tipo de alojamiento</label>
                <input type="text" name="tipo" placeholder="Tipo" />
              </div>
              <div className="form-field">
                <label>Capacidad del alojamiento</label>
                <input type="text" name="capacidad" placeholder="Capacidad" />
              </div>
              <div className="form-field">
                <label>Precio del alojamiento</label>
                <input type="number" name="precio" placeholder="Precio" />
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
          )}
        </div>
      </div>
    </>
  );
}
