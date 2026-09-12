import { useState } from "react";
import { ShowClient } from "../components/ClientGet";
import { ClientCreate } from "../components/ClientCreate";
import { ClientGetById } from "../components/ClientGetById";
import { ClientPut } from "../components/ClientPut";
import { ClientDelete } from "../components/ClientDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsers,
  faUserPlus,
  faMagnifyingGlass,
  faUserPen,
  faUserMinus,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export function ClientPage() {
  const [cargaCliente, setCargaCliente] = useState(false);
  const [crearCliente, setCrearCliente] = useState(false);
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [editarCliente, setEditarCliente] = useState(false);
  const [eliminarCliente, setEliminarCliente] = useState(false);

  return (
    <>
      <section className="quick-actions">
        <button
          type="button"
          className="quick-action"
          onClick={() => setCargaCliente(true)}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Ver clientes</div>

            <div className="quick-action-description">
              Consultar todos los clientes
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
          onClick={() => setCrearCliente(true)}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Nuevo cliente</div>

            <div className="quick-action-description">
              Registrar un nuevo cliente
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
          onClick={() => setMostrarBusqueda(true)}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Buscar cliente</div>

            <div className="quick-action-description">Buscar por DNI</div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </button>

        <button
          type="button"
          className="quick-action"
          onClick={() => setEditarCliente(true)}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUserPen} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Editar cliente</div>

            <div className="quick-action-description">
              Modificar datos de un cliente
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
          onClick={() => setEliminarCliente(true)}
        >
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUserMinus} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Eliminar cliente</div>

            <div className="quick-action-description">
              Eliminar un cliente registrado
            </div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </button>
      </section>

      {cargaCliente && <ShowClient onClose={() => setCargaCliente(false)} />}

      {crearCliente && <ClientCreate onClose={() => setCrearCliente(false)} />}

      {mostrarBusqueda && (
        <ClientGetById onClose={() => setMostrarBusqueda(false)} />
      )}

      {editarCliente && <ClientPut onClose={() => setEditarCliente(false)} />}

      {eliminarCliente && (
        <ClientDelete onClose={() => setEliminarCliente(false)} />
      )}
    </>
  );
}
