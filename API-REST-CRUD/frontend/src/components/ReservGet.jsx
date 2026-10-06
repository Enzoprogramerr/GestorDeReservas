import { useState, useEffect } from "react";
import { ErrorCard } from "./ErrorCard";
import { FormaterDate } from "../utils/formaterDate";
import { formaterPrice } from "../utils/formaterPrice";
import { Card } from "../pages/Card";
import { useNavigate } from "react-router-dom";

export function MostrarReserva({ onClose }) {
  const [error, setError] = useState("");
  const [reserva, setReserva] = useState(null);
  const [tipoBusqueda, setTipoBusqueda] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const navigate = useNavigate();

  function searchReservations(dniCliente, idAloj, mes, anio) {
    let params = new URLSearchParams();
    if (dniCliente !== null) {
      params.append("cliente_dni", dniCliente);
    }

    if (idAloj !== null) {
      params.append("alojamiento_id", idAloj);
    }

    if (mes !== null) {
      params.append("mes", mes);
    }

    if (anio !== null) {
      params.append("anio", anio);
    }
    console.log(params.toString());
    return params.toString();
  }

  function getByClient(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dniCliente = formData.get("idCliente");
    const url = searchReservations(dniCliente, null, null, null);
    navigate(`/reserva/todas?${url}`);
  }

  function getByAloj(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const idAloj = formData.get("idAloj");
    const url = searchReservations(null, idAloj, null, null);
    navigate(`/reserva/todas?${url}`);
  }

  function getByMesandAnio(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const mes = formData.get("mes");
    const anio = formData.get("año");
    const url = searchReservations(null, null, mes, anio);
    navigate(`/reserva/todas?${url}`);
  }

  return (
    <>
      <div className="modal-overlay">
        <div className={`edit-client-modal ${visible ? "open" : ""}`}>
          {reserva ? (
            reserva.map((r) => (
              <Card
                key={r.id}
                titulo={`Reserva Id: ${r.id}`}
                lineaDos={r.tipo}
                lineaTres={`DNI: ${r.cliente_dni}`}
                lineaCuatro={`${FormaterDate(r.fecha_inicio)} – 
                                      ${FormaterDate(r.fecha_fin)}`}
                lineaCinco={`Precio total: ${formaterPrice(r.precio_total)}`}
                state={""}
                onEdit={
                  "" /* () => {
                  setPutReserva(true);
                  setReservaSeleccionada(r);
                } */
                }
                onDelete={
                  "" /* () => {
                  setDeleteReserva(true);
                  setReservaSeleccionada(r);
                } */
                }
              />
            ))
          ) : error ? (
            <ErrorCard
              title={"Error en la búsqueda"}
              message={error}
              close={onClose}
            />
          ) : (
            <div className="actions-reserva">
              <button className="btn-close" onClick={onClose}>
                <img
                  className="close-bt"
                  src="/borrar.png"
                  alt="cerrar ventana"
                />
              </button>
              <h2>¿Cómo queres buscar?</h2>
              <div className="search-reserva">
                <button
                  className="actions-reserva-button"
                  onClick={() => {
                    navigate("/reserva/todas");
                  }}
                >
                  Buscar todas las reservas
                </button>

                <button
                  className="actions-reserva-button"
                  onClick={() => setTipoBusqueda("cliente")}
                >
                  Buscar por cliente
                </button>
                {tipoBusqueda === "cliente" && (
                  <form onSubmit={getByClient}>
                    <input
                      type="number"
                      name="idCliente"
                      placeholder="Dni del cliente"
                    />
                    <button type="submit">Buscar</button>
                  </form>
                )}

                <button
                  className="actions-reserva-button"
                  onClick={() => setTipoBusqueda("alojamiento")}
                >
                  Buscar por alojamiento
                </button>
                {tipoBusqueda === "alojamiento" && (
                  <form onSubmit={getByAloj}>
                    <input
                      type="number"
                      name="idAloj"
                      placeholder="Id del alojamiento"
                    />
                    <button type="submit">Buscar</button>
                  </form>
                )}

                <button
                  className="actions-reserva-button"
                  onClick={() => setTipoBusqueda("mes")}
                >
                  Buscar por mes
                </button>
                {tipoBusqueda === "mes" && (
                  <form onSubmit={getByMesandAnio}>
                    <input type="number" name="mes" placeholder="Mes" />
                    <input type="number" name="año" placeholder="Año" />
                    <button type="submit">Buscar</button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
