import { ReservaCreate } from "../components/ReservCreate";
import { MostrarReserva } from "../components/ReservGet";
import { useState } from "react";
import { ReservePut } from "../components/ReservPut";

export function ReservePage() {
  const [mostrarReserva, setMostrarReserva] = useState(false);
  const [crearReserva, setCrearReserva] = useState(false);
  const [updateReserva, setUpdateReserva] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setMostrarReserva(true);
        }}
      >
        Mostrar reservas
      </button>
      {mostrarReserva && (
        <MostrarReserva
          onClose={() => {
            setMostrarReserva(false);
          }}
        />
      )}

      <button
        onClick={() => {
          setCrearReserva(true);
        }}
      >
        Crear nueva reserva
      </button>
      {crearReserva && (
        <ReservaCreate
          onClose={() => {
            setCrearReserva(false);
          }}
        />
      )}

      <button
        onClick={() => {
          setUpdateReserva(true);
        }}
      >
        Actualizar una Reserva
      </button>
      {updateReserva && (
        <ReservePut
          onClose={() => {
            setUpdateReserva(false);
          }}
        ></ReservePut>
      )}

      {/*   <button
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
              )} */}
    </>
  );
}
