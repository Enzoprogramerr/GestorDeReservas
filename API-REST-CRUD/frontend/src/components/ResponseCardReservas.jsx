import { FormaterDate } from "../utils/formaterDate";
import { formaterPrice } from "../utils/formaterPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export function ResponseCardReserva({ reserva, titulo, onClose }) {
  return (
    <div className="div-response">
      <button className="btn-close" onClick={onClose}>
        <img className="close-bt" src="/borrar.png" alt="cerrar ventana" />
      </button>
      <div className="content-title">
        <FontAwesomeIcon className="check" icon={faCircleCheck} />
        <p className="response-title">{titulo}</p>
      </div>
      <div className="client-response">
        <p>
          <strong>Alojamiento:</strong> {reserva.tipo}
        </p>

        <p>
          <strong>Inicio:</strong> {FormaterDate(reserva.fecha_inicio)}
        </p>

        <p>
          <strong>Fin:</strong> {FormaterDate(reserva.fecha_fin)}
        </p>
        <p>
          <strong>DNI:</strong> {reserva.cliente_dni}
        </p>
        <p>
          <strong>Precio total:</strong> {formaterPrice(reserva.precio_total)}
        </p>
      </div>
    </div>
  );
}
