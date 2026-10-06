import { useState, useEffect } from "react";
import { get } from "../services/reservaService";
import { Card } from "../pages/Card";
import { FormaterDate } from "../utils/formaterDate";
import { ReservePut } from "./ReservPut";
import { ReserveDelete } from "../components/ReservDelete";
import { ErrorCard } from "./ErrorCard";
import { formaterPrice } from "../utils/formaterPrice";
import { Navbar } from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function AllReservation() {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState("");
  const [reservas, setReservas] = useState(null);
  const [putReserva, setPutReserva] = useState(false);
  const [deleteReserva, setDeleteReserva] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAll() {
      let params = new URLSearchParams();
      try {
        const dni = searchParams.get("cliente_dni");
        if (dni !== null) {
          params.append("cliente_dni", `${dni}`);
        }
        const alojamiento = searchParams.get("alojamiento_id");
        if (alojamiento !== null) {
          params.append("alojamiento_id", `${alojamiento}`);
        }
        const mes = searchParams.get("mes");
        if (mes !== null) {
          params.append("mes", `${mes}`);
        }
        const anio = searchParams.get("anio");
        if (anio !== null) {
          params.append("anio", `${anio}`);
        }
        const response = await get(params);

        setReservas(response);
        setError("");
      } catch (error) {
        setReservas(null);
        setError(error.message);
      }
    }
    getAll();
  }, [searchParams]);

  const params = searchParams.toString();

  async function getReservas(params) {
    try {
      const response = await get(params);
      setReservas(response);
    } catch (error) {
      setReservas(null);
      setError(error.message);
    }
  }

  return (
    <>
      {reservas ? (
        reservas.length > 0 ? (
          reservas.map((r) => (
            <Card
              key={r.id}
              titulo={`Reserva Id: ${r.id}`}
              lineaDos={r.tipo}
              lineaTres={`DNI: ${r.cliente_dni}`}
              lineaCuatro={`${FormaterDate(r.fecha_inicio)} – 
                              ${FormaterDate(r.fecha_fin)}`}
              lineaCinco={`Precio total: ${formaterPrice(r.precio_total)}`}
              state={"Próximo"}
              onEdit={() => {
                setPutReserva(true);
                setReservaSeleccionada(r);
              }}
              onDelete={() => {
                setDeleteReserva(true);
                setReservaSeleccionada(r);
              }}
            />
          ))
        ) : (
          <div className="empty-reserve">
            <p>No existen reservas para los parámetros ingresados</p>
            <button
              onClick={() => {
                navigate("/reserva");
              }}
            >
              Volver
            </button>
          </div>
        )
      ) : error ? (
        <ErrorCard
          title={"Error en la consulta"}
          message={error}
          close={() => setError("")}
        />
      ) : null}
      <Navbar />
      {putReserva && (
        <ReservePut
          onClose={() => {
            setPutReserva(false);
          }}
          idReserva={reservaSeleccionada}
          onUpdate={async () => {
            setPutReserva(false);
            await getReservas(params);
          }}
        />
      )}
      {deleteReserva && (
        <ReserveDelete
          onClose={() => {
            setDeleteReserva(false);
          }}
          onUpdate={async () => {
            setDeleteReserva(false);
            await getReservas(params);
          }}
          idReserva={reservaSeleccionada}
        />
      )}
    </>
  );
}
