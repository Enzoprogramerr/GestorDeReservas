import { useState } from "react";
import { AlojGet } from "../components/AlojGet";
import { AlojGetByType } from "../components/AlojGetByType";
import { AlojCreate } from "../components/AlojCreate";
import { AlojUpdate } from "../components/AlojUpdate";
import { AlojDelete } from "../components/AlojDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsers,
  faUserPlus,
  faMagnifyingGlass,
  faUserPen,
  faUserMinus,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export function AlojamientoPage() {
  const [mostrarAloj, setMostrarAloj] = useState(false);
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [crearAlojamiento, setCrearAlojamiento] = useState(false);
  const [updateAlojamiento, setUpdateAlojamiento] = useState(false);
  const [deleteAlojamiento, setDeleteAlojamiento] = useState(false);

  return (
    <>
      <section className="quick-actions">
        <button
          type="button"
          className="quick-action"
          onClick={() => {
            setMostrarAloj(true);
          }}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Ver Alojamientos</div>

            <div className="quick-action-description">
              Consultar todos los alojamientos
            </div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </button>

        <button
          type="button"
          className="quick-action"
          onClick={() => {
            setMostrarBusqueda(true);
          }}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title"> Buscar alojamiento</div>

            <div className="quick-action-description">
              Buscar alojamiento por tipo
            </div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </button>

        <button
          type="button"
          className="quick-action"
          onClick={() => {
            setCrearAlojamiento(true);
          }}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Nuevo alojamiento</div>

            <div className="quick-action-description">
              Registrar nuevo alojamiento
            </div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </button>

        <button
          type="button"
          className="quick-action"
          onClick={() => {
            setUpdateAlojamiento(true);
          }}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUserPen} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Editar alojamiento</div>

            <div className="quick-action-description">
              Modificar datos de un alojamiento
            </div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </button>

        <button
          type="button"
          className="quick-action"
          onClick={() => {
            setDeleteAlojamiento(true);
          }}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUserMinus} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Eliminar un alojamiento</div>

            <div className="quick-action-description">
              Eliminar un alojamiento registrado
            </div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </button>
      </section>

      {mostrarAloj && <AlojGet onClose={() => setMostrarAloj(false)} />}

      {mostrarBusqueda && (
        <AlojGetByType onClose={() => setMostrarBusqueda(false)} />
      )}

      {crearAlojamiento && (
        <AlojCreate onClose={() => setCrearAlojamiento(false)} />
      )}

      {updateAlojamiento && (
        <AlojUpdate onClose={() => setUpdateAlojamiento(false)} />
      )}

      {deleteAlojamiento && (
        <AlojDelete onClose={() => setDeleteAlojamiento(false)} />
      )}
    </>
  );
}
