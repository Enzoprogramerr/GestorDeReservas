import {
  faPlus,
  faMagnifyingGlass,
  faPen,
  faTrash,
  faXmark,
  faTableCellsLarge,
  faUsers,
  faHouse,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FormaterDate } from "../utils/formaterDate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "./Navbar";

export function ReserveList({ reservas }) {
  return (
    <div className="reservas-page">
      {/* Header */}
      <header className="reservas-header">
        <div className="reservas-header-top">
          <div>
            <h1>Reservas</h1>
            <p>34 registradas</p>
          </div>

          <button className="btn-create-reserva">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="reservas-filters">
          <div className="reserva-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />

            <select>
              <option>Buscar por cliente</option>
              <option>Buscar por alojamiento</option>
              <option>Buscar por mes</option>
            </select>
          </div>

          <select>
            <option>Próximas</option>
            <option>En curso</option>
            <option>Terminadas</option>
          </select>
        </div>
      </header>

      {/* Lista de reservas */}
      <main className="reservas-content">
        {reservas.map((reserva) => (
          <div className="reserva-card">
            <div className="reserva-card-header">
              <span className="reserva-id">{`Reserva #${reserva.id}`}</span>

              <span className="reserva-status reserva-status-confirmada">
                Confirmada
              </span>
            </div>

            <div className="reserva-info">
              {reserva.tipo} · {reserva.cliente_dni}
            </div>

            <div className="reserva-card-footer">
              <span className="reserva-fechas">
                {FormaterDate(reserva.fecha_inicio)} –{" "}
                {FormaterDate(reserva.fecha_fin)}
              </span>

              <div className="reserva-actions">
                <button className="btn-edit-reserva">
                  <FontAwesomeIcon icon={faPen} />
                </button>

                <button className="btn-delete-reserva">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Navegación inferior */}
      <Navbar />

      {/* Modal editar reserva */}
      <div className="modal-overlay edit-reserva-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Actualizar reserva</h3>

            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <form className="reserva-form">
            <div className="form-group">
              <label>Alojamiento</label>

              <select>
                <option>#001 · Casa-Cabaña (4 personas)</option>

                <option selected>#002 · Duplex (6 personas)</option>

                <option>#003 · Casa-Cabaña (2 personas)</option>

                <option>#004 · Duplex (8 personas)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Fecha inicio</label>

              <input type="date" defaultValue="2025-12-14" />
            </div>

            <div className="form-group">
              <label>Fecha fin</label>

              <input type="date" defaultValue="2025-12-17" />
            </div>

            <div className="form-group">
              <label>DNI del cliente</label>

              <input type="text" defaultValue="31.204.887" />
            </div>

            <div className="form-actions">
              <button type="button">Cancelar</button>

              <button type="submit">Guardar</button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal eliminar reserva */}
      <div className="modal-overlay delete-reserva-modal">
        <div className="delete-modal">
          <div className="delete-icon">
            <FontAwesomeIcon icon={faTrash} />
          </div>

          <h3>Eliminar reserva</h3>

          <p>
            ¿Seguro que querés eliminar la reserva <strong>#R-1043</strong>?
            Esta acción no se puede deshacer.
          </p>

          <div className="delete-actions">
            <button type="button">Cancelar</button>

            <button type="button">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
