import { useState } from "react";
import { ShowClient } from "../components/ClientGet";
import { ClientCreate } from "../components/ClientCreate";
import { ClientGetById } from "../components/ClientGetById";
import { ClientPut } from "../components/ClientPut";
import { ClientDelete } from "../components/ClientDelete";

export function ClientPage() {
  const [cargaCliente, setCargaCliente] = useState(false);
  const [crearCliente, setCrearCliente] = useState(false);
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [editarCliente, setEditarCliente] = useState(false);
  const [eliminarCliente, setEliminarCliente] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setCargaCliente(true);
        }}
      >
        MOSTRAR LISTA DE CLIENTES
      </button>
      {cargaCliente && (
        <ShowClient
          onClose={() => {
            setCargaCliente(false);
          }}
        />
      )}

      <button
        onClick={() => {
          setCrearCliente(true);
        }}
      >
        CREAR NUEVO CLIENTE
      </button>
      {crearCliente && <ClientCreate onClose={() => setCrearCliente(false)} />}

      <button
        onClick={() => {
          setMostrarBusqueda(true);
        }}
      >
        BÚSQUEDA DE CLIENTE POR DNI
      </button>
      {mostrarBusqueda && (
        <ClientGetById onClose={() => setMostrarBusqueda(false)} />
      )}

      <button
        onClick={() => {
          setEditarCliente(true);
        }}
      >
        EDITAR CLIENTE
      </button>
      {editarCliente && <ClientPut onClose={() => setEditarCliente(false)} />}

      <button
        onClick={() => {
          setEliminarCliente(true);
        }}
      >
        ELIMINAR CLIENTE
      </button>
      {eliminarCliente && (
        <ClientDelete onClose={() => setEliminarCliente(false)} />
      )}
    </>
  );
}
