import { useState } from "react";
import { ShowClient } from "../components/ClientGet";
import { ClientCreate } from "../components/ClientCreate";
import { ClientGetById } from "../components/ClientGetById";
import { ClientPut } from "../components/ClientPut";
import { ClientDelete } from "../components/ClientDelete";
import { SectionAction } from "../components/SectionActions";
import { Navbar } from "../components/Navbar";

import {
  faUsers,
  faUserPlus,
  faMagnifyingGlass,
  faUserPen,
  faUserMinus,
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
        <SectionAction
          OpenClose={() => {
            setCargaCliente(true);
          }}
          icons={faUsers}
          title={"Ver clientes"}
          subtitle={"Consultar todos los clientes"}
        />

        <SectionAction
          OpenClose={() => {
            setMostrarBusqueda(true);
          }}
          icons={faMagnifyingGlass}
          title={"Buscar cliente"}
          subtitle={"Buscar por DNI"}
        />

        <SectionAction
          OpenClose={() => {
            setCrearCliente(true);
          }}
          icons={faUserPlus}
          title={"Nuevo cliente"}
          subtitle={"Registrar un nuevo cliente"}
        />

        <SectionAction
          OpenClose={() => {
            setEditarCliente(true);
          }}
          icons={faUserPen}
          title={"Editar cliente"}
          subtitle={"Modificar datos de un cliente"}
        />

        <SectionAction
          OpenClose={() => {
            setEliminarCliente(true);
          }}
          icons={faUserMinus}
          title={"Eliminar cliente"}
          subtitle={"Eliminar un cliente registrado"}
        />
      </section>

      <Navbar />

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
