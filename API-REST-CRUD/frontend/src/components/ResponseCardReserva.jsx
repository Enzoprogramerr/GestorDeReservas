import { FormaterDate } from "../utils/formaterDate";

export function ResponseCardReserva({ reserva, titulo, onClose }) {
  return (
    <>
      <div className="div-response">
        <button className="btn-close" onClick={onClose}>
          <img className="close-bt" src="/borrar.png" alt="cerrar ventana" />
        </button>
        <p className="response-title">{titulo}</p>
        <div className="alojamiento-item">
          <p>
            <strong>Id</strong>
            <span>{reserva.id}</span>
          </p>

          <p>
            <strong>Id alojamiento</strong>
            <span>{reserva.alojamiento_id}</span>
          </p>

          <p>
            <strong>Fecha de inicio</strong>
            <span>{FormaterDate(reserva.fecha_inicio)}</span>
          </p>

          <p>
            <strong>Fecha fin</strong>
            <span>{FormaterDate(reserva.fecha_fin)}</span>
          </p>
          <p>
            <strong>Dni cliente </strong>
            <span>{reserva.cliente_dni}</span>
          </p>
        </div>
      </div>
    </>
  );
}
