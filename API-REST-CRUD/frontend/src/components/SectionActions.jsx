import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function SectionAction({ OpenClose, icons, title, subtitle }) {
  return (
    <>
      <button type="button" className="quick-action" onClick={OpenClose}>
        <div className="quick-action-icon">
          <FontAwesomeIcon icon={icons} />
        </div>

        <div className="quick-action-info">
          <div className="quick-action-title">{title}</div>

          <div className="quick-action-description">{subtitle}</div>
        </div>

        <FontAwesomeIcon icon={faChevronRight} className="quick-action-arrow" />
      </button>
    </>
  );
}
