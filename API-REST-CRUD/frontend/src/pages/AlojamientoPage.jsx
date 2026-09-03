import { useState } from "react";
import { AlojGet } from "../components/AlojGet";
import { AlojGetByType } from "../components/AlojGetByType";
import { AlojCreate } from "../components/AlojCreate";
import { AlojUpdate } from "../components/AlojUpdate";
import { AlojDelete } from "../components/AlojDelete";

export function AlojamientoPage() {
  const [mostrarAloj, setMostrarAloj] = useState(false);
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [crearAlojamiento, setCrearAlojamiento] = useState(false);
  const [updateAlojamiento, setUpdateAlojamiento] = useState(false);
  const [deleteAlojamiento, setDeleteAlojamiento] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setMostrarAloj(true);
        }}
      >
        Mostrar alojamientos
      </button>
      {mostrarAloj && (
        <AlojGet
          onClose={() => {
            setMostrarAloj(false);
          }}
        />
      )}

      <button
        onClick={() => {
          setMostrarBusqueda(true);
        }}
      >
        Buscar alojamiento por tipo
      </button>
      {mostrarBusqueda && (
        <AlojGetByType
          onClose={() => {
            setMostrarBusqueda(false);
          }}
        />
      )}

      <button
        onClick={() => {
          setCrearAlojamiento(true);
        }}
      >
        Crear nuevo alojamiento
      </button>
      {crearAlojamiento && (
        <AlojCreate
          onClose={() => {
            setCrearAlojamiento(false);
          }}
        />
      )}

      <button
        onClick={() => {
          setUpdateAlojamiento(true);
        }}
      >
        Actualizar un alojamiento
      </button>
      {updateAlojamiento && (
        <AlojUpdate
          onClose={() => {
            setUpdateAlojamiento(false);
          }}
        ></AlojUpdate>
      )}

      <button
        onClick={() => {
          setDeleteAlojamiento(true);
        }}
      >
        Eliminar alojamiento
      </button>
      {deleteAlojamiento && (
        <AlojDelete
          onClose={() => {
            setDeleteAlojamiento(false);
          }}
        />
      )}
    </>
  );
}
