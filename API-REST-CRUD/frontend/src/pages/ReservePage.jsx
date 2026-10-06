import { ReservaCreate } from "../components/ReservCreate";
import { MostrarReserva } from "../components/ReservGet";
import { useState } from "react";
import { ReservePut } from "../components/ReservPut";
import { ReserveDelete } from "../components/ReservDelete";
import { SpecularButton } from "../components/SpecularButton";
import { SectionAction } from "../components/SectionActions";
import { Navbar } from "../components/Navbar";
import {
  faCalendarCheck,
  faCalendarPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export function ReservePage() {
  const [mostrarReserva, setMostrarReserva] = useState(false);
  const [crearReserva, setCrearReserva] = useState(false);
  const [updateReserva, setUpdateReserva] = useState(false);
  const [deleteReserva, setDeleteReserva] = useState(false);

  return (
    <>
      <SectionAction
        OpenClose={() => {
          setMostrarReserva(true);
        }}
        icons={faCalendarCheck}
        title={"Ver reservas"}
        subtitle={"Consultar todas las reservas"}
      />

      <SectionAction
        OpenClose={() => {
          setCrearReserva(true);
        }}
        icons={faCalendarPlus}
        title={"Nueva reserva"}
        subtitle={"Registrar nueva reserva"}
      />

      <SectionAction
        OpenClose={() => {
          setUpdateReserva(true);
        }}
        icons={faPenToSquare}
        title={"Editar reserva"}
        subtitle={"Modificar datos de una reserva"}
      />

      <SectionAction
        OpenClose={() => {
          setDeleteReserva(true);
        }}
        icons={faTrash}
        title={"Eliminar una reserva"}
        subtitle={"Eliminar una reserva registrada"}
      />

      {crearReserva && (
        <ReservaCreate
          onClose={() => {
            setCrearReserva(false);
          }}
        />
      )}

      {mostrarReserva && (
        <MostrarReserva
          onClose={() => {
            setMostrarReserva(false);
          }}
        />
      )}

      {updateReserva && (
        <ReservePut
          onClose={() => {
            setUpdateReserva(false);
          }}
        />
      )}

      {deleteReserva && (
        <ReserveDelete
          onClose={() => {
            setDeleteReserva(false);
          }}
        />
      )}

      <Navbar />
      {/* <div className="contenedor-item">
        <SpecularButton
          tint="#d4e0f2"
          lineColor="#00C3FF"
          size="md"
          speed={0.4}
          onClick={() => {
            setMostrarReserva(true);
          }}
        >
          Mostrar reservas
        </SpecularButton>
        {mostrarReserva && (
          <MostrarReserva
            onClose={() => {
              setMostrarReserva(false);
            }}
          />
        )}
        <SpecularButton
          tint="#d4e0f2"
          lineColor="#00C3FF"
          size="md"
          speed={0.4}
          onClick={() => {
            setCrearReserva(true);
          }}
        >
          Crear nueva reserva
        </SpecularButton>
        {crearReserva && (
          <ReservaCreate
            onClose={() => {
              setCrearReserva(false);
            }}
          />
        )}
        <SpecularButton
          tint="#d4e0f2"
          lineColor="#00C3FF"
          size="md"
          speed={0.4}
          onClick={() => {
            setUpdateReserva(true);
          }}
        >
          Actualizar una reserva
        </SpecularButton>
        {updateReserva && (
          <ReservePut
            onClose={() => {
              setUpdateReserva(false);
            }}
          ></ReservePut>
        )}
        <SpecularButton
          tint="#000000"
          lineColor="#00C3FF"
          size="md"
          speed={0.4}
          onClick={() => {
            setDeleteReserva(true);
          }}
        >
          Eliminar reserva
        </SpecularButton>
        {deleteReserva && (
          <ReserveDelete
            onClose={() => {
              setDeleteReserva(false);
            }}
          />
        )}
      </div> */}
    </>
  );
}
