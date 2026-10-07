import { formaterPrice } from "../utils/formaterPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export function ResponseCardAlojamiento({ alojamiento, titulo, onClose }) {
  return (
    <>
      <div className="div-response">
        <button className="btn-close" onClick={onClose}>
          <img className="close-bt" src="/borrar.png" alt="cerrar ventana" />
        </button>
        <div className="content-title">
          <FontAwesomeIcon className="check" icon={faCircleCheck} />
          <p className="response-title">{titulo}</p>
        </div>
        <div className="alojamiento-item">
          <p>
            <strong>Id</strong>
            <span>{alojamiento.id}</span>
          </p>

          <p>
            <strong>Tipo</strong>
            <span>{alojamiento.tipo}</span>
          </p>

          <p>
            <strong>Capacidad</strong>
            <span>{alojamiento.capacidad} personas</span>
          </p>

          <p>
            <strong>Precio</strong>
            <span>{`${formaterPrice(alojamiento.precio)}`}</span>
          </p>
        </div>
      </div>
    </>
  );
}
