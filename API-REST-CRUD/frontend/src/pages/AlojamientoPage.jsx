import { useState } from "react";
import { AlojGet } from "../components/AlojGet";
import { AlojGetByType } from "../components/AlojGetByType";
import { AlojCreate } from "../components/AlojCreate";
import { AlojUpdate } from "../components/AlojUpdate";
import { AlojDelete } from "../components/AlojDelete";
import { SectionAction } from "../components/SectionActions";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import {
  faHouse,
  faPlus,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export function AlojamientoPage() {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [crearAlojamiento, setCrearAlojamiento] = useState(false);
  const [updateAlojamiento, setUpdateAlojamiento] = useState(false);
  const [deleteAlojamiento, setDeleteAlojamiento] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <section className="quick-actions">
        <SectionAction
          OpenClose={() => {
            navigate("/alojamiento/todos");
          }}
          icons={faHouse}
          title={"Ver alojamientos"}
          subtitle={"Consultar todos los alojamientos"}
        />

        <SectionAction
          OpenClose={() => {
            setMostrarBusqueda(true);
          }}
          icons={faMagnifyingGlass}
          title={"Buscar alojamiento"}
          subtitle={"Buscar alojamiento por tipo"}
        />

        <SectionAction
          OpenClose={() => {
            setCrearAlojamiento(true);
          }}
          icons={faPlus}
          title={"Nuevo alojamiento"}
          subtitle={"Registrar nuevo alojamiento"}
        />

        <SectionAction
          OpenClose={() => {
            setUpdateAlojamiento(true);
          }}
          icons={faPenToSquare}
          title={"Editar alojamiento"}
          subtitle={"Modificar datos de un alojamiento"}
        />

        <SectionAction
          OpenClose={() => {
            setDeleteAlojamiento(true);
          }}
          icons={faTrash}
          title={"Eliminar un alojamiento"}
          subtitle={"Eliminar un alojamiento registrado"}
        />
      </section>

      <Navbar />

      {/*  {mostrarAloj && <AlojGet onClose={() => setMostrarAloj(false)} />} */}

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
