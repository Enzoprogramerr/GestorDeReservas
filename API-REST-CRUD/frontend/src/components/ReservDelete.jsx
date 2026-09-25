import { useState } from "react";
import { remove } from "../services/reservaService";
import { ResponseCard } from "./ResponseCard";
import { ErrorCard } from "./ErrorCard";
import { useEffect } from "react";

export function ReserveDelete({ onClose, idReserva }) {
  const [reserva, setReserva] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  let idAEliminar = idReserva?.id;

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idAEliminar) {
      const formData = new FormData(e.target);
      const id = formData.get("id");
      idAEliminar = id;
    }

    try {
      const response = await remove(idAEliminar);
      setReserva(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="modal-overlay">
        <div className={`edit-client-modal ${visible ? "open" : ""}`}>
          {reserva ? (
            <ResponseCard titulo={reserva} onClose={onClose}></ResponseCard>
          ) : error ? (
            <ErrorCard
              title={"Error al eliminar"}
              message={error}
              close={onClose}
            />
          ) : (
            <form className="edit-client-form" onSubmit={handleSubmit}>
              <h3>Eliminar reserva</h3>
              <div className="form-field">
                <label>Id de la reserva</label>
                <input type="number" name="id" placeholder="Id de la reserva" />
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
