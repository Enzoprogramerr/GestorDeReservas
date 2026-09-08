import { ReservaCreate } from "../components/ReservCreate";
import { MostrarReserva } from "../components/ReservGet";
import { useState } from "react";

export function ReservePage() {
  const [mostrarReserva, setMostrarReserva] = useState(false);
  const [crearReserva, setCrearReserva] = useState(false);

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

      {/*               <button
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
              )} */}
    </>
  );
}
