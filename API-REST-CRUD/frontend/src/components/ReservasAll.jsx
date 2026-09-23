import { useState, useEffect } from "react";
import { getAll } from "../services/reservaService";
import { Card } from "../pages/Card";
import { FormaterDate } from "../utils/formaterDate";
import { ReservePut } from "./ReservPut";
import { ReserveDelete } from "../components/ReservDelete";
import { formaterPrice } from "../utils/formaterPrice";

export function AllReservation() {
  const [error, setError] = useState("");
  const [reservas, setReservas] = useState(null);
  const [putReserva, setPutReserva] = useState(false);
  const [deleteReserva, setDeleteReserva] = useState(false);

  useEffect(() => {
    async function get() {
      try {
        const response = await getAll();
        setReservas(response);
        setError("");
      } catch (error) {
        setReservas(null);
        setError(error.message);
      }
    }
    get();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <h1 className="title-card">Lista de clientes</h1>
      {reservas &&
        reservas.map((r) => (
          <Card
            key={r.id}
            titulo={`Reserva id:${r.id}`}
            lineaDos={r.tipo}
            lineaTres={`DNI: ${r.cliente_dni}`}
            lineaCuatro={`${FormaterDate(r.fecha_inicio)} – 
                            ${FormaterDate(r.fecha_fin)}`}
            lineaCinco={`Precio total: ${formaterPrice(r.precio_total)}`}
            state={"Próximo"}
            onEdit={() => {
              setPutReserva(true);
            }}
            onDelete={() => {
              setDeleteReserva(true);
            }}
          />
        ))}
      {putReserva && (
        <ReservePut
          onClose={() => {
            setPutReserva(false);
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
    </>
  );
}
