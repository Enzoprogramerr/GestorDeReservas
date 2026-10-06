import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export function ResponseCard({ titulo, children, onClose }) {
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
        <>{children}</>
      </div>
    </>
  );
}
