import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export function ResponseCardClient({ cliente, titulo, onClose }) {
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
        <div className="client-response">
          <p>
            <strong>Dni:</strong> {cliente.dni}
          </p>

          <p>
            <strong>Nombre:</strong> {cliente.nombre}
          </p>

          <p>
            <strong>Apellido:</strong> {cliente.apellido}
          </p>
          <p>
            <strong>Telefono:</strong> {cliente.telefono}
          </p>
        </div>
      </div>
    </>
  );
}
