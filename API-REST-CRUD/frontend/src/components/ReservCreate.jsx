import { useEffect, useState } from "react";
import { create } from "../services/reservaService";
import { ResponseCard } from "./ResponseCard";
import { ErrorCard } from "./ErrorCard";

export function ReservaCreate({ onClose }) {
  const [reserva, setNuevaReserva] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevaReserva = {
      alojamientoId: formData.get("alojamientoId"),
      fechaInicio: formData.get("fechaInicio"),
      fechaFin: formData.get("fechaFin"),
      dniCliente: formData.get("dniCliente"),
    };
    try {
      const response = await create(nuevaReserva);
      setNuevaReserva(response);
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
            <ResponseCard
              titulo={"Reserva creada con éxito."}
              onClose={onClose}
            >
              <div className="alojamiento-item">
                <p>
                  <strong>Id</strong>
                  <span>{reserva.id}</span>
                </p>

                <p>
                  <strong>Id alojamiento</strong>
                  <span>{reserva.alojamientoId}</span>
                </p>

                <p>
                  <strong>Fecha de inicio</strong>
                  <span>{reserva.fechaInicio}</span>
                </p>

                <p>
                  <strong>Fecha fin</strong>
                  <span>{reserva.fechaFin}</span>
                </p>
                <p>
                  <strong>Dni cliente </strong>
                  <span>{reserva.dniCliente}</span>
                </p>
                <p>
                  <strong>Precio total </strong>
                  <span>{reserva.precioTotal}</span>
                </p>
              </div>
            </ResponseCard>
          ) : error ? (
            <ErrorCard
              close={onClose}
              message={error}
              title={"Reserva creada con éxito"}
            />
          ) : (
            <form className="edit-client-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Alojamiento</label>
                <input
                  type="number"
                  name="alojamientoId"
                  placeholder="Id alojamiento"
                  required
                />
              </div>
              <div className="form-field">
                <label>Fecha de inicio</label>
                <input
                  type="date"
                  name="fechaInicio"
                  placeholder="Fecha de inicio"
                  required
                />
              </div>
              <div className="form-field">
                <label>Fecha de fin</label>
                <input
                  type="date"
                  name="fechaFin"
                  placeholder="Fecha de fin"
                  required
                />
              </div>
              <div className="form-field">
                <label>DNI Cliente</label>
                <input
                  type="number"
                  name="dniCliente"
                  placeholder="DNI del cliente"
                  required
                />
              </div>
              <div className="edit-client-actions">
                <button className="btn-cancel" type="button" onClick={onClose}>
                  Cancelar
                </button>
                <button className="btn-save" type="submit">
                  Crear
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
