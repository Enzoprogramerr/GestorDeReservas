import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export function Card({
  titulo,
  lineaDos,
  lineaTres,
  lineaCuatro,
  state,
  onEdit,
  onDelete,
}) {
  return (
    <article className="entity-card">
      <div className="entity-card-content">
        <h2 className="entity-card-title">{titulo}</h2>

        <p className="entity-card-line">{lineaDos}</p>

        <p className="entity-card-line">{lineaTres}</p>

        <p className="entity-card-line">{lineaCuatro}</p>
      </div>

      <div className="entity-card-actions">
        <p className="state">{state}</p>
        <div className="buttons">
          <button
            type="button"
            className="entity-card-edit"
            onClick={onEdit}
            aria-label="Editar"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>

          <button
            type="button"
            className="entity-card-delete"
            onClick={onDelete}
            aria-label="Eliminar"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </article>
  );
}
