import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export function ErrorCard({ title, message, close }) {
  return (
    <div className="div-response">
      <div className="content-title">
        <FontAwesomeIcon className="check-error" icon={faCircleXmark} />
        <h3 className="response-title">{title}</h3>
      </div>
      <p>{message}</p>
      <button className="close-error" onClick={close}>
        Volver
      </button>
    </div>
  );
}
