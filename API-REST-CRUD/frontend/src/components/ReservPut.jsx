import { useState } from "react";
import { update } from "../services/reservaService";
import { ResponseCardReserva } from "./ResponseCardReservas";
import { useEffect } from "react";
import { ErrorCard } from "./ErrorCard";

export function ReservePut({ onClose, idReserva }) {
  const [reserva, setReserva] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  let idAEditar = idReserva?.id;

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idAEditar) {
      const data = new FormData(e.target);
      const id = data.get("idReserva");
      idAEditar = id;
    }
    const formData = new FormData(e.target);
    const nuevaReserva = {
      alojamientoId: formData.get("alojamientoId"),
      fechaInicio: formData.get("fechaInicio"),
      fechaFin: formData.get("fechaFin"),
      dniCliente: formData.get("dniCliente"),
    };
    try {
      const response = await update(idAEditar, nuevaReserva);
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
            <ResponseCardReserva
              reserva={reserva}
              titulo={"Reserva actualizada"}
              onClose={onClose}
            ></ResponseCardReserva>
          ) : error ? (
            <ErrorCard
              title={"Error al eliminar"}
              message={error}
              close={onClose}
            />
          ) : (
            <form className="edit-client-form" onSubmit={handleSubmit}>
              <h3>Editar reserva</h3>
              <div className="form-field">
                <label>Id</label>
                <input
                  type="number"
                  name="idReserva"
                  placeholder="Id de la reserva"
                  required
                />
              </div>

              <div className="form-field">
                <label>Id alojamiento</label>
                <input
                  type="number"
                  name="alojamientoId"
                  placeholder="Id alojamiento"
                  required
                />
              </div>

              <div className="form-field">
                <label>Fecha Inicio</label>
                <input
                  type="date"
                  name="fechaInicio"
                  placeholder="Fecha de inicio"
                  required
                />
              </div>

              <div className="form-field">
                <label>Fecha fin</label>
                <input
                  type="date"
                  name="fechaFin"
                  placeholder="Fecha de fin"
                  required
                />
              </div>

              <div className="form-field">
                <label>DNI cliente</label>
                <input
                  type="number"
                  name="dniCliente"
                  placeholder="Dni del cliente"
                  required
                />
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
